<template>
    <section class="p-5 bg-gray-300">
        <header class="flex ">
            <h1 class="font-bold text-lg">App</h1>
            <Nav/>
            <p>Welcome Back, {{ username }} </p>
        </header>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uvjmC--UAvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    <section class="p-5">
        <slot/>
    </section>
</template>

<script>
import Nav from "./Nav";
export default {
    name: "Layout",
    components: {
        Nav
    },

    computed: {
        username() {
            return this.$page.props.auth.user.username;
        }
    }

}


</script>

<style scoped>

</style>
