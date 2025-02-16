<template>
  <div>
    Envoi de la réponse
  </div>
</template>

<script setup lang="ts">
import { useWebSocket } from '@vueuse/core'

const props = defineProps<{
  answer: string
}>()
 
const url = 'wss://' + location.host + '/api/_ws'
const { send } = useWebSocket(url)
const c = useCookie('has_answered', {
  maxAge: 60 * 60 * 24,
})
function submit(v: string) {
  send(v) 
  c.value = '1'
}

submit(props.answer)
</script>
