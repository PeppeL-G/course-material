import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "welcome",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#welcome",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Welcome!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Welcome to the course "),
    /* @__PURE__ */ createBaseVNode("em", null, "Web Development - Advanced Concepts"),
    /* @__PURE__ */ createTextVNode("!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "introduction",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#introduction",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Introduction")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "This website will be used to host the course material only. Canvas will primarily be used to:",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Send info to you through announcements (be sure to have your global notification settings or your course notification settings enabled)"),
    /* @__PURE__ */ createBaseVNode("li", null, "Organize you into lab groups and project groups (see the People page on Canvas)"),
    /* @__PURE__ */ createBaseVNode("li", null, "Keep track of your progress in the course (passed lab assignments) (see the Assignments page and the Grades page on Canvas)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "information-to-old-students",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#information-to-old-students",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Information to old students")
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Invitation to Canvas Course",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "peter.larsson-green@ju.se",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-text line-numbers-mode",
    "data-ext": "text"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-text" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "Hi!\n\nI need to be invited to a Canvas Course.\n\nMy JU email:\nXXX@student.ju.se\n\nThe course:\nTFWN19 Web Development - Advanced Concepts https://ju.instructure.com/courses/6820\n\nThanks!\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If you're almost done with the project work you have started a previous year, it might be OK to finish that this year, instead of completing the project per the description this year. Contact the course coordinator "),
    /* @__PURE__ */ createBaseVNode("strong", null, "within 1 week"),
    /* @__PURE__ */ createTextVNode(" after the course has started for a discussion if you want to continue on your old project.")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("This is a follow up course to "),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/" }, {
        default: withCtx(() => [
          createTextVNode("Web Development Fundamentals")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(", so you are expected to already know how to create web applications storing resources in a database and all the other things you learned in that course. In this course we will focus more on web applications exposing a REST API Single-Page Applications can use to store the data they need to store.")
    ]),
    _hoisted_4,
    _hoisted_5,
    createBaseVNode("p", null, [
      createTextVNode("Read the "),
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/study-guide/" }, {
        default: withCtx(() => [
          createTextVNode("Study Guide")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" for the details.")
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createTextVNode("If you're an old student that took this course a previous year but still have some examination tests left to pass you take those tests as they are described this year. The old Canvas course won't be used any more, so join this year's Canvas course, so we can keep track of your progress in the course this year there. If you aren't registered for the course this year, ask the course coordinator to invite you to the Canvas course by sending him an email message based on the template in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below with the topic "),
      _hoisted_7,
      createTextVNode(" to "),
      _hoisted_8,
      createTextVNode(".")
    ]),
    createVNode(_component_Figure, { caption: "Template for email message to be invited to a Canvas Course. Replace XXX with your own value." }, {
      default: withCtx(() => [
        _hoisted_9
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_10
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};