---
sidebar: auto
navbarTitle: HTTP and Web Applications
---

# HTTP and Web Applications
The web is built on a protocol called the *HyperText Transfer Protocol* (HTTP). To build proper web applications, it is essential to understand how this protocol works. [The HTTP specification](https://tools.ietf.org/html/rfc2616) explains it all, but since it's a specification it can be quite hard to read, so let me give you a quick introduction to HTTP before you read the details in the HTTP specification.

<iframe width="560" height="314" src="https://www.youtube.com/embed/kuTKFoU5v7k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [http-and-web-applications.pdf](http-and-web-applications.pdf)
* [http-and-web-applications.pptx](http-and-web-applications.pptx)

## Recommended reading
* [Introduction to HTTP](https://launchschool.com/books/http) by Launch School
    * Up to (including) the chapter HTTP --> Processing Responses
* [HTTP/1.1 specification](https://tools.ietf.org/html/rfc2616)
    * Don't read and learn everything by heart, but just enough so you get comfortable looking up things (methods, status codes, etc.) in it.

## Interesting reading
* [Usage Share of Internet Browsers 1996 - 2019 (visualized)](https://www.reddit.com/r/dataisbeautiful/comments/cxuah9/usage_share_of_internet_browsers_1996_2019_oc/)

## Clients and Servers
The HTTP protocol is built on a *client-server* architecture. That means that some computers on the web acts as *servers*, and all other computers acts as *clients*. When you browse the web through a web browser, your web browser is a client. 

A client can send an HTTP request to a server, asking the server to do something for it. When a server receives the HTTP request, it should carry out the request, and then send back an HTTP response to the client. This is visualized in <FigureNumber /> below. Having a server on it own is useless; servers exist to serve clients (that's why we call them servers).

<Figure caption="Example of Client-Server communication.">
<Mermaid graph-definition="
sequenceDiagram
    participant Client
    participant Server
    Client->>+Server: 1. HTTP Request
    Note right of Server: 2. Carry out request
    Server-->>-Client: 3. HTTP Response
" />
</Figure>

For example, when you click on a link in your web browser, your web browser sends an HTTP request to a server, requesting the server to send back the webpage the link leads to. When the server receives this request it generates the webpage/loads it from a file and sends it back in an HTTP response, and when your web browser receives the HTTP response it displays the webpage on the screen.

In general, any computer can act as a client or a server. It is also possible for a computer to be both a client and a server at the same time. For example, when you (acting as a client) send an HTTP request to `Server A`, that server might in turn send an HTTP request to `Server B` to handle your request. Then `Server A` acts both as a server and a client at the same time. This is for example used when you login with your Google account on a website that doesn't belong to Google. Then the website you send your login request to will send its own requests to Google to check which Google account that belongs to you (this example is a bit simplified; in practice it is a bit more complicated than this).

## Resources and URIs
Servers in HTTP are expected to contain resources. It is up to each server to decide what type of resources it should contain, but some resources commonly found on websites includes:

- Images (`.png` files, `.jpeg` files, etc.)
- Sounds (`.mp3` files, etc.)
- Videos (`.mp4` files, etc.)
- Documents (`.pdf` files, `.docx` files, `.txt` files, etc.)
- Static webpages (`.html` files, `.css` files, `.js` files, etc.)
- General data, such as:
	- Accounts
	- Blogposts
	- Guestbook posts
	- Articles
	- Private Messages
	- Comments
	- etc.

Some resources (images, videos, documents, etc.) are simply stored as files on the server, while other resources can be stored in a database, or some other way. For now, we don't really care about how the resources are being stored on the server, as long as they are stored somehow.

When a client wants to work with a resource, it sends an HTTP requests to the server, asking the server to do something with the resource. There are primarilly four different types of requests clients can send. These are known as CRUD operations, and they are: 

- <u>C</u>reate (ask the server to create a new resource)
- <u>R</u>etrieve/<u>R</u>ead (ask the server to send back a resource)
- <u>U</u>pdate (ask the server to change a resource)
- <u>D</u>elete (ask the server to delete a reosurce)

In English, an HTTP request could say something like:

- *Send back the contact page to me*
- *Delete the last comment I wrote*
- *Change the title of the blog post I wrote yesterday to "Congratulations"* (the client sends the new title to the server)
- *Create a new friend relationship with the user Alice for me* (the client sends a new resource representing the friend relationship to the server)

::: tip Example
When you create a new account on a website, your web browser sends an HTTP request to the server asking the server to create a new resource representing your account containing your username and password (and possibly some additional information).
:::

Each request sent to a server is about doing something with a resource. The client tells the server which resource that is through a *Uniform Resource Identifier* (URI). Each resource on the server should have a URI that uniquely identifies it, and it is the server that decides which URI each resource should have. Each time you view a webpage (webpage = resource) in a web browser, you can see the URI that uniquely identifies that webpage in the address bar (usually located at the top of the web browser).

For example, [Wikipedia's article/webpage about Mathematics](https://en.wikipedia.org/wiki/Mathematics) has the URI `/wiki/Mathematics`, while their [article/webpage about Computer Science](https://en.wikipedia.org/wiki/Computer_science) has the URI `/wiki/Computer_science`.

The [URI specification](https://tools.ietf.org/html/rfc3986) specifies the format of URIs. Simply put, it is a sequence of characters, where the slash character `/` is used to group relevant resources together. URIs also include the protocol used to access the resource (e.g. HTTP) and an identifier indicating which server that stores the resource (a domain or an IP adress), so a complete URI could for example be `https://en.wikipedia.org/wiki/Mathematics`, where `https` indicates that the HTTPS protocol should be used to send the HTTP request, and the computer containing the resource is the one with the IP address the domain name `wikipedia.org` maps to.

::: tip HTTP VS HTTPS
The web is built on the HTTP protocol. The HTTP protocol is not encrypted, so it's a bad idea to send sensitive information (such as passwords, credit card numbers, etc.) using it. Therefore the HTTPS protocol were invented. HTTPS does more or less work the same way as HTTP, but with the addition being encrypted, so even though you learn HTTP here, you can just as well later use HTTPS.
:::

URIs usually identifies a single resource or a collection of multiple resources. It is quite common that the beginning of a URI identifies a collection of resources, and the end of the URI identifies a specific resource within that collection. For example, the URI `/accounts` could identify the collection of all accounts on a website, and the URI `/accounts/Alice` identifies the specific account with the username *Alice*. We can also see this pattern in the example before with URIs on Wikipedia.

## Requests
So, a client can send an HTTP request to a server to request the server to do something for it. The HTTP specification have specified the structure of these HTTP requests, so it is very important that clients send HTTP requests using the structure specified in the HTTP specification. If they don't, servers will not understand the request and simply ignore it or send back an HTTP response indicating that something was wrong with the request.

The structure of an HTTP request is shown in <FigureNumber /> below.

<Figure caption="The structure of an HTTP request.">

```http
METHOD URI VERSION
HEADER1: VALUE1
HEADER2: VALUE2
...

BODY
```
</Figure>

The first line in an HTTP request is called the *request line*. It consists of three parts.

The first part on the request line is called the `METHOD`. It is also known as the *verb*, but the HTTP specification calls it method, so it is better to stick with that. The method indicates what the client wants to do with the resource identified by the `URI` (the second part). For example, the `GET` method indicates that the client wants to retrieve the resource, so the server should send back the resource in the HTTP request. The `DELETE` method indicates that the client wants the server to delete the resource, so the server should delete the resource before it sends back an HTTP response.

The third part on the request line, `VERSION`, indicates which version of HTTP the client is using, so the server can use the same version. A common value used here is `HTTP/1.1`.

Below the request line you find *the headers*. These are key-value pairs with additional information about the request. For example, the `Host` header is used to indicate the domain name of the server the request is sent to (for example `Host: ju.se`), and the `Accept` header is used to indicate which data format the client would like to get back the requested resource in (for example `Accept: text/html`).

Below the headers you find *the body* of the request. Here the client can pass a resource to the server in the HTTP request. This is used when the client wants to create a new resource on the server or update an existing resource. If no resource needs to be sent to the server, you omit the body (leave it empty/blank).

An example of an actual HTTP request is shown in <FigureNumber /> below.

<Figure caption="Example of an HTTP request asking the server to create a new account.">

```http
POST /accounts HTTP/1.1
Host: game-site.com
Content-Type: application/json
Accept: text/html

{"username": "Alice", "password": "abc123"}
```
</Figure>

#### Request Headers
<FigureNumber /> below describes some of the headers you can use in an HTTP request.

<Figure caption="Description of some of the HTTP request headers.">
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Example</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>Host</code></td>
            <td><code>Host: nintendo.se</code></td>
            <td>Identifies the domain the HTTP request is sent to.</td>
        </tr>
        <tr>
            <td><code>Accept</code></td>
            <td><code>Accept: text/html</code></td>
            <td>Identifies the data format the client wants the resource back in.</td>
        </tr>
        <tr>
            <td><code>Content-Type</code></td>
            <td><code>Content-Type: application/json</code></td>
            <td>Identifies the data format the body of the HTTP request is written in.</td>
        </tr>
    </tbody>
</table>
</Figure>

#### Methods
There exists a bunch of different HTTP methods, but web developers primarily need to know four of them: `GET`, `POST`, `PUT` and `DELETE`. These maps well to the commonly used CRUD operations:

* Create: `POST`
* Retrieve: `GET`
* Update: `PUT`
* Delete: `Delete`

:::: code-group
::: code-group-item GET

A client can send a `GET` request to a server to tell the server to send back the resource identified through the URI in the request. A `GET` requests contains no body since the request is only about fetching a resource from the server, and not sending a resource to the server.

::: tip Example
```http
GET /accounts HTTP/1.1
Host: game-site.com
Accept: text/html
```
:::

:::
::: code-group-item POST

A client can send a `POST` request to a server to tell the server to create a new resource. The URI in the request should identify what type of resource that should be created, and the body of the request should contain the resource.

::: tip Example
```http
POST /contact-messages HTTP/1.1
Host: a-store.com
Content-Type: application/json

{"name": "Alice", "message": "Hi, I bought a thing from you, and it's not working. Please get back to me with info on how to proceed.", "email": "alice@wonderland.com"}
```
:::

:::
::: code-group-item PUT

A client can send a `PUT` request to a server to tell the server to replace an existing resource on the server with a new one the client sends it. The URI in the request should identify which resource on the server to be replaced, and the body of the request should contain the new resource.

::: tip Example
```http
PUT /diary-entries/2020-02-13 HTTP/1.1
Host: diaries.com
Content-Type: application/json

{"date": "2020-02-13", "message": "Today was a wonderful day, Kim proposed to me, and I said yes :D We will live happily ever after now. (update 2020-04-15: Me and Kim are no longer together)."}
```
:::

:::
::: code-group-item DELETE

A client can send a `DELETE` request to a server to tell the server to delete all resources on the server identified through the URI in the request.

::: tip Example
```http
DELETE /guestbook-posts/123 HTTP/1.1
Host: football-lovers.com
```
:::

:::
::::

::: warning PUT and DELETE not in HTML
In the language used to build web pages, HTML, it's only possible to send `GET` and `POST` requests. Therefore, web developers rarely use `PUT` and `DELETE` requests. On websites, `PUT` and `DELETE` requests are often implemented as `POST` requests, and the URI is used to indicate if it should be a create, update or a delete operation.
:::

## Responses
When a server receives an HTTP request, it should look at the request (i.e. the method and the URI) to figure out what the request is about, then carry out the request and then send back an HTTP response. The structure of an HTTP response is shown in <FigureNumber /> below.

<Figure caption="The structure of an HTTP response.">

```http
VERSION STATUS_CODE REASON_PHRASE
HEADER1: VALUE1
HEADER2: VALUE2
...

BODY
```
</Figure>

The first line in the HTTP response is called *the status line*. It first contains the HTTP version the server is using (`VERSION`), and then a `STATUS_CODE` (a three digit number) indicating how the server handled the request (e.g. did it carry out the request? Or why didn't carry it out?), and then a `REASON_PHRASE`, which just is a very short human readable text for what the status code mean. For programmers using HTTP, it's primarily the status code that's interesting to look at.

Just as HTTP requests, HTTP responses can contain headers and a body too. 

::: warning Request Headers != Response Headers
Although HTTP requests and HTTP responses both contain headers, which headers they can contain depends on if it's a request or a response. For example, the `Accept` header can only be used in HTTP requests, and the `Content-Type` header can be used in both HTTP requests and HTTP responses.
:::

### Status codes
The three digit status code can either start with the digit `1`, `2`, `3`, `4` or `5`. Which digit it is hints about how the server handled the request.

:::: code-group
::: code-group-item 1XX

The `1XX` status codes indicate an *informational* response. These aren't that important to know for programmers using HTTP.

:::
::: code-group-item 2XX

The `2XX` status codes indicate that the server successfully carried out the HTTP request. The most commonly used ones are (reason phrase shown after the status code):

* `200` OK\
  The server carried out the request and sends back a resource in the body of the response.
* `201` Created\
  The server carried out the request and a new resource was created while carrying out the request. The `Location` header in the HTTP response contains the URI for the newly created resource.
* `204` No Content\
  The server carried out the request, but the response contains no body.

:::
::: code-group-item 3XX

The `3XX` status codes indicate that the server encourages the client to send a new HTTP request using another URI (i.e. redirecting the client).

* `302` Found\
  The server encourages the client to send the same HTTP request again but with the URI specified in the `Location` response header instead. This is useful if you change URIs on a website. For example, first maybe `/about-us` was used to identify the about page on the website, and then you changed that to just `/about`. Then when a client sends a `GET` request to `/about-us` you can send back a `302` response with the header `Location: /about` to indicate that the URI for the page has changed to `/about`.

:::
::: code-group-item 4XX

The `4XX` status codes indicate that the server didn't carry out the request because the client has done something wrong with the request. The client needs to fix the problem and try again.

* `400` Bad Request\
  The server didn't carry out the request because something is wrong with it. The body of the response can contain additional information about what's wrong. Better to use another `4XX` status code if a more specific that describes the problem exists.
* `401` Unauthorized\
  The server didn't carry out the request because the client is not authorized to request it (the client might for example need to login first).
* `404` Not Found\
  The server didn't carry out the request because the URI in the request doesn't identify a resource that exists.

:::
::: code-group-item 5XX

The `5XX` status codes indicates that the server couldn't carry out the request because something is wrong on the server-side. Maybe the server crashed, or maybe the server needs an external resource (e.g. a database) to carry out the request, and it doesn't have access to it the moment, etc.

* `500 ` Internal Server Error\
  The server couldn't carry out the request.

:::
::::

## World Wide Web
::: tip Terminology
A *web application* is the application running on the server that receives HTTP requests and sends back HTTP responses.

A *webpage* is a single page you can view in your web browser. Each HTTP response usually contains a single webpage.

A *website* is the collection of all webpages on one and the same server (i.e. all webpages on the same domain, for example all webpages at [ju.se](https://ju.se)).
:::

So, why is it called *the world wide web*? Webpages can contain links to other webpages, and if you try to visualize this structure, you end up with something looking like a web, as shown in <FigureNumber /> below (some imagination required!).

<Figure caption="A visualization of some webpages and where their links lead.">
<Mermaid graph-definition="
graph TD
  a[Webpage A]
  b[Webpage B]
  c[Webpage C]
  d[Webpage D]
  e[Webpage E]
  f[Webpage F]
  g[Webpage G]
  a-->b
  c-->b
  c-->a
  c-->d
  d-->a
  d-->b
  e-->b
  e-->c
  f-->c
  f-->d
  f-->a
  b-->f
  g-->b
  g-->f
  g-->e
  d-->g
  c-->g
" />
</Figure>