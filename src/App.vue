<!-- 1.模板 :html结构 -->
<template>
  <div id="app">
   <h1>{{title}}</h1>
    <div class="container" id="player">
      <my-video :sources="video.sources" :options="video.options"></my-video>
    </div>
  </div>
</template>

<!-- 2.行为 :处理逻辑 -->
<script>
import myVideo from 'vue-video'
export default {
  name: 'App',
  data(){
    return {
      video: {
        sources: [{
          src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'video/mp4'
        }],
        options: {
          autoplay: true,
          volume: 0.6,
          poster: 'https://i0.hdslb.com/bfs/safety-center/68f6cef0fff4135f7c0db123f2c78cc4e39aa58d.png'
        }
      },
      title:"这是我的第一个Vue脚手架项目!!!"
    }
  },
  components: {
    myVideo
  }
}
</script>

<!-- 3.样式:解决样式 -->
<style>
#player{
  width: 500px;
  height: 300px;
}
</style>
