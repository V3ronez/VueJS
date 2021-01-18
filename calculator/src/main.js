import Vue from 'vue'
import App from './App'

new Vue ({
    render: h => h(App)
    // // render(createElement) { //vai renderizar um component do vue na pag
    //     return createElement(App)
    // }
}).$mount("#app")