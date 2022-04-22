<script>
export default {
    props: ['loopPortfo'],
}
</script>
<template>
    <div class="w-full group-hover:shadow-lg h-full rounded-xl bg-cover bg-center
    dark:group-hover:shadow-warning/50" :style="{ backgroundImage: 'url(' + loopPortfo.img + ')' }">
        <slot name="imgPortfolio"></slot>
    </div>
</template>
