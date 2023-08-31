import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "json-web-tokens",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#json-web-tokens",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" JSON Web Tokens")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So how do we implement access tokens? Well, we can implement them as JSON Web Tokens, let's take a look at how they work!",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/mj8Ol51cmgg",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="json-web-tokens.pdf">json-web-tokens.pdf</a></li><li><a href="json-web-tokens.pptx">json-web-tokens.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://tools.ietf.org/html/rfc7519",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("ol", { start: "4" }, [
        /* @__PURE__ */ createBaseVNode("li", null, "JWT Claims")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://jwt.io/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Debugger (play around)"),
    /* @__PURE__ */ createBaseVNode("li", null, "Introduction")
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
          createTextVNode("JSON Web Token Specification"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", especially: "),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("https://jwt.io"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_10
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
