<template>
    <div class="comment">
        <div class="header">
            <span>用户评论</span>
            <span>更多</span>
        </div>
        <div class="avatar-box clear-fix" v-if="commentData.user">
            <img :src="commentData.user.avatar"/>
            <span>{{commentData.user.uname}}</span>
        </div>
        <div class="content">{{commentData.content}}</div>
        <div class="create-time">{{getTime + commentData.style}}</div>
        <div class="comment-img">
            <img :src="item" alt="" v-for="item in commentData.images">
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailComment",
    props: {
      commentData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      getTime() {
        return new Date(parseInt(this.commentData.created) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
      }
    }
  }
</script>

<style scoped>
    .comment {
        margin:5px;
    }
    .header {
        line-height: 50px;
        border-bottom: 3px solid #f2f5f8;
    }
    .header span:nth-child(1) {
        margin-left: 10px;
    }
    .header span:nth-child(2) {
        margin-right: 10px;
        float: right;
        font-weight: bold;
    }
    .avatar-box {
        margin: 10px 0;
        line-height: 50px;
    }
    .avatar-box img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #eee;
        float: left;
        margin-right: 10px;
    }
    .content {
        font-size: 14px;
    }
    .create-time {
        color: #ccc;
        font-size: 12px;
        margin-top: 5px;
    }
    .comment-img {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 20px;
        border-bottom:3px solid #f2f5f8;
        margin-bottom: 5px;
    }
    .comment-img img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        margin-top: 5px;
    }
</style>