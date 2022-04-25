<script>
import { Starport } from 'vue-starport'
import Name from './Name.vue'
import Social from './Social.vue'
import Picture from './Picture.vue'
import Description from './Description.vue'
import NavWork from './NavWork.vue'
import NavSkill from './NavSkill.vue'
import NavPortfolio from './NavPortfolio.vue'
import Menu from './Menu.vue'
export default {
  components: { Starport, NavSkill, NavWork, NavPortfolio, Name, Picture, Social, Description, Menu },
  inject: ['provProfile'],
}
</script>



<template>
  <Name />
  <main class="relative space-y-6 w-full flex flex-col justify-center items-center my-8">
    <section class="relative flex-1 2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-max">
      <div class="absolute inset-y-0 2xl:-right-60 xl:-right-48 lg:-right-48 md:-right-44 right-6 2xl:top-8 xl:top-0 lg:-top-0 md:-top-0 -top-44 ">
        <transition appear enter-active-class="duration-700 ease-out"
          enter-from-class="transform opacity-0 lg:translate-x-20 md:translate-x-20 translate-x-0 lg:-translate-y-0 md:-translate-y-0 -translate-y-20"
          enter-to-class="opacity-100 lg:translate-x-0 md:translate-x-0 -translate-y-0">
          <div
            class="2xl:text-8xl xl:text-7xl lg:text-7xl md:text-7xl text-5xl font-bold lg:rotate-90 md:rotate-90 rotate-0 mt-40 text-primary/50 dark:text-light/50">
            About Me
          </div>
        </transition>
      </div>

      <Social />

      <div class="relative  flex flex-col justify-center flex-wrap h-auto items-center mt-40">
        <div class="flex-1 lg:max-w-4xl md:max-w-2xl max-w-max mx-3 -mt-28">
          <div class="relative break-words flex flex-nowrap lg:flex-row md:flex-row flex-col justify-center items-center font-semibold 
          border-black rounded-xl">
            <Picture />
            <Description />
          </div>
        </div>
      </div>
    </section>
    <Menu />
  </main>
</template>