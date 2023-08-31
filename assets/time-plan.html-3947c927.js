import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, a as createBaseVNode, b as createTextVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "time-plan",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#time-plan",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Time Plan")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("span", { style: { "background-color": "#00ffff75", "display": "inline-block", "padding": "0 8px", "font-weight": "bold" } }, "Exercise"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("span", { style: { "background-color": "#ffff0070", "display": "inline-block", "padding": "0 8px", "font-weight": "bold" } }, "Lab"),
    /* @__PURE__ */ createTextVNode(" columns indicate what you are expected to work on each day.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "There will also be an extra lab session in the first half of January where you can come and present your labs to a teacher (more details will be announced later). In addition to that, the course also includes two re-exam periods (not shown in the table above).",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_TimePlan = resolveComponent("TimePlan");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createVNode(_component_TimePlan, {
      startDate: new Date(2022, 9, 24),
      columns: [
        { key: "t", name: "Lecture", color: "#ffa5009c" },
        { key: "e", name: "Exercise", color: "#00ffff75" },
        { key: "l", name: "Lab", color: "#ffff0070" },
        { key: "g", name: "Lab session", color: "#80008082" },
        { key: "i", name: "Important", color: "#ff000094" }
      ],
      rows: [
        // 1
        { e: "Exercise 0" },
        { e: "Exercise 0" },
        { e: "Exercise 1", g: "Group 2" },
        { e: "Exercise 1", g: "Group 1, 3" },
        { e: "Exercise 1" },
        {},
        {},
        // 2
        { l: "Lab 1", t: "Tutorial 1", g: "Group 1" },
        { l: "Lab 1", t: "Repetition" },
        { l: "Lab 1" },
        { e: "Exercise 2", g: "Group 2, 3" },
        { e: "Exercise 2" },
        {},
        {},
        // 3
        { l: "Lab 2", t: "Tutorial 2", g: "Group 1" },
        { l: "Lab 2", t: "Repetition", g: "Group 2" },
        { l: "Lab 2" },
        { e: "Exercise 3", g: "Group 3" },
        { e: "Exercise 3" },
        {},
        {},
        // 4
        { l: "Lab 3", t: "Tutorial 3" },
        { l: "Lab 3", t: "Repetition", g: "Group 1", i: "Exam Registration Opens" },
        { l: "Lab 3", g: "Group 2" },
        { e: "Exercise 4", g: "Group 3" },
        { e: "Exercise 4" },
        {},
        {},
        // 5
        { l: "Lab 4", t: "Tutorial 4", g: "Group 1" },
        { l: "Lab 4", g: "Group 2" },
        { l: "Lab 4", t: "Repetition" },
        { e: "Exercise 5", g: "Group 3" },
        { e: "Exercise 5" },
        {},
        {},
        // 6
        { l: "Lab 5", t: "Tutorial 5", g: "Group 1" },
        { l: "Lab 5", t: "Repetition" },
        { l: "Lab 5", g: "Group 2" },
        { e: "Exercise 6", g: "Group 3" },
        { e: "Exercise 6" },
        { i: "Exam Registration closes around now" },
        {},
        // 7
        { l: "Lab 6", t: "Tutorial 6", g: "Group 1" },
        { l: "Lab 6", t: "Sample exam" },
        { l: "Lab 6", g: "Group 2" },
        { l: "Lab 6", g: "Group 3" },
        { l: "Lab 6" },
        {},
        {},
        // 8
        {},
        {},
        {},
        { i: "Written Exam" },
        {},
        {},
        {}
      ]
    }, null, 8, ["startDate"]),
    _hoisted_3
  ]);
}
const timePlan_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "time-plan.html.vue"]]);
export {
  timePlan_html as default
};
