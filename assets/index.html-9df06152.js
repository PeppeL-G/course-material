import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-services",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-services",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Services")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, you want your application to keep on running even if the user leaves your activities and start another application? Then tell android about it, and have your code continue to be executed by a service.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/-yxeTMslJhI",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-services.pdf">android-services.pdf</a></li><li><a href="android-services.pptx">android-services.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><p>The following chapters from the course book <em>The Busy Coder&#39;s Guide to Android Development</em>:</p>', 4);
const _hoisted_8 = {
  href: "https://commonsware.com/Android/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://developer.android.com/guide/components/services",
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
          createTextVNode("Services and the Command Pattern"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("The "),
      createBaseVNode("a", _hoisted_9, [
        createTextVNode("Android Developers Guide's page about Services"),
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
