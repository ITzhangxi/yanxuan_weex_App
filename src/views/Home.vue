<template>
    <!--首页-->
    <div id="home" :class="['wrapper', isipx()?'w-ipx':'']">
        <header></header>
        <text></text>
    </div>
</template>
<script>
    import Header from '../components/Header.vue'
    export default {
        components:{
            header:Header
        }
    }
</script>