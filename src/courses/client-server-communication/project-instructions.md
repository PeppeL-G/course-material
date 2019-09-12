---
navbarTitle: Client-Server Communication
---
# Project Instructions
As project you should work in pairs and create a platform (a solution consisting of both a backend application handling the data on the platform and a frontend application containing the graphical user interface through which users will use the platform). The backend should expose a REST API which the frontend can use to work with the data on the platform. The platform should be implemented with the technologies taught in the course, i.e. Node.js/Express for the backend and Vue.js for the frontend.

You should not only implement the platform, you should also write a report describing the platform and its implementation, including what it can be used for and how it has been implemented. The file [project-report-template.docx](/course-material/client-server-communication/project-report-template.docx) contains a template for the report. Your report will be a living document throughout the course, meaning that you will write on it from the start and continually improve it until the end of the course. 

## Part 1: Find a partner
Start by finding a classmate to work with. Then [join a project group on Ping Pong](https://pingpong.hj.se/courseId/21410/projectGroupsList.do#&tab=allGroups) to let the examiner know who you're working with. If you can't find a classmate to work with, email the course coordinator at [Peter.Larsson-Green@ju.se](mailto:Peter.Larsson-Green@ju.se) and he will pair you with another student in the same situation.

## Part 2: Platform idea
Come up with the platform you want to implement. The platform may be about whatever you want, but the following requirements exist:

* Users should be able to create accounts.
* Users should be able to login to accounts.
* Users should be able to create at least one other type of resource (in addition to accounts) that belongs to an account.

Example of the additional resource type could be:

* Blogposts for a platform hosting blogs.
* Diary entries for platforms hosting diaries.
* Movies for a platform where users can register movies they've watched.

If you want to have a more fun platform to implement, you probably need to have accounts + 2-3 additional resource types, but it is OK to just have one additional resource type.

Try to be creative and come up with an idea that solves a real world problem. For example, *standing in line and wait* is boring, maybe you can come up with a platform that somehow makes it fun? Or maybe a platform that entirely eliminates the need to stand in line and wait? Or maybe you know someone (football coach, friend at a company, etc.) that have some problem you can help them with by creating a platform (such as keeping track of which players attended which practice sessions, or who's responsible to bring fika to work each friday, etc.).

Users should be able to apply <abbr title="Create, Read, Update, Delete">CRUD</abbr> operations on at least accounts + 1 additional resource type on the platform, but how they do that through the frontend is up to you to decide. For example, to delete an account you may have a delete button either on the *View account* "page" or you may have a dedicated *Delete account* "page" that only contains the delete button. Users should also be able to login to the account they have created using a username and a password.

Describe your platform as detailed as possible in your project report. To a large extent you should be able to finish the chapters *Introduction*, *Database* and *Frontend Application* (describe the GUI, not implementation details for now).

## Part 3: Designing the REST API
Before you start working on this part you are expected to view the following lectures:

* [Internet Basics](../../lectures/internet-basics)
* [HTTP and Web Applications](../../lectures/http-and-web-applications)
* [REST API Basics](../../lectures/rest-api-basics)

---

Design the REST API you will implement on the backend and through which the frontend will communicate with it. By looking at the graphical user interface in your report you should be able to figure out which type of requests the frontend needs to be able to send to the backend to be able to function properly. For example, if the frontend  have a "page" showing a list of all accounts, then your REST API should send back all accounts when it receives a `GET` request for `/accounts` (or similar), and if the frontend have a "page" showing all information about an account with a specific id, then your REST API should send back all information about an account with a `SPECIFIC_ID` when it receives a `GET` request for `/accounts/SPECIFIC_ID` (or similar).

::: warning Note
You do not need to worry about login functionality (authentication and authorization) yet, that comes in Part 6.
:::

Describe the REST API in your project report. Be as detailed as possible. Other programmers should understand how to use your REST API just by reading the specification for it in your report. This means that you must mention details such as which methods, URI:s, status codes, headers etc. that are used in your REST API for each type of request it can handle.

## Part 4: Implementing the REST API in Express
Before you start working on this part you are expected to view the following lectures:

* [Node.js](../../lectures/node-js)
* [Web Applications in Node.js](../../lectures/web-applications-in-node-js)
* [npm](../../lectures/npm)
* [Express Basics](../../lectures/express-basics)
* [REST API in Express](../../lectures/rest-api-in-express)
* [SQLite](../../lectures/sqlite)
* [Using SQLite in Node.js](../../lectures/using-sqlite-in-node-js)

---

Implement the REST API you've specified in your project report so far as an Express application that stores the resources in an SQLite database. Next you'll find some guiding steps to help you get started.

### Getting started with Express
Start by creating a new folder to store the source code for your backend application:

1. Open a terminal/shell/console, for example *Windows PowerShell* in Windows.
2. Navigate to the folder where you want to create the root folder of your source code. Use the following commands:
    * `cd /projects` - Go into the sub-folder named `projects`
    * `cd ../`- Go back to the parent folder (you probably will not need to use this one)
3. Create the root folder for your project's source code files by running the following command:
    * `mkdir my-backend` - Create a new folder named `my-backend` (use a better name)
4. Go into the root folder by running the following command:
    * `cd my-backend` - Go into the sub-folder named `my-backend`
5. Create the `package.json` file (which keep tracks of which npm packages the project is using) by running the following command:
    * `npm init --yes` - Creates the `package.json`file.
6. Install the `express` package by running the following command:
    * `npm install express` - Installs the `express` package for this project

Then open the root folder of your project in your code editor:

7. Use the following command to open the root folder in Visual Studio Code:
    * `code .` - Open the root folder in Visual Studio Code.
    **Note**: [On Mac you need to add the code command](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line).

Then create the file `app.js` with the content shown below. That code is a web application sending back the text `Hello, World` when you visit [localhost:3000/](http://localhost:3000/).

```js
const express = require('express')

const app = express()

app.get("/", function(request, response){
    response.send("Hello, World")
})

app.listen(3000)
```

Test if everything works by running your application and then visit [localhost:3000/](http://localhost:3000/) a web browser or using Postman to send a GET request for the URI `http://localhost:3000/`. You can run your application either through the Debug section in Visual Studio Code or through the `node` command in your terminal/shell/console:

8. Run your web application using the following command:
    * `node app.js` – Use Node.js to execute the code in the file `app.js`

If everything works, you should see the text `Hello, World` in your web browser.

If you started the web application through a terminal/shell/console, you can stop it from running by holding <kbd>CTRL</kbd> and pressing <kbd>C</kbd> (possibly twice) in the terminal/shell/console that started it. You can then change the code in `app.js`, and then run the node command to start your web application again.

Play around a little bit to learn the basics:

* Can you change the text that is sent back to the client?
* Can you add a function handling GET requests for another URI and that sends back another text to the client?
* What happens when a client sends a GET request for a URI that does not exist?

### Getting started with SQLite
The resources on the platform should be stored in a database. In this course we will use the relational database SQLite as our database. SQLite is most often not the best choice for big platforms with a lot of users, but it is easy to use and to get started with, and you can later replace it with a more powerful database when needed.

SQLite stores the entire database in a single file and does not require any installation in addition to an npm package exposing an API you can use to communicate with it.

Start by installing the `sqlite3` package (feel free to use `sqlite` instead if you want to use promises (and optionally `async`/`await`) to avoid [callback hell](http://callbackhell.com/), although that's not something you will learn in this course):

1. Open a terminal/shell/console and navigate to your project folder.
2. Install the npm package `sqlite3` by running the following command:
    * `npm install sqlite3` - Installs the npm package `sqlite3`

Then use `sqlite3` in your backend to create a new database to store your resources in. Here are some guiding steps helping you with the accounts resources:

3. Add the line `const sqlite3 = require('sqlite3')`.
4. Add the line `const db = new sqlite3.Database("my-database.db")`.
5. Use `db.run("Your SQL query")`to send a query to the database creating a table that can be used to store the accounts on the platform.
6. Start the backend again. When you do this, the web application will send the query above to the database, which in turn will create the table to store the accounts in.
7. Open your database file in DB Browser for SQLite and verify that the table has been created.

::: warning Note
If you send a query like `CREATE TABLE accounts (...)`to the database, you will get an error the second time you start your backend, because the table `accounts` already exists in the database. Instead, you can send a query like `CREATE TABLE IF NOT EXISTS accounts (...)`, which will attempt to create the `accounts` table only if it does not already exist.
:::

::: warning Note
In the end the passwords should not be stored in plain text in the database, only their hash values, but to give you a gentle start we will not care about hashing them now.
:::

Use DB Browser for SQLite to manually insert some accounts (remember to click on the `Write Changes` button in the GUI!). Then let's write the code letting clients fetch accounts (this might not be in line with what you've written in your report, so you might need to modify the code below a little bit).

### Fetching all accounts
To let clients fetch all accounts, they can send a GET request to `/accounts`. When the backend receives this request, it needs to fetch all accounts from the database and send them back in JSON format. To make that happen, you can use the code below:

```js
// ...
app.get("/accounts", function(request, response){
    // TODO: You should probably not fetch the password...
    const query = "SELECT * FROM accounts ORDER BY username"
    db.all(query, function(error, accounts){
        if(error){
            // If something went wrong, send back status code 500.
            response.status(500).end()
        }else{
            // Otherwise, send back all accounts in JSON format.
            response.status(200).json(accounts)
        }
    })
})
// ...
```

Try sending a GET request to `/accounts` in Postman to verify that it works. Remember that you need to restart your backend each time you change the JavaScript code in it.

### Fetching a single account
To let clients fetch an account with a specific id, they can send a GET request to `/accounts/THE_ID`, e.g. `/accounts/5`. When the backend receives this request, it needs to fetch the account with this id from the database and send it back in JSON format. To make that happen, you can use the code below:

```js
// ...
app.get("/accounts/:id", function(request, response){
    const id = request.params.id
    // TODO: You should probably not fetch the password...
    const query = "SELECT * FROM accounts WHERE id = ?"
    const values = [id]
    db.get(query, values, function(error, account){
        if(error){
            // If something went wrong, send back status code 500.
            response.status(500).end()
        }else if(!account){
            // If no account with that id existed.
            response.status(404).end()
        }else{
            // Otherwise, send back the account in JSON format.
            response.status(200).json(account)
        }
    })
})
// ...
```

Try sending a GET request to `/accounts/1` and `/accounts/6876868` in Postman to verify that it works. Remember that you need to restart your backend each time you change the JavaScript code in it.

### Creating accounts
To let clients create new accounts, they can send a POST request to `/accounts`, and in the body pass information about the account to be created in JSON format, e.g. `{"username": "Alice", "password": "abc123"}`. They also need to use the `Content-Type` header with the value `application/json`. When the backend receives this request, it needs to read the information from the body of the request and then insert that information as a new account in the database, and then send back a response to the client.

To be able to read bodies written in JSON format, you need to add a middleware function from the npm package `body-parser`:

1. Open a terminal/shell/console and navigate to your project folder.
2. Install the npm package `body-parser` by running the following command:
    * `npm install body-parser` - Installs the npm package `body-parser`

Then use `body-parser` in your backend to add a middleware function parsing JSON bodies:

3. Add the line `const bodyParser = require('body-parser')`.
4. Add the line `app.use(bodyParser.json())`.

Then you can let clients create new accounts using the following code:

```js
// ...
app.post("/accounts", function(request, response){
    const account = request.body
    const query = "INSERT INTO accounts (username, password) VALUES (?, ?)"
    const values = [account.username, account.password]
    db.run(query, values, function(error){
        if(error){
            response.status(500).end()
        }else{
            const id = this.lastID
            response.header("Location", "/accounts/"+id)
        }
    })
})
// ...
```

Try adding Update and Delete operations for accounts on your own:

* To update a resource, clients should send a PUT request, the URI should identify which resource that should be updated, and the body should contain the updated resource. Use `app.put("...", function(...){ ... })` to listen for PUT requests.
* To delete a resource, clients should send a DELETE request, and the URI should identify which resource that should be deleted. Use `app.delete("...", function(...){ ... })` to listen for DELETE requests.

Then add the other operations for the other type of resources you have. Note that we yet don't bother about authentication and authorization, so all clients should for now be allowed to whatever they want.

Don't forget to describe in your project report how the backend has been implemented.

## Part 5: Implementing the Frontend
Before you start working on this part you are expected to view the following lectures:

* [SOP and CORS](../../lectures/sop-and-cors)

---

Implement the frontend application in Vue.js. You will not get any help with how to use Vue.js here (use what you learned from the laboratory work), but we will give you some instructions on how to communicate with the backend through its REST API.

::: warning Remember
The frontend does not yet contain login functionality, so you can't implement that part of the frontend yet.
:::

Don't forget to describe in your project report how the frontend has been implemented.

### Enabling CORS on the backend
To start with, web browsers will forbid the frontend to communicate with the backend due to the [Same-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). To allow it, you need to add support for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) to your backend application. In Express it's as easy as this (using the `*` value in the CORS headers to allow any clients to do anything):

```js
const express = require('express')
//...

const app = express()

// Enable CORS.
app.use(function(request, response, next){
	
	// Allow client-side JS from the following websites to send requests to us:
	// (not optimal, for better security, change * to the URI of your frontend)
	response.setHeader("Access-Control-Allow-Origin", "*")
	
	// Allow client-side JS to send requests with the following methods:
	response.setHeader("Access-Control-Allow-Methods", "*")
	
	// Allow client-side JS to send requests with the following headers:
	// (needed for the Authorization and Content-Type headers)
	response.setHeader("Access-Control-Allow-Headers", "*")
	
	// Allow client-side JS to read the following headers in the response:
	// (in addition to Cache-Control, Content-Language, Content-Type
	// Expires, Last-Modified, Pragma).
	// (needed for the Location header)
	response.setHeader("Access-Control-Expose-Headers", "*")
	
	next()
	
})
// ...
```

::: warning Note!
FireFox did before support the `*` value only in the `Access-Control-Allow-Origin` header, so if you wanted to support Firefox you needed to list the values you want to allow in the other 3 headers, e.g. `response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type")` instead of using `*`, but [support for the `*` value was added in FireFox 69](https://bugzilla.mozilla.org/show_bug.cgi?id=1309358). If you want to support older versions of FireFox, you need to list the supported values instead of using `*`.
:::

### Sending HTTP requests from the frontend
To send HTTP requests from your Vue.js application you can either use [the old XMLHttpRequest object](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) or [the new `fetch()` function](https://davidwalsh.name/fetch). Below you find example of how to use each of them.

<Tabs>
<Tab title="XMLHttpRequest">

```js
const request = new XMLHttpRequest()

// Specify method and URI.
request.open("POST", "https://localhost:3000/accounts")

// Add headers to the request.
request.setRequestHeader("Content-Type", "application/json")
// ...

// Add a callback function that will be called when
// we receive back the response.
request.addEventListener('load', function(){
    const statusCode = request.status
    const bodyAsString = request.responseText
    const bodyAsJsObject = JSON.parse(bodyAsString)
    const locationHeader = request.getResponseHeader("Location")
    // ...
})

// Add a callback function that will be called if
// the communication with the server fails.
request.addEventListener("error", function(){
    // Request failed :(
})

// Specify body and send it.
const accountToBeCreated = {
    username: "Alice",
    password: "abc123"
}
const bodyAsString = JSON.stringify(accountToBeCreated)
request.send(bodyAsString)
```

</Tab>
<Tab title="fetch()">

You're not expected to learn how promises works in this course, but if you're curios you can learn the basics about promises on your own by reading the article [Understanding promises in JavaScript](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1).

The benefits with using promises instead of callback function is that you can chain them. You can learn about how to chain promises by reading the article [Promises chaining](https://javascript.info/promise-chaining). 

And of course you also need to learn how to use the `fetch()` function works. You can do that in the article [Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch).

```javascript
const accountToBeCreated = {
    username: "Alice",
    password: "abc123"
}
const bodyAsString = JSON.stringify(accountToBeCreated)

fetch("https://localhost:3000/accounts", {
    method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: bodyAsString
}).then(function(response){
    const statusCode = response.status
    const locationHeader = response.headers.get("Location")
    return response.json()
).then(function(bodyAsJsObject){
    // ...
}).catch(function(error){
    // Called when something goes wrong :(
})
```
</Tab>
<Tab title="fetch() with async and await">

The main benefit with promises is that we can use the `async` and `await` keywords in JavaScript instead of chaining them. This way, we end up writing code that looks to to run synchronously (and hence very easy to read ☺), but it will run asynchronously (hence not be blocking ☺).

To learn how to use `async`/`await` you can read the article [How to use Async Await in JavaScript.](https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb). Using promises with `async`/`await` is probably easier than learning how to chain promises, so don't be afraid of trying.

```javascript
async function createAccount(accountToBeCreated){
    
    const bodyAsString = JSON.stringify(accountToBeCreated)
    
    const response = await fetch("https://localhost:3000/accounts", {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: bodyAsString
    })
    
    const statusCode = response.status
    const locationHeader = response.headers.get("Location")
    const bodyAsJsObject = await response.json()
    
    return bodyAsObject
    
}

try{
    const bodyAsObject = await createAccount({
        username: "Alice",
        password: "abc123"
    })
    // ...
}catch(error){
    // Called when something goes wrong :(
}


```
</Tab>
</Tabs>

## Part 6: Adding Login to the REST API
Add authentication and authorization to the REST API in your project report as described by the [OAuth 2.0 Framework](https://oauth.net/2/) and [OpenID Connect](https://openid.net/connect/). You basically need to:

* Add one request clients can use to "login" to an account (to obtain an access token and an id token).
    * Clients also need to know which claims the id token contains.
* Describe how clients can pass the access token to the backend in requests.
* Describe which clients that are allowed to perform which operations in the API.

You only need to support the *Authorization Grant* called *Resource Owner Password Credentials*. Follow the details in the specification as much as possible.

::: danger Report Feedback
You may [submit your report on Ping Pong and get some feedback on it](https://pingpong.hj.se/courseId/21410/content.do?id=16690466) once before you submit your project work for grading at the end of the course. When you have come this far in your project work it is probably a good idea to do that. Note that you only have until 2019-10-04 to submit your report for feedback.
:::

## Part 7: Implementing Login in Express
Implement authentication and authorization in the Express application the way you describe it in the previous part. You should also change the code to store hash values of the users passwords, instead of storing them as plain text. Here we give you some hints about how to accomplish this.

### Adding login/Creating tokens
According to the OAuth 2.0 specification, when a user logs in with a username and password, they should send it to the server in the body of the request in the data format `application/x-www-form-urlencoded`. This is the same data format that is used in the querystring, e.g. `variable1=value1&variable2=value2&...`. When the backend receives such a request, it needs to parse the body written in that data format. This can be added to Express using a middleware from the npm package `body-parser`:

```js
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))
```

When you have added this middleware, `request.body` will be populated with information from the body, e.g.:

```js
// Body: variable1=value1&variable2=value2
app.post('/tokens', function(request, response){
    const variable1 = request.body.variable1 // value1
    const variable2 = request.body.variable2 // value2
    // ...
})
```

You need to check that the body contains a variable called `grant_type` with the value `password`. If that's not the case, then the user tries to login in one of the other ways described in OAuth 2.0 that we don't support, and we should send back an error response (see the specification for the details).

If `grant_type` has the value `password`, then the body should also contain the variables `username` and `password`. If that's not the case, then something is wrong with the request and we should send back an error response (see the specification for the details).

If `grant_type` has the value `password` and the body also contains the variables `username` and `password`, then we need to fetch the account from the database with the given `username` and see if the `password` matches. If  no account with that username exists, or if the password is wrong, we should send back an error response (see the specification for the details).

Otherwise, if everything is OK and the user should be signed in, we need to create an access token the user can send to us in the future as a proof of being signed in to a specific account. We can implement these access tokens as [JSON Web Tokens](https://jwt.io/) (JWT). To create a new JWT, we can use the npm package [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken). To install it, run the command `npm install jsonwebtoken` in the root folder of your backend application. Then you can use it like this:

```js
const jwt = require('jsonwebtoken')

const jwtSecret = "some_hard_to_guess_characters"

const dataToPutInTheToken = { // AKA "claims" and "payload".
    country: "Sweden"
}

const accessToken = jwt.sign(dataToPutInTheToken, jwtSecret) // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs"
```

In the access token you probably want to put something that identifies the user, such as the user's account id, and then send it back to the client (see the specification for the details).

When you're done you can use Postman to test if you can login and get back an access token. If you do, you can then use [the debugger at jwt.io](https://jwt.io/#debugger-io) to verify that the token contains expected data.

### Receiving and extracting tokens
When a client in the future sends requests to the backend and need to prove that she's the owner of a specific account, she can pass the access token in the Authorization, e.g. `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs`. When we receive that request we need to extract the access token from this header and then extract the data from the token that we put inside of it. We can do that like this:

```js
const jwt = require('jsonwebtoken')

const jwtSecret = "some_hard_to_guess_characters" // Same secret as before.

app.get("/some-protected-resource", function(request, response){
    
    let dataInToken = null
    
    try{
        const authorizationHeader = request.get("Authorization") // E.g. "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs"
        const accessToken = authorization.substr("Bearer ".length) // E.g. "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs"
        dataInToken = jwt.verify(accessToken, jwtSecret) // E.g. {country: "Sweden"}
    }catch(error){
        // Access token not present or invalid.
    }
    
    if(dataInToken){
        // We received a valid access token :D
    }else{
        // We didn't receive an access token or the received access token was invalid :(
    }
    
})
```

After we have extracted the data from the token we can figure out to which account the user logged in to before, and then figure out if the user is authorized to make the request or not.

When you have added authorization checks to your code you can use Postman to send requests with the Authorization header containing the access token and see if it works as it should. You can also use [the debugger at jwt.io](https://jwt.io/#debugger-io) to create invalid tokens and see if your backend properly detects them as invalid.

::: tip Avoiding copy-pasting code
Extracting the access token from the `Authorization` header like that and then extract the data from the access token is something you want to do in many of the requests you need to be able to handle in the backend, so instead of copy-pasting all of this code it is better to put it in a middleware function.
:::

::: warning Note!
One should rather use `jwt.sign()` and `jwt.verify()` asynchronously by providing a callback function, but to simplify we used them synchronously instead (they send back a return value). By using them synchronously they are blocking, so concurrent incoming HTTP requests are queued instead of handled immediately (the calls to `jwt.sign()` and `jwt.verify()` takes many milliseconds to execute). The call to these functions with a callback function are not blocking (the long running operations are executed in the background/another thread).
:::

### Adding OpenID Connect
When a client logs in and receives back an access token, the client does probably also want to know to which account the user logged into, so the client knows the username of the account, the id of the account, etc. For that we can use [OpenID Connect](https://openid.net/connect/). It specifies that when the client logs in, we do not only send back an access token, but also an id token that contains information about who the user is. Unlike access tokens, id tokens have to be implemented as JWT.

You get to decide what you want to put in your id token, but follow the specification as much as possible.

When you're done you cna use Postman and see if you also get back an id token when you login. If you don you can use [the debugger at jwt.io](https://jwt.io/#debugger-io) to verify that the token contains expected information.

### Hashing passwords
Storing passwords in plain text is a bad idea. Users often use the same password on different platforms, and if their passwords on our platform are leaked (by accident or by a hacker that has manage to hack our platform), anyone can login on their accounts on the other platforms they are using. Quite bad!

Instead, passwords should be hashed, and we should only store the hash value of their passwords. There exists many different hashing algorithms, but one of the best one to use for hashing passwords is [bcrypt](https://en.wikipedia.org/wiki/Bcrypt). Many hashing algorithms are designed to be fast, so the hash value quickly can be computed, but that is not suitable for passwords, because then hackers can use [brute-force](https://en.wikipedia.org/wiki/Brute-force_attack) to figure out what the original password was. bcrypt on the other hand has been designed to be slow to prevent this, and you can control how slow it should be (so you can make it even slower in the future when computers have become faster).

To use bcrypt in Node.js you can use the npm package [bcrypt.js](https://www.npmjs.com/package/bcryptjs):

1. Download the npm package to your backend application:
    * In the root folder of your backend application, run the command `npm install bcryptjs`.
2. When creating a new account, hash the user's password using:

```js
const bcrypt = require('bcryptjs')

const hashingRounds = 8 // How slow it should be, the higher number the slower.

const passwordToHash = "abc123"

const hashValue = bcrypt.hashSync(passwordToHash, hashingRounds) // "$2y$08$qc1V89V0GAstCI/NAMM4HO4DcP9Jwgk/h/WX2JsgvTIZqXRw6vxAK"

// Store hashValue with the user's account in the database instead of passwordToHash.
```

3. When the user logs in, fetch the hashValue from the database and see if the provided password matches that one:

```js
const bcrypt = require('bcryptjs')

const usersEnteredPassword = "abc123"
const storedHashValue = "$2y$08$qc1V89V0GAstCI/NAMM4HO4DcP9Jwgk/h/WX2JsgvTIZqXRw6vxAK"

if(bcrypt.compareSync(usersEnteredPassword, storedHashValue)){
    // Correct password.
}else{
    // Wrong password.
}
```

When you're done, use Postman to create some new accounts and then try to login to these.

::: warning Remember
The old accounts in your database contains tha password in plain text, so you should not be able to login to them anymore. Feel free to delete these.
:::

::: warning Note!
To simplify, many things you should think of for a real platform has been ignored in the instructions above, but here are short descriptions of these things for the curious ones:

One should rather use the npm package `bcrypt` instead of `bcryptjs`. The JavaScript you write to use them is the same, but `bcryptjs` has been implemented in JavaScript, making it 30% slower than `bcrypt`, which is implemented in C, so it is better to use `bcrypt`, but [`bcrypt` has some dependencies](https://github.com/kelektiv/node.bcrypt.js#dependencies) making it a bit harder to use.

One should rather use the asynchronous functions `hash()` and `compare()` instead of the synchronous `hashSync()` and `compareSync()`. The synchronous functions are easier to use (we have return values instead of callback functions), but they are blocking, so concurrent incoming HTTP requests are queued instead of handled immediately. The asynchronous functions computes the hash value in the background/in another thread, so they don't have this shortage. 

You should most likely not use `8` as the number of hashing rounds (too low), but [it is a bit complicated to find out the optimal number of rounds to use](https://security.stackexchange.com/a/3993/70743), and to do that you also need to know which server your backend will be running on in the end, and since deploying a backend on a server is not part of this course, we don't have all the details to compute it. 
:::

## Part 8: Adding Login to the Frontend
Now that the backend have login functionality through access tokens and id tokens, use this login functionality in the frontend application. When you're done, users should only be able to do what they should be able to. For example, a user should not be able to delete another user's account, or similar. 

You are recommended to keep track of wether the user is logged in or not the same way as you did in the lab, i.e. in add a `user` object to `App.vue` and pass this as a props to your other Vue components.

When the user successfully logs in you get back an id token with information about the user (it's id, username, etc.). You need to open up this JWT and read out the information from it. You can't do that with the npm package `jsonwebtoken` (that you used in your backend), because it only works in Node.js, and not in web browsers. Instead, you can use the npm package `jwt-decode`:

1. In the root folder of your frontend application, run the command `npm install jwt-decode`.
2. To read out the data from the id token, use the function this npm package consists of:

```js
const jwtDecode = require('jwt-decode')

const idToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInByZWZlcnJlZF91c2VybmFtZSI6IkFsaWNlIn0.3Xp7iQkttgTE6hpuT28LFdZ7EYWHlPndqdaWoIzTr9A"

const dataInIdToken = jwtDecode(idToken) // E.g. {sub: 4, preferred_username: "Alice"} 
```

## Part 9: Presentation
Present your platform to the rest of your class using a projector. The reason for the presentation is two-folded:

* You get some practice in presenting your work, which is a very important skill in your future professional career.
* You get to see other platforms that you should be able to implement yourself.

At the presentation you will simply tell the audience what users can do on your platform and why someone would like to do that, and then show how users can use the platform through the frontend application. You should not show any code nor explain any implementation details; just give a practical demonstration of how users will use the platform. The best way to do that is by having one of you speaking and telling the other one what to do (e.g. *Create a new account*), and then the other shows how to do that.

To be allowed to present your work your you must at least be done with Part 5.

You may use at most 10 minutes for your presentation. If you need more than this to show all features, then skip some of them. If your presentation takes just 3 minutes, that could be OK as well. Don't start talking about irrelevant things just to make the presentation longer.

If you can't present your work on your own laptop, email the course coordinator and he will help you.

There are 3 different sessions for the demonstration, and you need to present your platform one of them. Select which one by [joining the corresponding project group on Ping Pong](https://pingpong.hj.se/courseId/21410/projectGroupsList.do) (first come, first served).

Your presentation will not be graded; consider it as (mandatory) practice.

## Part 10: Grade 4 and 5
Be sure to read through [Project Grading Guidelines](./project-grading-guidelines) to see that you follow the guidelines for grade you're aiming for. To be able get grade 4 and 5 you also need to implement the extra functionality described next.

### SDK (required for grade 4)
Create an SDK other programmers can use to communicate with your backend from their client-side JavaScript code. Then also use it in your own frontend.

Also update the report to reflect this.

### Supporting Multiple Data Formats (required for grade 4)
Add support for another data format in addition to JSON (+ www-form-urlencoded for logging in). This should work in both requests and responses, so when you receive a request you need to look at the `Content-Type` header to figure out which format the body in the request is written in, and you also need to look at the `Accept` header to figure out in which format you should send back the body in the response in.

Example of data formats you can support:

* XML
* YAML

Try to [find a suitable npm package](https://www.npmjs.com/) doing most of the work for you.

Also update your report to reflect this.

### Third-Party Authentication (required for grade 5)
Add third-party authentication to your application so users can login on your platform with their Google account (or whichever third-party you choose to use) instead of using a username and password. You need to implement this in your backend application and then use it in your frontend application as well.

Also update your report to reflect this.

## Part 11: Final submission
Submit your project work for grading by submitting [the Ping Pong assignment Project Work - Final Submission](https://pingpong.hj.se/courseId/21410/content.do?id=16690476). The source code for your backend and frontend should be submitted as two separate ZIP files, and they should not contain the `node_modules` folder (you need to manually delete it). When those ZIP files have been unzipped on the examiner's own computer, it is very important that the applications can be started and are fully functional just by running the following two commands (for each of the applications):

1. `npm install`
2. `node app.js` or `npm run serve` (or whatever)

If this does not work you need to submit your work again at the next examination occasion, so double check that this work yourself before you submit your work!