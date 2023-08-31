import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "python-conditions",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#python-conditions",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Python Conditions")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In Python we can use the "),
    /* @__PURE__ */ createBaseVNode("code", null, "if"),
    /* @__PURE__ */ createTextVNode(" statement to conditionally execute code. For example, if we ask the user to enter his age, we can make different things happen depending on which age the user, such as printing "),
    /* @__PURE__ */ createBaseVNode("code", null, "You're young."),
    /* @__PURE__ */ createTextVNode(" or "),
    /* @__PURE__ */ createBaseVNode("code", null, "You're old."),
    /* @__PURE__ */ createTextVNode(" depending on if the age is lower than 30 or not. In this lecture we take a closer look at how to achieve this.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/Lfd5AMfytTM",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="python-conditions.pdf">python-conditions.pdf</a></li><li><a href="python-conditions.pptx">python-conditions.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "http://interactivepython.org/courselib/static/thinkcspy/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://runestone.academy/runestone/books/published/thinkcspy/Selection/toctree.html",
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
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("The following chapters in the book "),
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("How to Think Like a Computer Scientist: Interactive Edition"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_8, [
              createTextVNode("7. Selection"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
