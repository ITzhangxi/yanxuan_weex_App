<template>
    <!--首页-->
    <div id="home" :class="['wrapper', isipx()?'w-ipx':'']">
        <header></header>
        <tab></tab>
        <text></text>
    </div>
</template>
<script>
    import Header from '../components/Header.vue'
    import Tab from '../components/Tab.vue'
    export default {
        components:{
            header:Header,
            tab:Tab
        }
    }
</script>