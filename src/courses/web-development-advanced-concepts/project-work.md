# Project Work
On this page you find information about the examination test `Project work`.

## General information
<CompactInfo :infoPieces='{
    "Number of credits": "4",
    "Grades": ["Fail", "3", "4", "5"],
    "How to work": "In pair",
    "Goal": "To learn how to implement a scalable platform built on Docker containers running a web application, a single-page application, a database to store sessions in and a database to store your resources in. You will also learn how to use a three-layered architecture, dependency injection and how to design and implement a REST API in your web application.",
    "Instructions": "Complete the different parts the project work consists of described on this page. You will implement a platform, write a report describing your implementation and present your platform to the rest of the class at the end of the course.",
    "Grading guidelines": "Available on the Project Grading Guidelines page.",
    "Re-examination": "Special presentation sessions will be available at the re-exam periods in June and in August (contact the course manager for more details). Your work can also be graded at these re-exam period, but it will only be graded Fail/3.",
    "Help": "Ask the teacher for help at the lab sessions."
}'>
</CompactInfo>

## Introduction
As project work, you should work in pair to create a platform per the instructions in this document. The platform will consist of:

* A relational database that stores the resources created on the platform.
* A none-relational database to store temporary data (sessions) on the platform.
* A web application that:
    * Web browsers can use to fetch webpages from (i.e. function as a website).
    * Exposes a REST API clients (e.g. smartphones) can use to work with the resources on the platform.
* A Single-Page Application through which users can work with the resources on the platform.

You have a lot of freedom when it comes to the design and functionality of the platform, but the following requirement exists:

* There should exist at least three different type of resources on the platform:
    * One of the resource types must represent *accounts* users can create and login to.
    * The other resource types should somehow have a relation to accounts (direct or indirect), i.e. a created resource should be owned by/belong to an account.
* Regarding CRUD (Create, Retrieve, Update, Delete) operations on the resources:
    * All three type of resources should support Create and Retrieve operations.
    * Implementing Update and Delete operations is an extra task you can do at the end of the project work to get a higher grade.

Use whichever type of resources you want in addition to accounts. Examples are:

* *Threads* logged in users can create and that other logged in users can write *posts* to.
* *Blog posts* logged in users can create and that other logged in users can write *comments* on.
* *Todo lists* logged in users can create and add *todo items* to.

Implement the platform using the technologies taught in this course. In addition to implementing the web application, you should also write a report describing how the platform works and how it has been implemented. The file [project-report-template.docx](static-files/project-report-template.docx) contains a template with further instructions on this. Your report will be a living document throughout the course (meaning that you will continuously improve/add content to it). 

On the [Project Grading Guidelines](./project-grading-guidelines/) page you find some guidelines for how your project work will be graded. You are recommended to read through it every now and then.

To help you, we have divided the project work into smaller parts that should be completed in order. The rest of this page contains descriptions of these smaller parts. Before you start working on the first part you are recommended to read through all the parts, which will give you a good overview of the work that lies ahead.

Good luck!

## Installing required software
**If you work on the computers in E2404, E2432, E2433 or E4205**, all required software should already be installed for you, so you should not need to install anything yourself.

**If you work on a school computer in any other room**, you need to manually install the required software through the *Software Center* application (unless someone already has done that on the specific computer you sit at).

**If you work on your own private computer**, you need to download and install all required software yourself. In this course, we use only free software available for both Windows, Mac and Linux.

