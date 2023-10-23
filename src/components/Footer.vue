<script setup>
	import { reactive } from "vue"
	import ActionBtn from "../components/ActionBtn.vue"
	const data = reactive({
		titles: {
			titlesStyle: "text-center space-y-2",
			title: {
				title: "Get In Touch",
				style: "",
			},
			subTitle: null,
			shortDetails: {
				details: "Far from the countries Vokalia and Consonantia",
				style: "text-x",
			},
		},
		abouts: {
			title: "about Launch",
			shortDetails: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
			socialLinks: {
				title: "Projects",
				links: [
					{ url: "https://www.facebook.com/arrahman.devs", icon: "images/facebook.png", alt: "facebook" },
					{ url: "https://twitter.com/arrahman_dev", icon: "images/twitter.png", alt: "twitter" },
					{ url: "https://www.linkedin.com/in/arrahman-dev/", icon: "images/linkedin.png", alt: "linkedin" },
					{ url: "https://github.com/arrahman-dev", icon: "images/github.png", alt: "github" },
				],
			},
		},
		categoriesLink: [
			{
				catetgory: "Projects",
				links: [
					{ url: "#", title: "La Lega Stadium" },
					{ url: "#", title: "France Building" },
					{ url: "#", title: "22 New Homes" },
					{ url: "#", title: "Manage Center" },
					{ url: "#", title: "Sports Hall" },
				],
			},
			{
				catetgory: "Services",
				links: [
					{ url: "#", title: "Architect" },
					{ url: "#", title: "Interior Design" },
					{ url: "#", title: "Landscape Design" },
					{ url: "#", title: "Consultancy" },
				],
			},
			{
				catetgory: "Contact",
				links: [
					{ url: "#", title: "Dhaka, Bangladesh" },
					{ url: "tel://8801909055573", title: "8801909055573" },
					{ url: "tel://8801909055583", title: "8801909055583" },
					{ url: "mailto://arrdevs.info@gmail.com", title: "arrdevs.info@gmail.com" },
				],
			},
		],
	})
</script>

<template>
	<div id="footer" class="mx-auto px-4 sm:px-8 md:px-16 py-8 md:pt-20 md:pb-6 bg-gray-100 transition-all duration-700">
		<div class="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-6 md:space-x-16 lg:space-x-28 mt-12">
			<!-- socialLinks -->
			<div class="md:col-span-4 space-y-8">
				<h4 class="">{{ data["abouts"]["title"] }}</h4>
				<p class="text-gray-400 text-sm">{{ data["abouts"]["shortDetails"] }}</p>
				<h4 class="">{{ data["abouts"]["socialLinks"]["title"] }}</h4>
				<div class="flex items-center gap-1">
					<ActionBtn target="_blank" v-for="(item, index) in data['abouts']['socialLinks']['links']" :key="index" :href="item['url']" class="shrink-0 justify-center bg-gray-500 h-8 w-8 rounded-full hover:bg-blue-400">
						<img :src="item['icon']" alt="" />
					</ActionBtn>
				</div>
			</div>
			<!-- contact -->
			<div class="md:col-span-8">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="space-y-2 md:space-y-8" v-for="(category, index) in data['categoriesLink']" :key="index">
						<h4 class="font-semibold">{{ category["catetgory"] }}</h4>
						<div class="space-y-1.5">
							<ActionBtn v-for="(item, index) in category['links']" :key="index" :href="item['url']" class="w-full border-none text-sm text-gray-500">{{ item["title"] }}</ActionBtn>
						</div>
					</div>
				</div>
			</div>
		</div>
		<p class="pt-6 md:pt-12 text-center text-sm">
			Copyright ©{{ new Date().getFullYear() }} All rights reserved | This template is made with by
			<a target="_blank" href="https://github.com/arrahman-dev" class="font-semibold text-green-600">AR Rahman</a>
		</p>
	</div>
</template>
