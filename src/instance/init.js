export function initMixin(Vue) {
  Vue.prototype._init_ = function(options) {
    const vm = this;
    vm.$options = options;
    initState(vm);
  };
}
