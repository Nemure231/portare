<script>
export default {
  inject: ['provProfile'],
  data() {
    return {
    }
  }
}
</script>

<template>
  <div v-text="provProfile.desc"
    class="text-primary text-justify dark:text-light flex-1 relative 2xl:text-2xl xl:text-xl text-lg lg:px-10 md:px-10 sm:px-14 px-3 py-4">

  </div>
</template>
