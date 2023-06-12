import { createPinia } from 'pinia'
import '../css/tool.css'
import Tool from './pages/Tool.vue'
import IndexField from './field/IndexField.vue'
import DetailField from './field/DetailField.vue'
import FormField from './field/FormField.vue'

Nova.booting((app, store) => {
    app.use(createPinia())

    Nova.inertia('NovaFileManager', Tool)

    app.component('index-file-manager-field', IndexField);
    app.component('detail-file-manager-field', DetailField);
    app.component('form-file-manager-field', FormField);
})
