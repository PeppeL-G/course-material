import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "python-modules",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#python-modules",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Python Modules")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In Python we have global functions like "),
    /* @__PURE__ */ createBaseVNode("code", null, "print()"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "input()"),
    /* @__PURE__ */ createTextVNode(" that we can use directly in our own code, but many other useful functions in Python are not global, but have instead been put into modules. In this lecture we take a look at what a module is and how we can use the functions in them.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "640",
    height: "360",
    src: "https://www.youtube.com/embed/f5RMgwgR988",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="python-modules.pdf">python-modules.pdf</a></li><li><a href="python-modules.pptx">python-modules.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "http://interactivepython.org/courselib/static/thinkcspy/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://runestone.academy/runestone/books/published/thinkcspy/PythonModules/toctree.html",
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
              createTextVNode("5. Python Modules"),
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
