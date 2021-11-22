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
    * Notice that you find many of the big guys in the list.
* [https://oauth.net/2/](https://oauth.net/2/)
    * When you need to learn the details, the specification [OAuth 2.0 Framework - RFC 6749](https://tools.ietf.org/html/rfc6749) is the best source.
    * If you want to read something more pedagogical, the website provides many other resources you can read.
* If you are going to implement the "Resource Owner Password Credentials" way for an application (as you should do in your project work), especially read the following chapters in the specification:
    * 1.3.3. Resource Owner Password Credentials
    * 4.3. Resource Owner Password Credentials Grant
    * 5. Issuing an Access Token

# OAuth 2.0
The recorded lecture is about OAut 2.0, which is an authorization framework describing how you can give other applications access to the data (resources) stored in your own application. Usually, big companies like Google are the one who implements the framework, and we instead create our own third-party applications in which we can access our users' Google resources through the framework. The main idea is that our own third-party applications obtain Access Tokens that authorizes our third-party application to access our user's respective Google resources (i.e. one Access Token for each user).

## Roles
To describe how it works, OAuth 2.0 first defines 4 different roles.

### Resource Owner
This is someone who owns resources stored on the server that implements OAuth 2.0. Usually, there exists different owners that have access to different resources stored on the server, i.e. each user have there own user account and owns the resources belonging to that account.

### Resource Server
This server stores all the resources. Whenever we want to retrieve, create, update or delete a resource from our third-party application we should send requests to this server together with an Access Token granting us permission.

### Authorization Server
This server generates Access Tokens giving our third-party application permission to work with some of the resources on the Resource Server. You can see this as the same server as the Resource Server, but they don't have to be the same.

### Client
This is our third-party application our users are using and in which we want to be able to access our users' resources on the Resource Server. The Client usually needs to register itself at the Authorization Server before it can request Access Tokens from it. When the Client register itself it will receive a `client_id` and `client_secret` it can use to authenticate itself to the Authorization Server. `client_secret` should of course be kept secret.

## Obtaining Access Token
OAuth 2.0 describes 4 different flows clients can use to obtain an Access Token.

### Resource Owner Password Credentials Grant
This flow can be used when you are the owner of the both the server that implements OAuth 2.0 and the client, i.e. when the client is a first-party application, and not a third-party application. For example, the YouTube app for smartphones can use this to flow to let users login with their Google accounts, since Google owns and develop the YouTube app.

This flow does not require the Client to first register at the Authorization Server since no `client_id` or `client_secret` are used. 

<Figure caption="The flow of the Resource Owner Password Credentials Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client 
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: Here is my Google username and password.
    activate c
    c ->> as: Here is a user's Google username and password.
    deactivate c
    activate as
    as ->> c: Correct, here is an Access Token to that user's resources.
    deactivate as
    activate c
    c ->> rs: Here is Access Token, now give me the resources.
    deactivate c
    activate rs
    rs ->> c: Access Token is valid, here are the resources.
    deactivate rs
    activate c
    c ->> ro: Resources successfully fetched.
    deactivate c
" />
</Figure>

::: warning This flow has been deprecated
This flow has been deprecated. The reason is that this flow reveals the user's username and password to the Client, which the whole idea with this authorization framework is to prevent. The recommended way now to achieve something similar is to instead use a the Authorization Code flow with Proof Key for Code Exchange, which is more secure, but more complicated to implement. For smaller REST APIs you want to secure with Access Tokens, continuing to use the Resource Owner Password Credentials flow is probably fine, but Google and other big providers should definitely not use it.
:::

### Implicit Grant
This flow can be used when the Client is not from the same company as the Server implementing OAuth 2.0 (i.e. when the Client is a third-party application) and the source code for the Client is available to the user, such as for smartphone applications, desktop applications, single-page applications, etc., so the Client can't contain the `client_secret`.

<Figure caption="The flow of the Resource Owner Password Credentials Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client 
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: I want to give you access to my Google resources.
    activate c
    c ->> ro: I redirect you to Google's OAuth 2.0 Authorization Server with my client_id.
    deactivate c
    activate ro
    ro ->> as: Give me the grant permission page for the Client with the provided client_id.
    deactivate ro
    activate as
    as ->> ro: OK, here is the page.
    deactivate as
    activate ro
    ro ->> as: I grant the Client these permissions.
    deactivate ro
    activate as
    as ->> ro: OK, I redirect you back to the Client with an Access Token.
    deactivate as
    activate ro
    ro ->> c: Here is the Access Token.
    deactivate ro
    activate c
    c ->> rs: Here is an Access Token, give me some resources.
    deactivate c
    activate rs
    rs ->> c: Access Token is valid, here are the resources.
    deactivate rs
    activate c
    c ->> ro: I got the resources, everything is fine.
    deactivate c
" />
</Figure>

::: warning This flow has been deprecated
This flow has been deprecated. The reasons are the the security vulnerabilities explained in [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-09) for this flow.
:::

### Authorization Code Grant
This flow can be used when the Client is not from the same company as the Server implementing OAuth 2.0 (i.e. when the Client is a third-party application) and the source code of the Client is not available to the user, such as for web applications. This way, the source code can contain the `client_secret`, and the flow can make use of it.

This flow is a bit more complicated (more steps), but the benefit is that the Access Token is never exposed to the Resource Owner (or more accurately: never exposed to the Resource Owner's web browser), so if the Resource Owners computer/web browser contains a vulnerability of some kind, that vulnerability can't be used to steal the Access Token.

<Figure caption="The flow of the Implicit Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client 
    participant as as Authorization Server
    participant rs as Resource Server
    ro ->> c: I want to give you access to my Google resources.
    activate c
    c ->> ro: I redirect you to Google's OAuth 2.0 Authorization Server with my client_id.
    deactivate c
    activate ro
    ro ->> as: Give me the grant permission page for the Client with the provided client_id.
    deactivate ro
    activate as
    as ->> ro: OK, here is the page.
    deactivate as
    activate ro
    ro ->> as: I grant the Client these permissions.
    deactivate ro
    activate as
    as ->> ro: OK, I redirect you back to the Client with an Authorization Code.
    deactivate as
    activate ro
    ro ->> c: Here is the Authorization Code.
    deactivate ro
    activate c
    c ->> as: Here is the Authorization Code and my client_id and client_secret, give me an Access Token for it.
    deactivate c
    activate as
    as ->> c: Authorization Code is valid, here is your Access Token.
    deactivate as
    activate c
    c ->> rs: Here is an Access Token, give me some resources.
    deactivate c
    activate rs
    rs ->> c: Access Token is valid, here are the resources.
    deactivate rs
    activate c
    c ->> ro: I got the resources, everything is fine.
    deactivate c
" />
</Figure>

### Client Credentials Grant
This flow can be used when the Client wants to obtain an Access Token it can use to access its own resources on the Resource Server (if you ever have a use-case like that). Since it uses `client_id` and `client_secret` you should only use this when the Client runs on a server, so your users won't have access to the source code and can read the `client_secret`.

<Figure caption="The flow of the Client Credentials Grant.">
<RenderMermaid graph-definition="
sequenceDiagram
    participant ro as Resource Owner
    participant c as Client 
    participant as as Authorization Server
    participant rs as Resource Server
    c ->> as: Here is my client_id and client_secret.
    activate as
    as ->> c: Here is your Access Token.
    deactivate as
    activate c
    c ->> rs: Here is my Access Token, give me my resources.
    deactivate c
    activate rs
    rs ->> c: Access Token token is valid, here are your resources.
    deactivate rs
" />
</Figure>