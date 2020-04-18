<template>
    <div class="bg">
        <scroll class="content">
            <ul class="sidebar">
                <li v-for="(item,index) in category"
                    :class="index == currentIndex ? 'active' : 'reactive'"
                    @click="itemClick(index,item.maitKey)">
                    {{item.title}}
                </li>
            </ul>

        </scroll>
    </div>

</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "CategorySidebar",
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      Scroll
    },
    props: {
      category: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index,id) {
        this.currentIndex = index
        this.$emit('postId',id)
      }
    }
  }
</script>

<style scoped>
    .sidebar {
        height: 100%;
        width: 100px;
        font-size: 14px;
    }
    .sidebar li {
        width: 100%;
        height: 45px;
        text-align: center;
        line-height: 45px;
    }
    .reactive {
        background: #eee;
    }
    .active {
        background: #fff;
        color: var(--color-high-text);
        font-weight: bold;
        border-left: 3px solid var(--color-high-text);
    }
    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
    }
    .bg {
        width: 100px;
        height: 100%;
        background: #eee;
        float: left;
    }
</style>