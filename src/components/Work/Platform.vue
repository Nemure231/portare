<script>
export default {
    props: ['loopWork'],
}
</script>
<template>
    <span class="text-2xl text-primary font-bold dark:text-light">{{loopWork.title}}
        <a :href="loopWork.url" class="inline-flex border-b-2" :class="loopWork.color" v-text="loopWork.from"></a>
    </span>
</template>
