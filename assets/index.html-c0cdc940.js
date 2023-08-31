import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "teamwork",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#teamwork",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Teamwork")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The first time you do a project together with others it can be hard to know how you should work together to be efficient. This lecture contains some recommendations for you to avoid disaster 😃",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "recording",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#recording",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Recording")
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://play.ju.se/media/2022%20Git%20and%20GitHub/0_x0vp7lmi",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2><p>For the lazy ones who don&#39;t want to read all text on this page, here is a short <code>README.md</code> file you can put in your <strong>private</strong> GitHub repository with instructions on how you can work. Feel free to make changes to it to fit your own team better.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Here you write the name of your project/app/solution</span>\nHere you write a short text describing what the project/application/solution is about.\n\n<span class="token title important"><span class="token punctuation">##</span> Run Instructions</span>\n<span class="token list punctuation">1.</span> Here you write\n<span class="token list punctuation">2.</span> reproducible instructions for\n<span class="token list punctuation">3.</span> building and running\n<span class="token list punctuation">4.</span> the application on a brand new computer.\n<span class="token list punctuation">5.</span> First command is probably <span class="token code-snippet code keyword">`git clone XXX`</span>,\n<span class="token list punctuation">6.</span> then <span class="token code-snippet code keyword">`cd XXX`</span>, etc.\n\n<span class="token title important"><span class="token punctuation">##</span> Team Members</span>\n<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Name  </span><span class="token punctuation">|</span><span class="token table-header important"> Roles/Main Responsibilities </span><span class="token punctuation">|</span><span class="token table-header important"> GitHub Name </span><span class="token punctuation">|</span><span class="token table-header important">      Email      </span><span class="token punctuation">|</span><span class="token table-header important">      Phone      </span><span class="token punctuation">|</span>\n</span><span class="token table-line"><span class="token punctuation">|</span><span class="token punctuation">-------</span><span class="token punctuation">|</span><span class="token punctuation">-----------------------------</span><span class="token punctuation">|</span><span class="token punctuation">-------------</span><span class="token punctuation">|</span><span class="token punctuation">-----------------</span><span class="token punctuation">|</span><span class="token punctuation">-----------------</span><span class="token punctuation">|</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> Alice </span><span class="token punctuation">|</span><span class="token table-data"> Bluetooth, Database         </span><span class="token punctuation">|</span><span class="token table-data"> Al Ice      </span><span class="token punctuation">|</span><span class="token table-data"> alice@gmail.com </span><span class="token punctuation">|</span><span class="token table-data"> 070 - 123 45 67 </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data"> Bob   </span><span class="token punctuation">|</span><span class="token table-data"> GUI, UX                     </span><span class="token punctuation">|</span><span class="token table-data"> Bobbo       </span><span class="token punctuation">|</span><span class="token table-data"> bob@hotmail.com </span><span class="token punctuation">|</span><span class="token table-data"> 073 - 123 45 67 </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">  ...  </span><span class="token punctuation">|</span><span class="token table-data"> ...                         </span><span class="token punctuation">|</span><span class="token table-data"> ...         </span><span class="token punctuation">|</span><span class="token table-data"> ...             </span><span class="token punctuation">|</span><span class="token table-data"> ...             </span><span class="token punctuation">|</span>\n</span></span>\n<span class="token title important"><span class="token punctuation">##</span> Development Instructions</span>\nTo implement a new feature:\n\n<span class="token list punctuation">1.</span> Create a GitHub issue describing the feature\n<span class="token list punctuation">2.</span> When you start implementing the feature:\n  <span class="token list punctuation">1.</span> Assign the issue to yourself\n  <span class="token list punctuation">2.</span> Create a new branch from the <span class="token code-snippet code keyword">`master`</span> branch with the name <span class="token code-snippet code keyword">`feature-XXX`</span>, where <span class="token code-snippet code keyword">`XXX`</span> is the id of the issue, and implement the feature in the new branch\n<span class="token list punctuation">3.</span> Use the issue to discuss the feature with others (use @mention functionality)\n<span class="token list punctuation">4.</span> When you are done and have pushed your branch to the remote repository, create a pull request all team members need to approve to merge it into the <span class="token code-snippet code keyword">`master`</span> branch\n  <span class="token list punctuation">*</span> If not all approve, fix it according to the feedback you get and the discussions you have\n<span class="token list punctuation">5.</span> When all team members have approved the pull request it will be merged into the <span class="token code-snippet code keyword">`master`</span> branch and part of the latest official version of the application\n<span class="token list punctuation">6.</span> Close the issue\n\n<span class="token title important"><span class="token punctuation">##</span> Meeting Instructions</span>\nWe meet at school 13:00 each Thursday. Alice is responsible for booking a room for us. The protocol for each meeting is:\n\n<span class="token list punctuation">1.</span> Agree on who will be the meeting chairman (good to switch each meeting so you all get some practice)\n<span class="token list punctuation">2.</span> Agree on who will be the meeting secretary (good to switch each meeting so you all get some practice)\n<span class="token list punctuation">3.</span> Ask each team member which tasks they&#39;ve been working on since last meeting and how it&#39;s going\n<span class="token list punctuation">4.</span> Identify new tasks in the project that needs to be completed\n<span class="token list punctuation">5.</span> Assign tasks to team members they should work on til next meeting\n\nEach meeting is documented in a new markdown file named <span class="token code-snippet code keyword">`YYYY-MM-DD.md`</span> (the date of the meeting) and stored in the <span class="token code-snippet code keyword">`meetings/`</span> folder. The following template for the markdown file should be used:\n\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">md</span>\n<span class="token code-block language-md language-md language-md">Meeting date &amp; time: __________________\n\nChairman: __________________\n\nSecretary: ________________\n\nOther present team members: _______________________\n\n<span class="token list punctuation">1.</span> Each team member presented their progress since the previous week:\n    <span class="token list punctuation">*</span> Alice has completed Task X without problem\n    <span class="token list punctuation">*</span> Bob discovered Task Y was much harder than expected because XXX\n    <span class="token list punctuation">*</span> Claire has been sick and couldn&#39;t work on Task Z\n<span class="token list punctuation">2.</span> The following new tasks were identified:\n    <span class="token list punctuation">*</span> When Alice worked on Task X she realized it would be good to have Task U\n    <span class="token list punctuation">*</span> Claire likes animations and thinks it would be good to use that in the project, which is Task V\n    <span class="token list punctuation">*</span> Bob thinks it&#39;s better to divide his Task Y into the sub tasks Y1 and Y2\n<span class="token list punctuation">3.</span> The team members should work on the following tasks til next meeting:\n    <span class="token list punctuation">*</span> Alice should work on Task U\n    <span class="token list punctuation">*</span> Bob should work on Task Y1 (almost done with it now) and Y2\n    <span class="token list punctuation">*</span> Claire should work on Task Z and Task V</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setup-a-teamwork-environment" tabindex="-1"><a class="header-anchor" href="#setup-a-teamwork-environment" aria-hidden="true">#</a> Setup a Teamwork Environment</h2><p>If you are going to work as a team, you have to agree on how to get things done. 3 students working individually without agreeing on what to build, without knowing what the other ones are doing, etc., won&#39;t produce a good final result. So you need to setup some rules for how the team should work, and then all team members need to adapt and follow these rules. <strong>The individuals need to adapt to the team, the team should not adapt to individuals!</strong></p><h3 id="setup-a-file-repository" tabindex="-1"><a class="header-anchor" href="#setup-a-file-repository" aria-hidden="true">#</a> Setup a File Repository</h3><p>A project usually results in many files, such as:</p><ul><li>Reports</li><li>Mockups</li><li>Prototypes</li><li>Source files</li><li>Power Point presentations</li><li>Meeting notes</li><li>Etc.</li></ul><p>It is crucial that all team members have easy access to these files, so everyone easily can read and change them. To share the files with each others, you can try to use something simple as:</p><ul><li>Email the new versions of the files to everybody in the team when you have made changes to them.</li><li>Use Dropbox/OneDrive/Google Drive/Etc. to automatically send the latest version of the files to a server all have access to.</li></ul><p>These ways are tempting to use in the beginning since it&#39;s very easy to get started, <strong>BUT</strong> very soon it will be very hard to keep track of the files, such as when one team member forgets to send an email to everybody, or uses another topic in the email than what you agreed on, or one member introduces a temporary bug while implementing a new feature, and Dropbox automatically sends that file to the server and now the rest of the team members can&#39;t run their code because of this bug 😑</p>', 11);
const _hoisted_16 = { class: "custom-container tip" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Use Git",
  -1
  /* HOISTED */
);
const _hoisted_18 = {
  href: "https://git-scm.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "../../courses/git" },
  "Git",
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Deciding how to share files is one of the first things your team need to agree on, preferably at the very first meeting you have, so everybody knows how to access the notes from the meeting.",
  -1
  /* HOISTED */
);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "communication",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#communication",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Communication")
  ],
  -1
  /* HOISTED */
);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Throughout the project you need to communicate with each other. Sometimes the team needs to take a big decision, and then you need to have one communication channel to use use for that, such as physical meetings. Sometimes a team member needs to inform the others that the team needs to have a physical meeting to take a big decision, and then you need one communication channel for that, such as email or SMS. Sometimes one team member needs to communicate with one other team member to ask questions about code that other team member has written, and then you need one communication channel for that, such as phone or video calls, etc.",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Deciding how you should communicate with each other/which communication channels to use when is something you need to agree on in the beginning of the project too, preferably at the very first meeting you have, so everybody knows how to contact each other.",
  -1
  /* HOISTED */
);
const _hoisted_24 = { class: "custom-container tip" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Use issues in GitHub",
  -1
  /* HOISTED */
);
const _hoisted_26 = {
  href: "https://github.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_27 = {
  href: "https://github.blog/2011-03-23-mention-somebody-they-re-notified/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Don't use issues like a chat, so don't create issues like "),
    /* @__PURE__ */ createBaseVNode("code", null, "Help me Alice"),
    /* @__PURE__ */ createTextVNode(" (the topic of the issue does not reflect what information one can find in the issue), but create an issue about the problem you need help with/want to discuss, such as "),
    /* @__PURE__ */ createBaseVNode("code", null, "Code about XXX needs better documentation"),
    /* @__PURE__ */ createTextVNode(", and then @mention the person who best can help you.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "regular-meetings",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#regular-meetings",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Regular Meetings")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "To get to know each other better and to make sure that each team member has something to work on it's a good idea to have regular meetings (for example Tuesdays 10:00 and Fridays 13:00 each week). This way each team member can quickly update the others on what:",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "The team member has done since the previous meeting"),
    /* @__PURE__ */ createBaseVNode("li", null, "Problems the team member has identified in his work since the previous meeting"),
    /* @__PURE__ */ createBaseVNode("li", null, "What the team member intends to work on until next meeting")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "In the beginning of the project it's good to have many small meetings (maybe every second day) since there's usually not much to do in the beginning for most team members (few tasks to do, and they are usually sequential). The second or third week there are usually more tasks that can be completed in parallel, and you can start having the meetings more rarely (maybe once a week). You decide how you want to do it.",
  -1
  /* HOISTED */
);
const _hoisted_33 = { class: "custom-container tip" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Document your meetings in the repository",
  -1
  /* HOISTED */
);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "We recommend you to have physical meetings every now and then (at least once each week in the beginning) to get to know each other better and have more efficient discussions. At each meeting, appoint a chairman and a secretary. The secretary should document all discussions and decisions taken at the meeting in a file (for example a Markdown file), which then is stored in your repository. This way, team members who can't attend the meeting can easily catch up, and if someone forgets what was said or disagree with what you have decided can go back and look in the file to recall.",
  -1
  /* HOISTED */
);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-markdown line-numbers-mode",
    "data-ext": "md"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-markdown" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "1."),
        /* @__PURE__ */ createTextVNode(" Agree on who will be the meeting chairman (good to switch each meeting so you all get some practice)\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "2."),
        /* @__PURE__ */ createTextVNode(" Agree on who will be the meeting secretary (good to switch each meeting so you all get some practice)\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "3."),
        /* @__PURE__ */ createTextVNode(" Ask each team member which tasks they've been working on since the last meeting and how it's going\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "4."),
        /* @__PURE__ */ createTextVNode(" Identify new tasks in the project that needs to be completed\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "5."),
        /* @__PURE__ */ createTextVNode(" Assign tasks to team members they should work on til next meeting\n\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-markdown line-numbers-mode",
    "data-ext": "md"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-markdown" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode("Meeting date & time: __________________\n\nChairman: __________________\n\nSecretary: ________________\n\nOther present team members: _______________________\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "1."),
        /* @__PURE__ */ createTextVNode(" Each team member presented their progress since the previous week:\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Alice has completed Task X without problem\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Bob discovered Task Y was much harder than expected because XXX\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Claire has been sick and couldn't work on Task Z\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "2."),
        /* @__PURE__ */ createTextVNode(" The following new tasks were identified:\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" When Alice worked on Task X she realized it would be good to have Task U\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Claire likes animations and thinks it would be good to use that in the project, which is Task V\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Bob thinks it's better to divide his Task Y into the sub tasks Y1 and Y2\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "3."),
        /* @__PURE__ */ createTextVNode(" The team members should work on the following tasks til next meeting:\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Alice should work on Task U\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Bob should work on Task Y1 (almost done with it now) and Y2\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "-"),
        /* @__PURE__ */ createTextVNode(" Claire should work on Task Z and Task V\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token list punctuation" }, "4."),
        /* @__PURE__ */ createTextVNode(" Next meeting is YYYY-MM-DD HH:MM\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "A meeting protocol like this is valuable for all team members if a conflict should arise in the future. For example, if one student claims another student in the team has not contributed much to the project, the meeting notes together with the commit history and the issue discussions can be used to check what each student actually has contributed with.",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "divide-the-work-into-tasks",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#divide-the-work-into-tasks",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Divide the work into tasks")
  ],
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "When you have set up a Teamwork Environment you are ready to start implementing the application in the project. It's usually a bad idea that the entire team works on one and the same problem. For example, if you are 4 team members and you need to design your database, it's enough if just one team member works on that; there's no need for the other 3 team members to work on this task too. If they do, they'll most likely just sit and watch and waste their time watching the fourth member draw the database diagram instead of contributing to the project. So, to be efficient, it's crucial to divide the work among the team members.",
  -1
  /* HOISTED */
);
const _hoisted_41 = /* @__PURE__ */ createStaticVNode('<p>How the work is divided into these tasks depends on what type of project it is, so it differs quite a lot from project to project. If you don&#39;t know how to do it, then an excellent first task that can be assigned to a team member is <em>Divide the project into multiple smaller tasks</em> 😃 When you implement an application, each feature the application needs to contain can usually be expressed as a task (i.e. <em>Implement feature X</em>, like <em>Implement the guestbook page, which lists all guestbook posts users have written</em>).</p><div class="custom-container tip"><p class="custom-container-title">Working on the same task</p><p>For some tasks it can make sense for all team members to individually work on the same task independently of each other at the same time. For example, if the task is <em>Design the graphical user interface of the app</em>, it&#39;s not uncommon to test multiple different designs, and then go with the one that seems most promising. Here, each team member can come up with their own design, and then you can have a meeting where you present your designs to each other and discuss which one is the best.</p></div><h3 id="parallel-tasks" tabindex="-1"><a class="header-anchor" href="#parallel-tasks" aria-hidden="true">#</a> Parallel tasks</h3>', 3);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Implement the guestbook page",
  -1
  /* HOISTED */
);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Implement the contact page",
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "sequential-tasks",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#sequential-tasks",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Sequential tasks")
  ],
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "So, with sequential tasks you will just be less flexible with when you can work on the task, but overall sequential tasks shouldn't take much longer time to complete than parallel tasks.",
  -1
  /* HOISTED */
);
const _hoisted_48 = {
  href: "https://en.wikipedia.org/wiki/Gantt_chart",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "To encourage team members to complete their tasks it's a good idea to estimate how long time each task should take to complete and assign the task a deadline (you can do this together at your regular meetings). If the team member that has been assigned the task hasn't completed it before the deadline he needs to explain to the rest of the team why it takes him such a long time, and if he can't give a reasonable explanation he has probably just been lazy.",
  -1
  /* HOISTED */
);
const _hoisted_50 = { class: "custom-container tip" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Document your tasks as issues in GitHub",
  -1
  /* HOISTED */
);
const _hoisted_52 = {
  href: "https://guides.github.com/features/issues/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Document which tasks you have"),
    /* @__PURE__ */ createBaseVNode("li", null, "Assign a team member to be responsible for carrying out a task"),
    /* @__PURE__ */ createBaseVNode("li", null, "Document discussions and details about tasks in the issues"),
    /* @__PURE__ */ createBaseVNode("li", null, "Mark tasks as completed when they have been carried out by closing the issues")
  ],
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "verify-each-others-work",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#verify-each-others-work",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Verify each others' work")
  ],
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Even though individual team members have only worked on a small part of the project/the app, the team is still responsible for the entire project together. Therefore you'll want to verify that the work other team members have done has been done properly. This can be done at your regular meetings: when a team member has completed a task, ask him to explain how he has completed the task, and check if he can answer questions about it. For example, if one team member has been assigned the task to design the graphical user interface of an application, ask him questions like:",
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Why did you put that link in the menu and not at place X?"),
    /* @__PURE__ */ createBaseVNode("li", null, "Why is the background color blue?"),
    /* @__PURE__ */ createBaseVNode("li", null, "Etc.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "If he can't answer these questions, then he hasn't thought about them and he can improve his work by thinking about them and then re-design the graphical user interface.",
  -1
  /* HOISTED */
);
const _hoisted_58 = { class: "custom-container tip" };
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Use Code reviews in GitHub",
  -1
  /* HOISTED */
);
const _hoisted_60 = {
  href: "https://github.com/features/code-review/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "ol",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "When starting to work on a new task, create a new branch"),
    /* @__PURE__ */ createBaseVNode("li", null, "Carry out the task (i.e. implement the new feature) in the new branch"),
    /* @__PURE__ */ createBaseVNode("li", null, "Push the branch to the remote repository"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("On GitHub, create a pull request to merge the changes in the new branch into the "),
      /* @__PURE__ */ createBaseVNode("code", null, "main"),
      /* @__PURE__ */ createTextVNode("/"),
      /* @__PURE__ */ createBaseVNode("code", null, "master"),
      /* @__PURE__ */ createTextVNode(" branch")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, "When all team members have approved the request (after reviewing the code), apply the pull request")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = {
  href: "https://docs.github.com/en/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_63 = /* @__PURE__ */ createStaticVNode('<h2 id="use-roles-responsibilities" tabindex="-1"><a class="header-anchor" href="#use-roles-responsibilities" aria-hidden="true">#</a> Use Roles/Responsibilities</h2><p>Optimally, all team members should know everything about the project/the application implementation (such as the code). In practice that&#39;s usually not possible. The application is often too big for that, and one of the points with dividing the project into tasks is so that each team member can work on her own part of the project without knowing/without having to worry about the details in other parts of the project others are working on.</p><p>To be more productive, one can assign each team member a role, and that team member is then responsible for knowing all there is to know that is associated with that role. For example, one team member might be responsible for designing the graphical user interface and implementing the overall layout of the application (i.e. the role <em>GUI expert</em>), another team member might be responsible for designing the structure of the database and write an API the application can use to communicate with it (i.e. the role <em>Database expert</em>), a third team member might be responsible for learning Bluetooth and write an API the application can use to communicate with other devices using Bluetooth (i.e. the role <em>Bluetooth expert</em>), etc.</p><p>To have a role does not mean only that team member should work on tasks that are associated with that role. For example, the team member who is responsible for the database should not carry out all tasks that involves the database. Instead, this team member should be considered to be the database expert. This team member will probably do most of the work that involves the database (such as designing the structure of the database and to start implement the API one can use to communicate with it), but once the basics for this are done, any other team member should be able to work on tasks that involves making small changes to the database structure or the database API. If in doubt of how to do it, one can discuss the details with the database expert.</p><div class="custom-container tip"><p class="custom-container-title">Give different team members different roles/responsibilities</p><p>We recommend you to assign each team member one or more roles, so you specialize in different parts of the application. In the end, all students must know how all the code works, but it is OK if just one student is an expert and learn all there is to know about a technology, and then teaches the rest of the team members how your application makes use of that technology in best way possible.</p></div><h2 id="learn-first-implement-then" tabindex="-1"><a class="header-anchor" href="#learn-first-implement-then" aria-hidden="true">#</a> Learn first, implement then</h2><p>Projects carried out by students are not 100% the same as projects carried out by professionals. If a professional project manager puts together a team of her choice, she&#39;ll probably pick an experienced database manager to work on the database in the project, an experienced web developer to work on the website in the project, an experienced Android developer to work on the Android application in the project, etc. These experienced workers already know the area they are responsible for in the project, so it&#39;s quite straight forward for them to contribute with their parts to the project.</p><p>Students on the other hand are not experienced professionals. Often they don&#39;t know the subject they are responsible for in the project in advance, and first need to learn the subject and then implement the part they are responsible for. This is of course much harder! It might feel a bit unfair, but remember that students have more time to work on their projects than what professionals do, and the reason for this is of course so that students can learn the subject at the same time, so it&#39;s not as bad as it first might seem.</p><div class="custom-container warning"><p class="custom-container-title">It&#39;s hard to be a professional too!</p><p>Sometimes professionals need to learn the subject as they work on the project too. It&#39;s not uncommon that one person suddenly stops working on a project at a company (maybe that person got sick, got a new job, or maybe got hit by a car and unexpectedly died), and it&#39;s not uncommon that the boss then re-assigns that person&#39;s duties to other workers at the company, even though if it&#39;s not their area of expertise (they need someone working on it, and hiring a new guy takes time).</p></div><p>Some students try to learn the subject and apply it in the project at the same time. This is usually a bad idea; the first time you use something you rarely use it the correct way, and it will be confusing for the other team members if you redo your tasks many times just because you didn&#39;t knew how to do it properly the first time. Therefor it&#39;s better if each team member has her own <em>practice project</em> of some kind she can use to really learn the subject, and then apply it to the real project when she has experience of the subject. It might feel like a waste of time, but it&#39;s not: what will take most time is to learn the subject; to implement something when you already know the subject takes very little time.</p><div class="custom-container tip"><p class="custom-container-title">Learn first, implement then</p><p>We strongly recommend students to first try to use something new they have learned in their own practice applications, and then, when they have learned how to use it properly, go ahead and use it in the project.</p></div>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      createTextVNode("For those who want to see how Git, GitHub and the workflow described in this lecture can be used in practice in an Android project can look at "),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("this video"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" from previous year.")
    ]),
    _hoisted_5,
    createBaseVNode("div", _hoisted_16, [
      _hoisted_17,
      createBaseVNode("p", null, [
        createTextVNode("We recommend you to use a proper Version Control System, such as "),
        createBaseVNode("a", _hoisted_18, [
          createTextVNode("Git"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", to share your files with each other. In addition to have been designed to be used by users who need to share files with each other, it is standard to use a Version Control System in the industry, so just as good for you to learn how to use one already now. We recommend that you use Git (see the mini-course "),
        _hoisted_19,
        createTextVNode(" for a small introduction), but you may use whichever Version Control System you want.")
      ])
    ]),
    _hoisted_20,
    _hoisted_21,
    _hoisted_22,
    _hoisted_23,
    createBaseVNode("div", _hoisted_24, [
      _hoisted_25,
      createBaseVNode("p", null, [
        createTextVNode("We recommend you to use issues in a "),
        createBaseVNode("a", _hoisted_26, [
          createTextVNode("GitHub"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" repository to communicate with each other. This way, all your communication and decisions will be documented, searchable, and available to everybody in the team, and you can easily "),
        createBaseVNode("a", _hoisted_27, [
          createTextVNode("@mention"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" your team members to notify them when their input is needed.")
      ]),
      _hoisted_28
    ]),
    _hoisted_29,
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    createBaseVNode("div", _hoisted_33, [
      _hoisted_34,
      _hoisted_35,
      createVNode(_component_FigureNumber),
      createTextVNode(" below contains a minimal meeting protocol you can use at your meetings (feel free to adopt it to your team)."),
      createVNode(_component_Figure, { caption: "Example of meeting protocol." }, {
        default: withCtx(() => [
          _hoisted_36
        ]),
        _: 1
        /* STABLE */
      }),
      createBaseVNode("p", null, [
        createTextVNode("The meeting notes produced by the secretary could be as simple as the ones shown in "),
        createVNode(_component_FigureNumber),
        createTextVNode(" below.")
      ]),
      createVNode(_component_Figure, { caption: "Example of meeting notes." }, {
        default: withCtx(() => [
          _hoisted_37
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_38
    ]),
    _hoisted_39,
    _hoisted_40,
    createBaseVNode("p", null, [
      createTextVNode("So, don't view the project as one big thing, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "The entire project." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TB\n	Project\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      createTextVNode("Instead, view the project as a collection of tasks that needs to be completed, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below. When all tasks have been completed, the entire project has been completed. This way, each team member can then work on her own well-defined task, and contribute that way.")
    ]),
    createVNode(_component_Figure, { caption: "Dividing the project into multiple smaller tasks." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n    subgraph Project\n        a[Task A]\n        b[Task B]\n        c[Task C]\n        d[Task D]\n    end\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_41,
    createBaseVNode("p", null, [
      createTextVNode("In best case you'll manage to divide the work into multiple tasks that can be completed in parallel. That's great, because then all team members have different tasks to work on at the same time. For example, on a website, Alice can "),
      _hoisted_44,
      createTextVNode(" and Bob can "),
      _hoisted_45,
      createTextVNode(" in parallel because these tasks are independent of each other, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: 'Example of parallel tasks ("Implement the guestbook page" and "Implement the contact page").' }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TB\n    subgraph Website Project\n        a[Create the layout]\n        b1[Implement the guestbook page]\n        b2[Implement the contact page]\n        c[Deliver website to customer]\n        a-->b1-->c\n        a-->b2-->c\n    end\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_46,
    createBaseVNode("p", null, [
      createTextVNode("Sometimes you have tasks that must be completed in order, i.e. Task 1 must be completed before Task 2 can be started, and Task 2 must be completed before Task 3 can be started, and so on. An example of that is a website with a blog users can write comments on. Alice is responsible for implementing the blog page, and Bob is responsible for implementing the comment functionality on the blog posts. Bob can't start working on his task until Alice has completed her task, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Example of sequential tasks (all of them)." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TB\n    subgraph Website Project\n        a[Create the layout]\n        b[Implement blog functionality]\n        c[Implement comment on blogposts functionality]\n        d[Deliver website to customer]\n        a-->b-->c-->d\n    end\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      createTextVNode("Now Alice and Bob can't work at the same time, but this is still manageable. When Alice and Bob work they probably don't spend 100% of their work time on the project (they have other things to do too, like other projects to work on, or, if you are a student, other courses to work on). For example, if Alice and Bob could work on their tasks in parallel, they might need 4 days to complete all tasks, but they complete them during 8 days anyway, because they work on other stuff during those 8 days too, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Alice and Bob working on parallel tasks (and other projects (not shown)) independently of each other." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngantt\n    title Alice's and Bob's work hours in the project\n    dateFormat  YYYY-MM-DD\n    section Alice\n    Task A1           :2021-01-01, 1d\n    Task A2           :2021-01-03, 1d\n    Task A3           :2021-01-06, 1d\n    Task A4           :2021-01-08, 1d\n    section Bob\n    Task B1      :2021-01-01, 1d\n    Task B2      :2021-01-04, 1d\n    Task B3      :2021-01-05, 1d\n    Task B4      :2021-01-06, 1d\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      createTextVNode("For sequential tasks that needs to be completed in order, such as Alice has to complete her tasks before Bob can start working on his tasks, Alice probably needs to work 100% on her tasks the first days, and then Bob needs to work 100% on his tasks after that, as shown in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below, and they will then have completed all their tasks within the same amount of time as when they could work on the tasks in parallel.")
    ]),
    createVNode(_component_Figure, { caption: "Alice and Bob working on sequential tasks in the project, so they need to coordinate when to work on this project, and when to work on other projects." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngantt\n    title Alice's and Bob's work hours in the project\n    dateFormat  YYYY-MM-DD\n    section Alice\n    Task A1           :2021-01-01, 1d\n    Task A2           :2021-01-02, 1d\n    Task A3           :2021-01-03, 1d\n    Task A4           :2021-01-04, 1d\n    section Bob\n    Task B1      :2021-01-05, 1d\n    Task B2      :2021-01-06, 1d\n    Task B3      :2021-01-07, 1d\n    Task B4      :2021-01-08, 1d\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_47,
    createBaseVNode("p", null, [
      createTextVNode("Big and really serious projects can take this one step further and use a "),
      createBaseVNode("a", _hoisted_48, [
        createTextVNode("Gantt Chart"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to help them estimate how long time it will take until the project is finished.")
    ]),
    _hoisted_49,
    createVNode(_component_FigureNumber),
    createTextVNode(" below shows an example of tasks identified in a bigger project. At the start of the project it can be hard to identify all tasks, and the goal of the project will also sometimes change while you work on it, so it's not uncommon that tasks are added to/removed from the project as it progresses."),
    createVNode(_component_Figure, { caption: "Example of tasks in a bigger project." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n    subgraph Website Project\n        start1[Create database]\n        start2[Create website layout]\n        a1[Create blogposts table in DB]\n        a2a[Add create blogpost page]\n        a2b[Add show blogpost page]\n        a2c[Add edit blogpost page]\n        a2d[Add delete blogpost page]\n        b1[Create guestbookPosts table in DB]\n        b2a[Add create guestbook post page]\n        b2b[Add show guestbook posts page]\n        stop[Deliver to customer]\n        start1-->a1\n        start1-->b1\n        a1-->a2a\n        a1-->a2b\n        a1-->a2c\n        a1-->a2d\n        b1-->b2a\n        b1-->b2b\n        start2-->a2a\n        start2-->a2b\n        start2-->a2c\n        start2-->a2d\n        start2-->b2a\n        start2-->b2b\n        a2a-->stop\n        a2b-->stop\n        a2c-->stop\n        a2d-->stop\n        b2a-->stop\n        b2b-->stop\n    end\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createVNode(_component_FigureNumber, { previous: "" }),
    createTextVNode(" above is also a good example of that in the beginning of a project, there aren't many parallel tasks to work on, but that quickly changes."),
    createBaseVNode("div", _hoisted_50, [
      _hoisted_51,
      createBaseVNode("p", null, [
        createTextVNode("We recommend you to use "),
        createBaseVNode("a", _hoisted_52, [
          createTextVNode("GitHub issues"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" to keep track of which tasks you have. This way, you can easily:")
      ]),
      _hoisted_53
    ]),
    _hoisted_54,
    _hoisted_55,
    _hoisted_56,
    _hoisted_57,
    createBaseVNode("div", _hoisted_58, [
      _hoisted_59,
      createBaseVNode("p", null, [
        createTextVNode("We recommend you to use "),
        createBaseVNode("a", _hoisted_60, [
          createTextVNode("Code Reviews in GitHub"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(":")
      ]),
      _hoisted_61,
      createBaseVNode("p", null, [
        createTextVNode("GitHub has support for "),
        createBaseVNode("a", _hoisted_62, [
          createTextVNode("only accepting code that has been approved by others"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". We strongly recommend you to use that.")
      ])
    ]),
    _hoisted_63
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
