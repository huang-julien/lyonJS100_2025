<template>
    <div class="grid grid-cols-3 gap-30 text-center">
        <div class="flex flex-col items-center">
            <img :src="nuxt" />
            {{ counts.nuxt }}
        </div>
        <div class="flex flex-col items-center">
            <img :src="vue" />
            {{ counts.vue }}
        </div>
        <div class="flex flex-col items-center">
            <img :src="none" />
            {{ counts.none }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { useWebSocket, } from '@vueuse/core';
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { watch, ref } from 'vue'

const host = 'localhost:3000'
const tunnelHost = 'https://https://worth-indicator-the-wallpapers.trycloudflare.com/.trycloudflare.com'
const url = ('ws://') + host + '/api/_ws'

const nuxt = useQRCode(tunnelHost + '/?answer=nuxt')
const vue = useQRCode(tunnelHost + '/?answer=vue')
const none = useQRCode(tunnelHost + '/?answer=none')

const counts = ref({
    nuxt: 0,
    vue: 0,
    none: 0,
})
const { status, data, send, open, close } = useWebSocket(url, {
    onMessage(ws, e) {

        if (e.data === 'nuxt') counts.value.nuxt++
        if (e.data === 'vue') counts.value.vue++
        if (e.data === 'none') counts.value.none++
    }
})
</script>