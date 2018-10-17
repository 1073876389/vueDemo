<!-- 1.模板 :html结构 -->
<template>
  <div id="test">
    <aplayer  id="player" autoplay
             :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  }"
    />
  </div>
</template>

<!-- 2.行为 :处理逻辑 -->
<script>
import Aplayer from 'vue-aplayer'
export default {
  name: 'test',
  components: {
    Aplayer
  }
}
</script>

<!-- 3.样式:解决样式 -->
<style>
#test{
  width: 300px;
  height: 100px;
}
</style>
