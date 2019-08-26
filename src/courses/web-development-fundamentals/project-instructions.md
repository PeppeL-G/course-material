---
navbarTitle: Web Development Fundamentals
---
# Project Instructions
This page contains instructions for the project work.

## Introduction
As project work you should (individually) create a personal website. You have a lot of freedom when it comes to the design and functionality of the website, but the following three requirements exist:

* There should exist basic pages with trivial information, including:
  * A home/start page.
  * An about page.
  * A contact page.
* There should exist at least three different type of resources on the website (stored in a relational database).
* Depending on what makes most sense, *only you* or *anyone* should be able to apply <abbr title="Create/Retrieve/Update/Delete">CRUD</abbr> operations on the resources through the website.

To be able to distinguish *only you* from *anyone*, you also need to have login-functionality for a single account (i.e. a hard-coded username & password).

Use whichever type of resources you want. Some suggestions are:

* Blogposts (only you can create/update/delete entries, anyone can retrieve entries).
* Software projects for a portfolio (only you can create/update/delete entries, anyone can retrieve entries).
* Guestbook posts (only you can update/delete entries, anyone can retrieve/create entries).
* FAQ entries (only you can update/delete entries, anyone can retrieve/create entries).

Implement the website using technologies taught in this course. Avoid using client-side JavaScript. If you insist on using client-side JavaScript, it is OK, but:

* Good client-side JavaScript code will not improve your grade.
* Bad client-side JavaScript code will lower your grade.
* Your entire website must still work for users who have JavaScript disabled in their web browser (use client-side JavaScript only to enhance the browsing experience for the users who have JavaScript enabled in their web browsers).

In addition to implementing the website, you should also write a report describing the implementation of the website. The file [project-report-template.docx](/course-material/web-development-fundamentals/project-report-template.docx) contains a template with further instructions on this. Your report will be a living document throughout the course (meaning that you will write it as the course run and continuously improve it). 

The page [Project Grading Guidelines](./project-grading-guidelines) contains guidelines for how your work will be graded. You are strongly recommended to read through it every now and then.

To help you with your project work, we have divided it into smaller parts that should be completed in order. The rest of this page contains descriptions of these smaller parts. Before you start working on the first part, you are strongly recommended to read through all the parts, which will give you a good overview of the work that lies ahead.

Good luck!

## Installing required software
**If you work on the computers in E2404, E2432 or E2433**, all required software should already be installed for you, so no need to install anything on your own.

**If you work on a school computer in any other room**, you'll most likely need to manually install the required software through the *Software Center* application.

**If you work on your own private computer**, you'll need to download and install all required software yourself. In this course, we only use free software available for both Windows, Mac and Linux.

The required software is:

