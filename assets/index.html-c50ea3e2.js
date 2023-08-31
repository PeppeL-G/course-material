import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="android-menus" tabindex="-1"><a class="header-anchor" href="#android-menus" aria-hidden="true">#</a> Android Menus</h1><p>Android has built-in support for different type of menus. In this lecture we take a look at two of them: the options menu and the floating context menu.</p><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-menus.pdf">android-menus.pdf</a></li><li><a href="android-menus.pptx">android-menus.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 5);
const _hoisted_6 = {
  href: "https://developer.android.com/guide/topics/ui/menus",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("The "),
      createBaseVNode("a", _hoisted_6, [
        createTextVNode("Android Developers Guide's page about Menus"),
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
