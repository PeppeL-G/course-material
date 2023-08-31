import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "using-sequelize-in-node-js",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#using-sequelize-in-node-js",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Using Sequelize in Node.js")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You can write and send your own queries to your relational database, but what if you later change to another relational database using a little bit different SQL dialect? Then you need to go through all your queries and rewrite some of them 😥 Or, you can use an ORM instead, and let the ORM write the SQL queries for you. Then it's easy to switch to another relational database, and you don't even need to know SQL to use the database 😀",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/0lGWqp-yUTU",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">About sequelize.sync()</p><p><code>sequelize.sync()</code> will only attempt to create the tables in the database if they don&#39;t already exists. If you try to call this method again after you have changed your model definitions, the tables in the database won&#39;t be updated to match your new model definitions. Use <code>sequelize.sync({force: true})</code> to make Sequelize first delete your tables in the database, and then re-create them per your new model definitions, or update the tables in the database manually yourself.</p></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="using-sequelize-in-node-js.pdf">using-sequelize-in-node-js.pdf</a></li><li><a href="using-sequelize-in-node-js.pptx">using-sequelize-in-node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 4);
const _hoisted_8 = {
  href: "http://docs.sequelizejs.com/",
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
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("The docs on Sequelize's website have a lot of explanatory examples."),
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
