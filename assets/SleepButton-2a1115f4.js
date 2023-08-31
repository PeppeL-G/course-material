import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as renderSlot } from "./app-8331cbf7.js";
const _sfc_main = {
  props: {
    sleepMs: Number
  },
  methods: {
    sleep() {
      const timeToWakeUp = Date.now() + this.sleepMs;
      let i = 0;
      while (Date.now() < timeToWakeUp) {
        i++;
      }
      console.log(`SleepButton.sleep() did ${i} iterations.`);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.sleep && $options.sleep(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SleepButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SleepButton.vue"]]);
export {
  SleepButton as default
};
