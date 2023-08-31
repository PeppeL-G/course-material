import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "cookies-and-sessions",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#cookies-and-sessions",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Cookies and Sessions")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "HTTP is a stateless protocol, how can the server remember information about clients (such as if they have logged in?)? Cookies and sessions to the rescue!",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/JtAy9OZAZ7k",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="cookies-and-sessions.pdf">cookies-and-sessions.pdf</a></li><li><a href="cookies-and-sessions.pptx">cookies-and-sessions.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://tools.ietf.org/html/rfc6265",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Read this if you want to learn the details about cookies.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Until (including) Scope of cookies")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = {
  href: "https://www.cookiebot.com/en/gdpr-cookies/",
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
          createTextVNode("HTTP State Management Mechanism"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("HTTP cookies"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_10
      ]),
      createBaseVNode("li", null, [
        createTextVNode("About users' cookies consent: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("EU's "),
            createBaseVNode("a", _hoisted_11, [
              createTextVNode("ePrivacy Directive"),
              createVNode(_component_ExternalLinkIcon)
            ]),
            createTextVNode(' ("The Cookie Law")')
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_12, [
              createTextVNode("GDPR and cookies | What do I need to know? | Is my use of cookies compliant?"),
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
