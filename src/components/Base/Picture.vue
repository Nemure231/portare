<script>

export default {
  inject: ['provProfile'],
}
</script>

<template>
  <div
    class="relative rounded-tl-lg z-20 flex-none bg-main 2xl:h-72 xl:h-58 lg:h-60 md:h-58 h-52 2xl:w-72 xl:w-58 lg:w-60 md:w-58 w-52">
    <div class="mt-2 ml-2 rounded-tl-lg bg-center bg-cover inset-0 absolute "
      :style="{ backgroundImage: 'url(' + provProfile.img + ')' }">

    </div>
  </div>

</template>

