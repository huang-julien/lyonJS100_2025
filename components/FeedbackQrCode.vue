<template>
 
        <img :src="qrCode" />
 </template>

<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode';

const qrCode = useQRCode('https://openfeedback.io/sa97jzlbou7Y34dlrQQf/2025-02-21/woSLnCmJKe9qFRAVxvaW')
</script>
