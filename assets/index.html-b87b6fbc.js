import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "third-party-authentication",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#third-party-authentication",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Third-Party Authentication")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, users get an access token when they login to a REST API. But how do we get information about which account the user logged in to? ID tokens to the rescue! And these can also be used to let users login to your application using their account in another application (such as Facebook, Google, etc.).",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/LcRfHgvXIFI",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="third-party-authentication.pdf">third-party-authentication.pdf</a></li><li><a href="third-party-authentication.pptx">third-party-authentication.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://connect2id.com/products/nimbus-oauth-openid-connect-sdk/openid-connect-providers",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://connect2id.com/learn/openid-connect",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://openid.net/specs/openid-connect-core-1_0.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "At least 5.1. Standard Claims, but the more you can read and understand, the better.")
  ],
  -1
  /* HOISTED */
);
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
          createTextVNode("List of public OpenID Connect providers"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("OpenID Connect explained"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("The Specification for OpenID Connect Core 1.0"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_10
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
