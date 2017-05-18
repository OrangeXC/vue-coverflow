# vue-coverflow

![](http://ogu51f989.bkt.clouddn.com/vue-coverflow.jpeg)

> vue-coverflow is a vue2 component to simulate the Apple Cover Flow UI effect, without jQuery.

> **Chrome & Safari are only supported now.**

[![NPM](https://nodei.co/npm/vue-coverflow.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-coverflow/)

### Install

```
npm install vue-coverflow --save
```

### Use

```
// Use in component
import { coverflow } from 'vue-coverflow'

export default {
  data () {
    return {
      coverflowOption: {
        // ...
      }
    }
  },
  components: {
    coverflow
  }
}
```

```
<coverflow :options="coverflowOption"></coverflow>
```

### Options

You can set them to your data()->coverflowOption

| protype        | type         | description    | example |
| :------------- |:-------------|:---------------| :------ |
| coverList      | Array        |  Each object contains two elements, cover is image's url, title will be showed on the bottom of cover |  [{ cover: '', title: ''}] |
| coverWidth     | Number       |  width of each cover(default: 64px)             |       |
| coverSpace     | Number       |  spaceing between two cover(default: 10px)                     |       |
| coverShadow    | Boolean      |  reflection effect, total height will be changed to two times (default: false)                      |       |
| coverFalt      | Boolean      |  disable 3D rotation(default: false)      |       |
| bgColor        | String       |  background color(default: 'transparent')                    |       |
| width          | Number       |  width of coverflow |  |
| index          | Number       |  which cover checked(default: 0) |  |

> If you change the options you should refresh page, because reload can trigger window.onload

### Develop and Demo

```
yarn add
or
npm install

npm run dev
```

### License

The ISC License.
