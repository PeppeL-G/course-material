import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "http-and-web-applications",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#http-and-web-applications",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" HTTP and Web Applications")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "HyperText Transfer Protocol",
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://tools.ietf.org/html/rfc2616",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/kuTKFoU5v7k",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="http-and-web-applications.pdf">http-and-web-applications.pdf</a></li><li><a href="http-and-web-applications.pptx">http-and-web-applications.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_8 = {
  href: "https://launchschool.com/books/http",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Up to (including) the chapter HTTP --> Processing Responses")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = {
  href: "https://tools.ietf.org/html/rfc2616",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Don't read and learn everything by heart, but just enough so you get comfortable looking up things (methods, status codes, etc.) in it.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "interesting-reading",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#interesting-reading",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Interesting reading")
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = {
  href: "https://www.reddit.com/r/dataisbeautiful/comments/cxuah9/usage_share_of_internet_browsers_1996_2019_oc/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "clients-and-servers",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#clients-and-servers",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Clients and Servers")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The HTTP protocol is built on a "),
    /* @__PURE__ */ createBaseVNode("em", null, "client-server"),
    /* @__PURE__ */ createTextVNode(" architecture. That means that some computers on the web acts as "),
    /* @__PURE__ */ createBaseVNode("em", null, "servers"),
    /* @__PURE__ */ createTextVNode(", and all other computers acts as "),
    /* @__PURE__ */ createBaseVNode("em", null, "clients"),
    /* @__PURE__ */ createTextVNode(". When you browse the web through a web browser, your web browser is a client.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>For example, when you click on a link in your web browser, your web browser sends an HTTP request to a server, requesting the server to send back the webpage the link leads to. When the server receives this request it generates the webpage/loads it from a file and sends it back in an HTTP response, and when your web browser receives the HTTP response it displays the webpage on the screen.</p><p>In general, any computer can act as a client or a server. It is also possible for a computer to be both a client and a server at the same time. For example, when you (acting as a client) send an HTTP request to <code>Server A</code>, that server might in turn send an HTTP request to <code>Server B</code> to handle your request. Then <code>Server A</code> acts both as a server and a client at the same time. This is for example used when you login with your Google account on a website that doesn&#39;t belong to Google. Then the website you send your login request to will send its own requests to Google to check which Google account that belongs to you (this example is a bit simplified; in practice it is a bit more complicated than this).</p><h2 id="resources-and-uris" tabindex="-1"><a class="header-anchor" href="#resources-and-uris" aria-hidden="true">#</a> Resources and URIs</h2><p>Servers in HTTP are expected to contain resources. It is up to each server to decide what type of resources it should contain, but some resources commonly found on websites includes:</p><ul><li>Images (<code>.png</code> files, <code>.jpeg</code> files, etc.)</li><li>Sounds (<code>.mp3</code> files, etc.)</li><li>Videos (<code>.mp4</code> files, etc.)</li><li>Documents (<code>.pdf</code> files, <code>.docx</code> files, <code>.txt</code> files, etc.)</li><li>Static webpages (<code>.html</code> files, <code>.css</code> files, <code>.js</code> files, etc.)</li><li>General data, such as: <ul><li>Accounts</li><li>Blogposts</li><li>Guestbook posts</li><li>Articles</li><li>Private Messages</li><li>Comments</li><li>etc.</li></ul></li></ul><p>Some resources (images, videos, documents, etc.) are simply stored as files on the server, while other resources can be stored in a database, or some other way. For now, we don&#39;t really care about how the resources are being stored on the server, as long as they are stored somehow.</p><p>When a client wants to work with a resource, it sends an HTTP requests to the server, asking the server to do something with the resource. There are primarilly four different types of requests clients can send. These are known as CRUD operations, and they are:</p><ul><li><u>C</u>reate (ask the server to create a new resource)</li><li><u>R</u>etrieve/<u>R</u>ead (ask the server to send back a resource)</li><li><u>U</u>pdate (ask the server to change a resource)</li><li><u>D</u>elete (ask the server to delete a reosurce)</li></ul><p>In English, an HTTP request could say something like:</p><ul><li><em>Send back the contact page to me</em></li><li><em>Delete the last comment I wrote</em></li><li><em>Change the title of the blog post I wrote yesterday to &quot;Congratulations&quot;</em> (the client sends the new title to the server)</li><li><em>Create a new friend relationship with the user Alice for me</em> (the client sends a new resource representing the friend relationship to the server)</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When you create a new account on a website, your web browser sends an HTTP request to the server asking the server to create a new resource representing your account containing your username and password (and possibly some additional information).</p></div><p>Each request sent to a server is about doing something with a resource. The client tells the server which resource that is through a <em>Uniform Resource Identifier</em> (URI). Each resource on the server should have a URI that uniquely identifies it, and it is the server that decides which URI each resource should have. Each time you view a webpage (webpage = resource) in a web browser, you can see the URI that uniquely identifies that webpage in the address bar (usually located at the top of the web browser).</p>', 12);
const _hoisted_28 = {
  href: "https://en.wikipedia.org/wiki/Mathematics",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "/wiki/Mathematics",
  -1
  /* HOISTED */
);
const _hoisted_30 = {
  href: "https://en.wikipedia.org/wiki/Computer_science",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "/wiki/Computer_science",
  -1
  /* HOISTED */
);
const _hoisted_32 = {
  href: "https://tools.ietf.org/html/rfc3986",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "/",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "https://en.wikipedia.org/wiki/Mathematics",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "https",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "wikipedia.org",
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">HTTP VS HTTPS</p><p>The web is built on the HTTP protocol. The HTTP protocol is not encrypted, so it&#39;s a bad idea to send sensitive information (such as passwords, credit card numbers, etc.) using it. Therefore the HTTPS protocol were invented. HTTPS does more or less work the same way as HTTP, but with the addition being encrypted, so even though you learn HTTP here, you can just as well later use HTTPS.</p></div><p>URIs usually identifies a single resource or a collection of multiple resources. It is quite common that the beginning of a URI identifies a collection of resources, and the end of the URI identifies a specific resource within that collection. For example, the URI <code>/accounts</code> could identify the collection of all accounts on a website, and the URI <code>/accounts/Alice</code> identifies the specific account with the username <em>Alice</em>. We can also see this pattern in the example before with URIs on Wikipedia.</p><h2 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> Requests</h2><p>So, a client can send an HTTP request to a server to request the server to do something for it. The HTTP specification have specified the structure of these HTTP requests, so it is very important that clients send HTTP requests using the structure specified in the HTTP specification. If they don&#39;t, servers will not understand the request and simply ignore it or send back an HTTP response indicating that something was wrong with the request.</p>', 4);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-http line-numbers-mode",
    "data-ext": "http"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode("METHOD URI VERSION\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "HEADER1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "VALUE1")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "HEADER2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "VALUE2")
        ]),
        /* @__PURE__ */ createTextVNode("\n...\n\nBODY\n")
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
const _hoisted_42 = /* @__PURE__ */ createStaticVNode("<p>The first line in an HTTP request is called the <em>request line</em>. It consists of three parts.</p><p>The first part on the request line is called the <code>METHOD</code>. It is also known as the <em>verb</em>, but the HTTP specification calls it method, so it is better to stick with that. The method indicates what the client wants to do with the resource identified by the <code>URI</code> (the second part). For example, the <code>GET</code> method indicates that the client wants to retrieve the resource, so the server should send back the resource in the HTTP request. The <code>DELETE</code> method indicates that the client wants the server to delete the resource, so the server should delete the resource before it sends back an HTTP response.</p><p>The third part on the request line, <code>VERSION</code>, indicates which version of HTTP the client is using, so the server can use the same version. A common value used here is <code>HTTP/1.1</code>.</p><p>Below the request line you find <em>the headers</em>. These are key-value pairs with additional information about the request. For example, the <code>Host</code> header is used to indicate the domain name of the server the request is sent to (for example <code>Host: ju.se</code>), and the <code>Accept</code> header is used to indicate which data format the client would like to get back the requested resource in (for example <code>Accept: text/html</code>).</p><p>Below the headers you find <em>the body</em> of the request. Here the client can pass a resource to the server in the HTTP request. This is used when the client wants to create a new resource on the server or update an existing resource. If no resource needs to be sent to the server, you omit the body (leave it empty/blank).</p>", 5);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-http line-numbers-mode",
    "data-ext": "http"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token request-line" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token method property" }, "POST"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token request-target url" }, "/accounts"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "game-site.com")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Accept"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "text/html")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token application-json" }, [
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"username"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Alice"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"password"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"abc123"'),
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
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "request-headers",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#request-headers",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Request Headers")
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "table",
  null,
  [
    /* @__PURE__ */ createBaseVNode("thead", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("th", null, "Name"),
        /* @__PURE__ */ createBaseVNode("th", null, "Example"),
        /* @__PURE__ */ createBaseVNode("th", null, "Description")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("tbody", null, [
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Host")
        ]),
        /* @__PURE__ */ createBaseVNode("td", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Host: nintendo.se")
        ]),
        /* @__PURE__ */ createBaseVNode("td", null, "Identifies the domain the HTTP request is sent to.")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Accept")
        ]),
        /* @__PURE__ */ createBaseVNode("td", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Accept: text/html")
        ]),
        /* @__PURE__ */ createBaseVNode("td", null, "Identifies the data format the client wants the resource back in.")
      ]),
      /* @__PURE__ */ createBaseVNode("tr", null, [
        /* @__PURE__ */ createBaseVNode("td", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Content-Type")
        ]),
        /* @__PURE__ */ createBaseVNode("td", null, [
          /* @__PURE__ */ createBaseVNode("code", null, "Content-Type: application/json")
        ]),
        /* @__PURE__ */ createBaseVNode("td", null, "Identifies the data format the body of the HTTP request is written in.")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createStaticVNode('<h4 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h4><p>There exists a bunch of different HTTP methods, but web developers primarily need to know four of them: <code>GET</code>, <code>POST</code>, <code>PUT</code> and <code>DELETE</code>. These maps well to the commonly used CRUD operations:</p><ul><li>Create: <code>POST</code></li><li>Retrieve: <code>GET</code></li><li>Update: <code>PUT</code></li><li>Delete: <code>Delete</code></li></ul>', 3);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A client can send a "),
    /* @__PURE__ */ createBaseVNode("code", null, "GET"),
    /* @__PURE__ */ createTextVNode(" request to a server to tell the server to send back the resource identified through the URI in the request. A "),
    /* @__PURE__ */ createBaseVNode("code", null, "GET"),
    /* @__PURE__ */ createTextVNode(" requests contains no body since the request is only about fetching a resource from the server, and not sending a resource to the server.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Example"),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "language-http line-numbers-mode",
      "data-ext": "http"
    }, [
      /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
        /* @__PURE__ */ createBaseVNode("code", null, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token request-line" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token method property" }, "GET"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token request-target url" }, "/accounts"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "game-site.com")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Accept"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "text/html")
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
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ":::",
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A client can send a "),
    /* @__PURE__ */ createBaseVNode("code", null, "POST"),
    /* @__PURE__ */ createTextVNode(" request to a server to tell the server to create a new resource. The URI in the request should identify what type of resource that should be created, and the body of the request should contain the resource.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Example"),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "language-http line-numbers-mode",
      "data-ext": "http"
    }, [
      /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
        /* @__PURE__ */ createBaseVNode("code", null, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token request-line" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token method property" }, "POST"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token request-target url" }, "/contact-messages"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "a-store.com")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Content-Type"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "application/json")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token application-json" }, [
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"name"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Alice"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"message"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, `"Hi, I bought a thing from you, and it's not working. Please get back to me with info on how to proceed."`),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"email"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"alice@wonderland.com"'),
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
        /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ":::",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A client can send a "),
    /* @__PURE__ */ createBaseVNode("code", null, "PUT"),
    /* @__PURE__ */ createTextVNode(" request to a server to tell the server to replace an existing resource on the server with a new one the client sends it. The URI in the request should identify which resource on the server to be replaced, and the body of the request should contain the new resource.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Example"),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "language-http line-numbers-mode",
      "data-ext": "http"
    }, [
      /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
        /* @__PURE__ */ createBaseVNode("code", null, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token request-line" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token method property" }, "PUT"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token request-target url" }, "/diary-entries/2020-02-13"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "diaries.com")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Content-Type"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "application/json")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token application-json" }, [
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"date"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"2020-02-13"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"message"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Today was a wonderful day, Kim proposed to me, and I said yes :D We will live happily ever after now. (update 2020-04-15: Me and Kim are no longer together)."'),
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
        /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ":::",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A client can send a "),
    /* @__PURE__ */ createBaseVNode("code", null, "DELETE"),
    /* @__PURE__ */ createTextVNode(" request to a server to tell the server to delete all resources on the server identified through the URI in the request.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Example"),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "language-http line-numbers-mode",
      "data-ext": "http"
    }, [
      /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
        /* @__PURE__ */ createBaseVNode("code", null, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token request-line" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token method property" }, "DELETE"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token request-target url" }, "/guestbook-posts/123"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
          ]),
          /* @__PURE__ */ createTextVNode("\n"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "football-lovers.com")
          ]),
          /* @__PURE__ */ createTextVNode("\n")
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("div", {
        class: "line-numbers",
        "aria-hidden": "true"
      }, [
        /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
        /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ":::",
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">PUT and DELETE not in HTML</p><p>In the language used to build web pages, HTML, it&#39;s only possible to send <code>GET</code> and <code>POST</code> requests. Therefore, web developers rarely use <code>PUT</code> and <code>DELETE</code> requests. On websites, <code>PUT</code> and <code>DELETE</code> requests are often implemented as <code>POST</code> requests, and the URI is used to indicate if it should be a create, update or a delete operation.</p></div><h2 id="responses" tabindex="-1"><a class="header-anchor" href="#responses" aria-hidden="true">#</a> Responses</h2>', 2);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-http line-numbers-mode",
    "data-ext": "http"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-http" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode("VERSION STATUS_CODE REASON_PHRASE\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "HEADER1"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "VALUE1")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token header" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-name keyword" }, "HEADER2"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token header-value" }, "VALUE2")
        ]),
        /* @__PURE__ */ createTextVNode("\n...\n\nBODY\n")
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
const _hoisted_68 = /* @__PURE__ */ createStaticVNode('<p>The first line in the HTTP response is called <em>the status line</em>. It first contains the HTTP version the server is using (<code>VERSION</code>), and then a <code>STATUS_CODE</code> (a three digit number) indicating how the server handled the request (e.g. did it carry out the request? Or why didn&#39;t carry it out?), and then a <code>REASON_PHRASE</code>, which just is a very short human readable text for what the status code mean. For programmers using HTTP, it&#39;s primarily the status code that&#39;s interesting to look at.</p><p>Just as HTTP requests, HTTP responses can contain headers and a body too.</p><div class="custom-container warning"><p class="custom-container-title">Request Headers != Response Headers</p><p>Although HTTP requests and HTTP responses both contain headers, which headers they can contain depends on if it&#39;s a request or a response. For example, the <code>Accept</code> header can only be used in HTTP requests, and the <code>Content-Type</code> header can be used in both HTTP requests and HTTP responses.</p></div><h3 id="status-codes" tabindex="-1"><a class="header-anchor" href="#status-codes" aria-hidden="true">#</a> Status codes</h3><p>The three digit status code can either start with the digit <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code> or <code>5</code>. Which digit it is hints about how the server handled the request.</p>', 5);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "1XX"),
    /* @__PURE__ */ createTextVNode(" status codes indicate an "),
    /* @__PURE__ */ createBaseVNode("em", null, "informational"),
    /* @__PURE__ */ createTextVNode(" response. These aren't that important to know for programmers using HTTP.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "2XX"),
    /* @__PURE__ */ createTextVNode(" status codes indicate that the server successfully carried out the HTTP request. The most commonly used ones are (reason phrase shown after the status code):")
  ],
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "200"),
      /* @__PURE__ */ createTextVNode(" OK"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server carried out the request and sends back a resource in the body of the response.")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "201"),
      /* @__PURE__ */ createTextVNode(" Created"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server carried out the request and a new resource was created while carrying out the request. The "),
      /* @__PURE__ */ createBaseVNode("code", null, "Location"),
      /* @__PURE__ */ createTextVNode(" header in the HTTP response contains the URI for the newly created resource.")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "204"),
      /* @__PURE__ */ createTextVNode(" No Content"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server carried out the request, but the response contains no body.")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "3XX"),
    /* @__PURE__ */ createTextVNode(" status codes indicate that the server encourages the client to send a new HTTP request using another URI (i.e. redirecting the client).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "302"),
      /* @__PURE__ */ createTextVNode(" Found"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server encourages the client to send the same HTTP request again but with the URI specified in the "),
      /* @__PURE__ */ createBaseVNode("code", null, "Location"),
      /* @__PURE__ */ createTextVNode(" response header instead. This is useful if you change URIs on a website. For example, first maybe "),
      /* @__PURE__ */ createBaseVNode("code", null, "/about-us"),
      /* @__PURE__ */ createTextVNode(" was used to identify the about page on the website, and then you changed that to just "),
      /* @__PURE__ */ createBaseVNode("code", null, "/about"),
      /* @__PURE__ */ createTextVNode(". Then when a client sends a "),
      /* @__PURE__ */ createBaseVNode("code", null, "GET"),
      /* @__PURE__ */ createTextVNode(" request to "),
      /* @__PURE__ */ createBaseVNode("code", null, "/about-us"),
      /* @__PURE__ */ createTextVNode(" you can send back a "),
      /* @__PURE__ */ createBaseVNode("code", null, "302"),
      /* @__PURE__ */ createTextVNode(" response with the header "),
      /* @__PURE__ */ createBaseVNode("code", null, "Location: /about"),
      /* @__PURE__ */ createTextVNode(" to indicate that the URI for the page has changed to "),
      /* @__PURE__ */ createBaseVNode("code", null, "/about"),
      /* @__PURE__ */ createTextVNode(".")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "4XX"),
    /* @__PURE__ */ createTextVNode(" status codes indicate that the server didn't carry out the request because the client has done something wrong with the request. The client needs to fix the problem and try again.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "400"),
      /* @__PURE__ */ createTextVNode(" Bad Request"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server didn't carry out the request because something is wrong with it. The body of the response can contain additional information about what's wrong. Better to use another "),
      /* @__PURE__ */ createBaseVNode("code", null, "4XX"),
      /* @__PURE__ */ createTextVNode(" status code if a more specific that describes the problem exists.")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "401"),
      /* @__PURE__ */ createTextVNode(" Unauthorized"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server didn't carry out the request because the client is not authorized to request it (the client might for example need to login first).")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "404"),
      /* @__PURE__ */ createTextVNode(" Not Found"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server didn't carry out the request because the URI in the request doesn't identify a resource that exists.")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "5XX"),
    /* @__PURE__ */ createTextVNode(" status codes indicates that the server couldn't carry out the request because something is wrong on the server-side. Maybe the server crashed, or maybe the server needs an external resource (e.g. a database) to carry out the request, and it doesn't have access to it the moment, etc.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "500 "),
      /* @__PURE__ */ createTextVNode(" Internal Server Error"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" The server couldn't carry out the request.")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "world-wide-web",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#world-wide-web",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" World Wide Web")
  ],
  -1
  /* HOISTED */
);
const _hoisted_83 = { class: "custom-container tip" };
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Terminology",
  -1
  /* HOISTED */
);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A "),
    /* @__PURE__ */ createBaseVNode("em", null, "web application"),
    /* @__PURE__ */ createTextVNode(" is the application running on the server that receives HTTP requests and sends back HTTP responses.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A "),
    /* @__PURE__ */ createBaseVNode("em", null, "webpage"),
    /* @__PURE__ */ createTextVNode(" is a single page you can view in your web browser. Each HTTP response usually contains a single webpage.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "website",
  -1
  /* HOISTED */
);
const _hoisted_88 = {
  href: "https://ju.se",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "the world wide web",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("The web is built on a protocol called the "),
      _hoisted_2,
      createTextVNode(" (HTTP). To build proper web applications, it is essential to understand how this protocol works. "),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("The HTTP specification"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" explains it all, but since it's a specification it can be quite hard to read, so let me give you a quick introduction to HTTP before you read the details in the HTTP specification.")
    ]),
    _hoisted_4,
    _hoisted_5,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("Introduction to HTTP"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" by Launch School "),
        _hoisted_9
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("HTTP/1.1 specification"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_11
      ])
    ]),
    _hoisted_12,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_13, [
          createTextVNode("Usage Share of Internet Browsers 1996 - 2019 (visualized)"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_14,
    _hoisted_15,
    createBaseVNode("p", null, [
      createTextVNode("A client can send an HTTP request to a server, asking the server to do something for it. When a server receives the HTTP request, it should carry out the request, and then send back an HTTP response to the client. This is visualized in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below. Having a server on it own is useless; servers exist to serve clients (that's why we call them servers).")
    ]),
    createVNode(_component_Figure, { caption: "Example of Client-Server communication." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant Client\n    participant Server\n    Client->>+Server: 1. HTTP Request\n    Note right of Server: 2. Carry out request\n    Server-->>-Client: 3. HTTP Response\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("For example, "),
      createBaseVNode("a", _hoisted_28, [
        createTextVNode("Wikipedia's article/webpage about Mathematics"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" has the URI "),
      _hoisted_29,
      createTextVNode(", while their "),
      createBaseVNode("a", _hoisted_30, [
        createTextVNode("article/webpage about Computer Science"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" has the URI "),
      _hoisted_31,
      createTextVNode(".")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("The "),
      createBaseVNode("a", _hoisted_32, [
        createTextVNode("URI specification"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" specifies the format of URIs. Simply put, it is a sequence of characters, where the slash character "),
      _hoisted_33,
      createTextVNode(" is used to group relevant resources together. URIs also include the protocol used to access the resource (e.g. HTTP) and an identifier indicating which server that stores the resource (a domain or an IP adress), so a complete URI could for example be "),
      _hoisted_34,
      createTextVNode(", where "),
      _hoisted_35,
      createTextVNode(" indicates that the HTTPS protocol should be used to send the HTTP request, and the computer containing the resource is the one with the IP address the domain name "),
      _hoisted_36,
      createTextVNode(" maps to.")
    ]),
    _hoisted_37,
    createBaseVNode("p", null, [
      createTextVNode("The structure of an HTTP request is shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "The structure of an HTTP request." }, {
      default: withCtx(() => [
        _hoisted_41
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_42,
    createBaseVNode("p", null, [
      createTextVNode("An example of an actual HTTP request is shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Example of an HTTP request asking the server to create a new account." }, {
      default: withCtx(() => [
        _hoisted_47
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_48,
    createVNode(_component_FigureNumber),
    createTextVNode(" below describes some of the headers you can use in an HTTP request."),
    createVNode(_component_Figure, { caption: "Description of some of the HTTP request headers." }, {
      default: withCtx(() => [
        _hoisted_49
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_50,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "GET" }, {
          default: withCtx(() => [
            _hoisted_53,
            _hoisted_54
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_55,
        createVNode(_component_CodeGroupItem, { title: "POST" }, {
          default: withCtx(() => [
            _hoisted_56,
            _hoisted_57
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_58,
        createVNode(_component_CodeGroupItem, { title: "PUT" }, {
          default: withCtx(() => [
            _hoisted_59,
            _hoisted_60
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_61,
        createVNode(_component_CodeGroupItem, { title: "DELETE" }, {
          default: withCtx(() => [
            _hoisted_62,
            _hoisted_63
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_64
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_65,
    createBaseVNode("p", null, [
      createTextVNode("When a server receives an HTTP request, it should look at the request (i.e. the method and the URI) to figure out what the request is about, then carry out the request and then send back an HTTP response. The structure of an HTTP response is shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "The structure of an HTTP response." }, {
      default: withCtx(() => [
        _hoisted_67
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_68,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "1XX" }, {
          default: withCtx(() => [
            _hoisted_73
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "2XX" }, {
          default: withCtx(() => [
            _hoisted_74,
            _hoisted_75
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "3XX" }, {
          default: withCtx(() => [
            _hoisted_76,
            _hoisted_77
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "4XX" }, {
          default: withCtx(() => [
            _hoisted_78,
            _hoisted_79
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "5XX" }, {
          default: withCtx(() => [
            _hoisted_80,
            _hoisted_81
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_82,
    createBaseVNode("div", _hoisted_83, [
      _hoisted_84,
      _hoisted_85,
      _hoisted_86,
      createBaseVNode("p", null, [
        createTextVNode("A "),
        _hoisted_87,
        createTextVNode(" is the collection of all webpages on one and the same server (i.e. all webpages on the same domain, for example all webpages at "),
        createBaseVNode("a", _hoisted_88, [
          createTextVNode("ju.se"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(").")
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("So, why is it called "),
      _hoisted_89,
      createTextVNode("? Webpages can contain links to other webpages, and if you try to visualize this structure, you end up with something looking like a web, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below (some imagination required!).")
    ]),
    createVNode(_component_Figure, { caption: "A visualization of some webpages and where their links lead." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n  a[Webpage A]\n  b[Webpage B]\n  c[Webpage C]\n  d[Webpage D]\n  e[Webpage E]\n  f[Webpage F]\n  g[Webpage G]\n  a-->b\n  c-->b\n  c-->a\n  c-->d\n  d-->a\n  d-->b\n  e-->b\n  e-->c\n  f-->c\n  f-->d\n  f-->a\n  b-->f\n  g-->b\n  g-->f\n  g-->e\n  d-->g\n  c-->g\n" })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
