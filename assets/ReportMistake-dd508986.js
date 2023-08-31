import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, j as renderSlot, g as createCommentVNode, p as pushScopeId, k as popScopeId } from "./app-8331cbf7.js";
const ReportMistake_vue_vue_type_style_index_0_scoped_9b38b4f9_lang = "";
const _sfc_main = {};
const _withScopeId = (n) => (pushScopeId("data-v-9b38b4f9"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "mistake" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "legend",
  null,
  "Mistake",
  -1
  /* HOISTED */
));
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "thead",
  null,
  [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", { class: "dont" }, "Don't"),
      /* @__PURE__ */ createBaseVNode("th", { class: "do" }, "Do")
    ])
  ],
  -1
  /* HOISTED */
));
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "problem" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "legend",
  null,
  "Problem",
  -1
  /* HOISTED */
));
const _hoisted_8 = { class: "solution" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "legend",
  null,
  "Solution",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("fieldset", _hoisted_1, [
      _hoisted_2,
      renderSlot(_ctx.$slots, "mistake", {}, void 0, true),
      _ctx.$slots["example-1-bad"] ? (openBlock(), createElementBlock("table", _hoisted_3, [
        _hoisted_4,
        createBaseVNode("tbody", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-1-bad", {}, void 0, true)
            ]),
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-1-good", {}, void 0, true)
            ])
          ]),
          _ctx.$slots["example-2-bad"] ? (openBlock(), createElementBlock("tr", _hoisted_5, [
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-2-bad", {}, void 0, true)
            ]),
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-2-good", {}, void 0, true)
            ])
          ])) : createCommentVNode("v-if", true)
        ])
      ])) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("fieldset", _hoisted_6, [
      _hoisted_7,
      renderSlot(_ctx.$slots, "problem", {}, void 0, true)
    ]),
    createBaseVNode("fieldset", _hoisted_8, [
      _hoisted_9,
      renderSlot(_ctx.$slots, "solution", {}, void 0, true)
    ])
  ]);
}
const ReportMistake = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b38b4f9"], ["__file", "ReportMistake.vue"]]);
export {
  ReportMistake as default
};
