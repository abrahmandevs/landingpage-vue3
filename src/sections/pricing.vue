<script setup>
	import { reactive } from "vue"

	import SectionTitles from "../components/SectionTitles.vue"
	import ListWithIcon from "../components/ListWithIcon.vue"
	import ActionBtn from "../components/ActionBtn.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const data = reactive({
		titles: {
			titlesStyle: "text-center space-y-2",
			title: {
				title: "Pricing",
				style: "text-3xl md:text-4xl",
			},
			subTitle: null,
			shortDetails: {
				details: "Pricing for everyone. Choose your plan now!",
				style: "text-x",
			},
		},
		price: [
			{
				packeage: "Free",
				currency: "$",
				amount: "0",
				listWithIcon: [
					{
						listTitle: {
							title: "There live the blind texts",
							style: "text-gray-500/80",
						},
						iconVisibility: {
							status: true,
							style: "text-green-400 stroke-green-400",
						},
						status: {
							status: true,
						},
					},
					{
						listTitle: {
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
				actionsButton: {
					title: "Get Started",
					outerStyle: "border border-blue-400 ",
					style: "",
					url: "#",
				},
			},
			{
				packeage: "Standard",
				currency: "$",
				amount: "19.99",
				listWithIcon: [
					{
						listTitle: {
							title: "There live the blind texts",
							style: "text-gray-500/80",
						},
						iconVisibility: {
							status: true,
							style: "text-green-400 stroke-green-400",
						},
						status: {
							status: true,
						},
					},
					{
						listTitle: {
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
				actionsButton: {
					title: "Get Started",
					outerStyle: "border border-blue-400 ",
					style: "",
					url: "#",
				},
			},
			{
				packeage: "Premium",
				currency: "$",
				amount: "79.99",
				listWithIcon: [
					{
						listTitle: {
							title: "There live the blind texts",
							style: "text-gray-500/80",
						},
						iconVisibility: {
							status: true,
							style: "text-green-400 stroke-green-400",
						},
						status: {
							status: true,
						},
					},
					{
						listTitle: {
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
							title: "Far far away behind the word",
							style: "text-gray-500/80",
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
				actionsButton: {
					title: "Get Started",
					outerStyle: "border border-blue-400 ",
					style: "e",
					url: "www.gmail.com",
				},
			},
		],
	})
</script>
<template>
	<SectionLayout id="price" styleSheet="bg-gray-100/50">
		<SectionTitles v-bind="data['titles']" />
		<div class="grid grid-cols-1 md:grid-cols-3 gap-y-6 lg:gap-y-0 gap-3 lg:gap-x-6 mt-6 lg:mx-28">
			<div v-for="(item, index) in data['price']" :key="index" :class="index % 2 != 0 ? 'shadow-slate-300' : 'shadow-slate-200/30'" class="flex flex-col bg-white space-y-6 rounded-3xl p-6 md:p-12 shadow-xl transition-all duration-300">
				<h2 class="text-center text-2xl md:text-3xl">{{ item["packeage"] }}</h2>
				<h2 class="text-center text-2xl md:text-4xl text-blue-500">
					<sup class="text-xl">{{ item["currency"] }}</sup
					>{{ item["amount"] }}
				</h2>
				<div class="space-y-3 flex-auto">
					<ListWithIcon v-for="(list, index) in item['listWithIcon']" :key="index" v-bind="list" />
				</div>
				<ActionBtn class="whitespace-nowrap mt-auto px-8 py-3 text-xs text-blue-400 rounded-full mx-auto border-blue-500 hover:bg-blue-500 hover:text-white" :class="index % 2 != 0 ? 'bg-blue-500 text-white' : ''">Start With</ActionBtn>
			</div>
		</div>
	</SectionLayout>
</template>
