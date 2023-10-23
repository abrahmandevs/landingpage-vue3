<script setup>
	import { reactive } from "vue"
	import SectionTitles from "../components/SectionTitles.vue"
	import ActionBtn from "../components/ActionBtn.vue"
	import SectionLayout from "../components/SectionLayout.vue"

	const data = reactive({
		titles: {
			titlesStyle: "",
			title: {
				title: "Make Awasome Web Application For Your Business",
				style: "text-3xl md:text-5xl font-semibold",
			},
			// subTitle:,
			shortDetails: {
				details: "Another cool free html css template by Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
				style: "leading-6 text-sm text-gray-500",
			},
		},
		actionsBtn: [
			{
				title: "SEE Featuers",
				url: "https://github.com/arrahman-dev",
			},
			{
				title: "pricing",
				url: "#price",
			},
		],
		img: "images/market-launch-pana.svg",
	})
</script>
<template>
	<SectionLayout id="home">
		<div class="flex items-center justify-center lg:h-scren">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center">
				<div class="space-y-8 transition-all duration-300 order-2 md:order-1">
					<SectionTitles class="space-y-8" v-bind="data['titles']" />
					<div class="space-x-1">
						<ActionBtn v-for="(item, index) in data['actionsBtn']" :key="index" :href="item['url']" v-bind="item" class="font-semibold uppercase px-7 py-3 rounded-full text-xs text-blue-600 border border-blue-600 g-blue-600 hover:text-white hover:bg-blue-600">{{ item["title"] }}</ActionBtn>
					</div>
				</div>
				<div class="transition-all duration-300 order-1 md:order-2">
					<img :src="data['img']" alt="" class="" />
				</div>
			</div>
		</div>
	</SectionLayout>
</template>
