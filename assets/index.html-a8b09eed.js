import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "using-sqlite-in-node-js",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#using-sqlite-in-node-js",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Using SQlite in Node.js")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, how do we use SQLite in a Node.js application? Let's find out!",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/65f7Fl0AEi8",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "custom-container warning" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Note!",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When communicating with an SQLite 3 database, foreign key constraints are disabled by default! To enable them, you must send the query "),
    /* @__PURE__ */ createBaseVNode("code", null, "PRAGMA foreign_keys = ON"),
    /* @__PURE__ */ createTextVNode(" to the database after you have established a connection with it.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = {
  href: "https://www.sqlite.org/foreignkeys.html#fk_enable",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="using-sqlite-in-node-js.pdf">using-sqlite-in-node-js.pdf</a></li><li><a href="using-sqlite-in-node-js.pptx">using-sqlite-in-node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_11 = {
  href: "https://github.com/mapbox/node-sqlite3/wiki",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("API Documentation "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" (read if you need to learn some details)")
    ])
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
    createBaseVNode("div", _hoisted_4, [
      _hoisted_5,
      _hoisted_6,
      createBaseVNode("p", null, [
        createTextVNode("Learn more about this in "),
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("the documentation for enabling foreign key constraints in SQLite"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ])
    ]),
    _hoisted_8,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("sqlite3 Documentation"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_12
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
