import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "document-object-model",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#document-object-model",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Document Object Model")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In the Browser Object Model there exists a special variable called "),
    /* @__PURE__ */ createBaseVNode("code", null, "document"),
    /* @__PURE__ */ createTextVNode(" that represents the webpage rendered on the screen (you can almost think of it as the HTML code). Through this variable we can listen for when the user interacts with the webpage (clicks on links, submit forms, etc.) and change the webpage dynamically (add/remove HTML elements).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/0J28CIRwdqM",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="document-object-model.pdf">document-object-model.pdf</a></li><li><a href="document-object-model.pptx">document-object-model.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 14: The Document Object Model"),
    /* @__PURE__ */ createBaseVNode("li", null, "Chapter 15: Handling Events")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://how-i-experience-web-today.com/detail.html#",
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
          createTextVNode("Eloquent JavaScript"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Client-Side JavaScript should only be used to improve the user experience, never to make it worse! The following webpage is an excellent example of wrong usage of client-side JavaScript: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_9, [
              createTextVNode("An article I want to read"),
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
