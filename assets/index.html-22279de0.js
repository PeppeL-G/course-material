import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "javascript-basics",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#javascript-basics",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" JavaScript Basics")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Learn the basics in JavaScript.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/Zezsy9FTGjw",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="javascript-basics.pdf">javascript-basics.pdf</a></li><li><a href="javascript-basics.pptx">javascript-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "http://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 1: Values, Types, and Operators"),
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 2: Program Structure"),
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 3: Functions"),
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 4: Data structures: Objects and Arrays"),
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 5: Higher-Order Functions")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://github.com/lydiahallie/javascript-questions#javascript-questions",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://github.com/denysdovhan/wtfjs#-motivation",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://www.ecma-international.org/publications/standards/Ecma-262.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "You are not expected to read it, but do be aware of that they do exist, and if you ever is uncertain about something related to JS, this is the best place to look it up.")
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
          createTextVNode("Eloquent JavaScript 3rd edition"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        createTextVNode("If you like learning (the weird parts of) JavaScript through examples, the following resources could be good for you, but probably not the best resources to learn the entire language: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_9, [
              createTextVNode("JavaScript Questions"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_10, [
              createTextVNode("What the f*ck JavaScript?"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("ECMAScript specification"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_12
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
