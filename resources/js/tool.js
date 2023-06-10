import { createPinia } from 'pinia'
import '../css/tool.css'
import Tool from './pages/Tool.vue'
import IndexField from './field/IndexField.vue'
import DetailField from './field/DetailField.vue'
import FormField from './field/FormField.vue'

Nova.booting((app, store) => {
    app.use(createPinia())

    Nova.inertia('NovaFilemanager', Tool)

    app.component('index-filemanager-field', IndexField);
    app.component('detail-filemanager-field', DetailField);
    app.component('form-filemanager-field', FormField);
})
