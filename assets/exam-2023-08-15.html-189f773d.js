import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="exam-2023-08-15" tabindex="-1"><a class="header-anchor" href="#exam-2023-08-15" aria-hidden="true">#</a> Exam 2023-08-15</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2023-08-15.</p><hr><p>If you need clarification of any question, ask the exam personnel (tentavakt in Swedish) to call Peter, and we can discuss it over the phone.</p><p>Max score is 30 points:</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use any aids except:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are not understandable will not receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-2p" tabindex="-1"><a class="header-anchor" href="#question-1-2p" aria-hidden="true">#</a> Question 1 (2p)</h2>', 12);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name the method one should use in HTTP when the request is about:",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Retrieving a resource"),
    /* @__PURE__ */ createBaseVNode("li", null, "Updating a resource"),
    /* @__PURE__ */ createBaseVNode("li", null, "Creating a new resource"),
    /* @__PURE__ */ createBaseVNode("li", null, "Deleting a resource")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You will get:",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct name (spelling must be correct)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "GET")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "PUT")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "POST")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "DELETE")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct name (spelling must be correct)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Is the URI "),
    /* @__PURE__ */ createBaseVNode("code", null, "/movies/search"),
    /* @__PURE__ */ createTextVNode(" a good or bad URI to use when a client needs to be able to search for different movies, and only get back the movies that matches the search criteria? Justify your answer.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The URI should only identify the resources the request is about. The "),
    /* @__PURE__ */ createBaseVNode("code", null, "search"),
    /* @__PURE__ */ createTextVNode(" part does not contribute to identifying any resources since it's a verb, so that should not be part of the URI, hence it's bad.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("1 point for explaining that "),
      /* @__PURE__ */ createBaseVNode("code", null, "search"),
      /* @__PURE__ */ createTextVNode(" is bad")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Explain when the "),
    /* @__PURE__ */ createBaseVNode("code", null, "Accept"),
    /* @__PURE__ */ createTextVNode(" header is used in HTTP. Also, give one example of a value it can have, and explain how that value should be interpreted.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "Accept"),
    /* @__PURE__ */ createTextVNode(" header is used in HTTP requests. It can, for example, have the value "),
    /* @__PURE__ */ createBaseVNode("code", null, "application/json"),
    /* @__PURE__ */ createTextVNode(", which means that the client would like to get back the body of the response in JSON format.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.33 points for used in request"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.33 points for sample value "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "(0.23 points if provided value is too far from correct value)")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "0.33 points for explanation of sample value")
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Name 2 different headers that exist in HTTP in addition to "),
    /* @__PURE__ */ createBaseVNode("code", null, "Accept"),
    /* @__PURE__ */ createTextVNode(", and for each of them also write a value they can have.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You will get:",
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct header name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each valid header value")
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
      /* @__PURE__ */ createTextVNode(": "),
      /* @__PURE__ */ createBaseVNode("code", null, "application/json")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "Location"),
      /* @__PURE__ */ createTextVNode(": "),
      /* @__PURE__ */ createBaseVNode("code", null, "/movies/123")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct header name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each valid header value")
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Write the HTTP status code one should use in a response when:",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "The server successfully carried out the request, and a new resource was created"),
    /* @__PURE__ */ createBaseVNode("li", null, "The URI in the request identifies a resource that doesn't exist"),
    /* @__PURE__ */ createBaseVNode("li", null, "The server successfully carried out the request, and the requested resource is being sent back in the body of the response"),
    /* @__PURE__ */ createBaseVNode("li", null, "The server can't carry out the request because something on the server didn't work as expected (for example the web app couldn't read from a file on the file system, which it must be able to do to carry out the request)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You will get:",
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct status code")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "201"),
    /* @__PURE__ */ createBaseVNode("li", null, "404"),
    /* @__PURE__ */ createBaseVNode("li", null, "200"),
    /* @__PURE__ */ createBaseVNode("li", null, "500")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for each correct status code")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "REST is built upon a set of constraints. In this context, give a general description of what a constraint is.",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A constraint means something that is limiting us in how to build the system. It prevents us from building the system in a bad way. The more of these constraints we use, the more of the bad ways of building the system we will avoid, and it is more likely that we will end up with a good system.",
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for a correct description")
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Name and describe each constraint REST consists of.",
  -1
  /* HOISTED */
);
const _hoisted_46 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Architectural Styles and the Design of Network-based Software Architectures",
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct description")
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "OR (if the code-on-demand constraint is not mentioned):",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct name"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each correct description"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for overall very good, accurate and correct descriptions")
  ],
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "On a backend storing information about species, the following SQLite table is used to store the species:",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "As you can see, there are many species, and some of them have the same number of legs.",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Your task is to design the REST API clients can use to update a species with a specific "),
    /* @__PURE__ */ createBaseVNode("code", null, "id"),
    /* @__PURE__ */ createTextVNode(". The following validation rules should exist:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "name"),
      /* @__PURE__ */ createTextVNode(" must contain at least 1 character")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "numberOfLegs"),
      /* @__PURE__ */ createTextVNode(" must be 0 or more")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You need to design the HTTP request and the HTTP responses, including all details another programmer needs to know to be able to use your API without having to look at implementation details on the server.",
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Words written "),
    /* @__PURE__ */ createBaseVNode("code", null, "IN_THIS_FORMAT"),
    /* @__PURE__ */ createTextVNode(" are placeholders for actual values:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The request: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Method: "),
          /* @__PURE__ */ createBaseVNode("code", null, "PUT")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("URI: "),
          /* @__PURE__ */ createBaseVNode("code", null, "/species/THE_ID")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Headers: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Host"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "THE_HOST")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Accept"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "application/json")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "application/json")
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createBaseVNode("code", null, "Content-Length"),
              /* @__PURE__ */ createTextVNode(": "),
              /* @__PURE__ */ createBaseVNode("code", null, "THE_CONTENT_LENGTH")
            ])
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Body: Content: "),
          /* @__PURE__ */ createBaseVNode("code", null, '{"id": "THE_ID", "name": "THE_NAME", "numberOfLegs": THE_NUMBER_OF_LEGS}')
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The response if something doesn't work on the server, so the request can't be carried out: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "500")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The response if no resource with the given id exists: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "404")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The response if there are validation errors: "),
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
              /* @__PURE__ */ createBaseVNode("code", null, "THE_CONTENT_LENGTH")
            ])
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Body: "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("Content: "),
              /* @__PURE__ */ createBaseVNode("code", null, '["ERROR_CODE_1", "ERROR_CODE_2", ...]')
            ]),
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("Possible error codes: "),
              /* @__PURE__ */ createBaseVNode("ul", null, [
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "nameTooShort")
                ]),
                /* @__PURE__ */ createBaseVNode("li", null, [
                  /* @__PURE__ */ createBaseVNode("code", null, "numberOfLegsTooFew")
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The response if the resource is successfully updated: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("Status code: "),
          /* @__PURE__ */ createBaseVNode("code", null, "204")
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
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("For each operation: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for request method"),
        /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for request URI"),
        /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for at least 2 relevant request headers"),
        /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for request body"),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("0.50 points for two or three of "),
          /* @__PURE__ */ createBaseVNode("code", null, "500"),
          /* @__PURE__ */ createTextVNode(", "),
          /* @__PURE__ */ createBaseVNode("code", null, "404"),
          /* @__PURE__ */ createTextVNode(" and "),
          /* @__PURE__ */ createBaseVNode("code", null, "204"),
          /* @__PURE__ */ createTextVNode("/"),
          /* @__PURE__ */ createBaseVNode("code", null, "200")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("0.25 points for one of "),
          /* @__PURE__ */ createBaseVNode("code", null, "500"),
          /* @__PURE__ */ createTextVNode(", "),
          /* @__PURE__ */ createBaseVNode("code", null, "404"),
          /* @__PURE__ */ createTextVNode(" and "),
          /* @__PURE__ */ createBaseVNode("code", null, "204"),
          /* @__PURE__ */ createTextVNode("/"),
          /* @__PURE__ */ createBaseVNode("code", null, "200")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("0.25 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "400"),
          /* @__PURE__ */ createTextVNode(" response "),
          /* @__PURE__ */ createBaseVNode("ul", null, [
            /* @__PURE__ */ createBaseVNode("li", null, [
              /* @__PURE__ */ createTextVNode("0.25 points for much additional info about "),
              /* @__PURE__ */ createBaseVNode("code", null, "400"),
              /* @__PURE__ */ createTextVNode(" response")
            ])
          ])
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point reductions for small mistakes: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "/animals"),
          /* @__PURE__ */ createTextVNode(" (much better to be consistent and call it "),
          /* @__PURE__ */ createBaseVNode("code", null, "species"),
          /* @__PURE__ */ createTextVNode(")")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "On a backend storing information about blogposts, the following SQLite table is used to store the blogposts:",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "table",
  null,
  [
    /* @__PURE__ */ createBaseVNode("thead", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("th", null, "id"),
        /* @__PURE__ */ createBaseVNode("th", null, "title"),
        /* @__PURE__ */ createBaseVNode("th", null, "content")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "1"),
        /* @__PURE__ */ createBaseVNode("td", null, "HTML"),
        /* @__PURE__ */ createBaseVNode("td", null, "HTML is fun.")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "2"),
        /* @__PURE__ */ createBaseVNode("td", null, "CSS"),
        /* @__PURE__ */ createBaseVNode("td", null, "CSS is very fun!")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The backend is implemented in Express, and the following code is used to send back all blogposts:",
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/blogposts/:id'"),
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
        /* @__PURE__ */ createTextVNode(" id "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("params"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id\n    \n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" query "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"SELECT * FROM blogposts WHERE id = ?"'),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" values "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n    \n    db"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("query"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" values"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("error"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" blogpost")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        \n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Let us assume no error occurs."),
        /* @__PURE__ */ createTextVNode("\n        \n        response"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "json"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("blogpost"),
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
    /* @__PURE__ */ createTextVNode("Write the body the HTTP response would contain for the request "),
    /* @__PURE__ */ createBaseVNode("code", null, "GET /blogposts/2"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-json line-numbers-mode",
    "data-ext": "json"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-json" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"id"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"title"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"CSS"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"content"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"CSS is very fun!"'),
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
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for an answer that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Small point reductions for smaller errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "-1 point for returning an array with an object"),
        /* @__PURE__ */ createBaseVNode("li", null, "-0.25 points for keys not being surrounded by quotes at all")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Express comes with some middlewares built into it, such as "),
    /* @__PURE__ */ createBaseVNode("code", null, "express.json()"),
    /* @__PURE__ */ createTextVNode(" (previously "),
    /* @__PURE__ */ createBaseVNode("code", null, "bodyParser.json()"),
    /* @__PURE__ */ createTextVNode("). Explain how one of these built in middlewares work. Choose whichever one you want.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "express.json()"),
    /* @__PURE__ */ createTextVNode(" middleware will check if the request contains a body. If so, it will check if the "),
    /* @__PURE__ */ createBaseVNode("code", null, "Content-Type"),
    /* @__PURE__ */ createTextVNode(" header has the value "),
    /* @__PURE__ */ createBaseVNode("code", null, "application/json"),
    /* @__PURE__ */ createTextVNode(". If so, it will parse the body in the JSON format, and assign the parsed value to "),
    /* @__PURE__ */ createBaseVNode("code", null, "request.body"),
    /* @__PURE__ */ createTextVNode(", so the middlewares next in the chain can access the parsed value that way.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In all cases, it will invoke end with invoking the next middleware in the chain.",
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.5 points for "),
      /* @__PURE__ */ createBaseVNode("code", null, "Content-Type")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.5 points for "),
      /* @__PURE__ */ createBaseVNode("code", null, "application/json")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.5 points for "),
      /* @__PURE__ */ createBaseVNode("code", null, "request.body")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for invoking next middleware")
  ],
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-11-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-11-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 11 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Mention a value that makes sense to put in an ID Token, but that you most likely won't find in an Access Token.",
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The ID Token should contain information about the user, while the Access Token should contain information about what the user is allowed to do. Therefor, the user's first name would make sense to put in the ID Token, but not in the Access Token, since authorization is usually not granted based on a user's first name.",
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "2 points for a valid example")
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "question-12-2p",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#question-12-2p",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Question 12 (2p)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Here is a short story:",
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "Alice has got a ticket for a football game. When she arrives to the football arena, she shows her ticket to the personnel there, who let her enter the arena.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Questions:",
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Does an identity exist in the story? If so, which identity is that?"),
    /* @__PURE__ */ createBaseVNode("li", null, "Does authentication take place in the story? If so, when and where?"),
    /* @__PURE__ */ createBaseVNode("li", null, "Does authorization take place in the story? If so, when and where?")
  ],
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Yes. Alice is the identity in the story."),
    /* @__PURE__ */ createBaseVNode("li", null, "No."),
    /* @__PURE__ */ createBaseVNode("li", null, "Yes. Authorization takes place when Alice shows her ticket to the personnel, which authorizes her to enter the arena.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.66 points for each correct identified identiy/authentication/authorization"),
    /* @__PURE__ */ createBaseVNode("li", null, "-0.33 points for each identified authentication/authorization that doesn't exist")
  ],
  -1
  /* HOISTED */
);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Below is the table "),
    /* @__PURE__ */ createBaseVNode("code", null, "humans"),
    /* @__PURE__ */ createTextVNode(" found in a database (not all rows are shown).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Write an SQL query that changes the age of the human with "),
    /* @__PURE__ */ createBaseVNode("code", null, "id"),
    /* @__PURE__ */ createTextVNode(),
    /* @__PURE__ */ createBaseVNode("code", null, "3"),
    /* @__PURE__ */ createTextVNode(" to "),
    /* @__PURE__ */ createBaseVNode("code", null, "30"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode(" id "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "3"),
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
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Point reductions for smaller errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.75 points for having all but "),
          /* @__PURE__ */ createBaseVNode("code", null, "UPDATE humans SET"),
          /* @__PURE__ */ createTextVNode(" wrong")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Below is the table "),
    /* @__PURE__ */ createBaseVNode("code", null, "humans"),
    /* @__PURE__ */ createTextVNode(" found in a database (not all rows are shown).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Write an SQL query that deletes the human with id "),
    /* @__PURE__ */ createBaseVNode("code", null, "2"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-sql line-numbers-mode",
    "data-ext": "sql"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-sql" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "DELETE"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "FROM"),
        /* @__PURE__ */ createTextVNode(" humans "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "WHERE"),
        /* @__PURE__ */ createTextVNode(" id "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "2"),
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
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for an answer that is largely correct"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Small point reductions for smaller errors: "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createTextVNode("-0.1 points for "),
          /* @__PURE__ */ createBaseVNode("code", null, "DELETE humans ...")
        ])
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Explain what a foreign key is. Also, give an example of a database (tables and fields) that would contain a foreign key.",
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A foreign key is a field in one database table that (in most cases) refers to the primary key field in another table. This way we can have relations between data, and use it to, for example, keep track of which user that created which blogpost.",
  -1
  /* HOISTED */
);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The accounts table:",
  -1
  /* HOISTED */
);
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "table",
  null,
  [
    /* @__PURE__ */ createBaseVNode("thead", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("th", null, "id"),
        /* @__PURE__ */ createBaseVNode("th", null, "username"),
        /* @__PURE__ */ createBaseVNode("th", null, "password")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "1"),
        /* @__PURE__ */ createBaseVNode("td", null, "Alice"),
        /* @__PURE__ */ createBaseVNode("td", null, "abc123")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, "2"),
        /* @__PURE__ */ createBaseVNode("td", null, "Bob"),
        /* @__PURE__ */ createBaseVNode("td", null, "bobby")
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
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The blogposts table:",
  -1
  /* HOISTED */
);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "| id | title | content | accountId | | 1 | HTML is fun | ... | 1 | | 2 | CSS is also fun ... | 1 | | ... | ... | ... | ... |",
  -1
  /* HOISTED */
);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In the blogposts table above, the accountId field is a foreign key to the primary key field id in the accounts table, and we can see that Alice har written the two blogposts HTML is fun and CSS is also fun.",
  -1
  /* HOISTED */
);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct explanation"),
    /* @__PURE__ */ createBaseVNode("li", null, "1 point for correct example")
  ],
  -1
  /* HOISTED */
);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In plain JavaScript, to read out what the user has written in an "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" element, one gets a reference to the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" element and read out the value in the element's "),
    /* @__PURE__ */ createBaseVNode("code", null, "value"),
    /* @__PURE__ */ createTextVNode(" property.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("If you want to retrieve what the user has written in an "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" element in Vue, one does it a bit differently. Explain how. There is no need to write any code (explaining using words is enough), but feel free to show with code if you prefer.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("To read out what the user has written in an "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" element in Vue, you first create a reactive variable in the component by returning it as part of the object in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "data()"),
    /* @__PURE__ */ createTextVNode(" function, and then you add the attribute "),
    /* @__PURE__ */ createBaseVNode("code", null, 'v-model="theReactiveVariableName"'),
    /* @__PURE__ */ createTextVNode(" to the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" element. Then "),
    /* @__PURE__ */ createBaseVNode("code", null, "this.theReactiveVariableName"),
    /* @__PURE__ */ createTextVNode(" will store the text written in the "),
    /* @__PURE__ */ createBaseVNode("code", null, "<input>"),
    /* @__PURE__ */ createTextVNode(" element.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.66 points for "),
      /* @__PURE__ */ createBaseVNode("code", null, "data()")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.66 points for "),
      /* @__PURE__ */ createBaseVNode("code", null, 'v-model="theReactiveVariableName"')
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("0.66 points for "),
      /* @__PURE__ */ createBaseVNode("code", null, "this.theReactiveVariableName")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode(
  "h2",
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
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Explain how you would implement a Vue component others can use that should display two numbers (which numbers should be determined by the ones who use the component) and the sum of the two numbers. Feel free to write code implementing the component if you want, but explaining how the component should be implemented using words is OK too.",
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The component should first declare that it can receive two numbers through props, so it first needs to declare two props with their names, for example "),
    /* @__PURE__ */ createBaseVNode("code", null, "x"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "y"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The one using the components can then use attribute bindings to pass JavaScript numbers as props, e.g. "),
    /* @__PURE__ */ createBaseVNode("code", null, '<TheComponentName :x="3" :y="5">'),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_115 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The component can then display:",
  -1
  /* HOISTED */
);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The value for the "),
      /* @__PURE__ */ createBaseVNode("code", null, "x"),
      /* @__PURE__ */ createTextVNode(" prop in the HTML code using "),
      /* @__PURE__ */ createBaseVNode("code", null, "{{x}}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The value for the "),
      /* @__PURE__ */ createBaseVNode("code", null, "y"),
      /* @__PURE__ */ createTextVNode(" prop in the HTML code using "),
      /* @__PURE__ */ createBaseVNode("code", null, "{{y}}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The sum of the "),
      /* @__PURE__ */ createBaseVNode("code", null, "x"),
      /* @__PURE__ */ createTextVNode(" and "),
      /* @__PURE__ */ createBaseVNode("code", null, "y"),
      /* @__PURE__ */ createTextVNode(" props in the HTML code using "),
      /* @__PURE__ */ createBaseVNode("code", null, "{{x + y}}")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "0.50 points for each prop mentioned"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.25 points for each prop shown in the HTML"),
    /* @__PURE__ */ createBaseVNode("li", null, "0.5 points for showing the sum in the HTML")
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
        _hoisted_13,
        _hoisted_14,
        _hoisted_15,
        _hoisted_16
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_17
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_18
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_19,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_20
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_21
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_22
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_23,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_24
      ]),
      "sample-answer": withCtx(() => [
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
        _hoisted_28,
        _hoisted_29,
        _hoisted_30
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_31
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_32
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_33,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_34,
        _hoisted_35,
        _hoisted_36,
        _hoisted_37
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_38
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_39
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_40,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_41
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_42
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_43
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_44,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_45
      ]),
      "sample-answer": withCtx(() => [
        createBaseVNode("p", null, [
          createTextVNode("See "),
          createBaseVNode("a", _hoisted_46, [
            createTextVNode("CHAPTER 5, Representational State Transfer (REST)"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" in Roy Fielding's dissertation "),
          _hoisted_47,
          createTextVNode(".")
        ])
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_48,
        _hoisted_49,
        _hoisted_50
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_51,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_52,
        _hoisted_53,
        _hoisted_54,
        _hoisted_55,
        _hoisted_56,
        _hoisted_57
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_58,
        _hoisted_59
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_60
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_61,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_62,
        _hoisted_63,
        _hoisted_64,
        _hoisted_65,
        _hoisted_66
      ]),
      "sample-answer": withCtx(() => [
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
        _hoisted_71,
        _hoisted_72
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
        _hoisted_76
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_77
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_78,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_79,
        _hoisted_80,
        _hoisted_81,
        _hoisted_82
      ]),
      "sample-answer": withCtx(() => [
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
        _hoisted_93,
        _hoisted_94
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_95
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_96
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_97,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_98
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_99,
        _hoisted_100,
        _hoisted_101,
        _hoisted_102,
        _hoisted_103,
        _hoisted_104
      ]),
      "marking-guidelines": withCtx(() => [
        _hoisted_105
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_106,
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_107,
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
    createVNode(_component_ExamQuestion, null, {
      question: withCtx(() => [
        _hoisted_112
      ]),
      "sample-answer": withCtx(() => [
        _hoisted_113,
        _hoisted_114,
        _hoisted_115,
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
const exam20230815_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exam-2023-08-15.html.vue"]]);
export {
  exam20230815_html as default
};
