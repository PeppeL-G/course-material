import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, j as renderSlot, g as createCommentVNode, p as pushScopeId, k as popScopeId } from "./app-8331cbf7.js";
const ExamQuestion_vue_vue_type_style_index_0_scoped_a4c92033_lang = "";
const _sfc_main = {
  props: {
    caption: String
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-a4c92033"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "exam-question" };
const _hoisted_2 = { class: "question" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Question",
  -1
  /* HOISTED */
));
const _hoisted_4 = {
  key: 0,
  class: "sample-answer"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Sample answer",
  -1
  /* HOISTED */
));
const _hoisted_6 = {
  key: 1,
  class: "marking-guidelines"
};
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Marking guidelines",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      renderSlot(_ctx.$slots, "question", {}, void 0, true)
    ]),
    _ctx.$slots["sample-answer"] ? (openBlock(), createElementBlock("div", _hoisted_4, [
      _hoisted_5,
      renderSlot(_ctx.$slots, "sample-answer", {}, void 0, true)
    ])) : createCommentVNode("v-if", true),
    _ctx.$slots["marking-guidelines"] ? (openBlock(), createElementBlock("div", _hoisted_6, [
      _hoisted_7,
      renderSlot(_ctx.$slots, "marking-guidelines", {}, void 0, true)
    ])) : createCommentVNode("v-if", true)
  ]);
}
const ExamQuestion = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a4c92033"], ["__file", "ExamQuestion.vue"]]);
export {
  ExamQuestion as default
};
