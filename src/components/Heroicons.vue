<script setup>
	import { ref, defineProps } from "vue"

	import { EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon, RocketLaunchIcon, ArrowPathIcon, BriefcaseIcon, RectangleStackIcon } from "@heroicons/vue/20/solid"
	const props = defineProps({
		icon: {
			type: String,
		},
	})
</script>
<template>
	<EnvelopeIcon v-if="icon == 'EnvelopeIcon'" class="shrink-0 h-5 w-5" />
	<GlobeAltIcon v-else-if="icon == 'GlobeAltIcon'" class="shrink-0 h-5 w-5" />
	<MapPinIcon v-else-if="icon == 'MapPinIcon'" class="shrink-0 h-5 w-5" />
	<PhoneIcon v-else-if="icon == 'PhoneIcon'" class="shrink-0 h-5 w-5" />
	<RocketLaunchIcon v-else-if="icon == 'RocketLaunchIcon'" class="shrink-0 h-5 w-5" />
	<ArrowPathIcon v-else-if="icon == 'ArrowPathIcon'" class="shrink-0 h-5 w-5" />
	<RectangleStackIcon v-else-if="icon == 'RectangleStackIcon'" class="shrink-0 h-5 w-5" />
	<BriefcaseIcon v-else-if="icon == 'BriefcaseIcon'" class="shrink-0 h-5 w-5" />

	<!-- svg -->
	<svg v-else-if="icon == 'IndicatorIcon'" class="shrink-0 h-5 w-5" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
		<path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
	</svg>
	<div v-else>N/A</div>
</template>
