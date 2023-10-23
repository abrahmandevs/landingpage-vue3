t
<script setup>
	import { reactive, ref } from "vue"

	import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel, Dialog, DialogPanel, TransitionRoot, TransitionChild, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue"

	import { Bars3Icon, XMarkIcon, ChevronRightIcon } from "@heroicons/vue/24/outline"
	import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid"

	import ActionBtn from "../components/ActionBtn.vue"

	const mobileMenuOpen = ref(false)

	const data = reactive({
		actionsBtn: [
			{
				title: "Sign in",
				url: "#",
			},
			{
				title: "Register",
				url: "#",
			},
		],
		categorys: [
			{ url: "#home", title: "Home", status: "action" },
			{
				title: "Menu",
				status: "action",
				items: [
					{ url: "#product", title: "Product", status: "action" },
					{ url: "#category", title: "Catetory", status: "action" },
					{ url: "#testimonial", title: "Testimonial", status: "action" },
					{ url: "#news", title: "News", status: "action" },
					{
						title: "Menu Items",
						status: "action",
						subItems: [
							{ url: "#", title: "Items 1", status: "action" },
							{ url: "#", title: "Items 2", status: "action" },
						],
					},
					{ url: "#footer", title: "Footer", status: "action" },
				],
			},
			{ url: "#services", title: "Services", status: "action" },
			{ url: "#price", title: "Price", status: "action" },
			{ url: "#about", title: "About", status: "action" },
			{ url: "#contact", title: "Contact", status: "action" },
		],
	})
</script>

