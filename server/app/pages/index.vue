<template>
  <div>
    <div>
      <h1>Merci d'avoir répondu ! </h1>
      <p>(Sorry, j'ai pas eu le temps de faire du CSS. Qui aime ça de toute manière ?)</p>
    </div>
    <KeepAlive>
      <WsForm v-if="!c" :answer="(route?.query?.answer as string)" />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
const answers = [
  'nuxt',
  'vue',
  'none',
]
const route = useRoute()

if (!answers.includes(route?.query?.answer as string)) {
  showError(createError({
    statusCode: 404,
  }))
}

const c = useCookie('has_answered', {
  maxAge: 60 * 60 * 24,
})
</script>
