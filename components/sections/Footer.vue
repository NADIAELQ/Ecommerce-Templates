<!-- <template>
    <div class="bg-white">
      <si-app-loader placement="BEFORE_FOOTER"/>
      <div class="container py-8">
          <div class="flex flex-wrap">
              <div class="w-full">
                  <div class="p-2 border-r border-l h-full" v-html="$settings.sections.footer.about"></div>
              </div>
          </div>

          <div class="flex flex-wrap mt-4">
              <div class="w-full md:w-1/2 p-4 border-r">
                  <h3 class="text-lg font-bold">{{ $settings.sections.footer.social_media.title }}</h3>
                  <div class="flex flex-wrap justify-center">
                      <div v-for="item in socialMedia.filter(s => $settings.sections.footer.social_media[s.name])" :key="item.name" class="m-2 flex items-center justify-center">
                          <a class="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full" :href="$settings.sections.footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                              <si-image class="h-6 w-6" :src="item.image" :alt="item.name"/>
                          </a>
                      </div>
                  </div>
              </div>

              <div class="w-full md:w-1/2 p-4">
                  <h3 class="text-lg font-bold">{{ $settings.sections.footer.methods.title }}</h3>
                  <div class="flex flex-wrap justify-center">
                      <div v-for="item in methods.filter(m => $settings.sections.footer.methods[m.name])" :key="item.name" class="m-2 flex items-center justify-center">
                          <si-image class="h-10" :src="item.image" :alt="item.name"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <si-app-loader placement="AFTER_FOOTER"/>
    </div>
  </template> -->

