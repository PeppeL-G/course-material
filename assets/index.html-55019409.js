import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "git-basics",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#git-basics",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Git Basics")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://en.wikipedia.org/wiki/Linus_Torvalds",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://trends.google.com/trends/explore?date=all&q=%2Fm%2F05vqwg,%2Fm%2F012ct9,%2Fm%2F08441_,%2Fm%2F08w6d6,%2Fm%2F09d6g&hl=en-US&tz=&tz=",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="why-use-a-version-control-system" tabindex="-1"><a class="header-anchor" href="#why-use-a-version-control-system" aria-hidden="true">#</a> Why use a version control system?</h2><p>So, why bother spending time on learning Git? Turns out that using a version control system have some very valuable benefits for projects, and all big software projects do today use some type of version control system.</p><div class="custom-container warning"><p class="custom-container-title">Just examples</p><p>The benefits described below are just examples, and not a complete list of all the benefits with using a version control system.</p></div><h3 id="benefit-1-knowing-when-what-changed" tabindex="-1"><a class="header-anchor" href="#benefit-1-knowing-when-what-changed" aria-hidden="true">#</a> Benefit 1: Knowing when what changed</h3><p>If a security bug is introduced into software, we can use the version control system to go back in time and see for how long time the bug has existed. This is especially important for libraries which other applications makes use of, because the libraries will most likely exist in different versions, and applications making use of the library need to know if the specific version of the library they are using contains the vulnerability or not.</p>', 5);
const _hoisted_9 = { class: "custom-container tip" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "http://heartbleed.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "Bug was introduced to OpenSSL in December 2011 and has been out in the wild since OpenSSL release 1.0.1 on 14th of March 2012. OpenSSL 1.0.1g released on 7th of April 2014 fixes the bug.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "With the same reasoning, applications need to version control their code as well, so if, for example, a website contains a security vulnerability, one can quickly see for how long time the vulnerability has existed. Maybe only newly registered users since the bug was introduced have had their data compromised?",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "benefit-2-keeping-track-of-who-did-what",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#benefit-2-keeping-track-of-who-did-what",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Benefit 2: Keeping track of who did what")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you find a vulnerability/bug, you always want to have as much information as possible about it, including who introduced the bug. Was it on purpose or not? What relevant code was introduced? With a version control system, that is quite easy to find out.",
  -1
  /* HOISTED */
);
const _hoisted_16 = { class: "custom-container tip" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "event-stream",
  -1
  /* HOISTED */
);
const _hoisted_19 = {
  href: "https://github.com/dominictarr/event-stream/issues/116",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "benefit-3-dealing-with-concurrent-changes",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#benefit-3-dealing-with-concurrent-changes",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Benefit 3: Dealing with concurrent changes")
  ],
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In bigger software projects, there are often multiple programmers working on the source code at the same time. Each of them have their own copy of the source code, and when one programmer is done implementing a new feature, she needs to share her version of the source code with the other programmers, so their copy of the source code contains the new feature as well. But at the same time, these other programmers will be half way through implementing their own features, which might clash with the changes made by the first programmer. This is a non-trivial problem to solve, but version control systems gives us good tools to deal with it.",
  -1
  /* HOISTED */
);
const _hoisted_22 = { class: "custom-container tip" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_24 = {
  href: "https://royal.pingdom.com/linux-kernel-development-numbers/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "benefit-4-backups",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#benefit-4-backups",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Benefit 4: Backups")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("By using a "),
    /* @__PURE__ */ createBaseVNode("em", null, "distributed"),
    /* @__PURE__ */ createTextVNode(" version control system (such as Git) you automatically get backups of your code. Each programmer that works on the project has a copy of the source code (and the previous versions of it) on her own computer. So if 10 programmers work on the same project, you have (at least) 10 copies of the source code on 10 different computers, so if one programmer's computer crashes and the source code on that computer is lost, there are still 9 copies left on the other computers. Your source code will never be truly lost again.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "how-does-git-work",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#how-does-git-work",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" How does Git work?")
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = {
  href: "https://en.wikipedia.org/wiki/Comparison_of_version-control_software#General_information",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In the text below the term "),
    /* @__PURE__ */ createBaseVNode("em", null, "project folder"),
    /* @__PURE__ */ createTextVNode(" refers to a folder on your computer in which you put all the files that belongs to a project you are working on. If the project for example is about creating a new website, then the project folder could be a folder named "),
    /* @__PURE__ */ createBaseVNode("code", null, "the-project"),
    /* @__PURE__ */ createTextVNode(", and in this folder you put all the source files (in this case all the HTML files, CSS files, images, etc.) the website consists of.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = { class: "custom-container tip" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Installing Git",
  -1
  /* HOISTED */
);
const _hoisted_32 = {
  href: "https://git-scm.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createStaticVNode('<h3 id="repositories" tabindex="-1"><a class="header-anchor" href="#repositories" aria-hidden="true">#</a> Repositories</h3><p>Version control systems make use of <em>repositories</em>. When you have a project you want to version control, you tell your version control system to create a new repository for you for that project. The repository is responsible for remembering all the different versions you have of your source files. So a single computer can contain multiple repositories: one for each project you version control.</p><p>How a version control system internally represents a repository is not something we need to worry that much about, but it is good to know that Git uses a folder named <code>.git</code> in the project folder for this. The repository will contain all the different versions of the source files you want to remember. If you later delete the <code>.git</code> folder in your project folder, then you have deleted your entire repository for that project, and all the versions of your source files you have asked Git to remember for you will be gone. Be careful to not delete a <code>.git</code> folder by accident!</p><p>To create a new Git repository for your project, go to the project folder and run the command <code>git init</code>. This will create the <code>.git</code> folder in your project folder for you. So far we haven&#39;t asked Git to remember any new version of the project for us, so the repository will at the moment be an empty repository (although the <code>.git</code> folder will already contain some files Git uses internally).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Since the name of the <code>.git</code> folder starts with a dot, most file explorers don&#39;t display this folder unless you change a setting in your file explorer telling it to display files and folders that starts with a dot. How you change that settings depends on which file explorer you use (Google it...).</p></div>', 5);
const _hoisted_38 = { class: "custom-container tip" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-powershell line-numbers-mode",
    "data-ext": "powershell"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-powershell" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Which directory are we currently standing in?"),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, [
          /* @__PURE__ */ createTextVNode('"'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "$pwd"),
          /* @__PURE__ */ createTextVNode('"')
        ]),
        /* @__PURE__ */ createTextVNode("\n    C:\\Users\\peter\\the-project\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What does that directory contain?"),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "dir"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("Name "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("Force\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# (no output = nothing)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Create a new repository for the directory we are standing in."),
        /* @__PURE__ */ createTextVNode("\n$ git init\n    Initialized empty Git repository in C:"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "/"),
        /* @__PURE__ */ createTextVNode("Users/peter/the-project/"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("git/\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What does the directory contain now?"),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "dir"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("Name "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("Force\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("git\n")
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
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-bash line-numbers-mode",
    "data-ext": "sh"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-bash" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# TODO"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createStaticVNode('<h3 id="commits-versions" tabindex="-1"><a class="header-anchor" href="#commits-versions" aria-hidden="true">#</a> Commits (versions)</h3><p>To tell the repository to remember a specific version of your project, you send the repository a <em>commit</em>. A commit describes the changes made to project since the previous commit. This way, each commit can be seen as a snapshot of what the project look like at the moment the commit was created. By using these commits Git is able to restore the source files so they contain precisely the same content as they did at a specific commit/version of your project.</p><p>A commit in Git primarily contains:</p><ul><li>A unique identifier for the commit (a hash value like the hexadecimal string <code>e4728bc8aa2...</code>)</li><li>The unique identifier of the previous commit</li><li>Which changes that has been made to the project (files created/edited/deleted) since the previous commit</li><li>A human readable message explaining the changes that has been made since the previous commit</li><li>The name of the developer who created the commit</li><li>The time at which the commit was created</li></ul><p>Before you tell Git to create a new commit for you, you must first tell Git which changes you want to put into the commit (you can change files without putting those changes into the next commit you create, which might seem a bit weird, but can be useful). If you have created a new file or made changes to an existing file, you need to run the command <code>git add THE_FILE_NAME.EXT</code> to tell Git that the changes you have made to the file named <code>THE_FILE_NAME.EXT</code> should be part of the next commit you create. Run <code>git add THE_FILE_NAME.EXT</code> one time for each file you have created/changed and want to be part of the next commit.</p><p>Then use the command <code>git commit -m &quot;A descriptive message...&quot;</code> to tell Git to create a new commit with the added files and with the human readable message <code>A descriptive message...</code> (that you of course should change to a message describing the changes you have made since the previous commit). Git will figure out the other information (your name, previous commit unique identifier, current time, etc.) on its own or simply ask you to enter it.</p><p>Some useful <code>git</code> commands:</p><ul><li><code>git add THE_FILE_NAME.EXT</code> will add the file <code>THE_FILE_NAME.EXT</code> to the next commit you create</li><li><code>git add THE_FOLDER_NAME/*</code> will add all the files in the folder named <code>THE_FOLDER_NAME</code> to the next commit you create</li><li><code>git add .</code> will add all changes you have made to any file in the entire project folder</li><li><code>git rm THE_FILE_NAME.EXT</code> will remove the file named <code>THE_FILE_NAME.EXT</code> in the next commit you create <br><strong>Note</strong>: When you use <code>git rm THE_FILE_NAME.EXT</code>, the previous versions of the file <code>THE_FILE_NAME.EXT</code> in earlier commits will still be remembered by your repository, but the project folder will no longer contain the file</li><li><code>git status</code> will show you which files you have added/removed/&quot;changed and not added&quot; to the next commit you will create</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>When using the various <code>git</code> commands, it will often tell you that you are working on a branch called <code>master</code> or <code>main</code>. We&#39;ll get back to what branches are in the next lecture, but for now, just accept/ignore the fact that you are working on the <code>master</code> or <code>main</code> branch.</p></div>', 9);
const _hoisted_51 = { class: "custom-container tip" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example (continuation of previous example)",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In the previous example we had just setup a new Git repository for an empty project folder. Now, let us create and change some files in our project folder!",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-powershell line-numbers-mode",
    "data-ext": "powershell"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-powershell" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n\n    No commits yet\n\n    nothing to commit "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("create/"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "copy"),
        /* @__PURE__ */ createTextVNode(" files and use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git add"'),
        /* @__PURE__ */ createTextVNode(" to track"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Create file-1.txt containing some text."),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Content file 1"'),
        /* @__PURE__ */ createTextVNode(" > file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# (no output)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What does the directory now contain?"),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "dir"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("Name "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("Force\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("git\n    file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What does file-1.txt contain?"),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "cat"),
        /* @__PURE__ */ createTextVNode(" file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n    Content file 1\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n\n    No commits yet\n\n    Untracked files:\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git add <file>..."'),
        /* @__PURE__ */ createTextVNode(" to include in what will be committed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n            file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n    nothing added to commit but untracked files present "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git add"'),
        /* @__PURE__ */ createTextVNode(" to track"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Add file-1.txt in the next commit we will create."),
        /* @__PURE__ */ createTextVNode("\n$ git add file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# (no output)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n\n    No commits yet\n\n    Changes to be committed:\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git rm --cached <file>..."'),
        /* @__PURE__ */ createTextVNode(" to unstage"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n            new file:   file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Create next commit."),
        /* @__PURE__ */ createTextVNode("\n$ git commit "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("m "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"The first commit."'),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "[master (root-commit) 543ec8a]"),
        /* @__PURE__ */ createTextVNode(" The first commit"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("\n    1 file changed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" 0 insertions"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" 0 deletions"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    create mode 100644 file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n    nothing to commit"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" working tree clean\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Create file-2.txt containing some text."),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Content file 2"'),
        /* @__PURE__ */ createTextVNode(" > file-2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# (no output)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n    Untracked files:\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git add <file>..."'),
        /* @__PURE__ */ createTextVNode(" to include in what will be committed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n            file-2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n    nothing added to commit but untracked files present "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git add"'),
        /* @__PURE__ */ createTextVNode(" to track"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Add file-2.txt in the next commit we will create."),
        /* @__PURE__ */ createTextVNode("\n$ git add file-2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# (no output)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git reset HEAD <file>..."'),
        /* @__PURE__ */ createTextVNode(" to unstage"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n            new file:   file-2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Change the content in file-1.txt."),
        /* @__PURE__ */ createTextVNode("\n$ "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Updated content file 1"'),
        /* @__PURE__ */ createTextVNode(" > file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# (no output)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git reset HEAD <file>..."'),
        /* @__PURE__ */ createTextVNode(" to unstage"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n            new file:   file-2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n    Changes not staged "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "for"),
        /* @__PURE__ */ createTextVNode(" commit:\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git add <file>..."'),
        /* @__PURE__ */ createTextVNode(" to update what will be committed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git checkout -- <file>..."'),
        /* @__PURE__ */ createTextVNode(" to discard changes in working directory"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n            modified:   file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Add the changes we made to file-1.txt in the next commit we will create."),
        /* @__PURE__ */ createTextVNode("\n$ git add file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# (no output)"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("use "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"git reset HEAD <file>..."'),
        /* @__PURE__ */ createTextVNode(" to unstage"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n            modified:   file-1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n            new file:   file-2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Create next commit."),
        /* @__PURE__ */ createTextVNode("\n$ git commit "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("m "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"The second commit."'),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, "[master 25bdb4c]"),
        /* @__PURE__ */ createTextVNode(" The second commit"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("\n    2 files changed"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" 0 insertions"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" 0 deletions"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    create mode 100644 file-2"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("txt\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# What is the current status of our source files?"),
        /* @__PURE__ */ createTextVNode("\n$ git status\n    On branch master\n    nothing to commit"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" working tree clean\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
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
    class: "language-bash line-numbers-mode",
    "data-ext": "sh"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-bash" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# TODO..."),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Commit 4",
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-text line-numbers-mode",
    "data-ext": "text"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-text" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "Commit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4\n")
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "As long as we don't make use of branches, the repository will always consist of a sequence of commits like that (we will introduce branches in next lecture).",
  -1
  /* HOISTED */
);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("To view all the commits in the repository (on the branch you are working on), you can use the command "),
    /* @__PURE__ */ createBaseVNode("code", null, "git log"),
    /* @__PURE__ */ createTextVNode(" (it doesn't show how the files in each commit has been changed, but that info is stored in each commit too).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_60 = { class: "custom-container tip" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example (continuation of previous example)",
  -1
  /* HOISTED */
);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-powershell line-numbers-mode",
    "data-ext": "powershell"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-powershell" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# Show all commits."),
        /* @__PURE__ */ createTextVNode("\n$ git log\n    commit 25bdb4c8b4e1d00e9cb885ff8d3a9b85cdafec17 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("HEAD "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "-"),
        /* @__PURE__ */ createTextVNode("> master"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n    Author: Peter L-G <my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("email@site"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("com>\n    Date:   Wed Apr 24 11:24:53 2019 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode("0200\n\n        The second commit"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("\n\n    commit 543ec8a30c37a037d500af5db985e2175f808458\n    Author: Peter L-G <my"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("email@site"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("com>\n    Date:   Wed Apr 24 11:21:50 2019 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode("0200\n\n        The first commit"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-bash line-numbers-mode",
    "data-ext": "sh"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-bash" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "# TODO"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createStaticVNode('<h3 id="switching-versions" tabindex="-1"><a class="header-anchor" href="#switching-versions" aria-hidden="true">#</a> Switching versions</h3><p>To view a specific version of the project, you simply tell Git <em>Show me the files as they looked like in commit <code>XXX</code></em>, where <code>XXX</code> is the unique identifier for the commit. When you do this, Git will change the files and folders in the project folder so they look precisely the way they did in commit <code>XXX</code>. The command used for this is <code>git reset XXX</code>. It is easy as that to jump between different versions of your source code! However, you better first learn about the HEAD pointer in Git before you create new commits after you have run this command.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You can&#39;t use the command <code>git reset XXX</code> if you have made changes to the source files you haven&#39;t committed yet (because then those changes would be lost).</p></div><h3 id="the-head-pointer" tabindex="-1"><a class="header-anchor" href="#the-head-pointer" aria-hidden="true">#</a> The HEAD pointer</h3><p>In Git, each repository also contains a pointer called HEAD. It points to the branch you are currently working on, but since we avoid introducing branches in this lecture, you can for now see it as that the HEAD pointer points to the last commit you&#39;ve created/the commit you are currently working on. That&#39;s how Git knows which the &quot;previous commit&quot; should be when you create a new commit: it simply uses the commit the HEAD pointer points to as the previous commit, and then when you create a new commit it changes the HEAD pointer to point to the newly created commit.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you have created two commits, it would look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\nCommit 1      &lt;--      Commit 2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you then create a third commit, it will look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you use the command <code>git reset XXX</code>, Git will change the files in your project folder to look the way they did in commit <code>XXX</code>, but it will not change the HEAD pointer to point to commit <code>XXX</code>. If you use the command <code>git reset XXX</code> to change the files so they look the way they did in <code>Commit 2</code> above, and then make changes and create a new commit, then you would end up with this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                                                      HEAD\n                                                                        ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3      &lt;--      Commit 4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That is, Commit 3 will still be in the chain of commits, but Commit 4 is rather a continuation of Commit 2.</p></div><p>If you want to switch to an earlier commit and change the HEAD pointer to point to that earlier commit, you can use the command <code>git reset --hard XXX</code>.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you have the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And then use <code>git reset --hard XXX</code> to change the source files to what they looked like in Commit 2, you would end up with the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you now create a new commit, you would end up with the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                       Commit 4\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Using <code>git reset --hard XXX</code> creates a new branch (or rather: the first commit after this command creates a new branch). It is not recommended to create branches this way, because you can forget commits (<code>git log</code> only displays the chain of commits the HEAD pointer points to, so you need to remember the other commits not part of this chain yourself (<code>Commit 3</code> in the example above)). So don&#39;t create branches this way; Git has better support for working with branches through various commands which we will cover in next lecture. But this serve as a good example of how you should think of commits and the HEAD pointer.</p><h2 id="when-to-commit" tabindex="-1"><a class="header-anchor" href="#when-to-commit" aria-hidden="true">#</a> When to commit</h2><p>A good question is <em>How do I know when it is time to create a new commit?</em> Is it good practice to create a new commit each day? Or should you create commits more often than that? Or less? Or is it the size of the commit (how many lines of you code you have removed/added/modified since the previous commit) that determines when to create a new commit? Are changes including 200 lines of code a good size of a commit? Well, it turns out that the best practice has nothing to do with these properties.</p><p>A good commit should contain a single new feature you have added to the project, or a bug that you have fixed, or similar. This way, it makes more sense to browse through the log of all commits afterwards. If it takes you 1 hour or 10 days to implement the feature/fix the bug, or if it requires changes to 20 lines of code or 2000 lines of code doesn&#39;t matter, although it is good to avoid commits with too big changes. If the feature you should implement is quite big, try to break it down into more smaller features, e.g. instead of implementing the feature <em>Manage blogposts</em> on a website, break it down into these features:</p><ul><li>Create blog posts</li><li>Read blog posts</li><li>Update blog posts</li><li>Delete blog posts</li></ul><p>This way, you end up with 4 smaller commits, instead of one large commit.</p><p>The best way to make use of a version control system is to work in a very structured way. Always before you start to write/change code in the project, you must have a goal that you want to achieve (the feature to implement or the bug to fix), and when this goal has been achieved, it is time to create a new commit.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the project is about writing a book, then it could be suitable to create a new commit each time you&#39;re done writing a chapter in the book. If spelling mistakes later are discovered, or if you want to improve a chapter by rephrasing sentences or paragraphs, then it could be suitable to create a new commit after each correction/rephrasing.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the project is about creating a website, then it could be suitable to create a new commit each time you have implemented a new webpage on the website. If you later discover a bug or want to improve a webpage, you create a new commit when you have fixed the bug/improved that webpage.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the project is about completing some lab assignments, then it could be suitable to create a new commit each time you have completed one of the assignments and each time you have fixed a mistake in an assignment you thought you had previously completed but now have corrected.</p></div><h2 id="using-git-through-a-gui" tabindex="-1"><a class="header-anchor" href="#using-git-through-a-gui" aria-hidden="true">#</a> Using Git through a GUI</h2><p>There exist applications with graphical user interfaces you can use to manage your Git repositories. This includes many IDE:s you can use to write source code. By using such an application, you don&#39;t need to remember all the details about the Git commands (arguments and flags), so this can be an easier way for you to get started with Git. However, these applications use the Git commands under the hood for you, so it is still good have a basic understanding of how the different Git commands work, because your workflow when using Git (creating commits, etc.) is the same no matter if you use it through a graphical user interface or a command line interface.</p><h2 id="practising" tabindex="-1"><a class="header-anchor" href="#practising" aria-hidden="true">#</a> Practising</h2>', 21);
const _hoisted_85 = {
  href: "http://git-school.github.io/visualizing-git/#free",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git add",
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  'git commit -m "Message"',
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git reset --hard XXX",
  -1
  /* HOISTED */
);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_90 = {
  href: "https://git-scm.com/book/en/v2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Scott Chacon",
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Ben Straub",
  -1
  /* HOISTED */
);
const _hoisted_93 = {
  href: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_94 = {
  href: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("You can skip the parts about using a remote repository ("),
      /* @__PURE__ */ createBaseVNode("code", null, "git clone"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git pull"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git push"),
      /* @__PURE__ */ createTextVNode(", ...); that's something you'll learn in the third lecture")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_96 = {
  href: "https://xkcd.com/1597/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Git is a version control system you can use to remember previous versions of the source code (or whatever type of files you need to version control) in your projects. It was created by "),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Linus Torvalds"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" in 2005 when he couldn't find a good version control system he could use for the Linux kernel he was working on. Git quickly became a popular version control system, especially for open source projects thanks to GitHub hosting the source code online for free. "),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("Git is today (2019) one of the most commonly used version control systems."),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_4,
    createBaseVNode("div", _hoisted_9, [
      _hoisted_10,
      createBaseVNode("p", null, [
        createTextVNode("When "),
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("The Heartbleed Bug"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" was discovered in OpenSSL, they could quickly say:")
      ]),
      _hoisted_12
    ]),
    _hoisted_13,
    _hoisted_14,
    _hoisted_15,
    createBaseVNode("div", _hoisted_16, [
      _hoisted_17,
      createBaseVNode("p", null, [
        createTextVNode("When a new developer took over the npm package "),
        _hoisted_18,
        createTextVNode(" (a library in Node.js), he started to inject bad code into it, which was executed by all new applications (and some old ones that was updated) using this library. See "),
        createBaseVNode("a", _hoisted_19, [
          createTextVNode("issue #116 on the event-stream's GitHub repository"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". Thanks to using a version control system, it was quite easy to discover all changes made by that programmer, and his changes to the code could be reverted back.")
      ])
    ]),
    _hoisted_20,
    _hoisted_21,
    createBaseVNode("div", _hoisted_22, [
      _hoisted_23,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_24, [
          createTextVNode("1 316 developers were involved in the development of the Linux kernel version 3.2"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ])
    ]),
    _hoisted_25,
    _hoisted_26,
    _hoisted_27,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_28, [
        createTextVNode("There exists many different version control systems"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", but let us focus on Git alone. Many other version control systems work in a similiar way and often use the same terms, but each term might have a little bit different meaning.")
    ]),
    _hoisted_29,
    createBaseVNode("div", _hoisted_30, [
      _hoisted_31,
      createBaseVNode("p", null, [
        createTextVNode("Download and install Git from "),
        createBaseVNode("a", _hoisted_32, [
          createTextVNode("git-scm.com"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ])
    ]),
    _hoisted_33,
    createBaseVNode("div", _hoisted_38, [
      _hoisted_39,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
            default: withCtx(() => [
              _hoisted_40
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "Linux" }, {
            default: withCtx(() => [
              _hoisted_41
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_42,
    createBaseVNode("div", _hoisted_51, [
      _hoisted_52,
      _hoisted_53,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
            default: withCtx(() => [
              _hoisted_54
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "Linux" }, {
            default: withCtx(() => [
              _hoisted_55
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("p", null, [
      createTextVNode("For small projects with a single developer (as in the example above), the repository usually consists of a single chain of commits, as visualized in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below ("),
      _hoisted_56,
      createTextVNode(" is the latest commit):")
    ]),
    createVNode(_component_Figure, { caption: "Visualization of the commits in a repository with 4 commits." }, {
      default: withCtx(() => [
        _hoisted_57
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_58,
    _hoisted_59,
    createBaseVNode("div", _hoisted_60, [
      _hoisted_61,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
            default: withCtx(() => [
              _hoisted_62
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "Linux" }, {
            default: withCtx(() => [
              _hoisted_63
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_64,
    createBaseVNode("p", null, [
      createTextVNode("Play around with "),
      createBaseVNode("a", _hoisted_85, [
        createTextVNode("Visualizing Git"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to learn how commits work. With this tool, you never use "),
      _hoisted_86,
      createTextVNode("; just use "),
      _hoisted_87,
      createTextVNode(" directly to create a new commit, and imagine that the commit contains changed/new files. You can also try to use "),
      _hoisted_88,
      createTextVNode(".")
    ]),
    _hoisted_89,
    createBaseVNode("p", null, [
      createTextVNode("If you want to learn more about the basics in Git, read the following chapters from "),
      createBaseVNode("a", _hoisted_90, [
        createTextVNode("Pro Git"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" by "),
      _hoisted_91,
      createTextVNode(" and "),
      _hoisted_92,
      createTextVNode(" (available for free online in multiple different formats):")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_93, [
          createTextVNode("Chapter 1: Getting Started"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_94, [
          createTextVNode("Chapter 2: Git Basics"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_95
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you find it a bit hard to start using Git, "),
      createBaseVNode("a", _hoisted_96, [
        createTextVNode("you're not alone"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
