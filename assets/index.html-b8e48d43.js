import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "internet",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#internet",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Internet")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("You have probably heard about and used "),
    /* @__PURE__ */ createBaseVNode("em", null, "the Internet"),
    /* @__PURE__ */ createTextVNode(", but what is it really? And how does it differ from "),
    /* @__PURE__ */ createBaseVNode("em", null, "the web"),
    /* @__PURE__ */ createTextVNode("? In this lecture you'll be introduced to what the Internet is and how the basics work.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "iframe",
  {
    width: "640",
    height: "360",
    src: "https://www.youtube.com/embed/Mzs5QMy-mT0",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="internet-basics.pdf">internet-basics.pdf</a></li><li><a href="internet-basics.pptx">internet-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3);
const _hoisted_7 = {
  href: "https://en.wikipedia.org/wiki/Internet",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = {
  href: "https://en.wikipedia.org/wiki/History_of_the_Internet",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = {
  href: "https://en.wikipedia.org/wiki/Internet_Protocol",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://en.wikipedia.org/wiki/IPv6_deployment",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://www.submarinecablemap.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = {
  href: "https://tools.ietf.org/html/rfc791",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "Probably not that interesting nor relevant for you to read, but do be aware of its existence.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "the-internet",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#the-internet",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" The Internet")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "It's not wrong to say that two computers communicate with each other, but it's more accurate to say that it's the applications running on the computers that communicate with each other.",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "the-internet-protocol",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#the-internet-protocol",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" The Internet Protocol")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = {
  href: "https://tools.ietf.org/html/rfc791",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<p>When <code>Computer 1</code> wants to communicate with <code>Computer 2</code> on the Internet, <code>Computer 1</code> will send <code>Computer 2</code> a message. <code>Computer 1</code> will simply send this message to the Internet, and then the Internet is responsible for to somehow deliver the message to <code>Computer 2</code>.</p><h4 id="ip-addresses" tabindex="-1"><a class="header-anchor" href="#ip-addresses" aria-hidden="true">#</a> IP Addresses</h4><p>For the Internet to know which computer to deliver a message to, each computer connected to the Internet needs to have a unique identifier. The unique identifier of the computer that should receive the message needs to be written in the message. These unique identifiers are known as IP addresses. In version 4 of the Internet Protocol, IP addresses have the format <code>A.B.C.E</code>, where each letter is a number between 0 and 255, for example <code>123.92.36.99</code>. Each number can be implemented using 8 bits, so in total there exists (at most) 2⁸×2⁸×2⁸×2⁸ = 255×255×255×255 = 4 294 967 296 IP addresses. As soon as your computer connects to the Internet, Internet will assign your computer a unique IP address other computers can use to send messages to it.</p>', 3);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "A:B:C:D:E:F:G:H",
  -1
  /* HOISTED */
);
const _hoisted_22 = {
  href: "https://simple.wikipedia.org/wiki/Hexadecimal",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "A53D",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "1234:4B36:12D1:AA12:39BE:2543:CCCC:5326",
  -1
  /* HOISTED */
);
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<p>Today the Internet supports both version 4 and version 6 of the Internet Protocol, so it&#39;s common so see IP addresses of both formats.</p><h4 id="packets" tabindex="-1"><a class="header-anchor" href="#packets" aria-hidden="true">#</a> Packets</h4><p>An IP message is called a <em>packet</em>. In a packet, the sender puts her own IP address, the IP address of the receiving computer (and some other meta information we will not get into the details of here) and the message itself (called the payload).</p><h4 id="shortcomings" tabindex="-1"><a class="header-anchor" href="#shortcomings" aria-hidden="true">#</a> Shortcomings</h4><p>The Internet Protocol is a very simple protocol, and as such it contains some shortcomings, some mentioned below. Other protocols built on top of the Internet Protocols tries to deal with these shortcomings.</p><h5 id="no-delivery-guarantee" tabindex="-1"><a class="header-anchor" href="#no-delivery-guarantee" aria-hidden="true">#</a> No delivery guarantee</h5><p>There is no delivery guarantee of the packets. When <code>Computer 1</code> sends <code>Computer 2</code> a packet, it can&#39;t be sure that the Internet actually manages to deliver the packet to <code>Computer 2</code> (maybe <code>Computer 2</code> just disconnected from the Internet, or has trouble with its Internet connection, etc.).</p><h5 id="limited-packet-size" tabindex="-1"><a class="header-anchor" href="#limited-packet-size" aria-hidden="true">#</a> Limited packet size</h5><p>The payload in a packet has a maximum size. For example, you can&#39;t send a 1GB big movie file in a single packet, but instead have to break down the movie file into smaller parts and send each part in a separate packet.</p><h5 id="packets-delivery-order-not-guaranteed" tabindex="-1"><a class="header-anchor" href="#packets-delivery-order-not-guaranteed" aria-hidden="true">#</a> Packets delivery order not guaranteed</h5><p>If <code>Computer 1</code> first sends <code>Packet A</code> and then <code>Packet B</code> to <code>Computer 2</code>, it might very well be that <code>Computer 2</code> receives <code>Packet B</code> before it receives <code>Packet A</code>.</p><h5 id="the-receiving-application-is-not-identified" tabindex="-1"><a class="header-anchor" href="#the-receiving-application-is-not-identified" aria-hidden="true">#</a> The receiving application is not identified</h5><p>An IP packet only identifies which computer the packet should be delivered to. The receiving computer probably have many applications running, and the IP packet doesn&#39;t specify which of them that should handle the packet.</p><h3 id="the-transmission-control-protocol" tabindex="-1"><a class="header-anchor" href="#the-transmission-control-protocol" aria-hidden="true">#</a> The Transmission Control Protocol</h3><p>The Transmission Control Protocol (TCP) is a protocol built on top of the Internet Protocol. We will not go through the details of how it&#39;s implemented here, but just mention some of it&#39;s features.</p><h4 id="delivery-acknowledgement" tabindex="-1"><a class="header-anchor" href="#delivery-acknowledgement" aria-hidden="true">#</a> Delivery acknowledgement</h4><p>In TCP, when <code>Computer 2</code> has received a packet from <code>Computer 1</code>, it should send back a packet to <code>Computer 1</code> to tell <code>Computer 1</code> that it has received the packet. <code>Computer 1</code> will continue to send its packet (with some interval) until it receives that other packet from <code>Computer 2</code> telling it it has received the packet. This way, <code>Computer 1</code> can be sure that <code>Computer 2</code> has received the packet.</p><h4 id="delivery-order" tabindex="-1"><a class="header-anchor" href="#delivery-order" aria-hidden="true">#</a> Delivery order</h4><p>In TCP, when a big message needs to be divided into multiple smaller parts and sent in separate packets, each packet is also assigned a number indicating in which order the parts in the packets should be put together again. This way, it doesn&#39;t matter if the receiving computer receives the packets out of order since the order number in each packet tells it in which order they should be.</p><h4 id="port-numbers" tabindex="-1"><a class="header-anchor" href="#port-numbers" aria-hidden="true">#</a> Port numbers</h4><p>In a TCP packet, the sender also writes a <em>port number</em>. A port number is simply a number between 0 and 65 535. The port number should identify which application running on the receiving computer that should receive the packet. For example, if you build an application that can be used to chat between two computers on the Internet, then all the packets you send can use (for example) the port number 7564, and your application should also tell the computer it runs on to forward all packets it receives with that port number to your application.</p>', 21);
const _hoisted_46 = {
  href: "https://www.iana.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = {
  href: "https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_48 = /* @__PURE__ */ createStaticVNode('<h3 id="the-user-datagram-protocol" tabindex="-1"><a class="header-anchor" href="#the-user-datagram-protocol" aria-hidden="true">#</a> The User Datagram Protocol</h3><p>The downside with TCP is that it makes the communication a bit slower due to the extra things that needs to be done. Sometimes it&#39;s more important to have as little delay as possible instead of having all packets fully delivered. For example, when making a video call to someone, it&#39;s more important to deliver as much information (sound and video) as possible as soon as possible, instead of delivering all the information complete. For example, it&#39;s better to 0.1 seconds delay in sound and video and 75% of the quality instead of having 1 second delay in sound and video and 100% of the quality. So, the User Datagram Protocol (UDP) is a protocol built on top of the Internet Protocol you can use when you need to deliver the packets as fast as possible.</p><p>Just as with TCP, it adds port numbers to the packets to identify which application on the receiving computer that should receive the packet.</p><h3 id="internet-services" tabindex="-1"><a class="header-anchor" href="#internet-services" aria-hidden="true">#</a> Internet Services</h3><p>Using TCP and UDP we can use the Internet and create whichever type of applications we want, but there are some common type of applications that has evolved, and we say that these are available as different services on the Internet. Each service usually use their own protocol that runs on top of TCP or UDP.</p><h4 id="the-world-wide-web" tabindex="-1"><a class="header-anchor" href="#the-world-wide-web" aria-hidden="true">#</a> The World Wide Web</h4>', 6);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "the web",
  -1
  /* HOISTED */
);
const _hoisted_55 = {
  href: "https://tools.ietf.org/html/rfc2616",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "emails",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#emails",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Emails")
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = {
  href: "https://tools.ietf.org/html/rfc5321",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_58 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "file-sharing",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#file-sharing",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" File sharing")
  ],
  -1
  /* HOISTED */
);
const _hoisted_59 = {
  href: "https://tools.ietf.org/html/rfc959",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createStaticVNode('<h4 id="domain-name-system" tabindex="-1"><a class="header-anchor" href="#domain-name-system" aria-hidden="true">#</a> Domain Name System</h4><p>So, when <code>Computer 1</code> wants to send a message to <code>Computer 2</code> on the Internet, <code>Computer 1</code> (or rather the human using <code>Computer 1</code>) needs to know the IP address of <code>Computer 2</code>. We humans are quite bad at remembering numbers, but much better at remembering names. The Domain Name System (DNS) service on the Internet can be used to translate names into IP addresses, so using that one you can register a domain name like <code>my-website.com</code> and map that to the IP address of the computer hosting your website, for example <code>123.123.123.123</code>. Then when a user tries to visit <code>my-website.com</code> in her web browser, her web browser will first use DNS to translate <code>my-website.com</code> to the IP address <code>123.123.123.123</code>, and then use HTTP to connect to <code>123.123.123.123</code>.</p>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("The following Wikipedia articles gives a good overview of the Internet: "),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_7, [
              createTextVNode("Internet"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_8, [
              createTextVNode("History of the Internet"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_9, [
              createTextVNode("Internet Protocol"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_10, [
              createTextVNode("IPv6 deployment"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("submarinecablemap.com"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_12, [
          createTextVNode("Internet Protocol Specification"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_13
      ])
    ]),
    _hoisted_14,
    createBaseVNode("p", null, [
      createTextVNode("The Internet can be seen as a large network that spans across most of the planet (i.e. where people live). This is a simplified view of how it works, but that view is accurate enough for programmers to learn how to create applications using it. By connecting your computer to the Internet, your computer can communicate with other computers connected to the Internet. This is visualized in "),
      createVNode(_component_FigureNumber),
      createTextVNode(" below.")
    ]),
    createVNode(_component_Figure, { caption: "A visualization of the Internet as a large network computers can connect to. Computer 4 is not connected to the network, and hence can't use the Internet to communicate with the other computers." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    i((Internet))\n    c1[Computer 1]---i\n    c2[Computer 2]---i\n    c3[Computer 3]---i\n    i---c5[Computer 5]\n    i---c6[Computer 6]\n    c4[Computer 4]\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_15,
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("How the communication between two computers connected to the Internet works is specified in the "),
      createBaseVNode("a", _hoisted_17, [
        createTextVNode("Internet Protocol"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (IP), which all computers connected to the Internet must understand. But if you want to implement your own application that communicates with an application running on another computer connected to the Internet, you don't need to know that much about how the Internet Protocol works, because most likely you will use one of the many other protocols that has been built on top of the Internet Protocol, but there are some things about the Internet Protocol you must know anyway, since these other protocols use some of the details specified in the Internet Protocol.")
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      createTextVNode("The problem with version 4 of the Internet Protocol is that at most 4 294 967 296 computers can be connected to the Internet at one and the same time. More and more computers get connected to the Internet (game consoles, smartphones, cars, washing machines, etc.), and we are running out of IP addresses! In version 6 of the Internet Protocol they changed the format of the IP addresses to "),
      _hoisted_21,
      createTextVNode(", where each letter is a number between 0 and 65536. Each such number can be implemented using 64 bits, so each number is usually written as 4 "),
      createBaseVNode("a", _hoisted_22, [
        createTextVNode("hexadecimal digits"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", for example "),
      _hoisted_23,
      createTextVNode(". A complete IP version 6 IP address can look like "),
      _hoisted_24,
      createTextVNode(".")
    ]),
    _hoisted_25,
    createBaseVNode("p", null, [
      createTextVNode("There exists some reserved port numbers that identifies applications with a special purpose. For example, web applications using the HTTP protocol always receives packets with port number 80. The "),
      createBaseVNode("a", _hoisted_46, [
        createTextVNode("Internet Assigned Numbers Authority"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (IANA) is responsible for keeping track of and registering new reserved port numbers. In addition to the ones they keep track of, there also exist port numbers that are de facto used by other applications. Wikipedia's page "),
      createBaseVNode("a", _hoisted_47, [
        createTextVNode("List of TCP and UDP port numbers"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" contains more information about this.")
    ]),
    _hoisted_48,
    createBaseVNode("p", null, [
      createTextVNode("Each time you use your web browser you use the World Wide Web (WWW, or simply "),
      _hoisted_54,
      createTextVNode(") service that runs on the Internet. It consists of many computers on the Internet hosting websites (called servers), and when your web browser communicates with one of them, it will do so using the "),
      createBaseVNode("a", _hoisted_55, [
        createTextVNode("HyperText Transfer Protocol"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (HTTP). HTTP usually runs on top of TCP and uses port 80.")
    ]),
    _hoisted_56,
    createBaseVNode("p", null, [
      createTextVNode("When your computer sends an email on the Internet it uses a protocol called the "),
      createBaseVNode("a", _hoisted_57, [
        createTextVNode("Simple Mail Transfer Protocol"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (SMTP). SMTP usually runs on top of TCP and uses port 25.")
    ]),
    _hoisted_58,
    createBaseVNode("p", null, [
      createTextVNode("Not as common as before we got the web, but there exists computers on the Internet storing files. these are known as file servers. When other computers want to download the files from them, they use the protocol called the "),
      createBaseVNode("a", _hoisted_59, [
        createTextVNode("File Transfer Protocol"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (FTP). FTP usually runs on top of TCP and uses port 20 and 21.")
    ]),
    _hoisted_60
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
