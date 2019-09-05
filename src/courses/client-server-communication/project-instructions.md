---
navbarTitle: Client-Server Communication
---
# Project Instructions
As project you should work in pairs and create a platform (a solution consisting of both a backend application handling the data on the platform and a frontend application containing the graphical user interface through which users will use the platform). The backend should expose a REST API which the frontend can use to work with the data on the platform. The platform should be implemented with the technologies taught in the course, i.e. Node.js/Express for the backend and Vue.js for the frontend.

You should not only implement the platform, you should also write a report describing the platform and its implementation, including what it can be used for and how it has been implemented. The file [project-report-template.docx](/course-material/coursers/client-server-communication/project-report-template.docx) contains a template for the report. Your report will be a living document throughout the course, meaning that you will write on it from the start and continually improve it until the end of the course. 

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
FireFox supports the `*` value only in the `Access-Control-Allow-Origin` header, so if you want to support Firefox you need to list the values you want to allow in the other 3 headers, e.g. `response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type")` instead of using `*`. [FireFox 69 seems to support the `*` value in these three headers](https://bugzilla.mozilla.org/show_bug.cgi?id=1309358), but `*` in the `Access-Control-Allow-Headers` will not necessarily include the `Authorization` headers, which needs to be listed explicitly. 
:::

### Sending HTTP requests from the frontend
To send HTTP requests from your Vue.js application you can either use [the old XMLHttpRequest object](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) or [the new `fetch()` function](https://davidwalsh.name/fetch). Below you find example of how to use each of them.

<Tabs>
<Tab title="XMLHttpRequest">

```js
const request = new XMLHttpRequest()

// Add headers to the request.
request.setRequestHeader("Content-Type", "application/json")
// ...

// Specify method and URI.
request.open("POST", "https://localhost:3000/accounts")

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
</Tabs>

## Part 6: Adding Login to the REST API
Add authentication and authorization to the REST API in your project report as described by the [OAuth 2.0 Framework](https://oauth.net/2/) and [OpenID Connect](https://openid.net/connect/). You basically need to add:

* One request clients can use to "login" to an account (to obtain an access token and an id token).
* Describe how clients pass the access token to the backend in the requests.
* Describe which clients that are allowed to perform which operations in the API.

You only need to support the *Authorization Grant* called *Resource Owner Password Credentials*. Follow the details in the specification as good as possible.

::: danger Report Feedback
You may [submit your report on Ping Pong and get some feedback on it](https://pingpong.hj.se/courseId/21410/content.do?id=16690466) once before you submit your project work for grading at the end of the course. When you have come this far in your project work it is probably a good idea to do that. Note that you only have until 2019-10-04 to submit it.
:::

## Part 7: Implementing Login in Express
Implement authentication and authorization in the Express application the way you describe it in the previous part.

::: warning Note
More detailed instructions will be available here later... (npm package to create JWT, urlencoded middleware, hash passwords...)
:::

## Part 8: Adding Login to the Frontend
Now that the backend have login functionality through access tokens and id tokens, use this login functionality in the frontend application. When you're done, users should only be able to do what they should be able to. For example, a user should not be able to delete another user's account, or similar. 

::: warning Note
More detailed instructions will be available here later... (npm package to read JWT, ..)
:::

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
Be sure to read through [Project Grading Guidelines](./project-grading-guidelines) to see that you follow the guidelines for grade 3, 4 and 5 respectively (depending on which grade you're aiming for). To be able get grade 4 and 5 you also need to implement the extra functionality described next.

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