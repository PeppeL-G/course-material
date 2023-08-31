import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "kotlin",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#kotlin",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Kotlin")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Kotlin is a pretty new programming language invented by JetBrains and initially released 2011. JetBrains are the ones who have built IntelliJ IDEA, which is the IDE Android Studio in turn is built on. The popularity of Kotlin increased 2017 when Google started to support it in Android Studio for developing Android applications, and in 2019 when Google recommended Android developers to use Kotlin instead of Java when developing Android applications.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/ojC-Iic8BH4",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="kotlin.pdf">kotlin.pdf</a></li><li><a href="kotlin.pptx">kotlin.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://kotlinlang.org/docs/home.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://play.kotlinlang.org/byExample/overview",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://devhints.io/kotlin",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://commonsware.com/Kotlin/",
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
    createBaseVNode("p", null, [
      createTextVNode("The "),
      createBaseVNode("a", _hoisted_7, [
        createTextVNode("Kotlin Docs"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" covers everything about Kotlin, but not that fun to read. Most of you can most likely learn most of what you need to know about Kotlin by reading their "),
      createBaseVNode("a", _hoisted_8, [
        createTextVNode("Learn Kotlin by Example"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" pages instead. There you can also easily write and run Kotlin code online. Those of you who have much experience of programming can learn much about Kotlin quickly by looking at "),
      createBaseVNode("a", _hoisted_9, [
        createTextVNode("a Kotlin cheatsheet"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (use whichever you prefer).")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("The course book "),
      createBaseVNode("a", _hoisted_10, [
        createTextVNode("Elements of Kotlin"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" also explains much of the functionality in Kotlin. Feel free to read it if you want, but reading the entire book will probably take a little bit too much time for you.")
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
