import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "python-lists",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#python-lists",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Python Lists")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Sometimes you only need to remember a single value, such as a year the user has entered, but most often you rather need to remember many values of the same type, such as:",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "All the years the user has entered to your program."),
    /* @__PURE__ */ createBaseVNode("li", null, "The name of all your friends."),
    /* @__PURE__ */ createBaseVNode("li", null, "The name of all the files in a directory.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Instead of having 50 variables to store 50 different values (which also limits out program to handle at most 50 different values), we can put as many values as we want (and need) in a list. Let's see how to do that in this lecture.",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/t_L2kT-8GLc",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="python-lists.pdf">python-lists.pdf</a></li><li><a href="python-lists.pptx">python-lists.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_9 = {
  href: "http://interactivepython.org/courselib/static/thinkcspy/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://runestone.academy/runestone/books/published/thinkcspy/Lists/toctree.html",
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
        createTextVNode("The following chapters in the book "),
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("How to Think Like a Computer Scientist: Interactive Edition"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_10, [
              createTextVNode("10. Lists"),
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
