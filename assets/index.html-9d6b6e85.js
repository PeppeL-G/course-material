import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "welcome",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#welcome",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Welcome!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://ju.se/en/personinfo.html?sign=LarPet",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://ju.se/en.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "getting-help",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#getting-help",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Getting help")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "https://github.com/PeppeL-G/course-material/issues",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "don't give away solutions for free",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "help each other as little possible",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "acknowledgements-❤️",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#acknowledgements-❤️",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Acknowledgements ❤️")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Thank you everyone that have contributed to the technologies making this website possible:",
  -1
  /* HOISTED */
);
const _hoisted_10 = {
  href: "https://vuepress.vuejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://git-scm.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = {
  href: "https://github.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "All of these technologies are available for free (to some extent), just as this website. Thank you!",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("This is a website that I ("),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Peter Larsson-Green"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(") use in my work at "),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("Jönköping University"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" where I teach in various courses involving programming. Here I upload course material students can take part of in their studies. If you're curious, feel free to look around at the various courses and lectures.")
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("If you need help in any of the courses, "),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("open an issue about it on GitHub"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". I will try to answer your questions there as soon as possible. Students are also encouraged to answer each other's questions, but "),
      _hoisted_6,
      createTextVNode(". Instead just "),
      _hoisted_7,
      createTextVNode(", so the one asking the question will do most of her work on her own.")
    ]),
    _hoisted_8,
    _hoisted_9,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("VuePress"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - The Static Site Generator this website is implemented in")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("Git"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - The Version Control System used to manage the source code")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          createTextVNode("GitHub"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - The Software Development Platform hosting the source code for this website and the website itself")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_13, [
          createTextVNode("Visual Studio Code"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - The Code Editor I use")
      ])
    ]),
    _hoisted_14
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
