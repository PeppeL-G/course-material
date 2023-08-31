import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, g as createCommentVNode, F as Fragment, i as renderList, p as pushScopeId, k as popScopeId } from "./app-8331cbf7.js";
const StudyGuideInfo_vue_vue_type_style_index_0_scoped_e8249959_lang = "";
const _sfc_main = {
  props: {
    courseName: String,
    ladokCode: String,
    credits: String,
    year: String,
    courseCoordinator: String,
    examiner: String,
    pingPongEvent: String,
    pingPongPassword: String,
    canvasCourseId: String,
    canvasCourses: Array
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-e8249959"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "This study guide contains information about the implementation of the course. If you ever have any question about something in the course, look for the answer in this study guide or one of the other pages it refers to. If you can't find the answer to your question, email the course coordinator.",
  -1
  /* HOISTED */
));
const _hoisted_2 = { class: "study-guide-information" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "dt",
  null,
  "Course name",
  -1
  /* HOISTED */
));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "dt",
  null,
  "Ladok code",
  -1
  /* HOISTED */
));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "dt",
  null,
  "Credits",
  -1
  /* HOISTED */
));
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "dt",
  null,
  "Course coordinator",
  -1
  /* HOISTED */
));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "dt",
  null,
  "Examiner",
  -1
  /* HOISTED */
));
const _hoisted_10 = { key: 2 };
const _hoisted_11 = { key: 3 };
const _hoisted_12 = { key: 4 };
const _hoisted_13 = { key: 5 };
const _hoisted_14 = { key: 6 };
const _hoisted_15 = { key: 7 };
const _hoisted_16 = ["href"];
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "dt",
  null,
  "Canvas Rooms",
  -1
  /* HOISTED */
));
const _hoisted_18 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("dl", _hoisted_2, [
      _hoisted_3,
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.courseName),
        1
        /* TEXT */
      ),
      _hoisted_4,
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.ladokCode),
        1
        /* TEXT */
      ),
      _hoisted_5,
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.credits),
        1
        /* TEXT */
      ),
      $props.year ? (openBlock(), createElementBlock("dt", _hoisted_6, "Year")) : createCommentVNode("v-if", true),
      $props.year ? (openBlock(), createElementBlock(
        "dd",
        _hoisted_7,
        toDisplayString($props.year),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      _hoisted_8,
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.courseCoordinator),
        1
        /* TEXT */
      ),
      _hoisted_9,
      createBaseVNode(
        "dd",
        null,
        toDisplayString($props.examiner),
        1
        /* TEXT */
      ),
      $props.pingPongEvent ? (openBlock(), createElementBlock("dt", _hoisted_10, "Ping Pong event")) : createCommentVNode("v-if", true),
      $props.pingPongEvent ? (openBlock(), createElementBlock(
        "dd",
        _hoisted_11,
        toDisplayString($props.pingPongEvent),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      $props.pingPongPassword ? (openBlock(), createElementBlock("dt", _hoisted_12, "Ping Pong password")) : createCommentVNode("v-if", true),
      $props.pingPongPassword ? (openBlock(), createElementBlock(
        "dd",
        _hoisted_13,
        toDisplayString($props.pingPongPassword),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      $props.canvasCourseId ? (openBlock(), createElementBlock("dt", _hoisted_14, "Canvas Room")) : createCommentVNode("v-if", true),
      $props.canvasCourseId ? (openBlock(), createElementBlock("dd", _hoisted_15, [
        createBaseVNode("a", {
          href: "https://ju.instructure.com/courses/" + $props.canvasCourseId,
          target: "_blank"
        }, toDisplayString($props.courseName), 9, _hoisted_16)
      ])) : createCommentVNode("v-if", true),
      $props.canvasCourses ? (openBlock(), createElementBlock(
        Fragment,
        { key: 8 },
        [
          _hoisted_17,
          createBaseVNode("dd", null, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($props.canvasCourses, (course) => {
                  return openBlock(), createElementBlock("li", {
                    key: course.id
                  }, [
                    createBaseVNode("a", {
                      href: "https://ju.instructure.com/courses/" + course.id,
                      target: "_blank"
                    }, toDisplayString(course.name), 9, _hoisted_18)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ])
  ]);
}
const StudyGuideInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e8249959"], ["__file", "StudyGuideInfo.vue"]]);
export {
  StudyGuideInfo as default
};
