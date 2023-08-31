import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="python-modelling" tabindex="-1"><a class="header-anchor" href="#python-modelling" aria-hidden="true">#</a> Python Modelling</h1><p>So, both lists and dicts can be used to store multiple values. When should one use which one? Well, a dict is usually used to represent single entity consisting of multiple values, e.g.:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>human <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>while a list is used to store multiple entities, e.g.:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>humans <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>    <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Claire&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this lecture we take a look at how we can use this to create a model of a physical thing which our computer then can perform computations on.</p>', 6);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/u5yb_itnywE",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "lecture-material",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#lecture-material",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Lecture material")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("a", { href: "python-modelling.pdf" }, "python-modelling.pdf")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("a", { href: "python-modelling.pptx" }, "python-modelling.pptx")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = [
  _hoisted_1,
  _hoisted_7,
  _hoisted_8,
  _hoisted_9
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
