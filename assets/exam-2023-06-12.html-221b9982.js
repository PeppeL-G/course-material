import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="exam-2023-06-12" tabindex="-1"><a class="header-anchor" href="#exam-2023-06-12" aria-hidden="true">#</a> Exam 2023-06-12</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-06-12.</p><hr><p>Start by reading through all questions. Peter will not visit the exam. If you find any question unclear, ask the exam administrator (<em>tentavakt</em> in Swedish) to call Peter for clarification.</p><p>Max score is 25 points.</p><ul><li>For grade 3, 40% of max score (10 points) is required</li><li>For grade 4, 60% of max score (15 points) is required</li><li>For grade 5, 80% of max score (20 points) is required</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. Write proper sentences (spelling, upper/lower case characters, punctuation, etc.). Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions,</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="client-side-js" tabindex="-1"><a class="header-anchor" href="#client-side-js" aria-hidden="true">#</a> Client-Side JS</h2><h3 id="question-1-2p" tabindex="-1"><a class="header-anchor" href="#question-1-2p" aria-hidden="true">#</a> Question 1 (2p)</h3>', 13);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A webpage should display two numbers and the sum of them. It currently looks like this:",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("html")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("head")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("title")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Addition"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("title")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("head")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("body")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("term"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("5"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" + "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("term"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("4"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" = "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("sum"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("9"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("body")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("html")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Bob is smart and realizes the web browser should be able to compute the sum automatically by using some client-side JavaScript code, so one just needs to change the terms in the HTML code in the future, and the sum will be updated automatically accordingly. So he removes the "),
    /* @__PURE__ */ createBaseVNode("code", null, "9"),
    /* @__PURE__ */ createTextVNode(" from the last "),
    /* @__PURE__ */ createBaseVNode("code", null, "<span>"),
    /* @__PURE__ */ createTextVNode(" element, and in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<head>"),
    /* @__PURE__ */ createTextVNode(" element he adds the following:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("\n	"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "showSum"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n		"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
            /* @__PURE__ */ createTextVNode(" termSpans "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(" document"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "querySelectorAll"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'.term'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n		"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
            /* @__PURE__ */ createTextVNode(" leftTerm "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "parseInt"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createTextVNode("termSpans"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createTextVNode("innerText"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "10"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n		"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
            /* @__PURE__ */ createTextVNode(" rightTerm "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "parseInt"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createTextVNode("termSpans"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createTextVNode("innerText"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "10"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n		"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
            /* @__PURE__ */ createTextVNode(" sumSpan "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(" document"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "querySelector"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'.sum'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n		sumSpan"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createTextVNode("innerText "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(" leftTerm "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
            /* @__PURE__ */ createTextVNode(" rightTerm\n	"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n	"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "showSum"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode("\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When he tries to run the code, it doesn't work as it should, but crashes. Explain what the problem is, indicate which JavaScript line the code crashes at, and explain how Bob can change the code to make it work as it should (show code for the solution).",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Bob's JS code will run before the web browser has parsed the HTML code in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<body>"),
    /* @__PURE__ */ createTextVNode(" element. Therefore, "),
    /* @__PURE__ */ createBaseVNode("code", null, "termSpans"),
    /* @__PURE__ */ createTextVNode(" will be an empty array (NodeList, actually), and not contain any references to elements with the class "),
    /* @__PURE__ */ createBaseVNode("code", null, "term"),
    /* @__PURE__ */ createTextVNode(". The code will crash on the following line:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" leftTerm "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "parseInt"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("termSpans"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("innerText"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "10"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("since "),
    /* @__PURE__ */ createBaseVNode("code", null, "termSpans[0]"),
    /* @__PURE__ */ createTextVNode(" there will evaluate to "),
    /* @__PURE__ */ createBaseVNode("code", null, "undefined"),
    /* @__PURE__ */ createTextVNode(", and one can't look up the property "),
    /* @__PURE__ */ createBaseVNode("code", null, "innerText"),
    /* @__PURE__ */ createTextVNode(" of "),
    /* @__PURE__ */ createBaseVNode("code", null, "undefined"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("To fix this problem, the JS code needs to run after the web browser has read all the HTML code. Since the web browser will fire the event "),
    /* @__PURE__ */ createBaseVNode("code", null, "DOMContentLoaded"),
    /* @__PURE__ */ createTextVNode(" when it's done reading all the HTML code, we can listen for that event and call "),
    /* @__PURE__ */ createBaseVNode("code", null, "showSum()"),
    /* @__PURE__ */ createTextVNode(" when it happens. So, instead of:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "showSum"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Bob can use:",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode("document"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "addEventListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'DOMContentLoaded'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" showSum"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.66 points for what the problem is"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.66 points for correct line where the crash happens"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.66 points for explanation of a functional correction")
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name 3 different events that can fire on a webpage, and explain when they fire.",
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "click"),
      /* @__PURE__ */ createTextVNode(": When the user clicks on an element")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "submit"),
      /* @__PURE__ */ createTextVNode(": When the user submits a "),
      /* @__PURE__ */ createBaseVNode("code", null, "<form>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "DOMContentLoaded"),
      /* @__PURE__ */ createTextVNode(": When the web browser have read/parsed all HTML code on the webpage and is done constructing the Document Object Model")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.10 points for each correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.23 points for each correct explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Point deduction for small errors:",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for spelling event name with uppercase letter first"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("-0.1 points for event name starting with "),
      /* @__PURE__ */ createBaseVNode("code", null, "on"),
      /* @__PURE__ */ createTextVNode(" (that's not part of the name of the event, but if one use the "),
      /* @__PURE__ */ createBaseVNode("code", null, "onEVENTNAME"),
      /* @__PURE__ */ createTextVNode(" HTML attributes, then one should write "),
      /* @__PURE__ */ createBaseVNode("code", null, "on"),
      /* @__PURE__ */ createTextVNode(" before the name of the event)")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("-0.1 points for having "),
      /* @__PURE__ */ createBaseVNode("code", null, "()"),
      /* @__PURE__ */ createTextVNode(" at the end of the event name")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for spelling mistake in name")
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Give a general explanation of what the method "),
    /* @__PURE__ */ createBaseVNode("code", null, "preventDefault()"),
    /* @__PURE__ */ createTextVNode(" on the event object does. Then also describe an event where there is a difference between calling it and not calling it.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("By calling the method "),
    /* @__PURE__ */ createBaseVNode("code", null, "preventDefault()"),
    /* @__PURE__ */ createTextVNode(" on the event object you tell the web browser to not do what it usually does when that event happens. For example, when listening for the "),
    /* @__PURE__ */ createBaseVNode("code", null, "click"),
    /* @__PURE__ */ createTextVNode(" event on an "),
    /* @__PURE__ */ createBaseVNode("code", null, "<a>"),
    /* @__PURE__ */ createTextVNode(" element, the web browser will by default send an HTTP request to fetch and show the webpage the link leads to, but by calling "),
    /* @__PURE__ */ createBaseVNode("code", null, "preventDefault()"),
    /* @__PURE__ */ createTextVNode(" on the event object when this event happens, the web browser won't do that.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 point for general explanation"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for describing an event where it makes a difference to call it")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Point deduction for writing incorrect things or missing to mention important details (the amount varies depending on what is incorrect/missing)",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In a frontend framework of your choice (name which one you choose), implement a component that functions as a counter:",
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "The one using the component can pass a prop to it (a number) indicating the start value of the counter in the component"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The component should contain a "),
      /* @__PURE__ */ createBaseVNode("code", null, "<button>"),
      /* @__PURE__ */ createTextVNode(" the user can click on to increment the counter")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The "),
      /* @__PURE__ */ createBaseVNode("code", null, "<button>"),
      /* @__PURE__ */ createTextVNode(" should show the current value of the counter")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In Svelte:",
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "export"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
            /* @__PURE__ */ createTextVNode(" startValue\n    \n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
            /* @__PURE__ */ createTextVNode(" counter "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(" startValue\n    \n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "incrementCounter"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n        counter"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "++"),
            /* @__PURE__ */ createTextVNode("\n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
            /* @__PURE__ */ createTextVNode("button")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "on:"),
            /* @__PURE__ */ createTextVNode("click")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createTextVNode("{incrementCounter}")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("{counter}"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
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
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correctly implementing the prop"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.25 points correctly showing the counter value in the "),
      /* @__PURE__ */ createBaseVNode("code", null, "<button>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.75 points for correctly incrementing the counter value when "),
      /* @__PURE__ */ createBaseVNode("code", null, "<button>"),
      /* @__PURE__ */ createTextVNode(" is clicked")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deductions for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "-0.5 points for not naming which framework that is used"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for using "),
          /* @__PURE__ */ createBaseVNode("code", null, "var"),
          /* @__PURE__ */ createTextVNode(" when it's better to use "),
          /* @__PURE__ */ createBaseVNode("code", null, "let")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for each bad variable and function name"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("In Svelte: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for using something else than "),
              /* @__PURE__ */ createBaseVNode("code", null, "on:click"),
              /* @__PURE__ */ createTextVNode(", such as "),
              /* @__PURE__ */ createBaseVNode("code", null, "onClick")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for calling function in "),
              /* @__PURE__ */ createBaseVNode("code", null, "on:click"),
              /* @__PURE__ */ createTextVNode(" instead of passing a function to it")
            ])
          ])
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Match each status code with its corresponding reason phrase.",
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Status codes:",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "200"),
    /* @__PURE__ */ createBaseVNode("li", null, "204"),
    /* @__PURE__ */ createBaseVNode("li", null, "400"),
    /* @__PURE__ */ createBaseVNode("li", null, "500"),
    /* @__PURE__ */ createBaseVNode("li", null, "501")
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Reason Phrases:",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "OK"),
    /* @__PURE__ */ createBaseVNode("li", null, "No Content"),
    /* @__PURE__ */ createBaseVNode("li", null, "Bad Request"),
    /* @__PURE__ */ createBaseVNode("li", null, "Internal Server Error"),
    /* @__PURE__ */ createBaseVNode("li", null, "Not Implemented")
  ],
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You will get:",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for all correct")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "200 - OK"),
    /* @__PURE__ */ createBaseVNode("li", null, "204 - No Content"),
    /* @__PURE__ */ createBaseVNode("li", null, "400 - Bad Request"),
    /* @__PURE__ */ createBaseVNode("li", null, "500 - Internal Server Error"),
    /* @__PURE__ */ createBaseVNode("li", null, "501 - Not Implemented")
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for all correct")
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-6-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-6-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 6 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "David is assigned the task to design a REST API clients can use to create a new resource on the server representing an anonymous feedback message. In the request, the following information about the resource should be sent:",
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "A short title of the feedback (required, min length 5 characters, max length 25 characters)"),
    /* @__PURE__ */ createBaseVNode("li", null, "A long description of the feedback (required, min length 5 characters, max length 500 characters)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "From the design, other programmers should have all information they need to be able to implement the REST API and to use it, so details are needed.",
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "David is lazy and wants you design the REST API instead. Design the REST API for David.",
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": If you think you are missing some critical information you have to know to be able to carry out the task in a good way, feel free to make your own assumptions about that information, but clearly state which those assumptions are in your answer.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Assuming the newly created resource gets an integer as id.",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Request:",
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("URI: "),
      /* @__PURE__ */ createBaseVNode("code", null, "/feedback-messages")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Method: "),
      /* @__PURE__ */ createBaseVNode("code", null, "POST")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Headers: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
          /* @__PURE__ */ createTextVNode(": "),
          /* @__PURE__ */ createBaseVNode("code", null, "application/json")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Content-Length"),
          /* @__PURE__ */ createTextVNode(": "),
          /* @__PURE__ */ createBaseVNode("code", null, "THE_ACTUAL_NUMBER_OF_BYTES_IN_THE_BODY")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Body:"),
      /* @__PURE__ */ createBaseVNode("div", {
        class: "language-json line-numbers-mode",
        "data-ext": "json"
      }, [
        /* @__PURE__ */ createBaseVNode("pre", { class: "language-json" }, [
          /* @__PURE__ */ createBaseVNode("code", null, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"title"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_TITLE"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"description"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_DESCRIPTION"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("div", {
          class: "line-numbers",
          "aria-hidden": "true"
        }, [
          /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Possible responses:",
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("If the server can't carry out the request because of some internal error: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "500")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("If there are validation errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "400")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Headers: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "application/json")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Content-Length"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "THE_ACTUAL_NUMBER_OF_BYTES_IN_THE_BODY")
            ])
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Body:"),
          /* @__PURE__ */ createBaseVNode("div", {
            class: "language-json line-numbers-mode",
            "data-ext": "json"
          }, [
            /* @__PURE__ */ createBaseVNode("pre", { class: "language-json" }, [
              /* @__PURE__ */ createBaseVNode("code", null, [
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
                /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"ERROR_CODE_1"'),
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
                /* @__PURE__ */ createTextVNode(),
                /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"ERROR_CODE_2"'),
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
                /* @__PURE__ */ createTextVNode(" ..."),
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
                /* @__PURE__ */ createTextVNode("\n")
              ])
            ]),
            /* @__PURE__ */ createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
            ])
          ]),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("Available "),
              /* @__PURE__ */ createBaseVNode("code", null, "ERROR_CODE_X"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("ul", null, [
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "TITLE_TOO_SHORT"),
                  /* @__PURE__ */ createTextVNode(" (must be at least 5 characters)")
                ]),
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "TITLE_TOO_LONG"),
                  /* @__PURE__ */ createTextVNode(" (may be at most 25 characters)")
                ]),
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "DESCRIPTION_TOO_SHORT"),
                  /* @__PURE__ */ createTextVNode(" (must be at least 5 characters)")
                ]),
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "DESCRIPTION_TOO_LONG"),
                  /* @__PURE__ */ createTextVNode(" (may be at most 500 characters)")
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("If the resource was successfully created "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "201")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Headers: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "application/json")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Content-Length"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "THE_ACTUAL_NUMBER_OF_BYTES_IN_THE_BODY")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Location"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "/feedback-messages/THE_ACTUAL_ID")
            ])
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Body:"),
          /* @__PURE__ */ createBaseVNode("div", {
            class: "language-json line-numbers-mode",
            "data-ext": "json"
          }, [
            /* @__PURE__ */ createBaseVNode("pre", { class: "language-json" }, [
              /* @__PURE__ */ createBaseVNode("code", null, [
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
                /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"title"'),
                /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
                /* @__PURE__ */ createTextVNode(),
                /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_TITLE"'),
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
                /* @__PURE__ */ createTextVNode(),
                /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"description"'),
                /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
                /* @__PURE__ */ createTextVNode(),
                /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_DESCRIPTION"'),
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
                /* @__PURE__ */ createTextVNode(),
                /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"id"'),
                /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
                /* @__PURE__ */ createTextVNode(" THE_ACTUAL_ID"),
                /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
                /* @__PURE__ */ createTextVNode("\n")
              ])
            ]),
            /* @__PURE__ */ createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
            ])
          ])
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for request"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for internal server response"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for validation errors response"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for success response")
  ],
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Point deduction:",
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("-0.1 points for each piece of information missing, such as: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "URI in request"),
        /* @__PURE__ */ createBaseVNode("li", null, "Method in request"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Crucial header in request (except "),
          /* @__PURE__ */ createBaseVNode("code", null, "Content-Length"),
          /* @__PURE__ */ createTextVNode(")")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "Body/property in body"),
        /* @__PURE__ */ createBaseVNode("li", null, "Crucial header in response"),
        /* @__PURE__ */ createBaseVNode("li", null, "Error code/message"),
        /* @__PURE__ */ createBaseVNode("li", null, "Etc.")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for each piece of information written that makes no sense")
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-7-3p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-7-3p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 7 (3p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name and describe each constraint REST consists of.",
  -1
  /* HOISTED */
);
const _hoisted_72 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Roy Thomas Fielding's",
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Architectural Styles and the Design of Network-based Software Architectures",
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct description")
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-8-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-8-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 8 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In a REST API implementing Access Tokens as JWTs, explain why a hacker can't simply create his own JWT and use as Access Token in the REST API. Be detailed.",
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When the server creates a JWT Access Token for a user, the server computes a hash value from the data in the token and a secret (some text) only the server knows, and that hash value (known as the signature) is part of the token. When the server later receives a token from a user, it computes the signature from the data in the token and the secret again, and checks if the newly computed signature is the same as the signature stored in the token. If they are the same, the server can be sure the token was created by the server itself, because it's only the server that knows which secret it used to compute the signature in the tokens when it created it.",
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If a hacker tries to change the data in a token it has received from the server, the server would compute a different signature when it receives back the token from the hacker, and wouldn't trust the data in the token, so a hacker can't change the data in an valid token created by the server.",
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If a hacker wants to create and use his own token in the REST API, he must use the same secret as the server to compute the signature in the token, otherwise the server will discover that the token wasn't created by the server itself, and not trust it when it receives it. But the hacker can't know which secret the server is using (only the server should know that), so the hacker must guess which secret to use, and as long as the server does not use a short and simple secret like "),
    /* @__PURE__ */ createBaseVNode("code", null, "aaa"),
    /* @__PURE__ */ createTextVNode(", it will in practice be impossible for the hacker to guess which secret the server is using.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.66 points for explaining how the server computes the signature when creating the token (hashing data + secret)"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.66 points for explaining how the server verifies the token when it receives it (hashing data + secret again, and compare with signature in token)"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.66 points for explaining why a hacker can't trick the server")
  ],
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "There exists 3 different type of claim names in the JWT specification. Name the three, and explain how they differ.",
  -1
  /* HOISTED */
);
const _hoisted_84 = {
  href: "https://www.rfc-editor.org/rfc/rfc7519#section-4",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each (somewhat) correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.75 points for each correct explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-10-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-10-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 10 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Bob says that as long as you don't store any sensitive personal information about the user in a JWT Access Token, the REST API does not need to use HTTPS, since the Access Tokens are signed by the server, so there is no security vulnerability. Is Bob right or wrong? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Bob is wrong. If the REST API does not use HTTPS, then anyone who helps forwarding the HTTP requests/responses between the client and the server can see which access token the client have, and they can then send their own malicious HTTP requests to the server with that access token, and that's a security vulnerability.",
  -1
  /* HOISTED */
);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer and valid justification")
  ],
  -1
  /* HOISTED */
);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Is the user's account id something you are likely to find in an ID Token? Or in an Access Token? Or none? Or both? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When the user logs in, the client usually needs to know which account the user logged in to (for example to fetch and show information related to the account the user logged in to), so you are likely to find the user's account id in the ID token, so the client can learn which account the user logged in to through it.",
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When sending an HTTP request to a server with authorization rules (i.e. not all users should be authorized to do everything on the server), the server often needs to know which account the user has logged in to to figure out if the user is authorized to send the received request or not. For this reason, you often find the user's account id in the Access Token as well.",
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for an answer with valid justification for ID Token"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for an answer with valid justification for Access Token")
  ],
  -1
  /* HOISTED */
);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name one CORS header, give an example of a value it can have, and explain what the meaning of using that header with that value is.",
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Header name: "),
    /* @__PURE__ */ createBaseVNode("code", null, "Access-Control-Allow-Origin")
  ],
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Header value: "),
    /* @__PURE__ */ createBaseVNode("code", null, "*")
  ],
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "It means that client-side code from any origin (any website at all) should be allowed to send HTTP request to the server that sent back the response with this header.",
  -1
  /* HOISTED */
);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.33 points for header name "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Only 0.23 points if the name is quite wrong, but close enough to be able to understand which CORS header it is")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "0.33 points for valid header value"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.33 points for correct explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain the difference between the Docker commands "),
    /* @__PURE__ */ createBaseVNode("code", null, "RUN"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "CMD"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "RUN"),
    /* @__PURE__ */ createTextVNode(" command specifies a command that should be executed when building a new Docker image. The "),
    /* @__PURE__ */ createBaseVNode("code", null, "CMD"),
    /* @__PURE__ */ createTextVNode(" command on the other hand specifies which command that should be executed to start the program in the image, and it will be executed when the image starts running in a new container.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.5 points for correctly explaining "),
      /* @__PURE__ */ createBaseVNode("code", null, "RUN")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.5 points for correctly explaining "),
      /* @__PURE__ */ createBaseVNode("code", null, "CMD")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "OR:",
  -1
  /* HOISTED */
);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.25 points for explaining "),
      /* @__PURE__ */ createBaseVNode("code", null, "RUN"),
      /* @__PURE__ */ createTextVNode(" as "),
      /* @__PURE__ */ createBaseVNode("code", null, "CMD")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.25 points for explaining "),
      /* @__PURE__ */ createBaseVNode("code", null, "CMD"),
      /* @__PURE__ */ createTextVNode(" as "),
      /* @__PURE__ */ createBaseVNode("code", null, "RUN")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Alice sends you a Docker image that contains a program that computes a value and logs it to the file "),
    /* @__PURE__ */ createBaseVNode("code", null, "/computed/the-value.txt"),
    /* @__PURE__ */ createTextVNode(". After you have run this image in a new Docker container, you realize the computed value is logged to that file in the container, and not to that file on your host computer's file system, so you can't read the file. But you really want to know what value is logged to the file.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Suggest a solution that enables you to learn what value the program computes.",
  -1
  /* HOISTED */
);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Since you don't have the source code for the image, you can't make any changes to it.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("One solution is to mount a volume to the container when you start running it. You can for example say that the path "),
    /* @__PURE__ */ createBaseVNode("code", null, "/computed/"),
    /* @__PURE__ */ createTextVNode(" in the container should be mapped to "),
    /* @__PURE__ */ createBaseVNode("code", null, "/home/the-username/computed/"),
    /* @__PURE__ */ createTextVNode(" on the host computer. That way, the program in the container will write the value to the file "),
    /* @__PURE__ */ createBaseVNode("code", null, "/home/the-username/computed/the-value.txt"),
    /* @__PURE__ */ createTextVNode(" on the host computer instead, and after running the image in a container you can read the value from that file there on the host computer.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for suggesting a solution that works")
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_115 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Can a web application that can be scaled vertically always just as easy be scaled horizontally? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "No. To be able to scale horizontally, the web application needs to be stateless. That is not a requirement to be able to scale the web application vertically, so if the web application contains a state it will be harder to scale it horizontally.",
  -1
  /* HOISTED */
);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer and valid justification")
  ],
  -1
  /* HOISTED */
);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_120 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-16-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-16-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 16 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountByUsername()"),
    /* @__PURE__ */ createTextVNode(" should receive the username of an account as an argument, and it returns a promise that resolves to a JS object with information about the account with that username. If the account object can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Implement the function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountsByUsernames()"),
    /* @__PURE__ */ createTextVNode(", that receives an array with usernames as argument, and returns a promise that resolves to an array with account objects retrieved from "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountByUsername()"),
    /* @__PURE__ */ createTextVNode(" for respective username.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If you get an error from "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountByUsername()"),
    /* @__PURE__ */ createTextVNode(", then your own promise should be rejected with the JS error object you get from it.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_125 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getAccountsByUsernames"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "usernames"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" accounts "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "for"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" username "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "of"),
        /* @__PURE__ */ createTextVNode(" usernames"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		accounts"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "push"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "await"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getAccountByUsername"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("username"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(" accounts\n	\n"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for a solution that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deductions for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for naming the function "),
          /* @__PURE__ */ createBaseVNode("code", null, "getAccountsByUsernames"),
          /* @__PURE__ */ createTextVNode(" wrong")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for using "),
          /* @__PURE__ */ createBaseVNode("code", null, "let"),
          /* @__PURE__ */ createTextVNode(" syntax where it's not allowed (such as in front of parameter names)")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for bad variable names, such as ending with "),
          /* @__PURE__ */ createBaseVNode("code", null, "promise"),
          /* @__PURE__ */ createTextVNode(" when it doesn't store a promise")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for returning and throwing (both stops code execution in function, so no need to use return when you want to throw)"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for using "),
          /* @__PURE__ */ createBaseVNode("code", null, "let"),
          /* @__PURE__ */ createTextVNode("/"),
          /* @__PURE__ */ createBaseVNode("code", null, "var"),
          /* @__PURE__ */ createTextVNode(" when "),
          /* @__PURE__ */ createBaseVNode("code", null, "const"),
          /* @__PURE__ */ createTextVNode(" should be used")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for pushing to array with "),
          /* @__PURE__ */ createBaseVNode("code", null, "+"),
          /* @__PURE__ */ createTextVNode(" operator (wont' work in JS) instead of using "),
          /* @__PURE__ */ createBaseVNode("code", null, "push()"),
          /* @__PURE__ */ createTextVNode(" method")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for not returning array with account objects"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for writing the loop wrong"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for creating local variables (e.g. in a "),
          /* @__PURE__ */ createBaseVNode("code", null, "try"),
          /* @__PURE__ */ createTextVNode(") and try to access them outside")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for using try and catch"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for returning error instead of throwing"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for returning/throwing wrong error"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for having unnecessary code"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for returning the accounts array in an object"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for using "),
          /* @__PURE__ */ createBaseVNode("code", null, "Promise.all()"),
          /* @__PURE__ */ createTextVNode(" wrong")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.5 points for missing the "),
          /* @__PURE__ */ createBaseVNode("code", null, "async"),
          /* @__PURE__ */ createTextVNode(" and "),
          /* @__PURE__ */ createBaseVNode("code", null, "await"),
          /* @__PURE__ */ createTextVNode(" keywords")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0 points for a solution that either: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Have a callback parameter/function"),
        /* @__PURE__ */ createBaseVNode("li", null, "Try to read status codes or parse the response body (none of the given functions use HTTP)"),
        /* @__PURE__ */ createBaseVNode("li", null, "Try to send back an HTTP response of some kind (the function should not use HTTP at all)"),
        /* @__PURE__ */ createBaseVNode("li", null, "Have SQL code (the data is not stored in a relational database)"),
        /* @__PURE__ */ createBaseVNode("li", null, "Don't use a loop/iteration of any kind")
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
        _hoisted_14,
        _hoisted_15,
        _hoisted_16,
        _hoisted_17,
        _hoisted_18
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_19,
        _hoisted_20,
        _hoisted_21,
        _hoisted_22,
        _hoisted_23,
        _hoisted_24,
        _hoisted_25
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_26
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_27,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_28
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_29
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_30,
        _hoisted_31,
        _hoisted_32
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_33,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_34
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_35
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_36,
        _hoisted_37
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_38,
    _hoisted_39,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_40,
        _hoisted_41
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_42,
        _hoisted_43
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_44
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_45,
    _hoisted_46,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_47,
        _hoisted_48,
        _hoisted_49,
        _hoisted_50,
        _hoisted_51,
        _hoisted_52,
        _hoisted_53
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_54
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_55
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_56,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_57,
        _hoisted_58,
        _hoisted_59,
        _hoisted_60,
        _hoisted_61
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_62,
        _hoisted_63,
        _hoisted_64,
        _hoisted_65,
        _hoisted_66
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_67,
        _hoisted_68,
        _hoisted_69
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_70,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_71
      ]),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          createTextVNode("See "),
          createBaseVNode("a", _hoisted_72, [
            createTextVNode("Chapter 5.1 Deriving REST"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in "),
          _hoisted_73,
          createTextVNode(" dissertation "),
          _hoisted_74,
          createTextVNode(".")
        ])
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_75
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_76,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_77
      ]),
      "sample-answer": withCtx(() => [
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
        createBaseVNode("p", null, [
          createTextVNode("See "),
          createBaseVNode("a", _hoisted_84, [
            createTextVNode("Chapter 4. Claims"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in the JWT specification.")
        ])
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_85
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_86,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_87
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_88
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_89
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_90,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_91
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_92,
        _hoisted_93
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_94
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_95,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_96
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_97,
        _hoisted_98,
        _hoisted_99
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_100
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_101,
    _hoisted_102,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_103
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_104
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_105,
        _hoisted_106,
        _hoisted_107
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_108,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_109,
        _hoisted_110,
        _hoisted_111
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_112
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_113
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_114,
    _hoisted_115,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_116
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_117
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_118
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_119,
    _hoisted_120,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_121,
        _hoisted_122,
        _hoisted_123,
        _hoisted_124
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_125
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_126
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const exam20230612_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-06-12.html.vue"]]);
export {
  exam20230612_html as default
};
