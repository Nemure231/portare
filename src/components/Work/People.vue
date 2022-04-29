<script>
export default {
    props: ['loopWork'],
    emits: ['child2ShowImgModal', 'child2ShowCommentDropUp'],
    methods: {
        showImgModal(e){
            this.$emit('child2ShowImgModal', e);
        },
        showCommentDropUp(e){
            this.$emit('child2ShowCommentDropUp', e);
        },
    }
}
</script>

<template>
    <div v-for="p in loopWork.people" :key="p.id" class="relative group bg-light dark:bg-secondary lg:w-96 md:w-80 sm:w-96 w-80 h-60 
        rounded-xl">
       
        <div
            class="absolute bg-light dark:bg-secondary border border-gray-500/25 inset-0 rounded-xl group-hover:shadow-lg transition ease-in-out duration-500 group-hover:scale-105">
            <div class="w-full group-hover:shadow-lg dark:group-hover:shadow-main/50 h-full rounded-xl bg-cover bg-center"
                :style="{ backgroundImage: 'url(' + p.testi + ')' }">

                <div class="flex justify-center items-center space-x-3 h-full">
                    <button @click="showImgModal(p.testi)" 
                        class="2xl:text-base px-5 py-1.5 dark:bg-dark bg-light border-2 dark:border border-main text-primary font-semibold dark:text-main rounded-3xl text-sm">
                        View 
                    </button>

                    <button :id="`showCommentBtn${p.id}${loopWork.id}`" @click="showCommentDropUp(`${p.id}${loopWork.id}`)"
                         class="2xl:text-base px-5 py-1.5 dark:bg-dark bg-light border-2 dark:border border-main text-primary font-semibold dark:text-main rounded-3xl text-sm">
                        Comment
                    </button>
                </div>
            </div>
        </div>


        <div :id="`showComment${p.id}${loopWork.id}`"
            class="invisible translate-y-20 opacity-0 bg-light/80 dark:bg-dark/80  absolute inset-4 rounded-xl transition ease-in-out duration-300 group-hover:scale-105">
            <div v-text="p.comment" class="2xl:text-sm px-3 pt-3 pb-6 text-xs text-primary dark:text-light">

            </div>

        </div>

        <div
            class="absolute bottom-0 inset-x-0 px-3  py-1 bg-light dark:bg-secondary text-primary dark:text-light rounded-xl group-hover:border-2 group-hover:border-primary">
            <div class="flex flex-row flex-nowrap items-center justify-start space-x-2">
                <img :class="p.img ? 'block' : 'hidden'" class="w-10 h-10 rounded-full border-2 border-main"
                    :src="p.img" alt="">
                <div :class="p.img ? 'hidden' : 'block'" v-text="p.name[0]"
                    class="w-10 h-10 rounded-full border-2 border-main uppercase inline-flex justify-center items-center font-bold text-main">

                </div>
                <span class="2xl:text-base xl:text-sm lg:text-sm md:text-sm text-xs" v-text="p.name"></span>
            </div>
        </div>
    </div>
</template>



<style>
</style>
