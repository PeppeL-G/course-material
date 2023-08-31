import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode } from "./app-8331cbf7.js";
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Curious students can take a look at the course syllabus, which kind of is the interface for the course. The implementation of the course is described in the study guide.",
  -1
  /* HOISTED */
);
const _hoisted_3 = ["href"];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/client-server-communication/files/course-syllabus-2022.html"),
          target: "_blank"
        }, "Course syllabus 2022 (HTML)", 8, _hoisted_3)
      ])
    ])
  ]);
}
const courseSyllabus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "course-syllabus.html.vue"]]);
export {
  courseSyllabus_html as default
};
