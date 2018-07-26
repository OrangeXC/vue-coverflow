# vue-coverflow

> vue-coverflow is a vue2 component to simulate the Apple Cover Flow UI effect, without dependency.

[![NPM](https://nodei.co/npm/vue-coverflow.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-coverflow/)

## [Demo](http://orangex_c.coding.me/vue-coverflow/) | [案例](http://orangex_c.coding.me/vue-coverflow/)

### Install

```bash
npm install vue-coverflow --save
# or
yarn add vue-coverflow
```

### Use

```js
// Use in component
import coverflow from 'vue-coverflow'

export default {
  components: {
    coverflow
  }
}

// Use in global
import coverflow from 'vue-coverflow'

Vue.component(coverflow.name, coverflow)

// or
Vue.use(coverflow)
```

```html
<coverflow [options]></coverflow>
```

### Options

#### Attributes
You can set them to your data function

| Attribute      | Type         | Description    | Example |
| :------------- |:-------------|:---------------| :------ |
| coverList      | Array        |  Each object contains two elements, cover is image's url, title will be showed on the bottom of cover(required: true) |  [{ cover: '', title: ''}] |
| width          | Number       |  width of coverflow(default: 980) |  |
| bgColor        | String       |  background color(default: 'transparent')                    |       |
| index          | Number       |  which cover checked(default: 0) |  |
| coverWidth     | Number       |  width of each cover(default: 100)             |       |
| coverHeight    | Number       |  height of highest cover(default: coverWidth)             |       |
| coverSpace     | Number       |  spaceing between two cover(default: 50)                     |       |
| coverShadow    | Boolean      |  reflection effect, total height will be changed to two times (default: false)                      |       |
| coverFalt      | Boolean      |  disable 3D rotation(default: false)      |       |

#### Events

| Event Name     | description    | Parameters |
| :------------- |:---------------| :--------- |
| change         | triggers when the selected cover changes |  the index of the curent cover |

### Develop

```bash
git clone https://github.com/OrangeXC/vue-coverflow.git

cd vue-coverflow

yarn # or npm install

yarn serve # or npm run serve
```

### License

MIT
