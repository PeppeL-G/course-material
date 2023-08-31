import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, g as createCommentVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "lectures",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#lectures",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Lectures")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Here you find the lectures in the course.",
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://ju.instructure.com/files/1121481/download?download_frd=1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://developer.android.com/guide",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Below are some old lectures you "),
    /* @__PURE__ */ createBaseVNode("em", null, "might"),
    /* @__PURE__ */ createTextVNode(" have use of. Feel free to use them if you want, but many of them are in Java and the old way we implemented GUI in Android (not Jetpack Compose), and some of them might be outdated.")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("To help you getting started with the project: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/teamwork/" }, {
              default: withCtx(() => [
                createTextVNode("Teamwork")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/report-writing/" }, {
              default: withCtx(() => [
                createTextVNode("Report Writing")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("To help you getting started with Android development: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/kotlin/" }, {
              default: withCtx(() => [
                createTextVNode("Kotlin")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-introduction/" }, {
              default: withCtx(() => [
                createTextVNode("Android Introduction")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-fundamental-application-components/" }, {
              default: withCtx(() => [
                createTextVNode("Android Fundamental Application Components")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Martins lecture on GUI: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_3, [
              createTextVNode("The slides UI Prototyping for Android"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("Most other things you need to learn for the application you create in your Project Work you can most likely learn from Android's "),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("Developer Guides"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_5,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("Using threads/asynchronous operations: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-asynchronous-operations/" }, {
              default: withCtx(() => [
                createTextVNode("Android Asynchronous Operations")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/kotlin-asynchronous-operations/" }, {
              default: withCtx(() => [
                createTextVNode("Kotlin Asynchronous Operations")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Running in the background: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-services/" }, {
              default: withCtx(() => [
                createTextVNode("Android Services")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-notifications/" }, {
              default: withCtx(() => [
                createTextVNode("Android Notifications")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Using Cloud Firestore: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/cloud-firestore/" }, {
              default: withCtx(() => [
                createTextVNode("Cloud Firestore")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-cloud-firestore/" }, {
              default: withCtx(() => [
                createTextVNode("Android Cloud Firestore")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("Various: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-bluetooth-classic/" }, {
              default: withCtx(() => [
                createTextVNode("Android Bluetooth Classic")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-broadcast-receivers/" }, {
              default: withCtx(() => [
                createTextVNode("Android Broadcast Receivers")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-content-providers/" }, {
              default: withCtx(() => [
                createTextVNode("Android Content Providers")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, { to: "/lectures/android-file-storage/" }, {
              default: withCtx(() => [
                createTextVNode("Android File Storage")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    createCommentVNode(`



Added at start of Course Week 3:


* Martins Design Lecture:
	* [Recording](https://ju.instructure.com/courses/4825/pages/recordings?module_item_id=166072)
	* [Slides](https://ju.instructure.com/files/726278/download?download_frd=1)
	* [Marvel App](https://marvelapp.com/) (don't forget to checkout their [templates](https://marvelapp.com/sketchpad))
	* [Design Patterns at UI Patterns](https://ui-patterns.com/patterns)
	* [Material Design 3](https://m3.material.io/)
	* [Adobe Color](https://color.adobe.com)





* [Android App Bar](../../lectures/android-app-bar/)
* [Android Permissions](../../lectures/android-permissions/)
* [Android Conditional Resources](../../lectures/android-conditional-resources/)
* [Android CoordinatorLayout](../../lectures/android-coordinator-layout/)
* [Android Backward Compatible](../../lectures/android-backward-compatible/)

Added Course Week 2:

* [Android Backward Compatible](../../lectures/android-backward-compatible/)
* [Martin's Design Lecture #1](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)

<div v-if="false">

* [Android GPS](../../lectures/android-gps/)
* [Android Scheduling](../../lectures/android-scheduling/)
* [Android Content Providers](../../lectures/android-content-providers/)
* [Android File System](../../lectures/android-file-system/)
* [Android Sensors](../../lectures/android-sensors/)
* Android 
* [Android Menus](../../lectures/android-menus/)
* [Android Activities](../../lectures/android-activities/)

* [Android Views and Layouts](../../lectures/android-views-and-layouts/)
* [Android Linear Layouts](../../lectures/android-linear-layout/)
* [Android Constraint Layouts](../../lectures/android-constraint-layout/)
* [Android ListView](../../lectures/android-list-view/)* [Android Runtime Configuration Changes](../../lectures/android-runtime-configuration-changes/)
* [Android Fragment](../../lectures/android-fragments/)
* [Android ViewModel](../../lectures/android-view-model/)
* [Android Bottom Navigation View and Drawer Layout](../../lectures/android-bottom-navigation-view-and-drawer-layout/)
* [Android Dialogs](../../lectures/android-dialogs/)
* [Android RecyclerView](../../lectures/android-recycler-view/)
</div>

`)
  ]);
}
const lectures_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "lectures.html.vue"]]);
export {
  lectures_html as default
};
