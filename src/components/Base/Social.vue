<script>
export default {
  inject: ['provProfile'],
  methods: {
    removeSvgAttr(e){
      const w = e.match(/width="[^\"]*"/);
      const h = e.match(/height="[^\"]*"/);
      const f = e.match(/fill="[^\"]*"/);
      return e.replace(w, '').replace(h, '').replace(f, '')
              .replace(/^<svg /, '<svg fill="currentColor" ')
    }
  }
}
</script>

<template>
  <transition appear enter-active-class="duration-700 ease-out" enter-from-class="transform opacity-0 -translate-x-20"
    enter-to-class="opacity-100 translate-x-0">

    <div
      class="absolute z-10 flex flex-col flex-nowrap lg:space-y-9 md:space-y-9 space-y-8 inset-y-0 lg:-left-10 md:-left-6 sm:left-12 left-6 top-12">

      <div class="aboslute duration-300 hover:scale-125 ease-in-out transform 2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7"
        v-for="sl in provProfile.social" :key="sl.id">

        <a class="z-20 text-primary overflow-hidden dark:text-main" :href="sl.url" v-html="removeSvgAttr(sl.icon)">

        </a>
      </div>

    </div>
  </transition>

</template>
