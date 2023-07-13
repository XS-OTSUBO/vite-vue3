// import { createApp } from 'vue'
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import './style.css'

// コンポーネント
import App from './App.vue'
import TroisExample from "@/components/TroisExample.vue"
import HelloWorld from "@/components/HelloWorld.vue"

// const app = createApp({
//   data() {
//     return {
//       message:"hello vue3 + vite !!"
//     }
//   },
//   components: {
//     "trois-example": TroisExample,
//     "hello-world": HelloWorld,
//   },
// })
// app.mount("#app")

createApp(App).mount('#app')