---
# You can also start simply with 'default'
theme: ./gold-navy
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: true
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
--- 

# Tout sur les NuxtIslands
Julien Huang

<img src="/assets/island_scene.svg" />

---

<div class="flex flex-col mx-auto text-center">

# Hello 👋 Je m'appelle Julien

## Et je suis fan d'open-source

<div>

Mainteneur:  

nuxt/nuxt  
@nuxt/scripts  

Créateur:  

nitro-opentelemetry  
nitro-applicationinsights  
nuxt-applicationinsights  

</div>

<div>
<logos-github-icon /> @huang-julien
</div>
<div>
<logos-bluesky /> julienhuang-dev.bsky.social
</div>
<div>
<logos-linkedin-icon /> julien-huang
</div>
</div>

---

# Mes passe-temps

<img v-drag="[326,111,338,190]" class="rounded-lg" src="/assets/multitask.jpg" />


<img v-drag="[641,135,385,217,19]" class="rounded-lg" src="/assets/multitask_2.jpg" />


<img v-drag="[16,229,333,187,-12]" class="rounded-lg" src="/assets/music.jpg" />

<img v-drag="[439,356,185,185]" class="rounded-lg" src="/assets/my_wrist.jpg" />

<p v-drag="[417,306,318,24]">Mon poignet et mes doigts:</p>


---

# Qui a déjà utilisé Nuxt ou Vue ?

---

# Nuxt <logos-nuxt-icon /> C'est quoi ?

- Meta-framework autour de VueJS et de NitroJS
- Complètement hackable
- Un démarrage 0 brain si vous connaissez déjà VueJS

---

# Les meta-framework à hydratation

---

<Suspense>
  <Nuxters />
</Suspense>

---
layout: intro
---

# Petit récap de l'histoire du frontend

---

# L'ère du tout HTML

<img class="w-100 mx-auto rounded-xl" src="/assets/yeet_html.png" />
 
---

# L'ère des SPA

<img  class="w-100 mx-auto rounded-xl" src="/assets/frameworks-everywhere.jpg"  />

---

# Les meta-frameworks

<img  class="w-100 mx-auto rounded-xl" src="/assets/the_rising_of_metaframeworks.jpg"  />

---

# AstroJS et l'architecture en îlot

---

# NextJS et les server components

---

# Et NuxtJS dans tout ça ?

---
layout: intro
---

# Comment ça marche ?

---

# Un composant et une API



---

---
layout: intro
---

# Avantage des islands sur Nuxt

---

# Une exécution uniquement côté serveur

::window{filename="components/island/YourIsland.vue"}

```vue
<template>
 <!---->
</template>

<script setup lang="ts">
const { somePrivateKey } = useRuntimeConfig()
const { ssrContext } = useNuxtApp()
setResponseHeader(ssrContext.event, 'hello', 'VueAmsterdam !')
</script>
```

::

---

# 0 javascript envoyé au navigateur

<img src="/assets/islands-chunk.jpg" class="w-1/2 mx-auto" >

---
layout: intro
---

# Limites

---

# Certaines features ne sont compatible qu'avec les Single File Components (*.vue)

---

# Statut des islands

---
