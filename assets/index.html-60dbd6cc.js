import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "web-cookies",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#web-cookies",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Web Cookies")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://tools.ietf.org/html/rfc6265",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h2 id="http-is-stateless" tabindex="-1"><a class="header-anchor" href="#http-is-stateless" aria-hidden="true">#</a> HTTP is stateless</h2><p>So, why do we have cookies? We have cookies because HTTP is a stateless protocol. What that means in practice is that when the server receives an HTTP request from a client, that HTTP request should contain all information the server needs to carry out the request. The server should not need to have any memory of previous HTTP requests it has received and carried out. If it would need to remember that, then HTTP wouldn&#39;t be a stateless protocol. So when a server has carried out an HTTP request, it can simply forget everything about that request and the client the request came from.</p><p>So, why is HTTP a stateless protocol? There are some benefits with being stateless. For one, it is much easier to implement the server, because each incoming HTTP request contains all information it needs to carry out the request; no need to look at previous requests or to remember this request in the future. Another benefit is that it is also easier to scale the server if clients communicate with it using a stateless protocol, but let&#39;s not get into the details about that here.</p><p>So, why did we have cookies again? Imagine users can create accounts and login on our website. When a user sends a login request (username and password) to the server, then the server needs to check if these credentials are correct, and if they are, the user should be logged in to that account. When the user in the future sends a new request to the server, the server needs to remember which account that user is logged in to. Since HTTP is a stateless protocol, the server can&#39;t remember such information using HTTP. For this, and many other use-cases, we use cookies.</p><h2 id="what-is-a-cookie" tabindex="-1"><a class="header-anchor" href="#what-is-a-cookie" aria-hidden="true">#</a> What is a cookie?</h2><p>A cookie is simply a key-value pair, where the key (a string) is a short description of the value (which also is a string). The key is sometimes also called the name of the cookie.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server needs to remember that the user is 17 years old, then it could create a cookie with the key <code>age</code> and the value <code>17</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server needs to remember that a user lives in Jönköping, then it could create a cookie with the key <code>city</code> and the value <code>Jönköping</code>.</p></div><p>In addition to this, a cookie can also have some other attributes, but let us get back to those later.</p><h2 id="how-do-cookies-work" tabindex="-1"><a class="header-anchor" href="#how-do-cookies-work" aria-hidden="true">#</a> How do cookies work?</h2><p>So, using cookies, a server can remember information about a client. It works something like this:</p><ol><li>A client sends an HTTP request to the server.</li><li>When the server carries out the request, it realizes that it needs to remember some information about this client.</li><li>In the HTTP response the server sends back to the client, it tells the client to create a new cookie containing a specific key and a specific value.</li><li>When the client receives the HTTP response, it should create a cookie with the key and value the server instructed it to do in the response.</li><li>When the client sends HTTP requests to the server in the future, it should pass along the cookie (the key-value pair) to the server.</li></ol>', 12);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<p>So simply put: the server can tell the client to create cookies, the cookies are stored on the client (how is up to the client to decide, but most web browsers simply store them in files), and the client sends the cookies to the server in the HTTP requests it sends to it.</p><h3 id="creating-a-cookie" tabindex="-1"><a class="header-anchor" href="#creating-a-cookie" aria-hidden="true">#</a> Creating a cookie</h3><p>The server can tell a client to create a new cookie by adding the <code>Set-Cookie</code> header in the HTTP response. The value for this header is <code>key=value</code>. If the server wants the client to create multiple cookies, this header will be present multiple times in the HTTP response (one time for each cookie).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server wants a client to create a cookie with the key <code>age</code> and the value <code>17</code> and a cookie with the key <code>city</code> and the value <code>Jönköping</code>, it should send back an HTTP response like the one below (the status code does of course not have to be 200).</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">TODO</span><span class="token punctuation">:</span> <span class="token header-value">CHECK THIS</span></span>\n<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>\n<span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">age=17</span></span>\n<span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">city=Jönköping</span></span>\n...\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="sending-a-cookie" tabindex="-1"><a class="header-anchor" href="#sending-a-cookie" aria-hidden="true">#</a> Sending a cookie</h3><p>The client can send a cookie in an HTTP request by adding the <code>Cookie</code> header to the HTTP request. The value for this header is <code>key=value</code>. If the client wants to send multiple cookies, this header will be present multiple times in the HTTP request (one time for each cookie).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">TODO</span><span class="token punctuation">:</span> <span class="token header-value">FIX THIS</span></span>\n<span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">age=17</span></span>\n<span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">city=Jönköping</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="configuring-cookies" tabindex="-1"><a class="header-anchor" href="#configuring-cookies" aria-hidden="true">#</a> Configuring cookies</h2><p>When a server tells a client to create a new cookie, it can tell the client more infromation about the cookie than just the key and the value of the cookie. It can for example tell the client for how long time the cookie should be stored by the client.</p><p>...</p><h2 id="what-can-we-use-cookies-for" tabindex="-1"><a class="header-anchor" href="#what-can-we-use-cookies-for" aria-hidden="true">#</a> What can we use cookies for?</h2><p>To remember infromation about the client/user. What that information is up to you to decide, but heere are some examples.</p><p>...</p><h2 id="anything-special-to-think-about-when-using-cookies" tabindex="-1"><a class="header-anchor" href="#anything-special-to-think-about-when-using-cookies" aria-hidden="true">#</a> Anything special to think about when using cookies?</h2><h3 id="the-server-can-t-trust-cookies" tabindex="-1"><a class="header-anchor" href="#the-server-can-t-trust-cookies" aria-hidden="true">#</a> The server can&#39;t trust cookies</h3><p>Since the cookies are stored on the client, the client can easilly modify them, and therefor the server can&#39;t trust the cookies it receives. For example:</p><ul><li>If a server tells a client to create a cookie, it can&#39;t count on to receive this cookie in future requests from the client (the client can ignore creating the cookie, or the user might simply manually delete it).</li><li>When a server receives a cookie with a name it has previously told the client to create, it can&#39;t trust that the value in the cookie is the same value as it told the client to put in the cookie since the client easilly can change that value.</li><li>Nothing prevents a client from creating its own cookies, without the server telling it, so the server might reveice cookies from a client before it has told the client to create any.</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When the server receives a sucessfull login request, it can&#39;t remember that the client has logged by using a cookie like <code>isLoggedIn=true</code>, because any client (imagine hackers) can create a cookie like this one on their own without sending a successfull login request to the server. In this case, we should rather have used sessions instead.</p></div><h3 id="the-cookie-law" tabindex="-1"><a class="header-anchor" href="#the-cookie-law" aria-hidden="true">#</a> The cookie law</h3><p>Many websites make use of client-side JavaScript libraries, and these can be used by the library creator to track which website a specific user is visiting using cookies (client-side JavaScript can tell the web browser to create cookies too). European Union thought that this could risk users&#39; privacy online, and therefor introduced a EU directive which become known as the cookie law.</p><p>The directive simply states that ...</p><h3 id="gdpr" tabindex="-1"><a class="header-anchor" href="#gdpr" aria-hidden="true">#</a> GDPR</h3><p>...</p>', 23);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("A cookie is something a web application can use to remember information about a user. The specification "),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("HTTP State Management Mechanism"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" explains how it works in detail, but let me give you a quick introduction to cookies before you read the specification.")
    ]),
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("This is visualized in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Sequence Diagram visualizing how cookies work." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n	participant Client\n	participant Server\n	Client->>+Server: HTTP Request\n	Note right of Server: Need to remember\n	Server->>-Client: HTTP Response (create cookie)\n	Note left of Client: Creates and stores cookie\n	Client->>+Server: HTTP Request (with cookie)\n	Note right of Server: Reads info from cookie\n	Server->>-Client: HTTP Response\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_15
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};