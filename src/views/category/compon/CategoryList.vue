<template>
    <scroll class="content">
        <div class="list">
            <div v-for="(item,index) in categoryList" :key="index" class="item">
                <a :href="item.link"><img :src="item.image" alt=""></a>
                <p>{{item.title}}</p>
            </div>
        </div>
        <control-tab :titles="['综合','新品','销量']"/>
    </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import ControlTab from 'components/common/controlTab/ControlTab'
  export default {
    name: "CategoryList",
    components: {
      Scroll,
      ControlTab
    },
    props: {
      categoryList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 12px;
        padding: 20px 10px 0 10px;
        text-align: center;
    }
    .content {
        float: left;
        height: calc(100% - 93px);
        width: calc(100% - 100px);
    }
    .list img {
        width: 50px;
        height: 50px;
    }
    .item {
        margin:0 10px 20px 0;
    }
</style>