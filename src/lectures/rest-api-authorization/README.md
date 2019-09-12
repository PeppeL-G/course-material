---
sidebar: auto
navbarTitle: REST API Authorization
---

# REST API Authorization
Let's take a look at how users can login to accounts in our REST API.

<iframe width="560" height="314" src="https://www.youtube.com/embed/0Ech5jpP1Dc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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