<template>
  <div>
    <si-app-loader placement="BEFORE_HEADER" />
    <div class="bg-white py-2">
      <div class="container flex items-center justify-between">
        <div class="flex"></div>
        <div class="flex items-center">
          <!-- Left Arrow -->
          <button @click="showText1 = true" class="text-gray-600 focus:outline-none">
            <svg role="presentation" focusable="false" width="7" height="10" class="icon icon-chevron-left reverse-icon"
              viewBox="0 0 7 10">
              <path d="M6 1 2 5l4 4" fill="none" stroke="currentColor" stroke-width="2"></path>
            </svg>
          </button>

          <!-- Texts -->
          <div class="text-center mx-4 text-color">
            <span v-if="showText1">{{ $settings.sections.header.text1 }}</span>
            <span v-else>{{ $settings.sections.header.text2 }}</span>
          </div>

          <!-- Right Arrow -->
          <button @click="showText1 = false" class="text-gray-600 focus:outline-none">
            <svg role="presentation" focusable="false" width="7" height="10"
              class="icon icon-chevron-right reverse-icon" viewBox="0 0 7 10">
              <path d="m1 9 4-4-4-4" fill="none" stroke="currentColor" stroke-width="2"></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <div v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1"
            class="relative mx-1">
            <div v-if="iconMenu == 'language'" class="absolute z-50 flex flex-col bg-white rounded-md top-5">
              <a class="p-2 m-1 bg-white whitespace-nowrap" v-for="lang of $settings.store_languages" :key="lang.code"
                :href="`?lang=${lang.code}`">{{ lang.name }} ( {{ lang.code }} )</a>
            </div>
          </div>
          <button @click="iconMenu = iconMenu == 'language' ? null : 'language'"
            v-if="$settings.sections.header.icons.language && $settings.store_languages.length > 1" title="Language"
            class="item hidden md:block p-1.5 bg-white rounded-md hover:bg-white">
            <span class="text-sm">{{ $store.state.language.code }}</span>
          </button>
          <div v-if="$settings.sections.header.icons.currency && $settings.store_currencies.length > 1"
            class="relative mx-1">
            <div v-if="iconMenu == 'currency'" class="absolute z-50 flex flex-col bg-white rounded-md top-5">
              <a class="p-2 m-1 bg-white whitespace-nowrap" v-for="cur of $settings.store_currencies" :key="cur.code"
                :href="`?cur=${cur.code}`">{{ cur.name }} ( {{ cur.code }} )</a>
            </div>
          </div>
          <button @click="iconMenu = iconMenu == 'currency' ? null : 'currency'"
            v-if="$settings.sections.header.icons.currency && $settings.store_currencies.length > 1" title="Currency"
            class="item hidden md:block p-1.5 bg-white rounded-md hover:bg-white">
            <span class="text-sm">{{ $store.state.currency.code }}</span>
          </button>
        </div>
      </div>
    </div>
    <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700">
    <div class="relative bg-white">    
      <div class="container flex items-center justify-between p-2">
       
        <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
          <div class="toggleable hover:text-white">
            <input type="checkbox" value="selected" id="toggle-one" class="toggle-input">
          <!-- <label for="toggle-one" @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu" aria-label="Search button" class="flex flex-col p-2 bg-white rounded-md hover:bg-gray-200 block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"> -->
          <label for="toggle-one" aria-label="Search button" class="flex flex-col p-2 bg-white rounded-md hover:bg-gray-200 block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">
            <si-svg><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 translate"><g class="fa-group"><path fill="currentColor" d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z" class="fa-secondary"></path><path fill="currentColor" d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"></path></g></svg></si-svg>
          </label>
          <div role="toggle" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white w-screen">
            <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-black text-bold mb-2">C</h3>
                <li ><template v-for="(item, i) in menu.items" >
                  <button
                    class="block p-3 hover:underline text-black hover:text-green-700" 
                    :key="i"
                    @click="activeId = activeId !== item._id ? item._id : null">
                    {{ item.text }}
                </button>
                <transition name="">
                  <ul v-if="item._id == activeId" class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 class="font-bold text-xl text-black text-bold mb-2">{{ item.text }}</h3>
                    <li v-for="(child, i) in item.childrens" :key="i">
                      <router-link class="block p-3 hover:bg-blue-600 text-black hover:text-green-700" :to="child.url">
                        {{ child.text }}
                      </router-link>
                    </li>
                  </ul>
                </transition>
                </template>
              </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-black text-bold mb-2">Heading 2</h3>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-black text-bold">Heading 3</h3>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-black hover:text-green-700">Category One Sublink</a>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-black text-bold mb-2">Heading 4</h3>
                <li class="pt-3">
                  <img src="https://placehold.it/205x172">
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </nav>

        <div class="flex items-center justify-start w-1/3 h-full">
          <div v-if="menu" class="flex items-center space-x-0 ml-0">
            <template v-for="(item, i) in menu.items">
              <router-link
                class="nav-link p-2 uppercase tracking-wider text-xs font-bold hover:underline hover:text-green-700"
                :key="i" :to="item.url">{{ item.text }}</router-link>
              <div v-if="item.childrens && item.childrens.length > 0" class="relative">
                <button class="nav-icon bg-white p-2 mx-1" @click="activeId = activeId != item._id ? item._id : null">
                  <si-svg>
                    <svg class="w-3 transform transition-transform duration-300"
                      :class="activeId == item._id ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 330 330"
                      style="enable-background:new 0 0 330 330;" xml:space="preserve">
                      <path
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                    </svg>
                  </si-svg>
                </button>
                <transition name="slide">
                  <div v-if="item._id == activeId" class="absolute z-50 flex flex-col bg-white rounded-md mt-2">
                    <div v-for="(child, i) in item.childrens" :key="i" class="bg-gray-100">
                      <router-link class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex"
                        :to="child.url">{{ child.text }}</router-link>
                      <ul class="p-2" v-if="child.childrens && child.childrens.length > 0">
                        <li v-for="(subchild, ii) in child.childrens" :key="ii">
                          <nuxt-link class="p-2 m-1 rounded-md bg-gray-50 hover:bg-white hover:text-green-700 flex"
                            :to="subchild.url">
                            {{ subchild.text }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </div>
            </template>
          </div>
        </div>
        <div class="flex items-center justify-center w-1/3 logo">
          <router-link to="/">
            <nuxt-img width="70" height="50" property="height" class="object-contain w-full h-16"
              :src="section.logo ? section.logo.src : $store.state.defaults.logo" alt="Store logo" />
          </router-link>
        </div>
        <div class="flex items-center justify-end w-1/3 icons">
          <button v-if="$settings.sections.header.icons.search" @click="showSearch = true" aria-label="Search button"
            class="relative p-2 mx-1 bg-white rounded-md item hover:bg-white">
            <svg role="presentation" focusable="false" width="18" height="18" class="icon icon-search"
              viewBox="0 0 18 18">
              <g clip-path="url(#picto-search-clip)">
                <path
                  d="M7.852 0c2.168 0 4.13.88 5.552 2.3a7.828 7.828 0 0 1 2.3 5.553 7.821 7.821 0 0 1-1.967 5.197l4.12 4.12a.487.487 0 0 1-.687.688l-4.12-4.12a7.824 7.824 0 0 1-5.198 1.966 7.826 7.826 0 0 1-5.552-2.3A7.828 7.828 0 0 1 0 7.852C0 5.684.879 3.721 2.3 2.3A7.828 7.828 0 0 1 7.852 0Zm4.864 2.988A6.858 6.858 0 0 0 7.852.973c-1.9 0-3.62.77-4.864 2.015A6.858 6.858 0 0 0 .973 7.853c0 1.899.77 3.619 2.015 4.864a6.86 6.86 0 0 0 4.864 2.014c1.9 0 3.618-.77 4.863-2.013l.001-.001.001-.001a6.857 6.857 0 0 0 2.013-4.863c0-1.9-.77-3.62-2.014-4.865Z"
                  fill="#000"></path>
              </g>
              <defs>
                <clipPath id="picto-search-clip">
                  <path fill="#fff" d="M0 0h18v18H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <small v-if="$route.query.search"
              class="absolute flex items-center justify-center w-1 h-1 p-1 text-white bg-green-700 rounded-full -top-1 -right-1"></small>
          </button>
          <router-link v-if="$settings.sections.header.icons.wishlist" to="/wishlist" title="Wishlist"
            class="relative hidden p-2 mx-1 bg-white rounded-md item md:block hover:bg-white">
            <svg aria-label="wishlist icon" width="24" height="24" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg" data-v-5b188f01="">
              <path
                d="M6.48 3.91a3.25 3.25 0 012.68 1.62L10 6.85l.83-1.33a3.12 3.12 0 012.63-1.61 2.8 2.8 0 012.08.93c1.48 1.59 1.33 3.78-.37 5.57L10 15.66l-5.22-5.3c-1.67-1.85-1.8-4-.36-5.53a2.8 2.8 0 012.06-.92zm0-1a3.8 3.8 0 00-2.79 1.24C1.94 6 2 8.73 4 11l6 6.06 5.9-6c2.16-2.27 2.15-5.06.4-6.95a3.871 3.871 0 00-2.82-1.25A4.1 4.1 0 0010 5a4.23 4.23 0 00-3.52-2.09z"
                fill="currentColor" data-v-5b188f01="">

              </path>
            </svg>
            <small
              class="absolute flex items-center justify-center w-5 h-5 p-2 text-white bg-red-700 rounded-full -top-2 -right-2">{{
                $store.state.wishlist.length }}</small>
          </router-link>
          <router-link v-if="$settings.sections.header.icons.cart" to="/cart" title="Cart" id="cart-icon"
            class="relative p-2 mx-1 bg-white rounded-md item hover:bg-white">
            <svg class="shopping_basket" role="presentation" stroke-width="2" focusable="false" width="22" height="18"
              viewBox="0 0 22 18">
              <path
                d="M18.9379 4.82542H17.8664L13.8311 0.16863C13.6591 -0.0326178 13.3494 -0.0606989 13.1381 0.107788C12.9267 0.271594 12.8972 0.566446 13.0742 0.767694L16.5885 4.82542H5.40661L8.92091 0.767694C9.09294 0.566446 9.06345 0.271594 8.85702 0.107788C8.64567 -0.0560187 8.33601 -0.0279376 8.16399 0.16863L4.1336 4.82074H3.06211C1.37131 4.82542 0 6.13119 0 7.74117C0 8.00326 0.0393208 8.26536 0.108132 8.5134L2.23637 15.8566C2.23637 15.8566 2.25112 15.8894 2.25603 15.9034V15.9175C2.64924 17.1483 3.8387 17.9908 5.19035 17.9955H16.8097C18.1859 17.9955 19.3901 17.1156 19.7587 15.8566L21.887 8.5134C22.3342 6.95958 21.3807 5.35428 19.7489 4.92838C19.4835 4.85818 19.2082 4.82542 18.9379 4.82542ZM16.8097 17.0641H5.19035C4.50715 17.0641 3.86327 16.7412 3.47498 16.203H18.5201C18.1318 16.7412 17.4928 17.0641 16.8047 17.0641H16.8097ZM20.9433 8.26536L18.9133 15.2669H3.08668L1.05675 8.26536C0.752011 7.21231 1.4008 6.12183 2.5067 5.83166C2.68856 5.78486 2.87042 5.76145 3.05719 5.76145H18.933C20.0831 5.76145 21.0121 6.64601 21.0121 7.74117C21.0121 7.91902 20.9875 8.09687 20.9383 8.26536H20.9433Z">
              </path>
            </svg>
            <small
              class="absolute flex items-center justify-center w-5 h-5 p-2 text-white bg-red-700 rounded-full -top-2 -right-2">{{
                $store.state.cart.length }}</small>
          </router-link>
          <router-link v-if="$settings.sections.header.icons.account" to="/account/orders" title="Account"
            class="hidden p-2 mx-1 bg-white rounded-md item md:block hover:bg-white">
            <svg role="presentation" stroke-width="2" focusable="false" width="18" height="19"
              class="icon icon-account">
              <path
                d="M9.001.381c-2.795 0-5.058 2.32-5.058 5.169 0 2.092 1.219 3.898 2.971 4.71-3.491.944-6.064 4.2-6.064 8.06 0 .19.147.361.353.361a.356.356 0 0 0 .356-.357v-.006c0-4.105 3.166-7.442 7.13-7.61a5.156 5.156 0 0 0 .624 0c3.964.166 7.128 3.504 7.128 7.61 0 .19.147.361.352.361a.355.355 0 0 0 .357-.357v-.006c0-3.863-2.573-7.116-6.064-8.06 1.752-.813 2.97-2.62 2.97-4.71C14.057 2.7 11.795.38 9.002.38Zm0 .719c2.402 0 4.347 1.987 4.347 4.45 0 2.46-1.783 4.282-4.042 4.441a7.664 7.664 0 0 0-.61 0C6.44 9.831 4.654 7.91 4.654 5.55c0-2.361 1.948-4.45 4.347-4.45Z"
                fill="#000" stroke="#000" stroke-width=".3"></path>
            </svg>
          </router-link>
        </div>
      </div>
      <div v-if="showSearch" class="absolute inset-0 z-20 flex items-center justify-center">
        <div class="absolute w-full p-2 bg-white">
          <form @submit.prevent="search" class="container flex p-2 border border-gray-200 rounded-md search bg-gray-50"
            action="/shop?">
            <button type="button" @click="showSearch = false" aria-label="Search button">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <input autofocus v-model="q" class="w-full px-2 bg-transparent outline-none"
              :placeholder="'Search for products'" type="search" name="q">
            <button aria-label="Search button">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    <si-app-loader placement="AFTER_HEADER" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearch: false,
      iconMenu: null,
      q: this.$route.query.search,
      menu: this.$settings.sections.header.menu,
      section: this.$settings.sections.header,
      activeId: null,
      showText1: true, // Control variable to toggle between text1 and text2
    };
  },
  watch: {
    showSearch(val) {
      if (val) {
        this.$nextTick(() => {
          document.querySelector('form.search input').focus();
        });
      }
    },
  },
  methods: {
    search() {
      this.$store.state.search = this.q;
      this.$router.push({ path: '/shop', query: { search: this.q } });
      this.showSearch = false;
    },
  },
};
</script>

<style scoped>
[dir='ltr'] .move-out {
  transform: translateX(-40em);
}

[dir='ltr'] .move-in {
  transform: translateX(-20em);
}

[dir='rtl'] .move-out {
  transform: translateX(40em);
}

[dir='rtl'] .move-in {
  transform: translateX(20em);
}

.text-color {
  color: var(--primary-color);
}

.mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 2378%;
    z-index: 1000;
    margin-left: -46px;
  }
/* 
  .toggleable > label:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  } */

  .toggle-input {
    display: none;
  }
  .toggle-input:not(checked) ~ .mega-menu {
    display: none;
  }

  .toggle-input:checked ~ .mega-menu {
    display: block;
  }

  .toggle-input:checked + label {
    color: white;
    background: white;
  }

  .toggle-input:checked ~ label:after {
    content: "\25B2";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }
</style>
