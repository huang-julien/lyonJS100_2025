<template>
    <div class="html bg-black">
        <div class="text-white" :class="{ 'bg-green-500': clicks > 0 }">
            Header
        </div>

        <div class="grid-cols-2">
            <div class="bg-black-500 text-white">
                Sidebar
            </div>

            <div class="bg-black-500 text-white border-none !p-0">
                <div>
                    Main content
                </div>
                <div :class="{ 'bg-green-500': clicks > 0 }">
                    Carousel
                </div>
            </div>
        </div>

        <div class="bg-black-500 text-white">
            Footer
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const clicks = useSlideContext().$clicks
</script>

<style lang="scss" scoped>
div {
    @apply p-4 grid border border-white gap-5;
}
</style>