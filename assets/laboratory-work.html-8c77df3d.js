import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, a as createBaseVNode, b as createTextVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _imports_0 = "/course-material/assets/laboratory-work-use-case-diagram-ca8b0fcd.jpeg";
const _imports_1 = "/course-material/assets/laboratory-work-gui-f08d5912.jpeg";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "laboratory-work",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#laboratory-work",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Laboratory Work")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("On this page you find information about the examination test "),
    /* @__PURE__ */ createBaseVNode("code", null, "Laboratory Work"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Help, don&#39;t cheat!</p><p>The laboratory work is individual work.</p><p><strong>It is OK to help each other</strong>. Examples of that:</p><ul><li>help your friend to debug his code</li><li>explain to your friend why his code doesn&#39;t work the way he thinks it works</li><li>compare and discuss different solutions to a lab problem with your friend after both of you have solved the lab to figure out which solution is the best one</li></ul><p><strong>It is NOT OK to cooperate in any way</strong>. Examples of that:</p><ul><li>sit at the same computer and write code together with your friend</li><li>sit at different computers and discuss and write the same code as your friend</li><li>give code to/receive code from your friend</li></ul><p><strong>You must write your own code! If you are unsure about what counts as <em>helping</em> and what counts as <em>cheating</em>, then simply work alone and ask only the teacher at the lab sessions for help.</strong></p></div><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing Required Software</h2><p>In this course, we will only use Android Studio and the tools that come with it to create Android applications. We also recommend students to use Git while working on their projects, but that is not a requirement. All software we use in this course is available for free for both Windows, Mac and Linux.</p><p><strong>If you work on a computer in one of the rooms we have lab sessions in</strong>, Android Studio and Git should already be installed for you, so no need to install anything yourself.</p><p><strong>If you work on a school computer in any other room</strong>, you need to manually install Android Studio (and Git, if you want to use it) through the <em>Software Center</em> application (unless someone already has done that on the specific computer you are using).</p>', 5);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "If you work on your own private computer",
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://developer.android.com/studio/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://git-scm.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "To test the android applications you create, you need to run them on an Android device. If you have your own smartphone or tablet running Android you can use that one, just connect it to your computer using a USB cable.",
  -1
  /* HOISTED */
);
const _hoisted_12 = { class: "custom-container tip" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "For Windows users",
  -1
  /* HOISTED */
);
const _hoisted_14 = {
  href: "https://developer.android.com/studio/run/oem-usb.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = {
  href: "https://developer.android.com/studio/debug/dev-options.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Enable USB debugging on your device",
  -1
  /* HOISTED */
);
const _hoisted_17 = {
  href: "https://developer.android.com/studio/run/emulator-acceleration#accel-vm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = { class: "custom-container warning" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Note!",
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "This computer meets requirements for HAXM, but VT-x is not turned on",
  -1
  /* HOISTED */
);
const _hoisted_21 = {
  href: "https://stackoverflow.com/questions/21635504/error-during-installing-haxm-vt-x-not-working",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>To the students who take the <em>Web Development - Advanced Concepts</em> course.</p><p>Docker uses Virtual Machine Acceleration too, and both Docker and the Android Emulator can&#39;t use it at the same time.</p></div><p>Android Studio often reads from and writes to many files, such as when you create a new Android Studio project or when you build your application. To be efficient, it&#39;s important that reading from and writing to files is fast. There are some known cases slowing down this process, such as:</p><ul><li>Antivirus programs you have installed</li><li>Windows Defender</li><li>Windows File Indexing</li></ul><p>Nowadays Android Studio might install exceptions to these programs automatically when you install Android Studio, improving the build performance, but if Android Studio is slow, you might want to investigate this.</p>', 4);
const _hoisted_26 = { class: "custom-container tip" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "For Windows users",
  -1
  /* HOISTED */
);
const _hoisted_28 = {
  href: "https://www.howtogeek.com/108742/how-to-use-the-new-task-manager-in-windows-8/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = {
  href: "https://stackoverflow.com/a/49336163/2104665",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A fast CPU and an SSD instead of an HDD will of course also make Android Studio run faster as well; running Android Studio on a weak laptop usually gives you a very bad development experience.",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "learning-the-basics",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#learning-the-basics",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Learning the basics")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "There are many things you need to learn before you will be able to understand how a basic Hello World program in Android works. Therefore we recommend you to start by doing things in the following order:",
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "Learn the basics in Kotlin",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "Setup a minimal Android Jetpack Compose app",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_37 = {
  href: "https://developer.android.com/jetpack/compose/setup",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "Learn the basics in Jetpack Compose",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_40 = {
  href: "https://www.jetpackcompose.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_42 = {
  href: "https://developer.android.com/codelabs/jetpack-compose-basics",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = {
  href: "https://developer.android.com/codelabs/jetpack-compose-layouts",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = {
  href: "https://developer.android.com/codelabs/jetpack-compose-state",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  [
    /* @__PURE__ */ createTextVNode("Learn how to use "),
    /* @__PURE__ */ createBaseVNode("code", null, "NavHost")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = {
  href: "https://developer.android.com/jetpack/compose/navigation",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In addition to this, the tutorials given by the teacher in the course will help you to learn what you need to know to pass this lab.",
  -1
  /* HOISTED */
);
const _hoisted_48 = { class: "custom-container tip" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "More learning material",
  -1
  /* HOISTED */
);
const _hoisted_50 = {
  href: "https://github.com/androiddevnotes/awesome-jetpack-compose-learning-resources",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "the-assignment",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#the-assignment",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" The Assignment")
  ],
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "Use-case diagram showing the functionality in the ToDo app."
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createStaticVNode("<p>It is up to you to specify what data a ToDo item should contain, but it needs to contain at least a title (a short description) and content (a longer description). Feel free to add more information to it if you want, such as:</p><ul><li>Has the ToDo item been carried out yet or not?</li><li>How long time is it estimated to take to carry out the ToDo item?</li><li>When is the deadline to have carried out the ToDo item?</li><li>Which importance level (e.g. <code>Important</code>, <code>Medium</code>, <code>Not Important</code>) does the ToDo item have?</li><li>Etc.</li></ul>", 2);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      alt: "Example of what the GUI can look like."
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createStaticVNode('<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>The following requirements exist for the ToDo app:</p><ul><li>The app must implement functionality enabling users to do all the use-cases in the use-case diagram above</li><li>When creating and updating a ToDo item, you must use validation: <ul><li>The ToDo item should only be created/updated if no validation errors exist</li><li>If validation errors exists, display them as descriptive error messages on the screen to the user</li><li>You must have at least 3 different validation rules. Use whichever you want, but they can for example be: <ul><li>The title have to contain at least 3 characters</li><li>The title have to contain at most 50 characters</li><li>The content have to contain at most 120 characters</li></ul></li></ul></li><li>When updating a ToDo item, the fields where the user can change the text should be pre-populated with the old values in the ToDo item</li><li>The back navigation must always make sense (especially after you have created, deleted or updated a ToDo item)</li><li>The user can always properly use the GUI no matter: <ul><li>How small screen the user has</li><li>How long text the ToDo items contain</li><li>How many ToDo items there are</li><li>Etc.</li></ul></li></ul><h2 id="guidelines-for-getting-started" tabindex="-1"><a class="header-anchor" href="#guidelines-for-getting-started" aria-hidden="true">#</a> Guidelines for getting started</h2><p>If you want, feel free to try and implement the app from scratch yourself. Otherwise, this sub-chapter contains some instructions that can help you get started.</p>', 5);
const _hoisted_61 = { class: "custom-container tip" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Use Git!",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("You don't have to use Git in this "),
    /* @__PURE__ */ createBaseVNode("code", null, "Laboratory Work"),
    /* @__PURE__ */ createTextVNode(", but we strongly recommend you to, because most likely you will be using Git in your "),
    /* @__PURE__ */ createBaseVNode("code", null, "Project Work"),
    /* @__PURE__ */ createTextVNode(", and it's good if you have some experience of using it before that. Here we provide you with some instructions on how to get started using Git:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = {
  href: "https://github.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Create a new Git repository on GitHub (be sure the repository is private, otherwise you risk other students will copy your work, and then both of you will be reported to DAN for cheating)",
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("Clone the GitHub repository to your own computer using the "),
    /* @__PURE__ */ createBaseVNode("code", null, "git clone ..."),
    /* @__PURE__ */ createTextVNode(" command")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "The Android Studio project that you will create per the instructions below, place it in the root folder of your local repository",
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Implement all functionality for one use-case at a time. When you are done with the functionality for a use-case, create a new commit in your local repository, and then push that commit to the repository on GitHub",
  -1
  /* HOISTED */
);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("Create a new Android Studio project that makes use of Jetpack Compose (use the template "),
    /* @__PURE__ */ createBaseVNode("em", null, "Empty Compose Activity"),
    /* @__PURE__ */ createTextVNode(")")
  ],
  -1
  /* HOISTED */
);
const _hoisted_70 = {
  href: "https://developer.android.com/jetpack/compose/navigation#setup",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_71 = {
  href: "https://kotlinlang.org/docs/data-classes.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_72 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "id",
  -1
  /* HOISTED */
);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "1",
  -1
  /* HOISTED */
);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "2",
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("Create a Kotlin "),
    /* @__PURE__ */ createBaseVNode("code", null, "ToDoRepository"),
    /* @__PURE__ */ createTextVNode(" class that can be used to store all ToDo items in a list. Then also create a new instance of it, and store it in a global variable. It is through that global variable the GUI later will be able to access the data it needs to display. You can use the code below to get started:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_76 = /* @__PURE__ */ createStaticVNode('<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// Global variable used to store all ToDos.</span>\n<span class="token keyword">val</span> toDoRepository <span class="token operator">=</span> <span class="token function">ToDoRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Let&#39;s add two initial ToDos (to facilitate testing)</span>\n    <span class="token function">addToDo</span><span class="token punctuation">(</span>\n        <span class="token string-literal singleline"><span class="token string">&quot;Feed the pets&quot;</span></span><span class="token punctuation">,</span>\n        <span class="token string-literal singleline"><span class="token string">&quot;Give the cat a fish and the dog a cat.&quot;</span></span>\n    <span class="token punctuation">)</span>\n    <span class="token function">addToDo</span><span class="token punctuation">(</span>\n        <span class="token string-literal singleline"><span class="token string">&quot;Exercise&quot;</span></span><span class="token punctuation">,</span>\n        <span class="token string-literal singleline"><span class="token string">&quot;Take a walk and listen to music.&quot;</span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> ToDoRepository<span class="token punctuation">{</span>\n    \n    <span class="token keyword">private</span> <span class="token keyword">val</span> toDos <span class="token operator">=</span> mutableListOf<span class="token operator">&lt;</span>ToDo<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    \n    <span class="token keyword">fun</span> <span class="token function">addToDo</span><span class="token punctuation">(</span>title<span class="token operator">:</span> String<span class="token punctuation">,</span> content<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> Int<span class="token punctuation">{</span>\n        <span class="token keyword">val</span> id <span class="token operator">=</span> <span class="token keyword">when</span> <span class="token punctuation">{</span>\n            toDos<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token number">1</span>\n            <span class="token keyword">else</span> <span class="token operator">-&gt;</span> toDos<span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span>\n        toDos<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">ToDo</span><span class="token punctuation">(</span>\n            id<span class="token punctuation">,</span>\n            title<span class="token punctuation">,</span>\n            content\n        <span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> id\n    <span class="token punctuation">}</span>\n    \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">About storing data</p><p>Storing data in a global variable like this is not appropriate in this case, because when the app stops running, the ToDo items will be lost. Data like this is better stored in the built in supported SQLite database, but to simplify this lab (which primarily is about practising on implementing graphical user interfaces using Jetpack Compose) we will instead store the ToDo items in a global variable.</p></div>', 2);
const _hoisted_78 = { start: "5" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("Pick a use-case from the use-case diagram earlier on this page to implement next. Here is a suggestion in which order to implement the use-cases: "),
    /* @__PURE__ */ createBaseVNode("ol", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "Browse ToDos"),
      /* @__PURE__ */ createBaseVNode("li", null, "View ToDo"),
      /* @__PURE__ */ createBaseVNode("li", null, "Create ToDo"),
      /* @__PURE__ */ createBaseVNode("li", null, "Delete ToDo"),
      /* @__PURE__ */ createBaseVNode("li", null, "Update ToDo")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "NavHost",
  -1
  /* HOISTED */
);
const _hoisted_81 = {
  href: "https://developer.android.com/jetpack/compose/navigation#nav-with-args",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_82 = /* @__PURE__ */ createStaticVNode("<ol><li>In you own Jetpack Compose component, you will need to be able to get/change the ToDo items in your <code>ToDoRepository</code>. Add methods to the <code>ToDoRepository</code> to do this. For example: <ul><li>Your Jetpack Compose component that implements the use-case <em>Browser ToDos</em> needs to retrieve all ToDo items from the repository, so add a method named <code>getAllToDos()</code> to your <code>ToDoRepository</code></li><li>Your Jetpack Compose component that implements the use-case <em>View ToDo</em> needs to retrieve a ToDo item with a specific id from the repository, so add a method named <code>getToDoById(id)</code> to your <code>ToDoRepository</code></li><li>Etc.</li></ul></li></ol>", 1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Restart on (5) until you have implemented all use-cases. If you use Git, don't forget to create and a push a new commit after you're done implementing each use-case!",
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "present-your-work",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#present-your-work",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Present your work")
  ],
  -1
  /* HOISTED */
);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "#requirements" },
  "Requirements",
  -1
  /* HOISTED */
);
const _hoisted_86 = {
  href: "https://ju.instructure.com/courses/6658/assignments/43129",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_87 = {
  href: "https://ju.instructure.com/courses/6658/assignments/43130",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_CompactInfo = resolveComponent("CompactInfo");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createVNode(_component_CompactInfo, { infoPieces: {
      "Number of credits": "1.5",
      "Grades": ["Fail", "Pass"],
      "How to work": "Individually",
      "Goal": "To learn the basics of implementing graphical user interfaces using Jetpack Compose.",
      "Instructions": "Complete and present your solution to the lab described on this page to a teacher at a lab session.",
      "Help": "Ask the teacher for help at the lab sessions."
    } }, null, 8, ["infoPieces"]),
    _hoisted_3,
    createBaseVNode("p", null, [
      _hoisted_8,
      createTextVNode(", you need to download and install "),
      createBaseVNode("a", _hoisted_9, [
        createTextVNode("Android Studio"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (and "),
      createBaseVNode("a", _hoisted_10, [
        createTextVNode("Git"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", if you want to use it) yourself.")
    ]),
    _hoisted_11,
    createBaseVNode("div", _hoisted_12, [
      _hoisted_13,
      createBaseVNode("p", null, [
        createTextVNode("On Windows you need to "),
        createBaseVNode("a", _hoisted_14, [
          createTextVNode("Install OEM USB drivers"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" to be able to install Android applications on your connected Android device.")
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("To more easily debug applications when they run on your own Android device, you need to "),
      createBaseVNode("a", _hoisted_15, [
        createTextVNode("Configure on-device developer options"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (do the "),
      _hoisted_16,
      createTextVNode(" thing).")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you don't have your own Android device to run your Android applications on, you can use an Android emulator that comes with Android Studio. If the emulator has not automatically been configured to take advantage of VM acceleration when Android Studio was installed, we highly recommend you to configure it to take advantage of the speed improvements (so the emulator lag less) by "),
      createBaseVNode("a", _hoisted_17, [
        createTextVNode("Configuring VM acceleration"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (has already been configured on the school's computers). This is a good idea even if you have a physical Android device to test on, because you probably want to test run your Android applications on different versions of Android, different screen sizes, etc., which is easy to do on an emulator, but impossible to do on a physical device.")
    ]),
    createBaseVNode("div", _hoisted_18, [
      _hoisted_19,
      createBaseVNode("p", null, [
        createTextVNode("Getting VM acceleration to work is sometimes hard. If your emulator for some reason can't use it, it is often hard to debug. For example, you might get the error message "),
        _hoisted_20,
        createTextVNode(", and the problem could be that "),
        createBaseVNode("a", _hoisted_21, [
          createTextVNode("an antivirus program on your computer doesn't allow it to be used"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". Your development experience will be much better if you manage to enable VM acceleration, but it's probably not worth spending 20 hours on trying to get it to work. If you can't get it to work on your own computer, then stick to using the school's computers.")
      ])
    ]),
    _hoisted_22,
    createBaseVNode("div", _hoisted_26, [
      _hoisted_27,
      createBaseVNode("p", null, [
        createTextVNode("You can often find out what's slowing down Android Studio by using the "),
        createBaseVNode("a", _hoisted_28, [
          createTextVNode("Task Manager"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" to find the process that allocates much of your computer resources when Android Studio is slow, and then try to configure it to ignore Android Studio's folders. For example, see "),
        createBaseVNode("a", _hoisted_29, [
          createTextVNode("configure Windows Defender and Windows File Indexing to ignore Android Studio folders"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ])
    ]),
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _hoisted_33,
        _hoisted_34,
        createTextVNode(" View the lecture on "),
        createVNode(_component_RouterLink, { to: "/lectures/kotlin/" }, {
          default: withCtx(() => [
            createTextVNode("Kotlin")
          ]),
          _: 1
          /* STABLE */
        }),
        createTextVNode(" and read/take a look at the recommended reading material there.")
      ]),
      createBaseVNode("li", null, [
        _hoisted_35,
        _hoisted_36,
        createTextVNode(" Create a new Android Studio project per the instructions "),
        createBaseVNode("a", _hoisted_37, [
          createTextVNode("Create a new app with support for Compose"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_38,
        _hoisted_39,
        createTextVNode(" The website "),
        createBaseVNode("a", _hoisted_40, [
          createTextVNode("jetpackcompose.net"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" has many good and simple examples of how to use the most commonly used Jetpack Compose components. We recommend you to checkout those examples, and at the same time experiment with using the components you learn there in the Android Studio project you created before."),
        _hoisted_41,
        createTextVNode(" If you prefer to learn by watching videos, you can instead checkout the following code labs at Android Developers: "),
        createBaseVNode("ol", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_42, [
              createTextVNode("Jetpack Compose basics"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_43, [
              createTextVNode("Basic Layouts in Compose"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_44, [
              createTextVNode("State in Jetpack Compose"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_45,
        createBaseVNode("ol", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_46, [
              createTextVNode("Navigating with Compose"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ]),
    _hoisted_47,
    createBaseVNode("div", _hoisted_48, [
      _hoisted_49,
      createBaseVNode("p", null, [
        createTextVNode("If want more learning material than the ones mentioned above, checkout the GitHub repository "),
        createBaseVNode("a", _hoisted_50, [
          createTextVNode("androiddevnotes/awesome-jetpack-compose-learning-resources"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", which list videos, websites, slides, etc. with information about Jetpack Compose.")
      ])
    ]),
    _hoisted_51,
    createBaseVNode("p", null, [
      createTextVNode("Your task is to implement an Android ToDo app (an app a user can use to keep track of things she needs to do) containing the functionality shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Use-case diagram showing the functionality in the ToDo app." }, {
      default: withCtx(() => [
        _hoisted_52
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_53,
    createBaseVNode("p", null, [
      createTextVNode("It is up to you to decide what the graphical user interface should look like, but it can look like something as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Example of what the GUI can look like." }, {
      default: withCtx(() => [
        _hoisted_55
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_56,
    createBaseVNode("div", _hoisted_61, [
      _hoisted_62,
      _hoisted_63,
      createBaseVNode("ol", null, [
        createBaseVNode("li", null, [
          createTextVNode("If you don't have a "),
          createBaseVNode("a", _hoisted_64, [
            createTextVNode("GitHub"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" account, create a new one")
        ]),
        _hoisted_65,
        _hoisted_66,
        _hoisted_67,
        _hoisted_68
      ])
    ]),
    createBaseVNode("ol", null, [
      _hoisted_69,
      createBaseVNode("li", null, [
        createTextVNode("Add support for using "),
        createBaseVNode("a", _hoisted_70, [
          createTextVNode("NavHost"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Create a "),
        createBaseVNode("a", _hoisted_71, [
          createTextVNode("Kotlin Data Class"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" to specify what properties a ToDo item should contain (at least title and content). It is also good if it contains an "),
        _hoisted_72,
        createTextVNode(" property, which is a number that uniquely identifies it (the first ToDo item has id "),
        _hoisted_73,
        createTextVNode(", the second one has id "),
        _hoisted_74,
        createTextVNode(", and so on)")
      ]),
      _hoisted_75
    ]),
    _hoisted_76,
    createBaseVNode("ol", _hoisted_78, [
      _hoisted_79,
      createBaseVNode("li", null, [
        createTextVNode("Implemented the use-case you selected in its own Jetpack Compose component. Use "),
        _hoisted_80,
        createTextVNode(" to display one of your Jetpack Compose components at a time. For the Jetpack Compose components that should work with a single ToDo item, pass along the id of the ToDo item to them (learn more about that in "),
        createBaseVNode("a", _hoisted_81, [
          createTextVNode("Navigate with arguments"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(") "),
        _hoisted_82
      ]),
      _hoisted_83
    ]),
    _hoisted_84,
    createBaseVNode("p", null, [
      createTextVNode("Double check that your app fulfills the "),
      _hoisted_85,
      createTextVNode(". Then present your work to a teacher at one of the lab sessions. You should be able to explain how all code you have written works, and the teacher will ask you some questions about it to verify that this is the case. If the teacher is satisfied with your presentation he will approve you on the Canvas assignment "),
      createBaseVNode("a", _hoisted_86, [
        createTextVNode("Laboratory Work Presentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". After that, upload your project to the Canvas assignment "),
      createBaseVNode("a", _hoisted_87, [
        createTextVNode("Laboratory Work Code"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ])
  ]);
}
const laboratoryWork_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "laboratory-work.html.vue"]]);
export {
  laboratoryWork_html as default
};
