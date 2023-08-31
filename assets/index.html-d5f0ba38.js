import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "ajax",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#ajax",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" AJAX")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Traditionally, the only way to load new information on a webpage was by clicking on a link or submitting a form to tell the web browser to send a GET or a POST request to fetch and display a new webpage. But with "),
    /* @__PURE__ */ createBaseVNode("em", null, "Asynchronous JavaScript And XML"),
    /* @__PURE__ */ createTextVNode(" we can use client-side JavaScript to tell the web browser to send an HTTP request to a server, and we can also use client-side JavaScript to receive and handle the HTTP response the web browser receives back. This way it's easier to create more interactive websites with better user experience.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/tVZitsQRB_o",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="custom-container danger"><p class="custom-container-title">Use AJAX properly!</p><p>AJAX can be used to improve the user experience, but most websites trying to use it actually end up providing a worse user experience. If you try to use it on a website, be sure to:</p><ul><li>Show loading indicators <ul><li>(otherwise users won&#39;t know if their clicks are registered, if something crashed, or if the page is still loading, etc.)</li></ul></li><li>Handle errors <ul><li>(must show error messages to the users when something goes wrong, otherwise they will just sit and wait)</li></ul></li><li>Change the URI when showing new content <ul><li>(otherwise users can&#39;t bookmark the page with the newly loaded content, the refresh button won&#39;t work as expected, search engines can&#39;t take users directly to the new content, etc.)</li></ul></li><li>Listen for changes in the web browser&#39;s history, and act accordingly <ul><li>(otherwise the the back and forward buttons in the web browser won&#39;t work as expected, etc.)</li></ul></li></ul><p>Just sending an extra HTTP request and display the new content is not enough, all of these things needs to be handled to improve the experience! If you are not prepared to put down all of this extra work, then AJAX is probably not for you.</p></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="ajax.pdf">ajax.pdf</a></li><li><a href="ajax.pptx">ajax.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 4);
const _hoisted_8 = {
  href: "https://davidwalsh.name/fetch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "fetch",
  -1
  /* HOISTED */
);
const _hoisted_10 = {
  href: "https://fetch.spec.whatwg.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "fetch",
  -1
  /* HOISTED */
);
const _hoisted_12 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/API/History_API",
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
          createTextVNode("David Walsh's blogpost on "),
          _hoisted_9,
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          _hoisted_11,
          createTextVNode(" specification"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          createTextVNode("Manipulating the browser history"),
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
