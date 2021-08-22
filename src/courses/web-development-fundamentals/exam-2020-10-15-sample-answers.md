---
sidebar: auto
---

# Exam 2020-10-15 Sample Answers
Here are sample answers and some grading guidelines for the exam 2020-10-15. Auto marked questions aren't shown here, check your answers on Inspera to see the correct answers.

## Question 1
On one server, to create a new Human resource, one should send a GET request like this:

```http
GET /create-human?age=10&name=Alice
```

Is this a good or bad way to creating new human resources? If good, explain why. If bad, explain why and suggest a better way to do it.

Note: This question is about HTTP, and not about websites.
___

It is a bad way to create a new resource since it doesn't work the way HTTP is intended to be used:

 * The method should not be GET, since the request is not about retrieving a resource. The method should be POST, since it's a request about creating a new resource on the server.
 * The URI should identify which resource(s) the request is about, in this case the collection of humans, e.g. `/humans`. It should not contain information about the resource to be created, that should be in the body of the request.
___

* 0.25 points for correct method.
* 0.25 points for correct method justification.
* 0.25 points for correct URI.
* 0.25 points for correct URI justification.
* Small point deductions for mistakes/minor wrong details.

## Question 2
To delete a resource on a server, you should according too the HTTP specification send an HTTP DELETE request. However, websites usually use another method. Why do websites not use the DELETE method to delete a resource, which method do they use instead, and why do they use that one?
___

Since it's only possible to send GET and POST requests in HTML, websites can't send DELETE requests. In the choice of GET and POST, POST is the more appropriate to use when the request is about deleting a resource, since GET requests should not change anything on the server, so websites usually send a POST request to delete a resource.
___

* 0.25 points for why not DELETE.
* 0.25 points for POST instead.
* 0.25 points for why GET or POST instead.
* 0.25 points for why POST and not GET.

## Question 8
The form below can be used to send two numbers and an operator to the server, and the server should then display the result of the operation.

```html
<form action="" method="XXX">
    <input type="number" name="leftOperand">
    <input type="text" name="operator" placeholder="+ or - or * or /">
    <input type="number" name="rightOperand">
    <input type="submit" value="Compute!">
</form>
```

Which method should be used when submitting the HTML form above (i.e. what should `XXX` in the HTML code above be)? Justify your answer.
___
The form should be submitted with the GET method since the request is about retrieving the resource (the number) identified by the URI (identified by the values in the querystring). 
___

* 1 point for correct answer and valid justification.

## Question 9
Explain what a *rule* is in CSS, give an example of one and explain how it works.
___
A *rule* in CSS consists of a *selector* and a set of *declarations*. The selector identifies some HTML element on the webpage, and the declarations indicates how these elements should be styled. A declaration in turn is a key-value pair. The key is called *property* and identifies a specific property of how an element should be shown, and the value controls that property.

Example that selects all paragraphs on the webpage and changes the text color in them to red:

```css
/* Selector until the {-character */
p{ /* Properties between { and } */
    color: red; /* A single property-value pair on this line. */
}
```
___

* 0.25 points for selector explanation.
* 0.25 points for declarations explanation.
* 0.5 points for example and explanation of that example.

## Question 10
Explain what *pseudo-classes* can be used for in CSS. Also, name one and explain what that pseudo-class do.
___
A *pseudo-class* is something you can use in a CSS *selector* to select elements when they are in a certain state. For example, the pseudo-class `hover` selects elements when they are in the state that indicates that the mouse is placed over them.
___

0.5 points for general explanation.
0.25 points for example name.
0.25 points for example explanation.

## Question 11
Here is some CSS code:

```css
#p.div span.div{
  background-color: black;
}
```

Write HTML code that contains a match for the CSS selector in the code above.

Note: You only need to write the HTML code found in the `<body>` element (including the `<body>` element), you do not need to write the HTML code for an entire HTML document.
___

```html
<body>
    <section id="p" class="div">
        <span class="div"></span>
    </section>
</body>
```
___

* 1 point for correct answer.

## Question 12
Explain what each of the following terms are (with emphasis on their differences), and give one example of what each can be used for or when each is used:

* Encoding
* Encryption
* Hashing
___
Encoding is when you represent some values in another way, for example a character encoding, where you represent the character `A` as the number `65`. The goal here is only to represent a value in another way, so there are no secrets here, and anyone can do the translation the other way (from `65` back to `A`).

Encryption is when you represent some values in another way ("to encrypt") and you don't want others to be able to translate the values back to their original form ("to decrypt") unless they know the special secret they need to know to do the decryption (which the one that makes the encryption knows). This is useful when two parties need to communicate on a network but don't want the others on the network to be able to read their messages. This is for example used in HTTPS.

Hashing is when you want to represent a value in another way, but don't want to be able to go back to the original value. This is for example useful when you need to store passwords. You don't want to store the original password, because if a hacker gets over your storage device they can read the passwords in plain text, but if you store the hash values instead, they can't get back to the original password (except by brute forcing them, but that takes long time).
___

