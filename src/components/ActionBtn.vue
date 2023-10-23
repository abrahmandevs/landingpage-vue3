<script setup>
	import { defineProps } from "vue"
	const props = defineProps({
		href: {
			type: [String, Object],
		},
		type: {
			type: String,
			default: "button",
		},
		role: {
			type: String,
			default: null,
		},
	})
	const common = "rounded border"
	const saveClass = "bg-blue-600 hover:bg-blue-700 text-gray-50 " + common
	const restoreClass = "bg-green-600 hover:bg-green-700 text-gray-50 " + common
	const updateClass = "bg-red-500 hover:bg-red-700 text-gray-50 " + common
	const cancelClass = "bg-white hover:bg-gray-50 text-gray-700 " + common
	const disabledClass = "bg-gray-200 hover:bg-gray-100 text-gray-700 cursor-not-allowed " + common
	const getRole = props["role"] ?? null
	let roleClass
	switch (getRole) {
		case "save":
			roleClass = saveClass
			break
		case "create":
			roleClass = saveClass
			break
		case "edit":
			roleClass = updateClass
			break
		case "update":
			roleClass = updateClass
			break
		case "delete":
			roleClass = updateClass
			break
		case "cancel":
			roleClass = cancelClass
			break
		case "restore":
			roleClass = restoreClass
			break
		case "disabled":
			roleClass = disabledClass
			break
		default:
			roleClass = common
			break
	}
</script>
<template>
	<component :is="href ? 'a' : 'button'" :href="href ? href : null" :tyep="!href ? type : null" :id="Math.floor(Math.random() * 1e16)" class="inline-flex items-center py-0.5 tracking-wide transition-all duration-300" :class="' ' + roleClass">
		<slot>Button</slot>
	</component>
</template>
