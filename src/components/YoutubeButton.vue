<template>
    <a :href="href" target="_blank" class="btn btn-primary">
        <slot></slot>
    </a>
</template>
<script setup>
    const props = defineProps({
        href : String,
    })
</script>
