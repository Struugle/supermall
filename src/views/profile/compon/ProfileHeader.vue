<template>
    <div class="header">
        <header-bar>
            <div slot="center">个人中心</div>
        </header-bar>
    </div>
</template>

<script>
  import HeaderBar from 'components/common/headerBar/HeaderBar.vue'
  export default {
    name: "ProfileHeader",
    components: {
      HeaderBar
    },
  }
</script>

<style scoped>

</style>