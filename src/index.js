 /**
 *
 * vue-coverflow
 * author @orangexc
 *
 */

var CoverflowComponent = require('./components/coverflow.vue')

var coverflow = {
  coverflow: CoverflowComponent,
  install: function (Vue) {
    Vue.component('coverflow', CoverflowComponent)
  }
}

module.exports = coverflow
