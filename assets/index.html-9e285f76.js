import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "content-delivery-networks",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#content-delivery-networks",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Content Delivery Networks")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("It's important that static files clients request (images, videos, CSS files, client-side JS files, etc.) are delivered fast to the clients, because users don't want to wait. What's the fastest way to deliver them? Probably by using a "),
    /* @__PURE__ */ createBaseVNode("em", null, "Content Delivery Network"),
    /* @__PURE__ */ createTextVNode(" (CDN), so let's go through what that is.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://www.trustradius.com/content-delivery-networks-cdn",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Cloudflare",
  -1
  /* HOISTED */
);
const _hoisted_6 = {
  href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = {
  href: "https://www.cloudflare.com/learning/cdn/performance/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://www.cloudflare.com/learning/cdn/cdn-load-balance-reliability/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The rest of this lecture will contain some complimentary information related to content delivery networks.",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "a-cdn-do-not-run-your-web-application",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#a-cdn-do-not-run-your-web-application",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" A CDN do not run your web application")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You can't use a CDN to run your web application, such as an Express application. CDNs do not execute any of your application's code. You can only use a CDN to distribute files, such as images, videos, CSS files, etc.",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  `If your website only consists of static files, then you don't really need a web application at all. In these cases, a content delivery network is all you need to "run" your website. This is an extremely cheap way of "running" a single-page application, and clients will be able to retrieve your single-page application very fast. If you need to have some code that runs on a server, you can run that as a separate web application on another server your single-page application sends requests to.`,
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "css-frameworks-and-client-side-javascript-libraries",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#css-frameworks-and-client-side-javascript-libraries",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" CSS frameworks and client-side JavaScript libraries")
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = {
  href: "https://picturepan2.github.io/spectre/getting-started/installation.html#install-cdn",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = {
  href: "https://unpkg.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<link>",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<script>",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If you want you can host the CSS files for the CSS framework and the JavaScript files for the client-side JavaScript library in your own web application instead. This way, as long as your web application is up and running, you can be sure all webpages on it will be displayed correct. The drawback is that we lose the benefits with using a content delivery network, (shorter loading times, less requests to handle for our own web application, etc.).",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Can we somehow get the best of both worlds? Yes! We can try to load the files from the content delivery network, and if that fails we fallback to loading them from our own web application. This can be achieved with client-side JavaScript.",
  -1
  /* HOISTED */
);
const _hoisted_20 = { class: "custom-container tip" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_22 = {
  href: "https://jquery.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = {
  href: "https://cdnjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<script>",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<script>",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<script>",
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n	window<span class="token punctuation">.</span>jQuery <span class="token operator">||</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;script src=&quot;/static/libs/jquery/3.5.1/jquery.min.js&quot;&gt;&lt;\\/script&gt;&#39;</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_28 = /* @__PURE__ */ createStaticVNode('<h2 id="subresource-integrity" tabindex="-1"><a class="header-anchor" href="#subresource-integrity" aria-hidden="true">#</a> Subresource Integrity</h2><p>Fetching and executing client-side JavaScript code from other servers can be dangerous. You probably trust the code in the client-side JavaScript library you load from a content delivery network, but if you&#39;re unlucky, you might not get the code you want! Maybe a hacker has managed to hack the content delivery network, and he has programmed the network to always send back his own evil client-side JavaScript code whenever the network receives a request for a JavaScript file. That can end really dangerous for your users.</p><p>To protect websites from this vulnerability, a security feature was added to web browsers called <em>Subresource Integrity</em> (SRI). Whenever you load a file using the <code>&lt;script&gt;</code> tag or <code>&lt;link&gt;</code> tag, you can also add the <code>integrity</code> attribute to it, and it&#39;s value should be:</p><ul><li>The name of a hash algorithm, and</li><li>The hash value of the file you want to load using that algorithm</li></ul><p>When the web browser has downloaded the file, it will compute the hash value of the file using the hash algorithm and see if it matches the hash value in the attribute, and it will only use the file if they match. If they don&#39;t match it means someone has made changes to the file you intended to download.</p><p>Most content delivery network hosting JavaScript and CSS files will also provide you with a hashing algorithm and hash value you can use, so mostly you just need to copy-paste to make use of this security feature.</p>', 6);
const _hoisted_34 = { class: "custom-container tip" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_36 = {
  href: "https://momentjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_37 = {
  href: "https://cdnjs.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("First, let's make it clear that there exists many different companies that host content delivery networks. The website "),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("TrustRadius has a list of some of them"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". One of them, "),
      _hoisted_5,
      createTextVNode(", has some really good pages describing what a content delivery network is. The content of this lecture will simply be the content on those pages:")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          createTextVNode("What is a CDN? | How do CDNs work?"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("CDN Performance"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("CDN Reliability & Redundancy"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    _hoisted_12,
    _hoisted_13,
    createBaseVNode("p", null, [
      createTextVNode("Many CSS frameworks and client-side JavaScript libraries are distributed through content delivery networks. For example, the CSS framework "),
      createBaseVNode("a", _hoisted_14, [
        createTextVNode("Spectre is distributed through a content delivery network"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" called "),
      createBaseVNode("a", _hoisted_15, [
        createTextVNode("unpkg"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". These can be loaded very fast to your webpages by using the "),
      _hoisted_16,
      createTextVNode(" tag and the "),
      _hoisted_17,
      createTextVNode(" tag as usual, especially if your user has already visited another website loading the framework/library from the same content delivery network, because then the user already have the file in the web browser's cache. The drawback with this solution is that your webpages are now dependent on the content delivery network. If the content delivery network for some reason is down, your webpages will not be displayed correct.")
    ]),
    _hoisted_18,
    _hoisted_19,
    createBaseVNode("div", _hoisted_20, [
      _hoisted_21,
      createBaseVNode("p", null, [
        createTextVNode("The client-side JavaScript library "),
        createBaseVNode("a", _hoisted_22, [
          createTextVNode("jQuery"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" can be loaded from the content delivery network "),
        createBaseVNode("a", _hoisted_23, [
          createTextVNode("cdnjs"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". The "),
        _hoisted_24,
        createTextVNode(" tag on Line 1 in the code below will first tell the web browser to load the jQuery library from the content delivery network. The JavaScript code in the next "),
        _hoisted_25,
        createTextVNode(" tag will then check if the library was loaded successfully, and if not it will add another "),
        _hoisted_26,
        createTextVNode(" element to the document, telling the web browser to load the library from the web application instead. After these lines, we can be sure the jQuery library has been loaded.")
      ]),
      _hoisted_27
    ]),
    _hoisted_28,
    createBaseVNode("div", _hoisted_34, [
      _hoisted_35,
      createBaseVNode("p", null, [
        createTextVNode("The client-side JavaScript library "),
        createBaseVNode("a", _hoisted_36, [
          createTextVNode("Moment"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" can be downloaded from the content delivery network "),
        createBaseVNode("a", _hoisted_37, [
          createTextVNode("cdnjs"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" with an integrity check using the code below.")
      ]),
      _hoisted_38
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
