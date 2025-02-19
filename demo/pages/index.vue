<template>
    <div>
        Hello LyonJS !

        <p>secret key: {{ mySecret }}</p>
        
        <NuxtLink to="/island">Aller voir une île</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { mySecret } = useRuntimeConfig()
</script>