import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "node-js",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#node-js",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Node.js")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You want to execute your JavaScript code? That you can do in Node.js, a JavaScript runtime environment.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/ybIg85flNeA",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "custom-container warning" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Node.js support ECMAScript modules",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In the lecture slides it says Node.js doesn't support ECMAScript modules. That is no longer the case, see:",
  -1
  /* HOISTED */
);
const _hoisted_7 = {
  href: "https://nodejs.org/api/esm.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "However, Require JS and ECMAScript modules aren't 100% interchangeable, so it's probably best to be consistent and use only one of them, and I suspect many npm packages out there don't support ECMAScript modules to 100%, so the safest is probably to stick to using Require JS for now.",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="node-js.pdf">node-js.pdf</a></li><li><a href="node-js.pptx">node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_12 = {
  href: "http://wiki.commonjs.org/wiki/CommonJS",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Introduction"),
    /* @__PURE__ */ createBaseVNode("li", null, "FAQ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = {
  href: "https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Read this if you want to learn more about how modules work in Node.js (not required for this course).")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("div", _hoisted_4, [
      _hoisted_5,
      _hoisted_6,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("https://nodejs.org/api/esm.html"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      _hoisted_8
    ]),
    _hoisted_9,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          createTextVNode("CommonJS Spec Wiki"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_13
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_14, [
          createTextVNode("Requiring modules in Node.js: Everything you need to know"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_15
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
