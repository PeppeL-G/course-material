import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, f as createStaticVNode, a as createBaseVNode, b as createTextVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="exam-2023-08-16" tabindex="-1"><a class="header-anchor" href="#exam-2023-08-16" aria-hidden="true">#</a> Exam 2023-08-16</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-08-16.</p><hr><p>Peter will not visit the exam. If you find any question unclear, ask an exam supervisor (tentavakt in Swedish) to call Peter, and he will try to clarify.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only enter answers to the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 13);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name the method one should use in HTTP when the request is about:",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Deleting a resource"),
    /* @__PURE__ */ createBaseVNode("li", null, "Updating a resource"),
    /* @__PURE__ */ createBaseVNode("li", null, "Creating a new resource")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You will get:",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.33 points for each correct name (spelling must be correct)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "DELETE")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "PUT")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "POST")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.33 points for each correct name (spelling must be correct)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain why the URI "),
    /* @__PURE__ */ createBaseVNode("code", null, "/movies/search?title=Bond"),
    /* @__PURE__ */ createTextVNode(" (that identifies all movies whose title contains the word/character sequence "),
    /* @__PURE__ */ createBaseVNode("code", null, "Bond"),
    /* @__PURE__ */ createTextVNode(") is considered a bad URI in HTTP.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In HTTP, the URI should only identify resources. It should not contain verbs, such as "),
    /* @__PURE__ */ createBaseVNode("code", null, "search"),
    /* @__PURE__ */ createTextVNode(", so the URI in this case should rather be "),
    /* @__PURE__ */ createBaseVNode("code", null, "/movies?title=Bond"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("1 point for "),
      /* @__PURE__ */ createBaseVNode("code", null, "search"),
      /* @__PURE__ */ createTextVNode(" should not be in the URI")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name an HTTP header of your choice, explain what it represents/means, show a sample value it can have, and explain how that sample value should be interpreted/what it means.",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The HTTP header "),
    /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
    /* @__PURE__ */ createTextVNode(" can be used in HTTP requests and responses, and it indicates in which data format the body of the request/response is written in. For example, the value "),
    /* @__PURE__ */ createBaseVNode("code", null, "application/json"),
    /* @__PURE__ */ createTextVNode(" means the body of the request/response is written in JSON format.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for explanation"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for sample value"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for explanation of sample value")
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-4-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-4-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 4 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain when the server should send back the status code "),
    /* @__PURE__ */ createBaseVNode("code", null, "400"),
    /* @__PURE__ */ createTextVNode(" in an HTTP response, and when it should send back the status code "),
    /* @__PURE__ */ createBaseVNode("code", null, "500"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": This question is about HTTP when used properly, and has nothing to do with HTML, web browsers, nor websites.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You'll get:",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct answer")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The server should send back the status code "),
    /* @__PURE__ */ createBaseVNode("code", null, "400"),
    /* @__PURE__ */ createTextVNode(" when there is something wrong with the request, for example when the data in the request contains validation errors.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The server should send back the status code "),
    /* @__PURE__ */ createBaseVNode("code", null, "500"),
    /* @__PURE__ */ createTextVNode(" when there is nothing wrong with the request, but something is wrong on the server that prevents it from carrying out the request, for example if it needs to read data from a database, but it currently can't communicate with the database.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct answer")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "html",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#html",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" HTML")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Place the lines of code below in such order that they form a valid HTML5 document (only place one line of code in each box).",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "<h1>Welcome!</h1>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "<!DOCTYPE html>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "</body>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "</head>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "<body>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "<title>Welcome!</title>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "<head>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "</html>")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "<html>")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": All must be correct to get points on this question.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-html line-numbers-mode",
    "data-ext": "html"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token doctype" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<!"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token doctype-tag" }, "DOCTYPE"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token name" }, "html"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("html")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("head")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("title")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Welcome!"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("title")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("head")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("body")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("h1")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Welcome!"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("h1")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for all in correct order")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Name the attribute "),
    /* @__PURE__ */ createBaseVNode("code", null, "<a>"),
    /* @__PURE__ */ createTextVNode(" elements can have that indicates which page the user should come to when the user clicks on the element.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "href")
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer"),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for answering with something more than just the attribute name that is wrong or makes it unclear what your answer is")
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("What type of HTTP request (the name of the method) does the web browser send when it receives the HTML code for an "),
    /* @__PURE__ */ createBaseVNode("code", null, "<img>"),
    /* @__PURE__ */ createTextVNode(" element that contains the "),
    /* @__PURE__ */ createBaseVNode("code", null, "src"),
    /* @__PURE__ */ createTextVNode(" attribute?")
  ],
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "GET")
  ],
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct method name")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Name 3 different "),
    /* @__PURE__ */ createBaseVNode("strong", null, "inline"),
    /* @__PURE__ */ createTextVNode(" elements in HTML.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Just write the name of the tag; do not include "),
    /* @__PURE__ */ createBaseVNode("code", null, "<"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, ">"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Writing "),
    /* @__PURE__ */ createBaseVNode("strong", null, "inline-block"),
    /* @__PURE__ */ createTextVNode(" elements is also OK, but not "),
    /* @__PURE__ */ createBaseVNode("strong", null, "block"),
    /* @__PURE__ */ createTextVNode(" elements.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You'll get:",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.66 points for each correct answer (spelling needs to be correct) "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Only 0.5 points if spelling is wrong")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "a")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "span")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "i")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.66 points for each correct answer (spelling needs to be correct) "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Only 0.5 points if spelling is wrong")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-9-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-9-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 9 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If a user comes to a website with the form below and submits it without making any changes to it, what would the URI of the request look like? Write the URI as your answer.",
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("form")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "action"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("/sum"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "method"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("POST"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n   Number 1: "),
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("x"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("123"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n   Number 2: "),
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("y"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("456"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n   "),
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
            /* @__PURE__ */ createTextVNode("submit"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Compute sum!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("form")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-text line-numbers-mode",
    "data-ext": "text"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-text" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "/sum\n")
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
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("(Since the "),
    /* @__PURE__ */ createBaseVNode("code", null, "method"),
    /* @__PURE__ */ createTextVNode(" is "),
    /* @__PURE__ */ createBaseVNode("code", null, "POST"),
    /* @__PURE__ */ createTextVNode(", the web browser will send a POST request, and pass the data from the form in the body of the request ("),
    /* @__PURE__ */ createBaseVNode("code", null, "x=123&y=456"),
    /* @__PURE__ */ createTextVNode("). The data is only passed in the querystring of the URI if the "),
    /* @__PURE__ */ createBaseVNode("code", null, "method"),
    /* @__PURE__ */ createTextVNode(" is "),
    /* @__PURE__ */ createBaseVNode("code", null, "GET"),
    /* @__PURE__ */ createTextVNode(")")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer")
  ],
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Name one HTML tag of your choice that is valid to write in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<head>"),
    /* @__PURE__ */ createTextVNode(" element in addition to "),
    /* @__PURE__ */ createBaseVNode("code", null, "<title>"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Just write the name of the tag; do not include "),
    /* @__PURE__ */ createBaseVNode("code", null, "<"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, ">"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "link")
  ],
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for a valid tag")
  ],
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "css",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#css",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" CSS")
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
  [
    /* @__PURE__ */ createTextVNode("Name and describe 2 different CSS properties of your choice except "),
    /* @__PURE__ */ createBaseVNode("code", null, "color"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "width"),
    /* @__PURE__ */ createTextVNode(". For each, provide also an example of a value it can have, and explain the result of using the property with that value.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The CSS property "),
    /* @__PURE__ */ createBaseVNode("code", null, "background-color"),
    /* @__PURE__ */ createTextVNode(" determines which background color the element should have. For example, the value "),
    /* @__PURE__ */ createBaseVNode("code", null, "red"),
    /* @__PURE__ */ createTextVNode(" would give the element a red background.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The CSS property "),
    /* @__PURE__ */ createBaseVNode("code", null, "font-size"),
    /* @__PURE__ */ createTextVNode(" determines how big the text in the element should be. For example, the value "),
    /* @__PURE__ */ createBaseVNode("code", null, "16px"),
    /* @__PURE__ */ createTextVNode(" would make the text in the element 16 pixels big.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.125 points for each valid property name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.125 points for each correct property description"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.125 points for each valid sample value"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.125 points for each correct sample value description")
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "What color will the text in the paragraph in the HTML code below have?",
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("style")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token style" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token language-css" }, [
            /* @__PURE__ */ createTextVNode("\n    \n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, ".p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n        "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "color"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(" brown"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n    \n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n        "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "color"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(" pink"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n    \n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "#p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n        "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "color"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(" white"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n    "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n    \n")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("style")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Some text."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("p")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "white")
  ],
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for a correct answer")
  ],
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Here is some CSS code:",
  -1
  /* HOISTED */
);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-css line-numbers-mode",
    "data-ext": "css"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-css" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "div p #a.b"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "width"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(" 50%"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Write HTML code that contains a match for the CSS selector in the code above. Write as little HTML code as possibly (don't write any extra elements or attributes that are not needed).",
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": You should only write the HTML code found in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<body>"),
    /* @__PURE__ */ createTextVNode(" element (including the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<body>"),
    /* @__PURE__ */ createTextVNode(" element), you should not write the code for an entire HTML document.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("body")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("a"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("b"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("I will be matched!"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("body")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that is correct/close to correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deduction for small errors in close to correct answers: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for missing "),
          /* @__PURE__ */ createBaseVNode("code", null, "<body>")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for putting "),
          /* @__PURE__ */ createBaseVNode("code", null, "id"),
          /* @__PURE__ */ createTextVNode(" and/or "),
          /* @__PURE__ */ createBaseVNode("code", null, "class"),
          /* @__PURE__ */ createTextVNode(" on wrong element "),
          /* @__PURE__ */ createBaseVNode("code", null, "<p>")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for missing an element in "),
          /* @__PURE__ */ createBaseVNode("code", null, "<p>")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Write a CSS selector that selects the element in the HTML code below that contains the text "),
    /* @__PURE__ */ createBaseVNode("code", null, "SELECT ME"),
    /* @__PURE__ */ createTextVNode(". The selector should select only that element, and no other.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("body")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Here is "),
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
            /* @__PURE__ */ createTextVNode("p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("SELECT ME"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" some text."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Here "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("is some"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" text."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Here "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("i")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "class"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("is some"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("i")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" text."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Here "),
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
            /* @__PURE__ */ createTextVNode("p"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("is some"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" text."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("body")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-css line-numbers-mode",
    "data-ext": "css"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-css" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "div span.p\n")
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
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that works"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.5 points for "),
      /* @__PURE__ */ createBaseVNode("code", null, "div span .p")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "website",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#website",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Website")
  ],
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-15-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-15-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 15 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Explain what a session is, give one example of what it can be used for, and explain how sessions can be implemented (in general, and not in a specific framework/library/package).",
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A session is a collection of values the server wants to remember about a client/user that is stored on the server. They can for example be used to remember if the user has logged in on the website or not.",
  -1
  /* HOISTED */
);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The sessions can for example be stored in a database on the server. Each session gets it's own id (known as the "),
    /* @__PURE__ */ createBaseVNode("em", null, "session id"),
    /* @__PURE__ */ createTextVNode("), which should be hard to guess (so a hacker can't guess other users' session ids), so they are usually long strings of random characters. When a user starts using the website, the server can insert a new post in the database that contains the information the server wants to remember about the user together with a new session id.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The server can then send back the session id in a cookie in the response to the user, and the user should then send back this cookie to the server in all requests it sends to the server in the future. When the server receives these request, it can fetch the session from the database with the session id from the cookie in the request, and that way read out the information it wanted to remember about the user.",
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for what a session is (collection of values/information to remember about a user)"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for example"),
    /* @__PURE__ */ createBaseVNode("li", null, "1 points for implementation details (session id + stored on server + cookie)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_104 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain the difference between a "),
    /* @__PURE__ */ createBaseVNode("em", null, "webpage"),
    /* @__PURE__ */ createTextVNode(" and a "),
    /* @__PURE__ */ createBaseVNode("em", null, "website"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A webpage is a single HTML document that can be shown in a web browser. All such HTML documents part of the same domain constitutes a website.",
  -1
  /* HOISTED */
);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for explaining webpage"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for explaining website (multiple webpages)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-17-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-17-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 17 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name two different middlewares one can add to an Express application, for example two middlewares you have used in the application you built in your project work, and briefly explain what they do.",
  -1
  /* HOISTED */
);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "express.urlencoded()"),
      /* @__PURE__ */ createTextVNode(" (previously "),
      /* @__PURE__ */ createBaseVNode("code", null, "bodyParser.urlencoded()"),
      /* @__PURE__ */ createTextVNode("): A middleware that makes it possible for us to access the body in HTTP requests using "),
      /* @__PURE__ */ createBaseVNode("code", null, "request.body"),
      /* @__PURE__ */ createTextVNode(" (if it's written in the data format "),
      /* @__PURE__ */ createBaseVNode("code", null, "application/x-www-form-urlencoded"),
      /* @__PURE__ */ createTextVNode(")")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "expressSession()"),
      /* @__PURE__ */ createTextVNode(": A middleware that makes it possible for us to use "),
      /* @__PURE__ */ createBaseVNode("code", null, "request.session"),
      /* @__PURE__ */ createTextVNode(" to access the user's session")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "security",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#security",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Security")
  ],
  -1
  /* HOISTED */
);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-18-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-18-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 18 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("On a properly implemented website, is it likely that a user can get the session id "),
    /* @__PURE__ */ createBaseVNode("code", null, "10"),
    /* @__PURE__ */ createTextVNode("? Justify your answer.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  `No, that is unlikely. Since session ids should be hard to guess, they should be big numbers or long strings, so a hacker can't "guess" user's session id. If a hacker knows or manages to guess another user's session id, then that hacker can start to use that session id too, and that way act as that user to the server, and that's a security risc.`,
  -1
  /* HOISTED */
);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer and valid justification")
  ],
  -1
  /* HOISTED */
);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-19-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-19-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 19 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("On a website with blogposts, the blogposts are stored in an SQLite database in a table named "),
    /* @__PURE__ */ createBaseVNode("code", null, "blogposts"),
    /* @__PURE__ */ createTextVNode(" that looks like this:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_118 = /* @__PURE__ */ createBaseVNode(
  "table",
  null,
  [
    /* @__PURE__ */ createBaseVNode("thead", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("th", null, "keyword"),
        /* @__PURE__ */ createBaseVNode("th", null, "title"),
        /* @__PURE__ */ createBaseVNode("th", null, "content"),
        /* @__PURE__ */ createBaseVNode("th", null, "author")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "html"),
        /* @__PURE__ */ createBaseVNode("td", null, "HTML is fun!"),
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "Alice")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "css"),
        /* @__PURE__ */ createBaseVNode("td", null, "CSS is fun too!"),
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "Bob")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "js"),
        /* @__PURE__ */ createBaseVNode("td", null, "JS is most fun!"),
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "Alice")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "...")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "content"),
    /* @__PURE__ */ createTextVNode(" is not shown in the table above, since that one is quite long, and not all rows are shown, since they are quite many.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Claire should add a webpage to the website users can use to search for blogposts matching an entered "),
    /* @__PURE__ */ createBaseVNode("code", null, "keyword"),
    /* @__PURE__ */ createTextVNode(" or an entered "),
    /* @__PURE__ */ createBaseVNode("code", null, "title"),
    /* @__PURE__ */ createTextVNode(". It should not be possible to search for blogposts matching an entered "),
    /* @__PURE__ */ createBaseVNode("code", null, "author"),
    /* @__PURE__ */ createTextVNode(", since easily retrieving all blogposts written by a specific user is considered to be a security vulnerability on this website.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Claire adds a webpage with the following HTML code:",
  -1
  /* HOISTED */
);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("h1")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Search blogposts"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("h1")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("form")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "method"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("GET"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "action"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("/blogposts/search"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        Select field to search:\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("select")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("field"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("option")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("keyword"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Keyword"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("option")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("option")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("title"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("option")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("select")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        Enter value to match in field:\n        "),
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
            /* @__PURE__ */ createTextVNode("text"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("value"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
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
            /* @__PURE__ */ createTextVNode("submit"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "value"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Search!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("form")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("To handle the search request, she adds the following JS code to the "),
    /* @__PURE__ */ createBaseVNode("code", null, "app.js"),
    /* @__PURE__ */ createTextVNode(" file:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/blogposts/search'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" response")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" field "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("params"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("field\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" value "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("params"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("value\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" query "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"SELECT * FROM blogposts WHERE "'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode("field"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '" = ?"'),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" values "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createTextVNode("value"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n    \n    db"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "all"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("query"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" values "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("error"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" blogposts")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Let us assume no database error occurred, so we ignore that."),
        /* @__PURE__ */ createTextVNode("\n        \n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" model "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            blogposts\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n        \n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// The file blogposts.hbs is not shown here, but it"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// shows all the blogposts in the model to the user."),
        /* @__PURE__ */ createTextVNode("\n        response"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "render"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'blogposts.hbs'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n        \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    \n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
const _hoisted_125 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Does Claire's implementation contain a security vulnerability or not? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Claire's implementation does contain a security vulnerability. In the HTML code for the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<form>"),
    /* @__PURE__ */ createTextVNode(", it looks like the user can only choose among the fields "),
    /* @__PURE__ */ createBaseVNode("code", null, "keyword"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "title"),
    /* @__PURE__ */ createTextVNode(", but the HTML code can easily be changed client-side by a hacker, so a hacker can easily add "),
    /* @__PURE__ */ createBaseVNode("code", null, "author"),
    /* @__PURE__ */ createTextVNode(" as a third option in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<select>"),
    /* @__PURE__ */ createTextVNode(" element (i.e. "),
    /* @__PURE__ */ createBaseVNode("code", null, '<option value="author">Author</option>'),
    /* @__PURE__ */ createTextVNode("), and that way send a request that would search for blogpost written by a specific user. I.e.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "(in addition to that:",
  -1
  /* HOISTED */
);
const _hoisted_128 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("A hacker can craft her own HTTP request from scratch, and write "),
      /* @__PURE__ */ createBaseVNode("code", null, "author"),
      /* @__PURE__ */ createTextVNode(" instead of "),
      /* @__PURE__ */ createBaseVNode("code", null, "keyword"),
      /* @__PURE__ */ createTextVNode(" or "),
      /* @__PURE__ */ createBaseVNode("code", null, "title"),
      /* @__PURE__ */ createTextVNode(" directly in the HTTP request")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("By using string concatenation in the SQL query, she has created an SQL injection vulnerability, so a hacker can easily modify the "),
      /* @__PURE__ */ createBaseVNode("code", null, "WHERE"),
      /* @__PURE__ */ createTextVNode(" part of the query to perform much more complicated searches than what is intended. Also note that using a placeholder ("),
      /* @__PURE__ */ createBaseVNode("code", null, "?"),
      /* @__PURE__ */ createTextVNode(") instead of "),
      /* @__PURE__ */ createBaseVNode("code", null, '"+field+"'),
      /* @__PURE__ */ createTextVNode(" won't work, since it's not a value in the SQL syntax that should be inserted, and this alone would not solve the problem anyway")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ")",
  -1
  /* HOISTED */
);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for correct answer and valid justification"),
    /* @__PURE__ */ createBaseVNode("li", null, "Only 1.5 points for answers identifying an SQL vulnerability, and suggesting using placeholders solve the problem")
  ],
  -1
  /* HOISTED */
);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-20-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-20-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 20 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_132 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "What is the biggest problem with the code below? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_133 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Any user should be able to anonymously create blogposts.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_134 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "app.js"),
    /* @__PURE__ */ createTextVNode(":")
  ],
  -1
  /* HOISTED */
);
const _hoisted_135 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//..."),
        /* @__PURE__ */ createTextVNode("\n\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "post"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/blogposts/create'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" response")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" title "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("body"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("title\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" content "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("body"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("content\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" errorMessages "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "50"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode(" title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("length"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        errorMessages"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "push"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"The title is too long."'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "5000"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode(" content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("length"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        errorMessages"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "push"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"The content is too long."'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode(" errorMessages"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("length"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        \n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" model "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n            content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n            errorMessages"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n        \n        response"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "render"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"create-blogpost.hbs"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n        \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" query "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"INSERT INTO blogposts (title, content) VALUES (?, ?)"'),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" values "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createTextVNode("title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n    \n    db"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "run"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("query"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" values"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "error"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("error"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            response"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "render"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'internal-server-error.hbs'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "else"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            response"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "redirect"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/blogposts/'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "this"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("lastID"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    \n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "//..."),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
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
const _hoisted_136 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Looking at the code, one can see that it validates the blogpost that should be created, and given the conditional statement with the condition "),
    /* @__PURE__ */ createBaseVNode("code", null, "0 < errorMessages.length"),
    /* @__PURE__ */ createTextVNode(", the intent seems to be to only create the blogpost (store it in the database) if there are no validation errors. However, this if statement contains no "),
    /* @__PURE__ */ createBaseVNode("code", null, "return"),
    /* @__PURE__ */ createTextVNode(" statement, so even if we enter it and send back a response that shows the validation errors to the user, the rest of the code will continue to execute, so we will create blogposts that contains validation errors. That is the biggest problem with the code.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_137 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "(then there exist other problems as well, such as:",
  -1
  /* HOISTED */
);
const _hoisted_138 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("the code will crash if a hacker sends a request without a "),
      /* @__PURE__ */ createBaseVNode("code", null, "title"),
      /* @__PURE__ */ createTextVNode(" or "),
      /* @__PURE__ */ createBaseVNode("code", null, "content"),
      /* @__PURE__ */ createTextVNode(" (that is bad, but no harm done)")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("the error message "),
      /* @__PURE__ */ createBaseVNode("code", null, "The title is too long."),
      /* @__PURE__ */ createTextVNode(" is not enough informative to the user (i.e. it doesn't mention what the allowed maximum length is))")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "50"),
      /* @__PURE__ */ createTextVNode(" and "),
      /* @__PURE__ */ createBaseVNode("code", null, "5000"),
      /* @__PURE__ */ createTextVNode(" have been hardcoded")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_139 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "but none of these are as problematic as creating a blogpost that contains validation errors)",
  -1
  /* HOISTED */
);
const _hoisted_140 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.1 points for saying the database can be spammed")
  ],
  -1
  /* HOISTED */
);
const _hoisted_141 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "database",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#database",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Database")
  ],
  -1
  /* HOISTED */
);
const _hoisted_142 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-21-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-21-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 21 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_143 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Below is the table "),
    /* @__PURE__ */ createBaseVNode("code", null, "humans"),
    /* @__PURE__ */ createTextVNode(" found in an SQLite database (not all rows are shown).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_144 = /* @__PURE__ */ createBaseVNode(
  "table",
  null,
  [
    /* @__PURE__ */ createBaseVNode("thead", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("th", null, "id"),
        /* @__PURE__ */ createBaseVNode("th", null, "name"),
        /* @__PURE__ */ createBaseVNode("th", null, "age")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "1"),
        /* @__PURE__ */ createBaseVNode("td", null, "Alice"),
        /* @__PURE__ */ createBaseVNode("td", null, "10")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "2"),
        /* @__PURE__ */ createBaseVNode("td", null, "Bob"),
        /* @__PURE__ */ createBaseVNode("td", null, "20")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "3"),
        /* @__PURE__ */ createBaseVNode("td", null, "Claire"),
        /* @__PURE__ */ createBaseVNode("td", null, "15")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "...")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_145 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Write an SQL query that sends back all information about all humans with the name "),
    /* @__PURE__ */ createBaseVNode("code", null, "Bob"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_146 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Don't use placeholders like "),
    /* @__PURE__ */ createBaseVNode("code", null, "?"),
    /* @__PURE__ */ createTextVNode(" in your query. You don't need to worry about SQL injections, since this is a pure database question, and has nothing to do with web applications.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_147 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-sql line-numbers-mode",
    "data-ext": "sql"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-sql" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "SELECT"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "*"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "FROM"),
        /* @__PURE__ */ createTextVNode(" humans "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "WHERE"),
        /* @__PURE__ */ createTextVNode(" name "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Bob"'),
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
const _hoisted_148 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("(in SQLite, when testing for equality, both "),
    /* @__PURE__ */ createBaseVNode("code", null, "="),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "=="),
    /* @__PURE__ */ createTextVNode(" can be used)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_149 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deductions for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for missing "),
          /* @__PURE__ */ createBaseVNode("code", null, "*")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "SELECT humans"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "SELECT * FROM")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "'name = Bob'"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "name = 'Bob'")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.5 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "GET humans"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "SELECT * FROM")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.5 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "RETRIEVE humans"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "SELECT * FROM")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.75 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "get ALL"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "SELECT * FROM")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_150 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-22-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-22-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 22 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_151 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Below is the table "),
    /* @__PURE__ */ createBaseVNode("code", null, "humans"),
    /* @__PURE__ */ createTextVNode(" found in an SQLite database (not all rows are shown).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_152 = /* @__PURE__ */ createBaseVNode(
  "table",
  null,
  [
    /* @__PURE__ */ createBaseVNode("thead", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("th", null, "id"),
        /* @__PURE__ */ createBaseVNode("th", null, "name"),
        /* @__PURE__ */ createBaseVNode("th", null, "age")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "1"),
        /* @__PURE__ */ createBaseVNode("td", null, "Alice"),
        /* @__PURE__ */ createBaseVNode("td", null, "10")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "2"),
        /* @__PURE__ */ createBaseVNode("td", null, "Bob"),
        /* @__PURE__ */ createBaseVNode("td", null, "20")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "3"),
        /* @__PURE__ */ createBaseVNode("td", null, "Claire"),
        /* @__PURE__ */ createBaseVNode("td", null, "15")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "..."),
        /* @__PURE__ */ createBaseVNode("td", null, "...")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_153 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Write an SQL query that changes the age of all humans named "),
    /* @__PURE__ */ createBaseVNode("code", null, "Claire"),
    /* @__PURE__ */ createTextVNode(" to "),
    /* @__PURE__ */ createBaseVNode("code", null, "30"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_154 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": Don't use placeholders like "),
    /* @__PURE__ */ createBaseVNode("code", null, "?"),
    /* @__PURE__ */ createTextVNode(" in your query. You don't need to worry about SQL injections, since this is a pure database question, and has nothing to do with web applications.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_155 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-sql line-numbers-mode",
    "data-ext": "sql"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-sql" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "UPDATE"),
        /* @__PURE__ */ createTextVNode(" humans "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "SET"),
        /* @__PURE__ */ createTextVNode(" age "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "30"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "WHERE"),
        /* @__PURE__ */ createTextVNode(" name "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Claire"'),
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
const _hoisted_156 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("(in SQLite, when testing for equality, both "),
    /* @__PURE__ */ createBaseVNode("code", null, "="),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "=="),
    /* @__PURE__ */ createTextVNode(" can be used)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_157 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deduction for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for not using quotes around strings"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for changing the age to "),
          /* @__PURE__ */ createBaseVNode("code", null, "10"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "30")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_158 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "OR:",
  -1
  /* HOISTED */
);
const _hoisted_159 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for a query that contains most required SQL parts, but in wrong order"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deduction for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for using "),
          /* @__PURE__ */ createBaseVNode("code", null, "FROM"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "SET")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_160 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_161 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-23-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-23-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 23 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_162 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Implement the JavaScript function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getSumUntil(excludedTerm)"),
    /* @__PURE__ */ createTextVNode(", that receives an integer as argument, and returns the sum of the integers between "),
    /* @__PURE__ */ createBaseVNode("code", null, "0"),
    /* @__PURE__ */ createTextVNode(" and the integer it receives (including "),
    /* @__PURE__ */ createBaseVNode("code", null, "0"),
    /* @__PURE__ */ createTextVNode(" BUT EXCLUDING the received integer).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_163 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Sample usage:",
  -1
  /* HOISTED */
);
const _hoisted_164 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getSumUntil"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "5"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> 10 (0 + 1 + 2 + 3 + 4)"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getSumUntil"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> 1 (0 + 1)"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getSumUntil"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> 0"),
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
const _hoisted_165 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": You can expect "),
    /* @__PURE__ */ createBaseVNode("code", null, "excludedTerm"),
    /* @__PURE__ */ createTextVNode(" to always be greater than "),
    /* @__PURE__ */ createBaseVNode("code", null, "0"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_166 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getSumUntil"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "excludedTerm"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" sum "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "for"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" term"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode(" term"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("excludedTerm"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode(" term"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "++"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        sum "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+="),
        /* @__PURE__ */ createTextVNode(" term\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(" sum\n    \n"),
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
const _hoisted_167 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that largely works"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deduction for small mistakes: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for using global variable"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for using bad name on variable"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "Function"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "function")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for including "),
          /* @__PURE__ */ createBaseVNode("code", null, "excludedTerm"),
          /* @__PURE__ */ createTextVNode(" in the sum")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_168 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "OR:",
  -1
  /* HOISTED */
);
const _hoisted_169 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for iterating over correct values")
  ],
  -1
  /* HOISTED */
);
const _hoisted_170 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-24-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-24-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 24 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_171 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Implement the JavaScript function "),
    /* @__PURE__ */ createBaseVNode("code", null, "isAnyGreaterThan10(numbers)"),
    /* @__PURE__ */ createTextVNode(", that receives an array with numbers and returns:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_172 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "true"),
      /* @__PURE__ */ createTextVNode(" if at least one of the numbers in the array is greater than "),
      /* @__PURE__ */ createBaseVNode("code", null, "10")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "false"),
      /* @__PURE__ */ createTextVNode(" otherwise")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_173 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Sample usage:",
  -1
  /* HOISTED */
);
const _hoisted_174 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "3"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "7"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "8"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> false"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "5"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "3"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "15"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "5"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> true"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "15"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "51"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "50"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> true"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> false"),
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
const _hoisted_175 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("(if the array is empty, then returning "),
    /* @__PURE__ */ createBaseVNode("code", null, "false"),
    /* @__PURE__ */ createTextVNode(" is what makes most sense, so that's how your implementation should work as well)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_176 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "isAnyGreaterThan10"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "numbers"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "for"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" number "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "of"),
        /* @__PURE__ */ createTextVNode(" numbers"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "10"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode(" number"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "false"),
        /* @__PURE__ */ createTextVNode("\n    \n"),
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
const _hoisted_177 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that largely works"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deduction for smaller mistakes: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "-0.1 points for using global variable"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for iterating over indexes instead of values")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_178 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "OR:",
  -1
  /* HOISTED */
);
const _hoisted_179 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for correctly using the for of loop with good names")
  ],
  -1
  /* HOISTED */
);
const _hoisted_180 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-25-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-25-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 25 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_181 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In JavaScript, a movie with a title, a category and a runtime (in minutes) can be represented as an object like this:",
  -1
  /* HOISTED */
);
const _hoisted_182 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" movie "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Dumb and Dumber"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "category"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"comedy"'),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "106"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_183 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Implement the function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getNumberOfMoviesInCategories(movies, category1, category2)"),
    /* @__PURE__ */ createTextVNode(", which receives an array with movie objects and two categories, and returns the number of movies in respective categories as an array containing the two numbers.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_184 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Sample usage:",
  -1
  /* HOISTED */
);
const _hoisted_185 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getNumberOfMoviesInCategories"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Dumb and Dumber"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "category"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"comedy"'),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "106"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Shrek"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "category"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"comedy"'),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "90"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Titanic"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "category"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"drama"'),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "195"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Shrek 2"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "category"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"comedy"'),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "92"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Love Actually"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "category"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"romantic"'),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "runtimeInMinutes"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "136"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"comedy"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"romantic"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// --> [3, 1]"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_186 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getNumberOfMoviesInCategories"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("movies"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" category1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" category2")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" numberOfMovies1 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" numberOfMovies2 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "for"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" movie "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "of"),
        /* @__PURE__ */ createTextVNode(" movies"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("movie"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("category "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=="),
        /* @__PURE__ */ createTextVNode(" category1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            numberOfMovies1 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("movie"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("category "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=="),
        /* @__PURE__ */ createTextVNode(" category2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            numberOfMovies2 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createTextVNode("numberOfMovies1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" numberOfMovies2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n    \n"),
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
const _hoisted_187 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for an answer that largely works"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deduction for smaller mistakes: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for not returning an array"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for iterating over indexes instead of values")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_188 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-26-1p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-26-1p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 26 (1p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_189 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Alice has created the asynchronous functions "),
    /* @__PURE__ */ createBaseVNode("code", null, "add1(number, callback)"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "add5(number, callback)"),
    /* @__PURE__ */ createTextVNode(":")
  ],
  -1
  /* HOISTED */
);
const _hoisted_190 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "add1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("number"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" callback")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "callback"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("number "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "add5"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("number"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" callback")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "callback"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("number "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "5"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_191 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Implement the function "),
    /* @__PURE__ */ createBaseVNode("code", null, "add6(number, callback)"),
    /* @__PURE__ */ createTextVNode(", that can be used like this:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_192 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "add6"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "10"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "numberPlus6"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    console"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"10 + 6 = "'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode("numberPlus6"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
const _hoisted_193 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In your implementation of "),
    /* @__PURE__ */ createBaseVNode("code", null, "add6"),
    /* @__PURE__ */ createTextVNode(" you may not use any mathematical operation yourself, but you have to call "),
    /* @__PURE__ */ createBaseVNode("code", null, "add1"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "add5"),
    /* @__PURE__ */ createTextVNode(" to compute the new number based on the number you receive.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_194 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "add6"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("number"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" callback")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "add1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("number"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "numberPlus1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "add5"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("numberPlus1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "numberPlus6"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "callback"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("numberPlus6"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_195 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that largely works")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
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
        _hoisted_19
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_20
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_21,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_22,
        _hoisted_23
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_24
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_25
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_26,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_27,
        _hoisted_28
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_29
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_30
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_31,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_32,
        _hoisted_33,
        _hoisted_34,
        _hoisted_35
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_36,
        _hoisted_37
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_38
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_39,
    _hoisted_40,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_41,
        _hoisted_42,
        _hoisted_43
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_44
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_45
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_46,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_47
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_48
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_49
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_50,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_51
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_52
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_53
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_54,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_55,
        _hoisted_56,
        _hoisted_57,
        _hoisted_58,
        _hoisted_59
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_60
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_61
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_62,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_63,
        _hoisted_64
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_65,
        _hoisted_66
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_67
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_68,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_69,
        _hoisted_70
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_71
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_72
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_73,
    _hoisted_74,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_75
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_76,
        _hoisted_77
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_78
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_79,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_80,
        _hoisted_81
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_82
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_83
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_84,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_85,
        _hoisted_86,
        _hoisted_87,
        _hoisted_88
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_89
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_90
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_91,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_92,
        _hoisted_93
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_94
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_95
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_96,
    _hoisted_97,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_98
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_99,
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
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_104
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_105
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_106
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_107,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_108
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_109
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_110
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_111,
    _hoisted_112,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_113
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_114
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_115
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_116,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_117,
        _hoisted_118,
        _hoisted_119,
        _hoisted_120,
        _hoisted_121,
        _hoisted_122,
        _hoisted_123,
        _hoisted_124,
        _hoisted_125
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_126,
        _hoisted_127,
        _hoisted_128,
        _hoisted_129
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_130
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_131,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_132,
        _hoisted_133,
        _hoisted_134,
        _hoisted_135
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_136,
        _hoisted_137,
        _hoisted_138,
        _hoisted_139
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_140
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_141,
    _hoisted_142,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_143,
        _hoisted_144,
        _hoisted_145,
        _hoisted_146
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_147,
        _hoisted_148
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_149
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_150,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_151,
        _hoisted_152,
        _hoisted_153,
        _hoisted_154
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_155,
        _hoisted_156
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_157,
        _hoisted_158,
        _hoisted_159
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_160,
    _hoisted_161,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_162,
        _hoisted_163,
        _hoisted_164,
        _hoisted_165
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_166
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_167,
        _hoisted_168,
        _hoisted_169
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_170,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_171,
        _hoisted_172,
        _hoisted_173,
        _hoisted_174,
        _hoisted_175
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_176
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_177,
        _hoisted_178,
        _hoisted_179
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_180,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_181,
        _hoisted_182,
        _hoisted_183,
        _hoisted_184,
        _hoisted_185
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_186
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_187
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_188,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_189,
        _hoisted_190,
        _hoisted_191,
        _hoisted_192,
        _hoisted_193
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_194
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_195
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const exam20230816_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-08-16.html.vue"]]);
export {
  exam20230816_html as default
};
