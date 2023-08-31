import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="time-plan" tabindex="-1"><a class="header-anchor" href="#time-plan" aria-hidden="true">#</a> Time Plan</h1><p>The <span style="background-color:#00ffff75;display:inline-block;padding:0 8px;font-weight:bold;">Work</span> column indicates what you are expected to work on each day. <code>LW</code> = <code>Laboratory Work</code>, <code>PW</code> = <code>Project Work</code>.</p>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_TimePlan = resolveComponent("TimePlan");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_TimePlan, {
      startDate: new Date(2023, 0, 16),
      columns: [
        { key: "l", name: "Lectures", color: "#ffa5009c" },
        { key: "w", name: "Work", color: "#00ffff75" },
        { key: "s", name: "Lab Sessions", color: "#ffff0070" },
        { key: "i", name: "Important", color: "#ff000094" }
      ],
      rows: [
        // 1
        { w: "LW, PW Part 1 Group", l: "Introduction" },
        { w: "LW, PW Part 1 Group" },
        { w: "LW, PW Part 1 Group", s: "L1, L2" },
        { w: "LW, PW Part 2 Environment", l: "Tutorial: Client-side JS" },
        { w: "LW, PW Part 2 Environment" },
        {},
        {},
        // 2
        { w: "LW, PW Part 3 Idea" },
        { w: "LW, PW Part 3 Idea" },
        { w: "LW, PW Part 3 Idea", s: "L1, L2" },
        { w: "PW Part 4 GUI", l: "Tutorial: Svelte" },
        { w: "PW Part 4 GUI" },
        {},
        {},
        // 3
        { w: "PW Part 5 Frontend" },
        { w: "PW Part 5 Frontend" },
        { w: "PW Part 5 Frontend", s: "L1, L2" },
        { w: "PW Part 5 Frontend" },
        { w: "PW Part 5 Frontend" },
        {},
        {},
        // 4
        { w: "PW Part 5 Frontend", l: "REST API & Docker" },
        { w: "PW Part 5 Frontend" },
        { w: "PW Part 6 REST API", s: "L1, L2" },
        { w: "PW Part 6 REST API" },
        { w: "PW Part 6 REST API" },
        { i: "Re-exam period." },
        { i: "Re-exam period." },
        // 5 Re-exam period!
        { i: "Re-exam period." },
        { i: "Re-exam period." },
        { i: "Re-exam period." },
        { i: "Re-exam period." },
        { i: "Re-exam period." },
        { i: "Re-exam period." },
        { i: "Re-exam period." },
        // 6
        { w: "PW Part 7 Database", l: "Backend" },
        { w: "PW Part 7 Database" },
        { w: "PW Part 8 Backend", s: "L1, L2" },
        { w: "PW Part 8 Backend", l: "Guest Lecture: GDPR, E-directive, etc.", i: "Registration for written exam opens" },
        { w: "PW Part 8 Backend" },
        {},
        {},
        // 7
        { w: "PW Part 8 Backend" },
        { w: "PW Part 8 Backend" },
        { w: "PW Part 8 Backend", s: "L1, L2" },
        { w: "PW Part 8 Backend" },
        { w: "PW Part 8 Backend" },
        {},
        {},
        // 8
        { w: "PW Part 9 Front-Back", l: "AJAX & Auth" },
        { w: "PW Part 9 Front-Back" },
        { w: "PW Part 9 Front-Back", s: "L1, L2" },
        { w: "PW Part 10 Auth", l: "Guest Lecture: Website in Vue.js" },
        { w: "PW Part 10 Auth" },
        {},
        {},
        // 9
        { w: "PW Part 11 Extra", i: "Registration for written exam closes around now" },
        { w: "PW Part 11 Extra" },
        { w: "PW Part 11 Extra", s: "L1, L2" },
        { w: "PW Part 11 Extra", l: "Sample Exam" },
        { w: "PW Part 11 Extra" },
        {},
        {},
        // 10 Exam period!
        { w: "PW Part 11&12" },
        { w: "PW Part 11&12" },
        { w: "PW Part 11&12" },
        { w: "PW Part 11&12", i: "Written Examination" },
        { w: "PW Part 11&12" },
        {},
        { w: "PW Part 13", i: "Deadline Project Work" }
      ]
    }, null, 8, ["startDate", "rows"])
  ]);
}
const timePlan_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "time-plan.html.vue"]]);
export {
  timePlan_html as default
};
