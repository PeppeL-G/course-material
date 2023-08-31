import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "layered-architecture-in-node-js",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#layered-architecture-in-node-js",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Layered Architecture in Node.js")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "How should applications with a large code base be structured so it's:",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Easy to understand how it's been structured."),
    /* @__PURE__ */ createBaseVNode("li", null, "Easy to add new features to it."),
    /* @__PURE__ */ createBaseVNode("li", null, "Easy to test the code in it."),
    /* @__PURE__ */ createBaseVNode("li", null, "Etc.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "? Well, using a layered architecture seems like a good solution, let's take a look at what that is and how we can use it in a Node.js application.",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/0gZdtd9J1wM",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="layered-architecture-in-node-js.pdf">layered-architecture-in-node-js.pdf</a></li><li><a href="layered-architecture-in-node-js.pptx">layered-architecture-in-node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_9 = {
  href: "https://en.wikipedia.org/wiki/Multitier_architecture",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Note: The article is primarily about "),
      /* @__PURE__ */ createBaseVNode("em", null, "tiers"),
      /* @__PURE__ */ createTextVNode(", which is not the same as "),
      /* @__PURE__ */ createBaseVNode("em", null, "layers"),
      /* @__PURE__ */ createTextVNode(" (difference explain in the article), but it's the same kind of thinking")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("The Wikipedia article Multitier architecture"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_10
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("The Law of Leaky Abstractions"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" by Joel Spolsky")
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
