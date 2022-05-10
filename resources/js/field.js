import IndexField from './field/IndexField'
import DetailField from './field/IndexField'
import FormField from './field/IndexField'

Nova.booting((Vue, router, store) => {
    Vue.component('index-filemanager-field', IndexField);
    Vue.component('detail-filemanager-field', DetailField);
    Vue.component('form-filemanager-field', FormField);
});
