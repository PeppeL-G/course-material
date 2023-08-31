import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-sqlite-database",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-sqlite-database",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android SQLite Database")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, your application collects data from the user that you need to store somewhere? Why not in an SQlite database? Android has built-in support for that one, so why not?",
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "custom-container warning" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Room",
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "https://developer.android.com/jetpack/androidx/releases/room",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/tI-0IZOhvFk",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-sqlite-database.pdf">android-sqlite-database.pdf</a></li><li><a href="android-sqlite-database.pptx">android-sqlite-database.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_10 = {
  href: "https://developer.android.com/training/data-storage",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://developer.android.com/training/data-storage/room",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = {
  href: "https://commonsware.com/Room/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      _hoisted_4,
      createBaseVNode("p", null, [
        createTextVNode("The lecture shows the old way we communicated with SQLite databases in Android. A few years back Google released "),
        createBaseVNode("a", _hoisted_5, [
          createTextVNode("the Room library"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" (an Object Relational Mapping library) we can use to more easily communicate with the database. However, it's still good to have knowledge about the old way, since many old applications use it.")
      ])
    ]),
    _hoisted_6,
    _hoisted_7,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("The Android Developers Guide "),
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("App data & files"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("The Android Developers Guide "),
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("Save data in a local database using Room"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("The course book "),
        createBaseVNode("a", _hoisted_12, [
          createTextVNode("Elements of Android Room"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
