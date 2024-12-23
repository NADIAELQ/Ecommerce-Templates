<template>
    <div class="relative flex flex-col h-full">
        <div v-if="$settings.sections.products.add_to_wishlist.active" class="absolute top-1 right-2 z-10">
            <button v-if="$store.state.wishlist.find(i => i._id == item._id)" @click="removeFromWishlist"
                title="Wishlist" class="p-2 m-2 rounded-md hover:bg-gray-200">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 text-red-600">
                    <path fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                    </path>
                </svg>
            </button>
            <button v-else @click="addToWishlist" title="Wishlist" class="p-2 m-2 rounded-md hover:bg-gray-200">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5">
                    <path fill="currentColor"
                        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z">
                    </path>
                </svg>
            </button>
        </div>
        <div v-if="discount"
            class="absolute top-0 left-0 z-10 flex items-center justify-center h-10 p-2 text-white bg-red-700 rounded-br-lg">
            <b>-{{ discount.value }} {{ discount.type == 'percentage' ? '%' : this.$store.state.currency.symbol }}</b>
        </div>
        <div class="relative flex h-full overflow-hidden">
            <div class="flex flex-col w-full h-full shadow-md">
                <div class="relative w-full pb-full">
                    <nuxt-link :to="`/products/${item.slug}`" :title="item.name" :aria-label="item.name">
                        <si-image width="400" height="400" class="absolute inset-0 object-cover w-full h-full"
                            :src="item.images.length > 0 ? item.images[0].src : null" :alt="item.name" />
                    </nuxt-link>
                </div>
                <div class="flex flex-col h-full text-center mt-4">
                    <nuxt-link :to="`/products/${item.slug}`" class="flex-1">
                        <h3 class="tracking-widest text-gray-500 md:text-lg dark:text-gray-400">{{ item.name }}</h3>
                    </nuxt-link>
                    <hr class="my-1">
                    <div class="flex items-center justify-center mb-2" v-if="$settings.sections.products.show_reviews">
                        <div class="flex mb-1">
                            <span v-for="(star, i) in 5"
                                :class="star <= item.review.rating ? 'text-yellow-500 ' : 'text-gray-400'" :key="i">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5">
                                    <path fill="currentColor"
                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <span class="text-sm text-gray-600" key="count">({{ item.review.reviews.length }})</span>
                    </div>
                    <div class="flex items-center justify-between px-2 mb-2">
                        <si-product-price :type="item.type" :price="item.price"
                            :variants="item.variants"></si-product-price>
                        <div v-if="outofstock && item.type == 'simple'"
                            class="flex justify-center p-2 text-white bg-red-700">
                            <b>{{ 'Out of stock' }}</b>
                        </div>
                        <button v-else-if="$settings.sections.products.add_to_cart.active" @click="addToCart"
                            class="product-card__quick-buy-button" aria-label="+ Ajouter">
                            <div>
                                <svg width="25" height="21" viewBox="0 0 25 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g
                                        clip-path="url(#clip0_2144_8410_template--16245780381832__featured_collection_HFhdpD)">
                                        <path
                                            d="M18.7269 5.09503H17.7064L13.8633 0.659996C13.6994 0.468331 13.4045 0.441587 13.2032 0.602051C13.002 0.758057 12.9739 1.03887 13.1424 1.23053L16.4893 5.09503H5.83995L9.1869 1.23053C9.35074 1.03887 9.32265 0.758057 9.12605 0.602051C8.92476 0.446044 8.62986 0.472788 8.46602 0.659996L4.62756 5.09057H3.60709C1.99681 5.09503 0.690796 6.33862 0.690796 7.87194C0.690796 8.12155 0.728244 8.37116 0.793779 8.6074L2.82067 15.6009C2.82067 15.6009 2.83472 15.6321 2.8394 15.6455V15.6589C3.21388 16.8312 4.3467 17.6335 5.63398 17.6379H16.7C18.0107 17.6379 19.1575 16.8 19.5086 15.6009L21.5355 8.6074C21.9615 7.12757 21.0534 5.59871 19.4993 5.19309C19.2465 5.12623 18.9843 5.09503 18.7269 5.09503ZM16.7 16.7509H5.63398C4.98332 16.7509 4.3701 16.4434 4.0003 15.9308H18.329C17.9592 16.4434 17.3507 16.7509 16.6953 16.7509H16.7ZM20.6367 8.37116L18.7035 15.0393H3.6305L1.69722 8.37116C1.407 7.36826 2.02489 6.32971 3.07813 6.05335C3.25133 6.00878 3.42453 5.98649 3.60241 5.98649H18.7222C19.8176 5.98649 20.7023 6.82893 20.7023 7.87194C20.7023 8.04132 20.6789 8.2107 20.6321 8.37116H20.6367Z"
                                        fill="black"></path>
                                    </g>
                                    <circle cx="18.7857" cy="14.7856" r="5.71429" fill="#054A3C"></circle>
                                    <path
                                        d="M21.4251 14.4678H19.1042V12.1468C19.1042 12.0587 19.0744 11.9774 19.0149 11.918C18.9555 11.8585 18.8743 11.8287 18.7861 11.8287C18.6979 11.8287 18.6167 11.8585 18.5573 11.918C18.4978 11.9774 18.468 12.0587 18.468 12.1468V14.4678H16.1471C16.0589 14.4678 15.9777 14.4976 15.9182 14.557C15.8588 14.6165 15.829 14.6977 15.829 14.7859C15.829 14.874 15.8588 14.9552 15.9182 15.0147C15.9777 15.0741 16.0589 15.104 16.1471 15.104H18.468V17.4249C18.468 17.5131 18.4978 17.5943 18.5573 17.6537C18.6167 17.7132 18.6979 17.743 18.7861 17.743C18.8743 17.743 18.9555 17.7132 19.0149 17.6537C19.0744 17.5943 19.1042 17.513 19.1042 17.4249V15.104H21.4251C21.5133 15.104 21.5945 15.0741 21.654 15.0147C21.7134 14.9552 21.7432 14.874 21.7432 14.7859C21.7432 14.6977 21.7134 14.6165 21.654 14.557C21.5945 14.4976 21.5133 14.4678 21.4251 14.4678Z"
                                        fill="white" stroke="white" stroke-width="0.2"></path>
                                    <defs>
                                        <clipPath id="clip0_2144_8410_template--16245780381832__featured_collection_HFhdpD">
                                            <rect width="20.9524" height="17.1429" fill="white"
                                                transform="translate(0.690796 0.5)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span>&ensp;</span>
                            <span class="w-full" v-if="added">{{ $settings.sections.products.added_text }}</span>
                            <span class="w-full" v-else>{{ $settings.sections.products.confirm_text }}</span>                            
                        </button>
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <si-product-variants v-if="item.type == 'variable'" showPrice :options="item.options"
                            :variants="item.variants" :images="item.images"
                            @selected="variantSelected"></si-product-variants>
                        <hr v-if="item.type == 'variable'" class="my-1 w-full">
                        <div class="flex justify-center mt-4" v-show="!outofstock">
                            <si-product-quantity @selected="quantitySelected" :quantity="quantity"></si-product-quantity>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        upsell: { type: Object, default: null },
        item: Object,
    },
    async fetch() {
        if (this.item.type == 'simple') {
            if (this.discount) {
                this.item.originalPrice = this.$tools.copy(this.item.price);
                if (this.discount.type == 'percentage') {
                    this.item.price.salePrice = this.item.price.salePrice - (this.item.price.salePrice * this.discount.value / 100)
                    this.item.price.comparePrice = this.item.price.comparePrice - (this.item.price.comparePrice * this.discount.value / 100)
                } else {
                    this.item.price.salePrice = this.item.price.salePrice - this.discount.value
                    this.item.price.comparePrice = this.item.price.comparePrice - this.discount.value
                }
            }
            if (!this.item.outStock.disabled && this.item.quantity.instock <= 0) {
                this.outofstock = true;
            }
        } else {
            if (this.discount) {
                this.item.variants.forEach(variant => {
                    variant.originalPrice = this.$tools.copy(variant.price)
                    if (this.discount.type == 'percentage') {
                        variant.price.salePrice = variant.price.salePrice - (variant.price.salePrice * this.discount.value / 100)
                        variant.price.comparePrice = variant.price.comparePrice - (variant.price.comparePrice * this.discount.value / 100)
                    } else {
                        variant.price.salePrice = variant.price.salePrice - this.discount.value
                        variant.price.comparePrice = variant.price.comparePrice - this.discount.value
                    }
                });
            }
            if (!this.item.outStock.disabled && this.item.variants[0] && this.item.variants[0].quantity.instock <= 0) {
                this.outofstock = true;
            } else {
                this.outofstock = false;
            }
        }
    },
    data() {
        return {
            filpped: false,
            added: false,
            variant: this.item.type == 'variant' ? this.item.variants[0] : null,
            quantity: this.item.quantity,
            price: { salePrice: 0, comparePrice: 0 },
            discount: this.upsell ? this.upsell.discount : null,
            outofstock: false
        }
    },
    methods: {
        addToCart() {
            let item = {
                _id: this.item._id,
                quantity: this.quantity.value ? this.quantity.value : this.item.quantity.default,
                price: this.variant ? this.variant.price.salePrice : this.item.price.salePrice,
                variant: this.variant ? { _id: this.variant._id } : null,
                upsell: this.upsell
            };
            this.$tools.call('ADD_TO_CART', item);
            this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
            this.added = true;
            if (this.$settings.sections.products.add_to_cart_to_checkout) {
                setTimeout(() => {
                    window.location.href = '/checkout2';
                }, 500);
            }
            setTimeout(() => {
                this.added = false;
            }, 2000);
            this.$storeino.fbpx('AddToCart', {
                content_name: this.item.name,
                content_ids: [this.item._id],
                content_type: "product",
                value: this.variant ? this.variant.price.salePrice : this.item.price.salePrice,
                currency: this.$store.state.currency && this.$store.state.currency.code ? this.$store.state.currency.code : "USD"
            })
        },
        variantSelected(variant) {
            this.variant = variant;
            if (!this.item.outStock.disabled && this.variant.quantity.instock <= 0) {
                this.outofstock = true;
            } else {
                this.outofstock = false;
            }
            this.quantitySelected(this.item.quantity.value);
        },
        quantitySelected(quantity) {
            this.item.quantity.value = quantity;
            if (this.variant) {
                this.price.salePrice = this.variant.price.salePrice * quantity;
                this.price.comparePrice = this.variant.price.comparePrice * quantity;
            } else {
                this.price.salePrice = this.item.price.salePrice * quantity;
                this.price.comparePrice = this.item.price.comparePrice * quantity;
            }
        },
        addToWishlist() {
            this.$tools.call('ADD_TO_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.added_to_wishlist);
        },
        removeFromWishlist() {
            this.$tools.call('REMOVE_FROM_WISHLIST', this.item);
            this.$tools.toast(this.$settings.sections.alerts.removed_from_wishlist);
        }
    },
}
</script>

