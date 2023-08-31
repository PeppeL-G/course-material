import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-listview",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-listview",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android ListView")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("It's very common for an application to display a list of items. But if there are many items in the list, how can we do that in a resource and speed efficient way? Android's solution to that was initially the "),
    /* @__PURE__ */ createBaseVNode("code", null, "ListView"),
    /* @__PURE__ */ createTextVNode(", which we'll take a closer look at in this lecture. Nowadays the Android Jetpack libraries also has a "),
    /* @__PURE__ */ createBaseVNode("code", null, "RecyclerView"),
    /* @__PURE__ */ createTextVNode(" we can use to achieve similar functionality. That one is a bit more configurable, but also a bit harder to use.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/-MbqBglbbIk",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-list-view.pdf">android-list-view.pdf</a></li><li><a href="android-list-view.pptx">android-list-view.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://developer.android.com/reference/android/widget/ListView",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "RecyclerView",
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://developer.android.com/guide/topics/ui/layout/recyclerview",
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
        createTextVNode("The documentation for the "),
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("ListView"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" class.")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("If you want to use the more modern (but harder to start with) "),
        _hoisted_8,
        createTextVNode(", read: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Android Developers Guide's page "),
            createBaseVNode("a", _hoisted_9, [
              createTextVNode("Create a List with RecyclerView"),
              createVNode(_component_ExternalLinkIcon)
            ]),
            createTextVNode(".")
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
