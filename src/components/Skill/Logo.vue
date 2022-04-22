<script>
export default {
    props: ['loopSkills'],
    methods: {
        removeSvgHW(e) {
            const w = e.match(/width="[^\"]*"/);
            const h = e.match(/height="[^\"]*"/);
            return e.replace(w, '').replace(h, '')
        }
    }
}
</script>
<template>
    <div class="w-14 h-14 flex justify-center items-center" v-html="removeSvgHW(loopSkills.logo)">
    </div>
</template>
