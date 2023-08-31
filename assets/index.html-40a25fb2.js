import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "svelte",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#svelte",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Svelte")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://svelte.dev/tutorial/basics",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "(1) Introduction"),
    /* @__PURE__ */ createBaseVNode("li", null, "(2) Reactivity"),
    /* @__PURE__ */ createBaseVNode("li", null, "(3) Props"),
    /* @__PURE__ */ createBaseVNode("li", null, "(4) Logic"),
    /* @__PURE__ */ createBaseVNode("li", null, "(5) Events"),
    /* @__PURE__ */ createBaseVNode("li", null, "(6) Bindings"),
    /* @__PURE__ */ createBaseVNode("li", null, "(7) Lifecycle"),
    /* @__PURE__ */ createBaseVNode("li", null, "(8) Stores"),
    /* @__PURE__ */ createBaseVNode("li", null, "(13) Advanced styling")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Svelte is a frontend framework we can use to implement Single-Page Applications in a very convenient way. There is no recording for this lecture. Instead, use their excellent "),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Tutorial"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to learn the basics of Svelte. You don't need to read of it, but at least the following parts:")
    ]),
    _hoisted_3
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
