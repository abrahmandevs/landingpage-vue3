<script setup>
	import { reactive } from "vue"

	import SectionTitles from "../components/SectionTitles.vue"
	import ListWithIcon from "../components/ListWithIcon.vue"
	import Testimonial from "../components/Testimonial.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const data = reactive({
		titles: {
			titlesStyle: "",
			title: {
				title: "ABOUT",
				style: "text-xs md:text-xs text-blue-400 font-semibold",
			},
			subTitle: {
				title: "About Us",
				style: "text-3xl md:text-4xl",
			},
			// shortDetails: {
			// 	details:
			// 		"",
			// 	style: "pt-6   ",
			// },
		},
		listWithIcon: [
			{
				listTitle: {
					title: "Bootstrap",
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
					title: "Tailwind CSS",
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
					title: "JavaScript",
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
					title: "Vuejs",
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
					title: "PHP",
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
					title: "Laravel",
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
		about: "Hello, Iam AR Rahman experienced Junior Full-Stack Web Developer a lot of experience in front-end and back-end development. Proficient in JavaScript, Bootstrap, Tailwind CSS, Alpine.js, Vue.js, PHP, Laravel, Livewire, MySQL, and GitHub. Eager to contribute technical expertise to a dynamic remote team",
		image: {
			iamge: "images/dashboard.jpg.webp",
			url: "https://www.youtube.com/watch?v=mwtbEGNABWU&amp;t=9s",
		},
		counters: [
			{
				count: "59M",
				title: "MEMBERS",
			},
			{
				count: "14",
				title: "TEAM",
			},
		],
		img: "images/dashboard.jpg.webp",
	})
</script>
<template>
	<SectionLayout id="about">
		<div class="grid grid-cols-8 gap-y-6 lg:gap-y-0 lg:gap-x-6">
			<div class="col-span-full lg:col-span-5 transition-all duration-300">
				<img :src="data['img']" alt="" class="group-hover:" />
			</div>
			<div class="col-span-full lg:col-span-3 space-y-7 transition-all duration-300">
				<SectionTitles v-bind="data['titles']" />
				<p class="text-gray-500/90">{{ data["about"] }}</p>
				<div class="space-y-2">
					<ListWithIcon v-for="(list, index) in data['listWithIcon']" :key="index" v-bind="list" />
				</div>

				<div class="flex items-center gap-x-20">
					<div v-for="(item, index) in data['counters']" :key="index">
						<h1 class="text-3xl">{{ item["count"] }}</h1>
						<p class="text-sm text-gray-400 font-medium">{{ item["title"] }}</p>
					</div>
				</div>
			</div>
		</div>
	</SectionLayout>
</template>
