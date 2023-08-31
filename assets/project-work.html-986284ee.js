import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="project-work" tabindex="-1"><a class="header-anchor" href="#project-work" aria-hidden="true">#</a> Project Work</h1><p>This page contains instructions for the project work.</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>As project work you should (individually) create a website <strong>one</strong> user can login to and administrate. We recommend you to create a personal website you can login to and write information about yourself. Having such a website can be very beneficial for a programmer applying for a job. If you prefer you can create a website for a small company with a single login account that can be used to update what products the company have in store, or similar.</p><p>You have a lot of freedom when it comes to the design and functionality of the website, but the following three requirements exist:</p><ul><li>There should exist basic pages with trivial information, including: <ul><li>A home/start page</li><li>An about page</li><li>A contact page</li></ul></li><li>There should exist at least three different type of resources on the website (stored in a relational database)</li><li>Depending on what makes most sense, <em>only you</em> or <em>anyone</em> should be able to apply <abbr title="Create/Retrieve/Update/Delete">CRUD</abbr> operations on the resources through the website</li></ul><p>To be able to distinguish <em>only you</em> from <em>anyone</em>, you also need to have login-functionality for a single account (i.e. a hard-coded username &amp; password).</p><p>Use whichever type of resources you want. Some suggestions are:</p><ul><li>Blogposts (only you can create/update/delete entries, anyone can retrieve entries)</li><li>Software projects for a portfolio (only you can create/update/delete entries, anyone can retrieve entries)</li><li>Guestbook posts (only you can update/delete entries, anyone can retrieve/create entries)</li><li>FAQ entries (only you can update/delete entries, anyone can retrieve/create entries)</li></ul>', 9);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Express",
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "https://koajs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="custom-container danger"><p class="custom-container-title">Don&#39;t use client-side JavaScript!</p><p>Avoid using client-side JavaScript. If you insist on using client-side JavaScript, it is OK, but:</p><ul><li>Good client-side JavaScript code will not improve your grade (this course is not about learning client-side JavaScript)</li><li>Bad client-side JavaScript code will lower your grade (this course is about implementing good websites)</li><li>Your <strong>entire</strong> website must work for users who have JavaScript disabled in their web browser (use client-side JavaScript only to enhance the browsing experience for the users who have JavaScript enabled in their web browsers)</li></ul></div><p>In addition to implementing the website, you should also write a report describing the implementation of the website. The file <a href="files/project-report-template.docx">project-report-template.docx</a> contains a template with further instructions on this. Your report will be a living document throughout the course (meaning that you will write it as the course run and continuously improve it).</p>', 2);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p>To help you with your project work, we have divided it into smaller parts that should be completed in order. The rest of this page contains descriptions of these smaller parts. Before you start working on the first part, you are strongly recommended to read through all the parts, which will give you a good overview of the work that lies ahead.</p><p>Good luck!</p><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing required software</h2><p><strong>If you work on the computers in E2404, E2432 or E2433</strong>, all required software should already be installed for you, so no need to install anything on your own.</p><p><strong>If you work on a school computer in any other room</strong>, you&#39;ll most likely need to manually install the required software through the <em>Software Center</em> application.</p><p><strong>If you work on your own private computer</strong>, you&#39;ll need to download and install all required software yourself. In this course, we only use free software available for both Windows, Mac and Linux.</p><p>The required software is:</p>', 7);
const _hoisted_21 = {
  href: "https://nodejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<ol><li>Use the <abbr title="Long-Term Support">LTS</abbr> version</li><li>In the installation process, make sure the following features are installed (they are checked by default, so simply don&#39;t uncheck them!): <ul><li>Node.js runtime</li><li>npm package manager</li><li>Add to PATH</li></ul></li><li>To verify that Node.js has been successfully installed, run the command <code>node -v</code> in a shell (e.g. Windows PowerShell on Windows (you might need to restart your computer first)). If it has been installed successfully, you should see the version of Node.js that was installed, something like <code>v11.6.0</code></li></ol>', 1);
const _hoisted_23 = {
  href: "https://www.npmjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = {
  href: "https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("To verify that npm has been successfully installed, run the command "),
    /* @__PURE__ */ createBaseVNode("code", null, "npm -v"),
    /* @__PURE__ */ createTextVNode(" in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of npm that is installed, something like "),
    /* @__PURE__ */ createBaseVNode("code", null, "6.9.0")
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The following software tools are not required (use whichever tools you want), but recommended:",
  -1
  /* HOISTED */
);
const _hoisted_27 = {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "IDE with good support for writing, running and debugging Node.js and JavaScript code")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = {
  href: "https://sqlitebrowser.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = {
  href: "https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-1-specifying-the-functionality",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-1-specifying-the-functionality",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 1: Specifying the functionality")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "You don't have to use Git in this course, but you are strongly recommended to make it a habit to use it for all your projects (you will use it a lot as a professional programmer, and you will have very good use of it in other courses too, so the sooner you learn it, the better)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Your first task is to specify the functionality of the website (which different type of resources it consists of and what you/anyone can do with them). Your decisions should be described in the project report, so in this part of the project work, you will not do any programming, but only work on your report. A good way to describe the functionalities is by sketching what the GUI will look like in the end. Then the reader can easily see all the functionality just by looking at pictures. An example of that is shown in "),
    /* @__PURE__ */ createBaseVNode("a", { href: "files/project-report-template.docx" }, "project-report-template.docx"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Feel free to show your report to one of the teachers at the lab sessions to get some feedback on your work. Don't expect the teacher to read all of your report, but primarily to look at the figures in it, but that should be enough to give you valuable feedback.",
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-2-specifying-the-graphical-user-interface",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-2-specifying-the-graphical-user-interface",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 2: Specifying the graphical user interface")
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Designing a website with a user-friendly GUI is no simple task. Therefore, designers have created CSS frameworks that makes it easy for people who are not good at design to create GUIs that are user-friendly. These frameworks primarily consist of components one can use to implement the GUI (such as one component representing a form, another one representing a menu, a third one representing an article, etc.). Since you have to use a CSS framework in your project work, you are recommended to now select which CSS framework you are going to use, and then design your website using the available components in that framework.",
  -1
  /* HOISTED */
);
const _hoisted_41 = {
  href: "https://picturepan2.github.io/spectre/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_42 = {
  href: "https://picturepan2.github.io/spectre/layout/navbar.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = {
  href: "https://picturepan2.github.io/spectre/components/nav.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = {
  href: "https://picturepan2.github.io/spectre/components/pagination.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = {
  href: "https://picturepan2.github.io/spectre/components/empty.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_46 = {
  href: "https://picturepan2.github.io/spectre/components/modals.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "Note"),
      /* @__PURE__ */ createTextVNode(': You can make modals appear without using client-side JavaScript. When clicking on a "Show modal" button (a link), send back HTML code containing and showing the modal')
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_48 = {
  href: "https://picturepan2.github.io/spectre/components/tabs.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "We recommend you to use a simple layout. It is more important that the functionality on the website works than that it has a beautiful design. If you have time over at the end of the course you can try to make your website as beautiful as possible, but for now we recommend you to prioritize making it functional.",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container danger" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Remember..."),
    /* @__PURE__ */ createBaseVNode("p", null, "The user must be able to use your website even if the user disable client-side JS in her web browser, so don't use an HTML and CSS framework that also contains client-side JS code the framework is dependent on to function!")
  ],
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In the report, draw sketches (e.g. wire-frames) showing what you intend the GUI to look like. In the end, you don't have to implement the GUI as you specify it now in the report, but remember to update your report if you change it later. Implementing the GUI is next part of the Project Work.",
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Feel free to show these sketches to a teacher at a lab session to get some feedback.",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-3-starting-to-implement-the-web-application",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-3-starting-to-implement-the-web-application",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 3: Starting to implement the web application")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createStaticVNode('<hr><p>Implement the graphical user interface of the website in Node.js. Ideally, the website&#39;s recourses are stored in a database, but to get a gentler start, you can instead store the resources in a file (i.e. use &quot;dummy data&quot;) for now. To start, run the following commands in a shell/console/terminal (such as Windows PowerShell in Windows):</p><ol><li><code>mkdir my-website</code> - Creates a new folder named <code>my-website</code> (do not call the folder <code>my-website</code>; use a proper name)</li><li><code>cd my-website</code> - Changes the current working directory to <code>my-website</code></li><li><code>npm init --yes</code> - Creates the <code>package.json</code> file, which keep tracks of which npm packages you have installed</li><li><code>npm install express</code> - Installs the npm package <code>express</code></li><li><code>npm install express-handlebars</code> - Installs the npm package <code>express-handlebars</code></li></ol><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>When you version control a project, do not store the source code for the dependencies in your own repository. For Node.js applications, the <code>node_modules</code> folder should not be committed to your repository; it&#39;s enough to commit <code>package.json</code> and <code>package-lock.json</code> to your repository. These files contain a list of all your dependencies (and the specific versions of them), and others that clones your project can run the command <code>npm install</code> to install these dependencies in their own <code>node_modules</code> folder.</p></div>', 4);
const _hoisted_59 = { class: "custom-container warning" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Note",
  -1
  /* HOISTED */
);
const _hoisted_61 = {
  href: "https://expressjs.com/en/resources/template-engines.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Then create the following files with their corresponding content:",
  -1
  /* HOISTED */
);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode("exports"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("humans "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "name"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Alice"'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "name"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Bob"'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n\nexports"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("pets "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "0"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "humanId"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "1"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "name"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"Catty"'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
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
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" dummyData "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'./dummy-data'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" express "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'express'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" expressHandlebars "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'express-handlebars'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" app "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "express"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "engine"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"hbs"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" expressHandlebars"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "engine"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "defaultLayout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'main.hbs'"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" response")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" model "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "humans"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(" dummyData"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("humans\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n  response"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "render"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"show-all-humans.hbs"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" model"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "listen"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "8080"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-handlebars line-numbers-mode",
    "data-ext": "handlebars"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-handlebars" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("h2")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("All Humans"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("h2")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token handlebars language-handlebars" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "{{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token block keyword" }, "#if"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "humans"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "length"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "}}")
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("ul")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token handlebars language-handlebars" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "{{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token block keyword" }, "#each"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "humans"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "}}")
        ]),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("li")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token handlebars language-handlebars" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "{{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "}}")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("li")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token handlebars language-handlebars" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "{{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token block keyword" }, "/each"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "}}")
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("ul")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token handlebars language-handlebars" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "{{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "else"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "}}")
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("No humans exist."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token handlebars language-handlebars" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "{{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token block keyword" }, "/if"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "}}")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-handlebars line-numbers-mode",
    "data-ext": "handlebars"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-handlebars" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token doctype" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<!"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token doctype-tag" }, "DOCTYPE"),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token name" }, "html"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("html")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("head")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("meta")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "charset"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("UTF-8"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("title")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("Hello"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("title")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("head")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("body")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("h1")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("My Website"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("h1")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token handlebars language-handlebars" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "{{{"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token variable" }, "body"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token delimiter punctuation" }, "}}}")
        ]),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("body")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("html")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Then run the following command:",
  -1
  /* HOISTED */
);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode(
  "ol",
  { start: "6" },
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "node app.js"),
      /* @__PURE__ */ createTextVNode(" - Execute the code in the file "),
      /* @__PURE__ */ createBaseVNode("code", null, "app.js"),
      /* @__PURE__ */ createTextVNode(" using Node.js.")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_69 = {
  href: "http://localhost:8080/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_70 = /* @__PURE__ */ createStaticVNode('<p>Continue by changing and adding code so it instead looks like your own personal website, as you specified in your report. Here is a suggestion on in which order to implement the features:</p><ol><li>Add references to your CSS framework in the layout file <ul><li>For many CSS frameworks, you can just add a <code>&lt;link&gt;</code> element to the CSS file containing the framework&#39;s code on a Content Delivery Network (CDN)</li><li>Many CSS frameworks are distributed as npm packages. For these, you can download the source code for the framework using the <code>npm install ***</code> command, and then add a <code>&lt;link&gt;</code> element to the CSS file in the <code>node_modules</code> folder</li></ul></li><li>Implement most of the layout of your website by changing the code in <code>views/layouts/main.hbs</code></li><li>Create new views (new <code>.hbs</code> files in the <code>views</code> folder) representing your basic pages (about page, contact page, etc.). Then change your JavaScript code so web browsers can request these pages</li></ol><div class="custom-container warning"><p class="custom-container-title">Remember!</p><p>Each time you change your JavaScript code, you need to restart the application for the changes to take effect. In most shells, you can stop the application from running by pressing <code>[CTRL]</code> + <code>[C]</code> twice, and then to start it again, simply run the command <code>node app.js</code> again. In most shells, you can press the up arrow on the keyboard to get the previously executed command.</p></div><ol start="4"><li>Change your dummy data to represent your own resources instead. Your dummy data will later be replaced with a relational database, so try to structure the resources the same way as you would structure them in a relational database (this will make the transition to a relational database easier).</li><li>Add new views representing pages with CRUD operations for your resources. Then change your JavaScript code so web browsers can request these pages.</li></ol><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You will use forms in your views (for create, update and delete operations), but handling the submission of these forms will be dealt with later. Implementing the login functionality is also something you will do later. For now, just having these forms is enough; nothing should happen when they are submitted.</p></div><p>When you are done, it should be possible for a user to visit all the pages on your website, including the ones only the logged in user should be able to access (will be fixed later). Update your report with a description of your implementation so far.</p><p>Feel free to show your work so far to a teacher at a lab session to get some feedback on it.</p><h2 id="part-4-using-a-relational-database" tabindex="-1"><a class="header-anchor" href="#part-4-using-a-relational-database" aria-hidden="true">#</a> Part 4: Using a relational database</h2><p>Before you start working on this part, you are recommended to:</p>', 9);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Storing data in variables works, but it is usually a bad solution for several reasons:",
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "When the web application stops running, the data will be lost"),
    /* @__PURE__ */ createBaseVNode("li", null, "Computers' main memory (where variables are stored) is quite limited, so storing a big amount of data here is not appropriate"),
    /* @__PURE__ */ createBaseVNode("li", null, "It makes it hard to scale the web application (having it running on multiple servers at the same time), which is needed when your website becomes really popular and have a lot of visitors (will happen sooner or later, right? 😉)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Having the database running on a separate server from the web application (instead of on the same server) has a couple of advantages:",
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Web applications and databases have different hardware needs. Databases read/write a lot from/to secondary storage, so they need to do this fast to operate efficiently. But good/fast secondary storage (i.e. SDDs) is expensive. Web applications on the other hand process a lot of data (incoming HTTP requests), and instead need fast (expensive) CPUs, and possibly much primary storage to utilize caching. By using two different servers, you can better match the software with its hardware needs"),
    /* @__PURE__ */ createBaseVNode("li", null, 'If the web application and the database run on the same server, the maximum number of HTTP requests the web application can handle will be much lower, since the web application only have access to the hardware "half of the time" (the hardware is shared with the database)')
  ],
  -1
  /* HOISTED */
);
const _hoisted_84 = {
  href: "https://stackify.com/premature-optimization-evil/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_85 = /* @__PURE__ */ createStaticVNode('<p>Start by installing an npm package through which you can use SQLite (you don&#39;t need to install SQLite separately, just installing the npm package will be enough). You can use the package <code>sqlite3</code> for this. Then delete <code>dummy-data.js</code>, and create, store and retrieve your data from an SQLite database instead (putting this code in a file called <code>database.js</code> (or similar) makes sense). <strong>Make sure your tables use proper primary keys, foreign key constraints, unique constraints, etc.</strong></p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Do not send <code>CREATE TABLE xxx (...)</code> queries to the database, because the second time your web application starts, the tables will already exist, and you will get an error. Use <code>CREATE TABLE IF NOT EXISTS xxx (...)</code> instead. And if you screw up, you can always start over by deleting the database file.</p></div><p>You can use <em>DB Browser for SQLite</em> to view your database and manually insert some resources.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The database is not part of the source code for a web application and should therefor not be committed to a version control repository. When someone else clones your project and start your web application, the database should automatically be created if it does not exist.</p></div><p>When you are done, your web application should work precisely the same way as when you had completed Part 3 but the resources should now be stored in the database instead of variables. Then update your report with a description of your implementation so far, and if you want feedback on your report and your code, show them to a teacher at one of the lab sessions.</p><h2 id="part-5-handling-forms" tabindex="-1"><a class="header-anchor" href="#part-5-handling-forms" aria-hidden="true">#</a> Part 5: Handling forms</h2>', 6);
const _hoisted_91 = { class: "custom-container danger" };
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Deadline",
  -1
  /* HOISTED */
);
const _hoisted_93 = {
  href: "https://ju.instructure.com/courses/6738/assignments/35306",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_94 = /* @__PURE__ */ createStaticVNode("<p>When a user submits an HTML form (<code>&lt;form&gt;</code>), the web browser will send a new HTTP request to the server. If the GET method is used (<code>&lt;form method=&quot;get&quot;&gt;</code>), the data entered in the form will be added to the query string in the URI (the part after the <code>?</code> in the URI). In an express callback function receiving the request, that data can be accessed using the <code>query</code> property, i.e. <code>request.query</code>. This will be an object whose keys corresponds to the value given to the <code>name</code> attribute in the <code>&lt;input&gt;</code> fields in the form and the values will be the text the user entered in those <code>&lt;input&gt;</code> fields. It works similar for the other input elements you can use in forms (dropdown lists, checkboxes, radio buttons, etc.).</p>", 1);
const _hoisted_95 = { class: "custom-container tip" };
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-html line-numbers-mode",
    "data-ext": "html"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("form")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "method"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("get"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "action"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("/search"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n  City: "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("city"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("br")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("submit"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("form")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" express "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'express'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" app "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "express"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// GET /search?city=WHATEVER_THE_USER_ENTERED"),
        /* @__PURE__ */ createTextVNode("\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/search'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" response")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" city "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("query"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("city "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// WHATEVER_THE_USER_ENTERED"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// ..."),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "listen"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "8080"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_99 = /* @__PURE__ */ createStaticVNode('<p>If the POST method is used to submit the form (<code>&lt;form method=&quot;post&quot;&gt;</code>), the data in the form will be added to the body of the request, expressed in the data format <code>application/x-www-form-urlencoded</code> (the header <code>Content-Type: application/x-www-form-urlencoded</code> is added to the HTTP request). An Express app does by default not contain functionality to read this data, but the middleware <code>express.urlencoded()</code> can be used to add it. Once you have added it, you can access the data entered in the form using <code>request.body</code>.</p><div class="custom-container warning"><p class="custom-container-title">Updated instructions</p><p>Before it said you needed to add <code>bodyParser.urlencoded()</code>. These days it&#39;s part of the <code>express</code> package, so these days one can use <code>express.urlencoded()</code> instead. The instructions have been updated to reflect this.</p></div>', 2);
const _hoisted_101 = { class: "custom-container tip" };
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Example",
  -1
  /* HOISTED */
);
const _hoisted_103 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-html line-numbers-mode",
    "data-ext": "html"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("form")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "method"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("post"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "action"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("/search"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n  City: "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "name"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("city"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("br")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("input")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "type"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("submit"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("form")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_104 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" express "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'express'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" app "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "express"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "use"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("express"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "urlencoded"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "extended"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "false"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// POST /search"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Body: city=WHATEVER_THE_USER_ENTERED"),
        /* @__PURE__ */ createTextVNode("\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "post"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/search'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("req"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" res")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" city "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" req"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("body"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("city "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// WHATEVER_THE_USER_ENTERED"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// ..."),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "listen"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "8080"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_105 = /* @__PURE__ */ createStaticVNode('<p>Change your JavaScript code to handle submissions of forms (except the login and logout forms). When you are done, any user should be able to create/edit/delete resources through the forms. Then update your report with a description of your implementation so far.</p><div class="custom-container warning"><p class="custom-container-title">GET vs POST</p><p>When should you submit a form with the GET method, and when should you use the POST method? Remember that GET requests should only be used to retrieve resources, and they should not change anything on the server (no harm in sending the same request 10 times in a row by accident), while POST requests may change things on the server or have some other type of side effect, such as sending an email.</p></div><p>Show your work to a teacher at one of the lab sessions to get some feedback on it.</p><h2 id="part-6-handling-errors" tabindex="-1"><a class="header-anchor" href="#part-6-handling-errors" aria-hidden="true">#</a> Part 6: Handling errors</h2><p>When a user submits a form to create/edit a resource, you need to validate the data entered in the form, and only carry out the request if the entered data is valid. For example, the user might have forgot to enter data in a form field, or maybe the user has entered some invalid data (for example entered <code>-43</code> as the number of pages for a book resource). <strong>If the data is not valid, you should display the form to the user again (with the data the user entered), together with descriptive error messages explaining what was wrong.</strong></p><p>Your route parameters (such as <code>bookId</code> in <code>/books/:booksId</code>) needs to be validated too. Maybe the user visits your website and ends up at <code>/books/4</code>, bookmarks this page, and then you delete it from your database. If the user now goes to this page through her bookmark, she should not see an empty/crashed page, but a message saying that the book does not exist.</p><p>It is not only data that comes from your clients that can result in errors. External systems your web application depends on (such as the database) can fail as well. For example, if the database is full, you cannot insert a new resource into it. In these cases, there is no need to show a descriptive error message like <em>The database is full</em>, because the user cannot fix the problem anyway. Instead, it is better to show a general error message like <em>Server error, we are working on fixing it</em>, and then log the error details, so you then can debug and fix the error.</p><p>Deal with the various errors that can happen in your web application, and then update your report with a description of your implementation so far.</p><h2 id="part-7-adding-authentication-authorization" tabindex="-1"><a class="header-anchor" href="#part-7-adding-authentication-authorization" aria-hidden="true">#</a> Part 7: Adding authentication &amp; authorization</h2><p>Before you start working on this part, you are recommended to:</p>', 10);
const _hoisted_115 = /* @__PURE__ */ createStaticVNode('<hr><p>To distinguish <em>you</em> from <em>anyone</em> (which is needed for operations <em>only you</em> should be authorized to carry out), you need to be able to authenticate yourself (prove that you are you). This can be done by hard-coding a username and a password on the server only you know. When you later login, you send this username and password to the server, which compares them with the username and password that have been hard-coded, and if they match, the server can trust that the request comes from you, because you are the only one who should know the correct username and password. Simple as that!</p><p>However, HTTP is a stateless protocol. This means that the server does not need to remember HTTP requests it has previously received to carry out HTTP requests it will receive in the future. This makes it a bit complex to stay logged in, because the server does not remember that you have previously successfully logged in when you send it other requests after that.</p><p>For servers to remember information about clients, cookies were added to HTTP. A cookie is a key-value pair the server can send to the client in an HTTP response, and the client should then send this cookie back to the server in future HTTP requests it sends to the server. However, using a cookie like <code>isLoggedIn=true</code> is not a secure way to remember that a client has successfully logged in, because there is nothing preventing a hacker from manually creating an identical cookie on her own computer with the same information.</p><p>To securely remember information about clients, you can use sessions. Session are built on top of cookies, and consists of key-value pairs stored on the server. Each client gets its own session, and each session has its own unique and hard-to-guess id, known as the <em>session id</em>. The server sends the session id to the client in a cookie when the session for that client is created. The client then sends back the cookie with the session id to the server in its future HTTP requests, and the server can then lookup the information it has stored about that client in the session with the session id it receives in the cookie.</p><p>Use sessions (and cookies) to implement a secure login system for a single account. To use session in an express application, you can use the npm package <code>express-session</code>, and add it as a middleware function.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of how to use the <code>express-session</code> package in an Express application.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express-session&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Use sessions to count how many times each client has visited this page.</span>\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/the-page&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">.</span>session<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    request<span class="token punctuation">.</span>session<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span>\n  request<span class="token punctuation">.</span>session<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>', 7);
const _hoisted_122 = { class: "custom-container danger" };
const _hoisted_123 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Store sessions properly!",
  -1
  /* HOISTED */
);
const _hoisted_124 = {
  href: "https://github.com/expressjs/session#api",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_125 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "express-session",
  -1
  /* HOISTED */
);
const _hoisted_126 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-8-improving-security",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-8-improving-security",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 8: Improving security")
  ],
  -1
  /* HOISTED */
);
const _hoisted_128 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_129 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_130 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "sql-injections",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#sql-injections",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" SQL injections")
  ],
  -1
  /* HOISTED */
);
const _hoisted_131 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" express "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'express'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" sqlite3 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "require"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'sqlite3'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" app "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "express"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" db "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "new"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, [
          /* @__PURE__ */ createTextVNode("sqlite3"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
          /* @__PURE__ */ createTextVNode("Database")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'db.db'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Send back a book with a specific id."),
        /* @__PURE__ */ createTextVNode("\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/books/:id'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" response")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" id "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("params"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" query "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"SELECT * FROM books WHERE id = "'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "+"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '" LIMIT 1"'),
        /* @__PURE__ */ createTextVNode("\n  db"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("query"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("error"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" book")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("error"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Send back page showing an error message."),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "else"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Send back page showing the book."),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "listen"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "8080"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
const _hoisted_132 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Most of your users will go to URLs like "),
    /* @__PURE__ */ createBaseVNode("code", null, "/books/53"),
    /* @__PURE__ */ createTextVNode(", and the query sent to the database will be like "),
    /* @__PURE__ */ createBaseVNode("code", null, "SELECT * FROM books WHERE id = 53 LIMIT 1"),
    /* @__PURE__ */ createTextVNode(", as expected. But a hacker might try to visit the URL "),
    /* @__PURE__ */ createBaseVNode("code", null, "/books/1 OR title='hello'"),
    /* @__PURE__ */ createTextVNode(", and the query sent to the database will be "),
    /* @__PURE__ */ createBaseVNode("code", null, "SELECT * FROM books WHERE id = 1 OR title='hello' LIMIT 1"),
    /* @__PURE__ */ createTextVNode(". Although no harm has been done in this case, it shows how hackers can manipulate queries sent to the database, and potentially read (or delete, update, insert, etc.) information they should not be able to.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_133 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Send back a book with a specific id."),
        /* @__PURE__ */ createTextVNode("\napp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/books/:id'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("request"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" response")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  \n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" id "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" request"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("params"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("id\n  \n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Use ? as placeholder for values we retrieve from the clients."),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" query "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"SELECT * FROM books WHERE id = ? LIMIT 1"'),
        /* @__PURE__ */ createTextVNode("\n  \n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// The values we retrieved from the client (will be used instead of the placeholders)."),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" values "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "["),
        /* @__PURE__ */ createTextVNode("id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "]"),
        /* @__PURE__ */ createTextVNode("\n  \n  db"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "get"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("query"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(" values"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("error"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" book")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("error"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Send back page showing an error message."),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "else"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// Send back page showing the book."),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_134 = /* @__PURE__ */ createStaticVNode('<p>This way, the query with the placeholder is sent to the database as one unit, and the value for the placeholder is sent as another unit, so the data cannot alter the query sent to the database, and you are protected against SQL injections.</p><p>Make sure all your code is protected against SQL injections.</p><h3 id="hashing-passwords" tabindex="-1"><a class="header-anchor" href="#hashing-passwords" aria-hidden="true">#</a> Hashing passwords</h3><p>Passwords should never be stored in plain text. Humans often use the same password on different websites, and if a hacker comes across a user&#39;s password on one website, she can login as that user on the other websites that user is using. Quite bad!</p><p>Instead of storing passwords in plain text, one can hash passwords and store their hash values. These hash values cannot easily nor with 100% accuracy be reversed back to the original passwords again.</p><p>There exist hashing algorithms specifically designed to hash passwords (they are intentionally slow). Use one of them to securely store your account&#39;s password. You can for example use the npm package <code>bcrypt</code> to accomplish this.</p><div class="custom-container warning"><p class="custom-container-title">bcrypt uses Python</p><p>The npm package <code>bcrypt</code> might need a Python installation on your computer to work. If you can&#39;t get it to work, you can use <code>bcryptjs</code> instead, but that one is slower since it&#39;s implemented in pure JavaScript.</p></div><p>When you are done, you should have a hard-coded hash value of your password in your source code instead of a hard-coded password in plain text. To obtain the hash value of the password you want to use:</p>', 8);
const _hoisted_142 = {
  href: "https://www.npmjs.com/package/bcrypt",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_143 = /* @__PURE__ */ createStaticVNode("<li>Create a new temporary JS file</li><li>In that file, import the <code>bcrypt</code> package</li><li>Use a function from the <code>bcrypt</code> package (for example <code>hashSync()</code> (read the documentation for the npm package to see example of usage)) to compute the hash value of the password you want to use</li><li>Log the hash value</li><li>Use the <code>node</code> program to run the file and obtain the hash value</li><li>Store the hash value in your <code>app.js</code> file (instead of the admin password)</li><li>When you receive the login request from the user, use a function from <code>bcrypt</code> (for example <code>compareSync()</code> (read the documentation for the npm package to see example of usage)) to check if the received password is the correct one</li><li>Be sure to not store the correct password in plain text anywhere in your source code (you can for example delete the temporary JS file you created after you have obtained the hash value of your password)</li>", 8);
const _hoisted_151 = /* @__PURE__ */ createStaticVNode('<h3 id="cross-site-scripting" tabindex="-1"><a class="header-anchor" href="#cross-site-scripting" aria-hidden="true">#</a> Cross-Site Scripting</h3><p>The danger with SQL injections is that data coming from one user is injected and modifies the query sent to the database. Cross-Site Scripting (XSS) is something similar, but it modifies the HTML code sent to other users. For example, a hacker might write a new guestbook message and send it to your web application, and when other users read your guestbook, they receive the hacker&#39;s guestbook message. If the guestbook message contains HTML code, it will be sent to the users&#39; web browsers and displayed as part of the website. With just HTML code, a hacker cannot do that dangerous things, but the HTML code can in turn contain client-side JavaScript code which can do much more damage when it is executed in the users&#39; web browsers.</p><p>Make sure all data you receive from your users is escaped before it is sent to your users.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p> Most template engines automatically escape HTML code unless you use a special syntax. If you use Handlebars as your template engine, you can read more about it under [the guide at handlebarsjs.com](https://handlebarsjs.com/guide/#html-escaping). In short, if you use <code>{{...}}</code> instead of <code>{{{...}}}</code>, you have no XSS vulnerabilities. </p></div><h3 id="cross-site-request-forgery" tabindex="-1"><a class="header-anchor" href="#cross-site-request-forgery" aria-hidden="true">#</a> <s>Cross-Site Request Forgery</s></h3>', 5);
const _hoisted_156 = { class: "custom-container tip" };
const _hoisted_157 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Not this year!",
  -1
  /* HOISTED */
);
const _hoisted_158 = {
  href: "https://www.npmjs.com/package/csurf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_159 = {
  href: "https://github.com/veeti/simple-csrf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_160 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The instructions in this sub-chapter is left as they are for those who want to learn how to add protection against CSRF attacks.",
  -1
  /* HOISTED */
);
const _hoisted_161 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  'Cross-Site Request Forgery (CSRF) is a type of an attack where hackers successfully trick our users into sending HTTP request to our website which they did not intent to send. For example, if our website contains a guestbook and is vulnerable to CSRF-attacks, a hacker might trick a user to send 1000 "create new guestbook message" requests. Our website just sees the requests coming from the user, and not from the hacker, so we think the user is the bad guy spamming our guestbook, but she is just the tool.',
  -1
  /* HOISTED */
);
const _hoisted_162 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A spammed guestbook is no danger and can easily be fixed, but CSRF-attacks in general can be quite dangerous. Imagine you sign in on your bank's website, then you visit another website controlled by the hacker (the hacker does not need to own this other website; it is enough for the website to contain a XSS-vulnerability the hacker can exploit to inject bad client-side JavaScript code into it) and tricks your web browser to send HTTP requests to your bank's website. One request can for example be to transfer money from your account to the hackers account. The bank's website thinks the request intentionally is sent by you and carries it out. Quite bad!",
  -1
  /* HOISTED */
);
const _hoisted_163 = {
  href: "https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md#synchronizer-token-pattern",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_164 = /* @__PURE__ */ createStaticVNode('<p>The synchronizer token pattern takes advantage of the fact that if a user wants to send a request to our website, it must do so by submitting a <code>&lt;form&gt;</code> with <code>method=&quot;post&quot;</code> on our website. Remember, in HTML, it is only possible to send GET request and POST requests, and only POST requests should potentially result in changes on the website, so only POST requests are dangerous in CSRF-attacks (CSRF-attacks are not used by hackers to retrieve sensitive data on the server). So, when our website receives a POST request from a user, we need to check if it comes from the submission of a form on our website, because it is only in that case the request has been intentionally sent by the user.</p><p>HTML/HTTP does not come with built-in support to check that, but the synchronizer token pattern describes a way for us to do it manually. It basically works like this:</p><ol><li>When a user sends a GET requests for the form, we generate a unique token (a long random string), remember this token (in the session, in a cookie, or whatever) and add it as a hidden input field to the form, e.g. <code>&lt;input type=&quot;hidden&quot; name=&quot;token&quot; value=&quot;the-long-random-string&quot;&gt;</code>, so we also receives it back when the form is submitted</li><li>When we receive the submission of the form (i.e. the POST request), we check if the token in the form is the same token as we generated before. If they are, we can be sure the POST request has been intentionally sent by the user through the form on our website, and not through a CSRF-attack</li></ol><p>Use the npm package <code>csurf</code> to protect your website from CSRF-attacks.</p><h2 id="part-9-optional-tasks" tabindex="-1"><a class="header-anchor" href="#part-9-optional-tasks" aria-hidden="true">#</a> Part 9: Optional tasks</h2>', 5);
const _hoisted_169 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "search-or-pagination-required-for-grade-4",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#search-or-pagination-required-for-grade-4",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Search or Pagination (required for grade 4)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_170 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Implement search or pagination for at least one of your resource types.",
  -1
  /* HOISTED */
);
const _hoisted_171 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "search",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#search",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Search")
  ],
  -1
  /* HOISTED */
);
const _hoisted_172 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Add search functionality for at least one of your resource types. The user should be able to enter some search criteria in a form, and then the resources of that type that matches the search criteria should be shown. Some tips:",
  -1
  /* HOISTED */
);
const _hoisted_173 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Searching is about retrieving resources, so the method in the form should be...?",
  -1
  /* HOISTED */
);
const _hoisted_174 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "WHERE",
  -1
  /* HOISTED */
);
const _hoisted_175 = {
  href: "https://www.sqlitetutorial.net/sqlite-like/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_176 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You have a lot of freedom when it comes to this task, but avoid using too simply solutions, such as just searching for one field in the database. Maybe the user also can specify a date range or similar?",
  -1
  /* HOISTED */
);
const _hoisted_177 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "pagination",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#pagination",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Pagination")
  ],
  -1
  /* HOISTED */
);
const _hoisted_178 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Add pagination to at least one of your resource types, so not all of them are listed on the same page but spread out across multiple pages. Some tip:",
  -1
  /* HOISTED */
);
const _hoisted_179 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Start by selecting how many resources that should be shown on each page",
  -1
  /* HOISTED */
);
const _hoisted_180 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("You can use a query string parameter to keep track of the page number, e.g. "),
    /* @__PURE__ */ createBaseVNode("code", null, "/movies?page=3")
  ],
  -1
  /* HOISTED */
);
const _hoisted_181 = {
  href: "https://www.sqlitetutorial.net/sqlite-count-function/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_182 = {
  href: "https://www.sqlitetutorial.net/sqlite-limit/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_183 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "1 resource per page does not count as pagination.",
  -1
  /* HOISTED */
);
const _hoisted_184 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "uploading-files-required-for-grade-5",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#uploading-files-required-for-grade-5",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Uploading files (required for grade 5)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_185 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Make it possible to upload a file to at least one of your resource types. This could for example be a screenshot of a software application you have in your portfolio. How to do this is something you need to learn on your own (grade 5...).",
  -1
  /* HOISTED */
);
const _hoisted_186 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Note that files should not be stored in a database (but on the file system), and does not count as one of the three type of resources you should have on your website.",
  -1
  /* HOISTED */
);
const _hoisted_187 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You have a lot of freedom when it comes to this task, but try to at least properly handle errors.",
  -1
  /* HOISTED */
);
const _hoisted_188 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-10-deploying",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-10-deploying",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 10: Deploying")
  ],
  -1
  /* HOISTED */
);
const _hoisted_189 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_190 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_191 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Deploy your web application on a server. Use whichever you want, but it needs to be publicly accessible for other computers on the Internet. It is fine to do it as shown in the video above (using a domain name and HTTPS is not required, but please remember that all websites should use HTTPS).",
  -1
  /* HOISTED */
);
const _hoisted_192 = { class: "custom-container tip" };
const _hoisted_193 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Heroku",
  -1
  /* HOISTED */
);
const _hoisted_194 = {
  href: "https://blog.heroku.com/github-student-developer-program",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_195 = {
  href: "https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_196 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Part 11: Demonstration",
  -1
  /* HOISTED */
);
const _hoisted_197 = {
  href: "https://ju.instructure.com/courses/6738/assignments/35581",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_198 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Part 12: Submitting your work",
  -1
  /* HOISTED */
);
const _hoisted_199 = /* @__PURE__ */ createStaticVNode('<h2 id="part-11-demonstration" tabindex="-1"><a class="header-anchor" href="#part-11-demonstration" aria-hidden="true">#</a> Part 11: Demonstration</h2><p>Demonstrate how your application works to the rest of your class in smaller groups. The reason for the demonstration is two-folded:</p><ul><li>You get some practice in presenting your work, which is a very important skill in your future professional career</li><li>You get to see other ways to implement similar functionality (hopefully not all websites will look the same)</li></ul><p>At the demonstration you will simply show how users (you as the admin, and the rest of the world as visitors) can use the website. You should not show any code nor explain any implementation details; just demonstrate the website through a web browser. Show that you have CRUD operations for all of your resources, that you have validation, that you display descriptive error messages when something goes wrong, etc.</p><p>To be allowed to demonstrate your website, you need to have implemented at least:</p><ul><li>A functional login system</li><li>All 4 CRUD operations for at least 2 type of resources with appropriate validation and authorization checks</li></ul><p>You may use at most 10 minutes for your demonstration. If you need more than this to show all features, then skip some of them. If your demonstration takes just 2 minutes, that could be OK as well. Don&#39;t start talking about irrelevant things just to make the demonstration last longer.</p><p>Preferably bring your own laptop to the demonstration, and demonstrate your website using that one. If you can&#39;t do that, ask if you can borrow a laptop from a friend. If that&#39;s not possible neither, you can use the teacher&#39;s laptop for the demonstration, but then you have to have completed <code>Part 10: Deploying</code> first.</p>', 8);
const _hoisted_207 = {
  href: "https://ju.instructure.com/courses/6738/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_208 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Your demonstration will not be graded; consider it as (mandatory) practice (you must do it to pass the project work).",
  -1
  /* HOISTED */
);
const _hoisted_209 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-12-submitting-your-work",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-12-submitting-your-work",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 12: Submitting your work")
  ],
  -1
  /* HOISTED */
);
const _hoisted_210 = {
  href: "https://ju.instructure.com/courses/6738/assignments/35580",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_211 = /* @__PURE__ */ createStaticVNode("<ul><li>Your project report as a PDF file</li><li>The source code of your website as a ZIP file: <ul><li>Zip the root folder of your website (the project folder), and not a collection of individual files/sub-folder</li><li>Do not include the <code>node_modules</code> folder (e.g. delete it before you create the ZIP file)</li></ul></li></ul><p>Do not put the PDF file in the ZIP file; upload them as two separate files in one and the same submission.</p><p>When that ZIP file has been unzipped on the teacher&#39;s own computer, it is very important that the website can be started by running the following commands:</p><ol><li><code>npm install</code></li><li><code>npm run start</code> or <code>node app.js</code> (or whichever the name of your main file is)</li></ol><p>If this does not work and your report doesn&#39;t contain any instructions on how to start your web application you need to submit your work again at the next examination occasion, so double check that this works yourself before you submit your work.</p><p>Write also the following information as a comment in the submission:</p>", 6);
const _hoisted_217 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "The URI to the login page",
  -1
  /* HOISTED */
);
const _hoisted_218 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "The correct username for logging in",
  -1
  /* HOISTED */
);
const _hoisted_219 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "The correct password for logging in",
  -1
  /* HOISTED */
);
const _hoisted_220 = {
  href: "https://ju.instructure.com/courses/6738/assignments/35581",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_221 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The examiner will login to your website and test all the CRUD operations.",
  -1
  /* HOISTED */
);
const _hoisted_222 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The examiner will only look at your latest submission, so make sure that your latest submission includes both files (report + source code) and the comment with the requested information.",
  -1
  /* HOISTED */
);
const _hoisted_223 = {
  href: "https://www.ouriginal.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_224 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If not all requested files and information is submitted, we will not be able to grade your work.",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Implement the website using technologies taught in this course. It is OK to use similar technologies and not the specific ones taught in the course. For example, instead of using the web framework "),
      _hoisted_10,
      createTextVNode(" (taught in this course), you can use the web framework "),
      createBaseVNode("a", _hoisted_11, [
        createTextVNode("Koa"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". It's probably a good idea to email the course coordinator and ask if the technologies you want to use is OK or not if you don't stick to using the ones taught in the course.")
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      createTextVNode("The page "),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-grading-guidelines/" }, {
        default: withCtx(() => [
          createTextVNode("Project Grading Guidelines")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" contains guidelines for how your work will be graded. You are strongly recommended to read through it every now and then.")
    ]),
    _hoisted_14,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_21, [
          createTextVNode("Node.js"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_22
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_23, [
          createTextVNode("npm"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("This one is installed along with Node.js, so you don't need to install it separately. However, you might want to update it to the latest version (not required in this course): "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_24, [
                  createTextVNode("Update npm instructions"),
                  createVNode(_component_ExternalLinkIcon)
                ])
              ])
            ])
          ]),
          _hoisted_25
        ])
      ])
    ]),
    _hoisted_26,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_27, [
          createTextVNode("Visual Studio Code"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_28
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_29, [
          createTextVNode("DB Browser for SQLite"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Database management tool you can use to visualize/debug the database. An alternative is to install and use "),
            createBaseVNode("a", _hoisted_30, [
              createTextVNode("the SQLite extension for Visual Studio Code"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ]),
    _hoisted_31,
    _hoisted_32,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("View the following videos: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/uml-use-case-diagrams/" }, {
              default: withCtx(() => [
                createTextVNode("UML Use-Case Diagram")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/internet-basics/" }, {
              default: withCtx(() => [
                createTextVNode("Internet Basics")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/http-and-web-applications/" }, {
              default: withCtx(() => [
                createTextVNode("HTTP and Web Applications")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/character-encodings/" }, {
              default: withCtx(() => [
                createTextVNode("Character Encodings")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/html/" }, {
              default: withCtx(() => [
                createTextVNode("HTML")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Take "),
        createVNode(_component_RouterLink, { to: "/courses/git/" }, {
          default: withCtx(() => [
            createTextVNode("the mini-course in Git")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_33
      ])
    ]),
    _hoisted_34,
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
    _hoisted_38,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Complete the following optional exercises: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Not NMD students: "),
            createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/exercises/#the-css-exercise" }, {
              default: withCtx(() => [
                createTextVNode("The CSS Exercise")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createTextVNode("Not DMP students: "),
            createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/exercises/#the-db-exercise" }, {
              default: withCtx(() => [
                createTextVNode("The DB Exercise")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("View the following videos/lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Not NMD students: "),
            createVNode(_component_RouterLink, { to: "/lectures/garrit-css/" }, {
              default: withCtx(() => [
                createTextVNode("CSS")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createTextVNode("Not DMP students: "),
            createVNode(_component_RouterLink, { to: "/lectures/jasmine-database/" }, {
              default: withCtx(() => [
                createTextVNode("Database")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_39,
    _hoisted_40,
    createBaseVNode("p", null, [
      createTextVNode("Use whichever CSS framework you want, but we recommend you to use "),
      createBaseVNode("a", _hoisted_41, [
        createTextVNode("Spectre.css"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". It is a small and simple framework, which makes it easy to learn and use. It comes with components such as:")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_42, [
          createTextVNode("Navbar"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - A horizontal menu suitable to have at the top of the page as the main menu")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_43, [
          createTextVNode("Nav"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - A vertical menu suitable to have on one of the sides of the page as the main/sub menu")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_44, [
          createTextVNode("Pagination"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - A collection of links suitable to use when listing resources spread over multiple pages")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_45, [
          createTextVNode("Empty states"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - A component suitable to use on a page that should display a collection of resources but none exist yet")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_46, [
          createTextVNode("Modals"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - A dialog appearing in front of the page "),
        _hoisted_47
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_48, [
          createTextVNode("Tabs"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" - A collection of views the user easily can switch between")
      ])
    ]),
    _hoisted_49,
    _hoisted_50,
    _hoisted_51,
    _hoisted_52,
    _hoisted_53,
    _hoisted_54,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Complete the following optional exercises: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/exercises/#the-js-exercise" }, {
              default: withCtx(() => [
                createTextVNode("The JS Exercise")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("View the following videos: "),
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
            createVNode(_component_RouterLink, { to: "/lectures/javascript-basics/" }, {
              default: withCtx(() => [
                createTextVNode("JavaScript Basics")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/asynchronous-programming-in-js/" }, {
              default: withCtx(() => [
                createTextVNode("Asynchronous Programming in JavaScript")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/node-js/" }, {
              default: withCtx(() => [
                createTextVNode("Node.js")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/web-applications-in-node-js/" }, {
              default: withCtx(() => [
                createTextVNode("Web Applications in Node.js")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/npm/" }, {
              default: withCtx(() => [
                createTextVNode("npm")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/express-basics/" }, {
              default: withCtx(() => [
                createTextVNode("Express Basics")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/handlebars/" }, {
              default: withCtx(() => [
                createTextVNode("Handlebars")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/web-applications-in-express/" }, {
              default: withCtx(() => [
                createTextVNode("Web Applications in Express")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_55,
    createBaseVNode("div", _hoisted_59, [
      _hoisted_60,
      createBaseVNode("p", null, [
        createTextVNode("The instructions in this document is for the template syntax language Handlebars. If you prefer, feel free to use another template syntax language. You find a list of template engines you can use at "),
        createBaseVNode("a", _hoisted_61, [
          createTextVNode("https://github.com/expressjs/express/wiki"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ])
    ]),
    _hoisted_62,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "dummy-data.js" }, {
          default: withCtx(() => [
            _hoisted_63
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "app.js" }, {
          default: withCtx(() => [
            _hoisted_64
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "views/show-all-humans.hbs" }, {
          default: withCtx(() => [
            _hoisted_65
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "views/layouts/main.hbs" }, {
          default: withCtx(() => [
            _hoisted_66
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_67,
    _hoisted_68,
    createBaseVNode("p", null, [
      createTextVNode("and then visit "),
      createBaseVNode("a", _hoisted_69, [
        createTextVNode("http://localhost:8080/"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" in a web browser, and you should see a list of humans.")
    ]),
    _hoisted_70,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("View the following videos: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/using-sqlite-in-node-js/" }, {
              default: withCtx(() => [
                createTextVNode("Using SQLite in Node.js")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_79,
    _hoisted_80,
    _hoisted_81,
    createBaseVNode("p", null, [
      createTextVNode("Most web applications instead store data in a relational database, such as MySQL. Relational databases store the data in secondary storage (i.e. the hard drive), where it will persist even after the computer is shut down. Usually, the database runs on a server separate from the server the web application runs on, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Common web application architecture." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n	subgraph Client\n		webBrowser[Web Browser]\n	end\n	subgraph Web Server\n		webApplication[Web Application]\n	end\n	subgraph Database Server\n		db[Database]\n	end\n	webBrowser -- HTTP --> webApplication\n	webApplication -- SQL --> db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_82,
    _hoisted_83,
    createBaseVNode("p", null, [
      createTextVNode("However, setting up a database on a separate server is not straightforward and takes time, so in this course we will instead run the database on the same server as the web application, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Web application architecture with only one server." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n	subgraph Client\n		webBrowser[Web Browser]\n	end\n	subgraph Server\n		webApplication[Web Application]\n		db[Database]\n	end\n	webBrowser -- HTTP --> webApplication\n	webApplication -- SQL --> db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      createTextVNode("Furthermore, we will use SQLite as our database, and it will not run as a separate process, but part of the process executing our web application. This makes it very easy to use, but will be a bottleneck for scaling (but remember, "),
      createBaseVNode("a", _hoisted_84, [
        createTextVNode("premature optimization is the root of all evil"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(").")
    ]),
    _hoisted_85,
    createBaseVNode("div", _hoisted_91, [
      _hoisted_92,
      createBaseVNode("p", null, [
        createTextVNode("Just a reminder that you should not forget to "),
        createBaseVNode("a", _hoisted_93, [
          createTextVNode("submit your report for feedback on Canvas"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". The deadline might have already been (depending on how slow/fast you work), but if you follow the time plan, you should submit it around now.")
      ])
    ]),
    _hoisted_94,
    createBaseVNode("div", _hoisted_95, [
      _hoisted_96,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "views/search.hbs" }, {
            default: withCtx(() => [
              _hoisted_97
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "app.js" }, {
            default: withCtx(() => [
              _hoisted_98
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_99,
    createBaseVNode("div", _hoisted_101, [
      _hoisted_102,
      createVNode(_component_CodeGroup, null, {
        default: withCtx(() => [
          createVNode(_component_CodeGroupItem, { title: "views/search.hbs" }, {
            default: withCtx(() => [
              _hoisted_103
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "app.js" }, {
            default: withCtx(() => [
              _hoisted_104
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_105,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("View the following videos: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/cookies-and-sessions/" }, {
              default: withCtx(() => [
                createTextVNode("Cookies and Sessions")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/using-cookies-and-sessions-in-express/" }, {
              default: withCtx(() => [
                createTextVNode("Using cookies and Sessions in Express")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/designing-account-systems/" }, {
              default: withCtx(() => [
                createTextVNode("Designing Account Systems")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_115,
    createBaseVNode("div", _hoisted_122, [
      _hoisted_123,
      createBaseVNode("p", null, [
        createTextVNode("The example above stores the sessions in main memory, and it never removes old sessions. If such a solution would run on a real server, it would run out of memory quite soon. Instead, "),
        createBaseVNode("a", _hoisted_124, [
          createTextVNode("read the docs for "),
          _hoisted_125,
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" to learn how to store the sessions elsewhere.")
      ])
    ]),
    _hoisted_126,
    _hoisted_127,
    _hoisted_128,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("View the following videos: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/web-security/" }, {
              default: withCtx(() => [
                createTextVNode("Web Security")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_129,
    _hoisted_130,
    createBaseVNode("p", null, [
      createTextVNode("If you have code like the one shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below, you are vulnerable to SQL injections.")
    ]),
    createVNode(_component_Figure, { caption: "Example of code vulnerable to SQL injections." }, {
      default: withCtx(() => [
        _hoisted_131
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_132,
    createBaseVNode("p", null, [
      createTextVNode("Data received from users, no matter if it comes from the URL, the query string, cookies or the body of the request, cannot be trusted, so manually constructing SQL queries through string concatenation as done in the code above is very dangerous and must be avoided. Instead, you can use placeholders, as shown in the code in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Example of code not vulnerable to SQL injections." }, {
      default: withCtx(() => [
        _hoisted_133
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_134,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createTextVNode("Install "),
        createBaseVNode("a", _hoisted_142, [
          createTextVNode("bcrypt"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      _hoisted_143
    ]),
    _hoisted_151,
    createBaseVNode("div", _hoisted_156, [
      _hoisted_157,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_158, [
          createTextVNode("csurf"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", Express' official npm package to add protection against CSRF attacks, was deprecated Sep 13 2022. Therefore we skip this part of the project this year. Those who still want to practice on adding protection against CSRF attacks can still do that using that very package (it should still work equally good as before, but one shouldn't use deprecated packages (they won't be maintained in the future), so I can't recommend using it), or you can use the npm package "),
        createBaseVNode("a", _hoisted_159, [
          createTextVNode("simple-csrf"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" (that package is not an official package from Express, and the author of the package is no longer that active on GitHub, and very few uses that package, so at the moment I can't really recommend using it either).")
      ]),
      _hoisted_160
    ]),
    _hoisted_161,
    _hoisted_162,
    createBaseVNode("p", null, [
      createTextVNode("The funny thing about these CSRF-attacks is that the vulnerability is not on our website. It is when our users visit other websites they might become victim of CSRF-attacks that makes them unintentionally send HTTP requests to our website. Luckily, there is a way for us to protect us from these unintentionally sent request known as "),
      createBaseVNode("a", _hoisted_163, [
        createTextVNode("the Synchronizer Token Pattern"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_164,
    createBaseVNode("p", null, [
      createTextVNode("Here are some optional tasks you most likely must complete if you want to get a grade higher than 3. Remember that completing these extra tasks does not necessarily give you a higher grade; also read the "),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-grading-guidelines/" }, {
        default: withCtx(() => [
          createTextVNode("Project Grading Guidelines")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(".")
    ]),
    _hoisted_169,
    _hoisted_170,
    _hoisted_171,
    _hoisted_172,
    createBaseVNode("ul", null, [
      _hoisted_173,
      createBaseVNode("li", null, [
        createTextVNode("When sending the query to the database you need to have a "),
        _hoisted_174,
        createTextVNode(" clause that takes the user's search criteria into account. You probably have much use of the "),
        createBaseVNode("a", _hoisted_175, [
          createTextVNode("LIKE"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" operator in SQL")
      ])
    ]),
    _hoisted_176,
    _hoisted_177,
    _hoisted_178,
    createBaseVNode("ul", null, [
      _hoisted_179,
      _hoisted_180,
      createBaseVNode("li", null, [
        createTextVNode("To count how many resources you have in a table, use the SQL function "),
        createBaseVNode("a", _hoisted_181, [
          createTextVNode("COUNT()"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" (needed to compute how many pages you need)")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("When sending the query to the database to obtain the resources, use the "),
        createBaseVNode("a", _hoisted_182, [
          createTextVNode("LIMIT"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" clause to only get back the resources on the page the user is on")
      ])
    ]),
    _hoisted_183,
    _hoisted_184,
    _hoisted_185,
    _hoisted_186,
    _hoisted_187,
    _hoisted_188,
    _hoisted_189,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("View the following videos: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/amazon-lightsail/" }, {
              default: withCtx(() => [
                createTextVNode("Amazon Lightsail")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_190,
    _hoisted_191,
    createBaseVNode("div", _hoisted_192, [
      _hoisted_193,
      createBaseVNode("p", null, [
        createTextVNode("One student in the course suggested that one could just as well use Heuroko (should also be free with the "),
        createBaseVNode("a", _hoisted_194, [
          createTextVNode("GitHub Student Pack"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(") instead of Amazon Lightsail. Feel free to use whichever service you want to run your web app on the Internet. I'm guessing the page "),
        createBaseVNode("a", _hoisted_195, [
          createTextVNode("Getting Started on Heroku with Node.js"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" covers what you need to know to deploy your web application in this course to Heuroko.")
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you in "),
      _hoisted_196,
      createTextVNode(" demonstrates your website when it's online, the teacher will approve you on the Canvas assignment "),
      createBaseVNode("a", _hoisted_197, [
        createTextVNode("Project Server"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Otherwise you need to have it up and running on a server when you complete "),
      _hoisted_198,
      createTextVNode(".")
    ]),
    _hoisted_199,
    createBaseVNode("p", null, [
      createTextVNode("Join one of the "),
      createBaseVNode("a", _hoisted_207, [
        createTextVNode("Project Demonstration Groups"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" on Canvas to decide when you want to demonstrate. At most 6 students in each group, first come, first served.")
    ]),
    _hoisted_208,
    _hoisted_209,
    createBaseVNode("p", null, [
      createTextVNode("When you are done with your project, submit it for grading by submitting the assignment "),
      createBaseVNode("a", _hoisted_210, [
        createTextVNode("Project Final Submission"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" on Canvas. Upload:")
    ]),
    _hoisted_211,
    createBaseVNode("ul", null, [
      _hoisted_217,
      _hoisted_218,
      _hoisted_219,
      createBaseVNode("li", null, [
        createTextVNode("The IP address of the server your web application is running on (not required if you have already been approved on the assignment "),
        createBaseVNode("a", _hoisted_220, [
          createTextVNode("Project Server"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(")")
      ])
    ]),
    _hoisted_221,
    _hoisted_222,
    createBaseVNode("p", null, [
      createTextVNode("Your submitted work will be checked for plagiarism using "),
      createBaseVNode("a", _hoisted_223, [
        createTextVNode("Ouriginal"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_224
  ]);
}
const projectWork_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "project-work.html.vue"]]);
export {
  projectWork_html as default
};
