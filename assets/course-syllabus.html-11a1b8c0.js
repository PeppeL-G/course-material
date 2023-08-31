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
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Course not given 2020 for TSPG17",
  -1
  /* HOISTED */
);
const _hoisted_7 = ["href"];
const _hoisted_8 = ["href"];
const _hoisted_9 = ["href"];
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Curious students can take a look at the course syllabus, which kind of is the interface for the course. The implementation of the course is described in the "),
      createVNode(_component_RouterLink, { to: "/courses/introduction-to-script-programming/study-guide/" }, {
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
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2022-tspg17.html"),
          target: "_blank"
        }, "Course syllabus 2022 TSPG17", 8, _hoisted_2)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2022-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2022 TSTG17", 8, _hoisted_3)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2021-tspg17.html"),
          target: "_blank"
        }, "Course syllabus 2021 TSPG17", 8, _hoisted_4)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2021-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2021 TSTG17", 8, _hoisted_5)
      ]),
      _hoisted_6,
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2020-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2020 TSTG17", 8, _hoisted_7)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2019-tspg17.html"),
          target: "_blank"
        }, "Course syllabus 2019 TSPG17", 8, _hoisted_8)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2019-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2019 TSTG17", 8, _hoisted_9)
      ])
    ])
  ]);
}
const courseSyllabus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "course-syllabus.html.vue"]]);
export {
  courseSyllabus_html as default
};
