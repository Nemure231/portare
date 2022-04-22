<script>
import Platform from './Platform.vue'
import People from './People.vue'
export default {
    components: { Platform, People },
    emits: ['childShowImgModal', 'childShowCommentDropUp'],
    inject: ['provWorks'],
    methods: {
        showImgModal(e){
            this.$emit('childShowImgModal', e);
        },
        showCommentDropUp(e){
            this.$emit('childShowCommentDropUp', e);
        },
    }
}
</script>

<template>
    <div class="flex-1" v-for="c in provWorks" :key="c.id">
        <Platform :loopWork="c" />
        <div :class="c.people.length < 2 ? 'lg:grid-cols-1 md:grid-cols-1': 'lg:grid-cols-2 md:grid-cols-2' "
            class="mt-3 place-items-center grid grid-cols-1 justify-center gap-8">
            <People :loopWork="c" @child2ShowImgModal="showImgModal" @child2ShowCommentDropUp="showCommentDropUp">
            </People>
        </div>
    </div>

</template>
