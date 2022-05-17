<template>


        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <div>
            <p style="margin-top: 1400px;">The current time is {{ time }}</p>
            <Link href="/users" preserve-scroll>Refresh</Link>

        </div>


</template>

<script >

export default {

    time: String
};

</script>

<style scoped>

</style>
