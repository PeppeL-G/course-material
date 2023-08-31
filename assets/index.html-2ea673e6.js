import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, e as withCtx, a as createBaseVNode, b as createTextVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="web-sessions" tabindex="-1"><a class="header-anchor" href="#web-sessions" aria-hidden="true">#</a> Web Sessions</h1><p>A session is something a web application can use to remember information about a user, similiar to cookies, but unlike cookies, sessions are stored on the server.</p><h2 id="what-is-a-session" tabindex="-1"><a class="header-anchor" href="#what-is-a-session" aria-hidden="true">#</a> What is a session?</h2><p>A session is a collection of key-value pairs stored on the server that belongs to a specific client (each client has its own session on the server). A server can use a session to remember information about a client. A session is quite similar to a collection of cookies, but clients can&#39;t read or write the key-value pairs in the session; only the server can read and write the key-value pairs in the session. So if the server puts a value in a client&#39;s session, it can be sure that that value is valid (it can&#39;t be changed by anyone except the server itself).</p><h2 id="how-long-does-a-session-exist" tabindex="-1"><a class="header-anchor" href="#how-long-does-a-session-exist" aria-hidden="true">#</a> How long does a session exist?</h2><p>The session only exists &quot;as long as the user use the website&quot;. In many web frameworks, a session only exists for 20 minutes (can usually be configured), but each time the user visits a new page on the website, those 20 minutes are refreshed. That means if you start to use a website, you get a new session the server can use to remember information about you, but if you don&#39;t send a new HTTP request within 20 minutes, that session will be deleted, and the server will forget all the information about you it put in your session. With the next HTTP request you send to the server after 20 minutes, you will get a new session.</p><p>But if you have a session and send an HTTP request to the server within 20 minutes, then you extend the life of the session so it will live for 20 minutes from the time you sent that (the last) HTTP request.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>You might have noticed that if you login on a website, start reading a long page for ~30 minutes, and then go to another page on the website, that you are not logged in anymore? That&#39;s because the session has been deleted since you haven&#39;t been active on (sent HTTP request to) that website for a while.</p></div><h2 id="what-are-sessions-used-for" tabindex="-1"><a class="header-anchor" href="#what-are-sessions-used-for" aria-hidden="true">#</a> What are sessions used for?</h2><p>So, when you need to remember information about a client, you can use either cookies or sessions. When should you use which one? A rule of thumb is that you should use sessions if you need to remember temporary information about a client the client should not have access to. Otherwise, a cookie is more likely the better choice.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you need to remember which account a client has logged in to, then you should remember this in the client&#39;s session, because you don&#39;t want the client to be able to change this information.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you want to remember which words the user has searched for in the search form on your website, then you&#39;re better of storing that information in a cookie. The user only harms herself by modifying the cookie, and by using a cookie, we can remember that information for a much longer time.</p></div><h2 id="how-are-sessions-implemented" tabindex="-1"><a class="header-anchor" href="#how-are-sessions-implemented" aria-hidden="true">#</a> How are sessions implemented?</h2><p>Session might sound complicated, but they are most often very easy to use, because the framework/libraries we use have implemented a nice interface for us through which we can use sessions without having to bother about the implementation details.</p><p>How the server store the session on the server is up to the server to decide. It could store the sessions in temporary files, or it could store the sessions in a database. Web programmers usually don&#39;t need to worry about this, because the framework/libraries we use takes care of this for us.</p><p>The session for a client can either be created when the server receives an HTTP request from a client that doesn&#39;t yet have a session, or when the server for the first time needs to put a value in the session for a client that doesn&#39;t yet have a session. How you want it to works can usually be configured using the framework/library you use to work with the sessions.</p><p>After how long time an untouched session should be destroyed can usually be configured using the framework/library as well.</p><h2 id="anything-special-to-think-about-when-using-sessions" tabindex="-1"><a class="header-anchor" href="#anything-special-to-think-about-when-using-sessions" aria-hidden="true">#</a> Anything special to think about when using sessions?</h2><h3 id="sdfsdfsd" tabindex="-1"><a class="header-anchor" href="#sdfsdfsd" aria-hidden="true">#</a> sdfsdfsd</h3><p>Since sessions usually use cookies to remember which session that belongs to which client, you need to consider the cookie law and the GDPR.</p><p>...</p><h3 id="securing-the-session-id" tabindex="-1"><a class="header-anchor" href="#securing-the-session-id" aria-hidden="true">#</a> Securing the session id</h3><p>The session id is really important. Use HTTPS.</p><h3 id="clients-can-create-new-sessions" tabindex="-1"><a class="header-anchor" href="#clients-can-create-new-sessions" aria-hidden="true">#</a> Clients can create new sessions</h3><p>Clients can easilly create new sessions. By sending an HTTP request to the server that doesn&#39;t contain a session id, the server will create a new session for the client. Because of this, you often can&#39;t use the session to keep track of things you want to forbid the client to do.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you use a counter to keep track of how many times a user has failed to login to an account, and prevent the client from login in to an account when the counter reaches a specific number (e.g. 5 failed login attempts), then you can&#39;t store the counter in the session, because the user can easilly send a new HTTP request to the server without a session id, and then get a new session where the counter is 0 again.</p></div><h2 id="using-sessions-in-practise" tabindex="-1"><a class="header-anchor" href="#using-sessions-in-practise" aria-hidden="true">#</a> Using sessions in practise</h2>', 27);
const _hoisted_28 = {
  href: "https://github.com/expressjs/session",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Install the "),
      /* @__PURE__ */ createBaseVNode("code", null, "express-session"),
      /* @__PURE__ */ createTextVNode(" package by running the command "),
      /* @__PURE__ */ createBaseVNode("code", null, "npm install express-session"),
      /* @__PURE__ */ createTextVNode(" in your project folder.")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("Add middleware function with session support from the "),
      /* @__PURE__ */ createBaseVNode("code", null, "express-session"),
      /* @__PURE__ */ createTextVNode(" package in your code, e.g.:")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" express "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'express'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" expressSession "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'express-session'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" app "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "express"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Add the middleware function from express-session."),
        /* @__PURE__ */ createTextVNode("\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "use"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "expressSession"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Let's cover these options later..."),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "secret"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'some characters no one can guess...'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "resave"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "false"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "saveUninitialized"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Use app as before..."),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When we call "),
    /* @__PURE__ */ createBaseVNode("code", null, "expressSession"),
    /* @__PURE__ */ createTextVNode(" we get back a middleware function that we add to our express application object. This middleware will add the "),
    /* @__PURE__ */ createBaseVNode("code", null, "session"),
    /* @__PURE__ */ createTextVNode(" property to the "),
    /* @__PURE__ */ createBaseVNode("code", null, "request"),
    /* @__PURE__ */ createTextVNode(" objects we have. If we want to store a value in the client's session, then we simply add that value to this object, e.g. "),
    /* @__PURE__ */ createBaseVNode("code", null, 'request.session.theKey = "The value"'),
    /* @__PURE__ */ createTextVNode(". If we want to read out a value we have previosuly stored in the session, then we simply read it out from this object, e.g. "),
    /* @__PURE__ */ createBaseVNode("code", null, "const theValue = request.session.theKey"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Example"),
    /* @__PURE__ */ createBaseVNode("p", null, "Below is an example of code that in the session stores number of times the user has visisted a specific page."),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "language-javascript line-numbers-mode",
      "data-ext": "js"
    }, [
      /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
        /* @__PURE__ */ createBaseVNode("code", null, [
          /* @__PURE__ */ createTextVNode("app"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"/count-visits"'),
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
          /* @__PURE__ */ createTextVNode("\n	\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// If we haven't put the counter in the session before,"),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// that means the user is visiting this page for the"),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// first time, and we need to create the counter."),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "!"),
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("session"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("counter"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
          /* @__PURE__ */ createTextVNode("\n		request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("session"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("counter "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
          /* @__PURE__ */ createTextVNode("\n	\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Increment the counter by one."),
          /* @__PURE__ */ createTextVNode("\n	request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("session"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("counter "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+="),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
          /* @__PURE__ */ createTextVNode("\n	\n	response"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "send"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"You have visited this page "'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("session"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("counter"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '" times."'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
          /* @__PURE__ */ createTextVNode("\n	\n"),
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
        /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("The first time a user sends a GET request to "),
      /* @__PURE__ */ createBaseVNode("code", null, "/count-visits"),
      /* @__PURE__ */ createTextVNode(", she will get back the text "),
      /* @__PURE__ */ createBaseVNode("em", null, "You have visited this page 1 times."),
      /* @__PURE__ */ createTextVNode(". The second time she sends the same request, she will get back the text "),
      /* @__PURE__ */ createBaseVNode("em", null, "You have visited this page 2 times."),
      /* @__PURE__ */ createTextVNode(", and so on. Notice that each user will have their own counter (because each user will get its own session).")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you create the session middleware function, you can configure it by passing it an object with options. There are three mandatory options.",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "secret"),
    /* @__PURE__ */ createTextVNode(" option is a value used to generate the session ids. It doesn't matter what you use here as long as no one can figure it out. If a hacker knows which secret you are using, she might be able to figure out which session ids your users will get, and can then easilly hijack (take over) their sessions (send HTTP request with the same session id, so the server think the requests are sent from the user the session belongs to), which is a major security vulnerability.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "resave"),
    /* @__PURE__ */ createTextVNode(" option...")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "saveUninitialized"),
    /* @__PURE__ */ createTextVNode(" option...")
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ":::",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode('PHP has built-in support for sessions, but to use them you first need to "activate them" by calling the function '),
    /* @__PURE__ */ createBaseVNode("code", null, "session_start()"),
    /* @__PURE__ */ createTextVNode(". You need to call this function each time you receive an HTTP request, and it will create a new session for the client if the client doesn't have one, or re-use the existing one the client already have.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When you have called "),
    /* @__PURE__ */ createBaseVNode("code", null, "session_start()"),
    /* @__PURE__ */ createTextVNode(" you can use the special variable "),
    /* @__PURE__ */ createBaseVNode("code", null, "$_SESSION"),
    /* @__PURE__ */ createTextVNode(" to write values to the session and to retrieve values from the session. For example, to add a new value to the session you would use "),
    /* @__PURE__ */ createBaseVNode("code", null, '$_SESSION["theKey"] = "The value";'),
    /* @__PURE__ */ createTextVNode(", and to obtain a value from the session you would use "),
    /* @__PURE__ */ createBaseVNode("code", null, '$theValue = $_SESSSION["theKey"];'),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Example"),
    /* @__PURE__ */ createBaseVNode("p", null, "Here is an example of a PHP page that counts how many times the user have fetched it."),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "language-php line-numbers-mode",
      "data-ext": "php"
    }, [
      /* @__PURE__ */ createBaseVNode("pre", { class: "language-php" }, [
        /* @__PURE__ */ createBaseVNode("code", null, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token php language-php" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter important" }, "<?php"),
            /* @__PURE__ */ createTextVNode("\n\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "session_start"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// If no counter exists in the session, create it."),
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "isset"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "$_SESSION"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string single-quoted-string" }, "'counter'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n	"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "$_SESSION"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string single-quoted-string" }, "'counter'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Increment the counter in the session."),
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "$_SESSION"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string single-quoted-string" }, "'counter'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+="),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "echo"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string double-quoted-string" }, '"You have visisted this page "'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "$_SESSION"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string single-quoted-string" }, "'counter'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string double-quoted-string" }, '" times."'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter important" }, "?>")
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
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("The first time a user visits the page, she will get back the text "),
      /* @__PURE__ */ createBaseVNode("em", null, "You have visited this page 1 times."),
      /* @__PURE__ */ createTextVNode(". The second time she sends the same request, she will get back the text "),
      /* @__PURE__ */ createBaseVNode("em", null, "You have visited this page 2 times."),
      /* @__PURE__ */ createTextVNode(", and so on. Notice that each user will have their own counter (because each user will get its own session).")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ":::",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "a-note-on-stateless",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#a-note-on-stateless",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" A Note on Stateless")
  ],
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Depending on where you store your sessions, your web application either become statefull or remain stateless, and this affects how hard it will be to scale your web application in the future. We will not get into the details of scaling here, but be aware of that if the sessions are stored on the same server that is running your web application (for example in files, which is the case when using the default configuration of PHP), your application becomes statefull and a bit harder to scale. If you instead store the sessions in a database running on a separate sever, your web application remain stateless and is a bit easier to scale.",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "Express" }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createTextVNode("Express does not have built-in support for sessions, but it can easily be added through a middleware function from the "),
              createBaseVNode("a", _hoisted_28, [
                createTextVNode("express-session"),
                createVNode(_component_ExternalLinkIcon)
              ]),
              createTextVNode(" package.")
            ]),
            _hoisted_29,
            _hoisted_30,
            _hoisted_31,
            _hoisted_32
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_33,
        _hoisted_34,
        _hoisted_35,
        _hoisted_36,
        _hoisted_37,
        createVNode(_component_CodeGroupItem, { title: "PHP" }, {
          default: withCtx(() => [
            _hoisted_38,
            _hoisted_39,
            _hoisted_40
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_41
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_42,
    _hoisted_43
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