<template>
	<header class="bg-gray-100 mx-auto px-4 sm:px-8 md:px-16 py-4 sticky inset-0 z-50">
		<nav class="mx-auto flex items-center justify-between" aria-label="Global">
			<div class="grow flex items-center">
				<a href="/" class="-m-1.5 p-1.5 text-xl font-semibold text-black hover:text-black mr-4">LoGo</a>
				<PopoverGroup class="hidden md:block">
					<!-- first loop  -->
					<template v-for="(catetory, index) in data['categorys']">
						<a v-if="!catetory['items']" :href="catetory['url']" class="text-sm text-gray-600 px-4 py-2 hover:text-black transition-all duration-300">{{ catetory["title"] }}</a>

						<Menu v-if="catetory['items']" as="div" class="relative inline-block text-left">
							<div>
								<MenuButton class="flex items-center gap-x-1 w-full px-4 py-2 text-sm font-semibold text-gray-600 border-0 focus:outline-none">
									{{ catetory["title"] }}
									<ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
								</MenuButton>
							</div>
							<transition
								enter-active-class="transition ease-out duration-100"
								enter-from-class="transform opacity-0 scale-95"
								enter-to-class="transform opacity-100 scale-100"
								leave-active-class="transition ease-in duration-75"
								leave-from-class="transform opacity-100 scale-100"
								leave-to-class="transform opacity-0 scale-95"
							>
								<MenuItems class="absolute left-0 z-10 mt-1 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<!-- secound loop -->
									<div class="">
										<template v-for="(items, index) in catetory['items']">
											<MenuItem v-if="!items['subItems']" as="div" v-slot="{ active }">
												<a :href="items['url']" class="w-full block text-sm text-gray-600 px-4 py-2 hover:text-black transition-all duration-300">{{ items["title"] }}</a>
											</MenuItem>
											<div v-if="items['subItems']">
												<Menu as="div" class="relative w-full">
													<div slot="{false}">
														<MenuButton :class="[false ? 'bg-gray-200 text-gray-900' : 'text-gray-700', 'flex justify-between items-center gap-x-1 w-full px-4 py-2 text-sm font-semibold border-0 focus:outline-none']">
															{{ items["title"] }}
															<span class="ml-6 flex items-center">
																<ChevronDownIcon v-if="true ? false : true" class="h-5 w-5" />
																<ChevronRightIcon v-else class="h-5 w-5" aria-hidden="true" />
															</span>
														</MenuButton>
													</div>
													<transition
														enter-active-class="transition ease-out duration-100"
														enter-from-class="transform opacity-0 scale-95"
														enter-to-class="transform opacity-100 scale-100"
														leave-active-class="transition ease-in duration-75"
														leave-from-class="transform opacity-100 scale-100"
														leave-to-class="transform opacity-0 scale-95"
													>
														<MenuItems class="absolute -right-40 z-10 -mt-10 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
															<!-- third loop -->
															<div>
																<template v-for="(item, index) in items['subItems']">
																	<MenuItem v-slot="{ active }">
																		<a :href="item['url']" class="w-full block text-sm text-gray-600 px-4 py-2 hover:text-black transition-all duration-300">{{ item["title"] }}</a>
																	</MenuItem>
																</template>
															</div>
														</MenuItems>
													</transition>
												</Menu>
											</div>
										</template>
									</div>
								</MenuItems>
							</transition>
						</Menu>
					</template>
				</PopoverGroup>
				<!-- user / auth -->
				<div class="hidden lg:flex lg:flex-1 md:justify-end md:gap-x-1">
					<ActionBtn v-for="(item, index) in data['actionsBtn']" :key="index" :href="item['url']" v-bind="item" class="border text-sm rounded-full px-6 py-1.5 transition-all duration-300" :class="index == 1 ? 'bg-blue-500 text-white ' : 'text-gray-600 hover:border-black hover:text-black'">{{
						item["title"]
					}}</ActionBtn>
				</div>
			</div>
			<!-- open mobile sidebar -->
			<div class="flex md:hidden">
				<button type="button" class="inline-flex items-center justify-center rounded-md-m-0.5 text-gray-700 focus:outline-none border-0 p-1.5" @click="mobileMenuOpen = true">
					<Bars3Icon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
		</nav>

		<TransitionRoot as="template" :show="mobileMenuOpen">
			<Dialog as="div" class="relative z-50 lg:hidden bg-blue-500" @close="mobileMenuOpen = false">
				<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
					<div class="fixed inset-0 bg-black bg-opacity-25" />
				</TransitionChild>

				<div class="bg-green-40 fixed inset-0 z-40 flex justify-end">
					<TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
						<DialogPanel class="w-5/6 sm:w-3/6 relative overflow-y-auto bg-white border shadow-xl">
							<div class="sticky flex items-center justify-between p-5">
								<a href="/" class="-m-1.5 p-1.5 text-xl font-semibold text-black hover:text-black mr-4">LoGo</a>
								<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
									<XMarkIcon class="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div class="p-1.5">
								<div class="divide-y divide-gray-500/10">
									<div class="mb-3 space-y-1">
										<!-- first loop -->
										<template v-for="(catetory, index) in data['categorys']">
											<a v-if="!catetory['items']" :href="catetory['url']" class="px-4 block text-sm text-gray-600 py-2 cursor-pointer hover:text-blue-700 hover:bg-gray-300 rounded transition-all duration-300">{{ catetory["title"] }}</a>
											<Disclosure v-if="catetory['items']" v-slot="{ open }">
												<DisclosureButton as="div" class="px-4 flex justify-between items-center text-sm text-gray-600 py-2 cursor-pointer hover:text-blue-700 hover:bg-gray-300 rounded transition-all duration-300">
													<span>{{ catetory["title"] }}</span>
													<ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
												</DisclosureButton>
												<DisclosurePanel class="px-4 pb-2 text-sm text-gray-500 space-y-1">
													<!-- secound loop -->
													<template v-for="(items, index) in catetory['items']">
														<a v-if="!items['subItems']" :href="items['url']" class="px-4 block text-sm text-gray-600 py-2 cursor-pointer hover:text-blue-700 hover:bg-gray-300 rounded transition-all duration-300">{{ items["title"] }}</a>
														<Disclosure v-if="items['subItems']" v-slot="{ open }">
															<DisclosureButton as="div" class="px-4 flex justify-between items-center text-sm text-gray-600 py-2 cursor-pointer hover:text-blue-700 hover:bg-gray-300 rounded transition-all duration-300">
																<span>{{ items["title"] }}</span>
																<ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
															</DisclosureButton>
															<DisclosurePanel class="px-4 pb-2 text-sm text-gray-500 space-y-1">
																<!-- third loop -->
																<a v-for="(item, index) in items['subItems']" :key="index" :href="item['url']" class="px-2.5 py-1.5 block w-full hover:text-blue-700 hover:bg-gray-300 rounded transition-all duration-300">{{ item["title"] }}</a>
															</DisclosurePanel>
														</Disclosure>
													</template>
												</DisclosurePanel>
											</Disclosure>
										</template>
									</div>
									<div class="mt-2 space-x-1 p-4">
										<ActionBtn
											v-for="(item, index) in data['actionsBtn']"
											:key="index"
											:href="item['url']"
											v-bind="item"
											class="border text-sm rounded-full px-6 py-1.5 transition-all duration-300"
											:class="index == 1 ? 'bg-blue-500 text-white ' : 'text-gray-600 hover:border-black hover:text-black'"
											>{{ item["title"] }}</ActionBtn
										>
									</div>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</TransitionRoot>
	</header>
</template>
