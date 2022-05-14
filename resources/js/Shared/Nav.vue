<template>

    <nav>
        <Link href="/settings">Settings</Link>
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
    </nav>
</template>

<script>

import { Link} from '@inertiajs/inertia-vue3';
export default {
    components: {Link},

};
</script>