<template>
  <footer class="bg-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h5 class="uppercase font-bold mb-4">{{ $settings.sections.footer.collections_title }}</h5>
          <!-- <ul>
              <li class="mb-2"><a href="#" class="text-gray-600">Produits NUXE</a></li>
              <li class="mb-2"><a href="#" class="text-gray-600">NUXE Spa</a></li>
              <li class="mb-2"><a href="#" class="text-gray-600">Notre histoire</a></li>
              <li class="mb-2"><a href="#" class="text-gray-600">Conseils beauté</a></li>
              <li class="mb-2"><a href="#" class="text-gray-600">Partenaires</a></li>
              <li class="mb-2"><a href="#" class="text-gray-600">Liste des points de vente</a></li>
              <li class="mb-2"><a href="#" class="text-gray-600">Recrutement</a></li>
              <li class="mb-2"><a href="#" class="text-gray-600">Professionnels</a></li>
            </ul> -->
          <!-- <ul>
            <li v-for="(item, index) in items" :key="index" class="mb-2">
              <nuxt-link :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`" class="text-gray-600">
                {{ item.name }} <span v-if="item.childrens.length > 0">({{ item.childrens.length }})</span>
              </nuxt-link>
            </li>
          </ul> -->
          <ul>
            <template v-for="(item, i) in menu_1.items">
              <router-link :key="i" :to="item.url">
                <li class="text-gray-600 mb-2 hover:underline">{{ item.text }}</li>
              </router-link>
            </template>
          </ul>
        </div>
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h5 class="uppercase font-bold mb-4">{{ $settings.sections.footer.pages_title }}</h5>
          <ul>
            <template v-for="(item, i) in menu_2.items">
              <router-link :key="i" :to="item.url">
                <li class="text-gray-600 mb-2 hover:underline">{{ item.text }}</li>
              </router-link>
            </template>
          </ul>
          <!-- <ul>
            <li class="mb-2"><a href="#" class="text-gray-600">FAQ</a></li>
            <li class="mb-2"><a href="#" class="text-gray-600">FAQ beauté</a></li>
            <li class="mb-2"><a href="#" class="text-gray-600">Nous contacter</a></li>
            <li class="mb-2"><a href="#" class="text-gray-600">Politique de livraison</a></li>
            <li class="mb-2"><a href="#" class="text-gray-600">Politique de retour</a></li>
            <li class="mb-2"><a href="#" class="text-gray-600">Mon compte</a></li>
            <li class="mb-2"><a href="#" class="text-gray-600">Suivre ma commande</a></li>
          </ul> -->
        </div>
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h5 class="uppercase font-bold mb-4">{{ $settings.sections.footer.policy_title }}</h5>
          <ul>
            <template v-for="(item, i) in menu_3.items">
              <router-link :key="i" :to="item.url">
                <li class="text-gray-600 mb-2 hover:underline">{{ item.text }}</li>
              </router-link>
            </template>
          </ul>
        </div>
        <div class="w-full md:w-1/4 flex flex-col">
          <!-- <img src="https://www.nuxe.com/nuxe-paris.svg" alt="Nuxe Logo" class="mb-4"> -->
          <router-link to="/">
            <nuxt-img width="70" height="50" property="height" class="mb-4"
              :src="$settings.sections.header.logo ? $settings.sections.header.logo.src : $store.state.defaults.logo"
              alt="Store logo" />
          </router-link>
          <div class="text-gray-600 text-center md:text-left" v-html="$settings.sections.footer.about"></div>
          <!-- <div class="flex space-x-4 mt-4">
            <div v-for="item in socialMedia.filter(s => $settings.sections.footer.social_media[s.name])"
              :key="item.name" class="">
              <a class="text-gray-600 hover:text-gray-800 bg-gray-200 rounded-full"
                :href="$settings.sections.footer.social_media[item.name]" target="_blank" rel="noopener noreferrer">
                <si-image class="h-6 w-6" :src="item.image" :alt="item.name" />
              </a>
            </div>
          </div> -->
          <div class="flex flex-wrap p-2 text-center justify-center">
            {{ $settings.sections.footer.social_media.title }}
          </div>

          <div class="flex flex-wrap flex-row lg:items-center items-start lg:justify-end justify-start">
            <div v-for="item in socialMedia.filter(s => $settings.sections.footer.social_media[s.name])"
              :key="item.name" class="flex p-2 items-center justify-center mt-4 ml-mr-4">
              <a class="flex h-full footer-text" :href="$settings.sections.footer.social_media[item.name]"
                target="_blank" rel="noopener noreferrer">
                <svg aria-label="social media icons" class="opacity-90" fill-rule="evenodd" width="25" height="25"
                  :viewBox="item.view" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path :d="item.image" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="flex flex-wrap p-2 text-center justify-center">
            {{ $settings.sections.footer.methods.title }}
          </div>
                    <div class="flex flex-wrap flex-row lg:items-center items-start lg:justify-end justify-start">
                      <div v-for="item in methods.filter(m => $settings.sections.footer.methods[m.name])" :key="item.name"
                        class="flex p-2 items-center justify-center mt-4 ml-mr-4">
                        <si-image class="h-10" :src="item.image" :alt="item.name" />
                      </div>
                    </div>

        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      loading: true,
      items: [],
      menu_1: this.$settings.sections.footer.collections,
      menu_2: this.$settings.sections.footer.pages,
      menu_3: this.$settings.sections.footer.policy,
      methods: [
        {
          name: 'visa',
          image: 'https://storeno.b-cdn.net/themes/palest/visa.png'
        },
        {
          name: 'mastercard',
          image: 'https://storeno.b-cdn.net/themes/palest/mastercard.png'
        },
        {
          name: 'transfer',
          image: 'https://storeno.b-cdn.net/themes/palest/transfer.png'
        },
        {
          name: 'cash',
          image: 'https://storeno.b-cdn.net/themes/palest/cod.png'
        }
      ],
      // socialMedia: [
      //   {
      //     name: 'facebook',
      //     image: 'https://storeno.b-cdn.net/themes/palest/facebook.png'
      //   },
      //   {
      //     name: 'twitter',
      //     image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
      //   },
      //   {
      //     name: 'instagram',
      //     image: 'https://storeno.b-cdn.net/themes/palest/instagram.png'
      //   },
      //   {
      //     name: 'youtube',
      //     image: 'https://storeno.b-cdn.net/themes/palest/youtube.png'
      //   },
      //   {
      //     name: 'whatsapp',
      //     image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
      //   },
      //   {
      //     name: 'linkedin',
      //     image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
      //   },
      //   {
      //     name: 'snapchat',
      //     image: 'https://storeno.b-cdn.net/themes/palest/snapchat.png'
      //   },
      //   {
      //     name: 'tiktok',
      //     image: 'https://storeno.b-cdn.net/themes/palest/tiktok.png'
      //   }
      // ]

      socialMedia: [
        {
          name: 'facebook',
          image: 'M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z',
          view: '0 0 32 32'

          // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        },
        {
          name: 'twitter',
          image: 'M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2  c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7  c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9  C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5  c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6  c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z',
          view: '-143 145 512 512'
        },
        {
          name: 'instagram',
          image: 'M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z',
          view: '0 0 20 20'
        },
        {
          name: 'youtube',
          image: 'M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9 5 .443 5 3.9-.086 3.9-5 3.9z',
          view: '0 0 20 20'
        },
        {
          name: 'linkedin',
          image: 'M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9  V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7  C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6  c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z  ',
          view: '-143 145 512 512'
        },
        {
          name: 'whatsapp',
          image: 'M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm700 952c-175-175-407-271-655-271-510 0-925 415-925 925 0 163 43 322 124 462l-131 480 491-129c135 74 287 113 442 113 510 0 925-415 925-925 0-247-96-480-271-655zm-654 1424c-138 0-274-37-392-107l-28-17-291 76 78-284-18-29c-77-122-118-264-118-409 0-424 345-769 770-769 205 0 399 80 544 225 145 146 225 338 225 544 0 424-345 770-769 770zm422-576c-23-12-137-67-158-75s-37-12-52 12c-15 23-60 75-73 91-14 15-27 18-50 6s-98-36-186-115c-69-61-115-137-129-160s-2-36 10-47c11-10 23-27 35-41s15-23 23-39c8-15 4-29-2-41s-52-125-71-172c-19-45-38-39-52-40s-29-1-44-1-40 6-62 29c-21 23-81 79-81 193s83 224 94 239c12 15 163 249 395 349 55 24 98 38 132 49 55 17 106 15 146 9 44-7 137-56 156-110s19-100 14-110-21-16-44-28z',
          view: '0 0 3333 3333'
        },
        {
          name: 'snapchat',
          image: 'M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm532 1492c86-429-81-787-533-791-323-2-617 208-537 761 10 69-23 61-75 49-43-9-87-19-130-28-21 4-37 12-48 23-62 66 63 117 110 135 62 23 130 45 121 118-3 29-13 57-24 86-59 142-215 275-363 317-77 22-116 31 1 95 53 29 119 45 205 57 12 227 98 81 284 119 23 5 48 8 75 20 48 21 96 62 151 94 166 96 316 102 478-12 94-66 183-131 350-111 117 15 109 51 149-114 147-26 279-54 271-135-192-41-314-141-416-305-40-65-91-160 15-205 28-12 65-18 108-34 38-13 72-37 80-54 21-48-14-90-59-94-86-6-127 50-179 33-12-4-23-11-37-23h1z',
          view: '0 0 3333 3333'
        },
        {
          name: 'tiktok',
          image: 'M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm361 744c31 262 177 418 430 434v294c-147 14-276-34-426-124v550c0 700-763 918-1069 417-197-322-76-889 556-911v311c-48 8-99 20-146 36-141 47-220 137-198 294 43 301 595 390 549-198V745h305z',
          view: '0 0 3333 3333'
        }
      ],
    }
  },
}
</script>

<style scoped>
.icon {
  width: 60px;
  height: 60px;
}
</style>