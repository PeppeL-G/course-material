---
sidebar: auto
navbarTitle: Web Sessions
---

# Web Sessions
A session is something a web application can use to remember information about a user, similiar to cookies, but unlike cookies, sessions are stored on the server. 

## What is a session?
A session is a collection of key-value pairs stored on the server that belongs to a specific client (each client has its own session on the server). A server can use a session to remember information about a client. A session is quite similar to a collection of cookies, but clients can't read or write the key-value pairs in the session; only the server can read and write the key-value pairs in the session. So if the server puts a value in a client's session, it can be sure that that value is valid (it can't be changed by anyone except the server itself).

## How long does a session exist?
The session only exists "as long as the user use the website". In many web frameworks, a session only exists for 20 minutes (can usually be configured), but each time the user visits a new page on the website, those 20 minutes are refreshed. That means if you start to use a website, you get a new session the server can use to remember information about you, but if you don't send a new HTTP request within 20 minutes, that session will be deleted, and the server will forget all the information about you it put in your session. With the next HTTP request you send to the server after 20 minutes, you will get a new session.

But if you have a session and send an HTTP request to the server within 20 minutes, then you extend the life of the session so it will live for 20 minutes from the time you sent that (the last) HTTP request.

::: tip Example
You might have noticed that if you login on a website, start reading a long page for ~30 minutes, and then go to another page on the website, that you are not logged in anymore? That's because the session has been deleted since you haven't been active on (sent HTTP request to) that website for a while.
:::

## What are sessions used for?
So, when you need to remember information about a client, you can use either cookies or sessions. When should you use which one? A rule of thumb is that you should use sessions if you need to remember temporary information about a client the client should not have access to. Otherwise, a cookie is more likely the better choice. 

::: tip Example
If you need to remember which account a client has logged in to, then you should remember this in the client's session, because you don't want the client to be able to change this information.
:::

::: tip Example
If you want to remember which words the user has searched for in the search form on your website, then you're better of storing that information in a cookie. The user only harms herself by modifying the cookie, and by using a cookie, we can remember that information for a much longer time.
:::

## How are sessions implemented?
Session might sound complicated, but they are most often very easy to use, because the framework/libraries we use have implemented a nice interface for us through which we can use sessions without having to bother about the implementation details.

How the server store the session on the server is up to the server to decide. It could store the sessions in temporary files, or it could store the sessions in a database. Web programmers usually don't need to worry about this, because the framework/libraries we use takes care of this for us.

The session for a client can either be created when the server receives an HTTP request from a client that doesn't yet have a session, or when the server for the first time needs to put a value in the session for a client that doesn't yet have a session. How you want it to works can usually be configured using the framework/library you use to work with the sessions.

After how long time an untouched session should be destroyed can usually be configured using the framework/library as well.

## Anything special to think about when using sessions?

### sdfsdfsd
Since sessions usually use cookies to remember which session that belongs to which client, you need to consider the cookie law and the GDPR.

...

### Securing the session id
The session id is really important. Use HTTPS.

### Clients can create new sessions
Clients can easilly create new sessions. By sending an HTTP request to the server that doesn't contain a session id, the server will create a new session for the client. Because of this, you often can't use the session to keep track of things you want to forbid the client to do.

::: tip Example
If you use a counter to keep track of how many times a user has failed to login to an account, and prevent the client from login in to an account when the counter reaches a specific number (e.g. 5 failed login attempts), then you can't store the counter in the session, because the user can easilly send a new HTTP request to the server without a session id, and then get a new session where the counter is 0 again.
:::

## Using sessions in practise

:::: code-group
::: code-group-item Express

Express does not have built-in support for sessions, but it can easily be added through a middleware function from the [express-session](https://github.com/expressjs/session) package.

1. Install the `express-session` package by running the command `npm install express-session` in your project folder.
2. Add middleware function with session support from the `express-session` package in your code, e.g.:

``` javascript
const express = require('express')
const expressSession = require('express-session')

const app = express()

// Add the middleware function from express-session.
app.use(expressSession({
	// Let's cover these options later...
	secret: 'some characters no one can guess...',
	resave: false,
	saveUninitialized: true,
}))

// Use app as before...
```

When we call `expressSession` we get back a middleware function that we add to our express application object. This middleware will add the `session` property to the `request` objects we have. If we want to store a value in the client's session, then we simply add that value to this object, e.g. `request.session.theKey = "The value"`. If we want to read out a value we have previosuly stored in the session, then we simply read it out from this object, e.g. `const theValue = request.session.theKey`.

::: tip Example
Below is an example of code that in the session stores number of times the user has visisted a specific page.
``` javascript
app.get("/count-visits", function(request, response){
	
	// If we haven't put the counter in the session before,
	// that means the user is visiting this page for the
	// first time, and we need to create the counter.
	if(!request.session.counter){
		request.session.counter = 0
	}
	
	// Increment the counter by one.
	request.session.counter += 1
	
	response.send("You have visited this page "+request.session.counter+" times.")
	
})
```
The first time a user sends a GET request to `/count-visits`, she will get back the text *You have visited this page 1 times.*. The second time she sends the same request, she will get back the text *You have visited this page 2 times.*, and so on. Notice that each user will have their own counter (because each user will get its own session).
:::

When you create the session middleware function, you can configure it by passing it an object with options. There are three mandatory options.

The `secret` option is a value used to generate the session ids. It doesn't matter what you use here as long as no one can figure it out. If a hacker knows which secret you are using, she might be able to figure out which session ids your users will get, and can then easilly hijack (take over) their sessions (send HTTP request with the same session id, so the server think the requests are sent from the user the session belongs to), which is a major security vulnerability. 

The `resave` option...

The `saveUninitialized` option...

:::
::: code-group-item PHP

PHP has built-in support for sessions, but to use them you first need to "activate them" by calling the function `session_start()`. You need to call this function each time you receive an HTTP request, and it will create a new session for the client if the client doesn't have one, or re-use the existing one the client already have.

When you have called `session_start()` you can use the special variable `$_SESSION` to write values to the session and to retrieve values from the session. For example, to add a new value to the session you would use  `$_SESSION["theKey"] = "The value";`, and to obtain a value from the session you would use `$theValue = $_SESSSION["theKey"];`.

::: tip Example
Here is an example of a PHP page that counts how many times the user have fetched it.

```php
<?php

session_start();

// If no counter exists in the session, create it.
if(!isset($_SESSION['counter'])){
	$_SESSION['counter'] = 0;
}

// Increment the counter in the session.
$_SESSION['counter'] += 1;

echo "You have visisted this page ".$_SESSION['counter']." times.";

?>
```

The first time a user visits the page, she will get back the text *You have visited this page 1 times.*. The second time she sends the same request, she will get back the text *You have visited this page 2 times.*, and so on. Notice that each user will have their own counter (because each user will get its own session).

:::

:::
::::

## A Note on Stateless
Depending on where you store your sessions, your web application either become statefull or remain stateless, and this affects how hard it will be to scale your web application in the future. We will not get into the details of scaling here, but be aware of that if the sessions are stored on the same server that is running your web application (for example in files, which is the case when using the default configuration of PHP), your application becomes statefull and a bit harder to scale. If you instead store the sessions in a database running on a separate sever, your web application remain stateless and is a bit easier to scale.