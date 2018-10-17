<!-- 1.模板 :html结构 -->
<template>
  <div id="app">
    <ul>
      <li v-for="item in users">{{item}}</li>
    </ul>
  </div>
</template>

<!-- 2.行为 :处理逻辑 -->
<script>
  export default {
    name: 'User',
    data(){
      return {
        users:["mary","jack","lucy"]
      }
    }
  }
</script>

<!-- 3.样式:解决样式 -->
<style>
</style>
