<script setup>
	import { reactive } from "vue"

	import ComboCards from "../components/ComboCards.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const data = reactive({
		ComboCards: [
			{
				cardStyle: "flex-col",
				cardIcon: "IndicatorIcon",
				cardIconDiv: {
					style: "bg-teal-300 shadow-teal-300/30 h-12 w-12 mb-6",
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
			},
			{
				cardStyle: "flex-col",
				cardIcon: "ArrowPathIcon",
				cardIconDiv: {
					style: "bg-amber-300 shadow-amber-300/30 h-12 w-12 mb-6",
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
			},
			{
				cardStyle: "flex-col",
				cardIcon: "BriefcaseIcon",
				cardIconDiv: {
					style: "bg-rose-500 shadow-rose-500/30 h-12 w-12 mb-6",
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
			},
			{
				cardStyle: "flex-col",
				cardIcon: "RectangleStackIcon",
				cardIconDiv: {
					style: "bg-sky-600 shadow-sky-600/30 h-12 w-12 mb-6",
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
			},
		],
	})
</script>
<template>
	<SectionLayout id="category">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 lg:gap-x-6">
			<div class="h-full transition-all duration-300" v-for="(card, index) in data['ComboCards']" :key="index">
				<ComboCards v-bind="card" />
			</div>
		</div>
	</SectionLayout>
</template>
