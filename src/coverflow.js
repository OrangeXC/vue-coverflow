import Coverflow from './components/Coverflow'

const coverflow = {
  Coverflow
}

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  Vue.component(Coverflow.name, Coverflow)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '2.0.0',
  install,
  Coverflow
}
