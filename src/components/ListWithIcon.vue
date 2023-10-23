<script setup>
	import { defineProps } from "vue"
	import { CheckIcon } from "@heroicons/vue/20/solid"
	const props = defineProps({
		listTitle: {
			title: {
				type: String,
				default: "No Data",
			},
			style: {
				type: String,
			},
		},
		iconVisibility: {
			status: {
				tyep: Boolean,
				default: false,
			},
			style: {
				type: String,
				default: "stroke-rose-400 text-green-600",
			},
		},
		status: {
			status: Boolean,
			default: false,
			style: {
				type: String,
			},
		},
	})
	const iconCheck = props["iconVisibility"] != null ? props["iconVisibility"]["status"] ?? null : null
	const defaultStyle = iconCheck != props["status"]["status"] ? "text-gray-400" : "text-gray-700"
</script>
<template>
	<div class="flex items-center gap-x-2">
		<template v-if="iconVisibility">
			<div v-if="iconCheck == true" class="stroke-gray-300" :class="defaultStyle">
				<CheckIcon :class="iconVisibility['style']" class="stroke-1 shrink-0 h-5 w-5" aria-hidden="true" />
			</div>
			<div :class="defaultStyle">
				<p class="" :class="listTitle['style']">{{ listTitle["title"] }}</p>
			</div>
		</template>

		<div v-else :class="status['status'] != true ? defaultStyle : 'text-gray-700'">
			<p class="" :class="listTitle['style']">{{ listTitle["title"] }}</p>
		</div>
	</div>
</template>
