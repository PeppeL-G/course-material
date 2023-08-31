import { _ as _export_sfc, o as openBlock, c as createElementBlock, F as Fragment, i as renderList, a as createBaseVNode, t as toDisplayString } from "./app-8331cbf7.js";
const CompactInfo_vue_vue_type_style_index_0_scoped_23c0a140_lang = "";
const _sfc_main = {
  props: {
    infoPieces: Object
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("dl", null, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.infoPieces, (value, key) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            createBaseVNode(
              "dt",
              null,
              toDisplayString(key),
              1
              /* TEXT */
            ),
            createBaseVNode("dd", null, [
              value instanceof Array ? (openBlock(), createElementBlock("ul", _hoisted_1, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(value, (v) => {
                    return openBlock(), createElementBlock(
                      "li",
                      null,
                      toDisplayString(v),
                      1
                      /* TEXT */
                    );
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])) : (openBlock(), createElementBlock(
                "span",
                _hoisted_2,
                toDisplayString(value),
                1
                /* TEXT */
              ))
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      256
      /* UNKEYED_FRAGMENT */
    ))
  ]);
}
const CompactInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-23c0a140"], ["__file", "CompactInfo.vue"]]);
export {
  CompactInfo as default
};
