<template>
    <div class="h-full flex flex-col relative">
      <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
        <si-image
          width="400"
          height="800"
          class="height-image w-full object-cover"
          :src="item.image ? item.image.url : null"
          :alt="item.title"
        />
      </nuxt-link>
      <div class="text-center h-full flex flex-col justify-between mt-4">
        <nuxt-link :to="`/posts/${item.slug}`" :title="item.title" :aria-label="item.title">
          <h3 class="p-2 text-xl">{{ item.title }}</h3>
        </nuxt-link>
        <nuxt-link :to="`/posts/${item.slug}`" class="flex items-center p-2 justify-center bg-gray-200 hover:bg-gray-300 text-black rounded-md mt-4" :title="item.title" :aria-label="item.title">
          <span class="w-full text-center">{{ $settings.sections.posts.button.text }}</span>
          <svg class="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object
    },
  }
  </script>
  
  <style scoped>
  .height-image {
    height: 30rem;
    }
  </style>
  