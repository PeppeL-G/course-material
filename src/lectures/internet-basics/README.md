---
sidebar: auto
navbarTitle: Internet Basics
---

# Internet
You have probably heard about and used *the Internet*, but what is it really? And how does it differ from *the web*? In this lecture you'll be introduced to what the Internet is and how the basics work.

<iframe width="640" height="360" src="https://www.youtube.com/embed/Mzs5QMy-mT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [internet-basics.pdf](internet-basics.pdf)
* [internet-basics.pptx](internet-basics.pptx)

## Recommended reading
* The following Wikipedia articles gives a good overview of the Internet:
    * [Internet](https://en.wikipedia.org/wiki/Internet)
    * [History of the Internet](https://en.wikipedia.org/wiki/History_of_the_Internet)
    * [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)
    * [IPv6 deployment](https://en.wikipedia.org/wiki/IPv6_deployment)
* [submarinecablemap.com](https://www.submarinecablemap.com)
* [Internet Protocol Specification](https://tools.ietf.org/html/rfc791)
    * Probably not that interesting nor relevant for you to read, but do be aware of its existence.

## The Internet
The Internet can be seen as a large network that spans across most of the planet (i.e. where people live). This is a simplified view of how it works, but that view is accurate enough for programmers to learn how to create applications using it. By connecting your computer to the Internet, your computer can communicate with other computers connected to the Internet. This is visualized in <FigureNumber /> below.

<Figure caption="A visualization of the Internet as a large network computers can connect to. Computer 4 is not connected to the network, and hence can't use the Internet to communicate with the other computers.">
<Mermaid graph-definition="
flowchart TD
    i((Internet))
    c1[Computer 1]---i
    c2[Computer 2]---i
    c3[Computer 3]---i
    i---c5[Computer 5]
    i---c6[Computer 6]
    c4[Computer 4]
" />
</Figure>

It's not wrong to say that two computers communicate with each other, but it's more accurate to say that it's the applications running on the computers that communicate with each other.

### The Internet Protocol
How the communication between two computers connected to the Internet works is specified in the [Internet Protocol](https://tools.ietf.org/html/rfc791) (IP), which all computers connected to the Internet must understand. But if you want to implement your own application that communicates with an application running on another computer connected to the Internet, you don't need to know that much about how the Internet Protocol works, because most likely you will use one of the many other protocols that has been built on top of the Internet Protocol, but there are some things about the Internet Protocol you must know anyway, since these other protocols use some of the details specified in the Internet Protocol.

When `Computer 1` wants to communicate with `Computer 2` on the Internet, `Computer 1` will send `Computer 2` a message. `Computer 1` will simply send this message to the Internet, and then the Internet is responsible for to somehow deliver the message to `Computer 2`.

#### IP Addresses
For the Internet to know which computer to deliver a message to, each computer connected to the Internet needs to have a unique identifier. The unique identifier of the computer that should receive the message needs to be written in the message. These unique identifiers are known as IP addresses. In version 4 of the Internet Protocol, IP addresses have the format `A.B.C.E`, where each letter is a number between 0 and 255, for example `123.92.36.99`. Each number can be implemented using 8 bits, so in total there exists (at most) 2⁸×2⁸×2⁸×2⁸ = 255×255×255×255 = 4 294 967 296 IP addresses. As soon as your computer connects to the Internet, Internet will assign your computer a unique IP address other computers can use to send messages to it.

The problem with version 4 of the Internet Protocol is that at most 4 294 967 296 computers can be connected to the Internet at one and the same time. More and more computers get connected to the Internet (game consoles, smartphones, cars, washing machines, etc.), and we are running out of IP addresses! In version 6 of the Internet Protocol they changed the format of the IP addresses to `A:B:C:D:E:F:G:H`, where each letter is a number between 0 and 65536. Each such number can be implemented using 64 bits, so each number is usually written as 4 [hexadecimal digits](https://simple.wikipedia.org/wiki/Hexadecimal), for example `A53D`. A complete IP version 6 IP address can look like `1234:4B36:12D1:AA12:39BE:2543:CCCC:5326`.

Today the Internet supports both version 4 and version 6 of the Internet Protocol, so it's common so see IP addresses of both formats.

#### Packets
An IP message is called a *packet*. In a packet, the sender puts her own IP address, the IP address of the receiving computer (and some other meta information we will not get into the details of here) and the message itself (called the payload).

#### Shortcomings
The Internet Protocol is a very simple protocol, and as such it contains some shortcomings, some mentioned below. Other protocols built on top of the Internet Protocols tries to deal with these shortcomings.

##### No delivery guarantee
There is no delivery guarantee of the packets. When `Computer 1` sends `Computer 2` a packet, it can't be sure that the Internet actually manages to deliver the packet to `Computer 2` (maybe `Computer 2` just disconnected from the Internet, or has trouble with its Internet connection, etc.).

##### Limited packet size
The payload in a packet has a maximum size. For example, you can't send a 1GB big movie file in a single packet, but instead have to break down the movie file into smaller parts and send each part in a separate packet.

##### Packets delivery order not guaranteed
If `Computer 1` first sends `Packet A` and then `Packet B` to `Computer 2`, it might very well be that `Computer 2` receives `Packet B` before it receives `Packet A`.

##### The receiving application is not identified
An IP packet only identifies which computer the packet should be delivered to. The receiving computer probably have many applications running, and the IP packet doesn't specify which of them that should handle the packet.

### The Transmission Control Protocol
The Transmission Control Protocol (TCP) is a protocol built on top of the Internet Protocol. We will not go through the details of how it's implemented here, but just mention some of it's features.

#### Delivery acknowledgement
In TCP, when `Computer 2` has received a packet from `Computer 1`, it should send back a packet to `Computer 1` to tell `Computer 1` that it has received the packet. `Computer 1` will continue to send its packet (with some interval) until it receives that other packet from `Computer 2` telling it it has received the packet. This way, `Computer 1` can be sure that `Computer 2` has received the packet.

#### Delivery order
In TCP, when a big message needs to be divided into multiple smaller parts and sent in separate packets, each packet is also assigned a number indicating in which order the parts in the packets should be put together again. This way, it doesn't matter if the receiving computer receives the packets out of order since the order number in each packet tells it in which order they should be.

#### Port numbers
In a TCP packet, the sender also writes a *port number*. A port number is simply a number between 0 and 65 535. The port number should identify which application running on the receiving computer that should receive the packet. For example, if you build an application that can be used to chat between two computers on the Internet, then all the packets you send can use (for example) the port number 7564, and your application should also tell the computer it runs on to forward all packets it receives with that port number to your application.

There exists some reserved port numbers that identifies applications with a special purpose. For example, web applications using the HTTP protocol always receives packets with port number 80. The [Internet Assigned Numbers Authority](https://www.iana.org/) (IANA) is responsible for keeping track of and registering new reserved port numbers. In addition to the ones they keep track of, there also exist port numbers that are de facto used by other applications. Wikipedia's page [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers) contains more information about this.

### The User Datagram Protocol
The downside with TCP is that it makes the communication a bit slower due to the extra things that needs to be done. Sometimes it's more important to have as little delay as possible instead of having all packets fully delivered. For example, when making a video call to someone, it's more important to deliver as much information (sound and video) as possible as soon as possible, instead of delivering all the information complete. For example, it's better to 0.1 seconds delay in sound and video and 75% of the quality instead of having 1 second delay in sound and video and 100% of the quality. So, the User Datagram Protocol (UDP) is a protocol built on top of the Internet Protocol you can use when you need to deliver the packets as fast as possible.

Just as with TCP, it adds port numbers to the packets to identify which application on the receiving computer that should receive the packet.

### Internet Services
Using TCP and UDP we can use the Internet and create whichever type of applications we want, but there are some common type of applications that has evolved, and we say that these are available as different services on the Internet. Each service usually use their own protocol that runs on top of TCP or UDP.

#### The World Wide Web
Each time you use your web browser you use the World Wide Web (WWW, or simply *the web*) service that runs on the Internet. It consists of many computers on the Internet hosting websites (called servers), and when your web browser communicates with one of them, it will do so using the [HyperText Transfer Protocol](https://tools.ietf.org/html/rfc2616) (HTTP). HTTP usually runs on top of TCP and uses port 80.

#### Emails
When your computer sends an email on the Internet it uses a protocol called the [Simple Mail Transfer Protocol](https://tools.ietf.org/html/rfc5321) (SMTP). SMTP usually runs on top of TCP and uses port 25.

#### File sharing
Not as common as before we got the web, but there exists computers on the Internet storing files. these are known as file servers. When other computers want to download the files from them, they use the protocol called the [File Transfer Protocol](https://tools.ietf.org/html/rfc959) (FTP). FTP usually runs on top of TCP and uses port 20 and 21.

#### Domain Name System
So, when `Computer 1` wants to send a message to `Computer 2` on the Internet, `Computer 1` (or rather the human using `Computer 1`) needs to know the IP address of `Computer 2`. We humans are quite bad at remembering numbers, but much better at remembering names. The Domain Name System (DNS) service on the Internet can be used to translate names into IP addresses, so using that one you can register a domain name like `my-website.com` and map that to the IP address of the computer hosting your website, for example `123.123.123.123`. Then when a user tries to visit `my-website.com` in her web browser, her web browser will first use DNS to translate `my-website.com` to the IP address `123.123.123.123`, and then use HTTP to connect to `123.123.123.123`.