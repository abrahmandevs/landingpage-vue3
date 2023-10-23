import { createApp } from 'vue'
import '../node_modules/swiper/swiper-bundle.min.css'

// toast notification plugins
import 'vue-toast-notification/dist/theme-sugar.css';
import "vue-toastification/dist/index.css";
import App from './App.vue'
// import Toast from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
const options = { position: POSITION.BOTTOM_RIGHT };
createApp(App)
    .use(Toast, options)
    .mount('#app')
