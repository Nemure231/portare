<script>
import { Starport } from 'vue-starport'
import NavWork from './NavWork.vue'
import NavSkill from './NavSkill.vue'
import NavPortfolio from './NavPortfolio.vue'
export default {
    components: { Starport, NavSkill, NavWork, NavPortfolio},
    data() {
        return {
        }
    }
}
</script>

<template>
    <section class="relative flex-1">
        <div class="relative ">
            <div class=" flex lg:flex-row md:flex-row sm:flex-row flex-row flex-wrap gap-2 justify-center items-center">
                <Starport port="skill-nav" class="lg:w-40 md:w-40 w-full h-10 relative duration-1000 transition-all">
                    <NavSkill />
                </Starport>
                <Starport port="work-nav" class="lg:w-40 md:w-40 w-full h-10 relative duration-1000 transition-all">
                    <NavWork />
                </Starport>
                <Starport port="portfolio-nav"
                    class="lg:w-40 md:w-40 w-full h-10 relative duration-1000 transition-all">
                    <NavPortfolio />
                </Starport>
            </div>
        </div>
    </section>
</template>