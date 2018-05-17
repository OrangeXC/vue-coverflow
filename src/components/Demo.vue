<template>
  <div class="demo">
    <h2>Demo 1</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :index="2" @change="handleChange"></coverflow>
    <pre v-highlightjs>
      <code class="javascript">
        // all example uses the same js
        import { coverflow } from 'vue-coverflow'

        export default {
          name: 'app',
          data () {
            return {
              coverList: [
                {
                  cover: 'http://ogu51f989.bkt.clouddn.com/react.png',
                  title: 'React'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/angular.png',
                  title: 'Angular'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/vue.png',
                  title: 'Vue'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/webpack.png',
                  title: 'Webpack'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/yarn.png',
                  title: 'Yarn'
                }, {
                  cover: 'http://ogu51f989.bkt.clouddn.com/node.png',
                  title: 'Node'
                }
              ]
            }
          },
          components: {
            coverflow
          }
        }
      </code>
      <code class="html">{{ codeOne }}</code>
    </pre>
    <h2>Demo 2</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :index="2" bgColor="#333"></coverflow>
    <pre v-highlightjs>
      <code class="html">{{ codeTwo }}</code>
    </pre>
    <h2>Demo 3</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :index="2" :coverShadow="true"></coverflow>
    <pre v-highlightjs>
      <code class="html">{{ codeThree }}</code>
    </pre>
    <h2>Demo 4</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :coverSpace="100" :index="0" :coverFlat="true"></coverflow>
    <pre v-highlightjs>
      <code class="html">{{ codeFour }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      coverList: [
        {
          cover: 'https://i.loli.net/2018/05/17/5afd1b86b16cf.png',
          title: 'React'
        }, {
          cover: 'https://i.loli.net/2018/05/17/5afd1b85854af.png',
          title: 'Angular'
        }, {
          cover: 'https://i.loli.net/2018/05/17/5afd1b86b3f5d.png',
          title: 'Vue'
        }, {
          cover: 'https://i.loli.net/2018/05/17/5afd1b86bc332.png',
          title: 'Webpack'
        }, {
          cover: 'https://i.loli.net/2018/05/17/5afd1b86c9a2b.png',
          title: 'Yarn'
        }, {
          cover: 'https://i.loli.net/2018/05/17/5afd1b8585556.png',
          title: 'Node'
        }
      ],
      codeOne: `
      <coverflow :coverList="coverList" :coverWidth="260" :index="2"></coverflow>
      `,
      codeTwo: `
      <coverflow :coverList="coverList" :coverWidth="260" :index="2" bgColor="#ddd"></coverflow>
      `,
      codeThree: `
      <coverflow :coverList="coverList" :coverWidth="260" :index="2" :coverShadow="true"></coverflow>
      `,
      codeFour: `
      <coverflow :coverList="coverList" :coverWidth="260" :coverSpace="100" :index="0" :coverFlat="true"></coverflow>
      `
    }
  },
  methods: {
    handleChange (index) {
      // eslint-disable-next-line
      console.log(`[Demo 1] You have click cover ${index}`)
    }
  }
}
</script>

<style scoped>
.demo {
  width: 980px;
  margin: 0 auto;
}
</style>
