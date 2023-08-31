import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "rest-api-authorization",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#rest-api-authorization",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" REST API Authorization")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Let's take a look at how users can login to accounts in our REST API.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/0Ech5jpP1Dc",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="rest-api-authorization.pdf">rest-api-authorization.pdf</a></li><li><a href="rest-api-authorization.pptx">rest-api-authorization.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://en.wikipedia.org/wiki/List_of_OAuth_providers",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Notice that you find many of the big guys (Google, Microsoft, etc.) in the list.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://tools.ietf.org/html/rfc6749",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "You need to read this specification to learn the details of the framework, which you have to know when adding support for OAuth 2.0 in your own app, or when using another app supporting OAuth 2.0.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "https://oauth.net/2/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "If you think the specification is too hard to read to get the big picture, the resources on this website might be easier to understand.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h1 id="oauth-2-0" tabindex="-1"><a class="header-anchor" href="#oauth-2-0" aria-hidden="true">#</a> OAuth 2.0</h1><p>OAuth 2.0 is an authorization framework describing how you can give other applications access to your own users&#39; data (resources) stored in your application. Usually, big companies like Google are the ones who implement the framework, and we others instead create our own third-party applications in which we can access our users&#39; Google resources through the framework. When your own solution consists of your own client application and your own server application (such as an Android application and a web application exposing a REST API), you can use this framework in your server application for authorization too.</p><p>The main idea is that the client application obtains an Access Token from the server application, which gives the client application permission to access a user&#39;s resources that is stored on the server application (typically through a REST API). OAuth 2.0 specifies different ways this can be done.</p><h2 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h2><p>To describe how it works, OAuth 2.0 first defines 4 different roles. You can think of these as 4 different actors, but they are called roles, probably because one and the same actor can have multiple roles at the same time.</p><h3 id="resource-owner" tabindex="-1"><a class="header-anchor" href="#resource-owner" aria-hidden="true">#</a> Resource Owner</h3><p>This is simply the user that is using the Client application and that have an account with associated resources on the server application.</p><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h3><p>This is the application the user is using (for example an Android application), and this is the application that wants to access the user&#39;s resources on the server.</p><h3 id="resource-server" tabindex="-1"><a class="header-anchor" href="#resource-server" aria-hidden="true">#</a> Resource Server</h3><p>This is the server that stores and guards access to all the resources on the server. When a Client wants to access the user&#39;s resources, the Client will send HTTP requests to this server and pass along an Access Token as a proof of that the user has granted the Client access to her resources.</p><h3 id="authorization-server" tabindex="-1"><a class="header-anchor" href="#authorization-server" aria-hidden="true">#</a> Authorization Server</h3><p>This is the server the Resource Owner use to give a Client permission to access her resources on the Resource Server. This server typically generates Access Tokens the Client can use to access the user&#39;s resources on the Resource Server.</p><div class="custom-container tip"><p class="custom-container-title">Two servers?!</p><p>The roles Resource Server and Authorization Server can be hold by one and the same server application, typically a web application.</p></div><h2 id="protocol-flow" tabindex="-1"><a class="header-anchor" href="#protocol-flow" aria-hidden="true">#</a> Protocol flow</h2>', 15);
const _hoisted_28 = /* @__PURE__ */ createStaticVNode('<p>An Authorization Grant is simply something a Client can show to the Authorization Server to prove that the Resource Owner has granted the Client permission to access the Resource Owner&#39;s resources.</p><p>In some cases, the Authorization Server sends back the Access Token directly to the user (which the user then directly gives to the Client), instead of using the detour with an Authorization Grant.</p><h2 id="client-registration" tabindex="-1"><a class="header-anchor" href="#client-registration" aria-hidden="true">#</a> Client Registration</h2><p>In most cases, the Client needs to pre-register itself and be approved as a Client at the Authorization Server before it can request Access Tokens from it. This way, arbitrary (potentially evil) applications can&#39;t request Access Tokens from it.</p><p>When the Client registers itself it will receive a <code>client_id</code> and <code>client_secret</code> it can use to authenticate itself to the Authorization Server. <code>client_secret</code> should of course be kept secret. Additional information about the Client can also be provided in the registration process, such as which URIs that can be used to identify the Client application.</p><h2 id="obtaining-access-token" tabindex="-1"><a class="header-anchor" href="#obtaining-access-token" aria-hidden="true">#</a> Obtaining Access Token</h2>', 6);
const _hoisted_34 = {
  href: "https://oauth.net/2.1/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "resource-owner-password-credentials-grant",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#resource-owner-password-credentials-grant",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Resource Owner Password Credentials Grant")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "This flow is the most straight forward and easiest flow to understand. It can be used when you are the owner of the both the server that implements OAuth 2.0 and the Client, i.e. when the Client is a first-party application, and not a third-party application. For example, the YouTube app for smartphones can use this to flow to let users login with their Google accounts, since Google owns and develop the YouTube app.",
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("This flow does not require the Client to first register itself at the Authorization Server, so this flow does not make use of "),
    /* @__PURE__ */ createBaseVNode("code", null, "client_id"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "client_secret"),
    /* @__PURE__ */ createTextVNode(". Also, no Authorization Grant is used, so the user directly obtains an Access Token from the Authorization Server.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The obvious drawback with this flow is that the user reveals her credentials (username and password) to the Client, which the whole point of this framework is to avoid, so this is really not a good flow to use. But as long as the Client comes from the same company that developed the server application, there's should be no danger in doing that, since the Client company already know the users' credentials.",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "This flow has been deprecated"),
    /* @__PURE__ */ createBaseVNode("p", null, `This flow has been deprecated. The reason is that this flow reveals the user's username and password to the Client, which the whole idea with this authorization framework is to prevent, and you can avoid that using other flows. Rather see this flow as a "shortcut flow" that existed in the beginning, and not a "proper flow".`),
    /* @__PURE__ */ createBaseVNode("p", null, "If you from scratch build your own client and server application that you want to secure with OAuth 2.0, using this flow can be an acceptable option, since it's so easy to implement support for. But Google and other big OAuth 2.0 providers should definitely not use it. The risk is that an evil Client app (and not only Google's own apps) asks for the user's Google username and Google password, and if the user enters them, the evil Client app has come over the user's credentials, which is bad. It's better if the user always enters her credentials directly to the Authorization Server, and never exposes them to the Client.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "authorization-code-grant",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#authorization-code-grant",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Authorization Code Grant")
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("This flow is the de-facto standard flow to use in OAuth 2.0. It is particularly used when the Client is a web application. The Authorization Grant used is in this flow is an "),
    /* @__PURE__ */ createBaseVNode("em", null, "Authorization Code"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Why so complicated?!</p><p>Why does the Authorization Server first send back an Authorization Code, which the Client then needs to trade for an Access Token, instead of sending back the Access Token directly?</p><p>This is done to expose the Access Token as little as possible (i.e. only to the Client). Since the user is (most often) using her web browser to communicate with the Authorization Server, if the Authorization Server would send back the Access Token directly, and the user would have installed a bad browser extension, that browser extension would maybe be able to read the Access Token (depending on which permissions the extension has been granted). That browser extension would then be able to access the user&#39;s resources using the Access Token, and this is bad.</p><p>Since the Authorization Server now instead only sends back an Authorization Code, that bad extension won&#39;t be able to do anything bad, since exchanging it for an Access Token also requires the <code>client_secret</code>, which only the Client knows.</p></div><p>This flow can also be used for Clients where the user has access to the source code (single-page applications, smartphone applications, desktop applications, etc.), but in these cases, the Client to Authorization Server communication will not include the <code>client_secret</code> (since users would be able to read it in the code), so the Client won&#39;t authenticate itself to the Authorization Server, which makes this flow a little bit less secure. But these applications can use this flow with the Proof Key for Code Exchange extension to make it a bit more secure. Read more about this extension further down.</p><h3 id="implicit-grant" tabindex="-1"><a class="header-anchor" href="#implicit-grant" aria-hidden="true">#</a> Implicit Grant</h3><p>The flow Authorization Code Grant (with the Proof Key for Code Exchange extension) can these days be used in most cases. There exists an old flow called Implicit Grant, which simplified the Authorization Code Grant flow by sending back an Access Token directly, instead of taking the detour with the Authorization Code. The Implicit Grant flow was intended to be used by single-page applications. Since they run in the web browser, taking the detour with the Authorization Code makes no sense, since the Access Token will be exposed to the web browser in the end any way. Single-page applications could also have difficulties with exchanging the Authorization Code for an Access Token because of web browsers&#39; Same-Origin Policy, making this flow their only option, but that&#39;s usually not a problem these days.</p>', 4);
const _hoisted_46 = { class: "custom-container warning" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "This flow has been deprecated",
  -1
  /* HOISTED */
);
const _hoisted_48 = {
  href: "https://tools.ietf.org/html/draft-ietf-oauth-security-topics-09",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "For one, the Access Token is passed to the Client through the URL in the web browser, and any (evil) library used in the single-page application will be able to read the Access Token that way. By using the detour with the Authorization Code in the Authorization Code Grant flow instead, an evil library in the single-page application will just be able to read the Authorization Code, which is less useful than the Access Token.",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "the-proof-key-for-code-exchange-extension",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#the-proof-key-for-code-exchange-extension",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" The Proof Key for Code Exchange extension")
  ],
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When a smartphone app use the Authorization Code Grant flow, the user needs to be taken back to the smartphone app (the Client) after the Authorization Server has sent back an Authorization Code to the user. For this to work, the smartphone app can on the user's device register URLs that should open the Client when used, and the Authorization Server will send back an HTTP redirect response to that URL, which then will cause the device to open the Client application.",
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "However, any smartphone app can register these URLs. An evil smartphone app can therefor register that it should be opened when a URL with an Authorization Code is used that is really intended for another Client, and that way come over the Authorization Code.",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "To prevent this, and to make Authorization Codes less valuable on their own, the Proof Key for Code Exchange extension was introduced to the Authorization Code Grant flow.",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "With this extension, when the Client wants the Resource Owner to ask the Authorization Server to generate an Authorization Code for it, the Client first:",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("Generates a random string called the "),
    /* @__PURE__ */ createBaseVNode("code", null, "code_verifier")
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "code_challenge",
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "code_verifier",
  -1
  /* HOISTED */
);
const _hoisted_58 = {
  href: "https://en.wikipedia.org/wiki/SHA-2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Then in the Resource Owner's request to the Authorization Server to generate an Authorization Code, it also passes along the "),
    /* @__PURE__ */ createBaseVNode("code", null, "code_challenge"),
    /* @__PURE__ */ createTextVNode(" to the Authorization Server, which the Authorization Server then remembers.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Then, when the Client has obtained the Authorization Code and want's to exchange it for an Access Token, it also needs to pass along the "),
    /* @__PURE__ */ createBaseVNode("code", null, "code_verifier"),
    /* @__PURE__ */ createTextVNode(" in the request. The Authorization Server will hash the "),
    /* @__PURE__ */ createBaseVNode("code", null, "code_verifier"),
    /* @__PURE__ */ createTextVNode(" using SHA256, and if the hash value doesn't match the "),
    /* @__PURE__ */ createBaseVNode("code", null, "code_challenge"),
    /* @__PURE__ */ createTextVNode(" it received before, it won't accept the exchange. This way, only the true Client can exchange the Authorization Code for an Access Token, because no one else knows which valid "),
    /* @__PURE__ */ createBaseVNode("code", null, "code_verifier"),
    /* @__PURE__ */ createTextVNode(" to send to the Authorization Server in the exchange request.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "client-credentials-grant",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#client-credentials-grant",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Client Credentials Grant")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("This flow can be used when the Client wants to obtain an Access Token it can use to access its own resources on the Resource Server (if you ever have a use-case for that). Since it uses "),
    /* @__PURE__ */ createBaseVNode("code", null, "client_id"),
    /* @__PURE__ */ createTextVNode(" and "),
    /* @__PURE__ */ createBaseVNode("code", null, "client_secret"),
    /* @__PURE__ */ createTextVNode(" you should only use this when the Client runs on a server, so your users won't have access to the source code and can read the "),
    /* @__PURE__ */ createBaseVNode("code", null, "client_secret"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("Wikipedia's List of OAuth providers"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("OAuth 2.0 Framework - RFC 6749"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_10
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("https://oauth.net/2/"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_12
      ])
    ]),
    _hoisted_13,
    createVNode(_component_FigureNumber),
    createTextVNode(" below gives an overview of how the Client can obtain and use an Access Token. All communication with the Authorization Server and the Resource Server are done using HTTP (HTTPS). When the Resource Owner needs to communicate with the Authorization Server, she will (most often, but not necessarily) do so using her web browser."),
    createVNode(_component_Figure, { caption: "Overview of the protocol used in OAuth 2.0." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Grant.\n    deactivate as\n    ro ->> c: Here is the Authorization Grant.\n    activate c\n    deactivate ro\n    c ->> as: Here is the Authorization Grant.\n    activate as\n    as ->> c: Here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_28,
    createBaseVNode("p", null, [
      createTextVNode("OAuth 2.0 describes 4 different flows clients can use to obtain an Access Token. With time, some of these flows have been found to contain security vulnerabilities and have been deprecated, and new and more secure flows have been created. "),
      createBaseVNode("a", _hoisted_34, [
        createTextVNode("OAuth 2.1"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" will contain the most up-to-date information about which flows that are best to use, but at the moment that's just a draft, and should not be seen as a reliable source of truth.")
    ]),
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
    createVNode(_component_FigureNumber),
    createTextVNode(" below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification."),
    createVNode(_component_Figure, { caption: "The flow of the Resource Owner Password Credentials Grant." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> c: Here is my username and password.\n    deactivate ro\n    activate c\n    c ->> as: Here is a user's username and password.\n    activate as\n    as ->> c: Here is an Access Token for that user's resources.\n    deactivate as\n    c ->> rs: Here is the Access Token, now give me the resources.\n    activate rs\n    rs ->> c: Access Token is valid, here are the resources.\n    deactivate rs\n    deactivate c\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_38,
    _hoisted_39,
    _hoisted_40,
    _hoisted_41,
    createVNode(_component_FigureNumber),
    createTextVNode(" below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification."),
    createVNode(_component_Figure, { caption: "The flow of the Authorization Code Grant." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client with client_id=X wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Code.\n    deactivate as\n    ro ->> c: Here is the Authorization Code.\n    activate c\n    deactivate ro\n    c ->> as: Here is my client_id, client_secret and an Authorization Code.\n    activate as\n    as ->> c: Everything is fine, here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_42,
    createVNode(_component_FigureNumber),
    createTextVNode(" below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification."),
    createVNode(_component_Figure, { caption: "The flow of the Implicit Grant." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> ro: I want access to your resources.\n    deactivate c\n    ro ->> as: The Client with client_id=X wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Access Token for your resources.\n    deactivate as\n    ro ->> c: Here is the Access Token.\n    activate c\n    deactivate ro\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("div", _hoisted_46, [
      _hoisted_47,
      createBaseVNode("p", null, [
        createTextVNode("This flow has been deprecated. The reasons are the security vulnerabilities explained in "),
        createBaseVNode("a", _hoisted_48, [
          createTextVNode("OAuth 2.0 Security Best Current Practice"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" for this flow.")
      ]),
      _hoisted_49
    ]),
    _hoisted_50,
    _hoisted_51,
    _hoisted_52,
    _hoisted_53,
    _hoisted_54,
    createBaseVNode("ol", null, [
      _hoisted_55,
      createBaseVNode("li", null, [
        createTextVNode("Computes the "),
        _hoisted_56,
        createTextVNode(" by hashing the "),
        _hoisted_57,
        createTextVNode(" using "),
        createBaseVNode("a", _hoisted_58, [
          createTextVNode("SHA256"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_59,
    _hoisted_60,
    createVNode(_component_FigureNumber),
    createTextVNode(" below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specifications."),
    createVNode(_component_Figure, { caption: "The flow of the Authorization Code Grant." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client\n    participant as as Authorization Server\n    participant rs as Resource Server\n    ro ->> c: I start using you!\n    activate ro\n    activate c\n    c ->> c: I generate code_verifier V and code_challenge C.\n    c ->> ro: I want access to your resources, code_challenge=C.\n    deactivate c\n    ro ->> as: The Client with client_id=X, code_challenge=C wants access to my resources.\n    activate as\n    as ->> ro: Is that OK with you?\n    deactivate as\n    ro ->> as: Yes\n    activate as\n    as ->> ro: OK, here is an Authorization Code, I remember code_challenge=C.\n    deactivate as\n    ro ->> c: Here is the Authorization Code.\n    activate c\n    deactivate ro\n    c ->> as: Here is my client_id, client_secret, an Authorization Code and code_verifier=V.\n    activate as\n    as ->> c: Everything is fine, here you have an Access Token.\n    deactivate as\n    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.\n    activate rs\n    rs ->> c: Access Token fine, here you have the resources.\n    deactivate rs\n    deactivate c\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_61,
    _hoisted_62,
    createVNode(_component_Figure, { caption: "The flow of the Client Credentials Grant." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant ro as Resource Owner\n    participant c as Client \n    participant as as Authorization Server\n    participant rs as Resource Server\n    c ->> as: Here is my client_id and client_secret.\n    activate c\n    activate as\n    as ->> c: Here is your Access Token.\n    deactivate as\n    c ->> rs: Here is my Access Token, give me my own resources.\n    activate rs\n    rs ->> c: Access Token token is valid, here are your resources.\n    deactivate c\n    deactivate rs\n" })
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
