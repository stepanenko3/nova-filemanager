import { createPinia } from 'pinia';
import '../css/tool.css'

import Browser from './components/Browser.vue';
import BrowserModal from './components/BrowserModal.vue';

export default {
    Browser,
    BrowserModal,
    createPinia: () => createPinia(),
}
