---
sidebar: auto
navbarTitle: Web Cookies
---

# Web Cookies
A cookie is something a web application can use to remember information about a user. The specification [HTTP State Management Mechanism](https://tools.ietf.org/html/rfc6265) explains how it works in detail, but let me give you a quick introduction to cookies before you read the specification.

## HTTP is stateless
So, why do we have cookies? We have cookies because HTTP is a stateless protocol. What that means in practice is that when the server receives an HTTP request from a client, that HTTP request should contain all information the server needs to carry out the request. The server should not need to have any memory of previous HTTP requests it has received and carried out. If it would need to remember that, then HTTP wouldn't be a stateless protocol. So when a server has carried out an HTTP request, it can simply forget everything about that request and the client the request came from.

So, why is HTTP a stateless protocol? There are some benefits with being stateless. For one, it is much easier to implement the server, because each incoming HTTP request contains all information it needs to carry out the request; no need to look at previous requests or to remember this request in the future. Another benefit is that it is also easier to scale the server if clients communicate with it using a stateless protocol, but let's not get into the details about that here.

So, why did we have cookies again? Imagine users can create accounts and login on our website. When a user sends a login request (username and password) to the server, then the server needs to check if these credentials are correct, and if they are, the user should be logged in to that account. When the user in the future sends a new request to the server, the server needs to remember which account that user is logged in to. Since HTTP is a stateless protocol, the server can't remember such information using HTTP. For this, and many other use-cases, we use cookies.

## What is a cookie?
A cookie is simply a key-value pair, where the key (a string) is a short description of the value (which also is a string). The key is sometimes also called the name of the cookie.

::: tip Example
If the server needs to remember that the user is 17 years old, then it could create a cookie with the key `age` and the value `17`.
:::

::: tip Example
If the server needs to remember that a user lives in Jönköping, then it could create a cookie with the key `city` and the value `Jönköping`.
:::

In addition to this, a cookie can also have some other attributes, but let us get back to those later.

## How do cookies work?
So, using cookies, a server can remember information about a client. It works something like this:

1. A client sends an HTTP request to the server.
2. When the server carries out the request, it realizes that it needs to remember some information about this client.
3. In the HTTP response the server sends back to the client, it tells the client to create a new cookie containing a specific key and a specific value.
4. When the client receives the HTTP response, it should create a cookie with the key and value the server instructed it to do in the response.
5. When the client sends HTTP requests to the server in the future, it should pass along the cookie (the key-value pair) to the server.

This is visualized in <FigureNumber /> below.

<Figure caption="Sequence Diagram visualizing how cookies work.">
<RenderMermaid graph-definition="
sequenceDiagram
	participant Client
	participant Server
	Client->>+Server: HTTP Request
	Note right of Server: Need to remember
	Server->>-Client: HTTP Response (create cookie)
	Note left of Client: Creates and stores cookie
	Client->>+Server: HTTP Request (with cookie)
	Note right of Server: Reads info from cookie
	Server->>-Client: HTTP Response
" />
</Figure>

So simply put: the server can tell the client to create cookies, the cookies are stored on the client (how is up to the client to decide, but most web browsers simply store them in files), and the client sends the cookies to the server in the HTTP requests it sends to it.

### Creating a cookie
The server can tell a client to create a new cookie by adding the `Set-Cookie` header in the HTTP response. The value for this header is `key=value`. If the server wants the client to create multiple cookies, this header will be present multiple times in the HTTP response (one time for each cookie).

::: tip Example
If the server wants a client to create a cookie with the key `age` and the value `17` and a cookie with the key `city` and the value `Jönköping`, it should send back an HTTP response like the one below (the status code does of course not have to be 200).
```http
TODO: CHECK THIS
HTTP/1.1 200 OK
Set-Cookie: age=17
Set-Cookie: city=Jönköping
...
```
:::

### Sending a cookie
The client can send a cookie in an HTTP request by adding the `Cookie` header to the HTTP request. The value for this header is `key=value`. If the client wants to send multiple cookies, this header will be present multiple times in the HTTP request (one time for each cookie).

::: tip Example

```http
TODO: FIX THIS
Set-Cookie: age=17
Set-Cookie: city=Jönköping
```
:::

## Configuring cookies
When a server tells a client to create a new cookie, it can tell the client more infromation about the cookie than just the key and the value of the cookie. It can for example tell the client for how long time the cookie should be stored by the client.

...

## What can we use cookies for?
To remember infromation about the client/user. What that information is up to you to decide, but heere are some examples.

...

## Anything special to think about when using cookies?

### The server can't trust cookies
Since the cookies are stored on the client, the client can easilly modify them, and therefor the server can't trust the cookies it receives. For example:

- If a server tells a client to create a cookie, it can't count on to receive this cookie in future requests from the client (the client can ignore creating the cookie, or the user might simply manually delete it).
- When a server receives a cookie with a name it has previously told the client to create, it can't trust that the value in the cookie is the same value as it told the client to put in the cookie since the client easilly can change that value.
- Nothing prevents a client from creating its own cookies, without the server telling it, so the server might reveice cookies from a client before it has told the client to create any.

::: tip Example
When the server receives a sucessfull login request, it can't remember that the client has logged by using a cookie like `isLoggedIn=true`, because any client (imagine hackers) can create a cookie like this one on their own without sending a successfull login request to the server. In this case, we should rather have used sessions instead.
:::

### The cookie law
Many websites make use of client-side JavaScript libraries, and these can be used by the library creator to track which website a specific user is visiting using cookies (client-side JavaScript can tell the web browser to create cookies too). European Union thought that this could risk users' privacy online, and therefor introduced a EU directive which become known as the cookie law.

The directive simply states that ...

### GDPR
...