import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "handlebars",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#handlebars",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Handlebars")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A templating language used to generate HTML code.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/04cXGOZxhAI",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Extra info</p><p>One thing I forgot in the lecture was that when you use the <code>#each</code> helper, the context is changed to the value you are iterating over. You can use <code>../</code> in the beginning to reference the parent context. Example:</p><p>Context:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">humans</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Template:</p><div class="language-handlebars line-numbers-mode" data-ext="handlebars"><pre class="language-handlebars"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">#each</span> <span class="token variable">humans</span><span class="token delimiter punctuation">}}</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n            <span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token variable">name</span><span class="token delimiter punctuation">}}</span></span>\n            <span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">#if</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">/</span><span class="token variable">isLoggedIn</span><span class="token delimiter punctuation">}}</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/humans/<span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token variable">id</span><span class="token delimiter punctuation">}}</span></span>/edit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Edit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n            <span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">/if</span><span class="token delimiter punctuation">}}</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">/each</span><span class="token delimiter punctuation">}}</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Generated HTML code:</p><div class="language-handlebars line-numbers-mode" data-ext="handlebars"><pre class="language-handlebars"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n        Alice\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/humans/1/edit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Edit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n        Bob\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/humans/2/edit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Edit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">Extra info</p><p>One thing I forgot in the lecture was that when you use the <code>#each</code> helper to iterate over primitive values (strings, numbers, booleans, etc.), you can use <code>this</code> to reference the value you are iterating over.</p><p>Context:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token literal-property property">names</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;Bob&quot;</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Template:</p><div class="language-handlebars line-numbers-mode" data-ext="handlebars"><pre class="language-handlebars"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">#each</span> <span class="token variable">names</span><span class="token delimiter punctuation">}}</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token variable">this</span><span class="token delimiter punctuation">}}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token handlebars language-handlebars"><span class="token delimiter punctuation">{{</span><span class="token block keyword">/each</span><span class="token delimiter punctuation">}}</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Generated HTML code:</p><div class="language-handlebars line-numbers-mode" data-ext="handlebars"><pre class="language-handlebars"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Alice<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Bob<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="handlebars.pdf">handlebars.pdf</a></li><li><a href="handlebars.pptx">handlebars.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 5);
const _hoisted_9 = {
  href: "https://handlebarsjs.com/guide/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "http://tryhandlebarsjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Use it for practice and to see a lot of examples.")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("Handlebars' Language Guide"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("tryhandlebarsjs.com"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_11
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
