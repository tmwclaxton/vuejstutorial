<template>
    <h1>Home {{ name }} </h1>

    <ul>
        <li v-for="framework of frameworks" v-text="framework"></li>
    </ul>
    <Nav />
</template>

<script>
import { Link} from "@inertiajs/inertia-vue3";
import Nav from '../Shared/Nav';

export default {
    components: { Nav , Link},

    props: {
        name: String,
        frameworks: Array
    }
};
</script>

<style scoped>

</style>
