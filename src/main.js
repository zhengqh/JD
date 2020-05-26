import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "styles/reset.css";
import "styles/border.css";
import 'lib-flexible'

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");