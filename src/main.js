import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as elementIcons from '@element-plus/icons-vue';
for (let iconName in elementIcons) {
    app.component(iconName, elementIcons[iconName]);
}

createApp(App).use(store).use(router).mount('#app')
