import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "android-activities",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#android-activities",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Android Activities")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Activities are one of the four different fundamental application components all Android applications consists of. We use them to specify what the graphical user interface (GUI) should look like. Let's take a look at how they work!",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/2clnFgc69nA",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-activities.pdf">android-activities.pdf</a></li><li><a href="android-activities.pptx">android-activities.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://commonsware.com/AndExplore/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "What We Are Building"),
    /* @__PURE__ */ createBaseVNode("li", null, "Installing the Tools"),
    /* @__PURE__ */ createBaseVNode("li", null, "Creating a Starter Project"),
    /* @__PURE__ */ createBaseVNode("li", null, "Modifying the Manifest"),
    /* @__PURE__ */ createBaseVNode("li", null, "Changing Our Icon"),
    /* @__PURE__ */ createBaseVNode("li", null, "Adding a Library"),
    /* @__PURE__ */ createBaseVNode("li", null, "Constructing a Layout"),
    /* @__PURE__ */ createBaseVNode("li", null, "Setting up the App Bar"),
    /* @__PURE__ */ createBaseVNode("li", null, "Setting up an Activity")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://developer.android.com/guide",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="activities" tabindex="-1"><a class="header-anchor" href="#activities" aria-hidden="true">#</a> Activities</h2><p>An <em>activity</em> is a fundamental application component you can use to show a graphical user interface to the user, and which the user can interact with to give input to your application. Your application usually consist of multiple activities, each with its own purpose, such as:</p><ul><li>One activity to display and handle interaction with a login form</li><li>One activity to display and handle interaction with a registration form</li><li>One activity to display and handle interaction with all accounts in the application</li><li>Etc.</li></ul><p>Only one activity at a time is shown on the user&#39;s screen.</p><h3 id="creating-a-new-activity" tabindex="-1"><a class="header-anchor" href="#creating-a-new-activity" aria-hidden="true">#</a> Creating a new activity</h3><p>A general activity is represented by the Android framework class <code>Activity</code>. When you want to create your own activity, you should create your own class that inherits from the <code>Activity</code> class, and in which you override some methods to give your own activity the specific behavior you want it to have.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, there&#39;s a convention to let all your own activity classes end with the name <code>Activity</code>, such as <code>LoginActivity</code>. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.</p></div><p>Just creating a new class that inherits from the <code>Activity</code> class is not enough for the Android framework to recognize your class as an activity. You must also register this class as an activity in the <code>AndroidManifest.xml</code> file using the <code>&lt;activity&gt;</code> element in the <code>&lt;application&gt;</code> element (further down is an example of all this). When using the <code>&lt;activity&gt;</code> element, you must add the following attributes to it:</p><ul><li><code>android:name</code>, which should be: <ul><li>The full identifier for the class (i.e package name followed by the class name, e.g. <code>se.ju.larpet.myapp.LoginActivity</code>), or:</li><li>An identifier for the class relative the your application&#39;s package name (e.g. if you have <code>&lt;manifest android:package=&quot;se.ju.larpet.myapp&quot;</code>), then you can just write <code>.LoginActivity</code></li></ul></li><li><code>android:exported</code>, which should be: <ul><li><code>true</code>, if you want the OS/other applications to be able to start the activity (typically used for the activity that should be started when the user starts your application)</li><li><code>false</code>, if you only want your own code to be able to start the activity (typically the case for most of your activities)</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Creating a new activity in Android Studio</p><p>When you ask Android Studio to create a new activity for you, it will create a new Java/Kotlin file containing your own class inheriting from the <code>Activity</code> class AND register this class as an activity in <code>AndroidManifest.xml</code> for you, so you don&#39;t need to remember all this by heart.</p></div>', 10);
