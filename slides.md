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

   <img v-drag="[36,171,225,225]" src="/assets/pfp.jpg" class="rounded-full" />
 

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
layout: intro
---

# Qui a déjà utilisé Nuxt ou Vue ?


<QrCodes />

---

# Nuxt <logos-nuxt-icon /> C'est quoi ?

- Meta-framework autour de VueJS et de NitroJS
- Permet d'effectuer du rendu serveur d'application VueJS
- Permet de générer une application VueJS en statique
- Prise en main ultra facile si vous connaissez déjà VueJS

<NuxtTimeline v-click class="my-10 mx-auto" />

<v-clicks>
 
<v-drag-arrow pos="232,379,179,-97"/>


- Vue 2 à Vue 3
- webpack -> vite
- edge functions

</v-clicks>

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

<div class="grid grid-cols-2">

<img  class="w-100 mx-auto rounded-xl" src="/assets/frameworks-everywhere.jpg"  />

<iframe class="w-full h-full" src="https://dayssincelastjsframework.com/" />

</div>

---

# Les meta-frameworks

<img class="w-100 mx-auto rounded-xl" src="/assets/meta_framework.jpg"  />

---

# Les meta-framework à hydratation

<img src="/assets/hydration.jpg" class="rounded-lg" />

---

<HydrationConcept />

---

# AstroJS et l'architecture en îlot

<img class="w-100 mx-auto rounded-xl" src="/assets/island-house.jpg" />


---
clicks: 1
---

<AstroIsland />

---

# NextJS et les server components

```json
1:"$Sreact.fragment"
2:I[28072,[],""]
3:I[83838,[],""]
4:I[77985,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"Analytics"]
5:I[18248,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"PrefetchCrossZoneLinksProvider"]
6:I[85448,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"Header"]
7:I[95832,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"Provider"]
8:I[29736,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2219","static/chunks/2219-5610d843b126fd56.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5071","static/chunks/5071-85efc86d75402ad5.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9214","static/chunks/9214-531e07eaaa2670c9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2557","static/chunks/2557-41088a85d9550a18.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","975","static/chunks/app/(next-site)/page-9202f96ffb785a80.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"HydrateMeLater"]
9:I[39766,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"default"]
a:I[37702,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6540","static/chunks/6540-1f4950da2692fc19.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2557","static/chunks/2557-41088a85d9550a18.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3603","static/chunks/3603-2075a1d0018bb524.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6532","static/chunks/app/(next-site)/blog/%5Bslug%5D/page-37dc8588f5fb5b99.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"Image"]
b:I[18248,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"Link"]
c:"$Sreact.suspense"
d:I[86965,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"ExternalFooterLink"]
e:I[84359,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"NewsletterForm"]
f:I[47872,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"ThemeSwitcher"]
10:I[73912,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"Cmdk"]
11:I[13424,["3512","static/chunks/3512-48f4639ad2744d13.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","7702","static/chunks/7702-0a70c8ef2997ed32.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","6364","static/chunks/6364-7a1638a5902aea7a.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4037","static/chunks/4037-f2121c39603eb045.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9212","static/chunks/9212-6e2677aa3d051e46.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4043","static/chunks/4043-aed29ce15cbdd3cb.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","4063","static/chunks/4063-187d514e73165dd9.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3225","static/chunks/3225-b66a5534d3147539.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","3821","static/chunks/3821-92e7121fefeae732.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","8930","static/chunks/8930-0ffde1521bc7d2a7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2420","static/chunks/2420-e3a3169d5d8a51bc.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","2827","static/chunks/2827-0d66f58921d6aad7.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1078","static/chunks/1078-5d0db22043488ff6.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","672","static/chunks/672-50a45730e69fa7b8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","9062","static/chunks/9062-5878a1aaf4a04cac.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","5604","static/chunks/5604-41d61533581d92c3.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu","1080","static/chunks/app/(next-site)/layout-8df3987bf8f782a8.js?dpl=dpl_2sDfm4YVQxQFYpjhGbD23kv1rdXu"],"TrackPageView"]
```

<!--

content type: x-text/component

-->

---

<Window>

````md magic-move

```tsx
// Server Component
import Expandable from './Expandable';

async function Notes() {
  const notes = await db.notes.getAll();
  return (
    <div>
      {notes.map(note => (
        <Expandable key={note.id}>
          <p note={note} />
        </Expandable>
      ))}
    </div>
  )
}
```

```tsx {*|2}
// Client Component
"use client"

export default function Expandable({children}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
      >
        Toggle
      </button>
      {expanded && children}
    </div>
  )
}
```

````

</Window>
---
layout: intro
---

# Et NuxtJS dans tout ça ?

---
clicks: 1
---

# Les Nuxt Islands

<NuxtIslandsConcept />

---

# Comment utiliser un island ?

```bash
|- components
|  |-- islands
|  |   |-- MyIsland.vue
|  |-- MyServerComponent.server.ts
```

<Spacer />

::window{filename="components/island/YourIsland.vue"}

````md magic-move

```html
<template>
  <div>
    <NuxtIsland name="MyIsland" />
  </div>
</template>
```

```html
<template>
  <div>
    <MyServerComponent />
  </div>
</template>
```

````

::

---
layout: intro
---

# La différence entre les Islands et les server components avec Nuxt

---

<div class="grid grid-cols-2 mb-10">
<div>

# `NuxtIsland`

