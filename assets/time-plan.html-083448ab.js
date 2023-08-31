import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, f as createStaticVNode, a as createBaseVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h1><p>The <span style="background-color:#80008082;display:inline-block;padding:0 8px;font-weight:bold;">Exercise</span> and <span style="background-color:#00ffff54;display:inline-block;padding:0 8px;font-weight:bold;">Project Work</span> column indicates what you are expected to work on each day.</p><p><code>Lecture (NMD)</code> means that all students from the program <em>New Media Design</em> (and those with similar pre-requisites) should attend the lecture.</p><p><code>Lecture (DMP)</code> means that all students from the program <em>Software Engineering and Mobile Platforms</em> (and those with similar pre-requisites) should attend the lecture.</p><div class="custom-container tip"><p class="custom-container-title">Weekly Announcements</p><p>In the beginning of each week a new announcement message will be posted on the course&#39;s Canvas Room to let you know what you are expected to work on that week, but it&#39;s also indicated in the Time Plan below.</p></div>', 5);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Re-exam periods not included"),
    /* @__PURE__ */ createBaseVNode("p", null, "The two re-exam periods that are also part of the course are not shown in the Time Plan above, but those basically gives you 40 additional hours to finish the course in.")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_TimePlan = resolveComponent("TimePlan");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_TimePlan, {
      startDate: new Date(2022, 7, 29),
      columns: [
        { key: "l", name: "Lecture/Tutorial/Seminar", color: "#ffa5009c" },
        { key: "s", name: "Lab Session", color: "#ffff0070" },
        { key: "e", name: "Exercise", color: "#80008082" },
        { key: "p", name: "Project Work", color: "#00ffff75" },
        { key: "i", name: "Important", color: "#ff000094" }
      ],
      rows: [
        // 35
        { p: "Part 1: Report Spec." },
        { p: "Part 1: Report Spec." },
        { l: "Lecture: Introduction", p: "Part 1: Report Spec." },
        { p: "Part 1: Report Spec." },
        { l: "Lecture (DMP): CSS 1 & 2<br>Lecture (NMD): DB 1", p: "Part 1: Report Spec." },
        {},
        {},
        // 36
        { s: "Group 5, 6", e: "DMP: HTML & CSS<br>NMD: Database", p: "Part 2: Report GUI" },
        { s: "Group 3, 4", e: "DMP: HTML & CSS<br>NMD: Database", p: "Part 2: Report GUI" },
        { l: "Lecture (NMD): DB 2", e: "DMP: HTML & CSS<br>NMD: Database", p: "Part 2: Report GUI" },
        { e: "DMP: HTML & CSS<br>NMD: Database", p: "Part 2: Report GUI" },
        { l: "Tutorial: Express", s: "Group 1", e: "DMP: HTML & CSS<br>NMD: Database", p: "Part 2: Report GUI" },
        {},
        {},
        // 37
        { s: "Group 5, 6", e: "JS" },
        { s: "Group 3, 4", p: "Part 3: Prototype" },
        { p: "Part 3: Prototype" },
        { l: "Lecture: Academic Writing", p: "Part 3: Prototype" },
        { l: "Tutorial: DB", s: "Group 1", p: "Part 3: Prototype" },
        {},
        {},
        // 38
        { s: "Group 5, 6", p: "Part 4: DB" },
        { s: "Group 3, 4", p: "Part 4: DB", i: "Registration for the Written Examination opens" },
        { p: "Part 4: DB" },
        { l: "Seminar: Academic Writing 1 & 2", p: "Part 5: Forms" },
        { l: "Tutorial: Auth", s: "Group 1", p: "Part 5: Forms" },
        {},
        {},
        // 39
        { s: "Group 5, 6", p: "Part 5: Forms" },
        { s: "Group 3, 4", p: "Part 6: Errors", i: "Deadline submit Project Report for feedback" },
        { p: "Part 6: Errors" },
        { p: "Part 6: Errors" },
        { l: "Tutorial: Security", s: "Group 1", p: "Part 7: Auth" },
        {},
        {},
        // 40
        { s: "Group 5, 6", p: "Part 7: Auth" },
        { s: "Group 3, 4", p: "Part 7: Auth" },
        { p: "Part 8: Security" },
        { p: "Part 8: Security" },
        { l: "Tutorial: Repetition", s: "Group 1", p: "Part 8: Security" },
        { i: "Registration for the Written Examination closes around now" },
        {},
        // 41
        { s: "Group 5, 6", p: "Part 9: Optional" },
        { s: "Group 3, 4", p: "Part 9: Optional" },
        { p: "Part 9: Optional" },
        { p: "Part 10: Deploy" },
        { l: "Sample exam", s: "Group 1", p: "Part 10: Deploy" },
        {},
        {},
        // 42
        { p: "Part 11: Demonstration" },
        { p: "Part 11: Demonstration" },
        { p: "Part 11: Demonstration" },
        { p: "Part 11: Demonstration", i: "Written Examination" },
        { p: "Part 11: Demonstration" },
        {},
        { p: "Part 12: Submission", i: "Deadline submit Project Work for grading" }
      ]
    }, null, 8, ["startDate", "rows"]),
    _hoisted_6
  ]);
}
const timePlan_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "time-plan.html.vue"]]);
export {
  timePlan_html as default
};
