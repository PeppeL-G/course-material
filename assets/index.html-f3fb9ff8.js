import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, g as createCommentVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-fundamental-application-components",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-fundamental-application-components",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Fundamental Application Components")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, what does an Android application consists of? Answer: Fundamental application components! Let's take a closer look at how we can use these.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "recommended-reading",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#recommended-reading",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Recommended reading")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://developer.android.com/guide/components/fundamentals",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="fundamental-application-components" tabindex="-1"><a class="header-anchor" href="#fundamental-application-components" aria-hidden="true">#</a> Fundamental Application Components</h2><p>When you create your own application from scratch, you have your own main entry point into the program. In many programming languages, the computer will start your program by calling the <code>main()</code> function in it, so that function acts as the main entry point.</p><p>An application built in a framework works differently. When using a framework, it&#39;s rather the framework that contains the main entry point and a skeleton for an entire application, and you just provide the framework with the missing pieces, which will make the application work the way you want it to work. In the Android framework, these missing pieces are called <em>fundamental application components</em>. There exists four different type of these:</p><ul><li><em>Activities</em> are used to display a graphical user interface (GUI) to the user and handle user interaction</li><li><em>Services</em> are used to run logic in the background (no GUI)</li><li><em>Broadcast Receivers</em> are used to listen for events from the operating system (e.g. listen for when Wi-Fi is turned off and on) or from other applications on the device (e.g. when Spotify starts playing a new song)</li><li><em>Content Providers</em> are used to let other applications access the data in your application</li></ul><p>So, when creating an Android application, you just tell the Android framework which your fundamental applications components are. Then the framework will use them when they are needed.</p><p>Sometimes other applications tells the framework to start one of your fundamental application components. This is typically the case when the user starts your application by clicking on your application&#39;s icon in the launcher application (the launcher application is the application that displays it&#39;s GUI when the device is starting (kind of the &quot;desktop&quot; app)). When that happens, the launcher application will ask Android to start one of the activities in your application, and then your application will start, and the Android framework will show the started activity&#39;s GUI on the screen.</p><p>Most often, your fundamental application components will be started by the code in your own application. For example, when the user clicks on a button in the GUI used by one of your activities you might want to start another activity in your application, or start a service in your application to run a long operation in the background. Then you tell the Android framework to start that activity/service for you.</p><h3 id="intents" tabindex="-1"><a class="header-anchor" href="#intents" aria-hidden="true">#</a> Intents</h3><p>To identify the fundamental application component that should be started, we use the <code>Intent</code> class. In addition to identifying which application to start, an <code>Intent</code> can also contain additional information passed to the fundamental application component that should be started. For example, an activity used to display an image on the screen can in the <code>Intent</code> receive information about which image to display (e.g. an identifier for the image).</p><p>Most often, an <code>Intent</code> identifies a fundamental application component in a specific application that should be started. These are called <em>explicit intents</em>, and are most often used when you want to identify a fundamental application in your own application.</p><p>Sometimes, instead of specifying which specific application component to start, you can specify what you need the fundamental application component to be able to do for you. For example, when the user clicks on a button in your application, you might want to open and display a PDF file to the user. Instead of you implementing that functionality in your own application, you can ask Android to start an activity that is able to display PDF files. If such an activity exists on the user&#39;s device (no matter which application), that activity will be started, and in the <code>Intent</code> you can pass along with information about which PDF file the activity should display.</p><h3 id="creating-a-fundamental-application-component" tabindex="-1"><a class="header-anchor" href="#creating-a-fundamental-application-component" aria-hidden="true">#</a> Creating a fundamental application component</h3><p>Each type of fundamental application component is represented by a class from the Android framework:</p><ul><li>The class <code>Activity</code> represents a general activity</li><li>The class <code>Service</code> represents a general service</li><li>The class <code>BroadcastReceiver</code> represents a general broadcast receiver</li><li>The class <code>ContentProvider</code> represents a general content provider</li></ul><p>When you want to create your own fundamental application component you should create your own class that inherits from the general fundamental application component class you want to use. For example, if you want to create an activity that displays a login form to the user, you create a class named <code>LoginActivity</code> that inherits from the <code>Activity</code> class from the Android framework. Then, in your own class, you override some methods to give your own fundamental application component the specific behavior you want it to have.</p><p>Just creating your own class like that is not enough. You must also register your fundamental application component in the <code>AndroidManifest.xml</code> file using the corresponding XML element to provide additional meta-information about the fundamental application component.</p>', 16);
const _hoisted_21 = { class: "custom-container tip" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example showing an application with an activity as the only fundamental application component.",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-xml line-numbers-mode",
    "data-ext": "xml"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-xml" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("manifest")
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "xmlns:"),
            /* @__PURE__ */ createTextVNode("android")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("http://schemas.android.com/apk/res/android"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "package"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("se.ju.larpet.myapp"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("application")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "..."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!-- Use the activity element to register a class as an activity component. -->"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!-- Read more about this in the lecture on activities. -->"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("activity")
          ]),
          /* @__PURE__ */ createTextVNode("\n			"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("name")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode(".LoginActivity"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n			"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("exported")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("false"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("application")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("manifest")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br")
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
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-kotlin line-numbers-mode",
    "data-ext": "kt"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-kotlin" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("app"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Activity\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" LoginActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Override methods here to give your own activity"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// the specific behavior you want it to have."),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " ")
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
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createCommentVNode(' <iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> '),
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("The reading below on this page is intended to just be an introduction to the fundamental application components in Android. For additional reading, checkout the webpage "),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("Application Fundamentals"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_5,
    createBaseVNode("div", _hoisted_21, [
      _hoisted_22,
      _hoisted_23,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => [
              _hoisted_24
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "LoginActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_25
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
