import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-content-providers",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-content-providers",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Content Providers")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Content Providers are one of the four different fundamental application components all Android applications consists of. We use them to give other applications access to the data in our application, oe we can use content providers in other applications to get access to their data.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/KsstMmSCUtg",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-content-providers.pdf">android-content-providers.pdf</a></li><li><a href="android-content-providers.pptx">android-content-providers.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><p>The following pages from Android Developers Guide:</p>', 4);
const _hoisted_8 = {
  href: "https://developer.android.com/guide/topics/providers/content-providers",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://developer.android.com/training/secure-file-sharing/setup-sharing",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://developer.android.com/training/camera/photobasics",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The following chapters from the course book The Busy Coder's Guide to Android Development:",
  -1
  /* HOISTED */
);
const _hoisted_12 = {
  href: "https://commonsware.com/Android/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = {
  href: "https://commonsware.com/Android/",
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
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("Content providers"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("Setting up file sharing"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("Take photos"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_11,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          createTextVNode("Content Provider Theory"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_13, [
          createTextVNode("Using the Camera via 3rd-Party Apps"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
