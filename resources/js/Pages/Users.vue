<template>

    <Layout>


        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <div>
            <p style="margin-top: 1400px;">The current time is {{ time }}</p>
            <Link href="/users" preserve-scroll>Refresh</Link>

        </div>
    </Layout>


</template>

<script>

import Layout from "../Shared/Layout";

import { Link} from '@inertiajs/inertia-vue3';
export default {
    components: {Layout , Link},

    props: {
        name: String,
        frameworks: Array,
        time: String
    }
};
</script>

<style scoped>

</style>
