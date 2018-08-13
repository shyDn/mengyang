<template>
  <div>
    <div class="shy">BAIDU MAP TEST</div>
    <baidu-map class="bm-view" ak="QwRNizaywxTbk8SyNAa4RkPpP77IGb7q" :scrollWheelZoom="false" center="上海市浦东新区X607(华夏中路)"
      :zoom.sync="zoomValue" :minZoom="minZoom" :maxZoom="maxZoom">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-control>
        <button @click="zoomTo(15)">back</button>
      </bm-control>
      <bm-marker :position="{lng: 121.611806, lat: 31.178587}" :dragging="true" @click="zoomTo()">
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import { BaiduMap, BmNavigation, BmMarker, BmControl } from './map.js'

export default {
  name: 'MapTest',
  components: {
    BaiduMap,
    BmNavigation,
    BmMarker,
    BmControl
  },
  data() {
    return {
      zoomValue: 15,
      maxZoom: 19,
      minZoom: 13
    }
  },
  methods: {
    zoomTo(value) {
      if (value) {
        this.zoomValue = value;
        // BaiduMap.reset();
      } else {
        this.zoomValue = this.zoomValue === this.maxZoom ? this.minZoom : ++this.zoomValue
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./map.scss";
</style>
