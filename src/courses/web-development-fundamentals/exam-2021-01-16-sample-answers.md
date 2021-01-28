# Exam 2021-01-16 Sample Answers
Here are sample answers and some grading guidelines for the exam 2020-10-15. Auto marked questions aren't shown here, check your answers on Inspera to see the correct answers.

## Question 1
On one server, to search for all human resources with a name containing `Al`, one should send a POST request like this:

```http
POST /search?age=10&name=Al
```

Is this a good or a bad way to implement search functionality? If good, explain why. If bad, explain why and suggest a better way to do it.

Note: This question is about HTTP, and not about websites.
___

That is a bad way to implement search functionality. To start with, searching is about retrieving resources, so the method should not be POST, but GET. Then `/search` is not a good URI since its an action (a verb). The URI should identify resources, and should rather be `/humans`. And finally, the `age` parameter should not be there.

___

* 1/6 points for correct method.
* 1/6 points for correct method justification.
* 1/6 points for correct URI.
* 1/6 points for correct URI justification.
* 1/6 points for correct querystring parameter.
* 1/6 points for correct querystring parameter.
* Small point deductions for mistakes/minor wrong details

## Question 2
To update a resource on a server, you should according too the HTTP specification send an HTTP PUT request. However, websites usually use another method. Why do websites not use the PUT method to update a resource, which method do they use instead, and why do they use that one?
___

Since it's only possible to send GET and POST requests in HTML, websites can't send PUT requests. In the choice of GET and POST, POST is the more appropriate to use when the request is about updating a resource, since GET requests should not change anything on the server, so websites usually send a POST request to update a resource.
___

* 0.25 points for why not PUT.
* 0.25 points for POST instead.
* 0.25 points for why GET or POST instead.
* 0.25 points for why POST and not GET.

## Question 8
The form below can be used on a website with user accounts to ask the server to send an email to the user with the provided username containing a link through which the user can enter a new password for her account (to be used in case the user forgets her password).

```html
<form action="" method="XXX">
   Username: <input type="text" name="username">
   <input type="submit" value="Email me a reset password link!">
</form>
```

Which method should be used when submitting the HTML form above (i.e. what should XXX in the HTML code above be)? Justify your answer.
___

The form should be submitted with the POST method since the request is not about retrieving a resource (so we shouldn't use GET), but obtaining a side effect (sending an email). 
___

* 1 point for correct answer and valid justification.

## Question 9
Explain what a *pseudo-class* is in CSS, give an example of one and explain how that one works.
___
A pseudo-class is something we can use in a CSS selector to match HTML elements when they are in a certain state. An example is `hover`, which matches the elements when they are in the `hover` state, i.e. when the mouse is placed over the element.

Example that selects all paragraphs on the webpage and changes the text color in them to red:
___

* 0.5 points for general explanation.
* 0.25 points for example name.
* 0.25 points for example description.

## Question 10
Explain what media queries can be used for in CSS.
___
Media queries can be used to apply CSS rules under certain conditions based on the media device the webpage should be displayed on. This way, we can apply some CSS rules when the webpage should be printed ("displayed on paper"), some other rules when it should be displayed on a small screen, some other when it should be displayed on a large screen, etc.
___

1 point for a good explanation

## Question 11
Here is some CSS code:

```css
.div div span#div{
  background-color: black;
}
```

Write HTML code that contains a match for the CSS selector in the code above.

Note: You only need to write the HTML code found in the `<body>` element (including the `<body>` element), you do not need to write the HTML code for an entire HTML document.
___

```html
<body class="div">
    <div>
        <span id="div">I'm matched!</span>
    </div>
</body>
```
___

* 1 point for correct answer.
* -0.25 points for missing `<body>`.

## Question 12
Some websites with user accounts contains an "email me my password" form, in which the user can enter the email she used when creating her account, and then the website emails the user the password she entered when she created the account (to be used in case the user forgets her password). However, most websites with user accounts do not offer this functionality. Why?
___

The reason is because the websites only stores the hash values of the users' passwords, so people with access to the database can't read the users' passwords in plain text. Since a hash value can't be reversed back to the "unhashed" value (within a reasonable amount of time), the website don't know what password the user has.

___

* 1 point for correct answer.

## Question 13
One web developer claims that it's only POST requests, and never GET requests, that really needs to be protected with HTTPS, since GET requests don't result in any changes (e.g. new resources stored) on the server. 

Is the web developer correct or not? Justify your answer.
___
The web developer is wrong. Sure, GET requests should not change anything on the server, but their responses can contain sensitive information (personal data, business secrets, cookies, etc.) only the receiver of the response should be able to read. Without HTTPS, the ones that help forwarding the response to the receiver will be able to read the responses too.

___

* 2 points for correct answer and justification.

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
  const query = 'SELECT id FROM members WHERE username = "'+username+'" AND password = "'+password+'"'
  // Query sent to database, the id of the user is retrieved, etc.
  // ...
})
```

As your answer, write a username and password you can use to login to the existing account with id 1 no matter what username and password that account has.

Be explicit about what you enter as username and what you enter as password.
___

Username: `Doesn't matter`
Password: `" OR id="1`
___

