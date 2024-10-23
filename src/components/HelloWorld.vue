<script setup>
import prisma from '/data/prisma.js'
  const props = defineProps({
    msg: {
      type: String,
      required: true
    }
  });
  const emits = defineEmits(["update:msg"]);
  const updateMsg = () => {
    emits('update:msg', "e.target.value")
  }

  async function getUsers() {
    console.log("hell");
    const users = await prisma.user.findMany();
    console.log(users);
    // return users;
  }

  function chgMsg(){
    this.msg += ' === '
  }


</script>

<template>
  <div class="greetings">
    <h1 class="green" @click="getUsers">{{ props.msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
