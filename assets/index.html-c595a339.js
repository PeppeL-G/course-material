import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, g as createCommentVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-constraint-layout",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-constraint-layout",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Constraint Layout")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Here's a short tutorial on how to use "),
    /* @__PURE__ */ createBaseVNode("code", null, "ConstraintLayout"),
    /* @__PURE__ */ createTextVNode(" in Android.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "recommended-reading",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#recommended-reading",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Recommended reading")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "ConstraintLayout",
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "ConstraintLayout",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "constraintlayout",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#constraintlayout",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(),
    /* @__PURE__ */ createBaseVNode("code", null, "ConstraintLayout")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "ConstraintLayout",
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://developer.android.com/guide/topics/ui/layout/relative",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "ConstraintLayout",
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "https://developer.android.com/jetpack/androidx/releases/constraintlayout#declaring_dependencies",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Use the correct namespace!</p><p>Since the <code>ConstraintLayout</code> is not part of the Android framework, it does not put its own specific attributes in the XML namespace <code>http://schemas.android.com/apk/res/android</code> (usually called <code>android</code>), but instead in the namespace <code>http://schemas.android.com/apk/res-auto</code>, which one usually call <code>app</code>.</p></div><p>A child in <code>ConstraintLayout</code> can have <code>layout_width</code> and <code>layout_height</code> set to <code>wrap_content</code>/<code>match_parent</code>, in which case the child will have the size specified by these two attributes (as usual).</p>', 2);
const _hoisted_14 = { class: "custom-container tip" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to add two "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s to a "),
    /* @__PURE__ */ createBaseVNode("code", null, "ConstraintLayout"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#0000ff"),
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
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "1", "grid-row": "1" } }, " Text 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<p>In the example above, we haven&#39;t told the <code>ConstraintLayout</code> where the children should be positioned, so both <code>TextView</code>s are positioned in top left corner by default (that&#39;s why we can&#39;t see the first <code>TextView</code>; it&#39;s behind the second <code>TextView</code>!).</p><p>To tell the <code>ConstraintLayout</code> where a child should be positioned horizontally, we can add one of the following attributes (known as a <em>constraint</em>) to the child:</p><ul><li><code>app:layout_constraintLeft_toLeftOf</code></li><li><code>app:layout_constraintLeft_toRightOf</code></li><li><code>app:layout_constraintRight_toLeftOf</code></li><li><code>app:layout_constraintRight_toRightOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p><p>Similarly, to tell the <code>ConstraintLayout</code> where a child should be positioned vertically, we can add one of the following attributes to the child:</p><ul><li><code>app:layout_constraintTop_toTopOf</code></li><li><code>app:layout_constraintTop_toBottomOf</code></li><li><code>app:layout_constraintBottom_toTopOf</code></li><li><code>app:layout_constraintBottom_toBottomOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p><div class="custom-container tip"><p class="custom-container-title">Supporting Right-to-Left devices</p><p>To support layouts for people reading from right to left, use <code>Start</code> instead of <code>Left</code> and <code>End</code> instead of <code>Right</code> in the attribute names, e.g. use <code>layout_constraintStart_toEndOf</code> instead of <code>layout_constraintLeft_toRightOf</code>.</p></div>', 8);
const _hoisted_28 = { class: "custom-container tip" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position one "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode(" in the top right corner, and another "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode(" in the bottom left corner.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintBottom_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr auto", "grid-template-rows": "auto 1fr auto", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "3", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "1", "grid-row": "3" } }, " Text 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = { class: "custom-container tip" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position two "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s in the top right corner (one below the other).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "1fr auto", "grid-template-rows": "auto auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "3", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "3", "grid-row": "2" } }, " Text 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = { class: "custom-container tip" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position two "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s diagonally in the top right corner.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "1fr auto auto", "grid-template-rows": "auto auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "3", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "2" } }, " Text 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Repetition</p><p>To tell the <code>ConstraintLayout</code> where a child should be positioned horizontally, we can add one of the following attributes (known as a <em>constraint</em>) to the child:</p><ul><li><code>app:layout_constraintLeft_toLeftOf</code></li><li><code>app:layout_constraintLeft_toRightOf</code></li><li><code>app:layout_constraintRight_toLeftOf</code></li><li><code>app:layout_constraintRight_toRightOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p><p>Similarly, to tell the <code>ConstraintLayout</code> where a child should be positioned vertically, we can add one of the following attributes to the child:</p><ul><li><code>app:layout_constraintTop_toTopOf</code></li><li><code>app:layout_constraintTop_toBottomOf</code></li><li><code>app:layout_constraintBottom_toTopOf</code></li><li><code>app:layout_constraintBottom_toBottomOf</code></li></ul><p>The value can either be <code>parent</code>, or the id of one of the other child <code>View</code>s in the <code>ConstraintLayout</code>.</p></div><p>Instead of giving a child it&#39;s size through the <code>layout_width</code> and <code>layout_height</code> attributes, you can specify two horizontal (or two vertical) constraints, and the child can get its width (or height) from the constraints instead. When a child has two horizontal constraints (or two vertical constraints) and you want the child to get its size through the constraints you should set the <code>layout_width</code> (or <code>layout_height</code>) to <code>0dp</code>.</p>', 2);
const _hoisted_48 = { class: "custom-container tip" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position two "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s next to each other horizontally:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "The first one is as small as possible"),
    /* @__PURE__ */ createBaseVNode("li", null, "The second one should occupy the rest of the remaining space")
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
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "1" } }, " Text 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If a child has a size smaller than what is specified by two horizontal/vertical constraints, the child will be centered instead of growing to cover the space.",
  -1
  /* HOISTED */
);
const _hoisted_56 = { class: "custom-container tip" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position two "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s next to each other, and center the second "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode(" in the rest of the available space.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "3", "grid-row": "1" } }, " Text 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createStaticVNode("<p>To control where in the rest of the available space the child is positioned (center by default), use the <code>app:layout_constraintHorizontal_bias</code>/<code>app:layout_constraintVertical_bias</code> attribute. The value is number between <code>0</code> and <code>1</code>, where:</p><ul><li><code>0</code> means at the start</li><li>...</li><li><code>0.5</code> means in the middle (default)</li><li>...</li><li><code>1</code> means at the end</li></ul>", 2);
const _hoisted_64 = { class: "custom-container tip" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position two "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s next to each other, and placing the second "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode(" 90% to the right of the rest of the available space.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintHorizontal_bias")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("0.9"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 9fr auto 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "3", "grid-row": "1" } }, " Text 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  'When you have a multiple children getting their sizes from the constraints in the same "chain", they by default get an equal amount of the remaining space available.',
  -1
  /* HOISTED */
);
const _hoisted_71 = { class: "custom-container tip" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position three "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s next to each other, and let the last two share the remaining available space equally.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/third_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#0000ff"),
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
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/second_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/third_text_view"),
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
            /* @__PURE__ */ createTextVNode("#ffff00"),
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
            /* @__PURE__ */ createTextVNode("Text 3"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr 1fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "1" } }, " Text 2 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "3", "grid-row": "1" } }, " Text 3 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If you want the remaining space to be distributed differently among the children, you can use the attribute "),
    /* @__PURE__ */ createBaseVNode("code", null, "layout_constraintHorizontal_weight"),
    /* @__PURE__ */ createTextVNode("/"),
    /* @__PURE__ */ createBaseVNode("code", null, "layout_constraintVertical_weight"),
    /* @__PURE__ */ createTextVNode(" to indicate how many shares of the remaining vertical space they should occupy.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = { class: "custom-container tip" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to position three "),
    /* @__PURE__ */ createBaseVNode("code", null, "View"),
    /* @__PURE__ */ createTextVNode("s next to each other, and let the second occupy one third of the remaining space, and the third to occupy 2 thirds of the remaining space.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#00ff00"),
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
            /* @__PURE__ */ createTextVNode("Text 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/third_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintHorizontal_weight")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
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
            /* @__PURE__ */ createTextVNode("background")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("#0000ff"),
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
            /* @__PURE__ */ createTextVNode("Text 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
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
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/second_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintHorizontal_weight")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/third_text_view"),
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
            /* @__PURE__ */ createTextVNode("#ffff00"),
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
            /* @__PURE__ */ createTextVNode("Text 3"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr 2fr", "grid-template-rows": "auto 1fr", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-column": "1", "grid-row": "1" } }, " Text 1 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#0000ff", "grid-column": "2", "grid-row": "1" } }, " Text 2 "),
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#ffff00", "grid-column": "3", "grid-row": "1" } }, " Text 3 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "bigger-example",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#bigger-example",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Bigger example")
  ],
  -1
  /* HOISTED */
);
const _hoisted_85 = { class: "custom-container tip" };
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Example showing how to use a "),
    /* @__PURE__ */ createBaseVNode("code", null, "<ConstraintLayout>"),
    /* @__PURE__ */ createTextVNode(" to implement a layout with main content and a row with 3 navigation buttons at the bottom.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("app")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res-auto"),
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
            /* @__PURE__ */ createTextVNode("0dp"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintBottom_toTopOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/main_content_text_view"),
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
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("gravity")
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
            /* @__PURE__ */ createTextVNode("I'm the main content!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
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
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/main_content_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintBottom_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/second_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/first_button"),
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
            /* @__PURE__ */ createTextVNode("Page 1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
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
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/main_content_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintBottom_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/first_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toLeftOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/third_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/second_button"),
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
            /* @__PURE__ */ createTextVNode("Page 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
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
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("0dp"),
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintTop_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/main_content_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintBottom_toBottomOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintLeft_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@id/second_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "app:"),
            /* @__PURE__ */ createTextVNode("layout_constraintRight_toRightOf")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/third_button"),
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
            /* @__PURE__ */ createTextVNode("Page 3"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("androidx.constraintlayout.widget.ConstraintLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "1fr 1fr 1fr", "grid-template-rows": "1fr auto", "background-color": "#ff0000" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "background-color": "#00ff00", "grid-row": "1", "grid-column": "1 / span 3", "display": "grid", "align-content": "center", "text-align": "center" } }, [
      /* @__PURE__ */ createBaseVNode("div", null, " I'm the main content! ")
    ]),
    /* @__PURE__ */ createBaseVNode("button", { style: { "grid-row": "2", "grid-column": "1" } }, " Page 1 "),
    /* @__PURE__ */ createBaseVNode("button", { style: { "grid-row": "2", "grid-column": "2" } }, " Page 2 "),
    /* @__PURE__ */ createBaseVNode("button", { style: { "grid-row": "2", "grid-column": "3" } }, " Page 3 ")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createCommentVNode(' <iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '),
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("The reading below on this page is intended to just be an introduction to "),
      _hoisted_4,
      createTextVNode(", and not a complete description of how to use all the functionality it contains. For all details about how to use it, check out "),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("the documentation for "),
        _hoisted_6,
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      createTextVNode("The "),
      _hoisted_8,
      createTextVNode(" is a layout in which the children can be positioned relative to each other (a child can be positioned below another child, or above another child, or to the right of another child, etc.), or relative to the parent's edges (below the parent's top edge, or above the parent's bottom edge, or to the right of the parent's left edge, etc.). It is very similar to the "),
      createBaseVNode("a", _hoisted_9, [
        createTextVNode("RelativeLayout"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", but offers more functionality.")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("The "),
      _hoisted_10,
      createTextVNode(" is not part of the Android framework, but developed by Google in a separate library that is part of Android Jetpack. To add the library to your Android Studio Project, follow the instructions at the "),
      createBaseVNode("a", _hoisted_11, [
        createTextVNode("Declaring dependencies"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" section.")
    ]),
    _hoisted_12,
    createBaseVNode("div", _hoisted_14, [
      _hoisted_15,
      _hoisted_16,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_17
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_18
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
          _hoisted_19
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_20,
    createBaseVNode("div", _hoisted_28, [
      _hoisted_29,
      _hoisted_30,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_31
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_32
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
          _hoisted_33
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("div", _hoisted_34, [
      _hoisted_35,
      _hoisted_36,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_37
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_38
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
          _hoisted_39
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("div", _hoisted_40, [
      _hoisted_41,
      _hoisted_42,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_43
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_44
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
          _hoisted_45
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_46,
    createBaseVNode("div", _hoisted_48, [
      _hoisted_49,
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
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_54
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_55,
    createBaseVNode("div", _hoisted_56, [
      _hoisted_57,
      _hoisted_58,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_59
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_60
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
          _hoisted_61
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_62,
    createBaseVNode("div", _hoisted_64, [
      _hoisted_65,
      _hoisted_66,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_67
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_68
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
          _hoisted_69
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_70,
    createBaseVNode("div", _hoisted_71, [
      _hoisted_72,
      _hoisted_73,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_74
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_75
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
          _hoisted_76
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_77,
    createBaseVNode("div", _hoisted_78, [
      _hoisted_79,
      _hoisted_80,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_81
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_82
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
          _hoisted_83
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_84,
    createBaseVNode("div", _hoisted_85, [
      _hoisted_86,
      _hoisted_87,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_88
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_89
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
          _hoisted_90
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
