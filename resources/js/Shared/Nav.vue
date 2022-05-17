<template>

    <nav class=" ml-6">
        <ul class="list-disc flex space-x-4 list-inside">


            <NavLink href="/" :active="$page.component == 'Home'" >
                Home
            </NavLink>
            <li><Link href="/settings" class="text-blue-500 hover:underline" :class="{'font-bold underline': $page.component == 'Settings'}">Settings</Link></li>
            <li><Link href="/users" class="text-blue-500 hover:underline" :class="{'font-bold underline': $page.component == 'Users'}">Users</Link></li>
            <li><Link href="/logout" method="post" as="button"
            class="text-blue-500 hover:underline"
            >Logout</Link></li>
        </ul>



    </nav>
</template>

<script>
import NavLink from "./NavLink";

export default {
    components: {NavLink},

};
</script>