* [Node.js](https://nodejs.org/)
    1. Use the Current version.
    2. In the installation process, make sure the following features are installed (they are checked by default, so simply don't uncheck them!):
        * Node.js runtime
        * npm package manager
        * Add to PATH
    3. To verify that Node.js has been successfully installed, run the command `node -v` in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of Node.js that was installed, something like `v11.6.0`.
* [npm](https://www.npmjs.com/)
    * This one is installed along with Node.js, so you don't need to install it separately. However, you might want to update it to the latest version (not required):
        * [Update npm instructions](https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm)
    * To verify that npm has been successfully installed, run the command `npm -v` in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of npm that was installed, something like `6.9.0`.

The following software tools are not required (use whichever tools you want), but recommended:

* [Visual Studio Code](https://code.visualstudio.com/)
    * IDE with good support for writing, running and debugging Node.js and JavaScript code.
* [DB Browser for SQLite](https://sqlitebrowser.org/)
    * Database management tool you can use to visualize/debug the database. An alternative is to install and use [the SQLite extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite).

## Part 1: Specifying functionality & graphical user interface
Before you start working on this part, you are recommended to:

* View the following videos:
    * Internet
    * Web Applications and HTTP
    * Character Encodings
    * Using Shells
    * The mini-course in Git
        * You don't have to use Git in this course, but you are strongly recommended to make it a habit to use it for all your programming related tasks (you will use it a lot as a professional programmer, and you will have very good use of it in other courses, so the sooner you learn it, the better).

---

Your first task is to specify:

* The functionality of the website (which different type of resources it consists of and what you/anyone can do with them).
* What the graphical user interface (GUI) should look like.

Your decisions should be described in the project report, so in this part of the project work, you will not do any programming, but only work on your report. A good way to describe the functionalities is by sketching what the GUI will look like in the end. Then the reader can easily see all the functionality just by looking at pictures. An example of that is shown in [project-report-template.docx](/course-material/web-development-fundamentals/project-report-template.docx).

Designing a website with a user-friendly GUI is no simple task. Therefore, designers have created CSS frameworks that makes it easy for people who are not good at design to create GUIs that are user-friendly. These frameworks primarily consist of components one can use to implement the GUI (such as one component representing a form, another one representing a menu, a third one representing an article, etc.). Since you have to use a CSS framework in your project work, you are recommended to now select which CSS framework you are going to use, and then design your website using the available components in that framework.

Use whichever CSS framework you want, but we recommend you to use [Spectre.css](https://picturepan2.github.io/spectre/index.html). It is a small and simple framework, which makes it easy to learn and use. It comes with components such as:

* [Navbar](https://picturepan2.github.io/spectre/layout/navbar.html) - A horizontal menu suitable to have at the top of the page as the main menu.
* [Nav](https://picturepan2.github.io/spectre/components/nav.html) - A vertical menu suitable to have on one of the sides of the page as the main/sub menu.
* [Pagination](https://picturepan2.github.io/spectre/components/pagination.html) - A collection of links suitable to use when listing resources spread over multiple pages.
* [Empty states](https://picturepan2.github.io/spectre/components/empty.html) - A component suitable to use on a page that should display a collection of resources but none exist yet.
* [Modals](https://picturepan2.github.io/spectre/components/modals.html) - A dialog appearing in front of the page.
    * **Note**: You can make modals appear without using client-side JavaScript. When clicking on a "Show modal" button (a link), send back HTML code containing and showing the modal.
* [Tabs](https://picturepan2.github.io/spectre/components/tabs.html) - A collection of views the user easily can switch between.

We recommend you to use a simple layout. This is no design course, so do not waste too much time on the design. If you turn out to have time left at the end of the course, you can use that time to improve the design of the website.

Feel free to show your report to one of the teachers at the lab sessions to get some feedback on your work. Don't expect the teacher to read your report, only to look at the figures in the report, but that should be enough to give you valuable feedback.
 
## Part 2: Implementing the graphical user interface
Before you start working on this part, you are recommended to:

* View the following videos:
    * HTML
    * CSS
    * CSS Frameworks and Spectre.css
    * Node.js
    * Web Applications in Node.js
    * JavaScript
    * npm
    * Express Basics
    * Handlebars
    * Web Applications in Express
* Complete the following optional exercises:
    * Exercise 1: HTML
    * Exercise 2: CSS
    * Exercise 3: JS

---

Implement the website in Node.js. Ideally, the website's recourses are stored in a database, but to get a gentler start, you can instead store the resources in a file (i.e. use "dummy data") for now. 
To start, run the following commands in a shell/console/terminal (such as Windows PowerShell in Windows):

1. `mkdir my-website` - Creates a new folder named `my-website` (do not call the folder `my-website`; use a proper name).
2. `cd my-website` - Changes the current working directory to `my-website`.
3. `npm init --yes` - Creates the `package.json` file, which keep tracks of which npm packages you have installed.
4. `npm install express` - Installs the npm package `express`.
5. `npm install express-handlebars` - Installs the npm package `express-handlebars`.

::: warning Note
The instructions in this document is for the template syntax language Handlebars. If you prefer, feel free to use another template syntax language. You find a list of template engines you can use at [https://github.com/expressjs/express/wiki](https://github.com/expressjs/express/wiki#template-engines).
:::

Then create the following files with their corresponding content:

<Tabs remember-selected-key="express-example-45543435">
<Tab title="dummy-data.js">

```javascript
exports.humans = [{
  id: 0,
  name: "Alice"
}, {
  id: 1,
  name: "Bob"
}]

exports.pets = [{
  id: 0,
  humanId: 1,
  name: "Catty"
}]
```

</Tab>
<Tab title="app.js">

```javascript
const dummyData = require('./dummy-data')
const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine("hbs", expressHandlebars({
  defaultLayout: 'main.hbs'
}))

app.get('/', function(request, response){
  const model = {
    humans: dummyData.humans
  }
  response.render("show-all-humans.hbs", model)
})

app.listen(8080)
```

</Tab>
<Tab title="views/show-all-humans.hbs">

```handlebars
<h2>All Humans</h2>
{{#if humans.length}}
  <ul>
    {{#each humans}}
      <li>{{name}}</li>
    {{/each}}
  </ul>
{{else}}
  <p>No humans exist.</p>
{{/if}}
```

</Tab>
<Tab title="views/layouts/main.hbs">

```handlebars
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello</title>
  </head>
  <body>
    <h1>My Website</h1>
    {{{body}}}
  </body>
</html>
```
</Tab>
</Tabs>

Then run the following command:

6. `node app.js` - Execute the code in the file `app.js` using Node.js.

and then visit [http://localhost:8080/](http://localhost:8080/) in a web browser, and you should see a list of humans.

Continue by changing and adding code so it instead looks like your own personal website, as you specified in your report. Here is a suggestion on in which order to implement the features:

1. Add references to your CSS framework in the layout file.
    * For many CSS frameworks, you can just add a `<link>` element to the CSS file containing the framework's code on a Content Delivery Network (CDN).
    * Many CSS frameworks are distributed as npm packages. For these, you can download the source code for the framework using the `npm install ***` command, and then add a `<link>` element to the CSS file in the `node_modules` folder.
2. Implement most of the layout of your website by changing the code in the layout file.
3. Create new views (new `.hbs` files in the `views` folder) representing your basic pages (about page, contact page, etc.). Then change your JavaScript code so web browsers can request these pages.

::: warning Remember!
Each time you change your JavaScript code, you need to restart the application for the changes to take effect. In most shells, you can stop the application from running by pressing `[CTRL]` + `[C]` twice, and then to start it again, simply run the command `node app.js` again. In most shells, you can press the up arrow on the keyboard to get the previously executed command.
:::

4. Change your dummy data to represent your own resources instead. Your dummy data will later be replaced with a relational database, so try to structure the resources the same way as you would structure them in a relational database (this will make the transition to a relational database easier).
5. Add new views representing pages with CRUD operations for your resources. Then change your JavaScript code so web browsers can request these pages.

::: warning Note!
You will use forms in your views (for create, update and delete operations), but handling the submission of these forms will be dealt with later. Implementing the login functionality is also something you will do later. For now, just having these forms is enough; nothing should happen when they are submitted.
:::

When you are done, it should be possible for a user to visit all the different pages on your website (including the pages only you should be able to access in the end). Update your report with a description of your implementation so far.

::: tip Tips
When you version control a project, do not store the source code for the dependencies in your own repository. For Node.js applications, the `node_modules` folder should not be commited to your repository; it's enough to commit `package.json` to your repository. That file contains a list of all your dependencies, and others that clones your project need to run the command `npm install` to install all these dependencies in their own `node_modules` folder.
:::

## Part 3: Using a relational database
Before you start working on this part, you are recommended to:

* View the following videos:
    * SQLite
    * Using SQLite in Node.js

---

Storing data in variables works, but it is usually a bad solution for several reasons:

* When the web application stops running, the data will be lost.
* Computers' main memory (where variables are stored) is quite limited, so storing a big amount of data here is not appropriate.
* It makes it hard to scale the web application (having it running on multiple servers at the same time), which is needed when your website becomes really popular and have a lot of visitors.

Most web applications instead store data in a relational database, such as MySQL. Relational databases store the data in secondary storage (i.e. the hard drive), where it will persist even after the computer is shut down. Usually, the database runs on a server separate from the server the web application runs on, as shown in <FigureNumber/> below. 

<Figure caption="Common web application architecture.">
  <mermaid>
  graph LR
    subgraph "Client"
      webBrowser[Web Browser]
    end
    subgraph "Web Server"
      webApplication[Web Application]
    end
    subgraph "Database Server"
      db[Database]
    end
    webBrowser -- HTTP --> webApplication
    webApplication -- SQL --> db
  </mermaid>
</Figure>

Having the database running on a separate server from the web application (instead of on the same server) has a couple of advantages:

* Web applications and databases have different hardware needs. Databases read/write a lot from/to secondary storage, so they need to do this fast to operate efficiently. But good/fast secondary storage (i.e. SDDs) is expensive. Web applications on the other hand process a lot of data (incoming HTTP requests), and instead need fast (expensive) CPUs, and possibly much primary storage to utilize caching. By using two different servers, you can better match the software with its hardware needs. 
* If the web application and the database run on the same server, the maximum number of HTTP requests the web application can handle will be much lower, since the web application only have access to the hardware "half of the time" (the hardware is shared with the database).

However, setting up a database on a separate server is not straightforward and takes time, so in this course we will instead run the database on the same server as the web application, as shown in <FigureNumber/> below.

<Figure caption="Web application architecture with only one server.">
  <mermaid>
  graph LR
    subgraph Client
      webBrowser[Web Browser]
    end
    subgraph Server
      webApplication[Web Application]
      db[Database]
    end
    webBrowser -- HTTP --> webApplication
    webApplication -- SQL --> db
  </mermaid>
</Figure>

Furthermore, we will use SQLite as our database, and it will not run as a separate process, but part of the process executing our web application. This makes it very easy to use, but will be a bottleneck for scaling (but remember, [premature optimization is the root of all evil](https://stackify.com/premature-optimization-evil/)). 

Start by installing an npm package through which you can use SQLite (you don't need to install SQLite separately, just installing the npm package will be enough). You can use the package `sqlite3` for this.
Then delete `dummy-data.js`, and create, store and retrieve your data from an SQLite database instead (putting this code in a file called `database.js` (or similar) makes sense). Make sure your tables use proper primary keys, foreign key constraints, unique constraints, etc.

::: warning Note!
Do not send `CREATE TABLE xxx (...)` queries to the database, because the second time your web application starts, the tables will already exist, and you will get an error. Use `CREATE TABLE IF NOT EXISTS xxx (...)` instead. And if you screw up, you can always start over by deleting the database file.
:::

You can use *DB Browser for SQLite* to view your database and manually insert some records.

::: tip Tips
The database is not part of the source code for a web application and should therefor not be commited to a version control repository. When someone else clones your project and start your web application, the database should automatically be created if it does not exist.
:::

When you are done, your web application should work precisely the same way as when you had completed Part 2 but the resources should now be stored in the database instead of variables. Then update your report with a description of your implementation so far, and if you want feedback on your report, show your figures in the report to a teacher at one of the lab sessions.
 
## Part 4: Handling forms
When a user submits an HTML form (`<form>`), the web browser will send a new HTTP request to the server. If the GET method is used (`<form method="get">`), the data entered in the form will be added to the query string in the URI (the part after the `?` in the URI). In an express callback function receiving the request, that data can be accessed using the `query` property, i.e. `request.query`. This will be an object whose keys corresponds to the value given to the `name` attribute in the `<input>` fields in the form and the values will be the text the user entered in those `<input>` fields. It works similar for the other input elements you can use in forms (dropdown lists, checkboxes, radio buttons, etc.).

::: tip Example

<Tabs remember-selected-key="express-form-get-example">
<Tab title="views/search.hbs">

```html
<form method="get" action="/search">
  City: <input name="city"><br>
        <input type="submit">
</form>
```

</Tab>
<Tab title="app.js">

```js
const express = require('express')

const app = express()

// GET /search?city=WHATEVER_THE_USER_ENTERED
app.get('/search', function(request, response){
  const city = request.query.city // WHATEVER_THE_USER_ENTERED
  // ...
})

app.listen(8080)
```

</Tab>
</Tabs>

:::

If the POST method is used to submit the form (`<form method="post">`), the data in the form will be inserted added to the body of the request, expressed in the data format `application/x-www-form-urlencoded` (the header `Content-Type: application/x-www-form-urlencoded` is added to the HTTP request). Express does not provide a convenient way to read this data, but the npm package `body-parser` can be used to do that. Once you have installed it (`npm install body-parser`) and added it as a middleware function using its `urlencoded()` function, you can access the data entered in form using `request.body`.
 
::: tip Example

<Tabs remember-selected-key="express-form-post">
<Tab title="views/search.hbs">

```html
<form method="post" action="/search">
  City: <input name="city"><br>
        <input type="submit">
</form>
```

</Tab>
<Tab title="app.js">

```js
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({
  extended: false
}))

// POST /search
// Body: city=WHATEVER_THE_USER_ENTERED
app.post('/search', function(req, res){
  const city = req.body.city // WHATEVER_THE_USER_ENTERED
  // ...
})

app.listen(8080)
```

</Tab>
</Tabs>

:::

Change your JavaScript code to handle submissions of forms (except the login and logout forms). When you are done, any user should be able to create/edit/delete resources through the forms. Then update your report with a description of your implementation so far.

::: warning GET vs POST
When should you submit a form with the GET method, and when should you use the POST method? Remember that GET requests should only be used to retrieve resources, and they should not change anything on the server (no harm in sending the same request 10 times in a row by accident), while POST requests may change things on the server or have some other type of side effect, such as sending an email.
:::

## Part 5: Handling errors
When a user submits a form to create/edit a resource, you need to validate the data entered in the form, and only carry out the request if the entered data is valid. For example, the user might have forgot to enter data in a form field, or maybe the user has entered some invalid data (for example entered `-43` as the number of pages for a book resource). If the data is not valid, you should display the form to the user again (with the data the user entered), together with descriptive error messages explaining what was wrong.

Your route parameters (such as `bookId` in `/books/:booksId`) needs to be validated too. Maybe the user visits your website and ends up at `/books/4`, bookmarks this page, and then you delete it from your database. If the user now goes to this page through her bookmark, she should not see an empty/crashed page, but a message saying that the book does not exist.

It is not only data that comes from your clients that can result in errors. External systems your web application depends on (such as the database) can fail as well. For example, if the database is full, you cannot insert a new resource into it. In these cases, there is no need to show a descriptive error message like The database is full, because the user cannot fix the problem anyway. Instead, it is better to show a general error message like *Server error, we are working on fixing it*, and then log the error details, so you then can debug and fix the error.

Deal with the various errors that can happen in your web application, and then update your report with a description of your implementation so far.

::: danger Deadline
Just a reminder that you should not forget to submit your report for feedback on Ping Pong. The deadline might already have been, but if you follow the time plan now should be a good time to submit it.
:::

## Part 6: Adding authentication & authorization
Before you start working on this part, you are recommended to:

* View the following videos:
    * Cookies and Sessions
    * Using cookies and Sessions in Express

---

To distinguish *you* from *anyone* (which is needed for operations *only you* should be authorized to carry out), you need to be able to authenticate yourself (prove that you are you). This can be done by hard-coding a username and a password on the server only you know. When you later login, you send this username and password to the server, which compares them with the username and password that have been hard-coded, and if they match, the server can trust that the request comes from you, because you are the only one who should know the correct username and password. Simple as that!

However, HTTP is a stateless protocol. This means that the server does not need to remember HTTP requests it has previously received to carry out HTTP requests it will receive in the future. This makes it a bit complex to stay logged in, because the server does not remember that you have previously successfully logged in when you send it other requests after that. 

For servers to remember information about clients, cookies were added to HTTP. A cookie is a key-value pair the server can send to the client in an HTTP response, and the client should then send this cookie back to the server in future HTTP requests it sends to the server. However, using a cookie like `isLoggedIn=true` is not a secure way to remember that a client has successfully logged in, because there is nothing preventing a hacker from manually creating an identical cookie on her own computer with the same information.

To securely remember information about clients, you can use sessions. Session are built on top of cookies, and consists of key-value pairs stored on the server. Each client gets its own session, and each session has its own unique and hard-to-guess id, known as the *session id*. The server sends the session id to the client in a cookie when the session for that client is created. The client then sends back the cookie with the session id to the server in its future HTTP requests, and the server can then lookup the information it has stored about that client in the session with the session id it receives in the cookie.

Use sessions (and cookies) to implement a secure login system for a single account. To use session in an express application, you can use the npm package `express-session`, and add it as a middleware function.

::: tip Example
Example of how to use the `express-session` package in an Express application.
```js
const express = require('express')
const session = require('express-session')

const app = express()
app.use(session())

// Use sessions to count how many times each client has visited this page.
app.get('/the-page', function(request, response){
  if(!request.session.counter){
    req.session.counter = 0
  }
  request.session.counter += 1
  // ...
})

app.listen(8080)
```
:::
 
## Part 7: Improving security
Before you start working on this part, you are recommended to:
* View the following videos:
  *  Web Security

---

### SQL injections
If you have code like the one shown below, you are vulnerable to SQL injections.

```js
const express = require('express')
const sqlite3 = require('sqlite3')

const app = express()
const db = new sqlite3.Database('db.db')

// Send back a book with a specific id.
app.get('/books/:id', function(request, response){
  const id = request.params.id
  const query = "SELECT * FROM books WHERE id = "+id+" LIMIT 1"
  db.get(query, function(error, book){
    if(error){
      // Send back page showing an error message.
    }else{
      // Send back page showing the book.
    }
  })
})

app.listen(8080)
```

Most of your users will go to URLs like `/books/53`, and the query sent to the database will be like
`SELECT * FROM books WHERE id = 53 LIMIT 1`, as expected. But a hacker might try to visit the URL `/books/1 OR title='hello'`, and the query sent to the database will be
`SELECT * FROM books WHERE id = 1 OR title='hello' LIMIT 1`. Although no harm has been done in this case, it shows how hackers can manipulate queries sent to the database, and potentially read (or delete, update, insert, etc.) information they should not be able to.

Data received from users, no matter if it comes from the URL, the query string, cookies or the body of the request, cannot be trusted, so manually constructing SQL queries through string concatenation as done in the code above is very dangerous and must be avoided. Instead, you can use placeholders, as shown in the code below.

```js
// Send back a book with a specific id.
app.get('/books/:id', function(request, response){
  
  const id = request.params.id
  
  // Use ? as placeholder for values we retrieve from the clients.
  const query = "SELECT * FROM books WHERE id = ? LIMIT 1"
  
  // The values we retrieved from the client (will be used instead of the placeholders).
  const values = [id]
  
  db.get(query, values, function(error, book){
    if(error){
      // Send back page showing an error message.
    }else{
      // Send back page showing the book.
    }
  })
})
```

This way, the query with the placeholder is sent to the database as one unit, and the value for the placeholder is sent as another unit, so the data cannot alter the query sent to the database, and you are protected against SQL injections.

Make sure all your code is protected against SQL injections.

### Hashing passwords
Passwords should never be stored in plain text. Humans often use the same password on different websites, and if a hacker comes across a user's password on one website, she can login as that user on the other websites that user is using. Quite bad!

Instead of storing passwords in plain text, one can hash passwords and store their hash values. These hash values cannot easily nor with 100% accuracy be reversed back to the original passwords again.

There exist hashing algorithms specifically designed to hash passwords (they are intentionally slow). Use one of them to securely store your account's password. You can for example use the npm package `bcrypt` to accomplish this.

When you are done, you should have a hard-coded hash value of your password in your source code instead of a hard-coded password in plain text.

### Cross-Site Scripting
The danger with SQL injections is that data coming from one user is injected and modifies the query sent to the database. Cross-Site Scripting (XSS) is something similar, but it modifies the HTML code sent to other users. For example, a hacker might write a new guestbook message and send it to your web application, and when other users read your guestbook, they receive the hacker's guestbook message. If the guestbook message contains HTML code, it will be sent to the users' web browsers and displayed as part of the website. With just HTML code, a hacker cannot do that dangerous things, but the HTML code can in turn contain client-side JavaScript code which can do much more damage when it is executed in the users' web browsers.

Make sure all data you receive from your users is escaped before it is sent to your users.

::: warning Note!
Most template engines automatically escape HTML code unless you use a special syntax. If you use Handlebars as your template engine, you can read more about it under [the section HTML Escaping at handlebarsjs.com](https://handlebarsjs.com/#html-escaping).
:::

### Cross-Site Request Forgery
Cross-Site Request Forgery (CSRF) is a type of an attack where hackers successfully trick our users into sending HTTP request to our website which they did not intent to send. For example, if our website contains a guestbook and is vulnerable to CSRF-attacks, a hacker might trick a user to send 1000 "create new guestbook message" requests. Our website just sees the requests coming from the user, and not from the hacker, so we think the user is the bad guy spamming our guestbook, but she is just the tool.

A spammed guestbook is no danger and can easily be fixed, but CSRF-attacks in general can be quite dangerous. Imagine you sign in on your bank's website, then you visit another website controlled by the hacker (the hacker does not need to own this other website; it is enough for the website to contain a XSS-vulnerability the hacker can exploit to inject bad client-side JavaScript code into it) and tricks your web browser to send HTTP requests to your bank's website. One request can for example be to transfer money from your account to the hackers account. The bank's website thinks the request intentionally is sent by you and carries it out. Quite bad!

The funny thing about these CSRF-attacks is that the vulnerability is not on our website. It is when our users visit other websites they might become victim of CSRF-attacks that makes them unintentionally send HTTP requests to our website. Luckily, there is a way for us to protect us from these unintentionally sent request known as [the Synchronizer Token Pattern](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md#synchronizer-token-pattern).

The synchronizer token pattern takes advantage of the fact that if a user wants to send a request to our website, it must do so by submitting a `<form>` with `method="post"` on our website. Remember, in HTML, it is only possible to send GET request and POST requests, and only POST requests should potentially result in changes on the website, so only POST requests are dangerous in CSRF-attacks (CSRF-attacks are not used by hackers to retrieve sensitive data on the server). So, when our website receives a POST request from a user, we need to check if it comes from the submission of a form on our website, because it is only in that case the request has been intentionally sent by the user.

HTML/HTTP does not come with built-in support to check that, but the synchronizer token pattern describes a way for us to do it manually. It basically works like this:

1. When a user sends a GET requests for the form, we generate a unique token (a long random string), remember this token (in the session, in a cookie, or whatever) and add it as a hidden input field to the form, e.g.
`<input type="hidden" name="token" value="the-long-random-string">`, so we also receives it back when the form is submitted.
2. When we receive the submission of the form (i.e. the POST request), we check if the token in the form is the same token as we generated before. If they are, we can be sure the POST request has been intentionally sent by the user through the form on our website, and not through a CSRF-attack.

Use the npm package `csurf` to protect your website from CSRF-attacks.

## Part 8: Optional tasks
Here are some optional tasks you must complete if you want to get a grade higher than 3. Remember that completing these extra tasks does not necessarily give you a higher grade, but you have to complete them to be able to get a higher grade. Also, do not forget to read the [Project Grading Guidelines](./project-grading-guidelines) every now and then.

### Search (required for grade 4)
Add search/filter functionality for at least one of your resources.

You have a lot of freedom when it comes to this task, but too simple solutions will not be accepted. Just searching for a title is not enough, maybe the user also can specify a date range or similar?

### Pagination (required for grade 4)
Add pagination to at least one of your resources, so not all of them are listed on the same page but spread out across multiple pages. You can use a query string parameter to keep track of the page number.

You have a lot of freedom when it comes to this task, but too simple solutions will not be accepted. 1 resource/page does not count as pagination.

### Uploading files (required for grade 5)
Make it possible to upload a file to at least one of your resources. This could for example be a screenshot of a software application you have in your portfolio. How to do this is something you need to learn on your own (grade 5...).

Note that files should not be stored in a database (but on the file system), and does not count as one of the three type of resources you should have on your website.

You have a lot of freedom when it comes to this task, but too simple solutions will not be accepted (error handling needed). 

## Part 9: Deploying
Before you start working on this part, you are recommended to:

* View the following videos:
    * Running Node.js on Lightsail

---

Deploy your web application on a server. Use whichever you want, but it should be publicly accessible for other computers on the Internet. 
 
## Part 10: Demonstration
Demonstrate how your application works to the rest of your class. The reason for the demonstration is two-folded:

* You get some practice in presenting your work, which is a very important skill in your future professional career.
* You get to see other ways to implement similar functionality (hopefully not all websites will look the same).

At the demonstration you will simply show how users (you as the admin, and the rest of the world as visitors) can use the website. You should not show any code nor explain any implementation details; just demonstrate the website through a web browser. Show that you have CRUD operations for all of your resources, that you have validation, that you display descriptive error messages when something goes wrong, etc.

To be allowed to demonstrate your website, you need to have implemented at least:

* A functional login system.
* All 4 CRUD operations for at least 2 type of resources with appropriate validation and authorization

You may use at most 10 minutes for your demonstration. If you need more than this to show all features, then skip some of them. If your demonstration takes just 2 minutes, that could be OK as well. Don't start talking about irrelevant things just to make the demonstration longer.

At the demonstration we will have a laptop connected to the projector in the room you can use to show your website. For this to work, your website must have been deployed to a server on the Internet (Part 9 of the project work needs to have been completed). If you have not completed Part 9 yet, you can bring and use your own laptop and run your your website locally on your own computer.

There are 10 different sessions for the demonstration, and you need to demonstrate your website at one of them. Select which one by joining the corresponding project group on Ping Pong (first come, first served).

Your presentation will not be graded; consider it as (mandatory) practice.

## Part 11: Submitting your work
Submit your project work on Ping Pong for grading. Your source code should be uploaded as a ZIP file. When that ZIP file has been unzipped on the examiner's own computer, it is very important that the the website can be started by running the following commands:

1. `npm install`
2. `node app.js` (or whatever main file/script that should be executed)

If this does not work you need to submit your work again at the next examination occasion, so double check that this work yourself before you submit your work!