<style scoped>
.close-button {
    position: absolute;
    right: 1px;
    top: 1px;
}

.close-icon {
    display: block;
    width: 30px;
    height: 30px;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    background: #ffffff;
    border: 7px solid #ffffff;
    box-shadow: 0 0 5px #00000022;
}

.close-icon::before,
.close-icon::after {
    content: '';
    width: 40px;
    height: 2px;
    display: block;
    position: absolute;
    background-color: #7c7c7c;
}

.close-icon::before {
    transform: rotate(45deg);
    top: 14px;
    left: -5px;
}

.close-icon::after {
    transform: rotate(-45deg);
    top: 0px;
    left: -5px;
}

.icon-star::before {
    content: '\e918';
    font-size: 14px !important;
}

.flip-enter-active,
.flip-leave-active {
    transition: transform .5s;
}

.flip-enter,
.flip-leave-to {
    transform: translateX(-100%);
}

.product-card__quick-buy-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    width: 50px;
    height: 50px;
}

.product-card__quick-buy-button svg {
    fill: white;
}

.button__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
}

.button__loader span {
    display: inline-block;
    width: 4px;
    height: 4px;
    margin: 0 2px;
    background: white;
    border-radius: 50%;
    animation: loader 0.8s infinite alternate;
}

.button__loader span:nth-child(2) {
    animation-delay: 0.2s;
}

.button__loader span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes loader {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.5);
    }
}
</style>
