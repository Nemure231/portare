<script>
import { Starport } from 'vue-starport'
import SubNav from './SubNav.vue'
import Item from './Item.vue'
export default {
  components: { SubNav, Starport, Item },
  inject: ['provSkills'],
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
  <nav class="sticky top-0 z-50 ">
    <Starport port="skill-nav" class="h-12 duration-1000 transition-all">
      <SubNav />
    </Starport>
  </nav>

  <main class="w-full flex flex-col justify-center items-center">

    <section class="flex-1 my-20 relative">

      <div class="flex flex-col justify-center flex-wrap h-auto items-center">

        <div class="relative z-20 flex-1 lg:max-w-4xl md:max-w-2xl max-w-max mx-3">
          <div class="break-words flex flex-nowrap lg:flex-row md:flex-row flex-col justify-center items-center font-semibold 
          border-black rounded-xl">

            <div class="flex-1">
              <div class="flex justify-center items-center flex-row flex-wrap gap-6">
                <Item />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>



  </main>



</template>
