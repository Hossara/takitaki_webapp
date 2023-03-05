<script lang="ts" setup>
const props = defineProps<{
    type?: "button" | "submit"
}>()
</script>

<template>
    <button :type="type" class="p-3 bg-primary text-white font-bold rounded-md text-xl hover:shadow-lg"><slot/></button>
</template>