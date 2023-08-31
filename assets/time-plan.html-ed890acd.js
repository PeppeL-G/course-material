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
        { key: "l", name: "Lectures/Tutorials", color: "#ffa5009c" },
        { key: "w", name: "Work", color: "#00ffff75" },
        { key: "s", name: "Lab Sessions", color: "#ffff0070" },
        { key: "i", name: "Important", color: "#ff000094" }
      ],
      rows: [
        // 3
        { w: "LW, PW 1 Group", l: "Course Introduction, Android Studio" },
        { w: "LW, PW 1 Group" },
        { w: "LW, PW 1 Group" },
        { w: "LW, PW 2 Environment", l: "Jetpack Compose" },
        { w: "LW, PW 2 Environment" },
        {},
        {},
        // 4
        { w: "LW, PW 2 Environment", l: "Jetpack Compose" },
        { w: "LW, PW 3 Idea" },
        { w: "LW, PW 3 Idea" },
        { w: "LW, PW 3 Idea" },
        { w: "LW, PW 3 Idea" },
        {},
        {},
        // 5
        { w: "LW, PW 3 Idea", l: "Android Fundamentals" },
        { w: "LW, PW 3 Idea" },
        { w: "LW, PW 3 Idea" },
        { w: "PW 4 Mockups", l: "GUI Design & Prototyping by Martin" },
        { w: "PW 4 Mockups" },
        {},
        {},
        // 6
        { w: "PW 4 Mockups" },
        { w: "PW 4 Mockups" },
        { w: "PW 4 Mockups" },
        { w: "PW 5 Present Mockups", i: "Present Mockups" },
        { w: "PW 5 Present Mockups", i: "Present Mockups" },
        { i: "Re-exam period" },
        { i: "Re-exam period" },
        // 7
        { i: "Re-exam period" },
        { i: "Re-exam period" },
        { i: "Re-exam period" },
        { i: "Re-exam period" },
        { i: "Re-exam period" },
        { i: "Re-exam period" },
        { i: "Re-exam period" },
        // 8
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement", l: "Asynchronous operations" },
        { w: "PW 6 Implement" },
        {},
        {},
        // 9
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        {},
        {},
        // 10
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        {},
        {},
        // 11
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { w: "PW 6 Implement" },
        { i: "Exam period" },
        { i: "Exam period" },
        // 12
        { w: "PW 7 Presenting", i: "Exam period" },
        { w: "PW 7 Presenting", i: "Exam period" },
        { w: "PW 7 Presenting", i: "Exam period" },
        { w: "PW 7 Presenting", i: "Exam period" },
        { w: "PW 7 Presenting", i: "Exam period" },
        { i: "Exam period" },
        { w: "PW 8 Submit", i: "Exam period, Deadline submit PW for grading" }
      ]
    }, null, 8, ["startDate"])
  ]);
}
const timePlan_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "time-plan.html.vue"]]);
export {
  timePlan_html as default
};
