<template>
    <div class="pro-file">
        <profile-header/>
        <profile-info @click.native="headerClick()"/>
        <profile-wealth/>
        <profile-list/>
        <login ref="login"/>
    </div>
</template>

<script>
  import ProfileHeader from './compon/ProfileHeader'
  import ProfileInfo from './compon/ProfileInfo'
  import ProfileWealth from './compon/ProfileWealth'
  import ProfileList from './compon/ProfileList'
  import Login from '../../components/common/login/Login'
  export default {
    name: "ProFile",
    components: {
      ProfileHeader,
      ProfileInfo,
      ProfileWealth,
      ProfileList,
      Login
    },
    methods: {
      headerClick() {
        this.$refs.login.$data.isShow = !this.$refs.login.$data.isShow
      }
    }
  }
</script>

<style scoped>
    .pro-file {
        position: relative;
        height: 100vh;
    }
</style>