<script>
import { Starport } from 'vue-starport'
import SubNav from './SubNav.vue'
import Item from './Item.vue'
export default {
  components: { SubNav, Starport, Item },
  inject: ['provPortfolios'],
  emits: ['childReload'],
  methods: {
    reloadOnce(){
      this.$emit('childReload');
    },
  },
  mounted(){
    this.reloadOnce();
  }
}
</script>

<template>
  <nav class="sticky top-0 z-50">
    <Starport port="portfolio-nav" class="h-12 duration-1000 transition-all">
      <SubNav />
    </Starport>
  </nav>

  <main class="w-full flex flex-col justify-center items-center">

    <section class="flex-1 my-20 relative">

      <div class="flex flex-col justify-center flex-wrap h-auto items-center">

        <div class="relative z-20 flex-1 lg:max-w-4xl md:max-w-2xl max-w-max mx-3">
        
          <div 
            class="break-words flex flex-nowrap flex-col items-center justify-center font-semibold 
          border-black rounded-xl space-y-12">
            <Item />
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

