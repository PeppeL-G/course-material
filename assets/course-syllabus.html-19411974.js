import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "course-syllabus",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#course-syllabus",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Course Syllabus")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = ["href"];
const _hoisted_3 = ["href"];
const _hoisted_4 = ["href"];
const _hoisted_5 = ["href"];
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Curious students can take a look at the course syllabus, which kind of is the interface for the course. The implementation of the course is described in the "),
      createVNode(_component_RouterLink, { to: "/courses/android-development/study-guide/" }, {
        default: withCtx(() => [
          createTextVNode("Study Guide")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(".")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/android-development/files/course-syllabus-2023.html"),
          target: "_blank"
        }, "Course syllabus 2023 (HTML)", 8, _hoisted_2)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/android-development/files/course-syllabus-2022.html"),
          target: "_blank"
        }, "Course syllabus 2022 (HTML)", 8, _hoisted_3)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/android-development/files/course-syllabus-2021.html"),
          target: "_blank"
        }, "Course syllabus 2021 (HTML)", 8, _hoisted_4)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/android-development/files/course-syllabus-2020.html"),
          target: "_blank"
        }, "Course syllabus 2020 (HTML)", 8, _hoisted_5)
      ])
    ])
  ]);
}
const courseSyllabus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "course-syllabus.html.vue"]]);
export {
  courseSyllabus_html as default
};
