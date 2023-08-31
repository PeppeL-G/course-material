import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "client-side-javascript-bom",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#client-side-javascript-bom",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Client-side JavaScript & BOM")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Web browsers can not only render HTML code styled with CSS, they can also execute JavaScript code. JavaScript is a really simple language that on its own can only be used for computations, so it does for example not contain any input/output functionality. But when our JavaScript code is executed by a web browser it will be executed in an environment where the web browser has added some extra goodies we can use. This environment is known as the "),
    /* @__PURE__ */ createBaseVNode("em", null, "Browser Object Model"),
    /* @__PURE__ */ createTextVNode(" (BOM).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/j1AsL46MkN0",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="client-side-javascript-and-bom.pdf">client-side-javascript-and-bom.pdf</a></li><li><a href="client-side-javascript-and-bom.pptx">client-side-javascript-and-bom.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://en.wikipedia.org/wiki/Browser_Object_Model",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 13: JavaScript and the Browser")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = {
  href: "https://www.w3schools.com/js/js_window.asp",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Do not only read about "),
      /* @__PURE__ */ createBaseVNode("code", null, "JS Window"),
      /* @__PURE__ */ createTextVNode(", but all "),
      /* @__PURE__ */ createBaseVNode("code", null, "JS ****"),
      /* @__PURE__ */ createTextVNode(" in the "),
      /* @__PURE__ */ createBaseVNode("code", null, "JS Browser BOM"),
      /* @__PURE__ */ createTextVNode(" sub-menu.")
    ])
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
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("Browser Object Model"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("The following chapter from the course book "),
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("Eloquent JavaScript"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_9
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("JS Browser BOM"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_11
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
