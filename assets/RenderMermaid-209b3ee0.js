import { _ as _export_sfc, o as openBlock, c as createElementBlock, l as __vitePreload } from "./app-8331cbf7.js";
const RenderMermaid_vue_vue_type_style_index_0_scoped_35f3a9b6_lang = "";
const getMermaid = function() {
  let loadMermaidPromise = null;
  return async function loadMermaid() {
    if (loadMermaidPromise == null) {
      loadMermaidPromise = __vitePreload(() => import("./mermaid-870801be.js").then((n) => n.m), true ? [] : void 0);
      const mermaid = await loadMermaidPromise;
      mermaid.mermaidAPI.initialize({
        startOnLoad: false
      });
    }
    return await loadMermaidPromise;
  };
}();
const _sfc_main = {
  props: {
    graphDefinition: String
  },
  data() {
    return {
      graphSvgCode: ""
    };
  },
  async mounted() {
    const mermaid = await getMermaid();
    const insertSvg = (svgCode, bindFunctions) => {
      this.graphSvgCode = svgCode;
    };
    mermaid.mermaidAPI.render(
      "graphDiv",
      this.graphDefinition.trim(),
      insertSvg
    );
  }
};
const _hoisted_1 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "mermaid",
    innerHTML: $data.graphSvgCode
  }, null, 8, _hoisted_1);
}
const RenderMermaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35f3a9b6"], ["__file", "RenderMermaid.vue"]]);
export {
  RenderMermaid as default
};