* 1 point for correct answer.

## Question 15
Explain what a session is, give two examples of what they can be used for and explain how they work/can be implemented.
___

A session is a collection of key-value pairs the server can create and store on the server to remember information about a specific client (each client gets its own session). The sessions can for example be stored in a relational database, an ordinary file on the server, or simply in the web application's memory. Each session gets its own unique identifier (session id), and when a session is created for a client, the session id is sent to the client in a cookie using the `Set-Cookie` header.

When a client sends requests to the server, it should pass along the cookie with the session id in the requests using the `Cookie` header. When the server receives the requests, it can fetch the session with the provided session id, and there read out information it has stored about the client. Example of such information is:

* To which account the user has previously logged in to.
* What products the user has previously put in her shopping basket.
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
On a website users can register accounts, login and then send messages to other users and read the messages other users have sent to yourself. The accounts and messages are stored internally on the website in a relational database, and they get incremental ids (1, 2, 3, etc.). The web application handles the requests to send a new message to another user with the code shown below.

```js
const express = require('express')
const bodyParser = require('body-parser')
const expressSession = require('express-session')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(expressSession({
    /* Session settings... */
}))

app.post('/messages', function(request, response){
    
    const fromAccountId = request.body.fromAccountId
    const message = request.body.message
    const toAccountId = request.body.toAccountId
    
    if(fromAccountId != request.session.loggedInAccount.id){
        response.render("unauthorized.hbs")
    }else{
        
        storeMessageInDatabase(fromAccountId, message, toAccountId, function(error){
            
            if(!error){
                response.render("message-sent.hbs")
            }else if(error == "No database connection."){
                response.render("internal-server-error.hbs")
            }else if(error == "Unknown receiver."){
                response.render("unknown-receiver.hbs")
            }
            
        })
        
    }
    
})
```

The code contains a vulnerability. What is the name of the vulnerability? Explain how a hacker could try to exploit the vulnerability.
___
The name of the vulnerability is Cross-Site Request Forgery.

A hacker could try to exploit it the following way:

1. Find a victim with an account on the website. Remember the victim's id.
2. Wait until that victim logs in and obtains an active login session. 
3. Send an email to the victim with a link to the hacker's own website.
4. The victim clicks on the link and visits the hacker's website.
5. The website contains client-side JS code that is executed by the victim's web browser.
6. The client-side JS code tells the web browser to send POST requests to `/messages` with the victim's account id (which he found in step 1) to all other accounts, one at a time (start with 1, then 2, and so on). The message says *Hi, can you please help me out by inserting $100 to my bank account 123 456 789 ASAP? Would really appreciate it! I'll pay you back next week. Thanks!* Some of these messages will be sent to the victim's friends on the website, and some of them might want to help their friend out and inserts $100 to the bank account, which of course is owned by the hacker.

___

* 0.5 points for name of vulnerability.
    * 0.25 points for only abbreviation.
* 0-2.5 points for explanation. The less details missing, the more points.


## Question 17
Explain what a foreign key constraints is, give an example of a web application that would use a foreign key constraint, and give an example of what could go wrong if the web application wouldn't have used a foreign key constraint.
___
When a relational database has two tables with a relation, such as pets in one table belonging to a human in another table, the pet table will contain a field (known as the foreign key) with the id of the human in the humans table it belongs to. To tell the database about this relation, you add a foreign key constraint describing the relation. This constraint enforces that all pets belongs to an human, and that we, for example, can't insert a new pet that belongs to a human that doesn't exists.

