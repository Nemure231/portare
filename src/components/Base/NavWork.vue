<script>
export default {
}
</script>

<template>
  <div class="  flex justify-center items-center">
    <router-link v-if="!this.$route.name" to="/work"
      class="bg-dark py-1.5 dark:border transition ease-in-out duration-500 hover:scale-105 dark:border-warning font-semibold lg:w-60 md:w-60 w-72 text-center px-5 rounded-lg text-warning">
      Works
    </router-link>
  </div>
</template>