# vue-coverflow

![](http://ogu51f989.bkt.clouddn.com/banner.png)

## [Live Demo](http://orangex_c.coding.me/vue-coverflow-website/)

> vue-coverflow is a vue2 component to simulate the Apple Cover Flow UI effect, without jQuery.

[![NPM](https://nodei.co/npm/vue-coverflow.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-coverflow/)

### Install

```
npm install vue-coverflow --save
```

### Use

```js
// Use in component
import { coverflow } from 'vue-coverflow'

export default {
  data () {
    return {
      // options
    }
  },
  components: {
    coverflow
  }
}
```

```html
<coverflow options></coverflow>
```

> Detail please to Live Demo

### Options

You can set them to your data function

| protype        | type         | description    | example |
| :------------- |:-------------|:---------------| :------ |
| coverList      | Array        |  Each object contains two elements, cover is image's url, title will be showed on the bottom of cover(required: true) |  [{ cover: '', title: ''}] |
| width          | Number       |  width of coverflow |  |
| bgColor        | String       |  background color(default: '#fff')                    |       |
| index          | Number       |  which cover checked(default: 0) |  |
| coverWidth     | Number       |  width of each cover(default: 100px)             |       |
| coverSpace     | Number       |  spaceing between two cover(default: 50px)                     |       |
| coverShadow    | Boolean      |  reflection effect, total height will be changed to two times (default: false)                      |       |
| coverFalt      | Boolean      |  disable 3D rotation(default: false)      |       |

> If you change the options you should refresh page, because reload can trigger window.onload

### Develop

```
git clone https://github.com/OrangeXC/vue-coverflow.git

cd vue-coverflow

yarn add
or
npm install

npm run dev
```

### License

The ISC License.
