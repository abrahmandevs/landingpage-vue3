import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // base: '/' not working on github action page
    // base: '/' not working on github action page
    base: '/landingpage-vue3'
})
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
};

