<script>
import Logo from "./Logo.vue"
import Name from "./Name.vue"
export default {
    inject: ["provSkills"],
    components: { Logo, Name }
}
</script>
<template>
    <div v-for="ps in provSkills" :key="ps.id" :class="ps.shadow" class="relative bg-light dark:bg-secondary w-28 h-28 hover:shadow-lg transition ease-in-out duration-500 hover:scale-110
            border border-secondary/25 rounded-xl">
        <div class="relative flex items-center h-full w-full justify-center">
            <Logo :loopSkills="ps" />
        </div>

        <div class="absolute inset-x-0 bottom-0">
           <Name :loopSkills="ps"/>
        </div>
    </div>

</template>
