<script setup>
	import { defineProps } from "vue"
	const props = defineProps({
		shortDetails: {
			type: String,
			default: "Short Detals",
		},
		image: {
			url: String,
			title: String,
		},
		name: {
			type: String,
			default: "User Name",
		},
		profession: {
			type: String,
			default: "profession",
		},
	})
</script>
<template>
	<div>
		<div class="space-y-4">
			<p class="italic">“{{ shortDetails }}”</p>
			<div class="flex gap-x-3">
				<div class="h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white">
					<img class="h-full w-full object-cover" :src="image ? image['url'] : ''" :alt="image ? image.title : ''" />
				</div>
				<div class="space-y-[0.5rem]">
					<h1 class="text-sm">{{ name }}</h1>
					<p class="text-xs text-gray-500">{{ profession }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
