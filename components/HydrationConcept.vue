<template>
    <div class="text-lg font-bold">
        <h2>Côté server</h2>
        <div v-click class="text-center grid grid-cols-6 h-30">
            <div>
                Rendu HTML
                <div class="server">
                </div>
            </div>
        </div>
        <h2>Côté client</h2>
        <div class="text-center grid grid-cols-6 h-30">
            <div></div>
            <div v-click class="h-auto">
                HTML Parsing
                <div class="uninteractive">
                </div>
            </div>
            <div v-click class="h-auto col-span-2">
                chargement du JS + execution
                <div class="uninteractive">
                </div>
            </div>
            <div  v-click class="h-auto col-span-2">
                Page intéractive
                <div class="interactive">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
div {
    display: grid;
    gap: 1rem;
}
.server {
    background: repeating-linear-gradient(45deg,
            tomato 0px,
            tomato 2px,
            transparent 2px,
            transparent 9px);
    @apply border border-white rounded-lg p-5 mt-auto;
}

.uninteractive {
    background: repeating-linear-gradient(45deg,
            grey 0px,
            grey 2px,
            transparent 2px,
            transparent 9px);
    @apply border border-white rounded-lg p-5 mt-auto;
}

.interactive {
    background: repeating-linear-gradient(45deg,
            green 0px,
            green 2px,
            transparent 2px,
            transparent 9px);
    @apply border border-white rounded-lg p-5 mt-auto;
}
</style>