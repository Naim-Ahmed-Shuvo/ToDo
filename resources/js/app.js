

require('./bootstrap');

window.Vue = require('vue');
// Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import App from './vue/app.vue';

const app = new Vue({
    el: '#app',
    components: {
        App,
    }
});
