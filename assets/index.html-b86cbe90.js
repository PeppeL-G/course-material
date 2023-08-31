import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "docker-basics",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#docker-basics",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Docker Basics")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Dockerization is a development method that's getting more and more popular, especially for solutions consisting of multiple applications, such as a website consisting of a web application and a database (and possibly a storage service, a frontend application of some kind, an email service, etc.). To run such a solution on your own computer (e.g. for development), you need to have all applications up and running and all of their dependencies installed, which is not easy nor convenient to setup. But with Docker, each application the solution consists of will run in it's own container together will all dependencies required to run it, and Docker also provides convenient methods for these applications to communicate with each other, so getting a Dockerized solution up and running on your own computer is a piece of cake once you have downloaded and installed Docker.",
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "custom-container danger" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Use Docker Desktop for Windows!",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When this lecture was recorded, there was a legacy version of Docker called "),
    /* @__PURE__ */ createBaseVNode("em", null, "Docker Toolbox"),
    /* @__PURE__ */ createTextVNode(", and a newer version of Docker called "),
    /* @__PURE__ */ createBaseVNode("em", null, "Docker Desktop for Windows"),
    /* @__PURE__ */ createTextVNode(". Using the newer version is of course better, but it couldn't be used on computers running Windows 10 Home, which most students had.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = {
  href: "https://www.docker.com/blog/docker-desktop-for-windows-home-is-here/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Windows Subsystem for Linux",
  -1
  /* HOISTED */
);
const _hoisted_8 = {
  href: "https://docs.docker.com/desktop/windows/wsl/#best-practices",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container danger" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "A bit outdated..."),
    /* @__PURE__ */ createBaseVNode("p", null, "This recorded lecture is a little bit outdated. It can still be used as an introduction to Docker, but you will probably learn more up-to-date about Docker by attending the tutorial covering Docker.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/1JwJnqUf-kU",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="docker-basics.pdf">docker-basics.pdf</a></li><li><a href="docker-basics.pptx">docker-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_14 = {
  href: "https://www.reddit.com/r/docker/comments/qm39p8/my_wife_explaining_containers_to_my_mother_in_law/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = {
  href: "https://docs.docker.com/get-started/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Part 1: Getting started"),
    /* @__PURE__ */ createBaseVNode("li", null, "Part 2: Sample application"),
    /* @__PURE__ */ createBaseVNode("li", null, "Part 3: Update the application"),
    /* @__PURE__ */ createBaseVNode("li", null, "Part 5: Persist the DB"),
    /* @__PURE__ */ createBaseVNode("li", null, "Part 6: Use bind mounts"),
    /* @__PURE__ */ createBaseVNode("li", null, "Part 7: Multi-container apps"),
    /* @__PURE__ */ createBaseVNode("li", null, "Part 8: Use Docker Compose"),
    /* @__PURE__ */ createBaseVNode("li", null, "Part 9: Image-building best practices")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = {
  href: "https://www.opencontainers.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Not that interesting for you to read, but do be aware of its existence")
  ],
  -1
  /* HOISTED */
);
const _hoisted_19 = {
  href: "https://stackoverflow.com/q/16047306/2104665",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      _hoisted_4,
      _hoisted_5,
      createBaseVNode("p", null, [
        createTextVNode("In March 2020, "),
        createBaseVNode("a", _hoisted_6, [
          createTextVNode("Docker released a new version of Docker Desktop for Windows"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" that also works on Windows 10 Home using "),
        _hoisted_7,
        createTextVNode(". So nowadays all Windows users can use Docker Desktop for Windows, and forget about Docker Toolbox.")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("When using Docker through Windows Subsystem for Linux, it's better to place your docker projects on the file system for the Linux distribution you are running (e.g. Ubuntu), and run docker through the Linux distribution, instead of using the PowerShell in Windows (for details, see "),
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("Docker Desktop WSL 2 backend Best practices"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(").")
      ])
    ]),
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Simplest explanation possible of containers: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_14, [
              createTextVNode("My wife explaining containers to my mother in law"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_15, [
          createTextVNode("Guides --> Get Started"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_16
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_17, [
          createTextVNode("Open Container Initiative"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_18
      ]),
      createBaseVNode("li", null, [
        createTextVNode("If you want to learn the details of how Docker differs from virtual machines (not needed for this course): "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_19, [
              createTextVNode("How is Docker different from a virtual machine?"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
