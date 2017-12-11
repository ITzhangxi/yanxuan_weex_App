<template>
    <div :class="['wrapper',isipx()?'w-ipx':'']">
        <div class="scan">
            <text class="iconfont">&#xe600;</text>
            <text class="txt">扫一扫</text>
        </div>
        <div class="searchBox">
            <div class="search">
                <text class="iconfont">&#xe603;</text>
                <input type="text" placeholder="搜索商品，共88888款好物" style="font-size: 10px">
            </div>
        </div>
        <div class="notice">
            <text class="iconfont">&#xe8a1;</text>
            <text class="txt">消息</text>
        </div>
    </div>
</template>
<style scoped>
    .wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding-top: 20px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: #fafafa;
    }
    .w-ipx {
        padding-top: 84px;
    }
    .scan{
        width: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .searchBox{
        flex: 1;
        padding-left: 20px;
        display: flex;
        background-color: rgb(237, 237, 237);
        border-radius: 4px;
    }
    .searchBox .search{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex: 1;
        justify-content: flex-end;
        padding-top: 10px;
    }

    .search input{
        flex: 1;
        background-color: rgb(237, 237, 237);
        margin-left: 3px;
    }
    .notice{
        width: 38px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .iconfont,.txt{
        color: #666;
        font-weight: 300;
        text-align: center;
    }
    .iconfont{
        font-size: 16px;
    }
    .txt{
        font-size: 8px;
    }
</style>
<script>
    export default {
    }
</script>