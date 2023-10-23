<script setup>
	import { ref, defineProps } from "vue"
	const props = defineProps({
		styleSheet: {
			type: String,
			default: "bg-white",
		},
	})
</script>

<template>
	<div class="mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-20 transition-all duration-700" :class="styleSheet">
		<slot></slot>
	</div>
</template>
