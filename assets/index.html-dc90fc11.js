import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "rest-api-basics",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#rest-api-basics",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" REST API Basics")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, what's a REST API and what do we use them for?",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/MKknVV-_e4k",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="rest-api-basics.pdf">rest-api-basics.pdf</a></li><li><a href="rest-api-basics.pptx">rest-api-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://launchschool.com/books/working_with_apis",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Getting Started "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "(you do not need to install HTTPie)")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "API basics"),
    /* @__PURE__ */ createBaseVNode("li", null, "Working with an API")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Until (including) page 22")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("CHAPTER 5: Representational State Transfer (REST) "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" (feel free to read the other chapters as well)")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = {
  href: "https://twobithistory.org/2020/06/28/rest.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_15 = {
  href: "https://twobithistory.org/2017/09/21/the-rise-and-rise-of-json.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Two-Bit History",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
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
          createTextVNode("Working with Web APIs"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" by Launch School: "),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("Web API Design - Crafting Interfaces that Developers Love"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" from Apigee: "),
        _hoisted_10
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("Architectural Styles and the Design of Network-based Software Architectures"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" by Roy Thomas Fielding: "),
        _hoisted_12
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_13, [
          createTextVNode("Roy Fielding's Misappropriated REST Dissertation"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        _hoisted_14,
        createTextVNode(" (optional reading for those who think Roy's dissertation is too hard to read)")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_15, [
          createTextVNode("The Rise and Rise of JSON"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" from "),
        _hoisted_16,
        createTextVNode(),
        _hoisted_17,
        createTextVNode(" (optional reading for those who want to learn the history of JSON)")
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
