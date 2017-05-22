<template>
  <div id="app">
    <header class="head">vue-coverflow</header>
    <h2>Demo 1</h2>
    <coverflow :coverList="coverList" :coverWidth="260" :index="2"></coverflow>
    <pre v-highlightjs>
      <code class="javascript">
        // all example uses the same js
        import Coverflow from './components/Coverflow'

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
            Coverflow
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
    <footer class="foot">
      <a href="https://github.com/OrangeXC/vue-coverflow">Github</a> |
      <a href="http://orangexc.xyz/">Blog</a>
    </footer>
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
  components: {
    Coverflow
  }
}
</script>

<style>
body,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

ins, a {
  text-decoration: none;
}

ul {
  list-style: none;
}

html {
  font-size: 12px;
  line-height: 1.4em;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
}

.head, .foot {
  height: 64px;
  margin-bottom: 20px;

  background-color: #474a4f;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .10), 0 1px 4px rgba(0, 0, 0, .10);

  text-align: center;
  line-height: 64px;

  font-size: 24px;
  color: #fff;
}

.foot {
  margin-bottom: 0;
}

h2 {
  text-align: center;

  color: #808080;
}

a {
  color: #fff;
}

a:hover {
  color: #ddd;
}
</style>
