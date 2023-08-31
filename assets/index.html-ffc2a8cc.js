import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="android-sensors" tabindex="-1"><a class="header-anchor" href="#android-sensors" aria-hidden="true">#</a> Android Sensors</h1><p>Android supports a bunch of sensors we can use to observe the world outside the device our application runs on (if the device supports it). Let&#39;s learn how!</p><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-sensors.pdf">android-sensors.pdf</a></li><li><a href="android-sensors.pptx">android-sensors.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 5);
const _hoisted_6 = {
  href: "https://wares.commonsware.com/app/internal/book/Android/page/chap-preface-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Basic Use of Sensors")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = {
  href: "https://developer.android.com/guide/topics/sensors/sensors_overview",
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
      createTextVNode("The Android Developers Guide's pages on "),
      createBaseVNode("a", _hoisted_8, [
        createTextVNode("Sensors"),
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
