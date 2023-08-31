import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "using-shells",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#using-shells",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Using Shells")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Graphical User Interfaces are great, but using a shell/console/terminal can make you much more productive. Let's learn how to use shells so we can finish our workdays 5 minutes earlier for the rest of our lives.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/Sn4tmwk4tqE",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="using-shells.pdf">using-shells.pdf</a></li><li><a href="using-shells.pptx">using-shells.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://swcarpentry.github.io/shell-novice/reference/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Introducing the Shell"),
    /* @__PURE__ */ createBaseVNode("li", null, "Navigating Files and Directories"),
    /* @__PURE__ */ createBaseVNode("li", null, "(if you want to learn more about shells, feel free to read the rest of the chapters as well)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "shells",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#shells",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Shells")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = { class: "custom-container tip" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Shell or Console or Terminal?",
  -1
  /* HOISTED */
);
const _hoisted_12 = {
  href: "https://askubuntu.com/q/506510/255935",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "files",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#files",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Files")
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "file",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-text line-numbers-mode",
    "data-ext": "text"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-text" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "My todo list\n - Clean garden\n - Grocery shopping\n - Feed the pet\n")
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>Computers can store multiple files, and for us to be able to distinguish them from each other, we give each one a name. For example, the file with the name <code>my-todo-list</code> can contain information about what I need to do, and the file with the name <code>my-lecture-notes</code> can contain notes I&#39;ve written at the lectures I&#39;ve attended.</p><div class="custom-container warning"><p class="custom-container-title">No spaces?</p><p>Filenames can contain spaces (&quot;<code></code>&quot;), but since spaces are used to separate arguments passed to commands in shells, it&#39;s a bad idea to use spaces in filenames.</p><p>Some applications and programming libraries have difficulties handling filenames with spaces, so it&#39;s also a bit safer to never user spaces in filenames, otherwise you might get into trouble with those.</p><p>Consequently, most experienced programmers use a <code>-</code> instead of a space (<code></code>) in filenames.</p></div><div class="custom-container warning"><p class="custom-container-title">No caps?</p><p>Filenames can contain capital characters, but it&#39;s easier and quicker to type only lowercase characters on a keyboard, so most experienced computer users don&#39;t use capital characters in their filenames.</p></div><div class="custom-container warning"><p class="custom-container-title">No special characters?</p><p>Most modern operating system can handle special characters like <code>å</code>, <code>ä</code>, <code>ö</code>, <code>&#39;</code>, etc. in filenames without problem, but often you transfer files to other computers that might run another (e.g. older) operating system that can&#39;t handle these characters in filenames, so if you want to make sure the files works on other computers too (<strong>which you always want!</strong>), it&#39;s usually a bad idea to use special characters in the filenames even if it works on your computer.</p></div>', 4);
const _hoisted_20 = {
  href: "https://en.wikipedia.org/wiki/JSON",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = {
  href: "https://en.wikipedia.org/wiki/XML",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = {
  href: "https://en.wikipedia.org/wiki/Comma-separated_values",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ".",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ".json",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ".xml",
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-json line-numbers-mode",
    "data-ext": "json"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-json" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"title"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"My todo list"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, '"items"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Clean garden"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Grocery shopping"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Feed the pet"'),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n    \n"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "folders",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#folders",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Folders")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("A computer usually contains many files, and instead of having them all in a single bucket, we can place them in different buckets, known as "),
    /* @__PURE__ */ createBaseVNode("em", null, "folders"),
    /* @__PURE__ */ createTextVNode(". A folder can also contain other folders (known as sub-folders), which enables us to store files in a tree hierarchy. Just like files, each folder has a name. The root folder is usually called "),
    /* @__PURE__ */ createBaseVNode("code", null, "/"),
    /* @__PURE__ */ createTextVNode(", and the folder you create you can call whatever you want, but it's a good idea to name them using the same convention as mentioned for filenames.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = { class: "custom-container tip" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Folder or Directory?",
  -1
  /* HOISTED */
);
const _hoisted_31 = {
  href: "https://stackoverflow.com/q/5078676/2104665",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<h3 id="paths" tabindex="-1"><a class="header-anchor" href="#paths" aria-hidden="true">#</a> Paths</h3><p>Since files (and folders) can be put in folders, it&#39;s not enough to just know the name of a file (or folder) to identify it. For example, two different files (or folders) can have the same name as long as they are not placed in the same folder.</p><p>A path is an identifier for a file or a folder. These are used quite a lot when you use a shell, because the commands you execute in the shell usually operates on files and folders, and you specify which ones by passing the paths to the files and folders you want the command to operate on.</p><h4 id="absolute-paths" tabindex="-1"><a class="header-anchor" href="#absolute-paths" aria-hidden="true">#</a> Absolute paths</h4><p>To identify a file (or folder), you can list all the folders from the root folder (<code>/</code>) to the file (or folder). The names of the folders are usually separated by <code>/</code>, and this all together forms <em>the absolute path</em> to the file (or folder).</p>', 5);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "lecture-notes-programming.txt",
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "/school-work/2019/lecture-notes-programming.txt",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createStaticVNode('<h4 id="relative-paths" tabindex="-1"><a class="header-anchor" href="#relative-paths" aria-hidden="true">#</a> Relative paths</h4><p>Always when using a shell, you are standing in a folder, and that folder is known as the <em>Working Directory</em>. Often when you work with files and folders, you are only interested in the files and sub-folders in a specific folder. Then you can set that specific folder as your Working Directory, and then you can refer to the other files and folders using a <em>relative path</em> from your Working Directory, instead of using the absolute path. That is usually much more convenient. Relative paths work like this:</p><ul><li><code>some-name</code> <br> Refers to the file (or folder) with the name <code>some-name</code> in the Working Directory.</li><li><code>a-sub-folder/some-name</code> <br> Refers to the file (or folder) with the name <code>some-name</code> in the sub folder <code>a-sub-folder</code> in the Working Directory. You can add more <code>/</code> to go into more sub folders.</li><li><code>.</code> <br> Refers to the folder you are standing in (the Working Directory).</li><li><code>..</code> <br> Refers to the parent directory of the folder you are standing in. Can be used repeatedly and together with the other notations. For example, <code>../..</code> is the parent folder to the parent folder you are standing in, and <code>../a-file.txt</code> refers to the file <code>a-file.txt</code> in the parent folder.</li></ul><div class="custom-container warning"><p class="custom-container-title">Do paths to folders end with /?</p><p>If a path refers to a folder, it can end with <code>/</code>, but it&#39;s not required to write that. For example, both <code>/a-sub-folder</code> and <code>/a-sub-folder/</code> would refer to the same folder. However, it can be good to add that extra slash at the end to indicate to other humans reading the path that the path leads to a folder, since they might otherwise think it leads to a file.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>To rename the file <code>/school-work/2019/lecture-notes-programming.txt</code> to <code>/school-work/2019/programming-notes.txt</code>, you can use the <code>mv</code> command with absolute paths, like this (it doesn&#39;t matter what your Working Directory is since you use absolute paths):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> /school-work/2019/lecture-notes-programming.txt /school-work/2019/programming-notes.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Using the Working Directory, you can first change the Working Directory to <code>/school-work/2019/</code> using an absolute path and the <code>cd</code> command, and then rename the file using relative paths and the <code>mv</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /school-work/2019/\n<span class="token function">mv</span> lecture-notes-programming.txt programming-notes.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h3><p>Which commands the computer can execute differs between different operating system and different shells, but some commands exists on most of them, including:</p><ul><li><code>pwd</code><br> Print Working Directory, prints the path to the folder you are currently standing in.</li><li><code>ls</code><br> List Structure, prints the names of the files and sub folders in the Working Directory.</li><li><code>cd path</code><br> Change Directory, go to the folder specified in <code>path</code> (change to actual path).</li><li><code>mkdir name</code><br> MaKe DIRectory, creates a new folder called <code>name</code> (change to actual name) in the Working Directory. <code>name</code> can also be a path to the directory that should be created.</li><li><code>mv old_name new_name</code><br> MoVe, moves the file or folder called <code>old_name</code> (change to actual name) to <code>new_name</code> (change to actual name) in the Working Directory. <code>old_name</code> and <code>new_name</code> can also be paths.</li></ul>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("The Unix Shell: Summary of Basic Commands"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" (the commands works similar in Windows PowerShell, but the flags for them might not work): "),
        _hoisted_8
      ])
    ]),
    _hoisted_9,
    createBaseVNode("div", _hoisted_10, [
      _hoisted_11,
      createBaseVNode("p", null, [
        createTextVNode("Here the terms are used interchangeably, but they are actually not the same. See the Ask Ubuntu question "),
        createBaseVNode("a", _hoisted_12, [
          createTextVNode("What is the difference between Terminal, Console, Shell, and Command Line?"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" if you're curios about the details.")
      ])
    ]),
    _hoisted_13,
    createBaseVNode("p", null, [
      createTextVNode("A "),
      _hoisted_14,
      createTextVNode(" is a collection of data, for example some text you've typed. An example of that is shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Example of text content in a file containing data about a list of things." }, {
      default: withCtx(() => [
        _hoisted_15
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("Most applications using files need to have the data in a more structured format than one entered by a human (as the one shown in "),
      createVNode(_component_FigureNumber, { previous: "" }),
      createTextVNode(" above). Therefore, when applications store data in files, they store it in special formats they understand, for example "),
      createBaseVNode("a", _hoisted_20, [
        createTextVNode("JSON"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", "),
      createBaseVNode("a", _hoisted_21, [
        createTextVNode("XML"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" or "),
      createBaseVNode("a", _hoisted_22, [
        createTextVNode("CSV"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", etc.")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("When the data in a file has been written in a specific format, the filename usually ends with an extension (a "),
      _hoisted_23,
      createTextVNode(" followed by some characters) that indicates which format the data in the file is written in. JSON format has the file extension "),
      _hoisted_24,
      createTextVNode(", XML has the file extension "),
      _hoisted_25,
      createTextVNode(", etc. "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below shows an example of this.")
    ]),
    createVNode(_component_Figure, { caption: "todo-list.json, example of data about a list in a file written in JSON format." }, {
      default: withCtx(() => [
        _hoisted_26
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_27,
    _hoisted_28,
    createVNode(_component_FigureNumber),
    createTextVNode(" shows an example of some files and folders stored on a computer."),
    createVNode(_component_Figure, { caption: "A visualization of how files can be structured in folders. ▭ are files, ♢ are folders. Arrows point to the files and sub-folders a folder contains." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n    root{/}\n    d1{school-work}\n    d2{2019}\n    d3{2020}\n    selfie[selfie.jpeg]\n    notes1[lecture-notes-programming.txt]\n    notes2[lecture-notes-physics.txt]\n    notes3[lecture-notes-math.txt]\n    root --> d1\n    d1 --> d2\n    d1 --> d3\n    root --> selfie\n    d2 --> notes1\n    d2 --> notes2\n    d3 --> notes3\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("div", _hoisted_29, [
      _hoisted_30,
      createBaseVNode("p", null, [
        createTextVNode("Here the terms are used interchangeably, but they are actually not the same. See the Stack Overflow question "),
        createBaseVNode("a", _hoisted_31, [
          createTextVNode("What is the difference between a directory and a folder?"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" if you're curios about the details.")
      ])
    ]),
    _hoisted_32,
    createBaseVNode("p", null, [
      createTextVNode("For example, the absolute path to the file "),
      _hoisted_37,
      createTextVNode(" in "),
      createVNode(_component_FigureNumber, { previous: "" }),
      createTextVNode(" above is "),
      _hoisted_38,
      createTextVNode(".")
    ]),
    _hoisted_39
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
