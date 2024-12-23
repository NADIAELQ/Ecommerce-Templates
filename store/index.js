import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
      state: ()=>{
        return {
          loading:true,
          customer:null,
          IP: undefined,
          showCurrencyModal: false,
          cart: [],
          isPreview:false,
          whishlist: [],
          seo: {
            title: '',
            description: '',
            keywords: [],
            url: '',
            image: '',
            metaTags: [],
            scripts: [],
          },
          settings: null,
          domain: 'www.storeino.com',
          apps: [],
          token: null,
          primary: {
            rgb: { r:0, g:0, b:0 },
            color: '#000000'
          },
          search: '',
          defaults: {
              image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
              sliderImage: "https://storeno.b-cdn.net/themes/palest/slider.jpeg",
              sideBanner: "https://storeno.b-cdn.net/themes/palest/side-banner.jpeg",
              // logo: "https://storeno.b-cdn.net/themes/palest/logo.png",
              logo: "https://storeno.b-cdn.net/stores/7-2024/1722451536709.png",
              icon: "https://storeno.b-cdn.net/themes/palest/icon.png",
              banner: "https://storeno.b-cdn.net/stores/7-2024/1721043553679.webp",
              collection1_bg: "https://storeno.b-cdn.net/stores/7-2024/1721125528481.webp",
              collection2_bg: "https://storeno.b-cdn.net/stores/7-2024/1721139004758.jpeg",
              collection2_img: "https://storeno.b-cdn.net/stores/7-2024/1721139022026.webp",
              collectionbg : "https://storeno.b-cdn.net/stores/7-2024/1720738491250.webp",
              shop_image : "https://storeno.b-cdn.net/stores/7-2024/1721923344032.webp"
          },
          baseURL: 'https://api-stores.storeino.world/api',
          currency: {
            symbol: "DH",
            code: undefined
          },
          language: {
            name: "Unknown",
            code: undefined
          },
          fullImage: null,
          showHeaderMenu: false,
          showFilterMenu : false,
        }
      },
      actions: ()=>{},
      mutations: ()=>{},
      getters: ()=>{}
    })
  }
export default createStore
