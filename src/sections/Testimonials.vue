<script setup>
	import { ref, reactive } from "vue"

	import Testimonial from "../components/Testimonial.vue"
	import SectionTitles from "../components/SectionTitles.vue"
	import SectionLayout from "../components/SectionLayout.vue"
	import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline"

	import { Virtual, Autoplay, Pagination, Navigation } from "swiper/modules"
	import { Swiper, SwiperSlide } from "swiper/vue"
	const modules = [Navigation, Virtual, Autoplay, Pagination, Navigation]
	const slider = ref(null)
	const onSwiper = (swiper) => {
		slider.value = swiper
	}

	// Import Swiper styles
	import "../../node_modules/swiper/swiper-bundle.css"

	const data = reactive({
		titles: {
			titlesStyle: "",
			title: {
				title: "TESTIMONIALS",
				style: "text-xs md:text-xs text-blue-400 font-semibold",
			},
			subTitle: {
				title: "Our Customers Feedbck",
				style: "text-3xl md:text-4xl",
			},
		},

		testimonials: [
			{
				name: "James Anderon",
				profession: "Facebook, Product Lead",
				image: {
					url: "images/person_1.jpg.webp",
					title: "This is a logo",
				},
				shortDetails: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
			},
			{
				name: "James Anderon",
				profession: "Facebook, Product Lead",
				image: {
					url: "images/person_1.jpg.webp",
					title: "This is a logo",
				},
				shortDetails: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
			},
			{
				name: "James Anderon",
				profession: "Facebook, Product Lead",
				image: {
					url: "images/person_1.jpg.webp",
					title: "This is a logo",
				},
				shortDetails: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
			},
			{
				name: "James Anderon",
				profession: "Facebook, Product Lead",
				image: {
					url: "images/person_1.jpg.webp",
					title: "This is a logo",
				},
				shortDetails: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
			},
		],
	})
</script>
<template>
	<SectionLayout id="testimonial">
		<div class="grid grid-cols-8 gap-y-8 lg:gap-y-0 lg:space-x-16">
			<div class="col-span-full lg:col-span-2 space-y-7 transition-all duration-300">
				<SectionTitles v-bind="data['titles']" />
				<div class="flex items-center gap-1">
					<button class="px-3 py-1 rounded text-black shrink-0 flex items-center justify-center bg-gray-200" @click.stop="slider.slidePrev()">
						<ChevronLeftIcon class="h-6 w-auto" />
					</button>
					<button class="px-3 py-1 rounded text-black shrink-0 flex items-center justify-center bg-gray-200" @click.stop="slider.slideNext()">
						<ChevronRightIcon class="h-6 w-auto" />
					</button>
				</div>
			</div>
			<div class="col-span-full lg:col-span-6 space-y-7 transition-all duration-300">
				<Swiper
					:modules="modules"
					:autoplay="{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
						reverseDirection: false,
					}"
					:pagination="{
						dynamicBullets: true,
						clickable: true,
					}"
					:breakpoints="{
						'768': {
							slidesPerView: 2,
						},
					}"
					:loop="false"
					:freeMode="true"
					@swiper="onSwiper"
					:minimumVelocity="1"
					:slides-per-view="1"
					:space-between="50"
					class="mySwiper"
					virtual
				>
					<!-- <SwiperController :slider="slider" /> -->

					<SwiperSlide v-for="(item, index) in data['testimonials']" :key="index" :virtualIndex="index">
						<Testimonial v-bind="item" :key="index" />
					</SwiperSlide>
				</Swiper>
			</div></div
	></SectionLayout>
</template>
