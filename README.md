<p align="center"><img width="100" src="https://i.loli.net/2019/09/03/BRu8meD2T41nNvj.png" alt="vue-coverflow logo"></p>

<p align="center">
  <a href="https://travis-ci.com/OrangeXC/vue-coverflow"><img src="https://travis-ci.com/OrangeXC/vue-coverflow.svg?branch=master" alt="Build Status"></a>
  <a href="https://codecov.io/gh/OrangeXC/vue-coverflow"><img src="https://img.shields.io/codecov/c/github/OrangeXC/vue-coverflow/master.svg" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue-coverflow?minimal=true"><img src="https://img.shields.io/npm/dm/vue-coverflow" alt="Npm download"></a>
  <a href="https://www.npmjs.com/package/vue-coverflow"><img src="https://img.shields.io/npm/v/vue-coverflow" alt="Npm version"></a>
  <a href="https://github.com/OrangeXC/vue-coverflow/blob/master/LICENSE"><img src="https://img.shields.io/github/license/orangexc/vue-coverflow" alt="GitHub License"></a>
</p>

## Introduction

vue-coverflow is a vue2 component to simulate the Apple Cover Flow UI effect, without dependency.

### [Demo](https://vue-coverflow.orangexc.xyz/) | [案例](https://vue-coverflow.orangexc.xyz/)

## Install

```bash
npm i vue-coverflow
# or
yarn add vue-coverflow
```

## Use

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

## Options

### Attributes
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

### Events

| Event Name     | description    | Parameters |
| :------------- |:---------------| :--------- |
| change         | triggers when the selected cover changes |  the index of the curent cover |

## Develop

```bash
$ git clone https://github.com/OrangeXC/vue-coverflow.git

$ cd vue-coverflow

$ yarn

$ yarn serve
```

## License

Vue-coverflow is [MIT licensed](https://github.com/OrangeXC/vue-coverflow/blob/master/LICENSE).
