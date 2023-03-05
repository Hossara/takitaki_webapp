<script lang="ts" setup>

definePageMeta({ layout: "auth" })
useHead({ title: "TakiTaki - Login" })
</script>

<template>
    <div id="index" class="flex w-full justify-center">
        <form action="post" class="pl-3 pt-3 pr-3 pb-4 shadow-md rounded-md bg-white max-w-[400px] w-full text-center">
            <TkInput class="w-full mb-4" placeholder="Email or phone number"/>

            <TkInput class="w-full mb-4" placeholder="Password" type="password"/>

            <TkButton class="mb-6 w-full">Login</TkButton>

            <NuxtLink to="/" class="hover:underline text-primary text-sm block mb-6">Forgot password?</NuxtLink>

            <hr class="mb-4">

            <TkButton class="w-full mb-2 !bg-secondary">Create new account</TkButton>
        </form>
    </div>
</template>