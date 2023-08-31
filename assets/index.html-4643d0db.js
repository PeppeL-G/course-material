import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><p>Vue is a JavaScript Framework one can use to build Single-Page Applications in. It is quite similar to other frameworks such as React and Angular, but much easier to use.</p><h2 id="what-is-a-single-page-application" tabindex="-1"><a class="header-anchor" href="#what-is-a-single-page-application" aria-hidden="true">#</a> What is a Single-Page Application?</h2><p>Traditional websites consists of many different webpages (you can think of these as different HTML files) stored on the server. When the user visits a website, the user&#39;s web browser will download and display one of these webpages to the user. When the user clicks on a link or submit a form on the webpage, the web browser will fetch and show another webpage to the user. So, simply put, the server contains all webpages on a website, and the web browser only contains a copy of one of those at a time, and it shows that one to the user.</p><p>A website doesn&#39;t have to work like that. Another way a website can work is that the web browser fetches everything required to display all webpages on a website directly, and then the website uses client-side JavaScript to change what content to shown in the user&#39;s web browser when the user clicks on a link or submits a form. Such a website is called a Single-Page Application (SPA).</p><h2 id="what-is-a-framework" tabindex="-1"><a class="header-anchor" href="#what-is-a-framework" aria-hidden="true">#</a> What is a framework?</h2><p>Building an SPA from scratch requires the developer to write a lot of code. It is doable, but will take a lot of time.</p><p>To facilitate creating apps (including websites and SPAs), some very experienced developers crete frameworks. A framework contains a lot of code common for all applications, and the developer using the framework just need to provide a small amount of code to make the app function the way she wants. This way, the developer don&#39;t need to write much code on her own, but a small drawback is that the developer needs to spend time learning how to use the framework first.</p><h2 id="what-is-vue" tabindex="-1"><a class="header-anchor" href="#what-is-vue" aria-hidden="true">#</a> What is Vue?</h2><p>Vue is a framework one can use to build a Single-Page Application (SPA). Simple as that! The Vue framework is to a large extent built on the MVC pattern.</p><h2 id="what-is-the-mvc-pattern" tabindex="-1"><a class="header-anchor" href="#what-is-the-mvc-pattern" aria-hidden="true">#</a> What is the MVC pattern?</h2><p>Implementing a graphical user interface (GUI) usually requires the developer to write a lot of code. It is not uncommon that this code ends up being very messy and hard to maintain over time. To facilitate, smart programmers came up with a way to structure the code (known as a <em>design pattern</em>)so it doesn&#39;t get very messy. They called that design pattern for the Model-View-Controller pattern, or simply the MVC pattern. The MVC pattern instructs you to split your code into three different parts: one part for the Model, one part for the View, and one part for the Controller.</p><h3 id="the-model" tabindex="-1"><a class="header-anchor" href="#the-model" aria-hidden="true">#</a> The Model</h3><p>To understand how the MVC pattern works, you must first understand that all GUIs are about visualizing some data. Even if the GUI should just something as simple as displaying a circle, it is actually data that is visualized as a circle. The data could in this case consist of:</p><ul><li>The position of the circle (e.g. the x and y coordinates of the center)</li><li>The size of the circle (e.g. the radius)</li><li>The color of the circle (e.g. the string <code>red</code>)</li></ul><p>All the data needed to visualize the GUI is in the MVC pattern known as the <em>Model</em>. In Vue, you can see the Model as an ordinary JavaScript object, for example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token punctuation">{</span>\n	<span class="token literal-property property">xPosition</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n	<span class="token literal-property property">yPosition</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>\n	<span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n	<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, it is usually only data that will change (and that you can&#39;t hardcode) that you need to put in your Model. For example, if the circle should look the same on the screen all the time, you need no Model at all. But if you want the circle to be able to move around on the screen, then the Model should to keep track of the circle&#39;s <code>xPosition</code> and <code>yPosition</code>. And if you also want the circle&#39;s size to change from time to time, you also need to store the <code>radius</code> in the Model, etc.</p><h3 id="the-view" tabindex="-1"><a class="header-anchor" href="#the-view" aria-hidden="true">#</a> The View</h3><p>After you have created your Model, you can continue by creating the View part. The View part consist of the code that visualizes the data in the Model. In Vue, the View part will be built with HTML and CSS code.</p><p>If you should visualize a circle that looks the same all the time (i.e. your model is empty), then your View part would (in theory) look as something like the one shown below:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n	position: absolute;\n	left: 50px;\n	top: 75px;\n	border-radius: 10px;\n	width: 10px;\n	height: 10px;\n	background-color: red;\n	transform: translate(-50%);\n<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BUT, most often the GUI should not be static like this. Most often, the GUI should change depending on what the user do. For example, when the user clicks on the circle, we might want to move the circle to the right. This means that the circle&#39;s X-position will vary over time, and we can&#39;t hardcode <code>left</code> to be <code>50px</code> in our View. Instead, the View should read this piece of data from the Model! So, our Model would look something like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token punctuation">{</span>\n	<span class="token literal-property property">xPosition</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And our View would (in theory) look something like this:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- The value for the left property below is not valid to\n     write this way, but hopefully you understand the principle. --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n	position: absolute;\n	left: model.xPosition px;\n	top: 75px;\n	border-radius: 10px;\n	width: 10px;\n	height: 10px;\n	background-color: red;\n	transform: translate(-50%);\n<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue has very good support for generating HTML and CSS code like this based on the data stored in the Model.</p><h3 id="the-controller" tabindex="-1"><a class="header-anchor" href="#the-controller" aria-hidden="true">#</a> The Controller</h3><p>So, what&#39;s the last part of code responsible for? User interactions!</p><ol><li>The Model should only contain the data that should be visualized in the GUI</li><li>The View should build the GUI and visualize the data in the Model</li><li>When the user interacts with the View (for examples clicks on a button), the View should tell the Controller what happened, and the Controller should then react to the user interaction accordingly</li></ol><p>The Controller typically updates the data in the Model to handle the user interaction, and then the View is refreshed with the new data stored in the Model.</p><p>In Vue, the Controller is typically implemented as different JavaScript functions. For example, if we would want the circle to move to the right when the user clicks on it, the code could (in theory) look something like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Our model.</span>\n<span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token punctuation">{</span>\n	<span class="token literal-property property">xPosition</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Our controller functions.</span>\n<span class="token keyword">function</span> <span class="token function">onCircleClicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n	model<span class="token punctuation">.</span>xPosition <span class="token operator">=</span> model<span class="token punctuation">.</span>xPosition <span class="token operator">+</span> <span class="token number">10</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Our view --&gt;</span>\n<span class="token comment">&lt;!-- The value for the left property below is not valid to\n     write this way, but hopefully you understand the principle. --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">onClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">onCircleClicked</span><span class="token punctuation">&quot;</span></span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n	position: absolute;\n	left: model.xPosition px;\n	top: 75px;\n	border-radius: 10px;\n	width: 10px;\n	height: 10px;\n	background-color: red;\n	transform: translate(-50%);\n<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The code above does of course not work as it is, but it shows the basic principle of the MVC pattern works. Vue makes use of the MVC pattern in a way that is really similar to the example above, it&#39;s just that we write the code in Vue a little bit different.</p><h2 id="learning-vue" tabindex="-1"><a class="header-anchor" href="#learning-vue" aria-hidden="true">#</a> Learning Vue</h2>', 36);
const _hoisted_37 = {
  href: "https://vuejs.org/tutorial/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<ul><li>Vue exists in different versions. You should learn the latest version of Vue, which currently is Vue 3. If you find Vue code online someone else has written, remember that that code might have been written for an older version of Vue, and might not work in Vue 3</li><li>Vue can be written directly in client-side JS code (known as <em>HTML-mode</em>), but most often one use the <em>SFC-mode</em> instead. The SFC-mode requires a compilation step that transforms the code you write into client-side JS, but it is easier to build big SPAs in it. In this course you only need to learn the SF-mode, so use that mode in the tutorial</li><li>Vue apps can be implemented in the &quot;old&quot; <em>Vue Options API</em>, or in the newer <em>Vue Composition API</em>. One is not better than the other in all cases, so both ways are still useful, and you can even mix the two APIs in one and the same SPA. In the tutorial you can switch between these two APIs, but we recommend you to only focus on learning and using the Options API, since that&#39;s the easier one to learn and use</li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 2);
const _hoisted_40 = {
  href: "https://vuejs.org/tutorial/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "If you think any of the steps in the tutorial is too hard, simply skip that one, and ask about it at the next tutorial or lab session")
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = {
  href: "https://www.youtube.com/watch?v=OrxmtDw4pVI",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("This lecture won't try to teach you how to use Vue. Vue has an excellent "),
      createBaseVNode("a", _hoisted_37, [
        createTextVNode("Tutorial"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" you can take to learn that. But there are some more things you should now though before taking that tutorial:")
    ]),
    _hoisted_38,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_40, [
          createTextVNode("Take the Vue Tutorial!"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_41
      ]),
      createBaseVNode("li", null, [
        createTextVNode("The ones who are curios about the history of Vue and its creator Evan You can view "),
        createBaseVNode("a", _hoisted_42, [
          createTextVNode("Vue.js: The Documentary"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" on YouTube")
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
