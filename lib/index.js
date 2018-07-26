import coverflow from './Coverflow.vue'

coverflow.install = (Vue) => {
  Vue.component(coverflow.name, coverflow)
}

export default coverflow