* 0.15 points for each explanation that explains their differences.
* 0.15 points for each example/when used.
* 1 point for all correct.

## Question 13
When a client sends the user's password to a server to login, it's very important that HTTPS is used instead of HTTP, otherwise anyone that helps forwarding the request to the server can see the user's password. But what if we use client-side JavaScript to do the hashing for use, so we only send the hash value of the password to the server, and not the password in plain text? Would that be a secure workaround instead of using HTTPS? Justify your answer.

Note: This question is only about the login request with the password, you don't need to worry about securing the session id in the cookie.
___

A small downside is that anyone that helps forwarding the request can see the hash value of the password, and try to brute force it to learn the original password, which the user might also use for accounts on other websites.

A big downside is that from the server's perspective, the hash value functions as "the password", so anyone that helps forwarding the request can also read the hash value of the password, which they then can use to send their own login request, so this would not be a secure workaround.
___

* 2 points for big downside.
* 0.5 points for small downside and no big downside.
* 0.25 points for relying on client-side JS is bad and no big downside.

## Question 14
Here is an HTML form on a website one can use to login to that website:

```html
<form method="post" action="/login">
    Username: <input type="text"     name="username">
    Password: <input type="password" name="password">
              <input type="submit"   value="Sign in!">
</form>
```

Here is the code on the server handling the HTTP request sent when the form is submitted:

```js
app.post('/login', function(request, response){
  const username = request.body.username
  const password = request.body.password
  // Query to be sent to the database to check if password and username are correct.
  const query = 'SELECT id FROM members WHERE password = "'+password+'" AND username = "'+username+'"'
  // Query sent to database, the id of the user is retrieved, etc.
  // ...
})
```

As your answer, write a username and password you can use to login to the existing account with the username Alice no matter which password she has.

Be explicit about what you enter as username and what you enter as password.
___

Username: `Alice`\
Password: `" OR "1"="1`
___

* 1 point for correct answer.

## Question 15
Explain what a session is, give two examples of what they can be used for and explain how they work/can be implemented.
___

A session is a collection of key-value pairs the server can create on to remember information about a specific client (each client gets its own session). The sessions can for example be stored in a relational database, an ordinary file on the server, or simply in the web application's memory. Each session gets its own unique identifier (session id), and when a session is created for a client, the session id is sent to the client in a cookie using the `Set-Cookie` header.

When a client sends requests to the server, it should pass along the cookie with the session id in the requests using the `Cookie` header. When the server receives the requests, it can fetch the session with the provided session id, and there read out information it has stored about the client. Example of such information is:

1. To which account the user has previously logged in to.
2. What products the user has previously put in her shopping basket.
___

* 0.25 points for example 1.
* 0.25 points for example 2.
* 0.5 points for key value pair stored on the server.
* 0.5 points for session id.
* 0.5 points for how session ids are transferred (details).

::: warning Common mistake
It's very hard to write a good answer to this question without mentioning that each client/user has its own session on the server.
:::


## Question 16
On a website where users can register, the web application can handle a special request to check if a username is taken or not. The code for that is shown below.

```js
const express = require('express')

const app = express()

app.get('/is-username-taken', function(request, response){
    
    const username = request.query.username
    
    response.set('Content-Type', 'text/html')
    
    if(isUsernameTaken(username)){
        response.end("<p>"+username+" is taken.</p>")
    }else{
        response.end("<p>"+username+" is not taken.</p>")
    }
    
})
```

The code contains a vulnerability. What is the name of the vulnerability? How would a hacker try to exploit the vulnerability? How can a website protect itself against the vulnerability? Be as detailed as possible.
___

The name of the vulnerability is Cross-Site Scripting (XSS).

A hacker could try to exploit this by sending an email to a logged in user on the website with a link that leads to `/is-username-taken?username=<script>BAD_JS_CODE</script>`. If the user is logged in on the website and clicks on the link, the `BAD_JS_CODE` will be executed by the user's web browser, and it can send requests to the server telling the server to do things with the user's account (e.g. transfer money on a bank website, delete account, etc.) the hacker shouldn't be able to do.

To prevent this vulnerability, when the server send input from a client as part of a webpage, that input must be interpreted as text by the web browser, and not as HTML code. That can be accomplished by escaping the characters with special meaning in HTML, such as replacing `<` with `&lt;` and `>` with `&gt;` (when the web browser sees `&lt;`, it will display the `<` character), etc., in the input.
___

* 1 point for name of vulnerability.
* 1 point for describing how a hacker could exploit the vulnerability.
  * Only 0.5 points if not describing what a user would need to do to be hacked.
* 1 point for describing the protection.
  * Only 0.75 points for mentioning escaping, without describing the details.


## Question 17
Imagine a website with the two resources types *Blogposts* and *Comments*, and that a Comment belongs to a Blogpost. When the web application receives the HTTP request to create a new Comment, it needs to verify that the Blogpost the Comment belongs to really exists. To do that, you can:

