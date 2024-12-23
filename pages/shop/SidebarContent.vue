<template>
    <div>
      <h2 v-if="$settings.sections.shop.sidebar.collections.active" class="px-2">{{ $settings.sections.shop.sidebar.collections.title }}</h2>
      <div v-if="$settings.sections.shop.sidebar.collections.active" class="flex flex-col mb-2">
        <div v-if="loading.collections" class="flex items-center justify-center my-5">
          <si-loader></si-loader>
        </div>
        <div v-for="(item, i) in collections" :key="i" class="px-2">
          <div class="flex items-center">
            <input v-if="item.childrens && item.childrens.length == 0 " class="w-4 h-4 mx-1" :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0" :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)" type="checkbox"/>
            <label @click="setActive(i+'fit',i+'ret')" v-if="item.childrens && item.childrens.length > 0 " class="capitalize cursor-pointer collec-name" :for="item.slug">{{ item.name }}</label>
            <label v-if="item.childrens && item.childrens.length == 0 " class="capitalize cursor-pointer collec-name" :for="item.slug">{{ item.name }}</label>
            <svg @click="setActive(i+'fit',i+'ret')" :id="i+'ret'"  v-if="item.childrens && item.childrens.length > 0 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 512 512 ; cursor:pointer;" xml:space="preserve" class="rotated"><g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" fill="#7a7575" data-original="#000000" style="" class=""/>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
              </g>
            </svg>
          </div>
          <div :id="i+'fit'" class="fit-collapsible" :class="item.childrens.length > 0 ? 'sub-collections' : ''">
            <ul class="list-sub-collections fit-collapsible-content" v-if="item.childrens && item.childrens.length > 0">
              <li v-for="(child, i) in item.childrens" :key="i">
                <input class="w-4 h-4 mx-1" :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0" :id="child.slug" @change="setParams($event, 'collections.slug-in', child.slug)" type="checkbox"/>
                <label  :for="child.slug" class="cursor-pointer c-p c-grey">{{ child.name }}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr v-if="$settings.sections.shop.sidebar.collections.active">
      <h2 v-if="$settings.sections.shop.sidebar.prices.active" class="px-2 mt-2">{{ $settings.sections.shop.sidebar.prices.title }}</h2>
      <div v-if="loading.filters" class="flex items-center justify-center my-5">
        <si-loader></si-loader>
      </div>
      <div v-if="$settings.sections.shop.sidebar.prices.active && filters" class="flex flex-col mb-2" dir="ltr">
        <si-price-range @change="setParams" :min="filters.prices.min" :max="filters.prices.max" />
      </div>
      <hr v-if="$settings.sections.shop.sidebar.prices.active">
      <h2 class="px-2" v-if="$settings.sections.shop.sidebar.sizes.active">{{ $settings.sections.shop.sidebar.sizes.title }}</h2>
      <div v-if="$settings.sections.shop.sidebar.sizes.active && loading.filters" class="flex items-center justify-center my-5">
        <si-loader></si-loader>
      </div>
      <div v-if="$settings.sections.shop.sidebar.sizes.active && filters" class="flex flex-wrap mx-2 mb-2">
        <div v-for="(item, i) in filters.sizes" :key="i" class="flex items-center m-0.5 rounded-md" :class="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0 ? 'bg-primary text-white' : 'bg-gray-200' ">
          <input hidden :id="item.value1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" @change="setParams($event, 'options.values.value1', item.value1)" type="checkbox"/>
          <label class="px-2 cursor-pointer" :for="item.value1">{{ item.value1 }}</label>
        </div>
      </div>
      <hr v-if="$settings.sections.shop.sidebar.sizes.active">
      <h2 class="px-2" v-if="$settings.sections.shop.sidebar.colors.active">{{ $settings.sections.shop.sidebar.colors.title }}</h2>
      <div v-if="$settings.sections.shop.sidebar.colors.active && loading.filters" class="flex items-center justify-center my-5">
        <si-loader></si-loader>
      </div>
      <div v-if="$settings.sections.shop.sidebar.colors.active && filters" class="flex flex-wrap mx-2 mb-2">
        <div v-for="(item, i) in filters.colors" :key="i" class="flex items-center my-0.5 color-option" :class="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0 ? 'active' : '' ">
          <input hidden :id="item.value1" :checked="params['options.values.value1'] && params['options.values.value1'].indexOf(item.value1) >= 0" @change="setParams($event, 'options.values.value1', item.value1)" type="checkbox"/>
          <label class="rounded-full cursor-pointer" :style="`background-color:${item.value2}`" :for="item.value1" :aria-label="item.value1"></label>
        </div>
      </div>
      <hr v-if="$settings.sections.shop.sidebar.colors.active">
      <h2 class="px-2" v-if="$settings.sections.shop.sidebar.tags.active">{{ $settings.sections.shop.sidebar.tags.title }}</h2>
      <div v-if="$settings.sections.shop.sidebar.tags.active && loading.filters" class="flex items-center justify-center my-5">
        <si-loader></si-loader>
      </div>
      <div v-if="$settings.sections.shop.sidebar.tags.active && filters" class="flex flex-col mb-2">
        <div v-for="(tag, i) in filters.tags" :key="i" class="flex items-center px-2">
          <input class="w-4 h-4 mx-1" :checked="params['tags-in'] && params['tags-in'].indexOf(tag) >= 0" :id="`tag_${tag}`" @change="setParams($event, 'tags-in', tag)" type="checkbox"/>
          <label class="capitalize cursor-pointer" :for="`tag_${tag}`">{{ tag }}</label>
        </div>
      </div>
      <hr v-if="$settings.sections.shop.sidebar.tags.active">
      <h2 class="px-2" v-if="$settings.sections.shop.sidebar.brands.active">{{ $settings.sections.shop.sidebar.brands.title }}</h2>
      <div class="flex flex-col mb-2">
        <div v-if="$settings.sections.shop.sidebar.brands.active && loading.brands" class="flex items-center justify-center my-5">
          <si-loader></si-loader>
        </div>
        <div v-if="$settings.sections.shop.sidebar.brands.active">
          <div v-for="(item, i) in brands" :key="i" class="flex items-center px-2">
            <input class="w-4 h-4 mx-1" :id="item.slug" :checked="params['brand.slug-in'] && params['brand.slug-in'].indexOf(item.slug) >= 0" @change="setParams($event, 'brand.slug-in', item.slug)" type="checkbox"/>
            <label class="capitalize cursor-pointer" :for="item.slug">{{ item.name }}</label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      collections: Array,
      filters: Object,
      brands: Array,
      params: Object,
      loading: Object
    },
    methods: {
      setActive(id, idRet) {
        var element = document.getElementById(id);
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        } else {
          element.classList.add('active');
        }
        var icon = document.getElementById(idRet);
        if (icon.classList.contains('active')) {
          icon.classList.remove('active');
        } else {
          icon.classList.add('active');
        }
      },
      setParams(e, key, value) {
        this.$emit('update-params', { event: e, key: key, value: value });
      }
    }
  };
  </script>
  