<template>

    <Layout>


        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>

    </Layout>


</template>

<script>

import Layout from "../Shared/Layout";

export default {
    components: {Layout },

    props: {
        name: String,
        frameworks: Array
    }
};
</script>

<style scoped>

</style>
