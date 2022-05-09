import VueViewer from 'v-viewer';

Nova.booting((Vue, router, store) => {
    Vue.use(VueViewer);

    Nova.inertia('NovaFilemanager', require('./components/Tool').default);
});
