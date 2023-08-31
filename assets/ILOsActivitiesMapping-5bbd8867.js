import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, i as renderList, t as toDisplayString, p as pushScopeId, k as popScopeId } from "./app-8331cbf7.js";
const ILOsActivitiesMapping_vue_vue_type_style_index_0_scoped_5b5608e4_lang = "";
const _sfc_main = {
  props: {
    description: String
  },
  created() {
    this.ilos = this.description.trim().split("---").map((iloString) => {
      const stringParts = iloString.trim().split("\n");
      return {
        text: stringParts[0],
        tests: stringParts.filter((s) => s.startsWith("-")).map((s) => s.substr(1).trim()),
        activities: stringParts.filter((s) => s.startsWith("+")).map((s) => s.substr(1).trim())
      };
    });
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-5b5608e4"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "thead",
  null,
  [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th", null, "Intended Learning Outcome"),
      /* @__PURE__ */ createBaseVNode("th", null, "Examined Elements"),
      /* @__PURE__ */ createBaseVNode("th", null, "Learning Activities")
    ])
  ],
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("table", null, [
      _hoisted_1,
      createBaseVNode("tbody", null, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.ilos, (ilo) => {
            return openBlock(), createElementBlock("tr", {
              key: ilo.text
            }, [
              createBaseVNode(
                "td",
                null,
                toDisplayString(ilo.text),
                1
                /* TEXT */
              ),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(ilo.tests, (test) => {
                    return openBlock(), createElementBlock(
                      "div",
                      { key: test },
                      toDisplayString(test),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              createBaseVNode("td", null, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(ilo.activities, (activity) => {
                    return openBlock(), createElementBlock(
                      "div",
                      { key: activity },
                      toDisplayString(activity),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const ILOsActivitiesMapping = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5b5608e4"], ["__file", "ILOsActivitiesMapping.vue"]]);
export {
  ILOsActivitiesMapping as default
};
