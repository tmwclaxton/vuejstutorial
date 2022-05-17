import { createApp, h } from 'vue'
import { createInertiaApp , Link} from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./Shared/Layout";

createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;
        if (!page.layout) {
            page.layout = Layout;
        }
        return page;
        },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)

            .mount(el)
    },
})

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 100,

    // The color of the progress bar.
    color: '#29d',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
})
