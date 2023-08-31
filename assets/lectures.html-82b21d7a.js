import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "lectures",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#lectures",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Lectures")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("The pages "),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/laboratory-work/" }, {
        default: withCtx(() => [
          createTextVNode("Laboratory Work")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" and "),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/project-work/" }, {
        default: withCtx(() => [
          createTextVNode("Project Work")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" indicate when you're expected to view each lecture, but here's a list of all of them.")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/using-shells/" }, {
          default: withCtx(() => [
            createTextVNode("Using Shells")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/vue/" }, {
          default: withCtx(() => [
            createTextVNode("Vue")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/internet-basics/" }, {
          default: withCtx(() => [
            createTextVNode("Internet Basics")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/http-and-web-applications/" }, {
          default: withCtx(() => [
            createTextVNode("HTTP and Web Applications")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-basics/" }, {
          default: withCtx(() => [
            createTextVNode("REST API Basics")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/node-js/" }, {
          default: withCtx(() => [
            createTextVNode("Node.js")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/web-applications-in-node-js/" }, {
          default: withCtx(() => [
            createTextVNode("Web Applications in Node.js")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/npm/" }, {
          default: withCtx(() => [
            createTextVNode("npm")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/express-basics/" }, {
          default: withCtx(() => [
            createTextVNode("Express Basics")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-in-express/" }, {
          default: withCtx(() => [
            createTextVNode("REST API in Express")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/sqlite/" }, {
          default: withCtx(() => [
            createTextVNode("SQLite")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/using-sqlite-in-node-js/" }, {
          default: withCtx(() => [
            createTextVNode("Using SQLite in Node.js")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/sop-and-cors/" }, {
          default: withCtx(() => [
            createTextVNode("SOP and CORS")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-authorization/" }, {
          default: withCtx(() => [
            createTextVNode("REST API Authorization")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/json-web-tokens/" }, {
          default: withCtx(() => [
            createTextVNode("JSON Web Tokens")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/third-party-authentication/" }, {
          default: withCtx(() => [
            createTextVNode("Third-Party Authentication")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const lectures_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "lectures.html.vue"]]);
export {
  lectures_html as default
};
