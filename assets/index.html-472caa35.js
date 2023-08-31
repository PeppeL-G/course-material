import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-introduction",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-introduction",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Introduction")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Android is an operating system initially released for smartphones, but these days it supports tablets, smart watches, cars and some other things as well. Although being an open source project developed Google, Google seem to control the project just as good they would control a closed source project. Let's take a look at how!",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/F2U0izZ4OPM",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-introduction.pdf">android-introduction.pdf</a></li><li><a href="android-introduction.pptx">android-introduction.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://www.opensignal.com/sites/opensignal-com/files/data/reports/global/data-2015-08/2015_08_fragmentation_report.pdf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.",
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
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("ANDROID FRAGMENTATION VISUALIZED (AUGUST 2015)"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("The Wikipedia page "),
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("Google LLC v. Oracle America, Inc."),
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
