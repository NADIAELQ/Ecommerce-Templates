<template>
    <div class="main-container my-60 flex items-center relative mb-60">
        <div v-if="loading" class="">
            <si-loader></si-loader>
        </div>
        <si-image
          class="background-image"
          :src="collection.bg ? collection.bg.src : $store.state.defaults.collection2_bg"
          :alt="collection.title"
          :property="'width'"
        />
        <div class="container flex items-center">
            <div class="text-section p-16">
                <h2 class="text-black text-5xl font-bold mb-10">
                    {{ collection.title }}
                </h2>
                <div class="text-content mt-4 text-2xl text-gray-700 mb-10">
                    <p>{{ collection.text }}</p>
                </div>
                <router-link v-if="collection.button" :to="collection.url"
                    class="mt-8 py-3 px-7 border rounded-full border-black hover:bg-black hover:text-white hover:shadow">
                    <button class="uppercase">
                        {{ collection.button.text }}
                    </button>
                </router-link>
            </div>
            <div class="image-section relative w-1/2">
                <si-image class="absolute inset-0 w-full h-full object-cover"
                    :src="collection.image ? collection.image.src : $store.state.defaults.collection2_img"
                    :alt="collection.title" :property="'width'" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            collection: this.$settings.sections.collection_2,
        }
    },
}
</script>

<style scoped>
.main-container {
  height: 125vh;
  overflow: hidden;
  position: relative;
}

.container {
    display: flex;
    height: 100vh;
    width: 90%;
    overflow: hidden;
    background-color: white;
    margin-right: 0%;
    z-index: 20;
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.text-section {
    width: 50%;
    padding: 3rem;
    /* Adjust padding as needed */
}

.image-section {
    position: relative;
    width: 50%;
    height: 100%;
}

.absolute {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.text-content p {
    margin: 0.5rem 0;
    /* Adjust margin as needed */
}

.mt-8 {
    margin-top: 2rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
}

.border {
    border-width: 1px;
}

.hover\:bg-black:hover {
    background-color: black;
}

.hover\:border-black:hover {
    border-color: black;
}

.hover\:shadow:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.background-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 5; 
}
</style>
