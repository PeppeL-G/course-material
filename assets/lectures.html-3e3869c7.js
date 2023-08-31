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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Below is a list of all the recorded lectures in the course. That will give you a good overview what you will learn in this course and what you are expected to know at the written examination.",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Each exercise on the "),
      createVNode(_component_RouterLink, { to: "/courses/introduction-to-script-programming/exercises/" }, {
        default: withCtx(() => [
          createTextVNode("Exercises")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" page contains a list of recorded lectures you are recommended to watch before attempting to solve the exercises and the labs. That will serve as a good hint for you when to watch which lectures, as well as the weekly announcements that will be posted on Canvas.")
    ]),
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/introduction-to-computers-and-programming/" }, {
          default: withCtx(() => [
            createTextVNode("Introduction to Computers and Programming")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
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
        createVNode(_component_RouterLink, { to: "/lectures/python-introduction/" }, {
          default: withCtx(() => [
            createTextVNode("Python Introduction")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-basics-part-1/" }, {
          default: withCtx(() => [
            createTextVNode("Python Basics - Part 1")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-basics-part-2/" }, {
          default: withCtx(() => [
            createTextVNode("Python Basics - Part 2")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-modules/" }, {
          default: withCtx(() => [
            createTextVNode("Python Modules")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-functions/" }, {
          default: withCtx(() => [
            createTextVNode("Python Functions")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-conditions/" }, {
          default: withCtx(() => [
            createTextVNode("Python Conditions")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-loops/" }, {
          default: withCtx(() => [
            createTextVNode("Python Loops")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-strings/" }, {
          default: withCtx(() => [
            createTextVNode("Python Strings")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-lists/" }, {
          default: withCtx(() => [
            createTextVNode("Python Lists")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-dicts/" }, {
          default: withCtx(() => [
            createTextVNode("Python Dicts")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-modelling/" }, {
          default: withCtx(() => [
            createTextVNode("Python Modelling")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-data-storage/" }, {
          default: withCtx(() => [
            createTextVNode("Python Data Storage")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-abstraction/" }, {
          default: withCtx(() => [
            createTextVNode("Python Abstraction")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-object-oriented-programming/" }, {
          default: withCtx(() => [
            createTextVNode("Python Object-Oriented Programming")
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
