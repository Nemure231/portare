<script>
export default {
    props: ['loopPortfo'],
}
</script>
<template>
    <span class="text-2xl text-primary font-bold dark:text-light">
      <a class="inline-flex" v-text="loopPortfo.category"></a>
    </span>
</template>
