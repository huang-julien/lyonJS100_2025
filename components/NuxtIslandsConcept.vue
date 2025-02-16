<template>
    <div class="html bg-green-500">
        <div class="bg-green-500 text-white">
            Header
        </div>

        <div class="grid-cols-2">
            <div class="bg-green-500 text-white">
                Sidebar
            </div>

            <div class="bg-green-500 text-white border-none !p-0">

                <div class="text-white py-20" :class="{ 'bg-black': clicks > 0 }">
                    Main content
                </div>
                <div class="bg-green-500">
                    Carousel
                </div>

            </div>
        </div>

        <div class=" text-white"  :class="{ 'bg-black': clicks > 0 }">
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