An example of a web application using a foreign key constraint could be one with blogposts and comments on blogposts. Each comment must belong to a blogpost, so we use a foreign key constraint to enforce this relationship. If we wouldn't have used, we could end up with comments in the database that doesn't belong to existing blogposts, for example:

1. User A starts writing on a comment to blogpost X.
2. User B deletes blogpost X.
3. User A submits her comment on blogpost X.

Without a foreign key constraint, the web application would insert the new comment.

___

* 1 point for general explanation.
* 1 point for specific example.
* -0.5 points for describing "foreign key constraint" as "foreign key".

::: warning Common mistake
Many students wrote that if the web application receives a request to create a comment on a blogpost, then that blogpost must exists, because otherwise the user wouldn't be able to see the "create comment form", since that is only shown on the page that displays the blogpost (hence the blogpost must exist). Two problems with that reasoning:

1. Hackers can send the request anyway.
2. Between the user fetched the blogpost and wrote a comment, someone might have deleted the blogpost.
:::

::: warning Foreign Key VS Foreign Key Constraint
Many students confuse the terms *Foreign Key* and *Foreign Key Constraint*. A Foreign Key is a field in one table that "links" to the Primary Key in another table. To use a Foreign Key, you don't need to inform the database about the relation when you create the tables, and the database will not do anything special to enforce the relation. By adding a Foreign Key Constraint, you tell the database about the relation, and the database will also enforce the relation and can optimize the way it stores the data to faster work with queries that uses the relation.
:::

## Question 19
Implement the JavaScript function `areAllTrue(booleans)`, that receives an array with boolean values as argument and returns `true` if all the values in the array are `true`, otherwise false. You can assume the array contains at least one boolean value.

___
```js
function areAllTrue(booleans){
    for(const theBoolean of booleans){
        if(!theBoolean){
            return false
        }
    }
    return true
}
```
___

* 1 point for a function that largely works.
* -0.1 points for wrong function name.
* -0.1 points for iterating over indexes instead of values (except if index starts with 1).
* -0.1 points for using while instead of for.
* -0.1 points for using a "for in" loop instead of "for of".
* -0.1 points for using var instead of const/let.
* -0.1 points for missing keyword.
* -0.1 points for using global variables.
* -0.1 points for iterating over wrong indexes.

## Question 20
In JavaScript, a human with an age and name can be represented as an object like this:

```js
const human = {name: "Alice", age: 10}
```

Implement the function `getHumansByName(humans, name)`, which receives an array with human objects and a string as argument and returns a new array with only the humans who has the same name as the second argument.
___

```js
function getHumansByName(humans, name){
    const foundHumans = []
    for(const human of humans){
        if(human.name == name){
            foundHumans.push(human)
        }
    }
    return foundHumans
}
```
___

* 2 points for a function that largely works.
* -0.25 points for wrong function name.
* -0.25 points for using global variables.
* -0.25 points for iterating over indexes instead of values.
* -0.25 points for iterating over wrong indexes.
* -0.25 points for missing keyword.
* -0.25 points for bad variable name.
* -0.25 points for using var/let/const wrong.

## Question 21
In JavaScript, implement the synchronous function `half(number)`, which receives a number as argument and returns half of that number (the number divided by 2).

Then implement the synchronous function `quarter(number)`, which receives a number as argument and returns a quarter of that number (the number divided by 4). The only allowed operation to use in the implementation of quarter(number) is function calls to `half(number)`.

Then implement asynchronous versions of these two functions using callback functions instead of return values. The asynchronous version of `quarter` may only be implemented using the asynchronous version of `half`, no other operations are allowed.
___

```js
function half(number){
    return half / 2
}
function quarter(number){
    return half(half(number))
}

function half(number, callback){
    callback(number/2)
}
function quarter(number, callback){
    half(number, function(halfNumber){
        half(halfNumber, callback)
    })
}
```
___

* 0.25 points for synchronous half.
* 0.25 points for synchronous quarter.
* 0.5 points for asynchronous half.
* 1 point for asynchronous quarter.
* -0.5 points for indentation errors.
* -0.5 points for syntax errors.
* -0.5 points for unnecessary return statement.
* -0.5 points for unnecessary changes to parameters.
* -0.5 points for wrong function name.
* Small point deductions for mistakes/bad implementations.