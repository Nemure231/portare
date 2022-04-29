<script>
export default {
    props: ['loopWork'],
}
</script>
<template>
    <span class="flex lg:flex-row md:flex-row flex-col flex-wrap 2xl:text-3xl text-2xl text-primary font-bold dark:text-light 
    lg:space-x-2 md:space-x-2 space-x-0 lg:space-y-0 md:space-y-0 space-y-1"> 
        <div> {{loopWork.title}}</div>
        <a :href="loopWork.url" class=" border-b-2" :class="loopWork.color" v-text="loopWork.from"></a>
    </span>
</template>
