<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
  </WelcomeItem>

<!--  <WelcomeItem>-->
<!--    <template #icon>-->
<!--      <ToolingIcon />-->
<!--    </template>-->
<!--    <template #heading>Tooling</template>-->

<!--    <a href="https://on.cypress.io/component" target="_blank" rel="noopener">Cypress Component Testing</a-->
<!--    >.-->

<!--    <br />-->

<!--    More instructions are available in <code>README.md</code>.-->
<!--  </WelcomeItem>-->

<!--  <WelcomeItem>-->
<!--    <template #icon>-->
<!--      <EcosystemIcon />-->
<!--    </template>-->
<!--    <template #heading>Ecosystem</template>-->

<!--    Get official tools and libraries for your project:-->
<!--    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>-->
<!--    a visit.-->
<!--  </WelcomeItem>-->

<!--  <WelcomeItem>-->
<!--    <template #icon>-->
<!--      <CommunityIcon />-->
<!--    </template>-->
<!--    <template #heading>Community</template>-->

<!--    Got stuck? Ask your question on-->
<!--    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@js</a>-->
<!--    twitter account for latest news in the Vue world.-->
<!--  </WelcomeItem>-->

<!--  <WelcomeItem>-->
<!--    <template #icon>-->
<!--      <SupportIcon />-->
<!--    </template>-->
<!--    <template #heading>Support Vue</template>-->

<!--    As an independent project, Vue relies on community backing for its sustainability. You can help-->
<!--    us by-->
<!--    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.-->
<!--  </WelcomeItem>-->
</template>
