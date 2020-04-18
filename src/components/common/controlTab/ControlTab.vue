<template>
    <div class="control">
        <div v-for="(item,index) in titles" @click="itemClick(index)">
            <span :class="{active:currentIndex === index}">{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ControlTab",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index

        this.$emit('currentIndex',index)
      }
    }
  }
</script>

<style scoped lang="less">
    .control {
        display: flex;
        margin-top: 10px;
        background: #fff;
        font-size: 14px;
    }
    .control div {
        flex: 1;
        display: flex;
        justify-content: space-around;
    }
    span {
         padding: 10px;
     }
    .active {
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-high-text);
    }
</style>