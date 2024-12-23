<template>
  <div>
    <sections-banner v-if="$settings.sections.banner.active"></sections-banner>
    <template v-for="i in 2">
      <sections-products :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active" :section="$settings.sections[`products_${i}`]"></sections-products>
    </template>
    <!-- <sections-products v-if="$settings.sections.products_1.active"></sections-products> -->
    <sections-collections v-if="$settings.sections.collections.active"></sections-collections>
    <sections-collection1 v-if="$settings.sections.collection_1.active"></sections-collection1>
    <sections-collection2 v-if="$settings.sections.collection_2.active"></sections-collection2>
    <sections-posts v-if="$settings.sections.posts.active"></sections-posts>
    <sections-services v-if="$settings.sections.services.active"></sections-services>
    <div class="container">
      <si-app-loader  placement="BEFORE_HOME_FOOTER"/>
    </div>
  </div>
</template>
<script>
export default {
  async fetch(){
    this.$store.state.seo.title = this.$settings.store_name;
    this.$store.state.seo.description = this.$settings.store_description;
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>
