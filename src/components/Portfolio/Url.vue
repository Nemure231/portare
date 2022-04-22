<script>
export default {
    props: ['loopPortfo'],
}
</script>
<template>
    <div class="flex flex-wrap justify-center items-center h-full">
        <div class="flex-1">
            <div class="flex flex-wrap flex-row space-x-3 justify-center">
                <a :href="u.url" v-for="u in loopPortfo.urls" :key="u.id" v-text="u.name"
                    class="my-1 px-5 py-1.5 bg-dark text-warning rounded-3xl text-sm">
                </a>

            </div>

        </div>
    </div>
</template>
