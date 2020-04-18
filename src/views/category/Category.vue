<template>
    <div class="category">
        <category-header/>
        <category-sidebar :category="category" @postId="getList"/>
        <category-list :categoryList="categoryList"/>
    </div>
</template>

<script>
  import CategoryHeader from './compon/CategoryHeader'
  import CategorySidebar from './compon/CategorySidebar'
  import Scroll from 'components/common/scroll/Scroll'
  import CategoryList from './compon/CategoryList'



  //网络请求文件导入
  import {getCategorySideBar,getCategoryList,getRecommendList} from 'network/category'
  export default {
    name: "Category",
    components: {
      CategoryHeader,
      CategorySidebar,
      Scroll,
      CategoryList
    },
    data() {
      return {
        category: [],
        categoryList: [],
        detailList: [],
      }
    },
    created() {
      console.log(this.try);
      //获取分类边栏title
      getCategorySideBar().then(res => {
        this.category = res.data.data.category.list
        console.log(this.category)
      })
      //获取分类
      getCategoryList(3627).then(res => {
        this.categoryList = res.data.data.list
      })
      //获取分类页推荐
      getRecommendList(10062603,'new').then(res => {
        console.log(res)
      })
    },
    methods: {
      getList(id) {
        getCategoryList(id).then(res => {
          this.categoryList = res.data.data.list
        })
      }
    },
  }
</script>

<style scoped>
    .category {
        height: 100vh;
        position: relative;
        position: fixed;
        width: 100vw;
    }
    /*.content {*/
        /*display: flex;*/
        /*height: 100%;*/
    /*}*/
</style>