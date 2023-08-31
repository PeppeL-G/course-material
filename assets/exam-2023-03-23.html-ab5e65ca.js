import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="exam-2023-03-23" tabindex="-1"><a class="header-anchor" href="#exam-2023-03-23" aria-hidden="true">#</a> Exam 2023-03-23</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-03-23.</p><hr><p>Start by reading through all questions. Peter will visit the exam 45 minutes after it has started to clarify the questions you find unclear.</p><p>Max score is 25 points.</p><ul><li>For grade 3, 40% of max score (10 points) is required</li><li>For grade 4, 60% of max score (15 points) is required</li><li>For grade 5, 80% of max score (20 points) is required</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. Write proper sentences (spelling, upper/lower case characters, punctuation, etc.). Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions,</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="client-side-js" tabindex="-1"><a class="header-anchor" href="#client-side-js" aria-hidden="true">#</a> Client-Side JS</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 13);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain why most websites with Client-Side JS code need to listen for the "),
    /* @__PURE__ */ createBaseVNode("code", null, "DOMContentLoaded"),
    /* @__PURE__ */ createTextVNode(" event.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When using Client-Side JavaScript, one often needs to modify the Document Object Model (DOM), such as inserting an HTML element into it, or remove an HTML element from it, etc. To carry out these operations, we need references to the HTML elements in the DOM we want to work with. To obtain those references, we can use "),
    /* @__PURE__ */ createBaseVNode("code", null, "document"),
    /* @__PURE__ */ createTextVNode(" methods such as "),
    /* @__PURE__ */ createBaseVNode("code", null, "getElementById()"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "querySelector()"),
    /* @__PURE__ */ createTextVNode(". However, the call to these methods must happen when the web browser is done parsing the HTML code on the webpage (hence is done building the DOM), and not before that. So we need to listen to the "),
    /* @__PURE__ */ createBaseVNode("code", null, "DOMContentLoaded"),
    /* @__PURE__ */ createTextVNode(" event so our code that makes use of these methods will run after the web browser has created the HTML elements in the DOM.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-2-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-2-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 2 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Alice has a webpage with the following HTML code in "),
    /* @__PURE__ */ createBaseVNode("code", null, "<body>"),
    /* @__PURE__ */ createTextVNode(":")
  ],
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-html line-numbers-mode",
    "data-ext": "html"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("number"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("number1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("number"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("number2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("button")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("showSum"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Show sum"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("button")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The user should enter two numbers in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" elements, and then when the user clicks the button, the sum should be shown in an alert dialog (an alert dialog can be shown by calling the "),
    /* @__PURE__ */ createBaseVNode("code", null, "alert()"),
    /* @__PURE__ */ createTextVNode(" function). To make that happen, she adds the following HTML code to the page:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-html line-numbers-mode",
    "data-ext": "html"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("script")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token script" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token language-javascript" }, [
            /* @__PURE__ */ createTextVNode("\n	\n	document"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "addEventListener"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'DOMContentLoaded'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n		\n		"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
            /* @__PURE__ */ createTextVNode(" number1 "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "parseInt"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createTextVNode("document"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getElementById"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'number1'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createTextVNode("value"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "10"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n		"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
            /* @__PURE__ */ createTextVNode(" number2 "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "parseInt"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createTextVNode("document"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getElementById"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'number2'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createTextVNode("value"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "10"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n		\n		document"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getElementById"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'showSum'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "addEventListener"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'click'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n			\n			"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "alert"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createTextVNode("number1 "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
            /* @__PURE__ */ createTextVNode(" number2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n			\n		"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n		\n	"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n	\n")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("script")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When the button is clicked, an alert dialog is shown, but it does not display the sum of the numbers the user has entered. Explain what Alice has done wrong, and suggest how the code should be changed to work as it should.",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The problem is that the values in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" elements are read when the "),
    /* @__PURE__ */ createBaseVNode("code", null, "DOMContentLoaded"),
    /* @__PURE__ */ createTextVNode(" event happens, and at that time, the user hasn't entered any numbers in them yet. The numbers should instead be read when the "),
    /* @__PURE__ */ createBaseVNode("code", null, "click"),
    /* @__PURE__ */ createTextVNode(" event happens on the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<button>"),
    /* @__PURE__ */ createTextVNode(", so moving the two lines of code creating the two variables into the innermost function would solve the problem.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for explaining the problem"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for also explaining a solution"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("-0.1 points for each claim that is not true (except what "),
      /* @__PURE__ */ createBaseVNode("code", null, "parseInt(inputField.value, 10"),
      /* @__PURE__ */ createTextVNode(" evaluates to initially)")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-3-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-3-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 3 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When the user clicks on an anchor element on a webpage, an event is fired by the web browser. What is the name of that event?",
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Spelling must be correct to get any points")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "click")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct name (spelling must be correct)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "frontend-framework",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#frontend-framework",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Frontend framework")
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-4-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-4-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 4 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In a frontend framework of your choice (name which one you choose), implement a component that contains two "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" elements the user can use to enter two numbers. The component should also contain a "),
    /* @__PURE__ */ createBaseVNode("code", null, "<span>"),
    /* @__PURE__ */ createTextVNode(" element that automatically shows the sum of the entered numbers (should be updated automatically as soon as the user changes one of the numbers in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" elements).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In Svelte:",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-html line-numbers-mode",
    "data-ext": "html"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("script")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token script" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token language-javascript" }, [
            /* @__PURE__ */ createTextVNode("\n    \n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
            /* @__PURE__ */ createTextVNode(" leftTerm "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
            /* @__PURE__ */ createTextVNode("\n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
            /* @__PURE__ */ createTextVNode(" rightTerm "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
            /* @__PURE__ */ createTextVNode("\n    \n")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("script")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("number"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "bind:"),
            /* @__PURE__ */ createTextVNode("value")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createTextVNode("{leftTerm}")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" +\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("number"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "bind:"),
            /* @__PURE__ */ createTextVNode("value")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createTextVNode("{rightTerm}")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" =\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("{leftTerm + rightTerm}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for an answer that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point reductions for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "-0.5 points for not naming which framework that is used"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for using "),
          /* @__PURE__ */ createBaseVNode("code", null, "var"),
          /* @__PURE__ */ createTextVNode(" when it's better to use "),
          /* @__PURE__ */ createBaseVNode("code", null, "let")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("In Svelte: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for not having the "),
              /* @__PURE__ */ createBaseVNode("code", null, "<script>"),
              /* @__PURE__ */ createTextVNode(" element")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for using "),
              /* @__PURE__ */ createBaseVNode("code", null, "const"),
              /* @__PURE__ */ createTextVNode(" instead of "),
              /* @__PURE__ */ createBaseVNode("code", null, "let"),
              /* @__PURE__ */ createTextVNode(" for the variables")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for not using "),
              /* @__PURE__ */ createBaseVNode("code", null, 'type="number"')
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for binding to the wrong variables"),
            /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for using the wrong syntax for binding the variables to the input elements, but close to correct"),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for listening to the "),
              /* @__PURE__ */ createBaseVNode("code", null, "change"),
              /* @__PURE__ */ createTextVNode(" event wrong")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for using the wrong syntax to show the sum"),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for a "),
              /* @__PURE__ */ createBaseVNode("code", null, "sum"),
              /* @__PURE__ */ createTextVNode(" variable that is not recomputed when the number variables change")
            ])
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("In React: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for forgetting "),
              /* @__PURE__ */ createBaseVNode("code", null, "function"),
              /* @__PURE__ */ createTextVNode(" keyword")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for creating state outside the component"),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for creating state for "),
              /* @__PURE__ */ createBaseVNode("code", null, "sum"),
              /* @__PURE__ */ createTextVNode(" (no point in doing that, ordinary variable suffice, and you open up for the possibility that someone changes the "),
              /* @__PURE__ */ createBaseVNode("code", null, "sum"),
              /* @__PURE__ */ createTextVNode(" without changing the number variables, which makes no sense)")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for not setting the "),
              /* @__PURE__ */ createBaseVNode("code", null, "value"),
              /* @__PURE__ */ createTextVNode(" attribute to the correct value")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for setting the "),
              /* @__PURE__ */ createBaseVNode("code", null, "onChange"),
              /* @__PURE__ */ createTextVNode(" handler wrong")
            ])
          ])
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "http-rest-api",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#http-rest-api",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" HTTP/REST API")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-5-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-5-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 5 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Match each status code with its corresponding reason phrase.",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Status codes:",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "200"),
    /* @__PURE__ */ createBaseVNode("li", null, "201"),
    /* @__PURE__ */ createBaseVNode("li", null, "204"),
    /* @__PURE__ */ createBaseVNode("li", null, "400"),
    /* @__PURE__ */ createBaseVNode("li", null, "404")
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Reason Phrases:",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "OK"),
    /* @__PURE__ */ createBaseVNode("li", null, "Created"),
    /* @__PURE__ */ createBaseVNode("li", null, "No Content"),
    /* @__PURE__ */ createBaseVNode("li", null, "Bad Request"),
    /* @__PURE__ */ createBaseVNode("li", null, "Not Found")
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You will get:",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for all correct")
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "200 - OK"),
    /* @__PURE__ */ createBaseVNode("li", null, "201 - Created"),
    /* @__PURE__ */ createBaseVNode("li", null, "204 - No Content"),
    /* @__PURE__ */ createBaseVNode("li", null, "400 - Bad Request"),
    /* @__PURE__ */ createBaseVNode("li", null, "404 - Not Found")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for all correct")
  ],
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-6-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-6-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 6 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In a REST API, to create a new account, one should send an HTTP request like the one below ("),
    /* @__PURE__ */ createBaseVNode("code", null, "WORDS_WRITTEN_LIKE_THIS"),
    /* @__PURE__ */ createTextVNode(" are placeholders for actual values).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-http line-numbers-mode",
    "data-ext": "http"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode("POST /create-account\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "ACTUAL_DOMAIN")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Content-Type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "application/json")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Content-Length"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "ACTUAL_LENGTH")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token application-json" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"username"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"ACTUAL_USERNAME"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"password"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"ACTUAL_PASSWORD"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n")
        ])
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
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Is this HTTP request good designed? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("No, it is not good designed, because the URL doesn't identify resources, but instead indicates what the request is about. The URL should only identify resources, the method should indicate what to do. So, if the request is about creating a new resource, the URL should rather identify the collection of resources the new resources should be added to, i.e. "),
    /* @__PURE__ */ createBaseVNode("code", null, "/accounts"),
    /* @__PURE__ */ createTextVNode(" in this case.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for justifying why the URL is bad"),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for stating something strange/that is not true")
  ],
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-7-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-7-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 7 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In REST, explain what a "),
    /* @__PURE__ */ createBaseVNode("em", null, "constraint"),
    /* @__PURE__ */ createTextVNode(" is.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A constraint is like a rule that you should follow, and if you do follow it, it will help preventing you from building a bad solution from a certain point of view, such as preventing you from building a solution that is not scalable.",
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for a correct explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-8-3p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-8-3p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 8 (3p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name and describe each constraint REST consists of.",
  -1
  /* HOISTED */
);
const _hoisted_59 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Roy Thomas Fielding's",
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Architectural Styles and the Design of Network-based Software Architectures",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct description")
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-9-3p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-9-3p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 9 (3p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Describe the parts a JWT consists of. Then also explain why JWTs are secure to use (how a server can trust a JWT it receives from a client).",
  -1
  /* HOISTED */
);
const _hoisted_65 = {
  href: "https://www.rfc-editor.org/rfc/rfc7519#section-3.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "JSON Web Token (JWT)",
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When the server signs the JWT, it will compute a hash from the Header, the Payload and a secret only the server knows. When the server receives a JWT from a client, it will compute the hash again from the Header, the Payload and the secret only the server knows. If the computed hash isn't the same as the signature in the received JWT, then server knows the JWT was created with another secret, hence not created by the server itself, and the server won't trust the token. Otherwise it can trust that the JWT was created by the server itself (under the assumption no one knows the secret on the server, or has been lucky using the same one).",
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each description/purpose"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each how to generate the parts (JSON, base64, etc.)"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.75 points for explaining how a server can trust a JWT/discover a tempered JWT")
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-10-3p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-10-3p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 10 (3p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In OAuth 2.0, name and describe the 4 different roles that exists. Then also describe how the Authorization Code flow works.",
  -1
  /* HOISTED */
);
const _hoisted_71 = {
  href: "https://www.rfc-editor.org/rfc/rfc6749#section-1.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_72 = {
  href: "https://www.rfc-editor.org/rfc/rfc6749#section-4.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Roles: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct name"),
        /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct description")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Authorization Code flow: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, '1 point for full description with most events ("trades") happening (small point deduction for small misses)')
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-11-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-11-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 11 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Give an example of a value that makes sense to put in an ID Token, but that most likely won't be needed in an Access Token. Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Since ID Tokens should contain information about the account a user has logged in to, it makes sense to put information such as the user's first name in it.",
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Access Tokens on the other hand should contain information the server can use to figure out what a user is allowed to do, and that is probably independent of the user's first name, so that is probably not put in an Access Token.",
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("So an example is the user's first name, such as "),
    /* @__PURE__ */ createBaseVNode("code", null, "Alice"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Authentication VS Authorization"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("Many students use the word "),
      /* @__PURE__ */ createBaseVNode("em", null, "authentication"),
      /* @__PURE__ */ createTextVNode(" wrong in their answers. Authentication happens when a user logs in, and proves ownership of an identity (for example by providing username and password), and thereafter obtains the token(s). When a user uses an access token, authorization happens (the user proves that it's authorized to send the request).")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, "This time, no point reduction has been made for using the terms wrong, but think about this for the future.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Account id"),
    /* @__PURE__ */ createBaseVNode("p", null, "Some students claim that a user's account id makes sense to put in the ID Token, but not in an Access Token. That usually makes little sense, since the server usually must know which account the user has logged in to during the authorization process, so the user's account id usually needs to be stored in the Access Token as well.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for valid example and valid justification, OR"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.5 points for writing a valid justification, but without giving an example of a value (does not to have to be as specific as "),
      /* @__PURE__ */ createBaseVNode("code", null, "Alice"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("em", null, "first name"),
      /* @__PURE__ */ createTextVNode(" is accepted)")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for claiming something that is incorrect")
  ],
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-12-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-12-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 12 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Does it make sense to put the user's plain text password in an ID Token or in an Access Token? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "No, because there is no use-case for putting the user's password in the ID Token (the whole point with OpenID Connect is to let users login with their account on another platform without exposing their password on that platform), and nor is the user's password needed in an Access Token during the authorization process.",
  -1
  /* HOISTED */
);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Also, one should never store users' passwords in plain text.",
  -1
  /* HOISTED */
);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer and valid justification"),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for claiming something that is not true"),
    /* @__PURE__ */ createBaseVNode("li", null, "0 points to answers suggesting that one can store the encrypted/hashed version of the password in any of the tokens")
  ],
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-13-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-13-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 13 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In Client-Side JS, give an example of/describe an HTTP request that will always trigger the web browser to send a CORS pre-flight request.",
  -1
  /* HOISTED */
);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "An HTTP request to a domain other than the one the Client-Side JS comes from and that uses the method PUT.",
  -1
  /* HOISTED */
);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Note!"),
    /* @__PURE__ */ createBaseVNode("p", null, "Most students didn't mention that the request must go to a different domain (so the Same-Origin Policy kicks in, and CORS is needed), but this time you can get full score on the question even without having mentioned that.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct example/description"),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for claiming something small that is incorrect, but otherwise provide a correct example/description")
  ],
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "docker",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#docker",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Docker")
  ],
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-14-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-14-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 14 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When using Docker Compose, each service entered in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "compose.yaml"),
    /* @__PURE__ */ createTextVNode(" file can have its own "),
    /* @__PURE__ */ createBaseVNode("code", null, "volumes"),
    /* @__PURE__ */ createTextVNode(" section. Explain what that section can be used for.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When an application in a Docker container opens a path leading to a file or folder, that path does by default lead to a file or folder on the file system in the container. By adding a value to the "),
    /* @__PURE__ */ createBaseVNode("code", null, "volumes"),
    /* @__PURE__ */ createTextVNode(" section in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "compose.yaml"),
    /* @__PURE__ */ createTextVNode(" file, you can make a path in the container lead to a file or folder on the host computer running Docker instead.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, by using volumes, an application in a container can get access to a part of the file system on the host computer, and for example store data there.",
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer, OR"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for saying something vague about giving the container access to the latest version of code stored on the file system on the host computer")
  ],
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-15-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-15-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 15 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Explain when and why you need to use port mapping in Docker, and explain how it works (using words, not commands).",
  -1
  /* HOISTED */
);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A Docker container is an isolated environment; an app running inside the container has (by default) not access to anything on the host computer, and nor (by default) does the host computer have access to anything inside the container. This is problematic when the app in the container is a web app, and we want to use a web browser on the host computer to send HTTP requests to it.",
  -1
  /* HOISTED */
);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In such situations, we can use port mapping to make the container a little bit less isolated, and allow such communication. Using port mapping, we can tell Docker that one port on the host computer, for example port "),
    /* @__PURE__ */ createBaseVNode("code", null, "5555"),
    /* @__PURE__ */ createTextVNode(", should be mapped to one port in a container, for example port "),
    /* @__PURE__ */ createBaseVNode("code", null, "8080"),
    /* @__PURE__ */ createTextVNode(". This way, the web browser on the host computer can send HTTP requests on port "),
    /* @__PURE__ */ createBaseVNode("code", null, "5555"),
    /* @__PURE__ */ createTextVNode(", and the web app in the container will receive those requests on port "),
    /* @__PURE__ */ createBaseVNode("code", null, "8080"),
    /* @__PURE__ */ createTextVNode(" in the container.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for when and why"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "scaling",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#scaling",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Scaling")
  ],
  -1
  /* HOISTED */
);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-16-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-16-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 16 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "What is the main difference between vertical scaling and horizontal scaling?",
  -1
  /* HOISTED */
);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": You don't need to explain each scaling approach in detail, only what the main difference between them is.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In vertical scaling, you simply replace the computer your application runs on with another one that is more powerful, i.e. a computer with a faster CPU, or more main memory, or more storage, etc.",
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In horizontal scaling, you instead run your application on multiple different computers at the same time, each of them doing a small part of the work that needs to be done in total.",
  -1
  /* HOISTED */
);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for explaining that vertical scaling is using a more powerful computer"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for explaining that horizontal scaling is using more computers")
  ],
  -1
  /* HOISTED */
);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "OR:",
  -1
  /* HOISTED */
);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for correct explanations of both terms but having mixed them up")
  ],
  -1
  /* HOISTED */
);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "javascript",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#javascript",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" JavaScript")
  ],
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-17-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-17-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 17 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountById(id)"),
    /* @__PURE__ */ createTextVNode(" returns a promise that resolves to a JS object with information about the account with the given "),
    /* @__PURE__ */ createBaseVNode("code", null, "id"),
    /* @__PURE__ */ createTextVNode(". If the account object can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getSentMessagesByAccountId(accountId)"),
    /* @__PURE__ */ createTextVNode(" returns a promise that resolves to a JS array containing all messages an account with the given "),
    /* @__PURE__ */ createBaseVNode("code", null, "accountId"),
    /* @__PURE__ */ createTextVNode(" has sent. If the array can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Implement the function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountAndSentMessagesByAccountId(accountId)"),
    /* @__PURE__ */ createTextVNode(", that returns a promise that resolves to:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "account"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "THE_ACCOUNT_RETRIEVED_USING_getAccountById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "sentMessages"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "THE_MESSAGES_RETRIEVED_USING_getSentMessagesByAccountId"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If you get an error from "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountById()"),
    /* @__PURE__ */ createTextVNode(" or "),
    /* @__PURE__ */ createBaseVNode("code", null, "getSentMessagesByAccountId()"),
    /* @__PURE__ */ createTextVNode(", then your own promise should be rejected with the JS error object you get from the first one that was rejected.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("It is OK to use "),
    /* @__PURE__ */ createBaseVNode("code", null, "async"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "await"),
    /* @__PURE__ */ createTextVNode(" in your implementation.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "async"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getAccountAndSentMessagesByAccountId"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "accountId"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" account "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "await"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getAccountById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("accountId"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" sentMessages "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "await"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getSentMessagesByAccountId"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("accountId"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		account"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n		sentMessages"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
const _hoisted_121 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for a solution that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point reductions for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for naming variables bad, such as ending with "),
          /* @__PURE__ */ createBaseVNode("code", null, "promise"),
          /* @__PURE__ */ createTextVNode(" when it doesn't store a promise")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for returning and throwing (both stops code execution in function, so no need to use return when you want to throw)"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for creating local variables (e.g. in a "),
          /* @__PURE__ */ createBaseVNode("code", null, "try"),
          /* @__PURE__ */ createTextVNode(") and try to access them outside")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for using try and catch"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for returning error instead of throwing"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for returning/throwing wrong error"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for having unnecessary code")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0 points for a solution that: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Have a callback parameter/function, or"),
        /* @__PURE__ */ createBaseVNode("li", null, "Try to read status codes or parse the response body (none of the given functions use HTTP)"),
        /* @__PURE__ */ createBaseVNode("li", null, "Have SQL code (the data is not stored in a relational database)")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_14
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_15
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_16
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_17,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_18,
        _hoisted_19,
        _hoisted_20,
        _hoisted_21,
        _hoisted_22
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_23
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_24
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_25,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_26,
        _hoisted_27
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_28
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_29
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_30,
    _hoisted_31,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_32
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_33,
        _hoisted_34
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_35
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_36,
    _hoisted_37,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_38,
        _hoisted_39,
        _hoisted_40,
        _hoisted_41,
        _hoisted_42,
        _hoisted_43,
        _hoisted_44
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_45
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_46
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_47,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_48,
        _hoisted_49,
        _hoisted_50
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_51
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_52
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_53,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_54
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_55
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_56
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_57,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_58
      ]),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          createTextVNode("See "),
          createBaseVNode("a", _hoisted_59, [
            createTextVNode("Chapter 5.1 Deriving REST"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in "),
          _hoisted_60,
          createTextVNode(" dissertation "),
          _hoisted_61,
          createTextVNode(".")
        ])
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_62
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_63,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_64
      ]),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          createTextVNode("For a description of the parts, see "),
          createBaseVNode("a", _hoisted_65, [
            createTextVNode("Chapter 3.1. Example JWT"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in the "),
          _hoisted_66,
          createTextVNode(" specification.")
        ]),
        _hoisted_67
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_68
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_69,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_70
      ]),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          createTextVNode("For the roles, see "),
          createBaseVNode("a", _hoisted_71, [
            createTextVNode("Chapter 1.1. Roles"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in the OAuth 2.0 specification.")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("For the Authorization Code flow, see "),
          createBaseVNode("a", _hoisted_72, [
            createTextVNode("Chapter 4.1. Authorization Code Grant"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in the OAuth 2.0 specification.")
        ])
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_73
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_74,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_75
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_76,
        _hoisted_77,
        _hoisted_78,
        _hoisted_79,
        _hoisted_80
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_81
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_82,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_83
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_84,
        _hoisted_85
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_86
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_87,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_88
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_89
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_90,
        _hoisted_91
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_92,
    _hoisted_93,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_94
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_95,
        _hoisted_96
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_97
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_98,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_99
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_100,
        _hoisted_101
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_102
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_103,
    _hoisted_104,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_105,
        _hoisted_106
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_107,
        _hoisted_108
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_109,
        _hoisted_110,
        _hoisted_111
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_112,
    _hoisted_113,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_114,
        _hoisted_115,
        _hoisted_116,
        _hoisted_117,
        _hoisted_118,
        _hoisted_119
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_120
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_121
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const exam20230323_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-03-23.html.vue"]]);
export {
  exam20230323_html as default
};
