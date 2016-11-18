<template>
  <div class="coverflow"
    :data-size="coverflowOption.coverWidth"
    :data-spacing="coverflowOption.coverSpace"
    :data-shadow="coverflowOption.coverShadow"
    :data-flat="coverflowOption.coverFalt"
    :data-bgcolor="coverflowOption.bgColor"
    :data-width="coverflowOption.width"
    :data-index="coverflowOption.index">
    <img :src="coverItem.cover"
      :data-info="coverItem.title"
      v-for="(coverItem, index) of coverflowOption.coverList">
  </div>
</template>

<script>
import './coverflow.js'

export default {
  name: 'original',
  data () {
    return {
    }
  },
  props: {
    coverflowOption: {
      type: Object,
      required: true
    }
  },

}
</script>

<style>
</style>
