import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-bottom-navigation-view-and-drawer-layout",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-bottom-navigation-view-and-drawer-layout",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Bottom Navigation View and Drawer Layout")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Let's go through how the two main views for top level destinations works in Android.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/44xpcWD10uQ",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "recommended-reading",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#recommended-reading",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Recommended reading")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The following chapters from the course book "),
    /* @__PURE__ */ createBaseVNode("em", null, "Elements of Android Jetpack"),
    /* @__PURE__ */ createTextVNode(":")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = {
  href: "https://commonsware.com/Jetpack/pages/chap-nav-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = {
  href: "https://developer.android.com/guide/navigation",
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
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          createTextVNode("Navigating Your App"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("The "),
      createBaseVNode("a", _hoisted_7, [
        createTextVNode("Android Developers Guide's page about Navigation Components"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
