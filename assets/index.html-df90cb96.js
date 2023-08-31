import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-conditional-resources",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-conditional-resources",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Conditional Resources")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Resources (strings, layouts, etc.) are loaded dynamically in Android, and when you create a new one you can specify during which conditions it should be used. This is what makes adding i18n support so easy; we have a default string resource file, but also more specialized string resource files, e.g. one with string resources in Swedish, another one with string resources in Spanish, etc. You just specify that you want to have a string resource file, and if the user uses Swedish, Android gives you the Swedish string resource file, etc. This make it convenient to handle many different type of configurations (screen sizes, preferred language, font size, etc).",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/7aI4JlmMyoQ",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-conditional-resources.pdf">android-conditional-resources.pdf</a></li><li><a href="android-conditional-resources.pptx">android-conditional-resources.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://commonsware.com/Android/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Resource Sets and Configurations")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://developer.android.com/guide/topics/resources/providing-resources#AlternativeResources",
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
        createTextVNode("The following chapters from the course book "),
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("The Busy Coder's Guide to Android Development"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        createTextVNode("The following pages from Android Developers Guide: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_9, [
              createTextVNode("App resources"),
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
