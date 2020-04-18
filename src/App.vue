<template>
    <div id="app">
        <main-tab-bar/>
        <keep-alive exclude="Detail">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainBtaBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data() {
    return {
    }
  },

}
</script>

<style lang="less">
    @import 'assets/css/base.css';
    @import '~font-awesome/css/font-awesome.min.css';
    #app {
        overflow: hidden;
    }

</style>
