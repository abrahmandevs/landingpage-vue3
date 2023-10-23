<script setup>
	import Header from "./components/Header.vue"
	import Home from "./sections/Home.vue"
	import Services from "./sections/Services.vue"
	import CategoriesCarousel from "./sections/CategoriesCarousel.vue"
	import Categories from "./sections/Categories.vue"
	import pricing from "./sections/pricing.vue"
	import Products from "./sections/Products.vue"
	import Testimonials from "./sections/Testimonials.vue"
	import AboutUs from "./sections/AboutUs.vue"
	import News from "./sections/News.vue"
	import GetInTouch from "./sections/GetInTouch.vue"
	import Footer from "./components/Footer.vue"
</script>

<template>
	<div class="">
		<Header />
		<home />
		<Services />
		<CategoriesCarousel />
		<Categories />
		<pricing />
		<Products />
		<Testimonials />
		<AboutUs />
		<News />
		<GetInTouch />
		<Footer />
	</div>
</template>
<style>
	/* .Vue-Toastification__toast {
		width: 50%;
	} */
	@media only screen and (max-width: 450px) {
		.Vue-Toastification__container .Vue-Toastification__toast {
			width: 50% !important;
			margin-left: auto !important;
			margin-right: 0% !important;
		}
	}
</style>
