<template>
    <section class="p-5 bg-gray-300">
        <header class="flex ">
            <h1 class="font-bold text-lg">App</h1>
            <Nav/>

        </header>
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
    }

}
</script>

<style scoped>

</style>
