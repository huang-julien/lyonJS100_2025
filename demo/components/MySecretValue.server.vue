<template>
    <div>
        <Counter v-if="initialCount" :initial-count />
        <p>My secret value is: {{ mySecret }}</p>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    initialCount: number
}>()

const { mySecret } = useRuntimeConfig()
</script>