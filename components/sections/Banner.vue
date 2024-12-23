<template>
  <div class="container z-0 mb-60">
    <si-image
      class="absolute inset-0 w-full h-full object-cover"
      :src="banner.slide.image ? banner.slide.image.src : $store.state.defaults.banner"
      :alt="banner.title"
      :property="'width'"
    />
    <div class="overlay absolute inset-0 flex flex-col justify-center items-center text-center  p-8 bg-opacity-30">
      <div class="text-background">
        <h4 class="text-white text-3xl mb-16 uppercase tracking-wide text-shadow">
          {{ banner.title }}
        </h4>
        <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-shadow">
          {{ banner.text }}
        </h2>
        <router-link v-if="banner.button" :to="banner.url" class="mt-8">
          <button class="uppercase bg-transparent text-white py-3 px-7 border rounded-full border-white hover:bg-white hover:text-black hover:shadow">
            {{ banner.btn_text }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>



  
<script>
export default {
  data() {
    return {
      banner: this.$settings.sections.banner,
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-top: 18rem;
  padding-bottom: 18rem;
  padding-right: 100%;
  width: 100%;
  height: 1000px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  /* margin-top: -64px; */
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

.text-background {
  padding: 1rem;
  border-radius: 0.5rem;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* text shadow */
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












<!-- <template>
  <div class="container z-0 mb-60">
    <div class="absolute inset-0 w-full h-full">
      <div v-if="isYouTubeVideo(banner.video)">
        <div class="video-wrapper w-full h-full object-cover">
          <iframe
            id="player"
            type="text/html"
            :src="getYouTubeEmbedUrl(banner.video)"
            frameborder="0"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
      </div>
      <div v-else>
        <si-image
          class="w-full h-full object-cover"
          :src="banner.slide.image ? banner.slide.image.src : $store.state.defaults.sliderImage"
          :alt="banner.title"
          :property="'width'"
        />
      </div>
    </div>
    <div class="overlay absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8 bg-opacity-30">
      <h4 class="text-3xl mb-16 uppercase tracking-wide">
        {{ banner.title }}
      </h4>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
        {{ banner.text }}
      </h2>
      <router-link v-if="banner.button" :to="banner.url" class="mt-8">
        <button class="uppercase bg-transparent text-white py-3 px-7 border rounded-full border-white hover:bg-white hover:text-black hover:shadow">
          {{ banner.btn_text }}
        </button>
      </router-link>
    </div>
  </div>
</template>



  
<script>
export default {
  data() {
    return {
      banner: this.$settings.sections.banner,
    };
  },
  methods: {
    isYouTubeVideo(url) {
      const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/;
      return regex.test(url);
    },
    getYouTubeEmbedUrl(url) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${videoId}`;
    },
  },
};
</script>

<style scoped>
.container {
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-top: 18rem;
    padding-bottom: 18rem;
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

.video-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
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

iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style> -->
