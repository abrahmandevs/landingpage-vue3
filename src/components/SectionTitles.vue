<script setup>
	import { defineProps } from "vue"

	const props = defineProps({
		titlesStyle: String,
		title: {
			title: {
				type: String,
				default: "This is Title",
			},
			style: {
				type: String,
				default: "text-4xl",
			},
		},
		subTitle: {
			title: {
				type: String,
				default: "This is Sub Title",
			},
			style: {
				type: String,
				default: "text-sm",
			},
		},
		shortDetails: {
			details: {
				type: String,
				default: "This is short details",
			},
			style: {
				type: String,
			},
		},
	})
</script>
<template>
	<div :class="titlesStyle" class="space-y-1">
		<h1 v-if="title" class="text-black md:text-4xl" :class="title['style']">{{ title["title"] }}</h1>
		<p v-if="subTitle" class="" :class="subTitle['style']">{{ subTitle["title"] }}</p>
		<p v-if="shortDetails" class="leading-6 text-base text-gray-500/80" :class="shortDetails['style']">{{ shortDetails["details"] }}</p>

		<!-- <template v-if="titleType == 'small'">
			<p v-if="titleType == 'small'" class="font-semibold text-blue-500 text-sm" :class="title['style']">{{ title["title"] }}</p>
			<h1 class="text-black text-4xl" :class="subTitle['style']">{{ subTitle["title"] }}</h1>
		</template> -->
	</div>
</template>
