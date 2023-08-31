import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, e as withCtx, b as createTextVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-views-and-layouts",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-views-and-layouts",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Views and Layouts")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Here's a short tutorial on how to create basic graphical user interfaces in Android Studio.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/nJ-9jQw69SU",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> Views</h2><p>The graphical user interface (GUI) used in Android consists of <em>views</em>. The <code>View</code> class represents a general view, and sub-classes to <code>View</code> represent specific views, for example:</p><ul><li>The sub-class <code>Button</code> represents a view displaying a button the user can click on</li><li>The sub-class <code>TextView</code> represents a view displaying some text</li><li>The sub-class <code>ImageView</code> represents a view displaying an image</li><li>Etc.</li></ul><p>The GUI can be specified either:</p><ul><li>Programmatically, in which case you create new instances of the <code>View</code> classes you need to use yourself in the programming language you use (Java/Kotlin/whatever)</li><li>Declaratively in XML, in which case you can use functionality from the Android framework to create the <code>View</code> instances you need based on the content of an XML file</li></ul><p>Most often you specify the GUI in an XML file, since that&#39;s usually easier to read and write. This is especially true when the GUI consists of many <code>View</code>s. XML files specifying what the GUI should look like are put in the folder <code>res/layout/</code>, and named <code>in_this_convention.xml</code>.</p><div class="custom-container warning"><p class="custom-container-title">About the context</p><p>Most of the constructors in classes from the Android framework has a parameter called <code>context</code>. Here you should pass an instance of the <code>Context</code> class. The <code>Context</code> class keeps track of information the classes needs to function properly, such as which preferred language the user has selected on the device. Whenever you write your own code making use of these classes, the framework will provide you with a reference to a <code>Context</code> you can use. For example, the <code>Activity</code> class inherits from <code>Context</code>, so you can use an <code>Activity</code> as the context.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of how to create a new <code>TextView</code> programmatically in Kotlin.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// Import the classes we need from the framework.</span>\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>TextView\n\n<span class="token comment">// Find a context, e.g. the Activity this code runs in.</span>\n<span class="token keyword">val</span> aContext <span class="token operator">=</span> theActivity <span class="token comment">// (does not work as it is, but imagine)</span>\n\n<span class="token comment">// Create and configure the TextView.</span>\n<span class="token keyword">val</span> myTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\nmyTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;This is the text the TextView should show!&quot;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>', 8);
const _hoisted_12 = { class: "custom-container tip" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example of how to create a new "),
    /* @__PURE__ */ createBaseVNode("code", null, "TextView"),
    /* @__PURE__ */ createTextVNode(" declaratively in XML and Kotlin.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, '<!-- The URL-thing looks strange, but it simply defines the\n     the "android" namespace, which most attributes comes from -->'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("This is the text the TextView should show!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Import the classes we need from the framework."),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("TextView\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("LayoutInflater\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find a context, e.g. the Activity this code runs in."),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" aContext "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" theActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// (does not work as it is, but imagine)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Obtain a layoutInflater."),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" layoutInflater "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" LayoutInflater"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "from"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("aContext"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Use the layoutInflater to convert the XML structure to View objects."),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" myTextView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" layoutInflater"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "inflate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("\n	R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("my_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// This is an identifier to the XML file to use."),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "null"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// This should be a reference to View the inflated View will be added to, but in this case we don't have that."),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "as"),
        /* @__PURE__ */ createTextVNode(" TextView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// The inflate method always returns a general View, but we know that we will always get back a TextView when we use R.layout.my_view, so can safely downcast here."),
        /* @__PURE__ */ createTextVNode("\n")
      ])
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> Layouts</h2><p>The mentioned views (<code>Button</code>, <code>TextView</code>, <code>ImageView</code>) display something on the screen the user can see. Another category of views that exists is called <em>layouts</em>. Layouts don&#39;t display anything on the screen, but they are instead designed to contain other views (called <em>children</em>), and a layout is used to position its children. Example of layouts are:</p><ul><li>The class <code>LinearLayout</code>, which positions it&#39;s children next to each other, either horizontally or vertically</li><li>The class <code>FrameLayout</code>, which positions it&#39;s children independent of each other (the children can overlap)</li><li>The class <code>RelativeLayout</code>, which positions it&#39;s children relative to each other or relative to the layout (above, or below, or to the right of, or to the left of, etc.)</li><li>Etc.</li></ul><h2 id="layoutparams" tabindex="-1"><a class="header-anchor" href="#layoutparams" aria-hidden="true">#</a> LayoutParams</h2><p>When a view is used inside a layout, you need to add information to the view telling the layout how the view should be positioned. This information is represented through a class called <code>LayoutParams</code>. In this class, a view can indicate how tall and wide it wants to be. If a layout needs more information than that (which usually is the case), the layout can define a sub-class to <code>LayoutParams</code> the child should use. For example:</p><ul><li>Views in a <code>LinearLayout</code> should use the class <code>LinearLayout.LayoutParams</code></li><li>Views in a <code>FrameLayout</code> should use the class <code>FrameLayout.LayoutParams</code></li><li>Views in a <code>RelativeLayout</code> should use the class <code>RelativeLayout.LayoutParams</code></li><li>Etc.</li></ul><p>So, when using a <code>View</code>, you do not only specify the properties of the <code>View</code> itself, but also the properties of the <code>LayoutParams</code> corresponding to the layout the <code>View</code> will be used in, and these properties will differ depending on which layout you use.</p><p>The width and height of a view can be defined in <code>LayoutParams</code> through the two constants <code>wrap_content</code> and <code>match_parent</code>:</p><ul><li>If the width in <code>LayoutParams</code> is set to <code>wrap_content</code>, the width of the <code>View</code> will just be big enough to surround its content</li><li>If the width in <code>LayoutParams</code> is set to <code>match_parent</code>, the width of the <code>View</code> will be as wide as the layout</li><li>If the height in <code>LayoutParams</code> is set to <code>wrap_content</code>, the height of the <code>View</code> will just be big enough to surround its content</li><li>If the height in <code>LayoutParams</code> is set to <code>match_parent</code>, the height of the <code>View</code> will be as tall as the layout</li></ul>', 9);
const _hoisted_26 = { class: "custom-container tip" };
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<p class="custom-container-title">Example</p><p>Example of how to create a new <code>FrameLayout</code> containing two <code>TextView</code>s programmatically in Kotlin.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// Import the classes we need from the framework.</span>\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>TextView\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>FrameLayout\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>Gravity\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>ViewGroup\n\n<span class="token comment">// Find a context, e.g. the Activity this code runs in.</span>\n<span class="token keyword">val</span> aContext <span class="token operator">=</span> theActivity\n\n<span class="token comment">// Create the GUI!.</span>\n<span class="token keyword">val</span> theLayout <span class="token operator">=</span> <span class="token function">FrameLayout</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\n\n<span class="token keyword">val</span> theFirstTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\ntheFirstTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the first text view!&quot;</span></span>\ntheFirstTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">,</span> <span class="token comment">// The width the view should have.</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span> <span class="token comment">// The height the view should have.</span>\n	Gravity<span class="token punctuation">.</span>CENTER <span class="token comment">// The &quot;gravity&quot; the view should have (where it should be positioned in the FrameLayout).</span>\n<span class="token punctuation">)</span>\ntheLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theFirstTextView<span class="token punctuation">)</span>\n\n<span class="token keyword">val</span> theSecondTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span>aContext<span class="token punctuation">)</span>\ntheSecondTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the second text view!&quot;</span></span>\ntheSecondTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n	ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n	Gravity<span class="token punctuation">.</span>BOTTOM\n<span class="token punctuation">)</span>\ntheLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theSecondTextView<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The GUI would look something like this:</p>', 4);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "position": "relative", "height": "100%" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)" } }, "I'm the first text view!"),
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "bottom": "0" } }, "I'm the second text view!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = { class: "custom-container tip" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example of how to create a new "),
    /* @__PURE__ */ createBaseVNode("code", null, "TextView"),
    /* @__PURE__ */ createTextVNode(" declaratively in XML and Kotlin.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, '<!-- All attributes starting with "layout_" are used in the\n	     LayoutParams, so which "layout_*" attributes you can use\n	     depends on which Layout you are using. -->'),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("center"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the first text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("bottom"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the second text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
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
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("FrameLayout\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("LayoutInflater\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" aContext "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" theActivity\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" layoutInflater "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" LayoutInflater"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "from"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("aContext"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" myFrameLayout "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" layoutInflater"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "inflate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("\n	R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("my_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "null"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "as"),
        /* @__PURE__ */ createTextVNode(" FrameLayout "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// This time we know we will get back a FrameLayout, since that's the root element in the XML file."),
        /* @__PURE__ */ createTextVNode("\n")
      ])
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
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The GUI would look something like this:",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "position": "relative", "height": "100%" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)" } }, "I'm the first text view!"),
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "bottom": "0" } }, "I'm the second text view!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createStaticVNode('<h2 id="showing-the-gui-in-an-activity" tabindex="-1"><a class="header-anchor" href="#showing-the-gui-in-an-activity" aria-hidden="true">#</a> Showing the GUI in an Activity</h2><p>So far we have just looked at how to create the GUI, we haven&#39;t actually written any code for displaying it on the screen!</p><p>In an <code>Activity</code>, call the method <code>setContentView()</code> to tell it which GUI it should show. You can either pass it the identifier for an XML file with the GUI specified, or the root <code>View</code> of the GUI. The root view of your GUI will be added to another layout, so one typically gives the root view (which typically is a layout) the width and height <code>MATCH_PARENT</code>.</p>', 3);
const _hoisted_42 = { class: "custom-container tip" };
const _hoisted_43 = /* @__PURE__ */ createStaticVNode('<p class="custom-container-title">Example</p><p>Example of how to show a <code>FrameLayout</code> containing two <code>TextView</code>s programmatically in an <code>Activity</code>. Background colors are added to the <code>View</code>s so you can see the space they occupy.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">import</span> android<span class="token punctuation">.</span>app<span class="token punctuation">.</span>Activity\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>TextView\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>FrameLayout\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>Gravity\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>view<span class="token punctuation">.</span>ViewGroup\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>os<span class="token punctuation">.</span>Bundle\n<span class="token keyword">import</span> android<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>Color\n\n<span class="token keyword">class</span> MyActivity <span class="token operator">:</span> <span class="token function">Activity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n	\n	<span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>\n		\n		<span class="token comment">/* The root element of our GUI will be added to a ViewGroup\n		   (base class for all layouts) in the Activity, so the root\n		   element can use the default LayoutParams. */</span>\n		<span class="token keyword">val</span> theLayout <span class="token operator">=</span> <span class="token function">FrameLayout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> ViewGroup<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">,</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT\n		<span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span><span class="token function">setBackgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>RED<span class="token punctuation">)</span>\n		\n		<span class="token keyword">val</span> theFirstTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n		theFirstTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the first text view!&quot;</span></span>\n		theFirstTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>MATCH_PARENT<span class="token punctuation">,</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n			Gravity<span class="token punctuation">.</span>CENTER\n		<span class="token punctuation">)</span>\n		theFirstTextView<span class="token punctuation">.</span><span class="token function">setBackgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>GREEN<span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theFirstTextView<span class="token punctuation">)</span>\n		\n		<span class="token keyword">val</span> theSecondTextView <span class="token operator">=</span> <span class="token function">TextView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n		theSecondTextView<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;I&#39;m the second text view!&quot;</span></span>\n		theSecondTextView<span class="token punctuation">.</span>layoutParams <span class="token operator">=</span> FrameLayout<span class="token punctuation">.</span><span class="token function">LayoutParams</span><span class="token punctuation">(</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n			ViewGroup<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>WRAP_CONTENT<span class="token punctuation">,</span>\n			Gravity<span class="token punctuation">.</span>BOTTOM\n		<span class="token punctuation">)</span>\n		theSecondTextView<span class="token punctuation">.</span><span class="token function">setBackgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>BLUE<span class="token punctuation">)</span>\n		theLayout<span class="token punctuation">.</span><span class="token function">addView</span><span class="token punctuation">(</span>theSecondTextView<span class="token punctuation">)</span>\n		\n		<span class="token function">setContentView</span><span class="token punctuation">(</span>theLayout<span class="token punctuation">)</span>\n		\n	<span class="token punctuation">}</span>\n	\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The GUI would look something like this:</p>', 4);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "position": "relative", "height": "100%", "background-color": "red" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)", "background-color": "green" } }, " I'm the first text view! "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "bottom": "0", "background-color": "blue" } }, "I'm the second text view!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Convention for naming layouts!"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("XML files containing GUI code that will be used by an "),
      /* @__PURE__ */ createBaseVNode("code", null, "Activity"),
      /* @__PURE__ */ createTextVNode(" should be named per the convention "),
      /* @__PURE__ */ createBaseVNode("code", null, "activity_*.xml"),
      /* @__PURE__ */ createTextVNode(". This is not a requirement, but good programmers sticks to using conventions to facilitate for other programmers working on the same project.")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = { class: "custom-container tip" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example of how to show a "),
    /* @__PURE__ */ createBaseVNode("code", null, "FrameLayout"),
    /* @__PURE__ */ createTextVNode(" containing two "),
    /* @__PURE__ */ createBaseVNode("code", null, "TextView"),
    /* @__PURE__ */ createTextVNode("s declaratively in an "),
    /* @__PURE__ */ createBaseVNode("code", null, "Activity"),
    /* @__PURE__ */ createTextVNode(". Background colors are added to the "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s so you can see the space they occupy.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!-- The root element of our GUI will be added to a ViewGroup\n     (base class for all layouts) in the Activity, so the root\n     element can use the default LayoutParams. -->"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#ff0000"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("center"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the first text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("bottom"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the second text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#0000ff"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The GUI would look something like this:",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "position": "relative", "height": "100%", "background-color": "red" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "width": "100%", "top": "50%", "transform": "translateY(-50%)", "background-color": "green" } }, " I'm the first text view! "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "position": "absolute", "bottom": "0", "background-color": "blue" } }, "I'm the second text view!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createStaticVNode('<h2 id="obtaining-references-to-the-views" tabindex="-1"><a class="header-anchor" href="#obtaining-references-to-the-views" aria-hidden="true">#</a> Obtaining references to the <code>View</code>s</h2><p>To work with the <code>View</code>s (listen for clicks on them, changing their background, etc.) you must have a reference to them in your code. This is of course no problem when you specify the GUI programmatically and create the instances of all <code>View</code>s yourself, but when you specify the GUI in an XML file, it&#39;s the Android framework that instantiates the <code>View</code>s for you, and you have no reference to them.</p><p>To get references to the <code>View</code>s the Android framework instantiates for you, you can add unique identifiers to them in the XML code using the <code>id</code> attribute, and then call the method <code>findViewById(theIdentifier)</code> on the <code>Activity</code>, which will send back the <code>View</code> with that identifier.</p>', 3);
const _hoisted_59 = { class: "custom-container tip" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to obtain references to "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s instantiated through the Android framework.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#ff0000"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!--\n		@id/SOME_NAME is a reference to the identifier SOME_NAME.\n		@+id/SOME_NAME means we create a new identifier with SOME_NAME.\n	-->"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("center"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the first text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/second_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("bottom"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the second text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#0000ff"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("TextView\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Obtain references to our TextViews!"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" firstTextView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("TextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("first_text_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" secondTextView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("TextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("second_text_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Very often you store the references to your "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s in instance variables in your "),
    /* @__PURE__ */ createBaseVNode("code", null, "Activity"),
    /* @__PURE__ */ createTextVNode(", so you can access them in other methods in your "),
    /* @__PURE__ */ createBaseVNode("code", null, "Activity"),
    /* @__PURE__ */ createTextVNode(". Then it's very common to use instance variables of type "),
    /* @__PURE__ */ createBaseVNode("code", null, "lateinit var"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = { class: "custom-container tip" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to obtain and store references to "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s in instance variables.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!-- Same as in previous example. -->"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#ff0000"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("center"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the first text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/second_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("bottom"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the second text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#0000ff"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("TextView\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "lateinit"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
        /* @__PURE__ */ createTextVNode(" firstTextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" TextView\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "lateinit"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
        /* @__PURE__ */ createTextVNode(" secondTextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" TextView\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Don't need to use findViewById<TextView>() since Kotlin can figure out the type from the variable."),
        /* @__PURE__ */ createTextVNode("\n		firstTextView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("first_text_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		secondTextView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("second_text_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_70 = /* @__PURE__ */ createStaticVNode('<h3 id="using-view-binding" tabindex="-1"><a class="header-anchor" href="#using-view-binding" aria-hidden="true">#</a> Using View Binding</h3><p>When you have many <code>View</code>s in your GUI, there are many calls to <code>findViewById(theIdentifier)</code> you need to make to get references to them. Writing all this commonly seen code is boring, and there&#39;s always the risk you use the wrong identifier, or cast the <code>View</code>s to wrong type, etc.</p><p>There exists a feature in Google&#39;s Android Jetpack libraries called <em>View Binding</em>. By adding this feature to your project, you&#39;ll get an auto-compiled class that contains all references to the <code>View</code>s, and if you instantiate the <code>View</code>s in the XML file through this feature, you get back an instance of the auto-compiled class, and can access your <code>View</code>s through that instance, so much less code to write for you 😁</p><p>The name of the auto-compiled class will be derived from the name of the XML file. For example, the XML file <code>res/layout/activity_my.xml</code> will result in an auto-generated class called <code>ActivityMyBinding</code> placed in the package <code>your.package.databinding</code>.</p><div class="custom-container warning"><p class="custom-container-title">Groove VS Kotlin</p><p>Files having the extension <code>.gradle</code> contains code written in a language called <em>Groove</em>. This has been, and currently is, the default build file language used in Android Studio projects. There exists a newer version of build files for Gradle written in Kotlin instead. Those files have the extension <code>.gradle.kts</code>. Build files in Android Studio projects might in the future use that as the default build file language.</p></div>', 5);
const _hoisted_75 = { class: "custom-container tip" };
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "View",
  -1
  /* HOISTED */
);
const _hoisted_78 = {
  href: "https://developer.android.com/topic/libraries/view-binding#setup",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#ff0000"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("center"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the first text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/second_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("bottom"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm the second text view!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#0000ff"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" your"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("package"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("databinding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("ActivityMyBinding\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "lateinit"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
        /* @__PURE__ */ createTextVNode(" binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" ActivityMyBinding\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		binding "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" ActivityMyBinding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "inflate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("layoutInflater"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("root"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, '// The root element in the XML file can always be accessed through the "root" property.'),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Can use:"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//  - binding.firstTextView to access the first TextView"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//  - binding.secondTextView to access the second TextView"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_81 = /* @__PURE__ */ createStaticVNode('<h2 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h2><p>The view <code>Button</code> represents a button the user can click on. To listen for when the user clicks on the button, call the method <code>setOnClickListener()</code>, and pass it an object implementing the interface <code>View.OnClickListener</code>. That object&#39;s <code>onClick()</code> method will be called when the user clicks on the button.</p><div class="custom-container tip"><p class="custom-container-title">Listening for clicks on other views</p><p>Do you find it strange that a click listener interface for <code>Button</code> is put inside the <code>View</code> class? Because that doesn&#39;t make any sense!</p><p><code>View.OnClickListener</code> is actually not only a click listener interface for <code>Button</code>, but for any <code>View</code>, so you can call <code>setOnClickListener()</code> on any <code>View</code>. But often we do that only for buttons.</p></div><p>The <code>onClick()</code> method will be passed one argument, which is a reference to the <code>View</code> that was clicked. This way, you can use the same click listener for multiple <code>View</code>s, and inside the click listener look at the <code>View</code>s id to figure out which <code>View</code> that was clicked, but most often it&#39;s better to create multiple different click listener instead.</p><p>Below you have three different examples of how can add a click listener to a button.</p>', 5);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("View\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Button\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity1 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, '// Set a layout with a button that has the id "the_button".'),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find a reference to the button."),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" button "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("the_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Create a new instance of an anonymous class that implements View.OnClickListener."),
        /* @__PURE__ */ createTextVNode("\n		button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "object"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" View"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "OnClickListener"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onClick"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("theClickedView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" View"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Code here will run when the button is clicked!"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("View\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Button\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity2 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, '// Set a layout with a button that has the id "the_button".'),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find a reference to the button."),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" button "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("the_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Use the anonymous function expression syntax to create a new instance"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// of an anonymous class that implements View.OnClickListener."),
        /* @__PURE__ */ createTextVNode("\n		button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Code here will run when the button is clicked!"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("View\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Button\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity3 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" View"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "OnClickListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Let the activity implement the interface."),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, '// Set a layout with a button that has the id "the_button".'),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find a reference to the button."),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" button "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("the_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Pass the activity as the click listener."),
        /* @__PURE__ */ createTextVNode("\n		button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "this"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Implement the method from the interface."),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onClick"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("theClickedView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" View"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Code here will run when the button is clicked!"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_89 = { class: "custom-container tip" };
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how clicking a "),
    /* @__PURE__ */ createBaseVNode("code", null, "Button"),
    /* @__PURE__ */ createTextVNode(" changes the number in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "Button"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/the_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("center"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("0"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" your"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("package"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("databinding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("ActivityMyBinding\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" binding "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" ActivityMyBinding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "inflate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("layoutInflater"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("root"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("theButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("theButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("text "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string-literal singleline" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "${"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token expression" }, [
              /* @__PURE__ */ createTextVNode("Math"),
              /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
              /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "random"),
              /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
              /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "}")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "display": "grid", "grid-template-rows": "1fr auto 1fr", "grid-template-columns": "1fr auto 1fr" } },
  [
    /* @__PURE__ */ createBaseVNode("button", {
      onclick: "this.innerText = Math.random()",
      style: { "grid-row": "2", "grid-column": "2" }
    }, " 0 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_95 = /* @__PURE__ */ createStaticVNode('<h2 id="edittexts" tabindex="-1"><a class="header-anchor" href="#edittexts" aria-hidden="true">#</a> EditTexts</h2><p>The view <code>EditText</code> represents a field into which the user can enter some data. The property <code>inputType</code> indicates what type of data the user can enter:</p><ul><li>The value <code>text</code> means the user should enter a text</li><li>The value <code>number</code> means the user should enter a number</li><li>The value <code>textEmailAddress</code> means the user should enter an email address</li><li>The value <code>date</code> means the user should enter a date</li><li>Etc.</li></ul><p>When the user clicks on the <code>EditText</code>, a virtual keyboard will be shown on the screen, with keys the user can click to type characters into the <code>EditText</code>. Which keys they virtual keyboard shows depends on which <code>inputType</code> the <code>EditText</code> has. For example, if <code>inputType=&quot;number&quot;</code>, mostly numeric keys are shown. Precisely what it will look like depends on which virtual keyboard the user has installed and is using.</p><p>When you have a reference to an <code>EditText</code>, you can read out what the user has typed in it by using <code>theEditText.text.toString()</code>.</p><p>To listen for when the text in the <code>EditText</code> is changing, call the method <code>addTextChangedListener()</code>, and pass it an instance of a class implementing the interface <code>TextWatcher</code>. This interface defines three methods:</p><ul><li>The <code>beforeTextChanged()</code> method is called before the user&#39;s change to the text has been applied, and the arguments indicate which change that will be applied to the text shortly</li><li>The <code>onTextChanged()</code> method is called after the user&#39;s change to the text has been applied, and the arguments indicates which changes to the text was applied</li><li>The <code>afterTextChanged()</code> method is called after the user&#39;s change to the text has been applied, and its single argument indicates what the text looks like now</li></ul><p>In most cases, you can simply use <code>afterTextChanged()</code>.</p><p>The <code>hint</code> property can be used to display a text in the <code>EditText</code> when it&#39;s empty.</p>', 9);
const _hoisted_104 = { class: "custom-container tip" };
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to mirror what the user has typed in an "),
    /* @__PURE__ */ createBaseVNode("code", null, "EditText"),
    /* @__PURE__ */ createTextVNode(" in a "),
    /* @__PURE__ */ createBaseVNode("code", null, "TextView"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/the_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("top"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text: "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("EditText")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/the_edit_text"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_gravity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("center"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("inputType")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("number"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("hint")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Enter your age (in years)"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("FrameLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("text"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("TextWatcher\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("text"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Editable\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" your"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("package"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("databinding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("ActivityMyBinding\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" binding "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" ActivityMyBinding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "inflate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("layoutInflater"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("root"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("theEditText"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "addTextChangedListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "object"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" TextWatcher "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onTextChanged"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("s"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" CharSequence"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" start"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" before"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" count"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "beforeTextChanged"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("s"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" CharSequence"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" start"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" count"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" after"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// The s parameter is in this case the same as binding.theEditText.text."),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "afterTextChanged"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("s"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Editable"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n					binding"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("theTextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("text "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string-literal singleline" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Text: '),
          /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "${"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token expression" }, [
              /* @__PURE__ */ createTextVNode("s"),
              /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
              /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "toString"),
              /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
              /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")")
            ]),
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "}")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "display": "grid", "grid-template-rows": "auto 1fr auto 1fr auto", "grid-template-columns": "1fr" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "grid-row": "1", "grid-column": "1" } }, [
      /* @__PURE__ */ createTextVNode("Text: "),
      /* @__PURE__ */ createBaseVNode("span", { id: "text-134134234" })
    ]),
    /* @__PURE__ */ createBaseVNode("input", {
      style: { "grid-row": "3", "grid-column": "1" },
      oninput: "document.querySelector('#text-134134234').innerText = this.value",
      type: "number",
      placeholder: "Enter your age (in years)"
    }),
    /* @__PURE__ */ createBaseVNode("div", { style: { "grid-row": "5", "grid-column": "1" } }, " ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("(the "),
    /* @__PURE__ */ createBaseVNode("code", null, "EditText"),
    /* @__PURE__ */ createTextVNode(" will look and behave a little bit different in a real Android application)")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("div", _hoisted_12, [
      _hoisted_13,
      _hoisted_14,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/my_view.xml" }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "Kotlin code" }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_17,
    createBaseVNode("div", _hoisted_26, [
      _hoisted_27,
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_31
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("div", _hoisted_32, [
      _hoisted_33,
      _hoisted_34,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/my_view.xml" }, {
            default: withCtx(() => [
              _hoisted_35
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "Kotlin code" }, {
            default: withCtx(() => [
              _hoisted_36
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_37,
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_38
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_39,
    createBaseVNode("div", _hoisted_42, [
      _hoisted_43,
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_47
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_48,
    createBaseVNode("div", _hoisted_49, [
      _hoisted_50,
      _hoisted_51,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_52
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_53
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_54,
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_55
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_56,
    createBaseVNode("div", _hoisted_59, [
      _hoisted_60,
      _hoisted_61,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_62
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_63
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_64,
    createBaseVNode("div", _hoisted_65, [
      _hoisted_66,
      _hoisted_67,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_68
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_69
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_70,
    createBaseVNode("div", _hoisted_75, [
      _hoisted_76,
      createBaseVNode("p", null, [
        createTextVNode("Example showing how to use Android Jetpack's feature View Binding to obtain references to "),
        _hoisted_77,
        createTextVNode("s. To add View Binding to your Android project, follow the "),
        createBaseVNode("a", _hoisted_78, [
          createTextVNode("Setup instructions"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" on View Binding's documentation page.")
      ]),
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_79
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_80
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_81,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "MyActivity1.kt" }, {
          default: withCtx(() => [
            _hoisted_86
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "MyActivity2.kt" }, {
          default: withCtx(() => [
            _hoisted_87
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "MyActivity3.kt" }, {
          default: withCtx(() => [
            _hoisted_88
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("div", _hoisted_89, [
      _hoisted_90,
      _hoisted_91,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_92
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_93
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_94
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_95,
    createBaseVNode("div", _hoisted_104, [
      _hoisted_105,
      _hoisted_106,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_107
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_108
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_109
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_110
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
