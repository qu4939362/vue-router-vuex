<template>
    <div id="home">
        <router-view></router-view>
        <p>内容123</p>
    </div>

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    #home{
        /*padding-top: 200px;*/
        height: 500px;
    }
    #home p{
        float: left;
        width: 100%;
        margin-top: 100px;
    }
</style>