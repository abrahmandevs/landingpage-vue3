<script setup>
	import { computed, reactive, ref, watch } from "vue"
	import useValidate from "@vuelidate/core"
	import { required, email, minLength, maxLength, between } from "@vuelidate/validators"
	import { useToast } from "vue-toastification"

	import SectionTitles from "../components/SectionTitles.vue"
	import ActionBtn from "../components/ActionBtn.vue"
	import Heroicons from "../components/Heroicons.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const toast = useToast()
	const data = reactive({
		titles: {
			titlesStyle: "text-center space-y-2",
			title: {
				title: "Get In Touch",
				style: "text-3xl md:text-4xl",
			},
			subTitle: null,
			shortDetails: {
				details: "Far from the countries Vokalia and Consonantia",
				style: "text-x",
			},
		},
		contactTitle: "Contact Info",
		contacts: [
			{ icon: "MapPinIcon", title: "Dhaka, Bangladesh" },
			{ icon: "PhoneIcon", url: "tel://8801909055573", title: "8801909055573" },
			{ icon: "PhoneIcon", url: "tel://8801909055583", title: "8801909055583" },
			{ icon: "EnvelopeIcon", url: "mailto://arrdevs.info@gmail.com", title: "arrdevs.info@gmail.com" },
			{ icon: "GlobeAltIcon", url: "https://github.com/arrahman-dev", title: "GitHub" },
		],
	})
	/*
	 * from here form validation
	 * use vuelidate
	 * use toast vue-toastification
	 */
	const contactForm = ref({
		fName: "",
		lName: "",
		email: "",
		message: "",
	})
	const rulse = computed(() => {
		return {
			fName: { required, minLength: minLength(2), maxLength: maxLength(50) },
			lName: { required, minLength: minLength(2), maxLength: maxLength(50) },
			email: { required, email },
			message: { required, minLength: minLength(20), maxLength: maxLength(1000) },
		}
	})
	const state = useValidate(rulse, contactForm)
	// watch(contactForm.value, (ne) => {
	// 	state.value.$validate()
	// 	for (let index = 0; index < state.value.$errors.length; index++) {
	// 		toast.error(state.value.$errors[index].$message)
	// 	}
	// })

	function formSubmit() {
		state.value.$validate()
		if (state.value.$errors.length > 0) {
			for (let index = 0; index < state.value.$errors.length; index++) {
				toast.error(state.value.$errors[index].$message)
			}
		} else {
			toast.success("Send Successfull")
			contactForm.value = {}
			state.value.$reset()
		}
	}
</script>
<template>
	<SectionLayout id="contact">
		<SectionTitles v-bind="data['titles']" />
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-6 md:space-x-20 mt-12">
			<form @submit.prevent="formSubmit" class="col-span-full md:col-span-7">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="space-y-3">
						<label for="first_name" class="text-gray-400">First name</label>
						<input
							v-model="contactForm['fName']"
							type="text"
							id="first_name"
							name="first_name"
							class="form-input w-full h-12 px-0 bg-white border-0 border-b border-black text-gray-600 py-1 outline-none focus:outline-none focus:ring-offset-0 focus: focus:border-blue-500 focus:ring-0 text-lg ransition-all duration-300"
						/>
					</div>
					<div class="space-y-3">
						<label for="last_name" class="text-gray-400">Last name</label>
						<input v-model="contactForm['lName']" type="text" id="last_name" name="last_name" class="form-input w-full h-12 px-0 bg-white border-0 border-b border-black text-gray-600 py-1 outline-none focus:border-blue-500 focus:ring-0 text-lg ransition-all duration-300" />
					</div>
					<div class="col-span-full space-y-3">
						<label for="email" class="text-gray-400">Email addrss</label>
						<input v-model="contactForm['email']" type="text" id="email" name="email" class="form-input w-full h-12 px-0 bg-white border-0 border-b border-black text-gray-600 py-1 outline-none focus:border-blue-500 focus:ring-0 text-lg ransition-all duration-300" />
					</div>
					<div class="col-span-full space-y-3">
						<label for="message" class="text-gray-400">Message</label>
						<textarea v-model="contactForm['message']" rows="3" type="text" id="message" name="message" class="form-input leading-5 w-full px-0 bg-white border-0 border-b border-black text-gray-600 py-1 outline-none focus:border-blue-500 focus:ring-0 text-lg ransition-all duration-300"></textarea>
					</div>
					<ActionBtn class="mb-4 font-normal px-3 py-2.5 rounded-full justify-center w-40 text-sm uppercase" role="save">Send Message</ActionBtn>
				</div>
			</form>
			<div class="col-span-full md:col-span-5 space-y-4">
				<h4 class="font-semibol text-xl mb-8">{{ data["contactTitle"] }}</h4>
				<template v-for="(item, index) in data['contacts']">
					<div v-if="!item['url']" class="flex items-center gap-2" :key="index">
						<Heroicons :icon="item['icon']" />
						<p class="">{{ item["title"] }}</p>
					</div>
					<ActionBtn v-if="item['url']" :href="item['url']" class="w-full border-0 flex items-center gap-2 hover:text-blue-400" :key="index">
						<Heroicons :icon="item['icon']" />
						<p class="">{{ item["title"] }}</p>
					</ActionBtn>
				</template>
			</div>
		</div>
	</SectionLayout>
</template>