- bas niveau
- appelé avec `<NuxtIsland>`
- complètement configurable

</div>
<div>

# Les server components

- Haut niveau
- appelé normalement comme tout autre composant
- les props sont typé

</div>
</div>

::window{filename="/pages/islands.vue"}

````md magic-move

```html
<template>
  <div>
    <NuxtIsland name="ArticleContent" :props="{ name: 'how-to-learn-nuxt' }" lazy />
  </div>
</template>
```
```html
<template>
  <div>
    <ArticleContent name="how-to-learn-nuxt"  />
  </div>
</template>
```

````

::

---
layout: intro
---

# Comment ça marche ?

---

# Endpoint et un composant

- `/__nuxt_island`
  - Créé une application Vue et effectue le rendu d'un composant unique
  - Stringify le rendu et renvoie une réponse JSON
- `NuxtIsland`
  - Reçoit une props `name` et appelle l'endpoint
  - A chaque réponse, `NuxtIsland` effectue le rendu du contenu en statique

<Spacer />
<Spacer />
<Spacer />

<div class="grid grid-cols-2">
<div>
<img src="/assets/nuxt_island_req.png" class="h-50 mx-auto"/>

</div>

<div>

```ts twoslash
// ---cut-start---
interface NuxtIslandSlotResponse {
  props: Array<unknown>
  fallback?: string
}

interface NuxtIslandClientResponse {
  html: string
  props: unknown
  chunk: string
  slots?: Record<string, string>
}
type Head = any
// ---cut-end---

interface NuxtIslandResponse {
  id?: string
  html: string
  head: Head
  props?: Record<string, Record<string, any>>
  components?: Record<string, NuxtIslandClientResponse>
  slots?: Record<string, NuxtIslandSlotResponse>
}

```

</div>
</div>

---

# Vue fonctionne sur le principe du VDom


<img src="/assets/render_pipeline.png" class="mx-auto " >

---


````md magic-move

```ts

{
  type: 'div',
  props: {
    id: 'hello'
  },
  children: [
    {
      type: 'div',
      children: [
        {
          type: 'div',
          children: [
            {
              type: 'div',
              children: [
                /// ...
              ]
            },
            'Hello Lyon JS 100 !'
          ]
        }
      ]
    }
  ]
}

```

```ts

{
  type: 'NuxtIsland',
  props: {
    id: 'hello'
  },
  children: [
    {
      type: 'StaticVNode',
      content: `<div><div/> Hello Lyon JS 100 !</div>`
    }
  ]
}

```

````

---
layout: intro
---

# Avantage des islands sur Nuxt

---

# Une exécution uniquement côté serveur

<div class="mt-auto" />

::window{filename="components/island/YourIsland.vue"}

```html
<template>
  <Expandable v-for="note in notes" :note="note">
    <p>{{ note }}</p>
  </Expandable>
</template>

<script setup lang="ts">

const { somePrivateKey } = useRuntimeConfig()
const notes = await db.notes.getAll();
const { ssrContext } = useNuxtApp()
setResponseHeader(ssrContext!.event, 'hello', 'LyonJS !')
</script>
```

::

---

# 0 javascript envoyé au navigateur

<img src="/assets/islands-chunk.jpg" class="w-1/2 mx-auto" >

---
layout: intro
---

# Statut des features dans les NuxtIslands

---

# Le rendu statique avec les slots

### Statut: stable

::window{filename="nuxt.config.ts"}

```ts
export default defineNuxtConfig({
  experimental: {
    // activé par défaut
    componentIslands: true
  }
})
```
::

```html
<template>
  <NuxtIsland name="AllNotes" id="some-id">
    <NuxtLink to="/notes/some-id">
      See note
    </NuxtLink>
  </NuxtIsland>
</template>
```


---

# Charger des composants à l'intérieur des Islands

#### Statut: experimental

::window{filename="nuxt.config.ts"}

```ts
export default defineNuxtConfig({
  experimental: {
    componentIslands: {
      selectiveClient: true
    }
  }
})
```
::

````md magic-move


```md
const notes = await db.notes.getAll();
 
<Expandable v-for="note in notes" :note="note" client:load>
  <p>{{ note }}</p>
</Expandable>
```

```html
<template>
  <Expandable v-for="note in notes" :note="note" nuxt-client>
    <p>{{ note }}</p>
  </Expandable>
</template>

<script setup lang="ts">

const { somePrivateKey } = useRuntimeConfig()
const notes = await db.notes.getAll();
const { ssrContext } = useNuxtApp()
setResponseHeader(ssrContext!.event, 'hello', 'LyonJS !')
</script>
```

````


---

# Avoir une page complète en island

### Statut: stable

::window{filename="/pages/[uid].server.vue"}

```html
<template>
  <div>
    <UPageBody prose>
      <ContentRenderer :value="page" />
    </UPageBody>  
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData(props.path, () => queryContent(props.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```

::

---
layout: intro
---

# Est-ce que c'est le future ? 

---

<img class="rounded-xl mx-auto"  src="/assets/no_hype.jpg" />

---
layout: intro
---

# Merci ! ❤️


<div>
<logos-github-icon /> @huang-julien
</div>
<div>
<logos-bluesky /> julienhuang-dev.bsky.social
</div>
<div>
<logos-linkedin-icon /> julien-huang
</div>

<FeedbackQrCode class="mx-auto mt-10" />
 