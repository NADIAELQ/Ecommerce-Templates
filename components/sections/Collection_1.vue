<template>
  <div class="container my-60">
    <div v-if="loading" class="">
      <si-loader></si-loader>
    </div>
      <si-image
        class="absolute inset-0 w-full h-full object-cover"
        :src="collection.bg ? collection.bg.src : $store.state.defaults.collection1_bg"
        :alt="collection.title"
        :property="'width'"
      />
      <div class="overlay absolute bg-black bg-opacity-30 inset-0 flex flex-col justify-center items-center text-2xl text-center text-white p-8">
        <div class="text-container mb-14">
          <p class="text-center text-white">
            {{ collection.text }}
          </p>
        </div>
        <h1 class="text-center text-white mb-14">
          {{ collection.title }}
        </h1>
        <router-link v-if="collection.button" :to="collection.url" class="text-white bg-primary underline mt-8 py-3 px-7 border rounded-full border-white hover:bg-white hover:border-black hover:shadow">
          <button class="uppercase" >
            {{ collection.btn_text }}
          </button>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
data() {
  return {
    loading: true,
    collection: this.$settings.sections.collection_1,
  }
},
}
</script>

<style scoped>
.container {
position: relative;
padding-top: 18rem; /* 72 in rem */
padding-bottom: 18rem; /* 72 in rem */
padding-right: 100%;
width: 100%;
height: 1000px;
overflow: hidden;
}

.absolute {
position: absolute;
inset: 0;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}

.overlay {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
color: white;
}

.relative {
position: relative;
z-index: 10;
padding: 2rem; /* 8 in rem */
}

.text-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.text-center {
text-align: center;
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

.underline {
text-decoration: underline;
}

.bg {
height: 550px;
}

.si-image {
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}
</style>
