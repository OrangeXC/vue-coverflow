 /**
 *
 * vue-coverflow
 * author @orangexc
 *
 */

var CoverflowComponent = require('./Coverflow.vue')

var coverflow = {
  coverflow: CoverflowComponent,
  install: function (Vue) {
    Vue.component('coverflow', CoverflowComponent)
  }
}

module.exports = coverflow
