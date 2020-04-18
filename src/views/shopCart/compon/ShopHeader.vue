<template>
    <header-bar>
        <div slot="center">购物车({{getLength}})</div>
    </header-bar>
</template>

<script>
    import HeaderBar from 'components/common/headerBar/HeaderBar'
    import { mapGetters } from 'vuex'
  export default {
    name: "ShopHeader",
    components: {
      HeaderBar
    },
    computed: {
        ...mapGetters(['getLength'])
    }
  }
</script>

<style scoped>

</style>