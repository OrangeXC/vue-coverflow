<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <coverflow :coverList="coverList" :coverWidth="260" :width="1000"></coverflow>
  </div>
</template>

<script>
import Coverflow from './components/Coverflow'

export default {
  name: 'app',
  data () {
    return {
      coverList: [
        {
          cover: 'https://o2mb72adu.qnssl.com/FmRIyHQzKQcik9GRKA3xh6R7wpks?imageMogr2/crop/!520x694a0a0',
          title: '敢玩顽童'
        }, {
          cover: 'https://o2mb72adu.qnssl.com/FozwPyVUNFmzd8IwA8_I3Sd6IGzr?imageMogr2/crop/!520x694a0a0',
          title: '别闹了，小瓜小野'
        }, {
          cover: 'https://o2mb72adu.qnssl.com/Fj44oaZzEadifcrMmP7vSXi96hs4?imageMogr2/crop/!520x694a0a0',
          title: '我们怂着呢'
        }, {
          cover: 'https://o2mb72adu.qnssl.com/FhEVNj696z2UoCUd6LokXPoi4qsd?imageMogr2/crop/!520x694a0a0',
          title: '野生兄弟'
        }
      ]
    }
  },
  components: {
    Coverflow
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
