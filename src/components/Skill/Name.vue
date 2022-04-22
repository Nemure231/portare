<script>
export default {
    props: ['loopSkills'],
    data() {
        return {
        }
    }
}
</script>
<template>
    <div :class="loopSkills.color"
        class="border-b-4 lg:text-sm md:text-sm text-xs text-primary dark:text-light rounded-b-xl rounded-t-sm absolute bottom-0 text-center inset-x-0"
        v-text="loopSkills.name">
    </div>
</template>
