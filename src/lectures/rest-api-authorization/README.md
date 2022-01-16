---
sidebar: auto
navbarTitle: REST API Authorization
---

# REST API Authorization
Let's take a look at how users can login to accounts in our REST API.

<iframe width="560" height="314" src="https://www.youtube.com/embed/0Ech5jpP1Dc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [rest-api-authorization.pdf](rest-api-authorization.pdf)
* [rest-api-authorization.pptx](rest-api-authorization.pptx)

## Recommended reading
* [Wikipedia's List of OAuth providers](https://en.wikipedia.org/wiki/List_of_OAuth_providers)
    * Notice that you find many of the big guys (Google, Microsoft, etc.) in the list.
* [OAuth 2.0 Framework - RFC 6749](https://tools.ietf.org/html/rfc6749)
    * You need to read this specification to learn the details of the framework, which you have to know when adding support for OAuth 2.0 in your own app, or when using another app supporting OAuth 2.0.
* [https://oauth.net/2/](https://oauth.net/2/)
    * If you think the specification is too hard to read to get the big picture, the resources on this website might be easier to understand.



# OAuth 2.0
OAuth 2.0 is an authorization framework describing how you can give other applications access to your own users' data (resources) stored in your application. Usually, big companies like Google are the ones who implement the framework, and we others instead create our own third-party applications in which we can access our users' Google resources through the framework. When your own solution consists of your own client application and your own server application (such as an Android application and a web application exposing a REST API), you can use this framework in your server application for authorization too.

The main idea is that the client application obtains an Access Token from the server application, which gives the client application permission to access a user's resources that is stored on the server application (typically through a REST API). OAuth 2.0 specifies different ways this can be done.



## Roles
To describe how it works, OAuth 2.0 first defines 4 different roles. You can think of these as 4 different actors, but they are called roles, probably because one and the same actor can have multiple roles at the same time.

### Resource Owner
This is simply the user that is using the Client application and that have an account with associated resources on the server application.

### Client
This is the application the user is using (for example an Android application), and this is the application that wants to access the user's resources on the server.

### Resource Server
This is the server that stores and guards access to all the resources on the server. When a Client wants to access the user's resources, the Client will send HTTP requests to this server and pass along an Access Token as a proof of that the user has granted the Client access to her resources.

### Authorization Server
This is the server the Resource Owner use to give a Client permission to access her resources on the Resource Server. This server typically generates Access Tokens the Client can use to access the user's resources on the Resource Server.

::: tip Two servers?!
The roles Resource Server and Authorization Server can be hold by one and the same server application, typically a web application.
:::


## Protocol flow
<FigureNumber /> below gives an overview of how the Client can obtain and use an Access Token. All communication with the Authorization Server and the Resource Server are done using HTTP (HTTPS). When the Resource Owner needs to communicate with the Authorization Server, she will (most often, but not necessarily) do so using her web browser.

<Figure caption="Overview of the protocol used in OAuth 2.0.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: I start using you!
    activate ro
    activate c
    c ->> ro: I want access to your resources.
    deactivate c
    ro ->> as: The Client wants access to my resources.
    activate as
    as ->> ro: Is that OK with you?
    deactivate as
    ro ->> as: Yes
    activate as
    as ->> ro: OK, here is an Authorization Grant.
    deactivate as
    ro ->> c: Here is the Authorization Grant.
    activate c
    deactivate ro
    c ->> as: Here is the Authorization Grant.
    activate as
    as ->> c: Here you have an Access Token.
    deactivate as
    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.
    activate rs
    rs ->> c: Access Token fine, here you have the resources.
    deactivate rs
    deactivate c
" />
</Figure>

An Authorization Grant is simply something a Client can show to the Authorization Server to prove that the Resource Owner has granted the Client permission to access the Resource Owner's resources.

In some cases, the Authorization Server sends back the Access Token directly to the user (which the user then directly gives to the Client), instead of using the detour with an Authorization Grant.




## Client Registration
In most cases, the Client needs to pre-register itself and be approved as a Client at the Authorization Server before it can request Access Tokens from it. This way, arbitrary (potentially evil) applications can't request Access Tokens from it.

When the Client registers itself it will receive a `client_id` and `client_secret` it can use to authenticate itself to the Authorization Server. `client_secret` should of course be kept secret. Additional information about the Client can also be provided in the registration process, such as which URIs that can be used to identify the Client application.




## Obtaining Access Token
OAuth 2.0 describes 4 different flows clients can use to obtain an Access Token. With time, some of these flows have been found to contain security vulnerabilities and have been deprecated, and new and more secure flows have been created. [OAuth 2.1](https://oauth.net/2.1/) will contain the most up-to-date information about which flows that are best to use, but at the moment that's just a draft, and should not be seen as a reliable source of truth.



### Resource Owner Password Credentials Grant
This flow is the most straight forward and easiest flow to understand. It can be used when you are the owner of the both the server that implements OAuth 2.0 and the Client, i.e. when the Client is a first-party application, and not a third-party application. For example, the YouTube app for smartphones can use this to flow to let users login with their Google accounts, since Google owns and develop the YouTube app.

This flow does not require the Client to first register itself at the Authorization Server, so this flow does not make use of `client_id` and `client_secret`. Also, no Authorization Grant is used, so the user directly obtains an Access Token from the Authorization Server.

<FigureNumber /> below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification.

<Figure caption="The flow of the Resource Owner Password Credentials Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client 
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: I start using you!
    activate ro
    activate c
    c ->> ro: I want access to your resources.
    deactivate c
    ro ->> c: Here is my username and password.
    deactivate ro
    activate c
    c ->> as: Here is a user's username and password.
    activate as
    as ->> c: Here is an Access Token for that user's resources.
    deactivate as
    c ->> rs: Here is the Access Token, now give me the resources.
    activate rs
    rs ->> c: Access Token is valid, here are the resources.
    deactivate rs
    deactivate c
" />
</Figure>

The obvious drawback with this flow is that the user reveals her credentials (username and password) to the Client, which the whole point of this framework is to avoid, so this is really not a good flow to use. But as long as the Client comes from the same company that developed the server application, there's should be no danger in doing that, since the Client company already know the users' credentials.

::: warning This flow has been deprecated
This flow has been deprecated. The reason is that this flow reveals the user's username and password to the Client, which the whole idea with this authorization framework is to prevent, and you can avoid that using other flows. Rather see this flow as a "shortcut flow" that existed in the beginning, and not a "proper flow".

If you from scratch build your own client and server application that you want to secure with OAuth 2.0, using this flow can be an acceptable option, since it's so easy to implement support for. But Google and other big OAuth 2.0 providers should definitely not use it. The risk is that an evil Client app (and not only Google's own apps) asks for the user's Google username and Google password, and if the user enters them, the evil Client app has come over the user's credentials, which is bad. It's better if the user always enters her credentials directly to the Authorization Server, and never exposes them to the Client.
:::





### Authorization Code Grant
This flow is the de-facto standard flow to use in OAuth 2.0. It is particularly used when the Client is a web application. The Authorization Grant used is in this flow is an *Authorization Code*.

<FigureNumber /> below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification.

<Figure caption="The flow of the Authorization Code Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: I start using you!
    activate ro
    activate c
    c ->> ro: I want access to your resources.
    deactivate c
    ro ->> as: The Client with client_id=X wants access to my resources.
    activate as
    as ->> ro: Is that OK with you?
    deactivate as
    ro ->> as: Yes
    activate as
    as ->> ro: OK, here is an Authorization Code.
    deactivate as
    ro ->> c: Here is the Authorization Code.
    activate c
    deactivate ro
    c ->> as: Here is my client_id, client_secret and an Authorization Code.
    activate as
    as ->> c: Everything is fine, here you have an Access Token.
    deactivate as
    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.
    activate rs
    rs ->> c: Access Token fine, here you have the resources.
    deactivate rs
    deactivate c
" />
</Figure>

::: tip Why so complicated?!
Why does the Authorization Server first send back an Authorization Code, which the Client then needs to trade for an Access Token, instead of sending back the Access Token directly?

This is done to expose the Access Token as little as possible (i.e. only to the Client). Since the user is (most often) using her web browser to communicate with the Authorization Server, if the Authorization Server would send back the Access Token directly, and the user would have installed a bad browser extension, that browser extension would maybe be able to read the Access Token (depending on which permissions the extension has been granted). That browser extension would then be able to access the user's resources using the Access Token, and this is bad.

Since the Authorization Server now instead only sends back an Authorization Code, that bad extension won't be able to do anything bad, since exchanging it for an Access Token also requires the `client_secret`, which only the Client knows.
:::

This flow can also be used for Clients where the user has access to the source code (single-page applications, smartphone applications, desktop applications, etc.), but in these cases, the Client to Authorization Server communication will not include the `client_secret` (since users would be able to read it in the code), so the Client won't authenticate itself to the Authorization Server, which makes this flow a little bit less secure. But these applications can use this flow with the Proof Key for Code Exchange extension to make it a bit more secure. Read more about this extension further down.





### Implicit Grant
The flow Authorization Code Grant (with the Proof Key for Code Exchange extension) can these days be used in most cases. There exists an old flow called Implicit Grant, which simplified the Authorization Code Grant flow by sending back an Access Token directly, instead of taking the detour with the Authorization Code. The Implicit Grant flow was intended to be used by single-page applications. Since they run in the web browser, taking the detour with the Authorization Code makes no sense, since the Access Token will be exposed to the web browser in the end any way. Single-page applications could also have difficulties with exchanging the Authorization Code for an Access Token because of web browsers' Same-Origin Policy, making this flow their only option, but that's usually not a problem these days.

<FigureNumber /> below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specification.

<Figure caption="The flow of the Implicit Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: I start using you!
    activate ro
    activate c
    c ->> ro: I want access to your resources.
    deactivate c
    ro ->> as: The Client with client_id=X wants access to my resources.
    activate as
    as ->> ro: Is that OK with you?
    deactivate as
    ro ->> as: Yes
    activate as
    as ->> ro: OK, here is an Access Token for your resources.
    deactivate as
    ro ->> c: Here is the Access Token.
    activate c
    deactivate ro
    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.
    activate rs
    rs ->> c: Access Token fine, here you have the resources.
    deactivate rs
    deactivate c
" />
</Figure>

::: warning This flow has been deprecated
This flow has been deprecated. The reasons are the security vulnerabilities explained in [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-09) for this flow.

For one, the Access Token is passed to the Client through the URL in the web browser, and any (evil) library used in the single-page application will be able to read the Access Token that way. By using the detour with the Authorization Code in the Authorization Code Grant flow instead, an evil library in the single-page application will just be able to read the Authorization Code, which is less useful than the Access Token.
:::




### The Proof Key for Code Exchange extension
When a smartphone app use the Authorization Code Grant flow, the user needs to be taken back to the smartphone app (the Client) after the Authorization Server has sent back an Authorization Code to the user. For this to work, the smartphone app can on the user's device register URLs that should open the Client when used, and the Authorization Server will send back an HTTP redirect response to that URL, which then will cause the device to open the Client application.

However, any smartphone app can register these URLs. An evil smartphone app can therefor register that it should be opened when a URL with an Authorization Code is used that is really intended for another Client, and that way come over the Authorization Code.

To prevent this, and to make Authorization Codes less valuable on their own, the Proof Key for Code Exchange extension was introduced to the Authorization Code Grant flow.

With this extension, when the Client wants the Resource Owner to ask the Authorization Server to generate an Authorization Code for it, the Client first:

1. Generates a random string called the `code_verifier`
2. Computes the `code_challenge` by hashing the `code_verifier` using [SHA256](https://en.wikipedia.org/wiki/SHA-2)

Then in the Resource Owner's request to the Authorization Server to generate an Authorization Code, it also passes along the `code_challenge` to the Authorization Server, which the Authorization Server then remembers.

Then, when the Client has obtained the Authorization Code and want's to exchange it for an Access Token, it also needs to pass along the `code_verifier` in the request. The Authorization Server will hash the `code_verifier` using SHA256, and if the hash value doesn't match the `code_challenge` it received before, it won't accept the exchange. This way, only the true Client can exchange the Authorization Code for an Access Token, because no one else knows which valid `code_verifier` to send to the Authorization Server in the exchange request.


<FigureNumber /> below gives an overflow of the flow. For implementation details (which HTTP requests to send/responses to receive), check out the specifications.

<Figure caption="The flow of the Authorization Code Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: I start using you!
    activate ro
    activate c
    c ->> c: I generate code_verifier V and code_challenge C.
    c ->> ro: I want access to your resources, code_challenge=C.
    deactivate c
    ro ->> as: The Client with client_id=X, code_challenge=C wants access to my resources.
    activate as
    as ->> ro: Is that OK with you?
    deactivate as
    ro ->> as: Yes
    activate as
    as ->> ro: OK, here is an Authorization Code, I remember code_challenge=C.
    deactivate as
    ro ->> c: Here is the Authorization Code.
    activate c
    deactivate ro
    c ->> as: Here is my client_id, client_secret, an Authorization Code and code_verifier=V.
    activate as
    as ->> c: Everything is fine, here you have an Access Token.
    deactivate as
    c ->> rs: Here's the Access Token, give me the Resource Owner's resources.
    activate rs
    rs ->> c: Access Token fine, here you have the resources.
    deactivate rs
    deactivate c
" />
</Figure>





### Client Credentials Grant
This flow can be used when the Client wants to obtain an Access Token it can use to access its own resources on the Resource Server (if you ever have a use-case for that). Since it uses `client_id` and `client_secret` you should only use this when the Client runs on a server, so your users won't have access to the source code and can read the `client_secret`.

<Figure caption="The flow of the Client Credentials Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client 
    participant as as Authorization Server
    participant rs as Resource Server
    c ->> as: Here is my client_id and client_secret.
    activate c
    activate as
    as ->> c: Here is your Access Token.
    deactivate as
    c ->> rs: Here is my Access Token, give me my own resources.
    activate rs
    rs ->> c: Access Token token is valid, here are your resources.
    deactivate c
    deactivate rs
" />
</Figure>