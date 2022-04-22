<script>
export default {
}
</script>

<template>
  <div class=" flex justify-center items-center">
    <router-link v-if="!this.$route.name" to="/skill"
      class="bg-dark dark:border dark:border-warning transition ease-in-out duration-500 hover:scale-105 font-semibold py-1.5 lg:w-60 md:w-60 w-72 text-center px-5 rounded-lg text-warning">
      Skills
    </router-link>
  </div>
</template>
