<script setup>
	import { defineProps, inject } from "vue"

	import Heroicons from "../components/Heroicons.vue"
	import ActionBtn from "./ActionBtn.vue"
	const props = defineProps({
		cardStyle: {
			type: String,
			default: " bg-white border-r-cyan-500 border-r-4  ",
		},
		cardIcon: {
			icon: {
				type: String,
			},
			style: {
				type: String,
			},
		},
		cardIconDiv: {
			style: {
				type: String,
				default: " bg-cyan-500 shadow-cyan-600/40 ",
			},
		},
		cardTitle: {
			title: {
				type: String,
			},
			style: {
				type: String,
			},
		},
		cardDetails: {
			details: {
				type: String,
			},
			style: {
				type: String,
			},
		},
		cardLink: {
			title: String,
			url: String,
			style: String,
		},
	})
	let cardLinkStyle = ""
	if (props.cardLink) {
		cardLinkStyle = " " + inject("cardLinkStyle", "text-black")
	}
</script>
<template>
	<div :class="cardStyle" class="flex items-start gap-x-6 p-5 transition-all duration-300 shadow-gray-200/60 rounded-lg hover:shadow-md">
		<div :class="cardIconDiv['style']" class="rounded-xl shadow-xl shrink-0 flex items-center justify-center text-white overflow-hidden p-2 mt-1">
			<Heroicons :icon="cardIcon ?? null" class="h-5 w-5" />
		</div>
		<div class="space-y-2">
			<p class="text-black" :class="cardTitle['style']">{{ cardTitle["title"] }}</p>
			<p class="text-gray-400 text-sm" :class="cardDetails['style']">{{ cardDetails["details"] }}</p>

			<template v-if="cardLink">
				<ActionBtn :href="cardLink['url']" class="" :class="cardLink['style'] + cardLinkStyle + ' '">{{ cardLink["title"] }}</ActionBtn>
			</template>
		</div>
	</div>
</template>
