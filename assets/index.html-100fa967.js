import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="android-gps" tabindex="-1"><a class="header-anchor" href="#android-gps" aria-hidden="true">#</a> Android GPS</h1><p>So, you need to figure out where in the world the user is? Then meet your new best friend: the GPS receiver. Let&#39;s take a look at how to use it in Android, with and without Google Play Services.</p><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-gps.pdf">android-gps.pdf</a></li><li><a href="android-gps.pptx">android-gps.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 5);
const _hoisted_6 = {
  href: "https://wares.commonsware.com/app/internal/book/Android/page/chap-preface-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Accessing Location-Based Services"),
    /* @__PURE__ */ createBaseVNode("li", null, "The Fused Location Provider")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = {
  href: "https://developer.android.com/training/location/request-updates",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("The following chapters from the course book "),
        createBaseVNode("a", _hoisted_6, [
          createTextVNode("The Busy Coder's Guide to Android Development"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_7
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("The Android Developers Guide's page on "),
      createBaseVNode("a", _hoisted_8, [
        createTextVNode("Request location updates"),
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
