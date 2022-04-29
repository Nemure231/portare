<script>
import Url from "./Url.vue"
import Name from "./Name.vue"
import Description from "./Description.vue"
import Stacks from "./Stacks.vue"
import Image from "./Image.vue"
import Category from "./Category.vue"
export default {
  inject: ["provPortfolios"],
  components: { Url, Name, Description, Stacks, Image, Category }
}
</script>
<template>
  <div class="flex-1 " v-for="pf in provPortfolios" :key="pf.id">
    <Category :loopPortfo="pf" />
    <div :class="pf.lists.length < 2 ? 'lg:grid-cols-1 md:grid-cols-1': 'lg:grid-cols-2 md:grid-cols-2' "
      class="mt-3 place-items-center grid  grid-cols-1 justify-center gap-8">
      <div v-for="lf in pf.lists" :key="lf.id" class="relative group bg-light dark:bg-secondary lg:w-96 md:w-80 sm:w-96 w-80 h-60 
          rounded-xl">
        <div
          class="absolute bg-light dark:bg-secondary border border-gray-500/25 inset-0 rounded-xl group-hover:shadow-lg transition ease-in-out duration-500 group-hover:scale-105">
          <Image :loopPortfo="lf">
            <template #imgPortfolio>
              <Url :loopPortfo="lf"></Url>
            </template>
          </Image>
        </div>
        <div
          class="absolute bottom-0 inset-x-0 px-3  py-1 bg-light dark:bg-secondary dark:text-light rounded-xl group-hover:border-2 group-hover:border-primary">
          <div class="flex flex-col flex-nowrap items-start justify-start space-y-1">
            <Name :loopPortfo="lf" />
            <Description :loopPortfo="lf" />
          </div>
          <div class="absolute inset-y-0 top-1 right-3">
            <div class="flex flex-row flex-nowrap items-center space-x-2 ">
              <Stacks :loopPortfo="lf" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