The required software is:
* [Docker](https://docs.docker.com/install/) \
    A program used for containerization, i.e. a program used for running other programs in an isolated and configured environment.

::: warning Information to Windows users
**Does your computer run Windows 10 Pro or Windows 10 Education?** \
Then your computer supports Hyper-V, and you can use the newer version of Docker: Docker for Windows.

**Note:** The newer version of Docker makes use of virtualization through Hyper-V. If you take the course [Android Development](../android-development/) you can speed up Android emulators by using virtualization either through Hyper-V or through Intel's HAXM. Both can't be used at the same time, so you avoid problems if you just stick to Hyper-V when you use Windows 10 Pro or Windows 10 Education.

**Does your computer run Windows 10 Home or an older version of Windows?** \
Then your computer doesn't support Hyper-V, and you have to use the older version of Docker: Docker Toolbox on Windows.

**Heads-up:** The older version of Docker does not completely support port forwarding, so you can't access containers through `localhost`, but must instead use the IP address of the Docker Machine you run instead. More information on this later.
:::

* [Node.js](https://nodejs.org/en/) \
    Use whichever version you want, but most likely the newer the better. If you don't want to gamble, go with the LTS version.
* [npm](https://www.npmjs.com/) \
    This one is installed along with Node.js, so you do not need to install it separately. However, you might want to [update npm to the latest version](https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm).

The following software tool is not required (use whichever IDE you want), but recommended:

* [Visual Studio Code](https://code.visualstudio.com/) \
    IDE with good support for writing, running and debugging Node.js and JavaScript code.
 
## Part 1: Joining a project group
The project work should be carried out in pairs. Let the examiner know who you are working with by joining one of [the project groups on Ping Pong](https://pingpong.hj.se/courseId/22061/projectGroupsList.do).

If you can't find someone to work with, send the course coordinator an email at [Peter.Larsson-Green@ju.se](mailto:Peter.Larsson-Green@ju.se) using the template below (you just need to replace `XXX` with your specific values).

```
Hi!

I need you to match me with a student for the project work in the course Web Development - Advanced Concepts.

My name: XXX
My JU email: XXX@student.ju.se
The grade I'm aiming for in this course: XXX
I got the following grades in the following pre-requisite courses:
 - Introduction to Programming: XXX
 - Data Structures and Algorithms: XXX
 - Object-Oriented Programming: XXX
 - Network Programming: XXX
 - Web Development Fundamentals: XXX
```

If you don't care about who you are matched with, you just need to enter your name and JU email in the template. The course coordinator will then try to match you with a student with similar ambitions and skills as you.

## Part 2: Platform idea
Your first task is to come up with what the platform you will create should do. Try to be creative and create a platform that solves a real-world problem ordinary people are having. Feel free to ask your family and friends for problems they have that could be solved using a platform. Examples of real-world problems could be:

* I often forget meetings.
* I often make bets with my friends, they remember the bets I lose so I have to pay them, but I often forget the bets I win, so they never pay me.
* I like to keep track of which celebrities I've seen, but I rarely remember that.
* I eat lunches alone, and that's so boring.
* I need to find someone I can play padel with.

The only important thing is that your platform can be implemented using at least 3 type of resources (accounts + at least two more), but the more useful it is the better.

Your platform should be described in the project report, so in this part of the project work, you will not do any programming, but only work on your report. You should be able to complete at least the *Introduction* chapter.

When you're done describing your idea in the report, discuss it with a teacher at one of the lab sessions. It's not mandatory, but you are then recommended to upload the current version of your report to Ping Pong by submitting the assignment [Project Work: Platform Idea](https://pingpong.hj.se/courseId/22061/content.do?id=17129195) to get some initial feedback on your idea from the examiner.

## Part 3: Setting up docker
Before you start working on this part you must:

* Complete and be approved on the [Laboratory Work](./laboratory-work/).


Before you start working on this part, you are recommended to:

* View the following recorded lectures:
    * [Docker Basics](../../lectures/docker-basics/)

The web application should be implemented in Node.js using the Express framework (feel free to use [Koa](https://koajs.com/) instead of Express if you are willing to learn it (not officially part of this course, so you can't expect to get any help with it from the lab assistants)), and the resources on the platform should be stored in a MySQL database. We could create a Docker container that contains both, but when it comes to containerization it is better that a container just has a single responsibility, e.g. to just run the web application or to just run the database. Among other things, it is much easier to scale a container that has a single responsibility. Therefore, the web application should run in one container, and the database should run in another container.

### The Web Application image
Start by creating a new folder to store all the source code for the entire platform. In this document we will refer to this folder as `/platform` (you should of course use a more unique/descriptive name than `platform`). Then create a sub-folder inside this one to store the source code for the web application. In this document we will refer to that sub-folder as `/platform/web-application`.

In `/platform/web-application`, run the following commands:

1. `npm init --yes` - Creates `packages.json`.
2. `npm install express` - Registers a dependency on the npm package `express`.

Then create the file `/platform/web-application/app.js` with the content shown in <FigureNumber /> below.

<Figure caption="The content of the file app.js (Hello World with Express).">

```js
const express = require('express')

const app = express()

app.get('/', function(request, response){
  response.send("Hello, World")
})

app.listen(8080, function(){
  console.log("Web application listening on port 8080.")
})
```

</Figure>

Verify that the code you have written so far works by starting the web application using the command `node app.js` in `/platform/web-application` and then visit [http://localhost:8080](http://localhost:8080) in a web browser and verify that you see the text *Hello, World*. If you do, then it works as it should, and you can stop running the web application.

You just ran the web application as an ordinary program on your own computer. Let's try to run it in a container using Docker instead. To do that we need to tell Docker which environment our code needs to run, and how it should be started. To do that we need to put our code in an image that contains all this information, and then ask Docker to start running that image in a new container.

To specify the environment in the image one usually inherit the environment from an existing image. The [Docker Hub](https://hub.docker.com) contains a collection of images we can use, and in our case we need an image with Node.js pre-installed. Node.js provides *official images* that comes with Node.js pre-installed, so try searching for `node` there and find a suitable image (e.g. `node:13.5.0`). Then create a file called `Dockerfile` in `/platform/web-application` that looks something like what shown in <FigureNumber /> below.

<Figure caption="The content of the Dockerfile in the web application folder.">

```
FROM node:13.5.0

EXPOSE 8080

WORKDIR /web-application

COPY package*.json ./

RUN npm install

COPY app.js ./

CMD ["node", "app.js"]
```

</Figure>

Docker can then use the information in this file to build a new image that contains your source code and Node.js to run it. To do that, run the command `docker build --tag=my-web-app:latest .` in `/platform/web-application`. This tells Docker to build the image and to add it to its own collection of images on your computer. At the same time, it will also download the `node:13.5.0` image from Docker Hub (unless it has done that before).

To run the image in a new container, run the command `docker run -p 3000:8080 my-web-app:latest`. If this doesn't work, you might first need to start the Docker Machine by running the command `docker-machine start`. When the container is running you should be able to send HTTP requests to your web application by opening [http://localhost:3000](http://localhost:3000) in a web browser on your computer (if this doesn't work, see the red box below). The command used to start the container told Docker that all incoming traffic to port 3000 on your computer should be forwarded to the container's port 8080.

::: danger Port forwarding does not work on Docker Toolbox
Visiting [http://localhost:3000](http://localhost:3000) does unfortunately not work with the old version of Docker on Windows (Docker Toolbox). If you use that, then you first need to run the command `docker-machine ip` to get the IP address of the Docker Machine and use that one instead, e.g. visiting [http://192.168.99.100:3000](http://192.168.99.100:3000) (or whichever IP address your Docker Machine gets). 
:::

On Mac and Linux you can stop the container from running by pressing `[CTRL]` + `[C]`. On Windows you also need to run the command `docker container ls` to retrieve the name of the container and then run the command `docker container stop theContainerName`.

Now you know the basics about creating, running and stopping Docker containers. You probably also want to create a `.dockerignore` file as described at [https://nodejs.org/en/docs/guides/nodejs-docker-webapp/](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/), so you more conveniently can build an image with multiple source files. That page is good reading even if you don't want to create a `.dockerignore` file, so read it!

Your workflow will kind of be:

1. Make changes to the source code files on your computer.
2. Build a new image.
3. Run the new image in a new container.
4. Test your web application in a web browser.
5. Stop the container from running.
6. Restart on #1.

To manually carry out these steps each time you want to test changes you make to the source code is quite time consuming and boring. Docker has a solution to this problem: volumes. With volumes you can synch folders on your computer with folders in a running container. When you change a file in one of these folders on your computer, Docker will automatically send the new version of the file to the corresponding folder in the container that is running, so the container always have the latest version of the file.

Using a volume is quite easy. When you start a container with the `docker run` command you also specify which folders that should be synched using the `-v` option, like (on Windows)
`docker run -v //c/folder/on/host/computer:/folder/in/container` (plus the `-p` for port forwarding as before). You don't want to synch your entire `/platform/web-application` folder (the `node_modules` folder in it and some other files/folder should not be synched, only the code you've written), so it might be a good idea to put your source code files in a new folder, for example called `/platform/web-application/src`, and use volumes to synch only this subfolder instead.

However, synching files is not enough to keep your web application in the container up to date. Each time a JavaScript file changes the web application running in the container needs to be restarted. To make that happen we can use an npm package called [nodemon](https://nodemon.io/). Simply:

1. Install `nodemon` by running the command `npm install nodemon` in `/platform/web-application`.
2.	Change `package.json` to contain a script called `start` that executes
`nodemon src/app.js -L`. \
    **Note:** The `-L` flag is only necessary if you run the older version of Docker (Docker Toolbox). Read more about it at [https://stackoverflow.com/q/39239686/2104665](https://stackoverflow.com/q/39239686/2104665). This flag will increase the CPU usage, so remove it if you use the newer version of Docker and it works without it.
3. Change your `Dockerfile` to start the web application with the command `npm run start`.

When you have built and run this new image and used volumes to synch folders the web application in the container should restart as soon as you change any JavaScript file the web application is dependent on. Your new workflow will simply be:

1. Build and run the image using volumes.
2. Make changes to JavaScript code on your computer
(Docker will automatically synch the files to the container, and `nodemon` in the container will restart the web application when this happens).
3. See the changes in your web browser.
4. Restart on #2.

**Note:** When you install a new npm package you need to restart on #1.
If you want to be able to debug your Node.js application from Visual Studio Code, you need to tell Visual Studio Code how to connect to the Node.js application running in the container. The tutorial [Setting up Debugger for Node.js in Docker with VS code](https://blog.theodo.com/2018/10/setting-debugger-node-js-docker-vs-code/) shows you how you can do that. That tutorial makes use of Docker Compose, which you will start using after you have created a database image to run your database.

You have now successfully setup a project suitable for implementing a web application in Node.js with Docker containers. Good job!

### The Database image
Since the MySQL database should run in a separate container, let us do something similar for the database as we did for the web application.

Start by creating a new folder inside the Docker folder to store information about the database image. In this document we will refer to that sub-folder as `/platform/database`. Create a new file in this sub-folder called `Dockerfile` with the content similar to the one in <FigureNumber /> below. That Dockerfile describes an image inheriting from `mysql:5.7.24`, which is an image that runs a MySQL server.

<Figure caption="The content of Dockerfile in the database folder.">

```
FROM mysql:5.7.24

COPY initialize-database.sql /docker-entrypoint-initdb.d/
```

</Figure>

Then create a new file in `/platform/database` called `initialize-database.sql`. The SQL code you write in that file will be executed by the MySQL server when it starts, so in this file you can write SQL code that creates the tables in the database your platform needs.

The database image can be started and stopped in the same way as your web application image. After you have started it you should be able to connect to it from your host computer using [http://localhost:3306](http://localhost:3306) (or the Docker Machine's IP address). If you have a MySQL Database Management Tool (such as [MySQL Workbench](https://www.mysql.com/products/workbench/) or one of the [MySQL extensions to Visual Studio Code](https://marketplace.visualstudio.com/search?term=mysql&target=VSCode)), try it out!

### Using Docker Compose
Docker has a tool called [Docker Compose](https://docs.docker.com/compose/) that greatly simplifies for us to start and stop multiple containers at the same time, as well as handle the connection between them (which we need, since the web application needs to communicate with the database). To use it, simply create a file in `/platform` called `docker-compose.yml` with the content shown in <FigureNumber /> below. 

<Figure caption="The content of docker-compose.yml in /platform.">

```
version: '3'
services:
  "web-application":
    build: "./web-application"
    ports:
      - "3000:8080"
      - "9229:9229"
    volumes:
      - "./web-application/src:/web-application/src"
    depends_on:
      - database
  database:
    build: ./database
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=theRootPassword
      - MYSQL_DATABASE=webAppDatabase
```

</Figure>

Your images can now be built and started in containers using the `docker-compose up` command in `/platform`, and the web application can now use the domain name `database` to connect to the MySQL database that runs in another container.

::: tip Rebuilding images
`docker-compose up` will run the latest build of your images. If you make changes to an image, you need to rebuild it before using `docker-compose up`, or simply use the command `docker-compose --build`.
:::

::: warning Handling anonymous volumes
The MySQL image uses an anonymous volume to store it's data, and by default it's only created the first time you start it using `docker-compose up`. A result of this is that your SQL code in the `/docker-entrypoint-initdb.d/` in the image will only be executed the first time you start it with `docker-compose up`. The next time you run `docker-compose up` it will resume using the tables from before and not execute your SQL code in `/docker-entrypoint-initdb.d/`. This is usually NOT what you want. You can get around this by using the command `docker-compose down` before you run `docker-compose up`, or you can add the flag `--renew-anon-volumes` to `docker-compose up`.

For more information, see [Issue #2127 in the Docker Compose repository](https://github.com/docker/compose/issues/2127).
:::
 
## Part 4: Implementing the Web Application
Before you start working on this part, you are recommended to:

* View the following recorded lectures:
    * [Layered Architecture in Node.js](../../lectures/layered-architecture-in-node-js/)

Implement the website using a three-layered architecture:

* **The Presentation Layer** should only receive HTTP requests and generate and send back HTTP responses. This is the only layer that should use HTTP, Sessions, Cookies, HTML and CSS (and client-side JavaScript, if you want), so it is only in this layer we will be using Express. It will carry out the HTTP request by telling the Business Logic Layer what to do.
* **The Business Logic Layer** should only do computations. This includes applying business logic rules such as validation as authorization. If the Business Logic Layer needs to store/retrieve/update/delete any resource, it will simply ask the Data Access Layer to do that for it.
* **The Data Access Layer** should only be responsible for persistence of the resources, in this case stored in a MySQL database. It should provide operations one can use to store/retrieve/update/delete resources in the database. This is the only layer where you should use SQL.

<FigureNumber /> below is a visualization of a three-layered architecture.

<Figure caption="A three-layered architecture. The Presentation Layer is the one receiving HTTP requests from clients, to carry them out is uses the Business Logic Layer, and so on.">
<mermaid>
graph LR
    wb[Web Browser]
    subgraph Web Application
        pl(Presentation Layer)
        bll(Business Logic Layer)
        dal(Data Access Layer)
    end
    db[Database]
    wb --HTTP--> pl
    pl --> bll
    bll --> dal
    dal --SQL--> db
</mermaid>
</Figure>

There exists different ways one can separate the code into these three layers. The simplest way is probably to just create three different folders, one for each layer, and then put all code belonging to a layer in the corresponding folder.

To help you get started you can use the skeleton code available in the ZIP file [the-community.zip](static-files/the-community.zip).

On your platform, users should at least be able to create new resources and to browse and view existing resources. You do not need to implement update and delete functionality; that is an extra task you can complete at the end of the course if you have time for it. You neither need to implement authorization/login functionality now. That is the next part of the project work. 

## Part 5: Adding Authorization
Before you start working on this part, you are recommended to:

* View the following recorded lectures:
    * [Handling Concurrent HTTP Requests](../../lectures/handling-concurrent-http-requests/)
    * [Scaling Web Applications](../../lectures/scaling-web-applications/)
    * [Scaling Databases](../../lectures/scaling-databases/)

When the web application receives a successful sign in request from a client it needs to remember to which account that client signed in to, so it knows that when it receives requests from that client in the future. To do that one usually uses sessions. A session contains information about a client stored on the server-side. Where the sessions are stored on the server-side has a major impact on how the web application can be scaled.

The most common used approach to scaling web applications is by running multiple instances of them and use a load balancer to distribute the load (the HTTP requests) between them, as seen in <FigureNumber /> below. Each instance can for example run in its own Docker container or on its own server. When the load increases, we just launch more instances to handle it, and when the load decreases, we just remove some of the instances (so we don't need to pay for having servers up and running that don't do any work).

<Figure caption="A common used architecture for scaling. The Load Balancer receives HTTP requests from Clients and then forwards them to (one of) the Web Application Instances.">
<mermaid>
graph LR
    clients[Clients]
    lb[Load Balancer]
    wai1[Web Application Instance 1]
    wai2[Web Application Instance 2]
    wain[Web Application Instance n]
    db[Database]
    clients --HTTP--> lb
    lb --HTTP--> wai1 --SQL-->db
    lb --HTTP--> wai2 --SQL-->db
    lb --HTTP--> wain --SQL-->db
</mermaid>
</Figure>

With this architecture, if the sessions are stored locally in the web application instances, then each clients' HTTP request must be forwarded to the same instance all the time, because it is only that instance that have access to the client's session. This can be achieved with a technique called sticky sessions (the load balancer tells the client to create a cookie specifying which web application instance it should forward the requests from that particular client to), but a solution that is easier to implement is to simply store the sessions in the database. This works since all web application instances are connected to the same database, so they store the sessions at the same place. However, fetching the session from the database for each request will make it take a little bit longer to carry out the requests, so this solution is not necessarily the best one.

The sessions could be stored in the MySQL database we already have, but sessions are just temporary data. They don't really have anything to do with the data we store in our MySQL database, so why use the same database? According to the single responsibility principle it is much better to store it in another database, ones whose only responsibility it to store sessions. Since sessions don't consist of any relational data, it is better to use a NoSQL database instead of a relational database since NoSQL databases often are faster and easier to scale than relational databases. The type of NoSQL database that makes most sense for this use-case is a key-value database (the session id is used as the key, and the session itself as the value).

Add another container to your solution that runs a Redis database, which is a key-value database. Then connect to it from your web application and store your sessions in it. In your web application you will:

* Use the npm package [express-session](https://github.com/expressjs/session) to add session support to Express.
* Use the npm package [connect-redis](https://github.com/tj/connect-redis) to store the sessions in a Redis database.

Then add the login feature to your web application and add authorization. Remember that sessions are something we use to make HTTP stateful (hence we only use them in the presentation layer) and authorization is something we should implement in the business logic layer (which users that are authorized to do what should be independent of how they use our application).

## Part 6: Using Dependency Injection
Before you start working on this part, you are recommended to:

* View the following recorded lectures:
    * [Dependency Injection in Node.js](../../lectures/dependency-injection-in-node-js/)

The three layers the web application consists of have some dependencies:

* The `Presentation Layer` has some dependencies on the `Business Logic Layer`.
* The `Business Logic Layer` has some dependencies on the `Data Access Layer`.

These dependencies are hardcoded at multiple places, as shown in the figures below.

<Tabs rememberSelectedKey="layer">
<Tab title="Presentation Layer">
<Figure caption="account-router.js in the Presentation Layer.">

`account-router.js` in the Presentation Layer has a dependency on `account-manager.js` in the Business Logic Layer.

```js
const express = require('express')
// Here we have hardcoded a dependency on the account manager.
const accountManager = require('../business-logic-layer/account-manager')

const router = express.Router()

router.get("/", function(request, response){
  accountManager.getAllAccount(function(errors, accounts){
    const model = {
      errors: errors,
      accounts: accounts
    }
    response.render("accounts-list-all.hbs", model)
  })
})

module.exports = router
```

</Figure>
</Tab>
<Tab title="Business Logic Layer">
<Figure caption="account-manager.js in the Business Logic Layer.">

`account-manager.js` in the Business Logic Layer has a dependency on `account-repository.js` in the Data Access Layer.

```js
// Here we have hardcoded a dependency on the account repository.
const accountRepository = require('../data-access-layer/account-repository')

exports.getAllAccounts = function(callback){
  accountRepository.getAllAccounts(function(errors, accounts){
    callback(errors, accounts)
  })
}
```

</Figure>
</Tab>
<Tab title="Data Access Layer">
<Figure caption="account-repository.js in the Data Access Layer.">

`account-repository.js` in the Data Access Layer (has no dependency on any other layer but is shown for the completeness of the three layers).

```js
const mysql = require('mysql')
const connection = mysql.connect(...)

exports.getAllAccounts = function(callback){
  const query = "SELECT * FROM accounts ORDER BY username"
  connection.query(query, function(error, accounts){
    if(error){
      callback(["Database error"], null)
    }else{
      callback([], accounts)
    }
  })
}
```

</Figure>
</Tab>
</Tabs>

Hardcoding dependencies like this makes our web application less flexible. For example, each time we use the account manager, the account manager will always use the account repository that works with the data in the MySQL databases. You might think this is not such a big deal, because that's what we want to happen when our web application runs, right? Yes, if we want to use the code to run the web application, then yes, that is what we want to happen. But what if we write tests and just want to run the code inside the account manager to test if that works? Then we don't necessarily want the account manager to make use of the account repository that communicates with the MySQL database, because if the test fails when we run it, then the problem could just as well be in the account repository (e.g. broken connection to the database).

When we test the code in the account manager using tests we have written, we don't necessarily want it to use the account repository that makes use of the MySQL database. Instead, we can provide a mockup of the account repository, as the one shown in <FigureNumber /> below.

<Figure caption="Mockup of the account repository in the Data Access Layer.">

```js
const allAccounts = [] // All accounts are stored in this array.

exports.getAllAccounts = function(callback){
  callback([], allAccounts)
}
```

</Figure>

For our tests, we want the account manager to make use of the mockup version of the account repository, and when we run the web application for real we want the account manager to make use of the account repository that makes use of the MySQL database. Because of this, we can't hardcode the dependencies we have.

::: tip Mockups not only for testing
Mockups are not necessarily only created for our own code when doing testing. Another example is making use of third-party services through APIs that costs money. When our web application runs in production for real, we want to make use of the real third-party API and are willing to pay for using it, but when we run it locally on our own computers for development/testing, we don't want to pay for using it, so we use a mockup version instead.
:::

So, in our account manager, we can't hardcode which version of the account repository we should use. Instead, the account repository that should be used should be injected to the account manager. The account manager itself doesn't care about which account repository it uses as long as it has access to the one it should be using. We say that the account manager is dependent on the interface of the account repository, which means that all different account repositories we implement must expose the same set of functions/same interface the account manager can use.

When we start the program, we specify which account repository to use, and then when we use the account manager it will use the account repository we specified. How we make all this happen depends on which dependency injection framework/container we use. The npm package [awilix](https://github.com/jeffijoe/awilix) gives us this functionality. The figures below shows one way to use it.

<Tabs rememberSelectedKey="layer">
<Tab title="Data Access Layer">
<Figure caption="account-repository.js in the Data Access Layer.">

`account-repository.js` in the Data Access Layer (has no dependency on any other layer but is shown for the completeness of the three layers).

```js
module.exports = function({}){
  // Name all the dependencies in the curly brackets (none in this case). 
  
  const allAccounts = []

  return {
    getAllAccounts: function(callback){
      callback([], allAccounts)
    }
    // Continue to list all other functions in account repository here.
  }
  
}
```

</Figure>
</Tab>
<Tab title="Business Logic Layer">
<Figure caption="account-manager.js in the Business Logic Layer.">

`account-manager.js` in the Business Logic Layer has a dependency on `account-repository.js` in the Data Access Layer but doesn't specify which one.

```js
module.exports = function({accountRepository}){
  // Name all the dependencies in the curly brackets. 

  return {
    getAllAccounts: function(callback){
      accountRepository.getAllAccounts(function(errors, accounts){
        callback(errors, accounts)
      })
    }
    // Continue to list all other functions in account manager here.
  }
}
```

</Figure>
</Tab>
<Tab title="Presentation Layer">
<Figure caption="account-router.js in the Presentation Layer.">

`account-router.js` in the Presentation Layer has a dependency on `account-manager.js` in the Business Logic Layer but doesn't specify which one.

```js
const express = require('express')

module.exports = function({accountManager}){
  // Name all the dependencies in the curly brackets. 
  
  const router = express.Router()
  
  router.get("/", function(request, response){
    accountManager.getAllAccount(function(errors, accounts){
      const model = {
        errors: errors,
        accounts: accounts
      }
      response.render("accounts-list-all.hbs", model)
    })
  })
  
  return router
  
}
```

</Figure>
</Tab>
</Tabs>

With Awilix we can then in the main file specify which dependencies we want to use, as shown in <FigureNumber /> below.  If we want to change which account repository to use, we just need to change that at line 4 in that file.

<Figure caption="Creating an using an awilix container to resolve dependencies.">

```js
const awilix = require('awilix')

// Import the ones we want to use (real or mockup), real in this case.
const accountRepository = require('data-access-layer/account-repository')
const accountManager = require('business-logic-layer/account-manager')
const accountRouter = require('presentation-layer/account-router')

// Create a container and add the dependencies we want to use.
const container = awilix.createContainer()
container.register("accountRepository", awilix.asFunction(accountRepository))
container.register("accountManager", awilix.asFunction(accountManager))
container.register("accountRouter", awilix.asFunction(accountRouter))

// Retrieve the router, which resolves all other dependencies.
const theAccountRouter = container.resolve("accountRouter")
```

</Figure>

So, to use dependency injection with Awilix like this you need to:

1. Change your JavaScript files to export a single function that receives an object (the container) containing all the dependencies that should be used. \
Note: Awilix also supports dependency injection using classes, so feel free to use the if you prefer.
2. In your main file, create a new Awilix container and add all these functions to it.
3. Retrieve the values you need from the container (most likely only the Express `app` value).

If you want, feel free to use any other dependency injection method you prefer, but you can't expect to get any help from a teacher using it.

## Part 7: Multiple Data Access Layers/ORM
Before you start working on this part, you are recommended to:

* View the following recorded lectures:
    * [Using Sequelize in Node.js](../../lectures/using-sequelize-in-node-js/)

Now that your web application makes use of dependency injection, let us see if it works by implementing another data access layer. The new data access layer should have the same interface as the old one (must implement the same exposed functions, must send back identical errors, etc.) but should be implemented differently. Let us implement it using an Object-Relational Mapping framework, so you get some practice on using that.

Use whichever ORM you want, but [Sequelize](https://sequelize.org/) is quite simple and straight forward to use. Feel free to use any database you want. Using your existing MySQL database is OK, but to practice on using Docker we recommend you add another container running another database, e.g. PostgreSQL.

When you're done your architecture could look like the one shown in <FigureNumber /> below, but when running the application only one of the Data Access Layers will be used.

<Figure caption="Current architecture.">
<mermaid>
graph LR
    wb[Web Browser]
    subgraph Web Application
        pl(Presentation Layer)
        bll(Business Logic Layer)
        dalMy(Data Access Layer MySQL)
        dalPost(Data Access Layer PostgreSQL)
    end
    dbMy[Database MySQL]
    dbPost[Database PostgreSQL]
    wb --HTTP--> pl
    pl --> bll
    bll --> dalMy --SQL--> dbMy
    bll --> dalPost --SQL--> dbPost
</mermaid>
</Figure>

## Part 8: Adding a REST API
Before you start working on this part, you are recommended to:

* View the following recorded lectures:
    * [REST API Basics](../../lectures/rest-api-basics/)
    * [REST API in Express](../../lectures/rest-api-in-express/)
    * [REST API Authorization](../../lectures/rest-api-authorization/)
    * [JSON Web Tokens](../../lectures/json-web-tokens/)
    * [Third-Party Authentication](../../lectures/third-party-authentication/)

Users can use the platform on their smartphones through the web browser on it, but the user experience can often be improved my implementing and let the users use a native smartphone application instead. This way, the GUI would consist of GUI components native applications use, which appear much more appealing to the user compared to the GUI components webpages consists of. Furthermore, a native application would also be able to make use of native features on the smartphone which aren't accessible through client-side JavaScript code.

However, unlike the web application, a native smartphone application can't communicate directly with our database. One need to know the username and password to the database to use it, and we can't put that in a native smartphone application, because then any hacker would be able to retrieve it from the smartphone application after they have downloaded it. Then they could login to the database and change it however they please. Instead we will add a REST API to our web application, and the native application should be able to store/retrieve/update/delete data in the database through it. The platform will be as shown in <FigureNumber /> below. 

<Figure caption="Overview of the platform.">
<mermaid>
graph LR
    wb[Web Browser]
    nsa[Native Smartphone Application]
    wa[Web Application]
    db[Database]
    wb --HTTP HTML/x-www-form-urlencoded--> wa
    nsa --HTTP REST API JSON-->wa
    wa --SQL-->db
</mermaid>
</Figure>

The difference between the way the web browser and the native smartphone application communicates with the web application will primarily be the data format they use. Both will communicate with the web application using HTTP, but the web application will send data (submitted forms) in the data format `application/x-www-form-urlencoded` and receive back HTML code, while the native smartphone application will send and receive in the data format `application/json` (JSON), which is a much simpler data format.

The REST API can be implemented as an additional Presentation Layer in the web application, as shown in <FigureNumber /> below. Since the users who use the platform through the native smartphone application should be able to do the same thing as users who use the platform through the web browser, we should not need to make that much changes to the code in the business logic layer nor the data access layer (but we might need to add code). You should be able to re-use most of the functionalities from these layers.

<Figure caption="Current architecture (with one Data Access Layer).">
<mermaid>
graph LR
    wb[Web Browser]
    nsa[Native Smartphone Application]
    subgraph Web Application
        plw(Presentation Layer Website)
        plr(Presentation Layer REST API)
        bll(Business Logic Layer)
        dal(Data Access Layer)
    end
    db[Database]
    wb --HTTP HTML/x-www-form-urlencoded--> plw --> bll
    nsa --HTTP REST API JSON--> plr --> bll
    bll --> dal --SQL--> db
</mermaid>
</Figure>

Now the REST API can run as its own Express application in one container, and the Website runs as an Express application in its own container, and these can scale independently of each other. If you prefer, you can run both Presentation Layers in the same container. Then each Presentation Layer can export it's own Express Application object which then is used by a fourth layer (which also is an Express application). See the documentation for [app.use()](https://expressjs.com/en/4x/api.html#app.use) to learn how one Express Application object can make use of other Express Application objects.

The REST API needs to support the following operations:

* Create a new account.
* Login to an existing account.
* When logged in, apply CRUD (Create, Read, Update, Delete) operations on at least one of the other two type of resources that belongs to the account the user logged in to.

One usually doesn't use sessions in REST APIs to remember that a user has logged in. Sessions relies on cookies and supporting all features of cookies is hard for clients. Instead, one usually uses tokens instead, which are much simpler.

Tokens can be implemented in different ways, but the simplest way is by using JSON Web Tokens. These can easily be created and verified in Node.js using the npm package [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

Implement Access Tokens as described by the [OAuth 2.0 Framework](https://oauth.net/2/) and implement ID Tokens as described by the [OpenID Connect](https://openid.net/connect/) specification. Use the `Resource Owner Password Credentials Grant`, and make sure to get all the details right (status code, bodies, headers, tokens, etc. should be as described in the specifications). 

## Part 9: Implementing a Single-Page Application
Before you start working on this part, you are recommended to:

* View the following recorded lectures:
    * [AJAX](../../lectures/ajax/)
    * [Same-Origin Policy and Cross-Origin Resource Sharing](../../lectures/sop-and-cors/)

Since implementing a native smartphone application is not part of this course, you will instead implement a Single-Page Application (SPA). A SPA is a website that only consists of a single webpage and a lot of client-side JavaScript code to make it appear to work as an ordinary application. When users click on links or submit forms, the web browser doesn't submit these and load a new web page. Instead, client-side JavaScript codes listens for these events and handles them itself. This way, we can add loading indicators while fetching a new "page"/submitting a form and add transition animations when going from one "page" to another, etc. to improve the user experience.

So, your next task is to implement a SPA that makes use of the REST API on the platform. In the SPA users should be able to:

* Create a new account.
* Login to an existing account, and then:
    * Apply CRUD operation for at least one of the other two type of resources.

Since the SPA only consists of static HTML, CSS and JS files (and possibly images), we don't need to implement a fancy web application to serve these files to clients requesting them. Instead, we can use a program that serves files, such as [nginx](https://nginx.org/). Run nginx (or whichever similar program you prefer) in a new container to serve the static files for your SPA.

Since web browsers follow the same-origin policy, your REST API needs to support cross-origin resource sharing, so if you haven't added that to it yet, do it now.

## Part 10: Optional tasks
Here are some optional tasks you must complete if you want to get a grade higher than 3. Remember that completing these extra tasks does not necessarily give you a higher grade, but you have to complete them to have a chance to get a higher grade. Also, do not forget to look through the page [Project Grading Guidelines](project-grading-guidelines/).

### A fancy website (required for grade 4 and 5)
Do also implement update and delete operations for your resources on the website (not necessary for the REST API).

### A fancy SPA (required for grade 4 and 5)
In your single-page application, when you have sent an HTTP request to the REST API and wait for an HTTP response, show a loading indicator of some kind. When forms are submitted, users should not be able to submit the form again while you are waiting for the response.

To verify that it works as it should, you need simulate latency (so it takes a couple of seconds before you get back an HTTP response). This can be done using the [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp) function in your JavaScript code, or (even better) by telling the web browser to simulate it for you. The blogpost [Simulate slow connections with the network throttling tool](https://blog.nightly.mozilla.org/2016/11/07/simulate-slow-connections-with-the-network-throttling-tool/) shows how to do it in Firefox.

### Supporting third-party authentication (required for grade 5)
Let users create a new account on your platform by using their existing account on another platform supporting OpenID Connect instead creating yet another username and password. You can for example use Google.

This does only have to work either through the website or through the REST API. You choose which one if you don't want to implement both.

## Part 11: Demonstration
Demonstrate how your application works to the rest of your class. The reason for the demonstration is two-folded:

* You get some practice in presenting your work, which is a very important skill in your future professional career.
* You get to see other ways to implement similar functionality (hopefully not all websites will look the same).

Your demonstration will not be graded; consider it as (mandatory) practice.

Join a [Project Demonstration Group](https://pingpong.hj.se/courseId/22061/projectGroupsList.do) on Ping Pong (first come, first served). Only one in each project work pair should join the Project Demonstration Group you want to join. Which group you join determines when you should demonstrate your work. You will only demonstrate to the rest of the project groups in the same demonstration group as you.

At the demonstration, you should:

* Explain what the platform you have created is about, including (basically the Introduction chapter in the report):
    * Why would someone use it?
    * What can the platform be used for?
    * How have you made the platform as good as possible (so users won't use any other solution)?
    * Explain the architecture of the platform, including (basically the Architecture chapter in the report):
    * How the solution/platform is implemented. Give an overview.
* Give an overview of the implementation of each component the architecture consists of (basically an overview of the rest of the chapters in the report). Use figures!
* Give a demonstration of how your solution works. A good idea is that one of you tell the other one what do to (e.g. *Go ahead and create a new account for me.*), and then the other one shows how to do that.

You may use at most 15 minutes, so come prepared. You will not have time for *Oh, what more can I show you?* or *Wait, let me try to remember/look up how we did that*, so rehearse the demonstration in advance. Be prepared to answer any question about your solution the audience might have. 

The examiner will approve you on the Ping Pong assignment [Project Work: Demonstration](https://pingpong.hj.se/courseId/22061/content.do?id=17129200) after your demonstration. 
 
## Part 12: Submitting your work
When you're done with your work, upload it to Ping Pong by submitting the assignment [Project Work: Final Submission](https://pingpong.hj.se/courseId/22061/content.do?id=17129206). Be sure to follow the submission instructions described on that page.