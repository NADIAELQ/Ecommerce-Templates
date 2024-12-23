<template>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center flex-wrap">
                <div class="text-black" v-html="description.replace(/__YEAR__/gi, year)">
                </div>
            </div>
        </div>
        <div id="madeby" class="bg-primary" style="padding:0.5em;color:white;text-align:center"><small>Made by <a style="color:#03a9f4" href="//www.storeino.com/" target="_blank">Storeino.com</a></small></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
            title: this.$settings.sections.footer.copyright.store_name,
            description: this.$settings.sections.footer.copyright.text
        }
    },
}
</script>