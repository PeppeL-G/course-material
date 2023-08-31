import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, f as createStaticVNode, a as createBaseVNode, b as createTextVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="exam-2020-08-13" tabindex="-1"><a class="header-anchor" href="#exam-2020-08-13" aria-hidden="true">#</a> Exam 2020-08-13</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2020-08-13.</p><hr><p>Start by reading through all questions.</p><p>Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use anything else except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><hr><h2 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h2>', 13);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Does it make sense to use the body in an HTTP GET request? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-2-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-2-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 2 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Alice is assigned the task to design a REST API clients can use to login and then create new blogposts belonging to that account. She decides that when a user logs in, the client obtains an access token containing the user's account id, which can be used to act on the behalf of that user. Then when the user wants to create a new blogpost belonging to her own account, the client sends an HTTP "),
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
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Is this a good or bad design? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain what the HTTP headers "),
    /* @__PURE__ */ createBaseVNode("code", null, "Accept"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
    /* @__PURE__ */ createTextVNode(" are used for respectively. Which of them can be used in requests and responses respectively?")
  ],
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Match each HTTP status code with its reason phrase.",
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Status codes:",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "201"),
    /* @__PURE__ */ createBaseVNode("li", null, "401"),
    /* @__PURE__ */ createBaseVNode("li", null, "501"),
    /* @__PURE__ */ createBaseVNode("li", null, "204"),
    /* @__PURE__ */ createBaseVNode("li", null, "200")
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Reason phrases:",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "No Content"),
    /* @__PURE__ */ createBaseVNode("li", null, "OK"),
    /* @__PURE__ */ createBaseVNode("li", null, "Created"),
    /* @__PURE__ */ createBaseVNode("li", null, "Not Implemented"),
    /* @__PURE__ */ createBaseVNode("li", null, "Unauthorized")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-5-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-5-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 5 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Explain what the middlewares from the npm package body-parser do, and describe how one of them works. Try to be as detailed as possible. There is of course no need to mention any code.",
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A REST architecture consists of a set of "),
    /* @__PURE__ */ createBaseVNode("em", null, "architectural constraints"),
    /* @__PURE__ */ createTextVNode(", as described by Roy Thomas Fielding. Explain what an architectural constraint is.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name and describe each architectural constraint REST consists of.",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-8-1-5p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-8-1-5p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 8 (1.5p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Here is a short story:",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, `Alice is going to an amusement park for adults only (only people older than 18 years are allowed). At the entrance she needs to show her driver license to prove that she's older than 18 years, and then she pays for a "ride pass" (a piece of paper you put around your wrist giving you free access to all the fun things inside the amusement park). She receives her ride pass and put it around her wrist. Then she goes to a merry-go-around, show her ride pass to the responsible personnel there, which let her onboard the merry-go-around, and then she have the time of her life.`)
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In this story, we have one identity and places where authentication and authorization takes place. Which are (all of) them? You only need to mention those that are explicitly mentioned in the text.",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Willy is assigned the task to design a REST API clients can use to compute mathematical expressions consisting of one operator (+, -, * or /) and two numbers. He decides that clients should send a "),
    /* @__PURE__ */ createBaseVNode("code", null, "POST"),
    /* @__PURE__ */ createTextVNode(" request to "),
    /* @__PURE__ */ createBaseVNode("code", null, "/compute"),
    /* @__PURE__ */ createTextVNode(", add the header "),
    /* @__PURE__ */ createBaseVNode("code", null, "Content-Type: application/json"),
    /* @__PURE__ */ createTextVNode(" and then in the body pass "),
    /* @__PURE__ */ createBaseVNode("code", null, '{"leftOperand": 123, "operator": "+", "rightOperand": 321}'),
    /* @__PURE__ */ createTextVNode(" ("),
    /* @__PURE__ */ createBaseVNode("code", null, "123"),
    /* @__PURE__ */ createTextVNode(", "),
    /* @__PURE__ */ createBaseVNode("code", null, '"+"'),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "321"),
    /* @__PURE__ */ createTextVNode(" are sample values). The response would then contain the result of the mathematical expression (i.e. a number).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "This design is quite poor. Explain to Willy what he has done wrong and suggest a better design.",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-10-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-10-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 10 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain what "),
    /* @__PURE__ */ createBaseVNode("em", null, "Cross-Origin Resources Sharing"),
    /* @__PURE__ */ createTextVNode(" is and describe when it is used and how it works.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-11-3p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-11-3p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 11 (3p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "JWT tokens are self-contained. That means that the data the token represents is stored in the token itself. Therefore, when a client obtains an access token that has been implemented as a JWT token, the client can read the data in the token, and even change it, for example modify the data in it to mean that the client has access to resources it shouldn't have access to. But the server has a way to discover if the client has modified the token. Explain how the server does that by describing a detailed example.",
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-12-1-5p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-12-1-5p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 12 (1.5p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When logging in over a REST API, explain why it's most often not is enough to only receive an access token, but you also need to receive an ID token.",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-13-4p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-13-4p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 13 (4p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "OAuth 2.0 defines four different ways a client can obtain an access token. Explain how each of them works and when you are supposed to use which one.",
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Must an ID Token from OpenID Connect be self-contained? Justify your answer.",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "How can clients obtain an ID Token from a server that supports OpenID Connect?",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In relational databases, explain why it's better to use a foreign key constraint instead of first sending a query to check if a constraint is fulfilled and then go ahead and execute the actual query you wanted to send if the constraint was fulfilled. Also show an example of this with actual queries.",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The code below is taken from an Express application making use of an SQLite database.",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"/humans"'),
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
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" data "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n  db"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "all"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"SELECT * FROM humans"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("error"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" fetchedHumans")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// For simplicity, let us assume no database error occurred."),
        /* @__PURE__ */ createTextVNode("\n    data"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("humans "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" fetchedHumans\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n  response"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "json"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("data"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("humans"),
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
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The response back to the client never includes any human resources, although the database contains plenty of them. Why? Also, rewrite the code so it works as intended.",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExamQuestion = resolveComponent("ExamQuestion");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_14
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_15,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_16,
        _hoisted_17
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_18,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_19
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_20,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_21,
        _hoisted_22,
        _hoisted_23,
        _hoisted_24,
        _hoisted_25
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_26,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_27
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_28,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_29
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_30,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_31
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_32,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_33,
        _hoisted_34,
        _hoisted_35
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_36,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_37,
        _hoisted_38
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_39,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_40
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_41,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
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
      _: 1
      /* STABLE */
    }),
    _hoisted_45,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_46
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_47,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_48
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_49,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_50
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_51,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_52
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_53,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_54,
        _hoisted_55,
        _hoisted_56
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const exam20200813_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2020-08-13.html.vue"]]);
export {
  exam20200813_html as default
};