1. Send a SELECT query to the database to see if the Blogpost really exists.
2. If the Blogpost really existed, send the INSERT query to the database to store the new Comment.

This is however a bad way of doing it. Why? Also, suggest a better way to do it, and explain why that way is better.
___

The way described is bad, because first the web application might do (1) and get back the answer that the Blogpost exists, but before it does (2), someone else might have sent a query to the database and deleted that Blogpost, so (2) results in a new Comment being stored in the database that doesn't belong to an existing Blogpost, which is what we wanted to avoid.

A better solution is to use a *foreign key constraint* to make sure that the Blogpost exists when we insert a Comment that belongs to a Blogpost in the database. That way, the database will check if the Blogpost exists when we insert the Comment in the database, and the database will send us back an error if the Blogpost doesn't exists. This way, we will be 100% sure we don't have Comments in the database that belongs to non-existing Blogposts.
___

* 1 point for describing the problem.
* 1 point for explaining a better way.
* -0.25 points for adding foreign key in solution, and not foreign key constraint.

::: warning Common mistake
Many students wrote that if the web application receives a request to create a comment on a blogpost, then that blogpost must exists, because otherwise the user wouldn't be able to see the "create comment form", since that is only shown on the page that displays the blogpost (hence the blogpost must exist). Two problems with that reasoning:

1. Hackers can send the request anyway.
2. Between the user fetched the blogpost and wrote a comment, someone might have deleted the blogpost.
:::

::: warning Foreign Key VS Foreign Key Constraint
Many students confuse the terms *Foreign Key* and *Foreign Key Constraint*. A Foreign Key is a field in one table that "links" to the Primary Key in another table. To use a Foreign Key, you don't need to inform the database about the relation when you create the tables, and the database will not do anything special to enforce the relation. By adding a Foreign Key Constraint, you tell the database about the relation, and the database will also enforce the relation and can optimize the way it stores the data to faster work with queries that uses the relation.
:::

## Question 19
Implement the JavaScript function `biggest(numbers)`, that receives an array with numbers as argument and returns the biggest number in that array. You can assume the array contains at least one number.
You are not allowed to use `Math.max(numbers)` in your implementation of `biggest(numbers)`.
___
```js
function biggest(numbers){
    
    let biggest = numbers[0]
    
    for(const number of numbers){
        if(biggest < number){
            biggest = number
        }
    }
    
    return biggest
    
}
```
___

* 1 point for a function that largely works.
* -0.2 points for not handling negative numbers correctly.
* -0.1 points for iterating over indexes instead of values (except if index starts with 1).
* -0.1 points for missing keyword.
* -0.1 points for using var instead of const/let.
* -0.1 points for using global variables.
* -0.1 points for bad names on variables.
* -0.1 points for iterating over wrong indexes.
* -0.05 points for single indentation error.
* -0.1 points for other indentation errors.
* -0.1 points for using a "for in" loop.

## Question 20
In JavaScript, a human with an age and name can be represented as an object like this:

```js
const human = {name: "Alice", age: 10}
```

Implement the function `getYoungHumans(humans)`, which receives an array with human objects as argument and returns a new array with only the humans who are younger than 18.
___

```js
function getYoungHumans(humans){
    
    const youngHumans = []
    
    for(const human of youngHumans){
        if(human.age < 18){
            youngHumans.push(human)
        }
    }
    
    return youngHumans
    
}
```
___

* 2 points for a function that largely works.
* -0.25 points for missing keyword.
* -0.25 points for using var/let/const wrong.
* -0.25 points for using global variables.
* -0.25 points for including 18 year old humans ("only the humans who are younger than 18").
* -0.25 points for iterating over indexes instead of values.
* -0.1 points for single indentation error.
* -0.25 points for many indentation errors.
* -0.25 points for bad variable name.
* -0.25 points for not creating empty array correct.

## Question 21
In JavaScript, implement the synchronous function `addOne(number)`, which receives a number as argument and returns that number plus one.

Then implement the synchronous function `addTwo(number)`, which receives a number as argument and returns that number plus two. The only allowed operation to use in the implementation of `addTwo(number)` is function calls to `addOne(number)`.

Then implement asynchronous versions of these two functions using callback functions instead of return values. The asynchronous version of `addTwo` may only be implemented using the asynchronous version of `addOne`, no other operations are allowed.
___

```js
/* Synchronous versions */
function addOne(number){
    return number + 1
}

function addTwo(number){
    return addOne(addOne(number))
}

/* Asynchronous versions with callback functions. */
function addOne(number, callback){
    callback(number + 1)
}

function addTwo(number, callback){
    addOne(number, function(numberPlusOne){
        addOne(numberPlusOne, function(numberPlusTwo){
            callback(numberPlusTwo)
        })
    })
}
```
___

* 0.25 points for synchronous addOne.
* 0.25 points for synchronous addTwo.
* 0.5 points for asynchronous addOne.
* 1 point for asynchronous addTwo.
* Small point deductions for mistakes/bad implementations.