Nova.booting((Vue, router, store) => {
    Vue.component('index-filemanager-field', require('./field/IndexField').default);
    Vue.component('detail-filemanager-field', require('./field/DetailField').default);
    Vue.component('form-filemanager-field', require('./field/FormField').default);
});
