<template>
  <div class="container my-60">
    <div v-if="loading" class="flex justify-center items-center my-5">
      <si-loader></si-loader>
    </div>
    <div class="flex flex-wrap -mx-2">
      <div v-if="items.length > 0">
        <carousel v-if="$settings.sections.products_1.active" :perPageCustom="[[240, 1], [480, 2], [768, 3], [1024, 4]]"
          :navigationEnabled="true" :paginationEnabled="false" :rtl="$store.state.language.code == 'AR' ? true : false">
          <slide v-for="item in items" :key="item.id">
            <si-product :item="item"></si-product>
          </slide>
        </carousel>
        <!-- <si-carousel v-if="$settings.sections.products_1.active" component="si-product" :title="$settings.sections.products_1.title" :list="items" :mobile_size="this.mobile_size ? this.mobile_size : 100"></si-carousel> -->

      </div>
    </div>
    <div v-if="!loading && items.length == 0" class="flex flex-wrap items-center bg-white p-2 mx-2 border rounded">
      <div class="w-full md:w-1/2">
        <svg class="h-40 max-w-full text-gray-400 translate" xmlns="http://www.w3.org/2000/svg" version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0"
          y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve">
          <g>
            <g xmlns="http://www.w3.org/2000/svg" id="Send_package" data-name="Send package">
              <path
                d="M61,44H54V43a1,1,0,0,0-1-1H45a1,1,0,0,0-1,1v1.719l-6.256-1.564a3.012,3.012,0,0,0-1.5.013L20.32,47.434a3.964,3.964,0,0,0-2.259,1.629l-9.753-5.63a4,4,0,0,0-4,6.933L22.035,60.6a3,3,0,0,0,1.5.4H40.528a3.014,3.014,0,0,0,1.341-.316L44,59.618V61a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V60h7a1,1,0,0,0,1-1V45A1,1,0,0,0,61,44ZM40.975,58.9a1.016,1.016,0,0,1-.447.1H23.536a1,1,0,0,1-.5-.134L5.312,48.635A2.007,2.007,0,0,1,4.588,45.9a2.034,2.034,0,0,1,2.722-.731l10.074,5.816a3.982,3.982,0,0,0,5.007,4.179l11.925-3.195a1,1,0,0,0-.517-1.932l-11.926,3.2a2,2,0,1,1-1.035-3.863L36.76,45.1a1,1,0,0,1,.5,0L44,46.781v10.6ZM52,60H46V44h6Zm8-2H54V46h6Z"
                fill="currentColor" data-original="#000000" style=""></path>
              <path
                d="M41.9,10.553l-4-8A1,1,0,0,0,37,2H9a1,1,0,0,0-.895.553l-4,8A1.78,1.78,0,0,0,4,11V39a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V11A1.78,1.78,0,0,0,41.9,10.553ZM39.382,10H27.78l-1.5-6h10.1ZM20,12h6v9.382l-2.553-1.277a1,1,0,0,0-.894,0L20,21.382Zm4.219-8,1.5,6H20.281l1.5-6ZM9.618,4h10.1l-1.5,6H6.618ZM40,38H6V12H18V23a1,1,0,0,0,1.447.895L23,22.118,26.553,23.9A1,1,0,0,0,28,23V12H40Z"
                fill="currentColor" data-original="#000000" style=""></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="w-full md:w-1/2 border-l pl-4">
        <h2>{{ 'You don\'t have any products' }}</h2>
        <p>{{ 'Go to your store admin > products >' }} <a href="//business.storeino.com/stores/products" target="_blank"
            class=" text-blue-600">{{ 'Add new' }}</a></p>
        <a href="https://palest.storeino.com" target="_blank"
          class="text-blue-600 border p-2 rounded-md inline-block mt-1">{{ 'View theme demo' }}</a>
      </div>
    </div>
    <div class="flex justify-center mt-8" v-if="section.show_more_text">
      <nuxt-link
        class="py-3 px-6 bg-primary text-white shadow-lg rounded-full hover:bg-primary-dark transition duration-300 flex items-center"
        :to="section.show_more_url">
        <span class="w-full text-center">{{ section.show_more_text }}</span>
        <svg class="h-5 w-5 ml-2 text-white translate" xmlns="http://www.w3.org/2000/svg" version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0"
          viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 512 512" xml:space="preserve">
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                  fill="currentColor" data-original="currentColor" style="" class=""></path>
              </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
            <g xmlns="http://www.w3.org/2000/svg"> </g>
          </g>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
// import { Carousel, Slide } from 'vue-carousel';
export default {
  // components: {
  //   Carousel,
  //   Slide
  // },
  props: {
    section: { type: Object, required: true }
  },
  data() {
    return {
      title: this.section.title,
      tags: this.section.tags,
      collections: this.section.collections,
      mobile_size: this.section.mobile_size,
      items: [],
      loading: true
    };
  },
  async fetch() {
    let filter = { status: 'PUBLISH' };
    if (this.collections.length > 0) filter['collections._id-in'] = this.collections.map(c => c._id);
    if (this.tags.length > 0) filter['tags._id-in'] = this.tags.split(',');
    await this.getProducts(filter);
  },
  methods: {
    async getProducts(filter) {
      this.loading = true;
      try {
        if (this.section.items != null && this.section.items.length > 0) {
          this.items = this.section.items;
        } else {
          const { data } = await this.$storeino.products.search(filter)
          this.items = data.results
        }
      } catch (e) {
        console.log({ e });
      }
      this.loading = false;
    }
  },
};
</script>
