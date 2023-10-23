<script setup>
	import { ref, reactive } from "vue"
	import SectionTitles from "../components/SectionTitles.vue"
	import ActionBtn from "../components/ActionBtn.vue"
	import { ArrowRightIcon } from "@heroicons/vue/20/solid"
	import SectionLayout from "../components/SectionLayout.vue"
	const data = reactive({
		titles: {
			titlesStyle: "text-center space-y-2",
			title: {
				title: "Our News",
				style: "text-3xl md:text-4xl",
			},
			subTitle: null,
			shortDetails: {
				details: "Far from the countries Vokalia and Consonantia",
				style: "text-x",
			},
		},
		cards: [
			{
				name: "AR Rahman",
				activeStatus: "Jun 14, 2020",
				profession: "Digital Service, 4 min read",
				img: {
					image: "images/person_1.jpg.webp",
					title: "This is a logo",
				},
				shortDetails: "Far far away behind the word mountains far from the countries",
				link: "#",
			},
			{
				name: "James Khan",
				activeStatus: "Jun 14, 2020",
				profession: "Digital Service, 4 min read",
				img: {
					image: "images/person_2.jpg.webp",
					title: "This is a logo",
				},
				shortDetails: "Far far away behind the word mountains far from the countries",
				link: "#",
			},
			{
				name: "James Anderon",
				activeStatus: "Jun 14, 2020",
				profession: "Digital Service, 4 min read",
				img: {
					image: "images/person_3.jpg.webp",
					title: "This is a logo",
				},
				shortDetails: "Far far away behind the word mountains far from the countries",
				link: "#",
			},
		],
	})
</script>
<template>
	<SectionLayout id="news" styleSheet="bg-gray-100/50">
		<SectionTitles v-bind="data['titles']" />
		<div class="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 mt-6">
			<div class="p-4 md:p-8 space-y-6 h-full bg-white rounded transition-all duration-300 hover:-translate-y-2" v-for="(card, index) in data['cards']" :key="index">
				<div class="flex gap-x-3">
					<div class="shrink-0 h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white">
						<img class="h-full w-full object-cover" :src="card['img'] ? card['img']['image'] : 'images/person_1.jpg.webp'" :alt="card['img'] ? card['img']['title'] : ''" />
					</div>
					<div class="">
						<h4 class="text-m font-semibold">{{ card["name"] }}</h4>
						<p class="text- text-gray-400">{{ card["activeStatus"] }}</p>
					</div>
				</div>
				<p class="text-xs text-gray-400">{{ card["profession"] }}</p>
				<ActionBtn href="#" class="border-none px-0 text-2xl hover:text-blue-500">{{ card["shortDetails"] }}</ActionBtn>
				<ActionBtn :href="card['link']" class="border-none hover:bg-blue-500 w-16 rounded group">
					<ArrowRightIcon class="group-hover:text-white group-hover:translate-x-4 h-6 w-6 transition-all duration-300" />
				</ActionBtn>
			</div>
		</div>
	</SectionLayout>
</template>
