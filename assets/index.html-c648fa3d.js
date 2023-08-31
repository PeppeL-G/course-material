import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="android-scheduling" tabindex="-1"><a class="header-anchor" href="#android-scheduling" aria-hidden="true">#</a> Android Scheduling</h1><p>Sometimes you want to to execute code at a certain time, i.e to schedule the execution of it. Seems like a straight forward thing to do, right? Well, in an attempt to preserve battery, Google have made this a bit more complicated than you initially think it would be.</p><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-scheduling.pdf">android-scheduling.pdf</a></li><li><a href="android-scheduling.pptx">android-scheduling.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><p>The following pages from Android Developers Guide:</p>', 6);
const _hoisted_7 = {
  href: "https://developer.android.com/topic/performance/power",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://developer.android.com/guide/background/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("Optimize for battery life"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("Guide to background processing"),
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
