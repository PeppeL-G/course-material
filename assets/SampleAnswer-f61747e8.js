import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as renderSlot, t as toDisplayString } from "./app-8331cbf7.js";
const SampleAnswer_vue_vue_type_style_index_0_scoped_c19ae339_lang = "";
function setTimeoutIfPossible(callback, delayInMs) {
  const maxDelayInMs = 2147483647;
  if (delayInMs <= maxDelayInMs) {
    return setTimeout(callback, delayInMs);
  }
}
const _sfc_main = {
  props: {
    showAfter: String
  },
  data() {
    const now = /* @__PURE__ */ new Date();
    const showAfterDate = new Date(this.showAfter);
    return {
      showAfterDate,
      showAnswer: showAfterDate < now
    };
  },
  mounted() {
    if (!this.showAnswer) {
      const now = /* @__PURE__ */ new Date();
      const timeLeftInMs = this.showAfterDate - now;
      this.timeoutId = setTimeoutIfPossible(() => {
        this.showAnswer = true;
      }, timeLeftInMs);
    }
  },
  destroyed() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
};
const _hoisted_1 = { class: "answer" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $data.showAnswer ? (openBlock(), createElementBlock("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])) : (openBlock(), createElementBlock(
      "div",
      _hoisted_3,
      " A sample answer will be shown here " + toDisplayString($data.showAfterDate.getFullYear()) + "-" + toDisplayString($data.showAfterDate.getMonth() + 1) + "-" + toDisplayString($data.showAfterDate.getDate()) + " " + toDisplayString($data.showAfterDate.getHours()) + ":" + toDisplayString($data.showAfterDate.getMinutes()) + ". ",
      1
      /* TEXT */
    ))
  ]);
}
const SampleAnswer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c19ae339"], ["__file", "SampleAnswer.vue"]]);
export {
  SampleAnswer as default
};
