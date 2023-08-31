import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createTextVNode, g as createCommentVNode, p as pushScopeId, k as popScopeId } from "./app-8331cbf7.js";
const Teacher_vue_vue_type_style_index_0_scoped_3f5a5b0a_lang = "";
const _sfc_main = {
  props: {
    name: String,
    photo: String,
    roles: Array,
    description: String,
    email: String,
    phone: String,
    website: String,
    zoomLink: String
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-3f5a5b0a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "teacher" };
const _hoisted_2 = ["src", "title", "alt"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["href"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { key: 2 };
const _hoisted_7 = ["href"];
const _hoisted_8 = { key: 3 };
const _hoisted_9 = ["href"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "clear": "right" } },
  null,
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("img", {
      src: "/course-material/teacher-pictures/" + $props.photo,
      title: "Photo of " + $props.name + ".",
      alt: "Photo of " + $props.name + "."
    }, null, 8, _hoisted_2),
    createBaseVNode("p", null, [
      createBaseVNode(
        "b",
        null,
        toDisplayString($props.roles.join(", ")) + ".",
        1
        /* TEXT */
      ),
      createTextVNode(
        " " + toDisplayString($props.description),
        1
        /* TEXT */
      )
    ]),
    createBaseVNode("ul", null, [
      $props.email ? (openBlock(), createElementBlock("li", _hoisted_3, [
        createTextVNode("Email: "),
        createBaseVNode("a", {
          href: "mailto:" + $props.email
        }, toDisplayString($props.email), 9, _hoisted_4)
      ])) : createCommentVNode("v-if", true),
      $props.phone ? (openBlock(), createElementBlock(
        "li",
        _hoisted_5,
        "Phone: " + toDisplayString($props.phone),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      $props.website ? (openBlock(), createElementBlock("li", _hoisted_6, [
        createBaseVNode("a", {
          href: $props.website,
          target: "_blank"
        }, "Website", 8, _hoisted_7)
      ])) : createCommentVNode("v-if", true),
      $props.zoomLink ? (openBlock(), createElementBlock("li", _hoisted_8, [
        createBaseVNode("a", {
          href: $props.zoomLink,
          target: "_blank"
        }, "Zoom", 8, _hoisted_9)
      ])) : createCommentVNode("v-if", true)
    ]),
    _hoisted_10
  ]);
}
const Teacher = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f5a5b0a"], ["__file", "Teacher.vue"]]);
export {
  Teacher as default
};
