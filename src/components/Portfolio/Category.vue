<script>
export default {
    props: ['loopPortfo'],
}
</script>
<template>
    <span class="2xl:text-3xl text-2xl text-primary font-bold dark:text-light">
      <a v-text="loopPortfo.category"></a>
    </span>
</template>
