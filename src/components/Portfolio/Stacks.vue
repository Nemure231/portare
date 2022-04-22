<script>
export default {
    props: ['loopPortfo'],
     methods: {
        removeSvgHW(e) {
            const w = e.match(/width="[^\"]*"/);
            const h = e.match(/height="[^\"]*"/);
            return e.replace(w, '').replace(h, '');
        }
    }
}
</script>
<template>
    <div class="w-5 h-5 flex items-center" v-for="s in loopPortfo.stacks"
        :key="s.id" v-html="removeSvgHW(s.logo)">
    </div>
</template>