const _hoisted_20 = { class: "custom-container tip" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example showing a project with a single activity only your own app can start.",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode(".MyActivity"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode(" MyActivity "),
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
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<p>The <code>&lt;activity&gt;</code> element has more attributes you can use to add more information about the activity, such as:</p><ul><li><code>android:label</code>: A string with the name of the activity (used for example when the user is asked to select an activity to complete an action)</li><li><code>android:theme</code>: A theme to use in the activity (when you want another one than the one specified in <code>&lt;application android:theme=&quot;XXX&quot;&gt;</code>)</li><li>Etc.</li></ul><p>Most often you don&#39;t need to provide these extra attributes, but do be aware of the possibility.</p><h3 id="adding-an-activity-to-the-launcher" tabindex="-1"><a class="header-anchor" href="#adding-an-activity-to-the-launcher" aria-hidden="true">#</a> Adding an activity to the launcher</h3><p>The launcher app in Android is the &quot;desktop&quot; app that runs directly when the device starts, and that app typically shows all installed apps the user can start by clicking on them. It actually doesn&#39;t show apps that can be started, but activities in them that can be started, so one and the same app can actually display multiple activities in the launcher, and not just one, but just one is of course most common.</p><p>So, if you want the launcher to show one of your activities here, the activity must have <code>android:exported=&quot;true&quot;</code> (so the other apps are allowed to start the activity). Then you must also add an <code>&lt;intent-filter&gt;</code> to your activity to tell other apps information about the activity, such as:</p><ul><li>The <code>android:name</code> attribute in the <code>&lt;category&gt;</code> element to indicate which a category the activity belongs to (for launcher activities, use the value <code>android.intent.category.LAUNCHER</code>)</li><li>The <code>android:name</code> attribute in the <code>&lt;action&gt;</code> element to indicate which <em>actions</em> the activity can handle (the launcher app will start the activity with the action <code>android.intent.action.MAIN</code> (meaning no additional info is passed to the activity), so your activity must explicitly say it can handle that type of action)</li></ul>', 7);
const _hoisted_32 = { class: "custom-container tip" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example showing a project with one launcher activity.",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode(".MyActivity"),
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
            /* @__PURE__ */ createTextVNode("true"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("category")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.category.LAUNCHER"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("action")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.action.MAIN"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("activity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
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
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode(" MyActivity "),
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
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("The "),
    /* @__PURE__ */ createBaseVNode("code", null, "MyActivity"),
    /* @__PURE__ */ createTextVNode(" will now be shown in the user's launcher, and when the user clicks on it, the "),
    /* @__PURE__ */ createBaseVNode("code", null, "MyActivity"),
    /* @__PURE__ */ createTextVNode(" will be started.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<h3 id="specifying-the-gui" tabindex="-1"><a class="header-anchor" href="#specifying-the-gui" aria-hidden="true">#</a> Specifying the GUI</h3><p>By default, the activity has no GUI, and a blank screen is shown when the activity is started. If you want to add a GUI to your activity, override the method <code>onCreate()</code>, and specify what the GUI should be by calling the method <code>setContentView()</code>. Most often the GUI is specified in XML files you put in the <code>res/layout/</code> folder, and to <code>setContentView()</code> you pass an identifier to the XML file to use for the GUI.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, there&#39;s a convention to name layouts that are used by activities as <code>activity_XXX.xml</code>, such as <code>activity_login.xml</code>. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.</p></div><p><code>onCreate()</code> will be called with a <code>Bundle</code> as argument called <code>savedInstanceState</code>. That argument is very important to handle <em>runtime configuration changes</em> properly, which we will cover in another lecture. For now, it&#39;s enough for you to know that you must pass this <code>Bundle</code> to the <code>onCreate()</code> method you override.</p>', 4);
const _hoisted_42 = { class: "custom-container tip" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example showing how to create an activity with a GUI.",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode(".MyActivity"),
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
            /* @__PURE__ */ createTextVNode("true"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("category")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.category.LAUNCHER"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("action")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.action.MAIN"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("activity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("orientation")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("vertical"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Hello, world!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("LinearLayout")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MyActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_main"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
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
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "div",
  { style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto", "grid-template-rows": "auto" } },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " Hello, world! ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createStaticVNode('<h3 id="starting-another-activity" tabindex="-1"><a class="header-anchor" href="#starting-another-activity" aria-hidden="true">#</a> Starting another activity</h3><p>To navigate the user to another activity, call the method <code>startActivity()</code> on a <code>Context</code>. <code>Activity</code> inherits from <code>Context</code>, so you can call <code>startActivity()</code> on the <code>Activity</code> itself. When you call this method, you pass it an <code>Intent</code> indicating which other activity in your app to start. To the <code>Intent</code> constructor you pass a <code>Context</code> (e.g. the <code>Activity</code> itself) and the runtime class of the <code>Activity</code> that should be started, like <code>LoginActivity::class.java</code> to start the <code>LoginActivity</code>.</p>', 2);
const _hoisted_51 = { class: "custom-container tip" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example showing how to create an activity with a GUI.",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode(".MainActivity"),
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
            /* @__PURE__ */ createTextVNode("true"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("category")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.category.LAUNCHER"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("action")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.action.MAIN"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("activity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
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
            /* @__PURE__ */ createTextVNode(".SecondActivity"),
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
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
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("orientation")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("vertical"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Go to SecondActivity"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Button\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Intent\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MainActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_main"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find the button from the layout file."),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" button "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Call setOnClickListener on the button and pass it a function"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// that will be called when the user clicks on the button."),
        /* @__PURE__ */ createTextVNode("\n		button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// When the user clicks on the button, this function (between"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// { and }) will be called."),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Start and take the user to SecondActivity."),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "startActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "this"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Pass this activity as the Context."),
        /* @__PURE__ */ createTextVNode("\n				SecondActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("java\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("orientation")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("vertical"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("I'm SecondActivity!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" SecondActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_second"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen897987",
    style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "1" },
      onclick: "document.querySelector('#screen897987').style.display = 'none'; document.querySelector('#screen85426').style.display = 'grid';"
    }, " Go to SecondActivity ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen85426",
    style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " I'm SecondActivity! ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If the user would press the back button on the Android device when she has come to the second activity, she would be taken back to the first activity.",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createStaticVNode('<h3 id="passing-information-to-another-activity" tabindex="-1"><a class="header-anchor" href="#passing-information-to-another-activity" aria-hidden="true">#</a> Passing information to another activity</h3><p>Often when you start another activity you need to pass additional information to the activity you start. For example, maybe you have:</p><ul><li><code>ListNewsArticlesActivity</code>, which list news articles, and when you click on one of them the user should come to:</li><li><code>ViewNewsArticleActivity</code>, which shows all information about a specific news article</li></ul><p><code>ViewNewsArticleActivity</code> needs to know which article to show information about, so when you start this activity, you need to pass along an identifier to the article to show. That type of information can be passed in a <code>Bundle</code> in the <code>Intent</code> you use to start the activity. <code>Intent</code> has a method called <code>putExtra()</code>, that you can call to add such information to the <code>Bundle</code> in the <code>Intent</code>. When you call <code>putExtra()</code> you pass it two arguments:</p><ul><li>The first argument is a string used as a key for the value you want to pass along</li><li>The second argument is the actual value you want to pass along</li></ul><p>The receiving activity can then through the <code>Intent</code> starting it (stored in the class&#39; <code>intent</code> property) obtain the value passed along using the same key by calling a <code>get*Extra()</code> method (like <code>getIntExtra()</code>, or <code>getStringExtra()</code>, etc., depending on the datatype of the value). When calling the <code>get*Extra()</code> you also need to pass a value that should be returned if the one starting the activity forgot to pass along the extra information.</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, the convention is to put the keys in constants named <code>EXTRA_XXX</code> in the receiving activity file, and always refer to these constants whenever you call <code>putExtra()</code> or <code>get*Extra()</code>. This way, you don&#39;t risking misspelling the name of the key, so you don&#39;t risk compiling an app that will crash when it runs. If you now misspell the constant instead, you will get a compiler error you are immediately aware of.</p><p>The constants also serve as documentation; by looking at the <code>EXTRA_XXX</code> constants you can easily see what extra information you need to pass along to the activity when you start it.</p></div>', 7);
const _hoisted_69 = { class: "custom-container tip" };
const _hoisted_70 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example showing how to create an activity with a GUI.",
  -1
  /* HOISTED */
);
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode(".MainActivity"),
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
            /* @__PURE__ */ createTextVNode("true"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("category")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.category.LAUNCHER"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("action")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.action.MAIN"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("activity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
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
            /* @__PURE__ */ createTextVNode(".ShowSumActivity"),
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
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
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("orientation")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("vertical"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Show 4 + 8"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/first_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Show 7 + 2"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/second_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Button\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Intent\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MainActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_main"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find the buttons from the layout file."),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" firstButton "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("first_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" secondButton "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("second_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Add click listeners to the buttons starting ShowSumActivity."),
        /* @__PURE__ */ createTextVNode("\n		firstButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" intent "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "this"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" ShowSumActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("java"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "putExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("EXTRA_FIRST_TERM"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "4"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "putExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("EXTRA_SECOND_TERM"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "8"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "startActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n		secondButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "startActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "this"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" ShowSumActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("java"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "apply"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "putExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("EXTRA_FIRST_TERM"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "7"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "putExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("EXTRA_SECOND_TERM"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("orientation")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("vertical"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/sum_text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("TextView\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" EXTRA_FIRST_TERM "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string-literal singleline" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"EXTRA_FIRST_TERM"')
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" EXTRA_SECOND_TERM "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string-literal singleline" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"EXTRA_SECOND_TERM"')
        ]),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" ShowSumActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" firstTerm "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getIntExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("EXTRA_FIRST_TERM"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" secondTerm "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getIntExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("EXTRA_SECOND_TERM"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" sum "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" firstTerm "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode(" secondTerm\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_show_sum"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" sumTextView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("TextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("sum_text_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		sumTextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("text "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string-literal singleline" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token expression" }, "firstTerm")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, " + "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token expression" }, "secondTerm")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, " = "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token expression" }, "sum")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"')
        ]),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_77 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen7294037",
    style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "1" },
      onclick: "document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen1038362').style.display = 'grid';"
    }, " Show 4 + 8 "),
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "2" },
      onclick: "document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen7749372').style.display = 'grid';"
    }, " Show 7 + 2 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen1038362",
    style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " 4 + 8 = 12 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen7749372",
    style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("div", { style: { "grid-column": "1", "grid-row": "1" } }, " 7 + 2 = 9 ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createStaticVNode('<h3 id="passing-information-back" tabindex="-1"><a class="header-anchor" href="#passing-information-back" aria-hidden="true">#</a> Passing information back</h3><p>When an activity starts another activity, that other activity can pass information back to the first activity. This is useful when you need to re-use the same functionality at multiple places. For example, maybe the user should be able to select a color for multiple different parts of your application (one background color, one text color, one favorite color, etc.). Then you can put the &quot;Select color&quot; functionality in its own activity, and then other activities can start this activity whenever they need the user to select a color. When the user has selected her color, the activity sends back that color to the first activity.</p><p>To start an activity that should send back a value, call <code>startActivityForResult()</code> instead of <code>startActivity()</code>. In addition to the <code>Intent</code> identifying the activity to start, you should also pass along a <em>request code</em> (an integer) that you later will get back when the user has made her choice in the other activity. This is useful if the first activity makes multiple different calls to <code>startActivityForResult()</code> (the request code can be used to distinguish the calls).</p><div class="custom-container warning"><p class="custom-container-title">Follow conventions!</p><p>In Android projects, the convention is to put request codes in constants named <code>REQUEST_CODE_XXX</code> in the activity file calling <code>startActivityForResult()</code>. By using constants, you&#39;ll get a compiler error if you make a typing mistake, and it&#39;s easy to see which request code numbers the activity is using, so you don&#39;t risk re-using one and the same by mistake.</p></div><p>In the activity where the user should make her decision, call the method <code>setResult()</code> to indicate that the user has made her decision. Here you need to pass two values:</p><ul><li>A <em>result code</em> (integer) indicating if the selection succeeded or not (one typically use the constants <code>Activity.RESULT_OK</code> if the user made the choice, and <code>Activity.RESULT_CANCELED</code> if the user didn&#39;t/couldn&#39;t make a choice)</li><li>An <code>Intent</code> with more information about the choice the user made</li></ul><p>After the user has made her choice, you typically call <code>finish()</code> on the activity to close it, at which point the user will get back to the previous activity.</p><p>In the activity that called <code>startActivityForResult()</code>, override the method <code>onActivityResult()</code>, which will be called when the user gets back to the activity. Here you receive the following as arguments:</p><ul><li>The request code you used to start the activity</li><li>The result code</li><li>The <code>Intent</code> with more information about the user&#39;s choice</li></ul>', 9);
const _hoisted_89 = { class: "custom-container tip" };
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example showing how to create an activity with a GUI.",
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode(".MainActivity"),
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
            /* @__PURE__ */ createTextVNode("true"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("category")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.category.LAUNCHER"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("action")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("android.intent.action.MAIN"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("intent-filter")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("activity")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
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
            /* @__PURE__ */ createTextVNode(".SelectColorActivity"),
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
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
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("orientation")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("vertical"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("TextView")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("This view can be styled!"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/text_view"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Select background color"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/select_background_color_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Select text color"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/select_text_color_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Button\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("TextView\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("content"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Intent\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("graphics"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Color\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" REQUEST_CODE_SELECT_BACKGROUND_COLOR "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1234"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Actual numbers here doesn't"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" REQUEST_CODE_SELECT_TEXT_COLOR "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "4321"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// matter as long as they are uniq."),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" MainActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "lateinit"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
        /* @__PURE__ */ createTextVNode(" textView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" TextView\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_main"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find the views."),
        /* @__PURE__ */ createTextVNode("\n		textView "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("TextView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("r"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("text_view"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" selectBackgroundColorButton "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("select_background_color_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" selectTextColorButton "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("select_text_color_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Add click listeners to the buttons starting SelectColorActivity."),
        /* @__PURE__ */ createTextVNode("\n		selectBackgroundColorButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "startActivityForResult"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "this"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" SelectColorActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("java"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n				REQUEST_CODE_SELECT_BACKGROUND_COLOR\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n		selectTextColorButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "startActivityForResult"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "this"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" SelectColorActivity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "::"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("java"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n				REQUEST_CODE_SELECT_TEXT_COLOR\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onActivityResult"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("requestCode"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" resultCode"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "data"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// In this example, resultCode will always be Activity.RESULT_OK, so let's ignore that parameter."),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" color "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "data"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "!!"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getStringExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("RESULT_EXTRA_COLOR"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "when"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("requestCode"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			REQUEST_CODE_SELECT_BACKGROUND_COLOR "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "->"),
        /* @__PURE__ */ createTextVNode(" textView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setBackground"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			REQUEST_CODE_SELECT_TEXT_COLOR "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "->"),
        /* @__PURE__ */ createTextVNode(" textView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setTextColor"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "else"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "->"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "throw"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "IllegalStateException"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string-literal singleline" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Unknown request code '),
          /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "$"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token expression" }, "requestCode")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"')
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Should never happen."),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
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
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("match_parent"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n	"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("orientation")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("vertical"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Red"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/select_red_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("Button")
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_width")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("layout_height")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("wrap_content"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("text")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("Blue"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode("\n		"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "android:"),
            /* @__PURE__ */ createTextVNode("id")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("@+id/select_blue_button"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("LinearLayout")
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
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
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
        /* @__PURE__ */ createTextVNode("Activity\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("os"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Bundle\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("widget"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("TextView\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createTextVNode(" android"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("graphics"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("Color\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" RESULT_EXTRA_COLOR "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string-literal singleline" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"RESULT_EXTRA_COLOR"')
        ]),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "class"),
        /* @__PURE__ */ createTextVNode(" SelectColorActivity "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "override"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Bundle"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "?"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "super"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "onCreate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("savedInstanceState"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setContentView"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("layout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("activity_select_color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Find the buttons from the layout file."),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" selectRedButton "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("select_red_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "val"),
        /* @__PURE__ */ createTextVNode(" selectBlueButton "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" findViewById"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("Button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("R"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("select_blue_button"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Add click listeners to the buttons."),
        /* @__PURE__ */ createTextVNode("\n		selectBackgroundColorButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "sendBackColor"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("Color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("RED"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n		selectTextColorButton"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setOnClickListener"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "sendBackColor"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("Color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("BLUE"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Method to send back a color."),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fun"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "sendBackColor"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" Int"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setResult"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("\n			Activity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("RESULT_OK"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "Intent"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "apply"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n				"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "putExtra"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("RESULT_EXTRA_COLOR"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n			"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n		"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "finish"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n		\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n	\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "highlight-lines" }, [
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
      /* @__PURE__ */ createBaseVNode("div", { class: "highlight-line" }, " "),
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
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen573957",
    style: { "height": "100%", "width": "100%", "display": "grid", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto  auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("div", {
      class: "text",
      style: { "grid-column": "1", "grid-row": "1" }
    }, " This view can be styled! "),
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "2" },
      onclick: "document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen74832726').style.display = 'grid';"
    }, " Select background color "),
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "3" },
      onclick: "document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen7887865').style.display = 'grid';"
    }, " Select text color ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen74832726",
    style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "1" },
      onclick: "document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'red';"
    }, " Red "),
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "2" },
      onclick: "document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'blue';"
    }, " Blue ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    id: "screen7887865",
    style: { "height": "100%", "width": "100%", "display": "none", "grid-template-columns": "auto 1fr", "grid-template-rows": "auto auto 1fr" }
  },
  [
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "1" },
      onclick: "document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'red';"
    }, " Red "),
    /* @__PURE__ */ createBaseVNode("button", {
      style: { "grid-column": "1", "grid-row": "2" },
      onclick: "document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'blue';"
    }, " Blue ")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_Smartphone = resolveComponent("Smartphone");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("The following chapters from the course book "),
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("Exploring Android"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(": "),
        _hoisted_8
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("The "),
      createBaseVNode("a", _hoisted_9, [
        createTextVNode("Android Developers Guide"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" is a free alternative.")
    ]),
    _hoisted_10,
    createBaseVNode("div", _hoisted_20, [
      _hoisted_21,
      _hoisted_22,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => [
              _hoisted_23
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_24
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_25,
    createBaseVNode("div", _hoisted_32, [
      _hoisted_33,
      _hoisted_34,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => [
              _hoisted_35
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_36
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_37
    ]),
    _hoisted_38,
    createBaseVNode("div", _hoisted_42, [
      _hoisted_43,
      _hoisted_44,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => [
              _hoisted_45
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_my.xml" }, {
            default: withCtx(() => [
              _hoisted_46
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MyActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_47
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_48
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("p", null, [
      createTextVNode("To learn more about how to create graphical user interfaces in Android, checkout the lecture "),
      createVNode(_component_RouterLink, { to: "/lectures/android-views-and-layouts/" }, {
        default: withCtx(() => [
          createTextVNode("Android Views and Layouts")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(".")
    ]),
    _hoisted_49,
    createBaseVNode("div", _hoisted_51, [
      _hoisted_52,
      _hoisted_53,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => [
              _hoisted_54
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: withCtx(() => [
              _hoisted_55
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_56
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_second.xml" }, {
            default: withCtx(() => [
              _hoisted_57
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "SecondActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_58
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_59,
          _hoisted_60
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_61
    ]),
    _hoisted_62,
    createBaseVNode("div", _hoisted_69, [
      _hoisted_70,
      _hoisted_71,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => [
              _hoisted_72
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: withCtx(() => [
              _hoisted_73
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_74
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_show_sum.xml" }, {
            default: withCtx(() => [
              _hoisted_75
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "ShowSumActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_76
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_77,
          _hoisted_78,
          _hoisted_79
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_80,
    createBaseVNode("div", _hoisted_89, [
      _hoisted_90,
      _hoisted_91,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "AndroidManifest.xml" }, {
            default: withCtx(() => [
              _hoisted_92
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_main.xml" }, {
            default: withCtx(() => [
              _hoisted_93
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "MainActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_94
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "res/layout/activity_select_color.xml" }, {
            default: withCtx(() => [
              _hoisted_95
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "SelectColorActivity.kt" }, {
            default: withCtx(() => [
              _hoisted_96
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Smartphone, null, {
        default: withCtx(() => [
          _hoisted_97,
          _hoisted_98,
          _hoisted_99
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
