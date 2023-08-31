import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="laboratory-work" tabindex="-1"><a class="header-anchor" href="#laboratory-work" aria-hidden="true">#</a> Laboratory Work</h1><p>This page contains instructions for the examination test <em>Laboratory Work</em>. It consists of two parts, and both of them need to be completed and presented orally to a teacher at a lab session before you pass the examination test.</p><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing Required Software</h2><p><strong>If you work on the computers in E2432 or E2433</strong>, all required software should already be installed for you, so no need to install anything yourself.</p><p><strong>If you work on a school computer in any other room</strong>, you need to manually install the required software through the <em>Software Center</em> application (unless someone already has done that on the specific computer you sit at).</p><p><strong>If you work on your own private computer</strong>, you need to download and install all required software yourself. In this course, we use only free software available for both Windows, Mac and Linux.</p><p>The required software is:</p>', 7);
const _hoisted_8 = {
  href: "https://nodejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Use the newest LTS version"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("In the installation process, make sure the following features are installed (they are checked by default, so simply don't uncheck them!): "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, "Node.js runtime"),
        /* @__PURE__ */ createBaseVNode("li", null, "npm package manager"),
        /* @__PURE__ */ createBaseVNode("li", null, "Add to PATH")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("To verify that Node.js has been successfully installed, run the command "),
      /* @__PURE__ */ createBaseVNode("code", null, "node -v"),
      /* @__PURE__ */ createTextVNode(" in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of Node.js that was installed, something like "),
      /* @__PURE__ */ createBaseVNode("code", null, "v16.17.0")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = {
  href: "https://www.npmjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("To verify that npm has been successfully installed, run the command "),
    /* @__PURE__ */ createBaseVNode("code", null, "npm -v"),
    /* @__PURE__ */ createTextVNode(" in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of npm that was installed, something like "),
    /* @__PURE__ */ createBaseVNode("code", null, "8.18.0")
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The following software tools are not required (use whichever tools you want), but recommended:",
  -1
  /* HOISTED */
);
const _hoisted_14 = {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "IDE with good support for writing, running and debugging Node.js and JavaScript code",
  -1
  /* HOISTED */
);
const _hoisted_16 = {
  href: "https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "code",
  -1
  /* HOISTED */
);
const _hoisted_18 = {
  href: "https://sqlitebrowser.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = {
  href: "https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = {
  href: "https://www.getpostman.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "App you can use to send custom HTTP requests to a web application")
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "lab-1-the-tool-app",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#lab-1-the-tool-app",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Lab 1: The Tool App")
  ],
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part you are expected to read/view the following lectures:",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<p>The tutorial about Vue will also help you learn the basics.</p><hr><p>The goal with this part of the laboratory work is to teach you how to use Vue to build a Single-Page Application. Vue is a quite big framework (it would be possible to have a single 7.5 credit course just to teach you all there is to know about Vue), so you are only expected to learn and use the basics (what is taught in this course), which will be enough to create quite advanced and good Single-Page Applications.</p><p>The Single-Page Application you should create will consist of different pages, each containing a useful tool of some kind such as a simple calculator, a clock, a counter, etc.</p><div class="custom-container warning"><p class="custom-container-title">Help, don&#39;t cheat!</p><p>The laboratory work is individual work.</p><p><strong>It is OK</strong> to help each other. Examples of that:</p><ul><li>help your friend to debug his code</li><li>explain to your friend why his code doesn&#39;t work the way he thinks it works</li><li>compare and discuss different solutions to a lab problem with your friend after both of you have solved the lab to figure out which solution is the best one</li></ul><p><strong>It is NOT OK</strong> to cooperate in any way. Examples of that:</p><ul><li>sit at the same computer and write code together with your friend</li><li>sit at different computers and discuss and write the same code as your friend</li><li>give code to/receive code from your friend</li></ul><p><strong>You must write your own code! If you are unsure about what counts as <em>helping</em> and what counts as <em>cheating</em>, then simply work alone and ask only the teacher at the lab sessions for help.</strong></p></div><h3 id="creating-a-new-vue-application" tabindex="-1"><a class="header-anchor" href="#creating-a-new-vue-application" aria-hidden="true">#</a> Creating a new Vue application</h3>', 6);
const _hoisted_30 = {
  href: "https://vuejs.org/guide/scaling-up/sfc.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ".vue",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ".vue",
  -1
  /* HOISTED */
);
const _hoisted_33 = {
  href: "https://vitejs.dev/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = {
  href: "https://vuejs.org/guide/quick-start.html#with-build-tools",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_35 = {
  href: "https://github.com/PeppeL-G/vue-3-options-api-starter",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createStaticVNode('<ol><li><code>code .</code> - Start Visual Studio Code with the application&#39;s root folder opened in the Explorer panel <ul><li>In Visual Studio Code, install the recommended extensions you might be prompted to do (will make it easier to write Vue code)</li></ul></li><li><code>npm install</code> - Installs all npm packages required to run the app</li><li><code>npm run dev</code> - Starts Vite</li><li>Open the URL shown in the shell (something like http://127.0.0.1:5173/) in a web browser to see how your Vue application works</li><li>Try changing some of the HTML/CSS code in one of the <code>.vue</code> files. When you save your changes, Vite will immediately transpile the code in the <code>.vue</code> file and push the new JS code to the web browser, which will immediately apply the changes, so you can see the result directly</li><li>When you are done and want to stop Vite form running, hold down <code>[CTRL]</code> and press <code>[C]</code> (works on Windows, Mac might have other combination)</li></ol><p>Let&#39;s quickly go through the most important files and folders the Vue 3 Option API Starter project consists of:</p><h4 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html" aria-hidden="true">#</a> <code>index.html</code></h4><p><code>index.html</code> acts as the entry point to the Vue app. The web web browser will start by requesting this file, which mostly will just tell the web browser to request other files required to display the app.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/favicon.ico<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Vite App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/src/main.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code> is where the Vue app will mount/attach itself on the webpage later when it starts. The rest of the code here is ordinary HTML.</p><h4 id="public-folder" tabindex="-1"><a class="header-anchor" href="#public-folder" aria-hidden="true">#</a> <code>public</code> folder</h4><p>The <code>public</code> folder contains static files (typically images) that will be left as they are (never processed by Vite in any way, and never renamed by Vite) in the root folder of the app. Currently it only contains the <code>favicon.ico</code> file, but you can put other files here too if you want. It&#39;s usually better to put files in the <code>src/assets</code> folder. Those files Vite is allowed to process and can optimize (such as giving them shorter names).</p><h4 id="src-assets-folder" tabindex="-1"><a class="header-anchor" href="#src-assets-folder" aria-hidden="true">#</a> <code>src/assets</code> folder</h4><p>Put static files here (such as images) Vite is allowed to process and rename.</p><p>For example, if you put the file <code>my.css</code> in the <code>public</code> folder and add <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;my.css&quot;&gt;</code> to your HTML code, the web browser will fetch the CSS file as it is. But if you instead put the file <code>my.css</code> in the <code>src/assets</code> folder and add <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;/src/assets/my.css&quot;&gt;</code> to your HTML code, the when the web browser requests the file Vite will send back an optimized version of the file (such as removing unnecessary white-space characters), which is much better.</p><div class="custom-container warning"><p class="custom-container-title">Optimization only in production builds</p><p>If actually try out what is written above, the CSS file might not be optimized, but serve as it is. That is because Vite runs in development mode, and while developing, it is easer to debug code if it hasn&#39;t been optimized. However, if you would build the app in production mode, then Vite would apply optimization techniques, and your code would be optimized.</p></div><h4 id="src-main-js" tabindex="-1"><a class="header-anchor" href="#src-main-js" aria-hidden="true">#</a> <code>src/main.js</code></h4><p>This is the main entry point for your JavaScript code. It&#39;s responsible to initialize your Vue app and mount/attach it to the webpage. Currently it tells Vue that the <code>App.vue</code> component should be mounted/attached to the element on the webpage with id <code>app</code>. It also add routing capabilities to the Vue app (the router is defined in <code>src/router.js</code>).</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Vite supports importing CSS files like this (will be pushed to the web browser).</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./assets/main.css&#39;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router.js&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="src-app-vue" tabindex="-1"><a class="header-anchor" href="#src-app-vue" aria-hidden="true">#</a> <code>src/App.vue</code></h4><p>This is the root component the Vue app consists of. Currently it shows how to import and use the <code>Footer</code> component from the <code>src/components</code> folder. It also add links leading to different pages using the <code>RouterLink</code> component, and it displays the main content on the current page using the <code>RouterView</code> component (these two components are pre-registered as global components, so we don&#39;t need to import them). To learn which main content that is shown on which page, take a look at the <code>src/router.js</code> file.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;./components/Footer.vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n	\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n	\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\n		My app!\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>\n	\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>\n	\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterView</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>\n	\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token attr-name">:copyrightYear</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2022<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Footer</span><span class="token punctuation">&gt;</span></span>\n	\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- The &quot;scoped&quot; attribute here will make the CSS selectors only\n     match HTML elements in this Vue component, and never any HTML\n     elements in other Vue components. --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">nav</span><span class="token punctuation">{</span>\n	<span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="src-router-js" tabindex="-1"><a class="header-anchor" href="#src-router-js" aria-hidden="true">#</a> <code>src/router.js</code></h4><p>This file tells Vue which Vue Component to show as the main content on the page depending on which URL the user navigates to. Currently it says:</p><ul><li>The URL <code>/</code> should show the Vue component <code>/src/views/Home.vue</code> as the main content</li><li>The URL <code>/about</code> should show the Vue component <code>/src/views/About.vue</code> as the main content</li></ul><p>The Vue components used as the main content for different URLs this way are called <em>Views</em>, and put in the <code>src/views</code> folder.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\n<span class="token keyword">import</span> HomeView <span class="token keyword">from</span> <span class="token string">&#39;./views/HomeView.vue&#39;</span>\n<span class="token keyword">import</span> AboutView <span class="token keyword">from</span> <span class="token string">&#39;./views/AboutView.vue&#39;</span>\n\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n	<span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n	<span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n		<span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>      <span class="token literal-property property">component</span><span class="token operator">:</span> HomeView<span class="token punctuation">}</span><span class="token punctuation">,</span>\n		<span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> AboutView<span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> router\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="the-src-views-folder" tabindex="-1"><a class="header-anchor" href="#the-src-views-folder" aria-hidden="true">#</a> The <code>src/views</code> folder</h4><p>The Vue components in the <code>src/views</code> folder (currently <code>Home.vue</code> and <code>About.vue</code>) represent the main content on the various pages. They are also called <em>views</em>.</p><p>Sample code of <code>src/views/Home.vue</code> is shown below:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n	\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is the home page!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.page</span><span class="token punctuation">{</span>\n	<span class="token property">background-color</span><span class="token punctuation">:</span> lime<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="src-components-folder" tabindex="-1"><a class="header-anchor" href="#src-components-folder" aria-hidden="true">#</a> <code>src/components</code> folder</h4><p>The Vue components in the <code>src/components</code> folder represent Vue components that can be re-used in other Vue components. As an example, if you want to have a login form at multiple different places in your application you could create a Vue component in this folder (e.g. <code>Login.vue</code>) containing that login form/functionality, and then refer to this component in any other Vue component where you want the login form to appear.</p><p>In addition to containing re-usable Vue components, some Vue components are simply very big (many lines of code), and you can break it down into multiple smaller Vue components to get code that is easer to read. An example of this is demonstrated through the <code>src/components/Footer.vue</code> component, which is used by <code>src/App.vue</code>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n		<span class="token literal-property property">copyrightYear</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>\n	<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>\n		Copyright {{copyrightYear}}\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example there is not big gain with having <code>copyrightYear</code> as a prop (could just as well hardcode it to <code>2022</code> in the HTML code instead), but it is used just to show you an example of how you can use a prop in a component.</p><h3 id="application-layout" tabindex="-1"><a class="header-anchor" href="#application-layout" aria-hidden="true">#</a> Application (layout)</h3><p>So <code>src/App.vue</code> is the Vue component that act as the layout for the application. You can use the special Vue component <code>&lt;RouterView&gt;</code> to insert the main content at one place, and you can use the special Vue component <code>&lt;RouterLink to=&quot;/THE-URL&quot;&gt;LINK TEXT&lt;/RouterLink&gt;</code> to insert links to the other &quot;pages&quot;/views.</p><p>Improve the layout (i.e. the code in <code>/src/App.vue</code>) to contain at least:</p><ul><li>A proper header</li><li>A proper navigation menu</li><li>The main content</li><li>A proper footer</li></ul><p>Design your layout however you want. It&#39;s not that important that it&#39;s beautiful, the most important thing is that you learn how this component works and should be used. See the rest of the sub-chapters in Lab 1 to see which links you need to have in the navigation menu (or the header/footer).</p><p>Also note that some CSS code already exists in <code>src/assets/main.css</code>. Feel free to change that code too.</p><p>Feel free to structure your code however you want. You may delete <code>src/components/Footer.vue</code> if you think that component just makes it more complicated, and you may equally well also add and use other components, such as <code>src/components/Header.vue</code> and <code>src/components/Navigation.vue</code>, if you want.</p><div class="custom-container tip"><p class="custom-container-title">Be smart/lazy</p><p>Feel free to use a CSS framework such as Bootstrap to design your application. Most CSS frameworks are distributed as npm packages, so often you can just run <code>npm install XXX</code> to download the source files for the framework and then load them into your application by importing the required CSS and JS files from the npm package you downloaded in the <code>src/main.js</code> file. Loading them from a Content Delivery Network by adding <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> elements in <code>index.html</code> works as well.</p></div><h3 id="home-about-static" tabindex="-1"><a class="header-anchor" href="#home-about-static" aria-hidden="true">#</a> Home &amp; About (static)</h3><p>Change <code>/src/views/Home.Vue</code> and <code>/src/views/About.Vue</code> to be more relevant to your application. It&#39;s not that important what they contain, but they should feel like they&#39;re part of the application. The goal is simply to practice on using HTML and CSS in your Vue component.</p><h3 id="dice-state-conditionals-events" tabindex="-1"><a class="header-anchor" href="#dice-state-conditionals-events" aria-hidden="true">#</a> Dice (state, conditionals, events)</h3><p>Add a new View component representing the main content on a &quot;page&quot; that displays a random value between 1 and 6:</p><ol><li>Create a new file called <code>Dice.vue</code> in <code>/src/views/</code>. To start you can simply copy the content of <code>Home.vue</code> and paste it in <code>Dice.vue</code></li><li>Register a route to this new component in <code>/src/router.js</code></li><li>If you haven&#39;t already done it, provide a link to the new route by adding <code>&lt;RouterLink to=&quot;/THE-URL&quot;&gt;LINK TEXT&lt;/RouterLink&gt;</code> to the navigation menu/header/footer in your layout (<code>/src/App.vue</code>)</li></ol><p>Then add the <code>data</code> function to <code>Dice.vue</code>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> between1And6 <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">diceValue</span><span class="token operator">:</span> between1And6\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then change the HTML code in <code>Dice.vue</code> to display <code>diceValue</code>. Start by simply showing the number as text. If you want, you can have one image for each dice value, and show the corresponding image instead.</p><p>In the HTML code you should also display the text:</p><ul><li><code>That was low.</code> if <code>diceValue</code> is 1 or 2</li><li><code>That was average.</code> if <code>diceValue</code> is 3 or 4</li><li><code>That was high.</code> if <code>diceValue</code> is 5 or 6</li></ul>', 50);
const _hoisted_86 = {
  href: "https://vuejs.org/v2/guide/conditional.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-if",
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-else-if",
  -1
  /* HOISTED */
);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-else",
  -1
  /* HOISTED */
);
const _hoisted_90 = /* @__PURE__ */ createStaticVNode('<p>To generate a new random dice value shown on the screen, the user currently needs to go to another &quot;page&quot; and then back again (so the current instance of <code>Dice.vue</code> is deleted and then a new instance of it is created and displayed when the user gets back). This is not that convenient for the user. Instead, add an HTML button in <code>Dice.vue</code> the user can click on to &quot;throw&quot; the dice again (generate a new random integer between 1 and 6). You need to add a method to your component to handle the click like this:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">throwDice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token comment">// You need to change the code here...</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>diceValue <span class="token operator">=</span> <span class="token number">5</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_92 = {
  href: "https://vuejs.org/v2/guide/events.html#Listening-to-Events",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-on",
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "@",
  -1
  /* HOISTED */
);
const _hoisted_95 = /* @__PURE__ */ createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Inside a method in a Vue component (such as <code>throwDice</code> above) we can use the special variable <code>this</code> to refer to the instance of the Vue component itself. <code>this.diceValue</code> will refer to the same <code>diceValue</code> in the object we returned from the <code>data()</code> method.</p></div><h3 id="faq-loops" tabindex="-1"><a class="header-anchor" href="#faq-loops" aria-hidden="true">#</a> FAQ (loops)</h3><p>Add a new View component representing the main content on a FAQ &quot;page&quot;. The procedure is similar to what you did before.</p><p>Don&#39;t hard code the FAQs in the HTML code in your component. Instead, use the <code>data()</code> method and put the FAQ objects in an array like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">question</span><span class="token operator">:</span> <span class="token string">&quot;How old are you?&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">answer</span><span class="token operator">:</span> <span class="token string">&quot;I&#39;m 10 years old.&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">question</span><span class="token operator">:</span> <span class="token string">&quot;What&#39;s your favorite color?&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">answer</span><span class="token operator">:</span> <span class="token string">&quot;My favorite color is purple.&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 5);
const _hoisted_100 = {
  href: "https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-for",
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createStaticVNode('<p>Then add a <code>showAnswer</code> property to each of your FAQ objects in the array with the initial value <code>false</code>. The answer to a FAQ should only be shown if its <code>showAnswer</code> property has the value <code>true</code>. The user should be able to show/hide the answer to each FAQ by clicking on the FAQ&#39;s question shown on the screen. So in the HTML code you need to listen for click on the question, and then invert that FAQ object&#39;s <code>showAnswer</code> value.</p><p>Somewhere on the &quot;page&quot; you should also display how many FAQs there are in total.</p><h3 id="calculator-model-binding-computed-properties" tabindex="-1"><a class="header-anchor" href="#calculator-model-binding-computed-properties" aria-hidden="true">#</a> Calculator (model binding, computed properties)</h3><p>Add a new page with a form in which the user can enter two numbers and select one of the operations <code>+</code>, <code>-</code>, <code>*</code> and <code>/</code>. As the user changes any of these fields, the result of the computation should be shown on the screen, but no result should be shown on the screen until the user has changed all three fields.</p>', 4);
const _hoisted_106 = {
  href: "https://vuejs.org/v2/guide/forms.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-model",
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<input>",
  -1
  /* HOISTED */
);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "<select>",
  -1
  /* HOISTED */
);
const _hoisted_110 = {
  href: "https://vuejs.org/v2/guide/computed.html#Computed-Properties",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_111 = /* @__PURE__ */ createStaticVNode('<h3 id="clock-life-cycles" tabindex="-1"><a class="header-anchor" href="#clock-life-cycles" aria-hidden="true">#</a> Clock (life cycles)</h3><p>Some times you want to create a Vue component that needs to be updated regularly. An example of that is a <code>Clock.vue</code> component that displays the current time of day in the format HH:mm:ss and updates that each second.</p><p>To figure out what the current time is, JavaScript gives us the <code>Date</code> constructor that we can use like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> hours <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// E.g. 14</span>\n<span class="token keyword">const</span> minutes <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// E.g. 4</span>\n<span class="token keyword">const</span> seconds <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// E.g. 45</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 4);
const _hoisted_115 = {
  href: "https://www.w3schools.com/jsref/met_win_setinterval.asp",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "setInterval()",
  -1
  /* HOISTED */
);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "setInterval()",
  -1
  /* HOISTED */
);
const _hoisted_118 = {
  href: "https://www.w3schools.com/jsref/met_win_clearinterval.asp",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_119 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "clearInterval()",
  -1
  /* HOISTED */
);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "setInterval()",
  -1
  /* HOISTED */
);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "mounted()",
  -1
  /* HOISTED */
);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "clearInterval()",
  -1
  /* HOISTED */
);
const _hoisted_123 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "unmounted()",
  -1
  /* HOISTED */
);
const _hoisted_124 = /* @__PURE__ */ createStaticVNode('<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Call setInterval() here...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Call clearInterval() here...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To remember the id you get back from <code>setInterval()</code>, you can simply store it on the Vue component instance using the special <code>this</code> variable, i.e. <code>this.intervalId = &quot;The value we get back from setInterval()&quot;</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The callback function you pass to <code>setInterval()</code> we be invoked as a function by the web browser. That means the special variable <code>this</code> inside the callback function will not refer to the Vue component instance unless you write code explicitly making that happen.</p><p>Don&#39;t use:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// The special variable &quot;this&quot; won&#39;t refer to the Vue component instance here :(</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instead, either do one of the following:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// The special variable &quot;this&quot; will refer to the Vue component instance :)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// The special variable &quot;this&quot; will refer to the Vue component instance :)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// The variable &quot;self&quot; will refer to the Vue component instance :)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Use <code>setInterval()</code>, <code>clearInterval()</code> and <code>Date</code> to implement a <code>Clock.vue</code> component that displays the current time in the format HH:mm:ss (each unit should always be displayed with two digits). Be sure to properly use <code>mounted()</code> and <code>unmounted()</code>.</p><h3 id="counters-props" tabindex="-1"><a class="header-anchor" href="#counters-props" aria-hidden="true">#</a> Counters (props)</h3><p>Create a new page that have three buttons functioning as counters (each button contains a number, and clicking on the button should increment the number):</p><ul><li>The first button should start on 0, and clicking it should increment it by 1</li><li>The second button should start on 45, and clicking it should increment it by 5</li><li>The third button should start on 33, and clicking it should increment it by 10</li></ul><p>Instead of implementing three separate counters, create a Vue component in the <code>/src/components/</code> folder representing a single counter, and then use three instances of it on your counters &quot;page&quot;. Since the counters should function differently (different start values and different increment steps) you can&#39;t hard code that in the counter component. Instead, the one using the counter component should be able to specify this through props, e.g. (<code>&lt;Counter :start-value=&quot;33&quot; :inc-steps=&quot;10&quot; /&gt;</code>).</p>', 8);
const _hoisted_132 = {
  href: "https://vuejs.org/v2/guide/components-props.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_133 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "oral-presentation",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#oral-presentation",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Oral presentation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_134 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you're done with Lab 1, present your work orally to a teacher at one of the lab sessions. Be prepared to:",
  -1
  /* HOISTED */
);
const _hoisted_135 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Show that your application works as it should"),
    /* @__PURE__ */ createBaseVNode("li", null, "Explain how the code you've written works"),
    /* @__PURE__ */ createBaseVNode("li", null, "Answer any question the teacher might have about the code (the teacher will ask questions to verify that you understand how it works)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_136 = {
  href: "https://ju.instructure.com/courses/6797/assignments/35470",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_137 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "node_modules",
  -1
  /* HOISTED */
);
const _hoisted_138 = {
  href: "https://ju.instructure.com/courses/6797/assignments/35471",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_139 = /* @__PURE__ */ createStaticVNode('<h2 id="lab-2-using-a-rest-api-in-vue" tabindex="-1"><a class="header-anchor" href="#lab-2-using-a-rest-api-in-vue" aria-hidden="true">#</a> Lab 2: Using a REST API in Vue</h2><p>The goal with this part of the project is to teach you how to communicate with a backend application from your Single-Page Application using a using a REST API in.</p><p>In this lab you will implement a Single-Page Application as the frontend application for a platform called <em>Activity Finder</em>. On this platform users can create new accounts and then register activities they are going to do that others may come to as well. Example of activities are:</p><ul><li>Play football</li><li>Learn how to play guitar</li><li>Watch the movie Lord of the Rings</li></ul><p>The backend for the platform has already been implemented. The backend exposes a REST API one can use to communicate with it. A client side SDK for the REST API is also available, making it very easy for the frontend to communicate with the backend. Your task is simply to implement the frontend as a Single-Page Application using Vue and the SDK.</p><h3 id="starting-the-backend" tabindex="-1"><a class="header-anchor" href="#starting-the-backend" aria-hidden="true">#</a> Starting the backend</h3><p>The backend is implemented in Node.js, and its source code is available in the ZIP file <a href="files/activity-finder-backend.zip">activity-finder-backend.zip</a>. When you develop/test your frontend application you need to have the backend application up and running on the same computer as your frontend application. To get the backend application up and running you need to:</p><ol><li>Download and unzip the source code for the backend application</li><li>Open the root folder of the backend application in a shell</li><li>Run the command <code>npm install</code> to install all the npm packages it is using</li><li>Run the command <code>npm run start</code> to start it</li></ol>', 8);
const _hoisted_147 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "/src/app.js",
  -1
  /* HOISTED */
);
const _hoisted_148 = {
  href: "http://localhost:8000/accounts",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_149 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "[]",
  -1
  /* HOISTED */
);
const _hoisted_150 = /* @__PURE__ */ createStaticVNode('<h3 id="getting-started-with-the-frontend" tabindex="-1"><a class="header-anchor" href="#getting-started-with-the-frontend" aria-hidden="true">#</a> Getting started with the frontend</h3><p>Create a new Vue application as your frontend application the same way you did in Lab 1. Add the file <a href="files/activity-finder-client.js">activity-finder-client.js</a> to the <code>/src</code> folder of your Vue application. This file is the SDK you can use to communicate with the backend application through its REST API. For example, this file exports a function called <code>getAllAccounts()</code>, and when you call this function the SDK will in turn send an HTTP GET request for <code>/accounts</code> to the backend application, which then in turn sends back all accounts to the SDK, which then delivers all these accounts to you as an array containing objects where each object contains information about an account. But more on this later.</p><p>If you changed the port number the backend is listening for incoming HTTP requests on, you need to change that at the top of the file <code>activity-finder-client.js</code> as well (the constant <code>rootPath</code>).</p><p>The SDK makes use of the npm package <code>jwt-decode</code>, so in the root folder of your Vue application you also need to run the command <code>npm install jwt-decode</code>.</p><h3 id="implementing-the-layout" tabindex="-1"><a class="header-anchor" href="#implementing-the-layout" aria-hidden="true">#</a> Implementing the layout</h3><p>Just as in Lab 1, change the code in <code>/src/App.vue</code> to contain a layout of your choice. Feel free to use any CSS framework you want. Look through the rest of the sub-chapters in Lab 2 to understand what functionality the application will contain in the end/which links you need to have in the layout.</p><p>In your application you need to keep track of whether the user is signed in or not, and most likely you want this to be reactive, so the GUI updates on its own as soon as the user signs in/out. An easy way to implement this is by having a <code>data()</code> method in <code>/src/App.vue</code> looking like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n      <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">isSignedIn</span><span class="token operator">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As soon as the user signs in, you simply change <code>user.isSignedIn</code> to <code>true</code>, and then you change it to <code>false</code> when the user signs out. This way, you can in the HTML code in <code>/src/App.vue</code> show different things depending on if the user is signed in or not, e.g.:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.isSignedIn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    You are signed in :)\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>\n    You are not signed in :(\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want you can also add more properties to <code>user</code>, such as <code>user.username</code> if you want to be able to display the signed in user&#39;s username.</p><p>But what if you want to be able to figure out if the user is signed in or out in another Vue component? One way is to pass the <code>user</code> object as a props to those components, i.e. use use <code>&lt;RouterView :user=&quot;user&quot;/&gt;</code> instead of only <code>&lt;RouterView&gt;</code> in <code>/src/App.vue</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You might wonder why <code>/src/App.vue</code> uses:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n      <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">isSignedIn</span><span class="token operator">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instead of simply:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n      <span class="token literal-property property">isSignedIn</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The reason is because we want the other Vue components to be able to change <code>user.isSignedIn</code>. Since the other Vue components now receive the entire <code>user</code> object as a props, this will work since <strong>objects are passed by reference</strong>. If we would only pass <code>isSignedIn</code>, which is a primitive value (a boolean), the other components would receive a copy of the value, and it wouldn&#39;t be &quot;write reactive&quot;.</p><p>(it&#39;s OK if you don&#39;t understand this, but the key thing to remember is that if a Vue component wants to change a value it has received as a props and that change should be reactive, that props needs to be an object)</p></div>', 13);
const _hoisted_163 = { class: "custom-container warning" };
const _hoisted_164 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Note Note",
  -1
  /* HOISTED */
);
const _hoisted_165 = {
  href: "https://pinia.vuejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_166 = /* @__PURE__ */ createStaticVNode('<h3 id="view-all-accounts" tabindex="-1"><a class="header-anchor" href="#view-all-accounts" aria-hidden="true">#</a> View all accounts</h3><p>Add a &quot;page&quot; that displays all accounts that exists. To fetch all accounts from the backend, you can call the SDK function <code>getAllAccounts()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getAllAccounts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token function">getAllAccounts</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> accounts</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// accounts = array with all accounts if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// accounts = [{id: 1, username: &quot;Alice&quot;}, {...}, ...]</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Populating the database</p><p>The backend does initially not contain any accounts, so if you implement this correctly you will fetch an empty array with accounts. You might want to manually insert some records into the database by opening the file <code>/src/activity-finder.db</code> in DB Browser for SQLite.</p></div><div class="custom-container tip"><p class="custom-container-title">Callback function</p><p>Remember that <code>this</code> in a callback function won&#39;t refer to the Vue component instance if you create the callback function using <code>function(...){...}</code>, so be sure to use one of the workarounds mentioned in Lab 1, such as creating the callback function using <code>(...) =&gt; {...}</code> instead (as in the sample code above).</p></div><h3 id="view-one-account" tabindex="-1"><a class="header-anchor" href="#view-one-account" aria-hidden="true">#</a> View one account</h3>', 6);
const _hoisted_172 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "/accounts/37",
  -1
  /* HOISTED */
);
const _hoisted_173 = {
  href: "https://router.vuejs.org/guide/essentials/dynamic-matching.html#dynamic-route-matching",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_174 = /* @__PURE__ */ createStaticVNode('<p>To fetch an account with a specific id from the backend, you can call the SDK function <code>getAccountById()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getAccountById <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token function">getAccountById</span><span class="token punctuation">(</span><span class="token number">37</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> account</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// account = object with info about the account if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// account = {id: 37, username: &quot;Olle&quot;}</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n    <span class="token comment">//  - &quot;notFound&quot;: No account with the given id exists.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sign-up" tabindex="-1"><a class="header-anchor" href="#sign-up" aria-hidden="true">#</a> Sign up</h3><p>Add a &quot;page&quot; where the user can sign up (create a new account).</p><p>To tell the backend to create a new account, call the SDK function <code>createAccount()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createAccount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token keyword">const</span> account <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;Greta&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;rrrrrr&quot;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">createAccount</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// id = the id the newly created account got if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// id = 85</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n    <span class="token comment">//  - &quot;invalidAccount&quot;: The account object is wrong.</span>\n    <span class="token comment">//  - &quot;usernameTooShort&quot;: The username is too short.</span>\n    <span class="token comment">//  - &quot;usernameTooLong&quot;: The username is too long.</span>\n    <span class="token comment">//  - &quot;passwordTooShort&quot;: The password is too short.</span>\n    <span class="token comment">//  - &quot;usernameTaken&quot;: The username is already used by another account.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sign-in" tabindex="-1"><a class="header-anchor" href="#sign-in" aria-hidden="true">#</a> Sign in</h3><p>Add a &quot;page&quot; where the user can sign in. To tell the backend to sign in, call the SDK function <code>signIn()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> signIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&quot;Greta&quot;</span>\n<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&quot;rrrrrr&quot;</span>\n\n<span class="token function">signIn</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> account</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// account = object with info about the account you signed into if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// account = {id: 85, username: &quot;Greta&quot;}</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n    <span class="token comment">//  - &quot;wrongCredentials&quot;: The username of password is incorrect.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Hint</p><p>Remember, when the user has successfully signed in, change <code>user.isSignedIn</code> in <code>/src/App.vue</code> to <code>true</code> (pass <code>user</code> as a props to the &quot;page&quot; component and change it to <code>true</code> in the &quot;page&quot; component).</p></div><h3 id="sign-out" tabindex="-1"><a class="header-anchor" href="#sign-out" aria-hidden="true">#</a> Sign out</h3><p>Add a &quot;page&quot; where the user can sign out. To tell the backend to sign out, call the SDK function <code>signOut()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> signOut <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// The SDK has now forgot which account you previously signed in to.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Hint</p><p>Remember, when the user has successfully signed in, change <code>user.isSignedIn</code> in <code>/src/App.vue</code> to <code>false</code> (pass <code>user</code> as a props to the &quot;page&quot; component and change it to <code>false</code> in the &quot;page&quot; component).</p></div><h3 id="create-activity" tabindex="-1"><a class="header-anchor" href="#create-activity" aria-hidden="true">#</a> Create activity</h3><p>Add a &quot;page&quot; where signed in users can create new activities. To tell the backend to create a new activity, call the SDK function <code>createActivity()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createActivity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token keyword">const</span> activity <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">accountId</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token comment">// The id of the account creating the activity (i.e. the signed in user&#39;s account id).</span>\n  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Play football&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Ordinary football, but with three teams instead of two :)&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token number">1577199600000</span><span class="token punctuation">,</span> <span class="token comment">// Unix timestamp (milliseconds)</span>\n  <span class="token literal-property property">endTime</span><span class="token operator">:</span> <span class="token number">1577203200000</span><span class="token punctuation">,</span> <span class="token comment">// Unix timestamp (millisecond)</span>\n  <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">57.77859078562013</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">14.16189193725586</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">createActivity</span><span class="token punctuation">(</span>activity<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// id = the id the newly created activity got if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// id = 85</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n    <span class="token comment">//  - &quot;invalidActivity&quot;: The activity object is wrong.</span>\n    <span class="token comment">//  - &quot;notAuthenticated&quot;: The user is not signed in.</span>\n    <span class="token comment">//  - &quot;notAuthorized&quot;: The user tries to create an activity for an account the user is not signed in to.</span>\n    <span class="token comment">//  - &quot;accountNotFound&quot;: No account with the id &#39;accountId&#39; exists.</span>\n    <span class="token comment">//  - &quot;titleTooShort&quot;: The title is too short.</span>\n    <span class="token comment">//  - &quot;titleTooLong&quot;: The title is too long.</span>\n    <span class="token comment">//  - &quot;descriptionTooShort&quot;: The description is too short.</span>\n    <span class="token comment">//  - &quot;descriptionTooLong&quot;: The description is too long.</span>\n    <span class="token comment">//  - &quot;startTimeTooEarly&quot;: The start time has already been.</span>\n    <span class="token comment">//  - &quot;endingBeforeStarting&quot;: The end time is before the start time.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The user can only create new activities belonging to it&#39;s own account.</p>', 18);
const _hoisted_192 = { class: "custom-container tip" };
const _hoisted_193 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Hint",
  -1
  /* HOISTED */
);
const _hoisted_194 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "startTime",
  -1
  /* HOISTED */
);
const _hoisted_195 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "endTime",
  -1
  /* HOISTED */
);
const _hoisted_196 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  '<input type="number">',
  -1
  /* HOISTED */
);
const _hoisted_197 = {
  href: "https://timestampgenerator.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_198 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "000",
  -1
  /* HOISTED */
);
const _hoisted_199 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  '<input type="datetime-local">',
  -1
  /* HOISTED */
);
const _hoisted_200 = { class: "custom-container tip" };
const _hoisted_201 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Hint",
  -1
  /* HOISTED */
);
const _hoisted_202 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  '<input type="number" step="any">',
  -1
  /* HOISTED */
);
const _hoisted_203 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "latitude",
  -1
  /* HOISTED */
);
const _hoisted_204 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "longitude",
  -1
  /* HOISTED */
);
const _hoisted_205 = {
  href: "https://epsg.io/map",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_206 = /* @__PURE__ */ createStaticVNode('<h3 id="view-all-activities" tabindex="-1"><a class="header-anchor" href="#view-all-activities" aria-hidden="true">#</a> View all activities</h3><p>Add a &quot;page&quot; that displays all activities. To fetch all activities from the backend, you can call the SDK function <code>getAllActivities()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getAllActivities <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token function">getAllActivities</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> activities</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// activities = array with all activities if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// activities = [{id: 1, accountId: 32, title: &quot;Play football&quot;, ...}, {...}, ...]</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="view-one-activity" tabindex="-1"><a class="header-anchor" href="#view-one-activity" aria-hidden="true">#</a> View one activity</h3><p>Add a &quot;page&quot; that displays one activity with a specific id. To fetch an activity with a specific id from the backend, call the SDK function <code>getActivityById()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getActivityById <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token function">getActivityById</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> activity</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// activity = object with info about the activity if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// activity = {id: 5, accountId: 48, title: &quot;Read Harry Potter&quot;, ...}</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n    <span class="token comment">//  - &quot;notFound&quot;: No activity with the given id exists.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="view-own-activities" tabindex="-1"><a class="header-anchor" href="#view-own-activities" aria-hidden="true">#</a> View own activities</h3><p>Add a &quot;page&quot; that displays all activities created by the signed in user. To fetch all activities belonging to a specific user, call the SDK function <code>getActivitiesByAccountId()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getActivitiesByAccountId <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token function">getActivitiesByAccountId</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> activities</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token comment">// activities = array with all activities if everything went OK.</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// activities = [{id: 1, accountId: 3, title: &quot;Watch the sky&quot;, ...}, {...}, ...]</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-activity" tabindex="-1"><a class="header-anchor" href="#delete-activity" aria-hidden="true">#</a> Delete activity</h3><p>Somehow signed in users should be able to delete activities they have created. Implement this however you want.</p><p>To tell the backend to delete an activity with a specific id, call the SDK function <code>deleteActivityById()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> deleteActivityById <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token function">deleteActivityById</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// The activity was successfully deleted.</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n    <span class="token comment">//  - &quot;notAuthenticated&quot;: The user is not signed in.</span>\n    <span class="token comment">//  - &quot;notAuthorized&quot;: The user tries to delete an activity that doesn&#39;t belong to the account the user is signed into.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A user can only delete activities belonging to its own account.</p><h3 id="update-activity" tabindex="-1"><a class="header-anchor" href="#update-activity" aria-hidden="true">#</a> Update activity</h3><p>Somehow signed in users should be able to update activities they have created. Implement this however you want.</p><p>To tell the backend to update an activity with a specific id, call the SDK function <code>updateActivityById()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> updateActivityById <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../activity-finder-client.js&#39;</span>\n\n<span class="token keyword">const</span> updatedActivity <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Play Ice Hockey&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">accountId</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;CHANGE: we play ice hockey instead, 5 teams :)&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token number">1577199600000</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">endTime</span><span class="token operator">:</span> <span class="token number">1577203200000</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">57.77859078562013</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">14.16189193725586</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">updateActivityById</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">,</span> updatedActivity<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Activity was updated.</span>\n  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>\n    <span class="token comment">// Possible errors codes:</span>\n    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>\n    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>\n    <span class="token comment">//  - &quot;notFound&quot;: No activity with the given id exists.</span>\n    <span class="token comment">//  - &quot;invalidActivity&quot;: The activity object is wrong.</span>\n    <span class="token comment">//  - &quot;notAuthenticated&quot;: The user is not signed in.</span>\n    <span class="token comment">//  - &quot;notAuthorized&quot;: The user tries to update an activity for an account the user is not signed in to.</span>\n    <span class="token comment">//  - &quot;idChanged&quot;: The id changed (not allowed).</span>\n    <span class="token comment">//  - &quot;started&quot;: The activity has already started.</span>\n    <span class="token comment">//  - &quot;titleTooShort&quot;: The title is too short.</span>\n    <span class="token comment">//  - &quot;titleTooLong&quot;: The title is too long.</span>\n    <span class="token comment">//  - &quot;descriptionTooShort&quot;: The description is too short.</span>\n    <span class="token comment">//  - &quot;descriptionTooLong&quot;: The description is too long.</span>\n    <span class="token comment">//  - &quot;startTimeTooEarly&quot;: The start time is changed to a time that has already been.</span>\n    <span class="token comment">//  - &quot;endingBeforeStarting&quot;: The end time is before the start time.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When an activity has started, it can no longer be updated, and users can only update activities belonging to their own accounts.</p><h3 id="oral-presentation-1" tabindex="-1"><a class="header-anchor" href="#oral-presentation-1" aria-hidden="true">#</a> Oral presentation</h3><p>When you&#39;re done with Lab 2, present your work orally to a teacher at one of the lab sessions. Be prepared to:</p><ul><li>Show that your application works as it should</li><li>Explain how the code you&#39;ve written works</li><li>Answer any question the teacher might have about the code (the teacher will ask questions to verify that you understand how it works)</li></ul>', 22);
const _hoisted_228 = {
  href: "https://ju.instructure.com/courses/6797/assignments/35472",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_229 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "node_modules",
  -1
  /* HOISTED */
);
const _hoisted_230 = {
  href: "https://ju.instructure.com/courses/6797/assignments/35473",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_231 = /* @__PURE__ */ createStaticVNode('<p>If you have time to spare, try complete the extra tasks below.</p><h3 id="extra-tasks" tabindex="-1"><a class="header-anchor" href="#extra-tasks" aria-hidden="true">#</a> Extra tasks</h3><p>These extra tasks do not need to completed, but if you have time for it, give them a try. They are fun, we promise! 😉</p><h4 id="auto-login" tabindex="-1"><a class="header-anchor" href="#auto-login" aria-hidden="true">#</a> Auto login</h4><p>When the user signs up, also automatically sign in the user.</p><h4 id="loading-indicators" tabindex="-1"><a class="header-anchor" href="#loading-indicators" aria-hidden="true">#</a> Loading indicators</h4><p>It can take some time for the frontend before it receives the response from the backend when it has sent an HTTP request to it. This is usually not noticeable for developers who run the frontend and backend on the same computer (the communication delay is so small), but can become apparent when you deploy them on the Internet. When there is a loading time like this (~each time you use the SDK), display a loading indicator of some kind. In the simplest case, this can just be the boring text &quot;Loading&quot;, but most CSS frameworks have some nicely designed components for this.</p><p>The SDK can simulate network communication delay. In the source code, simply change the variable <code>networkDelayInMs</code> to the amount of milliseconds you want to add as delay to each HTTP request it sends.</p><h4 id="empty-states" tabindex="-1"><a class="header-anchor" href="#empty-states" aria-hidden="true">#</a> Empty states</h4>', 9);
const _hoisted_240 = {
  href: "https://duckduckgo.com/?q=empty+state+ux",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_241 = /* @__PURE__ */ createStaticVNode('<h4 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h4><p>Although the REST API/the SDK does not provide pagination functionality, nothing prevents you from implementing one in the frontend application.</p><h4 id="filtering" tabindex="-1"><a class="header-anchor" href="#filtering" aria-hidden="true">#</a> Filtering</h4><p>Instead of showing a list of all activities, also have a form users can use to filter which activities to show. You decide what filtering should be available, but maybe search for title, or select a date range or to show all activities close to a specific place? Although the REST API/the SDK does not provide filtering functionality, nothing prevents you from implementing one in the frontend application.</p><h4 id="maps" tabindex="-1"><a class="header-anchor" href="#maps" aria-hidden="true">#</a> Maps</h4><p>Each activity has a longitude and a latitude. Requiring user to manually enter these won&#39;t be a good experience for them. Instead, it would be easier for them to pick their location on a map. Let them do that! And instead of showing a list of all activities, show a map marking where each activity takes place.</p><h4 id="remember-activities" tabindex="-1"><a class="header-anchor" href="#remember-activities" aria-hidden="true">#</a> Remember activities</h4><p>Let users remember activities they like locally (e.g. store the information in local storage). Have a special page they can use to list all the activities they&#39;ve choose to remember.</p>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("Node.js"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_9
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("npm"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("This one is installed along with Node.js, so you don't need to install it separately. However, you might want to update it to the latest version (not required): "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_11, [
                  createTextVNode("Update npm instructions"),
                  createVNode(_component_ExternalLinkIcon)
                ])
              ])
            ])
          ]),
          _hoisted_12
        ])
      ])
    ]),
    _hoisted_13,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_14, [
          createTextVNode("Visual Studio Code"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createBaseVNode("ul", null, [
          _hoisted_15,
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_16, [
              createTextVNode("On Mac you need to manually add the "),
              _hoisted_17,
              createTextVNode(" command"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_18, [
          createTextVNode("DB Browser for SQLite"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Database management tool you can use to visualize/debug the database. An alternative is to install and use "),
            createBaseVNode("a", _hoisted_19, [
              createTextVNode("the SQLite extension for Visual Studio Code"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_20, [
          createTextVNode("Postman"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_21
      ])
    ]),
    _hoisted_22,
    _hoisted_23,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/using-shells/" }, {
          default: withCtx(() => [
            createTextVNode("Using Shells")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/vue/" }, {
          default: withCtx(() => [
            createTextVNode("Vue")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_24,
    createBaseVNode("p", null, [
      createTextVNode("Vue applications are preferably implemented in "),
      createBaseVNode("a", _hoisted_30, [
        createTextVNode("Single-File Components"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" files ("),
      _hoisted_31,
      createTextVNode(" files), so you have all the HTML, CSS and JS code a Vue component consists of in one and the same file. However, web browsers don't understand these type of files, so the "),
      _hoisted_32,
      createTextVNode(" files needs to be transpiled into JS code. For that you can use a module bundler, and in this course we will use the module bundler called "),
      createBaseVNode("a", _hoisted_33, [
        createTextVNode("Vite"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you are an experienced developer and want to try to setup a Vue 3 project from scratch on your own, feel free to do that. "),
      createBaseVNode("a", _hoisted_34, [
        createTextVNode("Here"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" are some guiding instructions for your. But we recommend most students to instead simply copy and continue working on the code available in the starter project "),
      createBaseVNode("a", _hoisted_35, [
        createTextVNode("Vue 3 Option API Starter"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Copy/Clone that code to your computer, and then in the project folder, run the following commands:")
    ]),
    _hoisted_36,
    createBaseVNode("p", null, [
      createTextVNode("To conditionally display HTML code you can use "),
      createBaseVNode("a", _hoisted_86, [
        createTextVNode("the "),
        _hoisted_87,
        createTextVNode(", "),
        _hoisted_88,
        createTextVNode(" and "),
        _hoisted_89,
        createTextVNode(" directives"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_90,
    createBaseVNode("p", null, [
      createTextVNode("And then tell Vue to run this method when the user clicks on the button (you need to use the "),
      createBaseVNode("a", _hoisted_92, [
        _hoisted_93,
        createTextVNode(" directive"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (or the short syntax "),
      _hoisted_94,
      createTextVNode(")).")
    ]),
    _hoisted_95,
    createBaseVNode("p", null, [
      createTextVNode("In your HTML code you can then use the "),
      createBaseVNode("a", _hoisted_100, [
        _hoisted_101,
        createTextVNode(" directive"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to loop through all the FAQ objects and produce similar looking HTML code for all of them.")
    ]),
    _hoisted_102,
    createBaseVNode("p", null, [
      createTextVNode("To implement this, use the "),
      createBaseVNode("a", _hoisted_106, [
        _hoisted_107,
        createTextVNode(" directive"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" for two "),
      _hoisted_108,
      createTextVNode(" (for the two numbers) and one "),
      _hoisted_109,
      createTextVNode(" (for the operation) and then use a "),
      createBaseVNode("a", _hoisted_110, [
        createTextVNode("computed property"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to automatically compute the result of the operation as soon as the user changes any of the three fields.")
    ]),
    _hoisted_111,
    createBaseVNode("p", null, [
      createTextVNode("To regularly execute some code, web browsers gives us "),
      createBaseVNode("a", _hoisted_115, [
        createTextVNode("the function "),
        _hoisted_116,
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", which we can pass a callback function and an interval to. The web browser will then repeatedly call our callback function with that interval. However, if one Vue component calls "),
      _hoisted_117,
      createTextVNode(" to regularly update itself, and then that component is deleted (for example the user clicks on a link leading to another View component), then we need to tell the web browser to stop calling our callback function, because we don't need that anymore. To do that, web browsers also gives us "),
      createBaseVNode("a", _hoisted_118, [
        createTextVNode("the function "),
        _hoisted_119,
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". To call "),
      _hoisted_120,
      createTextVNode(" when a Vue component is created we can use the "),
      _hoisted_121,
      createTextVNode(" method, and to call "),
      _hoisted_122,
      createTextVNode(" when a Vue component is destroyed we can use the "),
      _hoisted_123,
      createTextVNode(" method:")
    ]),
    _hoisted_124,
    createBaseVNode("p", null, [
      createTextVNode("Read more about "),
      createBaseVNode("a", _hoisted_132, [
        createTextVNode("props in Vue's docs"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_133,
    _hoisted_134,
    _hoisted_135,
    createBaseVNode("p", null, [
      createTextVNode("Afterwards you will be approved on the Canvas assignment "),
      createBaseVNode("a", _hoisted_136, [
        createTextVNode("Lab 1 Presentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" by the teacher. After that you should create a ZIP file of the app's root folder (delete the "),
      _hoisted_137,
      createTextVNode(" folder first!), and upload it to the Canvas assignment "),
      createBaseVNode("a", _hoisted_138, [
        createTextVNode("Lab 1 Code"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_139,
    createBaseVNode("p", null, [
      createTextVNode("When you have started the backend application it will listen for incoming HTTP requests through the REST API on port 8000. If you want to change the port number, just change that at the bottom of the file "),
      _hoisted_147,
      createTextVNode(" in the backend application. To test if the backend application is properly running, open "),
      createBaseVNode("a", _hoisted_148, [
        createTextVNode("localhost:8000/accounts"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" in a web browser. If it's up and running you should see an empty JSON array ("),
      _hoisted_149,
      createTextVNode(") on the screen. You can also try to use Postman to send your own HTTP requests to it.")
    ]),
    _hoisted_150,
    createBaseVNode("div", _hoisted_163, [
      _hoisted_164,
      createBaseVNode("p", null, [
        createTextVNode("It is bad practice for a child component to change a props it receives. Optimally one would use a global store, such as "),
        createBaseVNode("a", _hoisted_165, [
          createTextVNode("Pinia"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" for values all Vue components should have access to. But to keep things as simple as possible, we will ignore that best practice. But feel free to learn and use Pinia if you want.")
      ])
    ]),
    _hoisted_166,
    createBaseVNode("p", null, [
      createTextVNode(`Add a "page" that displays one account with a specific id. On the previous page, clicking on an account should lead to this page. The URL should contain information about which account to fetch, such as the account's id, like `),
      _hoisted_172,
      createTextVNode(". In Vue Router you cna use "),
      createBaseVNode("a", _hoisted_173, [
        createTextVNode("Dynamic Route Matching"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to achieve this.")
    ]),
    _hoisted_174,
    createBaseVNode("div", _hoisted_192, [
      _hoisted_193,
      createBaseVNode("p", null, [
        createTextVNode("If you want to make it easy, let users enter "),
        _hoisted_194,
        createTextVNode(" and "),
        _hoisted_195,
        createTextVNode(" in "),
        _hoisted_196,
        createTextVNode(". You can generate unix timestamps at "),
        createBaseVNode("a", _hoisted_197, [
          createTextVNode("timestampgenerator.com"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", and then add "),
        _hoisted_198,
        createTextVNode(" to the end to get it in milliseconds. You could use "),
        _hoisted_199,
        createTextVNode(" instead, but that requires more work from you (you need to convert it into a unix timestamp).")
      ])
    ]),
    createBaseVNode("div", _hoisted_200, [
      _hoisted_201,
      createBaseVNode("p", null, [
        createTextVNode("You can use "),
        _hoisted_202,
        createTextVNode(" to let the user enter values for "),
        _hoisted_203,
        createTextVNode(" and "),
        _hoisted_204,
        createTextVNode(". The values can be found using "),
        createBaseVNode("a", _hoisted_205, [
          createTextVNode("https://epsg.io/map"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". The best would of course be to let users pick location on a map like that directly on the page, but let's do this the easy way to start with.")
      ])
    ]),
    _hoisted_206,
    createBaseVNode("p", null, [
      createTextVNode("Afterwards you will be approved on the Canvas assignment "),
      createBaseVNode("a", _hoisted_228, [
        createTextVNode("Lab 2 Presentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" by the teacher. After that you should create a ZIP file of the app's root folder (delete the "),
      _hoisted_229,
      createTextVNode(" folder first!), and upload it to the Canvas assignment "),
      createBaseVNode("a", _hoisted_230, [
        createTextVNode("Lab 2 Code"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_231,
    createBaseVNode("p", null, [
      createTextVNode(`When listening all accounts or all activities and there are non, don't simply display an empty page. Instead, display the text "None have been created yet", or do something even better. For the cURLous one, `),
      createBaseVNode("a", _hoisted_240, [
        createTextVNode('search for "empty state ux"'),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_241
  ]);
}
const laboratoryWork_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "laboratory-work.html.vue"]]);
export {
  laboratoryWork_html as default
};
