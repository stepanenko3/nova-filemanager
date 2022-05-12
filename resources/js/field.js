import IndexField from './field/IndexField'
import DetailField from './field/DetailField'
import FormField from './field/FormField'

Nova.booting((Vue, router, store) => {
    Vue.component('index-filemanager-field', IndexField);
    Vue.component('detail-filemanager-field', DetailField);
    Vue.component('form-filemanager-field', FormField);
});
