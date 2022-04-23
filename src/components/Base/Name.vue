<script>
  export default {
    inject: ['provProfile'],
  }
</script>

<template>
  <nav
      class="z-50 sticky top-0">
    <div v-text="provProfile.name"
      class="bg-dark dark:bg-secondary lg:text-2xl md:text-2xl text-xl font-bold text-main flex justify-center items-center h-12">
      </div>
  </nav>

</template>


