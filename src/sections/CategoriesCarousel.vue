<script setup>
	import { ref, reactive, computed, watch } from "vue"

	import ComboCards from "../components/ComboCards.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const data = reactive({
		ComboCards: [
			{
				id: 1,
				cardIcon: "IndicatorIcon",
				cardIconDiv: {
					style: "bg-teal-300 shadow-teal-300/30 h-10 w-10",
				},
				cardTitle: {
					title: "DIGITAL SERVICES",
					style: "",
				},
				cardDetails: {
					details: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
					// style: ,
				},
				cardLink: null,
				image: {
					img: "images/dashboard.jpg.webp",
					url: "https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s",
				},
			},
			{
				id: 2,
				cardIcon: "ArrowPathIcon",
				cardIconDiv: {
					style: "bg-amber-300 shadow-amber-300/30 h-10 w-10",
				},
				cardTitle: {
					title: "DIGITAL SERVICES",
					style: "",
				},
				cardDetails: {
					details: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
					// style: ,
				},
				cardLink: null,
				image: {
					img: "images/unsplash-1.jpg",
					url: "https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s",
				},
			},
			{
				id: 3,
				cardIcon: "BriefcaseIcon",
				cardIconDiv: {
					style: "bg-rose-500 shadow-rose-500/30 h-10 w-10",
				},
				cardTitle: {
					title: "DIGITAL SERVICES",
					style: "",
				},
				cardDetails: {
					details: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
					// style: ,
				},
				cardLink: null,
				image: {
					img: "images/unsplash-3.jpg",
					url: "https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s",
				},
			},
			{
				id: 4,
				cardIcon: "RectangleStackIcon",
				cardIconDiv: {
					style: "bg-sky-600 shadow-sky-600/30 h-10 w-10",
				},
				cardTitle: {
					title: "DIGITAL SERVICES",
					style: "",
				},
				cardDetails: {
					details: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
					// style: ,
				},
				cardLink: null,
				image: {
					img: "images/team-nocoloco-KC-Rc51oTNM-unsplash.jpg",
					url: "https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s",
				},
			},
		],
		image: {
			img: "images/team-nocoloco-KC-Rc51oTNM-unsplash.jpg",
			url: "https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s",
		},
	})
	const thumb = ref("images/team-nocoloco-KC-Rc51oTNM-unsplash.jpg")
	function thumbImg(card, key) {
		thumb.value = card
		activeIndex.value = key
	}

	const activeIndex = ref(0)

	setInterval(() => {
		activeIndex.value = (activeIndex.value + 1) % data["ComboCards"].length
	}, 3000)

	watch(activeIndex, () => {
		thumb.value = data["ComboCards"][activeIndex.value]["image"]["img"]
	})
</script>
<template>
	<SectionLayout styleSheet="bg-gray-100/50">
		<div class="grid grid-cols-8 gap-y-6 lg:gap-y-0 lg:gap-x-6">
			<div class="col-span-full lg:col-span-3 space-y-7 md:order-2 h-full transition-all duration-300">
				<div class="space-y-2">
					<ComboCards :cardStyle="index == activeIndex ? 'cursor-pointer border-r-sky-600 border-r-4 shadow-md' : ''" @click="thumbImg(card['image']['img'], index)" v-for="(card, index) in data['ComboCards']" :key="index" v-bind="card" />
				</div>
			</div>
			<a :href="data['image']['url']" class="col-span-full lg:col-span-5 md:order-1 transition-all duration-300">
				<div class="h-[200px] sm:h-[300px] md:h-[500px] relative bg-white shadow-xl shadow-gray-400/20 p-3 group rounded overflow-hidden">
					<img :src="thumb" alt="" class="w-full h-full object-cover brightness-[0.97] transition-all duration-700 transform translate-x-0" />
					<svg class="absolute inset-0 m-auto bg-white shadow-md flex items-center justify-center h-12 w-12 p-2 rounded-full" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
					</svg>
				</div>
			</a>
		</div>
	</SectionLayout>
</template>
