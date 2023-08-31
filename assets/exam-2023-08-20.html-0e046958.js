import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="exam-2023-08-20" tabindex="-1"><a class="header-anchor" href="#exam-2023-08-20" aria-hidden="true">#</a> Exam 2023-08-20</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-08-20.</p><hr><p>Start by reading through all questions. Peter will not visit the exam. If you find any question unclear, ask the exam administrator (<em>tentavakt</em> in Swedish) to call Peter for clarification.</p><p>Max score is 25 points.</p><ul><li>For grade 3, 40% of max score (10 points) is required</li><li>For grade 4, 60% of max score (15 points) is required</li><li>For grade 5, 80% of max score (20 points) is required</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. Write proper sentences (spelling, upper/lower case characters, punctuation, etc.). Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions,</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="client-side-js" tabindex="-1"><a class="header-anchor" href="#client-side-js" aria-hidden="true">#</a> Client-Side JS</h2><h3 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h3>', 13);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In client-side JS, name three different methods we can call on the "),
    /* @__PURE__ */ createBaseVNode("code", null, "document"),
    /* @__PURE__ */ createTextVNode(" object to obtain references to HTML elements on the webpage (the method should either return a single reference, or multiple references (i.e. a NodeList/Array)).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "getElementById")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "querySelector")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "querySelectorAll")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.33 points for each correct name "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Only 0.23 if spelling is wrong")
      ])
    ])
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
  "Name two different events that can fire on a webpage and that cause the web browser to send an HTTP request to load a new webpage.",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "click"),
      /* @__PURE__ */ createTextVNode(" (when a "),
      /* @__PURE__ */ createBaseVNode("code", null, "<a>"),
      /* @__PURE__ */ createTextVNode(" element is clicked)")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "submit"),
      /* @__PURE__ */ createTextVNode(" (when a "),
      /* @__PURE__ */ createBaseVNode("code", null, "<form>"),
      /* @__PURE__ */ createTextVNode(" element is submitted)")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct event name")
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain when and how many times the event "),
    /* @__PURE__ */ createBaseVNode("code", null, "DOMContentLoaded"),
    /* @__PURE__ */ createTextVNode(" fires on a webpage.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "DOMContentLoaded"),
    /* @__PURE__ */ createTextVNode(" event is fired by the web browser each time it has loaded a new webpage from the HTML code in an HTTP response, so it fires once for each webpage that is shown.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 point for when"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for how many times")
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In a frontend framework of your choice (name which one you choose), implement a component that works like this:",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "The one using the component should be able to pass an array of integers to it"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("If the array is empty, the component should display an HTML paragraph with the text "),
      /* @__PURE__ */ createBaseVNode("code", null, "No integers")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("If the array is not empty, the component should display the integers in an HTML ordered list: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Each integer should be displayed in its own HTML list item"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Each integer should be displayed as it is (e.g. "),
          /* @__PURE__ */ createBaseVNode("code", null, "5"),
          /* @__PURE__ */ createTextVNode(" should be displayed as "),
          /* @__PURE__ */ createBaseVNode("code", null, "5"),
          /* @__PURE__ */ createTextVNode("), except "),
          /* @__PURE__ */ createBaseVNode("code", null, "0"),
          /* @__PURE__ */ createTextVNode(", which should be displayed as the text "),
          /* @__PURE__ */ createBaseVNode("code", null, "Zero")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In Svelte:",
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode(" integers\n    \n")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("script")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n\n{#if integers.length == 0}\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("No integers"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n{:else}\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("ol")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        {#each integers as integer}\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("li")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n                {#if integer == 0}\n                    Zero\n                {:else}\n                    {integer}\n                {/if}\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("li")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        {/each}\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("ol")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n{/if}\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for correct prop"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for using if correct"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for using loop correct"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for using else correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deductions for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for using "),
          /* @__PURE__ */ createBaseVNode("code", null, "array.count"),
          /* @__PURE__ */ createTextVNode("/"),
          /* @__PURE__ */ createBaseVNode("code", null, "array.isEmpty"),
          /* @__PURE__ */ createTextVNode(" instead of "),
          /* @__PURE__ */ createBaseVNode("code", null, "array.length")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for using extra variables not needed/not used"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for not using else, but inverted condition in an extra if"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.5 points for not naming which framework that is used"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.5 points for always showing "),
          /* @__PURE__ */ createBaseVNode("code", null, "<ul>")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("In Svelte: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.1 points for "),
              /* @__PURE__ */ createBaseVNode("code", null, "of"),
              /* @__PURE__ */ createTextVNode(" instead of "),
              /* @__PURE__ */ createBaseVNode("code", null, "as"),
              /* @__PURE__ */ createTextVNode(" in "),
              /* @__PURE__ */ createBaseVNode("code", null, "#each")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for not using the "),
              /* @__PURE__ */ createBaseVNode("code", null, "{ ... }"),
              /* @__PURE__ */ createTextVNode(" syntax in Svelte")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for not using "),
              /* @__PURE__ */ createBaseVNode("code", null, "#each"),
              /* @__PURE__ */ createTextVNode(" correct")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("-0.25 points for using "),
              /* @__PURE__ */ createBaseVNode("code", null, "$"),
              /* @__PURE__ */ createTextVNode(" in front of variable name when it's not a store")
            ])
          ])
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Match each status code to its corresponding reason phrase.",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Status codes:",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "200"),
    /* @__PURE__ */ createBaseVNode("li", null, "201"),
    /* @__PURE__ */ createBaseVNode("li", null, "204"),
    /* @__PURE__ */ createBaseVNode("li", null, "404"),
    /* @__PURE__ */ createBaseVNode("li", null, "500")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Reason Phrases:",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Internal Server Error"),
    /* @__PURE__ */ createBaseVNode("li", null, "No Content"),
    /* @__PURE__ */ createBaseVNode("li", null, "Not Found"),
    /* @__PURE__ */ createBaseVNode("li", null, "Created"),
    /* @__PURE__ */ createBaseVNode("li", null, "OK")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You will get:",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for all correct")
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "200 - OK"),
    /* @__PURE__ */ createBaseVNode("li", null, "201 - Created"),
    /* @__PURE__ */ createBaseVNode("li", null, "204 - No Content"),
    /* @__PURE__ */ createBaseVNode("li", null, "404 - Not Found"),
    /* @__PURE__ */ createBaseVNode("li", null, "500 - Internal Server Error")
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for all correct")
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In HTTP, explain when the "),
    /* @__PURE__ */ createBaseVNode("code", null, "Accept"),
    /* @__PURE__ */ createTextVNode(" header can be used, what it represents, and give an example of a value it can have, and explain what using the header with that value means.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "Accept"),
    /* @__PURE__ */ createTextVNode(" header can be used in an HTTP request to indicate which data format the client wants the body in the HTTP response to be written in. For example, the value "),
    /* @__PURE__ */ createBaseVNode("code", null, "application/json"),
    /* @__PURE__ */ createTextVNode(" would mean that the body in the response should be written in JSON format.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for used in requests"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for what it represents"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points sample value"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for what sample value means")
  ],
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-7-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-7-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 7 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "On a backend storing information about species, the following relational database table is used to store the species:",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "table",
  null,
  [
    /* @__PURE__ */ createBaseVNode("thead", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("th", null, "id"),
        /* @__PURE__ */ createBaseVNode("th", null, "name"),
        /* @__PURE__ */ createBaseVNode("th", null, "numberOfLegs")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "1"),
        /* @__PURE__ */ createBaseVNode("td", null, "Snake"),
        /* @__PURE__ */ createBaseVNode("td", null, "0")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "2"),
        /* @__PURE__ */ createBaseVNode("td", null, "Dog"),
        /* @__PURE__ */ createBaseVNode("td", null, "4")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "3"),
        /* @__PURE__ */ createBaseVNode("td", null, "Human"),
        /* @__PURE__ */ createBaseVNode("td", null, "2")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "4"),
        /* @__PURE__ */ createBaseVNode("td", null, "Cat"),
        /* @__PURE__ */ createBaseVNode("td", null, "4")
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
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Your task is to design a REST API clients can use to update a species with a specific "),
    /* @__PURE__ */ createBaseVNode("code", null, "id"),
    /* @__PURE__ */ createTextVNode(". The following validation rules should exist:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "name"),
      /* @__PURE__ */ createTextVNode(" must contain at least 1 character")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Two different species with the same "),
      /* @__PURE__ */ createBaseVNode("code", null, "name"),
      /* @__PURE__ */ createTextVNode(" may not exist")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "numberOfLegs"),
      /* @__PURE__ */ createTextVNode(" must be 0 or more")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Someone who implements or uses your API should be able to get all details they need to know about the API from your design, so be sure to mention all relevant details they need to use/implement it.",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": You don't need to worry about authorization in this task; any (anonymous) client should be allowed to update any species.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
    /* @__PURE__ */ createTextVNode(": If you think you are missing some important information you have to know to be able to carry out the task in a good way, feel free to make your own assumptions about that information, but clearly state which those assumptions are in your answer.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Words "),
    /* @__PURE__ */ createBaseVNode("code", null, "WRITTEN_LIKE_THIS"),
    /* @__PURE__ */ createTextVNode(" are placeholders for actual values.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Request:",
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("URI: "),
      /* @__PURE__ */ createBaseVNode("code", null, "/species/THE_ACTUAL_ID")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Method: "),
      /* @__PURE__ */ createBaseVNode("code", null, "PUT")
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
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"id"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(" THE_ACTUAL_ID"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"name"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_NAME"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"numberOfLegs"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"THE_ACTUAL_NUMBER_OF_LEGS"'),
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
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Possible responses:",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
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
      /* @__PURE__ */ createTextVNode("If there doesn't exist a species resource with "),
      /* @__PURE__ */ createBaseVNode("code", null, "THE_ACTUAL_ID"),
      /* @__PURE__ */ createTextVNode(": "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "404")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("If the resource was successfully updated "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "204")
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
                  /* @__PURE__ */ createBaseVNode("code", null, "NAME_TOO_SHORT"),
                  /* @__PURE__ */ createTextVNode(" (name must contain at least 1 character)")
                ]),
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "NAME_ALREADY_USED"),
                  /* @__PURE__ */ createTextVNode(" (a species with the new name already exist)")
                ]),
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "NUMBER_OF_LEGS_TOO_FEW"),
                  /* @__PURE__ */ createTextVNode(" (must be at least 0)")
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for request"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for handling success response"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for handling not found response"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for validation errors response")
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Point deduction:",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name and describe each constraint REST consists of.",
  -1
  /* HOISTED */
);
const _hoisted_65 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Roy Thomas Fielding's",
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Architectural Styles and the Design of Network-based Software Architectures",
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct description")
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "question-9-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-9-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 9 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Alice is assigned the task to design a REST API clients can use to login and then create new blogposts belonging to that account. She decides that when a user logs in, the client obtains an access token ("),
    /* @__PURE__ */ createBaseVNode("code", null, "THE.ACCESS.TOKEN"),
    /* @__PURE__ */ createTextVNode(") containing the user's account id, which can be used to act on the behalf of that user. Then when the user wants to create a new blogpost belonging to her own account, the client sends an HTTP "),
    /* @__PURE__ */ createBaseVNode("code", null, "POST"),
    /* @__PURE__ */ createTextVNode(" request to "),
    /* @__PURE__ */ createBaseVNode("code", null, "/blogposts"),
    /* @__PURE__ */ createTextVNode(" with the headers "),
    /* @__PURE__ */ createBaseVNode("code", null, "Authorization: Bearer THE.ACCESS.TOKEN"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "Content-Type: application/json"),
    /* @__PURE__ */ createTextVNode(", and in the body pass "),
    /* @__PURE__ */ createBaseVNode("code", null, '{"title": "The actual title", "content": "The blogpost text."}'),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Is this a good or bad design? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "It's a bad design, because the resource in the body of the request contains no information about which account the blogpost should belong to. In HTTP, the body should contain the entire resource, so if one for example logs the URI, method and the body on the server-side and look at it later, one should be able to understand what the entire request is about.",
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Alice is probably thinking the account id in the access token can be used to figure out which account the blogpost should belong to, but access tokens should only be used for authorization, and not containing a part of a resource, so the body should still contain a value that indicates which account the blogpost should belong to, and the account id in the access token should only be used to figure out if the user is allowed to create a blogpost belonging to that account (e.g. all users may create a blogpost belonging to their own account, but admins may also create a blogpost belonging to someone else's account, so one can't blindly use the account id in the access token).",
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for correct answer and access token VS body justification")
  ],
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Describe the parts a JWT consists of. Then also explain why JWTs are secure to use (why a hacker can't fool a server by changing the data in the token or by creating her own token).",
  -1
  /* HOISTED */
);
const _hoisted_77 = {
  href: "https://datatracker.ietf.org/doc/html/rfc7519#section-3.1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each (somewhat) correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.50 points for each correct explanation "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "only 0.25 points if explanation lacks details or contains errors, but to some degree is correct")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "0.75 points for explaining why they are secure")
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When adding login functionality to a REST API, explain why it's usually not enough for the server to only send back an Access Token, but the server also needs to send back an ID Token.",
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When a user logs in, the client usually need to know information about the account the user logged in to, such as the account's id. Without that information, it would for example be impossible for the client to send requests and display information about resources belonging to that account, since the client can't identify the account.",
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Access Token are not designed to tell this information to the client, since they are only meant to be used for authorization. When implementing Access Tokens as JWT, it's possible for client to open up the Access Token and read information from it, but it's not something the client should rely on. For example, in the future, the server might change how it implements Access Token, so they are no longer implemented as JWT, and then the client code will no longer work.",
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, instead, server usually send back an ID Token with the explicit purpose to contain information about the account the user logged in to, and is intended to be opened by the clients.",
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct explanation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Does an ID Token has to be implemented as a JWT? Justify your answer",
  -1
  /* HOISTED */
);
const _hoisted_87 = {
  href: "https://openid.net/specs/openid-connect-core-1_0.html#IDToken",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "The ID Token is represented as a JSON Web Token (JWT).")
  ],
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
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If client-side JS code on a webpage tries to send an HTTP "),
    /* @__PURE__ */ createBaseVNode("code", null, "DELETE"),
    /* @__PURE__ */ createTextVNode(" request, will that always trigger a CORS pre-flight request? Justify your answer.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("No, not always, not, for example, if the "),
    /* @__PURE__ */ createBaseVNode("code", null, "DELETE"),
    /* @__PURE__ */ createTextVNode(" request is sent to the server as the origin of the client-side JS, because then it's not a Cross-site request, and the Same-Origin Policy won't stop the request from being sent to begin with, so CORS is not needed.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct answer and valid justification")
  ],
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Explain what port mapping in Docker is, and give a practical example of when you need to use it.",
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "All containers in Docker are running in an isolated environment, so no application on the host computer can communicate with an application in the container. By using port mapping, you can tell Docker that one port on the host computer should lead to one port in the container, and then the host computer can use this to communicate with an app in the container.",
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "This is for example used when the container runs a web application, and you want to be able to send HTTP requests to it from a web browser running on the host computer.",
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for what it is"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for practical example")
  ],
  -1
  /* HOISTED */
);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain what the Docker instruction "),
    /* @__PURE__ */ createBaseVNode("code", null, "COPY"),
    /* @__PURE__ */ createTextVNode(" can be used for, and explain when that instruction is executed.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("As all Docker instructions, the "),
    /* @__PURE__ */ createBaseVNode("code", null, "COPY"),
    /* @__PURE__ */ createTextVNode(" instruction is executed when you build a Docker image. It instructs Docker to copy a file on the file system on the host computer to the file system that will exists in the container running the image.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for what the instruction does"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for when it is executed")
  ],
  -1
  /* HOISTED */
);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Explain how horizontal scaling works.",
  -1
  /* HOISTED */
);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When a web application runs on a server and it receives more HTTP requests than it has time to handle, you can scale the application horizontally. That means you run the application on multiple servers behind a server that act as a load balancer. All clients send their HTTP requests to the load balancer, and the load balancer then forwards and distributes the HTTP requests among the servers running the web application, which carryout out the requests they receive and send back responses to the clients.",
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for application running on multiple servers"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for explaining that the workload in distributed among the server"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for explaining how the workload is distributed (load balancer)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_111 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getBlogpostsByAccount()"),
    /* @__PURE__ */ createTextVNode(" should receive an account object as an argument, and it returns a promise that resolves to a JS array with objects representing blogposts that account has created. If the blogposts can't be retrieved, the promise is rejected to a JS error object containing information about what went wrong.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Implement the function "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountWithBlogpostsByUsername()"),
    /* @__PURE__ */ createTextVNode(", that receives the username of an account as argument, and returns a promise that resolves to the account object with that username that also contains the property "),
    /* @__PURE__ */ createBaseVNode("code", null, "blogposts"),
    /* @__PURE__ */ createTextVNode(" that stores an array with all the blogposts created by that account.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If you get an error from "),
    /* @__PURE__ */ createBaseVNode("code", null, "getAccountByUsername()"),
    /* @__PURE__ */ createTextVNode(" or "),
    /* @__PURE__ */ createBaseVNode("code", null, "getBlogpostsByAccount()"),
    /* @__PURE__ */ createTextVNode(", then your own promise should be rejected with the string "),
    /* @__PURE__ */ createBaseVNode("code", null, '"getDataError"'),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getAccountWithBlogpostsByUsername"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "username"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "try"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" account "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "await"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getAccountByUsername"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("username"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		account"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("blogposts "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "await"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getBlogpostsByAccount"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("account"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(" account\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "catch"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("error"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "throw"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"getDataError"'),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
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
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for a solution that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point deductions for errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for returning "),
          /* @__PURE__ */ createBaseVNode("code", null, "{account, blogposts}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for retuning error instead of throwing"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.25 points for not using "),
          /* @__PURE__ */ createBaseVNode("code", null, '"getDataError"'),
          /* @__PURE__ */ createTextVNode(" as the rejected value")
        ])
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
    _hoisted_26,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_27,
        _hoisted_28
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_29,
        _hoisted_30
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_31
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_32,
    _hoisted_33,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_34,
        _hoisted_35,
        _hoisted_36,
        _hoisted_37,
        _hoisted_38,
        _hoisted_39,
        _hoisted_40
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_41
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_42
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_43,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
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
        _hoisted_50,
        _hoisted_51,
        _hoisted_52,
        _hoisted_53,
        _hoisted_54
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_55,
        _hoisted_56,
        _hoisted_57,
        _hoisted_58,
        _hoisted_59
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_60,
        _hoisted_61,
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
          createTextVNode("See "),
          createBaseVNode("a", _hoisted_65, [
            createTextVNode("Chapter 5.1 Deriving REST"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in "),
          _hoisted_66,
          createTextVNode(" dissertation "),
          _hoisted_67,
          createTextVNode(".")
        ])
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
        _hoisted_70,
        _hoisted_71
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_72,
        _hoisted_73
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_74
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_75,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_76
      ]),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          createTextVNode("See for example "),
          createBaseVNode("a", _hoisted_77, [
            createTextVNode("Chapter 3.1 in the JWT Specification"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(".")
        ])
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
        _hoisted_80
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_81,
        _hoisted_82,
        _hoisted_83
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_84
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_85,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_86
      ]),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          createTextVNode("Yes, the specification for "),
          createBaseVNode("a", _hoisted_87, [
            createTextVNode("OpenID Connect"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" states:")
        ]),
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
        _hoisted_92
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_93
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_94,
    _hoisted_95,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_96
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_97,
        _hoisted_98
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_99
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_100,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_101
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_102
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_103
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_104,
    _hoisted_105,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_106
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_107
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_108
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_109,
    _hoisted_110,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_111,
        _hoisted_112,
        _hoisted_113,
        _hoisted_114,
        _hoisted_115
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_116
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_117
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const exam20230820_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-08-20.html.vue"]]);
export {
  exam20230820_html as default
};
