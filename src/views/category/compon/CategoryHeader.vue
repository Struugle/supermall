<template>
    <div class="header">
       <header-bar>
           <div slot="center">商品分类</div>
       </header-bar>
    </div>
</template>

<script>
    import HeaderBar from 'components/common/headerBar/HeaderBar'
  export default {
    name: "CategoryHeader",
    components: {
      HeaderBar
    }
  }
</script>

<style scoped>

</style>