import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "amazon-lightsail",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#amazon-lightsail",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Amazon Lightsail")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://aws.amazon.com/lightsail/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = { class: "custom-container danger" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Cloning private a repository from GitHub",
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "560",
    height: "314",
    src: "https://www.youtube.com/embed/s8GuMPwf46g",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="amazon-lightsail.pdf">amazon-lightsail.pdf</a></li><li><a href="amazon-lightsail.pptx">amazon-lightsail.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_10 = {
  href: "https://docs.bitnami.com/aws/infrastructure/nodejs/get-started/get-started/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-connecting-to-linux-unix-instance-using-sftp",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("So, you have implemented a great web application in Node.js, and now you want to have it up and running on the Internet, but how? Let's see how we can make that happen using "),
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Amazon Lightsail"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    createBaseVNode("div", _hoisted_3, [
      _hoisted_4,
      createBaseVNode("p", null, [
        createTextVNode("In the video below, I clone a public repository on GitHub, so I don't need to authenticate myself. If you try to clone a private repository from GitHub, you need to authenticate yourself to GitHub with your GitHub username and a GitHub Personal Access Token (instead of your password). To create a GitHub Personal Access Token, follow the step on GiHub's page "),
        createBaseVNode("a", _hoisted_5, [
          createTextVNode("Creating a personal access token"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", and then use that Personal Access Token when you should enter your GitHub password.")
      ])
    ]),
    _hoisted_6,
    _hoisted_7,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Bitnami's page "),
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("Get started with Node.js"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("Connecting to your Linux or Unix instance in Amazon Lightsail using SFTP"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
