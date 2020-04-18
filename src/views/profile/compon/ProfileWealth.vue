<template>
    <div class="wealth">
        <div class="item">
            <p class="number"><span>0</span>元</p>
            <p class="my">我的余额</p>
        </div>
        <div class="item">
            <p class="number"><span>0</span>个</p>
            <p class="my">我的优惠</p>
        </div>
        <div class="item">
            <p class="number"><span>0</span>分</p>
            <p class="my">我的积分</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProfileWealth"
  }
</script>

<style scoped>
    .wealth {
        display: flex;
        height: 70px;
        align-items: center;
        border-bottom: 10px solid #eee;
        box-sizing: content-box;
    }
    .item {
        flex: 1;
        text-align: center;
    }
    .item:nth-child(1),.item:nth-child(2) {
        border-right: 1px solid #ccc;
    }

    .item span {
        color: var(--color-high-text);
        font-size: 18px;
    }
</style>