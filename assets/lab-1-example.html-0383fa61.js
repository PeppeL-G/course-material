import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, b as createTextVNode, e as withCtx, a as createBaseVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _imports_0 = "/course-material/assets/lab-1-use-case-diagram-7795e9f1.jpeg";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="lab-1-example" tabindex="-1"><a class="header-anchor" href="#lab-1-example" aria-hidden="true">#</a> Lab 1 Example</h1><p>Here&#39;s a short example of another system designed in a similar way as described in Lab 1. The system here is a simple Ping Pong game (each user is expected to have their own instance of the system) users can play either against each other (over Bluetooth) or the computer . There&#39;s also a highscore system for playing against the computer, and there should exists three different level of difficulties (easy, medium and hard) on the computer.</p><h2 id="actors" tabindex="-1"><a class="header-anchor" href="#actors" aria-hidden="true">#</a> Actors</h2><ul><li>User (Primary)</li></ul><h2 id="goals" tabindex="-1"><a class="header-anchor" href="#goals" aria-hidden="true">#</a> Goals</h2><table><thead><tr><th>Actor</th><th>Goal</th></tr></thead><tbody><tr><td>User</td><td>Play VS Computer</td></tr><tr><td>User</td><td>Submit Highscore</td></tr><tr><td>User</td><td>View Highscores</td></tr><tr><td>User</td><td>Play VS Player as Host</td></tr><tr><td>User</td><td>Play VS Player as Joiner</td></tr></tbody></table><h2 id="use-case-diagram" tabindex="-1"><a class="header-anchor" href="#use-case-diagram" aria-hidden="true">#</a> Use-Case Diagram</h2>', 7);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: _imports_0,
    alt: "Use-case diagram of the Ping Pong Game (System under Design)."
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<h2 id="brief-descriptions" tabindex="-1"><a class="header-anchor" href="#brief-descriptions" aria-hidden="true">#</a> Brief Descriptions</h2><p>Below are brief descriptions of all use-cases.</p><h3 id="play-vs-computer" tabindex="-1"><a class="header-anchor" href="#play-vs-computer" aria-hidden="true">#</a> Play VS Computer</h3><p>The user selects the option to play VS the computer. The user selects the game difficulty, and then the game starts.</p><h3 id="submit-highscore" tabindex="-1"><a class="header-anchor" href="#submit-highscore" aria-hidden="true">#</a> Submit Highscore</h3><p>The user <u>Play VS Computer</u>. After the game the user tells the system she wants to add her score to the highscore list together with her name (which she enters).</p><h3 id="view-highscore" tabindex="-1"><a class="header-anchor" href="#view-highscore" aria-hidden="true">#</a> View Highscore</h3><p>The user selects the option to view the highscore. The user is then presented the top 10 highscores and names in the game.</p><h3 id="play-vs-player-as-host" tabindex="-1"><a class="header-anchor" href="#play-vs-player-as-host" aria-hidden="true">#</a> Play VS Player as Host</h3><p>The user selects the option to play VS another player as the host. The user sees a list of nearby devices that want to <u> VS Player as Joiner</u>. The user selects one of them, and then the game starts.</p><h3 id="play-vs-player-as-joiner" tabindex="-1"><a class="header-anchor" href="#play-vs-player-as-joiner" aria-hidden="true">#</a> Play VS Player as Joiner</h3><p>The user selects the option to join a <u> VS Player as Host</u> game. The system waits till another device hosting a game accepts playing against this user, then the game starts.</p><h2 id="fully-dressed" tabindex="-1"><a class="header-anchor" href="#fully-dressed" aria-hidden="true">#</a> Fully Dressed</h2><table><tr><th>Use-Case Name</th><td>Play VS Player as Host</td></tr><tr><th>Scope</th><td>The Ping Pong Game</td></tr><tr><th>Level</th><td>User-goal</td></tr><tr><th>Primary Actor</th><td>User</td></tr><tr><th>Stakeholders and Interests</th><td><ul><li><b>User</b>, wants to play the game against another user.</li></ul></td></tr><tr><th>Preconditions</th><td><ul><li>Two different devices running the system.</li><li>Both devices must support Bluetooth.</li><li>Both devices must be close to each other.</li><li>Bluetooth may not be used for anything else on the devices.</li></ul></td></tr><tr><th>Success Guarantee</th><td>The game has been played on both systems over Bluetooth.</td></tr><tr><th>Main Success Scenario</th><td><ol><li>The user selects the option to play against another player as the host.</li><li>The system tells the user to turn on Bluetooth on the device.</li><li>The user turns on Bluetooth on the device.</li><li>The system shows a list to the user of nearby Bluetooth devices that are trying to <u>Play VS Player as Joiner</u> (updated continuously).</li><li>The user selects the Bluetooth device she wants to play against.</li><li>The device connects to the selected device using Bluetooth.</li><li>The game starts.</li></ol></td></tr><tr><th>Extentions</th><td><ul style="list-style-type:none;padding-left:0;"><li> 2a. Bluetooth is already turned on. <ol style="margin-left:16px;"><li>Continue to 4.</li></ol></li><li> 4a. No nearby devices found. <ol style="margin-left:16px;"><li>Don&#39;t show an empty list, tell the user the system is searching for nearby devices, show the list when at least 1 device has been found.</li></ol></li><li> 6a. Can&#39;t connect to selected device. <ol style="margin-left:16px;"><li>Show an error message to the user.</li><li>Take the user back to 4.</li></ol></li></ul></td></tr><tr><th>Special Requirements</th><td>The devices must support Bluetooth</td></tr><tr><th>Technology and Data Variations List</th><td><ul><li>Bluetooth</li><li>The protocol PPP (the Ping Pong Protocol) specifies which commands that are sent between the devices.</li></ul></td></tr><tr><th>Frequency of Occurrence</th><td>At most one at a time.</td></tr><tr><th>Miscellaneous</th><td><ul><li>Need to specify which Bluetooth version to support.</li><li>Strong connection to the use-case <u>Play VS Player as Joiner</u></li></ul></td></tr></table><h2 id="sequence-diagram" tabindex="-1"><a class="header-anchor" href="#sequence-diagram" aria-hidden="true">#</a> Sequence Diagram</h2>', 15);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "u",
  null,
  "Play VS Player as Host",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_FigureNumber),
    createTextVNode(" below shows a use-case diagram of the Ping Pong Game (System under Design)."),
    createVNode(_component_Figure, { caption: "Use-case diagram of the Ping Pong Game (System under Design)." }, {
      default: withCtx(() => [
        _hoisted_8
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_9,
    createBaseVNode("p", null, [
      createTextVNode("A sequence diagram for "),
      _hoisted_24,
      createTextVNode(" is found in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "Sequence diagram for Play VS Player as Host." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n	participant User\n	participant Device\n	User->>Device: Play Bluetooth game as host\n	Device->>User: Please turn on Bluetooth\n	User->>Device: Turn on Bluetooth\n	loop Until the user selects device\n		Device->>Device: Search for devices\n		Device->>User: Found devices\n	end\n	User->>Device: Selected device\n	Device->>Device: Connect to selected device\n	Device->>User: Play!\n" })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const lab1Example_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "lab-1-example.html.vue"]]);
export {
  lab1Example_html as default
};
