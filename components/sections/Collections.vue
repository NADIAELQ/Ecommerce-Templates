<template>
  <div class="container mx-auto my-60 container-height">
    <div v-if="loading" class="">
      <si-loader></si-loader>
    </div>
    <div class="flex flex-wrap h-full">
      <div class="w-full md:w-1/2 p-4 flex flex-col justify-center items-center relative bg-collections">
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${$settings.sections.collections.bg_image ? $settings.sections.collections.bg_image.src : $store.state.defaults.collectionbg})` }"></div>
        <div class="relative z-10 p-8 text-container flex flex-col justify-center items-center">
          <h2 class="text-5xl font-serif mb-8 text-black uppercase text-center">{{ $settings.sections.collections.title }}</h2>
          <p class="text-lg font-serif font-light leading-relaxed text-black text-center mt-6 uppercase text-justify-custom">{{ $settings.sections.collections.description }}</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center p-4">
            <nuxt-link class="relative font-serif w-32 h-32 flex items-center justify-center transform transition-transform duration-300 hover:scale-110" :aria-label="item.name" :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
              <si-image width="128" height="128" class="h-full w-full rounded-full object-cover " :src="item.image ? item.image.src : null" :alt="item.name" srcset=""/>
            </nuxt-link>
            <nuxt-link :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
              <h3 class="text-center text-xl mt-2">{{ item.name }} <span v-if="item.childrens.length > 0">({{ item.childrens.length }})</span></h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      items: [],
      mobile_size: this.$settings.sections.collections.mobile_size || 'default_size',
    };
  },
  computed: {
    backgroundStyle() {
      const bgImage = this.$settings.sections.collections.bg_image;
      return {
        backgroundImage: bgImage ? `url(${bgImage})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    },
  },
  async fetch() {
    try {
      const filter = {};
      if (this.$settings.sections.collections.items && this.$settings.sections.collections.items.length > 0) {
        this.items = this.$settings.sections.collections.items;
      } else {
        const { data } = await this.$storeino.collections.search(filter);
        this.items = data.results || [];
      }
    } catch (e) {
      console.log({ e });
    }
    this.loading = false;
  },
};
</script>

<style scoped>
.bg-collections {
  background-size: cover;
  background-position: center;
  /* background-image: url('https://storeno.b-cdn.net/stores/7-2024/1720738491250.webp'); */
  height: 900px;
}

.flex-col {
  background-color: transparent; 
  box-shadow: none; 
}

.container {
  max-width: 100%;
}

.text-container {
  max-width: 80%;
  text-align: center;
}

h2, p {
  z-index: 10; 
}

.text-justify-custom {
  text-align: justify;
  font-size: 1.375rem;
  line-height: 1.95rem;
}

.container-height {
  height: 900px;
}
.nuxt-link {
  transition: transform 0.3s ease;
}

.nuxt-link:hover {
  transform: scale(1.1);
}
</style>
