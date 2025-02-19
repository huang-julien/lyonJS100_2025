<template>
    <div>
        <button @click="increment">Increment</button>
        <p>Count: {{ count }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    initialCount: number
}>()

const count = ref(props.initialCount || 0)

const increment = () => {
    count.value++
}
</script>