<script lang="ts" setup>
const props = defineProps<{
    type?: "button" | "submit",
    size?: "large" | "medium"
}>()
</script>

<template>
    <button :type="type" class="p-3 bg-primary text-white font-bold rounded-md text-xl hover:shadow-lg"
    :class="{ 'p-2 text-[16px]': size === 'medium' }">
        <slot/>
    </button>
</template>