<template>
  <div id="app">
    <!--    路由容器-->
    <header>
      <router-link to="/logo">logo按钮</router-link>
      <router-link to="/chat">chat按钮</router-link>
      <router-link to="/home">home按钮</router-link>
      <router-link to="/text">text按钮</router-link>
      <router-view></router-view>
    </header>
    <footers></footers>
  </div>
</template>

<script>
  import footers from './views/footers.vue'

  export default {
    name: 'app',
    methods:{

    },
    components: {
      'footers':footers,
    },
  }
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  #app{
    width: 100%;
    text-align: center;
  }
  #app header {
    height:61px;
    padding-right: 0;
    background-color: darkorange;
  }
  #app header > a {
    text-decoration: none;
    float: left;
    width: 15%;
    padding: 20px 0px 20px 0px;
    background-color: darkorange;
  }

  #app header > a:nth-of-type(1) {
    margin-left: 20%;
    background-color: rgb(143, 226, 208);
  }

  #app header > div {
    float: left;
    background-color: #e2e3dd;
    width: 100%;
  }
</style>