<script setup>
	import { reactive, provide } from "vue"

	import ComboCards from "../components/ComboCards.vue"
	import SectionTitles from "../components/SectionTitles.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const data = reactive({
		titles: {
			titlesStyle: "text-center space-y-2",
			title: {
				title: "Advantage of using our products",
				style: "text-3xl md:text-4xl",
			},
			subTitle: null,
			shortDetails: {
				details: "Far from the countries Vokalia and Consonantia",
				style: "text-x",
			},
		},
		ComboCards: [
			{
				cardStyle: "hover:shadow-none",
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
				cardLink: {
					title: "Learn More",
					style: "text-xs text-blue-500",
					url: "www.detqol.com",
				},
			},
			{
				cardStyle: "hover:shadow-none",
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
				cardLink: {
					title: "Learn More",
					style: "text-xs text-blue-500",
					url: "www.blog.com",
				},
			},
			{
				cardStyle: "hover:shadow-none",
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
				cardLink: {
					title: "Learn More",
					style: "text-xs text-blue-500",
					url: "www.goo.com",
				},
			},
			{
				cardStyle: "hover:shadow-none",
				cardIcon: "RectangleStackIcon",
				cardIconDiv: {
					style: "bg-blue-600 shadow-blue-600/30 h-10 w-10",
				},
				cardTitle: {
					title: "DIGITAL SERVICES",
					style: "",
				},
				cardDetails: {
					details: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
					// style: ,
				},
				cardLink: {
					title: "Learn More",
					style: "text-xs text-blue-500 border-none",
					url: "www.blog.com",
				},
			},
		],
	})
	provide("cardLinkStyle", "text-xs text-blue-500 border-none")
</script>
<template>
	<SectionLayout id="product">
		<SectionTitles v-bind="data['titles']" />
		<div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6 mt-6">
			<div class="h-full transition-all duration-300" v-for="(card, index) in data['ComboCards']" :key="index">
				<ComboCards v-bind="card" />
			</div></div
	></SectionLayout>
</template>
