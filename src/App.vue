<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <cho-button @click="clickme('传点内容-default')" type="default">这是我的 Default 按钮</cho-button>
    <br /><br />
    <cho-button @click="clickme('传点内容-primary')" type="primary">这是我的 Primary 按钮</cho-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    clickme(content) {
      console.log('custom button content: ', content);
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
