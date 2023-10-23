<script setup>
	import { reactive } from "vue"

	import ListWithIcon from "../components/ListWithIcon.vue"
	import Testimonial from "../components/Testimonial.vue"
	import SectionTitles from "../components/SectionTitles.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const data = reactive({
		titles: {
			titlesStyle: "",
			title: {
				title: "DIGITAL SERVICES",
				style: "text-xs md:text-xs text-blue-400 font-semibold",
			},
			subTitle: {
				title: "Selling Digital Services",
				style: "text-3xl md:text-4xl",
			},
			shortDetails: {
				details: "Far far away, behind the word mountains, far from the countries",
				style: "pt-6",
			},
		},
		listWithIcon: [
			{
				listTitle: {
					title: "CMS",
					// style: "",
				},
				iconVisibility: {
					status: true,
					style: "stroke-green-400 text-green-600",
				},
				status: {
					status: true,
				},
			},
			{
				listTitle: {
					title: "Headless CMS",
					// style: "",
				},
				iconVisibility: {
					status: true,
					style: "stroke-green-400 text-green-600",
				},
				status: {
					status: true,
				},
			},
			{
				listTitle: {
					title: "Web Application",
					// style: "text-gray-400",
				},
				iconVisibility: {
					status: true,
					style: "stroke-green-400 text-green-600",
				},
				status: {
					status: true,
				},
			},
			{
				listTitle: {
					title: "Back-End Development",
					// style: "text-gray-400",
				},
				iconVisibility: {
					status: true,
					style: "stroke-green-400 text-green-600",
				},
				status: {
					status: true,
				},
			},
			{
				listTitle: {
					title: "Front-End Development",
					// style: "text-gray-400",
				},
				iconVisibility: {
					status: true,
					style: "stroke-green-400 text-green-600",
				},
				status: {
					status: true,
				},
			},
		],

		testimonial: {
			name: "James Anderon",
			profession: "Facebook, Product Lead",
			image: {
				url: "images/person_1.jpg.webp",
				title: "This is a logo",
			},
			shortDetails: "a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
		},

		image: {
			iamge: "images/dashboard.jpg.webp",
			url: "https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s",
		},
	})
</script>
<template>
	<SectionLayout id="services">
		<div class="grid grid-cols-8 gap-y-6 lg:gap-y-0 lg:gap-x-6">
			<div class="col-span-full lg:col-span-3 space-y-7 transition-all duration-300">
				<SectionTitles v-bind="data['titles']" />
				<div class="space-y-2">
					<ListWithIcon v-for="(list, index) in data['listWithIcon']" :key="index" v-bind="list" />
				</div>
				<Testimonial v-bind="data['testimonial']" />
			</div>
			<a :href="data['image']['url'] ?? ''" class="col-span-full lg:col-span-5 transition-all duration-300">
				<div class="relative bg-white shadow-xl shadow-gray-400/20 p-3 group rounded">
					<img :src="data['image']['iamge']" alt="" class="group-hover:brightness-[0.9] transition-all duration-300" />
					<svg class="absolute inset-0 m-auto bg-white shadow-md flex items-center justify-center h-12 w-12 p-2 rounded-full" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
					</svg>
					<!-- <img :src="data['img']" alt="" class="group-hover:" /> -->
				</div>
			</a>
		</div>
	</SectionLayout>
</template>
