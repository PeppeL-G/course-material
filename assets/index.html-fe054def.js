import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="welcome" tabindex="-1"><a class="header-anchor" href="#welcome" aria-hidden="true">#</a> Welcome!</h1><p>Welcome to <em>Introduction to Script Programming</em>! In this course you&#39;ll learn how to create small programs in Python your computer can execute.</p><p>This website will be used to host the course material. Canvas will primarily be used to:</p><ul><li>Send information to you through announcements (be sure to have your global notification settings or your course notification settings enabled on Canvas)</li><li>Organize you into lab groups (see the People page on Canvas)</li><li>Keep track of your progress in the course (passed lab assignments) (see the Assignments page and the Grades page on Canvas)</li></ul><h2 id="two-course-codes" tabindex="-1"><a class="header-anchor" href="#two-course-codes" aria-hidden="true">#</a> Two course codes!</h2><p>This course is primarily given for two programs, and they have different codes for this course, as shown in the table below.</p><table><thead><tr><th>Program</th><th>Course Code</th></tr></thead><tbody><tr><td>Sustainable Building Information Management</td><td>TSTG17</td></tr><tr><td>IT Infrastructure and Network Design</td><td rowspan="3">TSPG17</td></tr><tr><td>User Experience Design (electable)</td></tr><tr><td>All other students (electable)</td></tr></tbody></table><p>At the moment, the only difference between these two are some of the problems that should be solved in the laboratory work. Those problems have been pointed out in the laboratory work instructions.</p><h2 id="information-to-old-students" tabindex="-1"><a class="header-anchor" href="#information-to-old-students" aria-hidden="true">#</a> Information to old students</h2>', 9);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Invitation to Canvas Room",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "peter.larsson-green@ju.se",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-text line-numbers-mode",
    "data-ext": "text"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-text" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "Hi!\n\nI need to be invited to a Canvas Room.\n\nMy JU email address is:\nXXX@student.ju.se\n\nThe Canvas Room is:\nTSTG17/TSPG17 2022 Introduction to Script Programming\nhttps://ju.instructure.com/courses/6982\n\nThanks!\n")
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("If you're an old student that took this course a previous year but still have some examination tests left to pass you take those tests as they are described this year. The old old Canvas Room won't be used any more, so join this year's Canvas Room, so we can keep track of your progress in the course this year there. If you aren't registered for the course this year, ask the course manager to invite you to the Canvas Room by sending him an email message based on the template in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below with the topic "),
      _hoisted_10,
      createTextVNode(" to "),
      _hoisted_11,
      createTextVNode(".")
    ]),
    createVNode(_component_Figure, { caption: "Template for email message to be invited to a Canvas Room. Replace XXX with your own value, and only keep the course you want to be invited to." }, {
      default: withCtx(() => [
        _hoisted_12
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
