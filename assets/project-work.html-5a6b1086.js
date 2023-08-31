import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, a as createBaseVNode, b as createTextVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _imports_0 = "/course-material/assets/wireflow-example-99bf33ec.jpeg";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "project-work",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#project-work",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Project Work")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("On this page you find information about the examination test "),
    /* @__PURE__ */ createBaseVNode("code", null, "Project work"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "general-information",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#general-information",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" General information")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>As project work you should work in pairs to create a platform per the instructions on this page. The platform will consist of:</p><ul><li>A relational database that stores the resources created on the platform</li><li>A web application that exposes a REST API clients (i.e. other applications) can use to access the data on the platform (known as the <em>backend</em>)</li><li>A Single-Page Application with a graphical user interface (GUI) users can use to use to work with the data on the platform (known as the <em>frontend</em>)</li></ul><p>You have a lot of freedom when it comes to the design and functionality of the platform, but the following requirements exist:</p><ul><li>There should exist at least three different type of resources on the platform: <ul><li>One of the resource types must represent <em>accounts</em> users can create and login to</li><li>The other two resource types must somehow have a relation to accounts (direct or indirect)</li></ul></li><li>All three type of resources need to support all four Create, Retrieve, Update and Delete (CRUD) operations</li></ul><p>Use whichever type of resources you want in addition to accounts. Some general examples are:</p><ul><li><em>Threads</em> logged in users can create and that other logged in users can write <em>posts</em> in</li><li><em>Blogposts</em> logged in users can create and that other logged in users can write <em>comments</em> on</li><li><em>Todo lists</em> logged in users can create and then add <em>todo items</em> to</li></ul><p>There already exists many websites with the resource types mentioned above, and creating a smaller copy of one of them is OK, but usually not that fun. Instead, try to come up with a more specific problem you can solve. Some examples are:</p><ul><li>For a <em>Car Insurance Company</em>: <ul><li><em>Insurance Plans</em> (price, info about what&#39;s included in the plan, which admin account that is responsible for the plan, etc.)</li><li><em>Subscriptions</em> (which account that subscribed, which plan to subscribe to, car registration number, etc.)</li></ul></li><li>For a <em>Rescue Service</em>: <ul><li><em>Accidents</em> that has happened (place, time, type of accident, which admin account that is responsible for taking care of the accident, etc.)</li><li><em>Work Hours</em> reported by the personnel (which account, which accident, how many work hours, etc.)</li></ul></li><li>For a <em>Football Club</em>: <ul><li><em>Teams</em> in the club (boys/girls, age of players, who the coach is (responsible admin account), etc.)</li><li><em>Players</em> in each team (which account, which team, which number the player has, which position the player has, etc.)</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Finding a good problem to solve</p><p>Most good problems that are obvious to programmers have already been solved by other programmers. To find a good problem to solve as project in this course, you usually need to explore domains you are unfamiliar with. Ask your friends and family if they have a need of a platform of some kind. Someone working within elderly care might have a problem you can solve with a platform you can implement in this course? Without you asking someone who works within elderly care about what problems they have, you will never now. Or ask someone who likes to walk in the nature? Or maybe ask someone helping homeless people? Etc.</p></div><p>Implement the platform per the instructions on this page. In addition to implementing the platform, you should also write a report describing how the platform works and how it has been implemented. The file <a href="files/project-report-template.docx">project-report-template.docx</a> contains a template with further instructions on this. <strong>Your report will be a living document throughout the course, meaning that you will start writing on it in the beginning of the course, and then continuously improve and add content to it throughout the course.</strong></p><p>Since the project is carried out in pairs, you also need to some degree document who has done what in the project, so the examiner can verify that you both have contributed approximately equally much. If you use a version control system properly (i.e. you have good descriptive commit messages, each commit implements a single new feature on the platform, etc.), then you can simply use your commit history as documentation for who has done what. Otherwise you need to keep track of and present this in some other way. See the <em>Worklog</em> chapter in the report template for more information.</p>', 12);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>To help you, we have divided the project work into smaller parts that we recommend you to complete in order. The rest of this page contains descriptions of these smaller parts. Before you start working on the first part you are recommended to read through all the parts, which will give you a good overview of the work that lies ahead.</p><p>Good luck!</p><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing required software</h2><p><strong>If you work on the computers in E2205, E2432 or E2433</strong>, all required software should already be installed for you, so you should not need to install anything yourself.</p><p><strong>If you work on a school computer in any other room</strong>, you need to manually install the required software through the <em>Software Center</em> application (unless someone else has already done that on the specific computer you use).</p><p><strong>If you work on your own private computer</strong>, you need to download and install all required software yourself. In this course, we use only free software available for both Windows, Mac and Linux.</p><p>The required software is:</p>', 7);
const _hoisted_23 = {
  href: "https://docs.docker.com/get-docker/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container danger" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Docker Toolbox for Windows"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("There existed an old version of Docker for Windows called "),
      /* @__PURE__ */ createBaseVNode("em", null, "Docker Toolbox"),
      /* @__PURE__ */ createTextVNode(". It shouldn't be used anymore, so Windows users, be sure to use "),
      /* @__PURE__ */ createBaseVNode("em", null, "Docker Desktop for Windows"),
      /* @__PURE__ */ createTextVNode(".")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "About Docker Desktop for Windows"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("Docker Desktop for Windows can be used with either "),
      /* @__PURE__ */ createBaseVNode("em", null, "Windows Subsystems for Linux 2"),
      /* @__PURE__ */ createTextVNode(" (WSL2) or Hyper-v. If you have Windows 10 Home (as most users), you must use it with WSL2. For more details, see the installation instructions on Docker's website.")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_27 = {
  href: "https://nodejs.org/en/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_29 = {
  href: "https://www.npmjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_31 = {
  href: "https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = {
  href: "https://www.postman.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The following software tools are not required, but recommended:",
  -1
  /* HOISTED */
);
const _hoisted_35 = {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_37 = {
  href: "https://git-scm.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-1-project-group",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-1-project-group",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 1: Project group")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = {
  href: "https://ju.instructure.com/courses/6820/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_41 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "mailto:Peter.Larsson-Green@ju.se" },
  "Peter.Larsson-Green@ju.se",
  -1
  /* HOISTED */
);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "XXX",
  -1
  /* HOISTED */
);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-text line-numbers-mode",
    "data-ext": "text"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-text" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "Hi!\n\nI need you to match me with a student for the project work.\n\nCourse: Web Development - Advanced Concepts\nMy name: XXX\nMy JU email: XXX@student.ju.se\nThe grade I'm aiming for in this course: XXX\nI got the following grades in the following pre-requisite courses:\n - Introduction to Programming: XXX\n - Data Structures and Algorithms: XXX\n - Object-Oriented Programming: XXX\n - Network Programming: XXX\n - Web Development Fundamentals: XXX\n\nThanks!\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If you don't care about who you are matched with, you just need to enter your name and JU email in the template. The course coordinator will then try to match you with a student with similar ambitions and skills as you.",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-2-project-environment",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-2-project-environment",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 2: Project environment")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The very first thing you and your partner should agree on is how you should work together with your partner. Especially, you need to some extent document who is doing what in the project, and write that in your report, so the examiner can verify that all group members have contributed approximately equally much.",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Worklog",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "files/project-report-template.docx" },
  "project-report-template.docx",
  -1
  /* HOISTED */
);
const _hoisted_51 = {
  href: "https://github.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-3-platform-idea",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-3-platform-idea",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 3: Platform idea")
  ],
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createStaticVNode('<hr><p>Your first task is to come up with what the platform you will create should be about. Try to be creative and create a platform that solves a real-world problem ordinary people are having. Feel free to ask your family and friends for problems they have that can be solved using a platform. Examples of real-world problems could be:</p><ul><li>I often forget meetings</li><li>I often make bets with my friends, they remember the bets I lose so I have to pay them, but I often forget the bets I win, so they never pay me</li><li>I like to keep track of which celebrities I&#39;ve seen, but I rarely remember that</li><li>I often eat lunch alone, and that&#39;s so boring</li><li>I need to find someone I can play padel with</li></ul><p>The only important thing is that your platform can be implemented using at least 3 type of resources (accounts user can login + at least two more resource types connected to accounts + all four CRUD operations on all three resource types), but the more useful your platform can be, the more fun it will be to implement it. Optimally, you have such a great idea that you will want to launch your platform online after the course.</p><p>Your platform should be described in the project report, so in this part of the project, you will not do any programming, but only work on your report. You should be able to complete at least the <em>Introduction</em> chapter.</p><div class="custom-container tip"><p class="custom-container-title">Role-playing!</p><p>Usually, the <em>customer</em> has the problem, and she will come to you and explain the problem to you. Then you, as the <em>developer</em>, will come up with and suggest the solution (an app) to the customer. To make sure that both of you have the same understanding of what functionality the solution should contain, you should visualize the functionalities in a use-case diagram in your report.</p><p>In the project in this course, most of you will most likely not have a customer with a problem, but you have instead come up with a problem on your own that you try to solve. In that case you must do role-playing:</p><ol><li>Pretend you are the customer, and specify the problem you have</li><li>Change role and become the developer, and suggest a solution (the platform) to the problem</li><li>As the developer, draw a use-case diagram showing what functionality you think the application should contain</li><li>Switch role to the customer, and either accept the suggested functionality in the use-case diagram, or explain to the developer what functionality you are missing, and then as the developer add the missing functionality</li></ol></div><p>When you are done describing your platform idea in the report, discuss it with a teacher at one of the lab sessions or some friends to get some initial feedback on your idea, and then improve it.</p><h2 id="part-4-graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#part-4-graphical-user-interface" aria-hidden="true">#</a> Part 4: Graphical user interface</h2><p>Before implementing an application, it is crucial to first specify how the application should work. This is especially true when you are multiple developers working on the same application; without a specification to lean on, all in the group will have their own idea of how the application should work in the end.</p>', 9);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "Example of parts of a wireflow showing the graphical user interface of an application with accounts and blogposts."
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = /* @__PURE__ */ createStaticVNode('<p>By drawing a wireflow, all in the group can look at it and get the same understanding of how the application should work in the end. Further more, and more importantly, the customer can also look at the wireflow and then confirm that the application you intend to build really works the way the customer wants it to work, or suggest how it should change. In projects, it is all too common that the customer is not involved in the project from the start, and the developers then end up building an application that doesn&#39;t work the way the customer wants it to work, so they deliver an application no on wants to use. That&#39;s a big waste and must be avoided by including the customer in the development process!</p><p>Finish the Graphical User Interface chapter in the report. You can draw the wireflow using pen and paper, and then take a picture of it with a camera, and then add the picture to the report to show what you intend the graphical user interface to look like. If you want to draw the wireflow using a software tool instead, that is of course OK too.</p><div class="custom-container tip"><p class="custom-container-title">Use an HTML and CSS framework if you want!</p><p>Later, you will implement the GUI in HTML and CSS. If you want, you can write all the HTML and CSS code for the GUI yourself, but to avoid spending too much time on that, we recommend you to use an HTML and CSS framework that contains pre-made GUI components you can use. That way, you need to write much less code, and can instead spend more time on the other parts of the project.</p><p>If you want to use an HTML and CSS framework, we recommend you to choose which one you want to use now, so you can design your GUI based on the GUI components that are available in the HTML and CSS framework you use.</p><p>Since you later will implement the GUI in a Single-Page Application that requires client-side JavaScript to be enabled to work, there is no problem with using an HTML and CSS framework that also makes use of client-side JavaScript, so feel free to use that if you want.</p></div><p>When you are done, show the current version of your report to a teacher at a lab session to get some feedback on your work.</p><h2 id="part-5-frontend-gui" tabindex="-1"><a class="header-anchor" href="#part-5-frontend-gui" aria-hidden="true">#</a> Part 5: Frontend GUI</h2><p>Before you start working on this part, you are recommended to:</p>', 6);
const _hoisted_70 = /* @__PURE__ */ createStaticVNode("<hr><p>In the end, your solution will consist of multiple components:</p><ol><li>A database that stores the data on the platform</li><li>A backend application (the web application) that gives other applications access to the data in the database through a REST API</li><li>A frontend application (the Single-Page Application) users can use to work with the data through a GUI, and that access the data through the REST API</li></ol><p>What feels most natural is to implement the components in the order mentioned in the list above. After all:</p><ul><li>The backend is dependent on the database, and can&#39;t function without it</li><li>The frontend is dependent on the backend, and can&#39;t function without it</li></ul><p>However, that way of implementing the solution have often turned out to be bad, because very often when the solution has been implemented and the customer can test it, the customer realizes that she wants some things to work in another way, and changing that after it has been implemented is very expensive (time consuming).</p><p>So, instead, one usually starts by building a prototype of the frontend application (an application that will look the way it&#39;s supposed to look in the end, but whose functionality mostly don&#39;t work), which the customer then can test and evaluate, and if the customer wants to change something in it, that can easily be done without taking too much time, since it&#39;s only a simple prototype. Then, when the customer is happy with how the prototype works, the entire solution can be implemented.</p><p>A prototype application can be implemented using a software tool designed to quickly create a prototype application, but in this course you will instead implement the prototype application directly as the Single-Page Application that will be used in the end, but instead of storing the data in a database and access it through the backend&#39;s REST API, you will hardcode the data directly in the Single-Page Application.</p><p>When you&#39;re done with that, the customer can test the prototype, and if the customer is happy with how it works, you can continue by implementing the database and the backend, and then change the frontend to access the data through the REST API instead of hardcoding it in the frontend.</p><p>In this course, you will use a frontend framework to implement your Single-Page Application in. There exists many of them, such as:</p>", 10);
const _hoisted_80 = {
  href: "https://angular.io/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_81 = {
  href: "https://reactjs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_82 = {
  href: "https://vuejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_83 = {
  href: "https://svelte.dev/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Use whichever frontend framework you want, but in this course we will teach you and recommend you to use Svelte. Svelte is not used much in the industry yet, but in our opinion it's the easiest framework to learn and get started with. If you use another framework, we also can't guarantee that you can get help from a teacher at the lab sessions, since not all teachers know all of these frameworks, so only use another framework in you feel confident that you can learn and use it on your own.",
  -1
  /* HOISTED */
);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "getting-started",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#getting-started",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Getting started")
  ],
  -1
  /* HOISTED */
);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In this subchapter we provide some instructions helping you to get started with using Svelte. If you choose to use another frontend framework, read the documentation for that framework to learn how to use it.",
  -1
  /* HOISTED */
);
const _hoisted_87 = /* @__PURE__ */ createStaticVNode("<li>If you use a version control system, open your local repository folder in a shell. If you don&#39;t use a version control system, simply create a new folder for your project on your computer, and open that in a shell</li><li>In the shell, run the command <code>npm create vite@latest</code>, and choose the following options: <ul><li><code>Project name</code>: <code>frontend</code></li><li><code>Select a framework</code>: <code>Svelte</code></li><li><code>Select a variant</code>: <code>JavaScript</code></li></ul></li><li>Run the following commands in the shell: <ol><li><code>code .</code></li><li><code>cd frontend</code></li><li><code>npm install</code></li><li><code>npm run dev</code></li></ol></li>", 3);
const _hoisted_90 = {
  href: "http://127.0.0.1:5173/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "As you make changes to the code and save them in Visual Studio Code, Vite will push the new version of the code to the wb browser, which shows the new version instantly. Try it out!",
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "App.svelte",
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ".svelte",
  -1
  /* HOISTED */
);
const _hoisted_94 = {
  href: "https://github.com/EmilTholin/svelte-routing",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_95 = /* @__PURE__ */ createStaticVNode('<p>Create a file called <code>data.js</code>, in which you hardcode and export some data that is available on your platform, for example (if your platform is about blogposts and comments):</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> accounts <span class="token operator">=</span> <span class="token punctuation">[</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Claire&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> blogposts <span class="token operator">=</span> <span class="token punctuation">[</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">authorId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Alice&#39;s adventure Part 1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">authorId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My birthday!&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">authorId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Alice&#39;s adventure Part 2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> comments <span class="token operator">=</span> <span class="token punctuation">[</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">blogpostId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">commenterId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Exciting, can&#39;t wait for Part 2!&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">blogpostId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">commenterId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Happy birthday Bob!&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">blogpostId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">commenterId</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;🎉🎂&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Try to structure your data the same way you would structure it in a relational database, and you will need to make less changes to the code later when you start using the database and the backend application. So, explaining how you structure your data in the <em>Database</em> chapter in your report now is a good idea.</p><p>In the <code>.svelte</code> component for the different pages, import the data from the <code>data.js</code> file the page should show, and then show that data in that component. The <code>&lt;form&gt;</code> elements you have on the different pages don&#39;t need to do anything now; this part of the project is just about showing the GUI, so the customer can try out the navigation by clicking on different links in the application.</p><p>When you&#39;re done, if you have a customer, then show the prototype to the customer, and ask for feedback. I you don&#39;t have a customer, you can show your prototype to a teacher at a lab session or some of your friends, and ask what they think about your GUI. Also, don&#39;t forget explain how you have implemented the frontend in your report.</p><h2 id="part-6-rest-api" tabindex="-1"><a class="header-anchor" href="#part-6-rest-api" aria-hidden="true">#</a> Part 6: REST API</h2><p>Before you start working on this part you are expected to read/view the following lectures:</p>', 7);
const _hoisted_102 = /* @__PURE__ */ createStaticVNode('<hr><p>Design the REST API you will implement on the backend application and through which the frontend application will communicate with it. By looking at the graphical user interface in your report you should be able to figure out which requests the frontend needs to be able to send to the backend to be able to function properly. For example, if the frontend have a &quot;page&quot; showing a list of all accounts, then your REST API should send back all accounts when it receives a <code>GET</code> request for <code>/accounts</code> (or similar), and if the frontend has a &quot;page&quot; showing all information about an account with a specific id, then your REST API should send back all information about an account with a <code>SPECIFIC_ID</code> when it receives a <code>GET</code> request for <code>/accounts/SPECIFIC_ID</code> (or similar; replace <code>SPECIFIC_ID</code> with an actual id).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You do not need to worry about login functionality (authentication and authorization) yet, that comes in Part 10. For now, it&#39;s OK if any user can carry out any operation.</p></div><p>Describe the REST API in your project report. Be as detailed as possible; other programmers should understand how to use your REST API just by reading the specification for it in your report. This means that you must mention details such as which methods, URI:s, status codes (all of them, including the ones used when the request is not carried out), headers etc. that are used in your REST API for each request it supports.</p>', 4);
const _hoisted_106 = {
  href: "https://stripe.com/docs/api/accounts",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you are done, show your REST API specification to a teacher at a lab session to get some feedback on it.",
  -1
  /* HOISTED */
);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-7-database",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-7-database",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 7: Database")
  ],
  -1
  /* HOISTED */
);
const _hoisted_109 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_110 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_111 = { class: "custom-container warning" };
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "For Linux users",
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "creating-docker-image",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#creating-docker-image",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Creating Docker image")
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In your project folder, create a new folder that will store the code required to run all the applications your solution consists of (database, backend and frontend). We will refer to this folder as the "),
    /* @__PURE__ */ createBaseVNode("code", null, "applications"),
    /* @__PURE__ */ createTextVNode(" folder.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_115 = { class: "custom-container tip" };
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Docker on Windows",
  -1
  /* HOISTED */
);
const _hoisted_117 = {
  href: "https://docs.docker.com/desktop/windows/wsl/#best-practices",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_118 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The rest of the instructions on this page assumes the project folder has been placed on the file system for the Linux distribution you are running. Mac users will simply place the projects folder on the file system for Mac.",
  -1
  /* HOISTED */
);
const _hoisted_119 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In the "),
    /* @__PURE__ */ createBaseVNode("code", null, "applications"),
    /* @__PURE__ */ createTextVNode(" folder, create a folder that will store all the code required to run the database. We will refer to this folder as the "),
    /* @__PURE__ */ createBaseVNode("code", null, "database"),
    /* @__PURE__ */ createTextVNode(" folder.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "database",
  -1
  /* HOISTED */
);
const _hoisted_121 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Dockerfile",
  -1
  /* HOISTED */
);
const _hoisted_122 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "relational database",
  -1
  /* HOISTED */
);
const _hoisted_123 = {
  href: "https://hub.docker.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_124 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Dockerfile",
  -1
  /* HOISTED */
);
const _hoisted_125 = {
  href: "https://docs.docker.com/engine/reference/builder/#from",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_126 = /* @__PURE__ */ createStaticVNode('<p>Read the documentation for the image on Docker Hub you inherit from to learn how to use it. For example, many images for relational databases there come with a default username you can use to connect to it, and you can learn which that is, and how to change it, from the documentation.</p><p>To test your database, you first need to tell Docker to build an image based on the instructions in your <code>Dockerfile</code>. To do that, go to your <code>database</code> folder (that contains the <code>Dockerfile</code>) in a shell, and then run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build --tag=db .\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>That command creates a new Docker image named <code>db</code> that is based on the instructions you wrote in the <code>Dockerfile</code>, and that only exists on your computer.</p><h3 id="running-docker-image" tabindex="-1"><a class="header-anchor" href="#running-docker-image" aria-hidden="true">#</a> Running Docker image</h3><p>To run your <code>db</code> image in a new container, run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run db\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>However, when running that command, you might need to pass along environment variables that configures the database, such as an environment variable that specifies which the password for the root user on the database should be, or the name of a database that is automatically created when the relational database starts. For example, if you use MariaDB, you would need to run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -e MARIADB_ROOT_PASSWORD=abc123 db\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>That command would start the database with the root user&#39;s password set to <code>abc123</code>. In a similar way, one can often also pass along an environment variable that specifies the name of a database that should be created in the relational database you are using when it starts (see the documentation for the database image you are inheriting from).</p><p>Try to get your database up an running (when running the command in the shell, nothing should crash). Often, you can stop the container from running by pressing <code>[CTRL]</code> + <code>[C]</code> (pressing it twice might be needed), or you can stop it from the Docker Desktop application that is running.</p><h3 id="connecting-from-the-host-computer" tabindex="-1"><a class="header-anchor" href="#connecting-from-the-host-computer" aria-hidden="true">#</a> Connecting from the host computer</h3>', 12);
const _hoisted_138 = {
  href: "https://docs.docker.com/config/containers/container-networking/#published-ports",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_139 = /* @__PURE__ */ createStaticVNode('<p>For example, MariaDB accepts connections on port <code>3306</code>, and to be allowed to connect to that port in your container from your own computer, you need to map a port on your own computer (use whichever you want that is available on your computer) to port <code>3306</code> in the container. You can for example (most likely) map it to the port <code>5555</code> on your computer by starting it with the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 5555:3306 -e MARIADB_ROOT_PASSWORD=abc123 db\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Be consistent</p><p>It&#39;s probably a god idea to map port <code>3306</code> on your own computer to port <code>3306</code> in the container. Then it&#39;s only one port number you need to remember. Here we use different port numbers to show the difference.</p></div><p>After that, you should be able to connect to the database from your own computer. To do that, you need a database client that can connect to the type of database you are using. Visual Studio Code does most likely have an extension you can install and use for that (search for that yourself in the <em>Extensions</em> panel in Visual Studio Code), but there also exist many desktop applications one can install and use (search for that yourself on the web). Use whichever you prefer. Read in the documentation for the database image you inherit from on Docker Hub to learn the connection details (username, password, port, database name, etc.).</p><p>After you have connected to the database in the container from your own computer, try sending a query to it to verify that the connection works (for example, a query that creates a new table in the database) from your database client.</p><h3 id="using-docker-compose" tabindex="-1"><a class="header-anchor" href="#using-docker-compose" aria-hidden="true">#</a> Using Docker Compose</h3><p>Starting the database using a very long command like the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 5555:3306 -e MARIADB_ROOT_PASSWORD=abc123 db\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>is not that convenient. Especially not when we later also will need to start our backend application and frontend application with similar commands. Instead of doing that, we can use Docker Compose to start all of those containers using a single command.</p><p>To use Docker Compose, you first need to create the <code>compose.yaml</code> file in the <code>applications</code> folder. In it, you can specify which images to start, which environment variables to pass to them, how ports should be mapped, etc. To start running our own database image in a new container with the environment variable and port mapping we had before, we could put the following content in the <code>compose.yaml</code> file:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>\n	<span class="token key atrule">db</span><span class="token punctuation">:</span>\n		<span class="token key atrule">build</span><span class="token punctuation">:</span> ./database/\n		<span class="token key atrule">ports</span><span class="token punctuation">:</span>\n			<span class="token punctuation">-</span> <span class="token string">&quot;5555:3306&quot;</span>\n		<span class="token key atrule">environment</span><span class="token punctuation">:</span>\n			<span class="token key atrule">MARIADB_ROOT_PASSWORD</span><span class="token punctuation">:</span> abc123\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After that, you can go to your <code>applications</code> folder in a shell and run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker compose up\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>to run the images specified in the <code>compose.yaml</code> file in new containers (currently only the <code>db</code> image). Press <code>[CTRL]</code> + <code>[C]</code> (possibly twice) to stop the started containers from running.</p><div class="custom-container warning"><p class="custom-container-title">Rebuilding images</p><p>By default, the command <code>docker compose up</code> will not rebuild your images, not even when you have made changes to the <code>Dockerfile</code>. Usually, we want it to be rebuild the images when we have made changes to them, so usually we add the <code>--build</code> flag to the command, so we instead run the command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker compose up --build\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="initializing-the-database" tabindex="-1"><a class="header-anchor" href="#initializing-the-database" aria-hidden="true">#</a> Initializing the database</h3><p>When our database starts running in a new Docker container, we usually also want to create the tables it should contain. Most database images you find on the Docker Hub has way of running some SQL code when the database starts for the first time. For example, for the MariaDB database image, any SQL code you write in an <code>.sql</code> file you put in the folder <code>/docker-entrypoint-initdb.d/</code> in the image will be executed the first time the database starts.</p><p>In the <code>database</code> folder in your project, you can create a file named, for example, <code>create-tables.sql</code>, and then in the <code>Dockerfile</code> add the following instruction:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COPY ./create-tables.sql /docker-entrypoint-initdb.d/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then the SQL code you write in the <code>create-tables.sql</code> file will be executed when the database starts, so there you can put your <code>CREATE TABLE</code> queries.</p>', 20);
const _hoisted_159 = { class: "custom-container danger" };
const _hoisted_160 = /* @__PURE__ */ createStaticVNode('<p class="custom-container-title">An anonymous volume might be used!</p><p>A container does by default only have access to the files and folders in the container itself. By using a volume, you can grant a container access to a folder on the host computer. That way, the application running in the container can store files on the host computer that will continue to exist even after the container has been deleted.</p><p>Some database images automatically use such a volume to store information about the database (which tables that are in it, what data they contain, etc.). Each time you start the database image in a new container, a new anonymous volume is created for that container, so the database in the container can store its data there, and that volume continues to exist even after the database container stops running and is deleted.</p><p>When using Docker Compose, the first time you run the command <code>docker compose up</code> it will create a new container your database will run in, and give it access to a new volume. However, Docker Compose will continue to use the same volume the next time you run <code>docker compose up</code>, even if you use <code>docker compose up --build</code> and rebuilds the image. And, the way many of these database images work is that they will only run the SQL code in the <code>.sql</code> files in the <code>/docker-entrypoint-initdb.d/</code> folder if the volume is empty. So the database will not pickup the changes you have made to the SQL code the next time you run the command <code>docker compose up --build</code>.</p><p>When we use Docker Compose, this is usually <strong>not</strong> the behavior we want, but we instead want the database to get a new volume, so the queries in the <code>.sql</code> files in the <code>/docker-entrypoint-initdb.d/</code> folder are executed each time we use the <code>docker compose up</code> command and have made a change to the database image. To make that happen, we also need to use the <code>--renew-anon-volumes</code> flag:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker compose up --build --renew-anon-volumes\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 6);
const _hoisted_166 = {
  href: "https://github.com/docker-library/mysql/issues/255",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_167 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Another solution is to run the following command before you run the "),
    /* @__PURE__ */ createBaseVNode("code", null, "docker compose up"),
    /* @__PURE__ */ createTextVNode(" command:")
  ],
  -1
  /* HOISTED */
);
const _hoisted_168 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-text line-numbers-mode",
    "data-ext": "text"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-text" }, [
      /* @__PURE__ */ createBaseVNode("code", null, "docker compose down\n")
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
const _hoisted_169 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("It can also be a good idea to, in a similar way, create an "),
    /* @__PURE__ */ createBaseVNode("code", null, "insert-data.sql"),
    /* @__PURE__ */ createTextVNode(" file that populates the tables with some initial data when the database starts (used during development; does not make sense to do when the platform runs for real).")
  ],
  -1
  /* HOISTED */
);
const _hoisted_170 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you are done with this part of the project, you should be able to finish the Database chapter in the report.",
  -1
  /* HOISTED */
);
const _hoisted_171 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-8-backend",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-8-backend",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 8: Backend")
  ],
  -1
  /* HOISTED */
);
const _hoisted_172 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_173 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_174 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "a-basic-implementation",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#a-basic-implementation",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" A basic implementation")
  ],
  -1
  /* HOISTED */
);
const _hoisted_175 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Create a new folder where you can store the source code for your backend application. To start with, you can store it on the file system for your ordinary operating system. We will refer to this folder as the "),
    /* @__PURE__ */ createBaseVNode("code", null, "backend"),
    /* @__PURE__ */ createTextVNode(" folder.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_176 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Open the "),
    /* @__PURE__ */ createBaseVNode("code", null, "backend"),
    /* @__PURE__ */ createTextVNode(" folder in a shell, and then run the following commands (you don't have to use Express, but if you use another framework, the teacher at the lab sessions might not be able to help you):")
  ],
  -1
  /* HOISTED */
);
const _hoisted_177 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "npm init --yes")
  ],
  -1
  /* HOISTED */
);
const _hoisted_178 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "npm install express")
  ],
  -1
  /* HOISTED */
);
const _hoisted_179 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "npm install A_DATABASE_CLIENT_PACKAGE",
  -1
  /* HOISTED */
);
const _hoisted_180 = {
  href: "https://www.npmjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_181 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("code", null, "mkdir src")
  ],
  -1
  /* HOISTED */
);
const _hoisted_182 = /* @__PURE__ */ createStaticVNode('<p>It is in the <code>src</code> (short for <em>source</em>) folder you should put your own source files. The reason we use a special folder for this is because we later, when using Docker, want to mount the folder to the container running the backend application as a volume (learn more about this later).</p><p>Put a file called <code>app.js</code> (or whatever you prefer) in the <code>src</code> folder with the content looking something like what&#39;s shown below:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> DatabaseClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;A_DATABASE_CLIENT_PACKAGE&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Change to your db client</span>\n\n<span class="token comment">// See the documentation for the db client package you are using</span>\n<span class="token comment">// to learn how to use it, but it will be something like this:</span>\n<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatabaseClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n	<span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// See the documentation for the database you are</span>\n	<span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">,</span> <span class="token comment">// using to learn which connection settings you</span>\n	<span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// should use, but it usually includes these 5</span>\n	<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5555</span><span class="token punctuation">,</span>         <span class="token comment">// options.</span>\n	<span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&quot;my-db&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/accounts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n	\n	<span class="token comment">// See the documentation for the db client package you are using</span>\n	<span class="token comment">// to learn how to use it, but it will most likely be something</span>\n	<span class="token comment">// like this:</span>\n	\n	<span class="token keyword">try</span><span class="token punctuation">{</span>\n		\n		<span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT * FROM accounts</span><span class="token template-punctuation string">`</span></span>\n		\n		<span class="token keyword">const</span> accounts <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>\n		\n		response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>accounts<span class="token punctuation">)</span>\n		\n	<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n		\n		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n		response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n		\n	<span class="token punctuation">}</span>\n	\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Using ECMAScript modules instead of CommonJS</p><p>Those who want to try to use ECMAScript modules instead of CommonJS are free to do so. Then you need to either:</p><ul><li>Name your JavaScript files with the <code>.mjs</code> extension instead of <code>.js</code>, or</li><li>In your <code>package.json</code>, add the <code>&quot;type&quot;</code> property, and give it the value <code>&quot;module&quot;</code></li></ul></div><p>Open the <code>backend</code> folder in a shell, and then run the following command to start your backend application:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node src/app.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Use Postman to send a GET request to <code>localhost:8080/accounts</code>, and verify that you get back all the accounts stored in the database (the database image must be running in container for this to work, and you must have created a table named <code>accounts</code> in it). If you haven&#39;t inserted any entries to the <code>accounts</code> table yet, you should get back an empty JSON array.</p><h3 id="building-and-running-a-docker-image" tabindex="-1"><a class="header-anchor" href="#building-and-running-a-docker-image" aria-hidden="true">#</a> Building and running a Docker image</h3><p>Great, now you have a basic backend application that can communicate with the database. Let&#39;s try to run it in a container instead.</p>', 9);
const _hoisted_191 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "backend",
  -1
  /* HOISTED */
);
const _hoisted_192 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "applications",
  -1
  /* HOISTED */
);
const _hoisted_193 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "backend",
  -1
  /* HOISTED */
);
const _hoisted_194 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Dockerfile",
  -1
  /* HOISTED */
);
const _hoisted_195 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Dockerfile",
  -1
  /* HOISTED */
);
const _hoisted_196 = {
  href: "https://nodejs.org/en/docs/guides/nodejs-docker-webapp/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_197 = /* @__PURE__ */ createStaticVNode('<ol><li>Specify which image to inherit from</li><li>Specify which the working directory should be in the image</li><li>Copy over the <code>package.json</code> file</li><li>Copy over the <code>package-lock.json</code> file</li><li>Run the command <code>npm install</code></li><li>Copy over the <code>src</code> folder</li><li>Tell the image that <code>node src/app.js</code> is the command that should be executed to start the application in the image</li></ol><p>Instead of using <code>docker build</code> and <code>docker run</code> to test if it works, let&#39;s directly continue with using Docker Compose, and test it that way.</p><h3 id="using-docker-compose-1" tabindex="-1"><a class="header-anchor" href="#using-docker-compose-1" aria-hidden="true">#</a> Using Docker Compose</h3><p>Change the <code>compose.yaml</code> file in the <code>applications</code> folder to also build and run the backend.</p><p>When the backend and the database is started using Docker Compose, they will be put in containers that belongs to the same <em>virtual network</em>, and they can connect to each other directly, without using port mapping. Each container will get its own domain name based on the name of the service you have used in the <code>compose.yaml</code> file. For example, if you used:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>\n	<span class="token key atrule">db</span><span class="token punctuation">:</span>\n		<span class="token comment"># And the rest...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 6);
const _hoisted_203 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "db",
  -1
  /* HOISTED */
);
const _hoisted_204 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "host",
  -1
  /* HOISTED */
);
const _hoisted_205 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "3000",
  -1
  /* HOISTED */
);
const _hoisted_206 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "8080",
  -1
  /* HOISTED */
);
const _hoisted_207 = /* @__PURE__ */ createStaticVNode('<p>You should then be able to start the database and the backend at the same time in Docker by simply running the following command in a shell in the <code>applications</code> folder:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker compose up --build --renew-anon-volumes\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">The database takes time to start!</p><p>Most often, the backend will start running before the database (the database takes longer time to start). If the backend tries to connect to the database when the backend starts, that will most likely fail, because the database is not up and running yet, so the backend can&#39;t connect to it at that point in time.</p><p>Some npm database client packages tries to connect to the database as soon as the client is created, and they will crash your application if they fail to do so. If that&#39;s the case, you need to find a workaround of some kind, for example:</p><ul><li>Use a connection pool instead of establishing just a single connection (a good idea even if you don&#39;t have this problem). Read the documentation for the npm package you use to learn if it supports connection pooling or not</li><li>Use another npm package to communicate with your database</li><li>Ask a teacher for help at one of the lab sessions</li></ul></div><h3 id="using-a-volume" tabindex="-1"><a class="header-anchor" href="#using-a-volume" aria-hidden="true">#</a> Using a volume</h3><p>The way it works now is that each time you have made changes to the JavaScript code in your backend and want to run the backend with those changes, you need to stop Docker Compose from running, and then run the command <code>docker compose up ...</code> again to build a new image for you backend and start it in a new container. That&#39;s not a very convenient way of working.</p><p>To resolve this, we can instead use a volume. The idea is that we will mount the <code>src/</code> folder as a volume to the container running the backend, and whenever the backend tries to access a file in the <code>src/</code> folder, it will read it from the <code>src/</code> folder on your operating system, instead of the <code>src/</code> folder in the container. That way, the backend can always read the latest version of your JS code through the volume!</p><p>To make that happen, change the <code>backend</code> service (or whatever you have called it) in your <code>compose.yaml</code> file to also make use of a volume:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>\n	<span class="token key atrule">backend</span><span class="token punctuation">:</span>\n		<span class="token key atrule">build</span><span class="token punctuation">:</span> ./backend\n		<span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n		 <span class="token punctuation">-</span> <span class="token string">&quot;./backend/src/:/path/to/the/src/folder/in/the/image/&quot;</span>\n<span class="token comment"># And all the other stuff...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The syntax for specifying a volume is <code>./path/to/a/folder/on/host/the/computer/relative/the/compose.yaml-file/</code>:<code>/path/to/a/folder/in/the/image/</code>. Whenever an application in the container tries to access something in the folder <code>/path/to/a/folder/in/the/image/</code>, Docker will instead give it access to the folder <code>./path/to/a/folder/on/the/host/computer/relative/the/compose.yaml-file/</code> on your computer instead.</p>', 9);
const _hoisted_216 = {
  href: "https://docs.docker.com/compose/compose-file/compose-file-v3/#short-syntax-3",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_217 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "src/",
  -1
  /* HOISTED */
);
const _hoisted_218 = {
  href: "https://nodejs.org/en/blog/release/v18.11.0/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_219 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "18.11.0",
  -1
  /* HOISTED */
);
const _hoisted_220 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Dockerfile",
  -1
  /* HOISTED */
);
const _hoisted_221 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "--watch",
  -1
  /* HOISTED */
);
const _hoisted_222 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "node src/app.js --watch",
  -1
  /* HOISTED */
);
const _hoisted_223 = { class: "custom-container warning" };
const _hoisted_224 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Older versions of Node.js",
  -1
  /* HOISTED */
);
const _hoisted_225 = {
  href: "https://www.npmjs.com/package/nodemon",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_226 = /* @__PURE__ */ createStaticVNode('<div class="custom-container danger"><p class="custom-container-title">Windows file system events not propagated to Linux containers!</p><p>The way Watch mode and nodemon work is that they rely on the operating system to notify them when a file has changed. On Windows, these events are not forwarded to the Linux containers if:</p><ul><li>You use Windows 10 Home with Windows Subsystem for Linux, and</li><li>Have placed your project folder on the file system for Windows</li></ul><p>So, make sure that you have placed your project folder as we described in Part 7: Database. Then file system events should be propagated correctly.</p></div><p>After you have started your container, try adding <code>console.log(&quot;Hello&quot;)</code> in the beginning of your <code>app.js</code> file, and in the shell verify that your backend has automatically restarted and logged the text <code>Hello</code>.</p><h3 id="implementing" tabindex="-1"><a class="header-anchor" href="#implementing" aria-hidden="true">#</a> Implementing</h3><p>In the backend, implement all operations your REST API needs to support per the specification you wrote in your report. Use Postman (or whichever application you prefer) to test that it has been implemented correct. You don&#39;t need to worry about authentication and authorization yet, that comes in a later part.</p><p>When you are done, update your report to describe how the backend has been implemented. Feel free to show your report to a teacher at one of the lab sessions to get some feedback on it.</p><h2 id="part-9-frontend-backend" tabindex="-1"><a class="header-anchor" href="#part-9-frontend-backend" aria-hidden="true">#</a> Part 9: Frontend-Backend</h2><p>Before you start working on this part, you are recommended to:</p>', 7);
const _hoisted_233 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_234 = /* @__PURE__ */ createStaticVNode('<h3 id="building-and-running-a-docker-image-1" tabindex="-1"><a class="header-anchor" href="#building-and-running-a-docker-image-1" aria-hidden="true">#</a> Building and running a Docker image</h3><p>Place your <code>frontend</code> folder in your <code>applications</code> folder.</p><p>Just as for the backend, we want to use a volume, so we can give the container access to the latest versions of the files on our computer. So, in the <code>frontend</code> folder, create a folder named <code>code</code> (or whatever you prefer), and move the following to it:</p><ul><li>The folder <code>pulic</code></li><li>The folder <code>src</code></li><li>The file <code>index.html</code></li><li>The file <code>jsconfig.json</code></li><li>The file <code>vite.config.js</code></li></ul><p>In the <code>package.json</code> file, change the <code>dev</code> script from <code>vite</code> to <code>cd code &amp;&amp; vite</code>.</p><p>Then create the <code>Dockerfile</code> (try to figure out on your own how to write it), and add the frontend to your <code>compose.yaml</code> file (try to figure out on your own what you need to write).</p>', 6);
const _hoisted_240 = { class: "custom-container tip" };
const _hoisted_241 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Opening Vite to the network",
  -1
  /* HOISTED */
);
const _hoisted_242 = {
  href: "https://vitejs.dev/config/server-options.html#server-host",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_243 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "vite.config.js",
  -1
  /* HOISTED */
);
const _hoisted_244 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ...</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n	<span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n		<span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n	<span class="token punctuation">}</span><span class="token punctuation">,</span>\n	<span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_245 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When you are done, you should be able to start also your frontend application using the "),
    /* @__PURE__ */ createBaseVNode("code", null, "docker compose up ..."),
    /* @__PURE__ */ createTextVNode(" command.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_246 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "communicating-with-the-backend",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#communicating-with-the-backend",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Communicating with the backend")
  ],
  -1
  /* HOISTED */
);
const _hoisted_247 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Since your frontend comes from a different origin than your backend, the web browser's Same-Origin Policy will not allow your frontend to communicate with your backend. That is, unless you use CORS in your backend to allow your frontend to communicate with it. Add CORS to your backend, so your frontend is allowed to communicate with it from the web browser.",
  -1
  /* HOISTED */
);
const _hoisted_248 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you are done, update the report so it also explains how the frontend communicates with the backend. If you want, show your report to the teacher at the lab session to get some feedback on it.",
  -1
  /* HOISTED */
);
const _hoisted_249 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-10-auth",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-10-auth",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 10: Auth")
  ],
  -1
  /* HOISTED */
);
const _hoisted_250 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part, you are recommended to:",
  -1
  /* HOISTED */
);
const _hoisted_251 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_252 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Add authentication and authorization to your backend through the use of Access Tokens (implemented as JWT) and ID Tokens per the OAuth 2.0 and OpenID Connect specifications. You only need to support the "),
    /* @__PURE__ */ createBaseVNode("em", null, "Resource Owner Password Credentials Grant"),
    /* @__PURE__ */ createTextVNode(".")
  ],
  -1
  /* HOISTED */
);
const _hoisted_253 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Use Postman to verify that you have implemented authentication and authorization correct in the backend. Then change your frontend to make use of the tokens too.",
  -1
  /* HOISTED */
);
const _hoisted_254 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you are done, update the report so it also explains how authentication and authorization works. If you want, show your report to the teacher at the lab session to get some feedback on it.",
  -1
  /* HOISTED */
);
const _hoisted_255 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-11-grade-4-and-5",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-11-grade-4-and-5",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 11: Grade 4 and 5")
  ],
  -1
  /* HOISTED */
);
const _hoisted_256 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "sdk-required-for-grade-4-and-5",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#sdk-required-for-grade-4-and-5",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" SDK (required for grade 4 and 5)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_257 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Create an SDK other programmers can use to communicate with your backend from their client-side JavaScript code. Then also use it in your own frontend to communicate with the backend (for all requests you send to the backend). Also update the report to reflect this.",
  -1
  /* HOISTED */
);
const _hoisted_258 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "supporting-multiple-data-formats-required-for-grade-4-and-5",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#supporting-multiple-data-formats-required-for-grade-4-and-5",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Supporting Multiple Data Formats (required for grade 4 and 5)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_259 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Content-Type",
  -1
  /* HOISTED */
);
const _hoisted_260 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Accept",
  -1
  /* HOISTED */
);
const _hoisted_261 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_262 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Example of data formats you can add support for (use whichever you prefer):",
  -1
  /* HOISTED */
);
const _hoisted_263 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "XML"),
    /* @__PURE__ */ createBaseVNode("li", null, "YAML")
  ],
  -1
  /* HOISTED */
);
const _hoisted_264 = {
  href: "https://www.npmjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_265 = /* @__PURE__ */ createStaticVNode('<p>Your frontend does not need to make use of your new data format, but using Postman one should be able to specify which one to use.</p><h3 id="third-party-authentication-required-for-grade-5" tabindex="-1"><a class="header-anchor" href="#third-party-authentication-required-for-grade-5" aria-hidden="true">#</a> Third-Party Authentication (required for grade 5)</h3><p>Add third-party authentication to your application so users can login on your platform with their Google account (or whichever third-party you choose to use) instead of using a username and password. You need to implement this in your backend application and then use it in your frontend application as well. Note that you still need to support username+password for the users who prefer to use that.</p><h2 id="part-12-demonstration" tabindex="-1"><a class="header-anchor" href="#part-12-demonstration" aria-hidden="true">#</a> Part 12: Demonstration</h2><p>Demonstrate how your platform works to the rest of your class(in smaller groups). The reason for the demonstration is two-folded:</p><ul><li>You get some practice on demonstrating your work, which is a very important skill in your future professional career</li><li>You get to see a variety of different platforms you should be able to implement yourself</li></ul><p>Your demonstration will not be graded; consider it as (mandatory) practice.</p>', 7);
const _hoisted_272 = {
  href: "https://ju.instructure.com/courses/6820/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_273 = /* @__PURE__ */ createStaticVNode("<p>At the demonstration, you should:</p><ul><li>Explain what the platform you have created is about, including (basically the Introduction chapter in the report): <ul><li>Why would someone use it?</li><li>What can the platform be used for?</li><li>How have you made the platform as good as possible (so users won&#39;t use any other solution)?</li></ul></li><li>Give a demonstration of how your solution works. A good idea is that one of you tell the other one what do to (e.g. <em>Go ahead and create a new account for me.</em>), and then the other one shows how to do that.</li></ul><p>You may use at most 15 minutes, so come prepared. You will not have time for <em>Oh, what more can I show you?</em> or <em>Wait, let me try to remember/look up how we did that</em>, so rehearse the demonstration in advance. Be prepared to answer any question about your solution the audience might have.</p>", 3);
const _hoisted_276 = {
  href: "https://ju.instructure.com/courses/6820/assignments/43113",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_277 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-13-final-submission",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-13-final-submission",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 13: Final submission")
  ],
  -1
  /* HOISTED */
);
const _hoisted_278 = {
  href: "https://ju.instructure.com/courses/6820/assignments/43114",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_CompactInfo = resolveComponent("CompactInfo");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_CompactInfo, { infoPieces: {
      "Number of credits": "4",
      "Grades": ["Fail", "3", "4", "5"],
      "How to work": "In pairs",
      "Goal": "To learn how to implement a platform using a Single-Page Application framework, a backend framework exposing a REST API, a database to store the data on the platform, and how to use Docker to run all of these",
      "Instructions": `Complete the different parts the project work consists of described on this page. You will implement a platform, write a report describing your implementation and present your platform to the "rest" of the class (in smaller groups) at the end of the course`,
      "Grading guidelines": "Available on the Project Grading Guidelines page",
      "Re-examination": "A special presentation session will be available at each re-exam periods in June and in August (contact the course coordinator for more details). Your work can also be graded at these re-exam period, but it will only be graded Fail/3",
      "Help": "Come to the lab sessions and ask the teacher there for help"
    } }, null, 8, ["infoPieces"]),
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("On the "),
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/project-grading-guidelines/" }, {
        default: withCtx(() => [
          createTextVNode("Project Grading Guidelines")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" page you find some guidelines for how your project will be graded. You are recommended to read through it every now and then.")
    ]),
    _hoisted_16,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_23, [
          createTextVNode("Docker"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        _hoisted_24,
        createTextVNode(" A program used for containerization, i.e. a program used for running other programs in an isolated and configurable environment")
      ])
    ]),
    _hoisted_25,
    _hoisted_26,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_27, [
          createTextVNode("Node.js"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        _hoisted_28,
        createTextVNode(" Use whichever version you want, but most likely the newer the better. If you don't want to gamble, go with the latest LTS version")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_29, [
          createTextVNode("npm"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        _hoisted_30,
        createTextVNode(" This one is installed along with Node.js, so you do not need to install it separately. However, you might want to "),
        createBaseVNode("a", _hoisted_31, [
          createTextVNode("update npm to the latest version"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_32, [
          createTextVNode("Postman"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        _hoisted_33,
        createTextVNode(" An application one can use to send custom HTTP requests")
      ])
    ]),
    _hoisted_34,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_35, [
          createTextVNode("Visual Studio Code"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        _hoisted_36,
        createTextVNode(" IDE with good support for writing, running and debugging Node.js and JavaScript code, but feel free to use whichever IDE you want")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_37, [
          createTextVNode("Git"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        _hoisted_38,
        createTextVNode(" Version Control System that makes it very convenient to work on the project from different computers")
      ])
    ]),
    _hoisted_39,
    createBaseVNode("p", null, [
      createTextVNode("The project work should be carried out in pairs. Let the examiner know who you are working with by joining one of the "),
      createBaseVNode("a", _hoisted_40, [
        createTextVNode("Project Groups"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" on Canvas.")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you can't find someone to work with, send the course coordinator an email at "),
      _hoisted_41,
      createTextVNode(" using the template in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below (you just need to replace "),
      _hoisted_42,
      createTextVNode(" with your own specific values).")
    ]),
    createVNode(_component_Figure, { caption: "Template of message to be sent to the course coordinator if you can't find a partner to work with on your own." }, {
      default: withCtx(() => [
        _hoisted_43
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_44,
    _hoisted_45,
    _hoisted_46,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Read/View the following lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/teamwork/" }, {
              default: withCtx(() => [
                createTextVNode("Teamwork")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Read the following short course on Git: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/courses/git/" }, {
              default: withCtx(() => [
                createTextVNode("Git")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_47,
    _hoisted_48,
    createBaseVNode("p", null, [
      createTextVNode("We recommend you to work together per the basis described in the "),
      createVNode(_component_RouterLink, { to: "/lectures/teamwork/" }, {
        default: withCtx(() => [
          createTextVNode("Teamwork")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" lecture. That way you will automatically document who has contributed with what by using Git and GitHub issues. But if you want to work together in another way, that is OK too as long as you can show who has contributed with what in the project. The "),
      _hoisted_49,
      createTextVNode(" chapter in "),
      _hoisted_50,
      createTextVNode(" shows an example of how you can report who has contributed with what in the project.")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you agree on using a version control system, try to use it for as much as possible. For example, you can also put your report in your repository, and not only your source code. If you agree on using a version control system, create the remote repository for it now, for example using "),
      createBaseVNode("a", _hoisted_51, [
        createTextVNode("GitHub"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", and then clone it to your own computers")
    ]),
    _hoisted_52,
    _hoisted_53,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Read/View the following lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/report-writing/" }, {
              default: withCtx(() => [
                createTextVNode("Report Writing")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/uml-use-case-diagrams/" }, {
              default: withCtx(() => [
                createTextVNode("UML Use-Case Diagrams")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_54,
    createBaseVNode("p", null, [
      createTextVNode("A good way to quickly visualize how the application should work in the end is by drawing a wireflow showing how the user can navigate between the different pages the application consists of, and to some degree show what the user can do on each page, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Example of parts of a wireflow showing the graphical user interface of an application with accounts and blogposts." }, {
      default: withCtx(() => [
        _hoisted_63
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_64,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Read/View the following lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/svelte/" }, {
              default: withCtx(() => [
                createTextVNode("Svelte")
              ]),
              _: 1
              /* STABLE */
            }),
            createTextVNode(" (use another frontend framework if you want)")
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/content-delivery-networks/" }, {
              default: withCtx(() => [
                createTextVNode(" Content Delivery Networks")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_70,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_80, [
          createTextVNode("Angular"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_81, [
          createTextVNode("React"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_82, [
          createTextVNode("Vue"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_83, [
          createTextVNode("Svelte"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_84,
    _hoisted_85,
    _hoisted_86,
    createBaseVNode("ol", null, [
      _hoisted_87,
      createBaseVNode("li", null, [
        createTextVNode("Open "),
        createBaseVNode("a", _hoisted_90, [
          createTextVNode("127.0.0.1:5173"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" (or whichever port number you end up using) in a web browser to run the frontend application")
      ]),
      _hoisted_91
    ]),
    createBaseVNode("p", null, [
      createTextVNode("Implement the layout of your frontend application in the "),
      _hoisted_92,
      createTextVNode(" file. The main content on the different pages can be implemented in their own "),
      _hoisted_93,
      createTextVNode(" files. To connect each page to its own URL, you can use the npm package "),
      createBaseVNode("a", _hoisted_94, [
        createTextVNode("svelte-routing"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_95,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-basics/" }, {
          default: withCtx(() => [
            createTextVNode("REST API Basics")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_102,
    createBaseVNode("p", null, [
      createTextVNode("An example of a good REST API specification is "),
      createBaseVNode("a", _hoisted_106, [
        createTextVNode("Stripe's REST API specification"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Feel free to take inspiration from that.")
    ]),
    _hoisted_107,
    _hoisted_108,
    _hoisted_109,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Read/View the following lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/docker-basics/" }, {
              default: withCtx(() => [
                createTextVNode("Docker Basics")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/scaling-databases/" }, {
              default: withCtx(() => [
                createTextVNode("Scaling Databases")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_110,
    createBaseVNode("p", null, [
      createTextVNode("In this part, the goal is to use Docker and Docker Compose to get your database up and running in a container you can connect to from your own computer, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Architecture on Windows/Mac." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart\n	db[DB]\n	dbClient[DB Client]\n	subgraph Your Computer\n		subgraph Your OS\n			dbClient\n		end\n		subgraph Linux\n			subgraph Container 1\n				db\n			end\n		end\n	end\n	dbClient--SQL-->db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("div", _hoisted_111, [
      _hoisted_112,
      createBaseVNode("p", null, [
        createTextVNode("If you use Linux as the operating system on your computer, then you will only have one Linux installation on your computer, as shown in "),
        createVNode(_component_FigureNumber),
        createTextVNode(" below instead.")
      ]),
      createVNode(_component_Figure, { caption: "Architecture on Linux." }, {
        default: withCtx(() => [
          createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart LR\n	db[DB]\n	dbClient[DB Client]\n	subgraph Your Computer\n		subgraph Linux\n			dbClient\n			subgraph Container 1\n				db\n			end\n		end\n	end\n	dbClient--SQL-->db\n" })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_113,
    _hoisted_114,
    createBaseVNode("div", _hoisted_115, [
      _hoisted_116,
      createBaseVNode("p", null, [
        createTextVNode("When using Docker on Windows, the recommendation is to use Windows Subsystem for Linux 2, and place your project folder on the file system for the Linux distribution you are using. If you work on your private computer (i.e. uses Window 10 Home), do that, as shown in "),
        createVNode(_component_FigureNumber),
        createTextVNode(" below. Otherwise automatic restart of applications when you save code changes made to files might not work (learn more about that later).")
      ]),
      createVNode(_component_Figure, { caption: "Architecture on Windows 10 Home." }, {
        default: withCtx(() => [
          createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart\n	db[DB]\n	dbClient[DB Client]\n	pf[Project Folder]\n	subgraph Your Computer\n		subgraph Windows 10 Home\n			dbClient\n		end\n		subgraph Linux\n			subgraph Container 1\n				db\n			end\n			pf\n		end\n	end\n	dbClient--SQL-->db\n" })
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("p", null, [
        createTextVNode("On the school's computers (that uses Windows 10 Education), Docker runs on Hyper-V instead of Windows Subsystem for Linux 2, so on the school's computers you should place your project folder directly on the file system on Windows instead, as shown in "),
        createVNode(_component_FigureNumber),
        createTextVNode(" below.")
      ]),
      createVNode(_component_Figure, { caption: "Architecture on Windows using Hyper-V (the school's computers)." }, {
        default: withCtx(() => [
          createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart\n	db[DB]\n	dbClient[DB Client]\n	pf[Project Folder]\n	subgraph School Computer\n		subgraph Windows 10 Education\n			dbClient\n			pf\n		end\n		subgraph Linux\n			subgraph Container 1\n				db\n			end\n		end\n	end\n	dbClient--SQL-->db\n" })
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("p", null, [
        createTextVNode("For detailed information, read "),
        createBaseVNode("a", _hoisted_117, [
          createTextVNode("Docker Best Practices"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ]),
      _hoisted_118
    ]),
    _hoisted_119,
    createBaseVNode("p", null, [
      createTextVNode("In the "),
      _hoisted_120,
      createTextVNode(" folder, create a new file named "),
      _hoisted_121,
      createTextVNode(" that specifies which database to run. Use whichever type of "),
      _hoisted_122,
      createTextVNode(" you want (MariaDB, MySQL, MariaDB, etc.). On "),
      createBaseVNode("a", _hoisted_123, [
        createTextVNode("Docker Hub"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", find an image that contains the database you want to use, and then inherit from that one in your own "),
      _hoisted_124,
      createTextVNode(" using the "),
      createBaseVNode("a", _hoisted_125, [
        createTextVNode("FROM"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" instruction.")
    ]),
    _hoisted_126,
    createBaseVNode("p", null, [
      createTextVNode("By default, a container runs in an isolated environment. So even if you get your database up and running in the container, you can't connect to it from outside the container, so you can't connect to it from your own computer. To be allowed to connect to it from your own computer, you need to use "),
      createBaseVNode("a", _hoisted_138, [
        createTextVNode("Docker port mapping"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Port mapping." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart\n	db[DB Container]\n	dbClient[DB Client]\n	pf[Project Folder]\n	subgraph Your Computer\n		subgraph Your OS\n			dbClient\n		end\n		subgraph Linux\n			pf\n			subgraph Container 1\n				db\n			end\n		end\n	end\n	dbClient--Port 5555 : Port 3306-->db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_139,
    createBaseVNode("div", _hoisted_159, [
      _hoisted_160,
      createBaseVNode("p", null, [
        createTextVNode("For more information about this annoying behavior, see the GitHub issue "),
        createBaseVNode("a", _hoisted_166, [
          createTextVNode("Why is there volume for data in the first place?"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ]),
      _hoisted_167,
      _hoisted_168
    ]),
    _hoisted_169,
    _hoisted_170,
    _hoisted_171,
    _hoisted_172,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Read/View the following lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/rest-api-in-express/" }, {
              default: withCtx(() => [
                createTextVNode("REST API in Express")
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
            createVNode(_component_RouterLink, { to: "/lectures/handling-concurrent-http-requests/" }, {
              default: withCtx(() => [
                createTextVNode("Handling Concurrent HTTP Requests")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/scaling-web-applications/" }, {
              default: withCtx(() => [
                createTextVNode("Scaling Web Applications")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_173,
    createBaseVNode("p", null, [
      createTextVNode("In this part, the goal is to use Docker and Docker Compose to get your backend up and running in a container, and to connect it to the database, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Architecture." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart\n	db[DB]\n	backend[Backend]\n	pm[Postman]\n	pf[Project Folder]\n	subgraph Your Computer\n		subgraph Your OS\n			pm\n		end\n		subgraph Linux\n			subgraph Container 2\n				backend\n			end\n			subgraph Container 1\n				db\n			end\n			pf\n		end\n	end\n	pm--HTTP-->backend\n	backend--SQL-->db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      createTextVNode("But to get a gentler start, we will first get the backend running on the computer without Docker, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Architecture." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart\n	db[DB]\n	backend[Backend]\n	pm[Postman]\n	pf[Project Folder]\n	subgraph Your Computer\n		subgraph Your OS\n			pm\n			backend\n		end\n		subgraph Linux\n			subgraph Container 1\n				db\n			end\n		pf\n		end\n	end\n	pm--HTTP-->backend\n	backend--SQL-->db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_174,
    _hoisted_175,
    _hoisted_176,
    createBaseVNode("ol", null, [
      _hoisted_177,
      _hoisted_178,
      createBaseVNode("li", null, [
        _hoisted_179,
        createTextVNode(" (find one in the "),
        createBaseVNode("a", _hoisted_180, [
          createTextVNode("npm Registry"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" you can use for the type of database you are using (preferably a package using promises instead of callback functions))")
      ]),
      _hoisted_181
    ]),
    _hoisted_182,
    createBaseVNode("p", null, [
      createTextVNode("Move the "),
      _hoisted_191,
      createTextVNode(" folder to the "),
      _hoisted_192,
      createTextVNode(" folder. Then, in the "),
      _hoisted_193,
      createTextVNode(" folder, create the "),
      _hoisted_194,
      createTextVNode(", and inherit from an image on Docker Hub that contains the things you need to run your code. To learn which instructions you need to write in the "),
      _hoisted_195,
      createTextVNode(", read the webpage "),
      createBaseVNode("a", _hoisted_196, [
        createTextVNode("Dockerizing a Node.js web app"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". You simply need to write instructions that:")
    ]),
    _hoisted_197,
    createBaseVNode("p", null, [
      createTextVNode("Then the backend can use "),
      _hoisted_203,
      createTextVNode(" as the "),
      _hoisted_204,
      createTextVNode(" connection parameter to the database to indicate that it should connect to the database container. To be able to connect to the backend from your web browser you still need to use port mapping, for example map port "),
      _hoisted_205,
      createTextVNode(" on your computer to port "),
      _hoisted_206,
      createTextVNode(" in the backend container, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below, since the computer running your OS is not part of the virtual network.")
    ]),
    createVNode(_component_Figure, { caption: "Architecture." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart\n	db[DB Container]\n	backend[Backend]\n	pm[Postman]\n	subgraph Your Computer\n		subgraph Your OS\n			pm\n		end\n		subgraph Linux\n			subgraph Container 2\n				backend\n			end\n			subgraph Container 1\n				db\n			end\n		end\n	end\n	pm--Port 3000 : Port 8080-->backend\n	backend--db-->db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_207,
    createBaseVNode("p", null, [
      createTextVNode("For more information on writing paths for volumes, see "),
      createBaseVNode("a", _hoisted_216, [
        createTextVNode("Compose file version 3 reference --> Volumes --> Short syntax"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("However, each time you have made a change to a JavaScript file in the "),
      _hoisted_217,
      createTextVNode(" folder, Node.js in the container needs to restart your application to pick up the changes. To make that happen, we can use the "),
      createBaseVNode("a", _hoisted_218, [
        createTextVNode("Watch mode"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" feature that was added to Node.js in version "),
      _hoisted_219,
      createTextVNode(". In your "),
      _hoisted_220,
      createTextVNode(", add the "),
      _hoisted_221,
      createTextVNode(" flag to the command used to start your backend application (i.e. use "),
      _hoisted_222,
      createTextVNode(").")
    ]),
    createBaseVNode("div", _hoisted_223, [
      _hoisted_224,
      createBaseVNode("p", null, [
        createTextVNode("If you use an older version of Node.js that doesn't support the Watch mode, you can use the npm package "),
        createBaseVNode("a", _hoisted_225, [
          createTextVNode("nodemon"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" to get the same functionality. But better to use Watch mode these days.")
      ])
    ]),
    _hoisted_226,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Read/View the following lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/sop-and-cors/" }, {
              default: withCtx(() => [
                createTextVNode("Same-Origin Policy and Cross-Origin Resource Sharing")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/ajax/" }, {
              default: withCtx(() => [
                createTextVNode("AJAX")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_233,
    createBaseVNode("p", null, [
      createTextVNode("In this part, the goal is to use Docker and Docker Compose to get your frontend up and running in a container, and then allow the Web Browser to retrieve your SPA from it, and then allow the SPA in the Web Browser to connect to the backend, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Architecture." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart LR\n	wb[Web Browser]\n	db[DB]\n	backend[Backend]\n	frontend[Frontend]\n	pf[Project Folder]\n	subgraph Your Computer\n		subgraph Your OS\n			wb\n		end\n		subgraph Linux\n			subgraph Container 3\n				frontend\n			end\n			subgraph Container 2\n				backend\n			end\n			subgraph Container 1\n				db\n			end\n			pf\n		end\n	end\n	wb--HTTP get SPA-->frontend\n	wb--HTTP from SPA-->backend\n	backend--SQL-->db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_234,
    createBaseVNode("div", _hoisted_240, [
      _hoisted_241,
      createBaseVNode("p", null, [
        createTextVNode('By default, Vite accepts HTTP requests only from the "computer" it runs on (in this case the docker container). So even if you set up port mapping correct, Vite will not send back your SPA when you request it in the web browser. To make that happen, you need to configure Vite to allow such requests. That can be done using the Vite option '),
        createBaseVNode("a", _hoisted_242, [
          createTextVNode("server.host"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". For example, in your "),
        _hoisted_243,
        createTextVNode(" file, use:")
      ]),
      _hoisted_244
    ]),
    _hoisted_245,
    _hoisted_246,
    _hoisted_247,
    _hoisted_248,
    _hoisted_249,
    _hoisted_250,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Read/View the following lectures: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/rest-api-authorization/" }, {
              default: withCtx(() => [
                createTextVNode("REST API Authorization")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/json-web-tokens/" }, {
              default: withCtx(() => [
                createTextVNode("JSON Web Tokens")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/third-party-authentication/" }, {
              default: withCtx(() => [
                createTextVNode("Third Party Authentication")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_251,
    _hoisted_252,
    _hoisted_253,
    _hoisted_254,
    _hoisted_255,
    createBaseVNode("p", null, [
      createTextVNode("Be sure to read through "),
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/project-grading-guidelines/" }, {
        default: withCtx(() => [
          createTextVNode("Project Grading Guidelines")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" to see that you follow the guidelines for the grade you're aiming for. To be able get grade 4 and 5 you also need to implement the extra functionality described next. Make sure to also describe in the report how you have implemented them.")
    ]),
    _hoisted_256,
    _hoisted_257,
    _hoisted_258,
    createBaseVNode("p", null, [
      createTextVNode("Add support for another data format in addition to JSON in your REST API and backend. This should work in both requests and responses, so when you receive a request you need to look at the "),
      _hoisted_259,
      createTextVNode(" header to figure out which format the body in the request is written in, and you also need to look at the "),
      _hoisted_260,
      createTextVNode(" header to figure out in which format you should send back the body in the response in (this is known as "),
      createBaseVNode("a", _hoisted_261, [
        createTextVNode("Content Negotiation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(").")
    ]),
    _hoisted_262,
    _hoisted_263,
    createBaseVNode("p", null, [
      createTextVNode("Try to "),
      createBaseVNode("a", _hoisted_264, [
        createTextVNode("find a suitable npm package"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" doing most of the work for you.")
    ]),
    _hoisted_265,
    createBaseVNode("p", null, [
      createTextVNode("Join one of the "),
      createBaseVNode("a", _hoisted_272, [
        createTextVNode("Project Demonstration Groups"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" on Canvas (first come, first served). Only one in each Project Group should join the Project Demonstration Group you want to join. Which group you join determines when you should demonstrate your work. You will only demonstrate your solution to the other within the same group.")
    ]),
    _hoisted_273,
    createBaseVNode("p", null, [
      createTextVNode("After your demonstration, the teacher there will approve you on the Canvas assignment "),
      createBaseVNode("a", _hoisted_276, [
        createTextVNode("Project Demonstration"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_277,
    createBaseVNode("p", null, [
      createTextVNode("When you're done with your work, upload it to Canvas by submitting the assignment "),
      createBaseVNode("a", _hoisted_278, [
        createTextVNode("Project Submission"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Be sure to follow the submission instructions described on that page.")
    ])
  ]);
}
const projectWork_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "project-work.html.vue"]]);
export {
  projectWork_html as default
};
