<template>
  <body>
    <remote-script src="https://open.ys7.com/sdk/js/1.4/ezuikit.js"></remote-script>

    <video id="myPlayer" poster="" controls playsInline webkit-playsinline autoplay>
        <!-- Test video -->
        <source src="rtmp://rtmp.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd" type="rtmp/flv" />
        <source src="http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8" type="application/x-mpegURL" />

        <!-- Mengyang Video -->
        <!-- <source src="rtmp://rtmp.open.ys7.com/openlive/be2ddde049824c2d8ac768f9492213db" type="rtmp/flv" />
        <source src="http://hls.open.ys7.com/openlive/be2ddde049824c2d8ac768f9492213db.m3u8" type="application/x-mpegURL" /> -->
    </video>
  </body>
</template>

<script>
  import "../shared/RemoteScript.js";
  export default {
    name: "VideoTest"
  }
  import "./player.js"
</script>


<style lang="postcss" scoped>
  @import "./Video.scss"
</style>
