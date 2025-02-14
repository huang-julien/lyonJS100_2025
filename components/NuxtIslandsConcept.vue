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

                <div class="bg-black text-white py-20">
                    Main content
                </div>
                <div class="bg-green-500">
                    Carousel
                </div>

            </div>
        </div>

        <div class="bg-black text-white">
            Footer
        </div>
    </div>
</template>

<style lang="scss" scoped>
div {
    @apply p-4 grid border border-white gap-5;
}
</style>