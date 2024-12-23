<template>
    <div class="flex flex-col items-center p-4">
        <nuxt-link class="relative w-40 h-40 flex items-center justify-center" :aria-label="item.name" :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
            <si-image width="160" height="160" class="h-full w-full rounded-full object-cover" :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
        </nuxt-link>
        <nuxt-link :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
            <h3 class="text-center text-xl mt-2">{{ item.name }} <span v-if="item.childrens.length > 0">({{ item.childrens.length }})</span></h3>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style scoped>
.flex-col {
    background-color: transparent; /* Remove background color */
    box-shadow: none; /* Remove shadow */
}
</style>
