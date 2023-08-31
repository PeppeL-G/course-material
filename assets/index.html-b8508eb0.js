import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "gdpr",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#gdpr",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" GDPR")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://ju.se/personinfo.html?sign=WESOSK",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="gdpr.pdf">gdpr.pdf</a></li><li><a href="gdpr.pptx">gdpr.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Third last slide in the presentation has some links to resources in Swedish",
  -1
  /* HOISTED */
);
const _hoisted_7 = {
  href: "https://gdpr.eu/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://gdpr.eu/what-is-gdpr/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://gdpr.eu/checklist/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://gdpr.eu/faq/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://yro.slashdot.org/story/22/01/31/222250/website-fined-by-german-court-for-leaking-visitors-ip-address-via-google-fonts",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = {
  href: "https://www.enforcementtracker.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("A guest lecture by "),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Oskar Westergren"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_3,
    createBaseVNode("ul", null, [
      _hoisted_6,
      createBaseVNode("li", null, [
        createTextVNode("The following pages on "),
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("gdpr.eu"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_8, [
              createTextVNode("What is GDPR, the EU’s new data protection law?"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_9, [
              createTextVNode("GDPR checklist for data controllers"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_10, [
              createTextVNode("FAQ"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Examples of GDPR breaches: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_11, [
              createTextVNode("Website Fined By German Court For Leaking Visitor's IP Address Via Google Fonts"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_12, [
              createTextVNode("GDPR Enforcement Tracker"),
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
