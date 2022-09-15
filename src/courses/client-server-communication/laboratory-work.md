# Laboratory Work
This page contains instructions for the examination test *Laboratory Work*. It consists of two parts, and both of them need to be completed and presented orally to a teacher at a lab session before you pass the examination test.

## Installing Required Software
__If you work on the computers in E2432 or E2433__, all required software should already be installed for you, so no need to install anything yourself.

__If you work on a school computer in any other room__, you need to manually install the required software through the *Software Center* application (unless someone already has done that on the specific computer you sit at).

__If you work on your own private computer__, you need to download and install all required software yourself. In this course, we use only free software available for both Windows, Mac and Linux.

The required software is:

* [Node.js](https://nodejs.org/)
    1. Use the newest LTS version
    2. In the installation process, make sure the following features are installed (they are checked by default, so simply don't uncheck them!):
        * Node.js runtime
        * npm package manager
        * Add to PATH
    3. To verify that Node.js has been successfully installed, run the command `node -v` in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of Node.js that was installed, something like `v16.17.0`
* [npm](https://www.npmjs.com/)
    * This one is installed along with Node.js, so you don't need to install it separately. However, you might want to update it to the latest version (not required):
        * [Update npm instructions](https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm)
    * To verify that npm has been successfully installed, run the command `npm -v` in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of npm that was installed, something like `8.18.0`

The following software tools are not required (use whichever tools you want), but recommended:

* [Visual Studio Code](https://code.visualstudio.com/)
    * IDE with good support for writing, running and debugging Node.js and JavaScript code
    * [On Mac you need to manually add the `code` command](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
* [DB Browser for SQLite](https://sqlitebrowser.org/)
    * Database management tool you can use to visualize/debug the database. An alternative is to install and use [the SQLite extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
* [Postman](https://www.getpostman.com/)
    * App you can use to send custom HTTP requests to a web application

## Lab 1: The Tool App
Before you start working on this part you are expected to read/view the following lectures:

* [Using Shells](../../lectures/using-shells/)
* [Vue](../../lectures/vue/)

The tutorial about Vue will also help you learn the basics.

---

The goal with this part of the laboratory work is to teach you how to use Vue to build a Single-Page Application. Vue is a quite big framework (it would be possible to have a single 7.5 credit course just to teach you all there is to know about Vue), so you are only expected to learn and use the basics (what is taught in this course), which will be enough to create quite advanced and good Single-Page Applications.

The Single-Page Application you should create will consist of different pages, each containing a useful tool of some kind such as a simple calculator, a clock, a counter, etc.

::: warning Help, don't cheat!
The laboratory work is individual work.

**It is OK** to help each other. Examples of that:

* help your friend to debug his code
* explain to your friend why his code doesn't work the way he thinks it works
* compare and discuss different solutions to a lab problem with your friend after both of you have solved the lab to figure out which solution is the best one

**It is NOT OK** to cooperate in any way. Examples of that:

* sit at the same computer and write code together with your friend
* sit at different computers and discuss and write the same code as your friend
* give code to/receive code from your friend

**You must write your own code! If you are unsure about what counts as *helping* and what counts as *cheating*, then simply work alone and ask only the teacher at the lab sessions for help.**
:::

### Creating a new Vue application
Vue applications are preferably implemented in [Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html) files (`.vue` files), so you have all the HTML, CSS and JS code a Vue component consists of in one and the same file. However, web browsers don't understand these type of files, so the `.vue` files needs to be transpiled into JS code. For that you can use a module bundler, and in this course we will use the module bundler called [Vite](https://vitejs.dev/).

If you are an experienced developer and want to try to setup a Vue 3 project from scratch on your own, feel free to do that. [Here](https://vuejs.org/guide/quick-start.html#with-build-tools) are some guiding instructions for your. But we recommend most students to instead simply copy and continue working on the code available in the starter project [Vue 3 Option API Starter](https://github.com/PeppeL-G/vue-3-options-api-starter). Copy/Clone that code to your computer, and then in the project folder, run the following commands:

1. `code .` - Start Visual Studio Code with the application's root folder opened in the Explorer panel
    * In Visual Studio Code, install the recommended extensions you might be prompted to do (will make it easier to write Vue code)
2. `npm install` - Installs all npm packages required to run the app
3. `npm run dev` - Starts Vite
4. Open the URL shown in the shell (something like http://127.0.0.1:5173/) in a web browser to see how your Vue application works
5. Try changing some of the HTML/CSS code in one of the `.vue` files. When you save your changes, Vite will immediately transpile the code in the `.vue` file and push the new JS code to the web browser, which will immediately apply the changes, so you can see the result directly
6. When you are done and want to stop Vite form running, hold down `[CTRL]` and press `[C]` (works on Windows, Mac might have other combination)

Let's quickly go through the most important files and folders the Vue 3 Option API Starter project consists of:

#### `index.html`
`index.html` acts as the entry point to the Vue app. The web web browser will start by requesting this file, which mostly will just tell the web browser to request other files required to display the app.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link rel="icon" href="/favicon.ico">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Vite App</title>
	</head>
	<body>
		<div id="app"></div>
		<script type="module" src="/src/main.js"></script>
	</body>
</html>
```

`<div id="app"></div>` is where the Vue app will mount/attach itself on the webpage later when it starts. The rest of the code here is ordinary HTML.



#### `public` folder
The `public` folder contains static files (typically images) that will be left as they are (never processed by Vite in any way, and never renamed by Vite) in the root folder of the app. Currently it only contains the `favicon.ico` file, but you can put other files here too if you want. It's usually better to put files in the `src/assets` folder. Those files Vite is allowed to process and can optimize (such as giving them shorter names).



#### `src/assets` folder
Put static files here (such as images) Vite is allowed to process and rename.

For example, if you put the file `my.css` in the `public` folder and add `<link rel="stylesheet" href="my.css">` to your HTML code, the web browser will fetch the CSS file as it is. But if you instead put the file `my.css` in the `src/assets` folder and add `<link rel="stylesheet" href="/src/assets/my.css">` to your HTML code, the when the web browser requests the file Vite will send back an optimized version of the file (such as removing unnecessary white-space characters), which is much better.

::: warning Optimization only in production builds
If actually try out what is written above, the CSS file might not be optimized, but serve as it is. That is because Vite runs in development mode, and while developing, it is easer to debug code if it hasn't been optimized. However, if you would build the app in production mode, then Vite would apply optimization techniques, and your code would be optimized.
:::



#### `src/main.js`
This is the main entry point for your JavaScript code. It's responsible to initialize your Vue app and mount/attach it to the webpage. Currently it tells Vue that the `App.vue` component should be mounted/attached to the element on the webpage with id `app`. It also add routing capabilities to the Vue app (the router is defined in `src/router.js`).

```js
// Vite supports importing CSS files like this (will be pushed to the web browser).
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
```


#### `src/App.vue`
This is the root component the Vue app consists of. Currently it shows how to import and use the `Footer` component from the `src/components` folder. It also add links leading to different pages using the `RouterLink` component, and it displays the main content on the current page using the `RouterView` component (these two components are pre-registered as global components, so we don't need to import them). To learn which main content that is shown on which page, take a look at the `src/router.js` file.

```html
<script>
import Footer from './components/Footer.vue'
export default {
	
}
</script>

<template>
	
	<header>
		My app!
	</header>
	
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav>
	
	<main>
		<RouterView></RouterView>
	</main>
	
	<Footer :copyrightYear="2022"></Footer>
	
</template>

<!-- The "scoped" attribute here will make the CSS selectors only
     match HTML elements in this Vue component, and never any HTML
     elements in other Vue components. -->
<style scoped>
nav{
	background-color: yellow;
}
</style>
```



#### `src/router.js`
This file tells Vue which Vue Component to show as the main content on the page depending on which URL the user navigates to. Currently it says:

* The URL `/` should show the Vue component `/src/views/Home.vue` as the main content
* The URL `/about` should show the Vue component `/src/views/About.vue` as the main content

The Vue components used as the main content for different URLs this way are called *Views*, and put in the `src/views` folder.

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/',      component: HomeView},
		{path: '/about', component: AboutView},
	],
})

export default router
```



#### The `src/views` folder
The Vue components in the `src/views` folder (currently `Home.vue` and `About.vue`) represent the main content on the various pages. They are also called *views*.

Sample code of `src/views/Home.vue` is shown below:

```html
<script>
export default {
	
}
</script>

<template>
	<div class="page">
		<h1>Home</h1>
		<p>This is the home page!</p>
	</div>
</template>

<style scoped>
.page{
	background-color: lime;
}
</style>
```



#### `src/components` folder
The Vue components in the `src/components` folder represent Vue components that can be re-used in other Vue components. As an example, if you want to have a login form at multiple different places in your application you could create a Vue component in this folder (e.g. `Login.vue`) containing that login form/functionality, and then refer to this component in any other Vue component where you want the login form to appear.

In addition to containing re-usable Vue components, some Vue components are simply very big (many lines of code), and you can break it down into multiple smaller Vue components to get code that is easer to read. An example of this is demonstrated through the `src/components/Footer.vue` component, which is used by `src/App.vue`:

```html
<script>
export default {
	props: {
		copyrightYear: Number,
	},
}
</script>

<template>
	<footer>
		Copyright {{copyrightYear}}
	</footer>
</template>

<style scoped>
</style>
```

In this example there is not big gain with having `copyrightYear` as a prop (could just as well hardcode it to `2022` in the HTML code instead), but it is used just to show you an example of how you can use a prop in a component.


### Application (layout)
So `src/App.vue` is the Vue component that act as the layout for the application. You can use the special Vue component `<RouterView>` to insert the main content at one place, and you can use the special Vue component `<RouterLink to="/THE-URL">LINK TEXT</RouterLink>` to insert links to the other "pages"/views.

Improve the layout (i.e. the code in `/src/App.vue`) to contain at least:

* A proper header
* A proper navigation menu
* The main content
* A proper footer

Design your layout however you want. It's not that important that it's beautiful, the most important thing is that you learn how this component works and should be used. See the rest of the sub-chapters in Lab 1 to see which links you need to have in the navigation menu (or the header/footer).

Also note that some CSS code already exists in `src/assets/main.css`. Feel free to change that code too.

Feel free to structure your code however you want. You may delete `src/components/Footer.vue` if you think that component just makes it more complicated, and you may equally well also add and use other components, such as `src/components/Header.vue` and `src/components/Navigation.vue`, if you want.

::: tip Be smart/lazy
Feel free to use a CSS framework such as Bootstrap to design your application. Most CSS frameworks are distributed as npm packages, so often you can just run `npm install XXX` to download the source files for the framework and then load them into your application by importing the required CSS and JS files from the npm package you downloaded in the `src/main.js` file. Loading them from a Content Delivery Network by adding `<link>` and `<script>` elements in `index.html` works as well.
:::

### Home & About (static)
Change `/src/views/Home.Vue` and `/src/views/About.Vue` to be more relevant to your application. It's not that important what they contain, but they should feel like they're part of the application. The goal is simply to practice on using HTML and CSS in your Vue component. 


### Dice (state, conditionals, events)
Add a new View component representing the main content on a "page" that displays a random value between 1 and 6:

1. Create a new file called `Dice.vue` in `/src/views/`. To start you can simply copy the content of `Home.vue` and paste it in `Dice.vue`
2. Register a route to this new component in `/src/router.js`
3. If you haven't already done it, provide a link to the new route by adding `<RouterLink to="/THE-URL">LINK TEXT</RouterLink>` to the navigation menu/header/footer in your layout (`/src/App.vue`)

Then add the `data` function to `Dice.vue`:

```html
<script>
export default {
  data(){
    const between1And6 = 1 + Math.floor(Math.random()*6)
    return {
      diceValue: between1And6
    }
  }
}
</script>
```

Then change the HTML code in `Dice.vue` to display `diceValue`. Start by simply showing the number as text. If you want, you can have one image for each dice value, and show the corresponding image instead.

In the HTML code you should also display the text:

* `That was low.` if `diceValue` is 1 or 2
* `That was average.` if `diceValue` is 3 or 4
* `That was high.` if `diceValue` is 5 or 6

To conditionally display HTML code you can use [the `v-if`, `v-else-if` and `v-else` directives](https://vuejs.org/v2/guide/conditional.html). 

To generate a new random dice value shown on the screen, the user currently needs to go to another "page" and then back again (so the current instance of `Dice.vue` is deleted and then a new instance of it is created and displayed when the user gets back). This is not that convenient for the user. Instead, add an HTML button in `Dice.vue` the user can click on to "throw" the dice again (generate a new random integer between 1 and 6). You need to add a method to your component to handle the click like this:

```html
<script>
export default {
  methods: {
    throwDice(){
      // You need to change the code here...
      this.diceValue = 5
    }
  },
  // ...
}
</script>
```

And then tell Vue to run this method when the user clicks on the button (you need to use the [`v-on` directive](https://vuejs.org/v2/guide/events.html#Listening-to-Events) (or the short syntax `@`)).

::: warning Note!
Inside a method in a Vue component (such as `throwDice` above) we can use the special variable `this` to refer to the instance of the Vue component itself. `this.diceValue` will refer to the same `diceValue` in the object we returned from the `data()` method.
:::

### FAQ (loops)
Add a new View component representing the main content on a FAQ "page". The procedure is similar to what you did before.

Don't hard code the FAQs in the HTML code in your component. Instead, use the `data()` method and put the FAQ objects in an array like this:

```js
[{
  question: "How old are you?",
  answer: "I'm 10 years old."
}, {
  question: "What's your favorite color?",
  answer: "My favorite color is purple."
}, ...]
```

In your HTML code you can then use the [`v-for` directive](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) to loop through all the FAQ objects and produce similar looking HTML code for all of them.

Then add a `showAnswer` property to each of your FAQ objects in the array with the initial value `false`. The answer to a FAQ should only be shown if its `showAnswer` property has the value `true`. The user should be able to show/hide the answer to each FAQ by clicking on the FAQ's question shown on the screen. So in the HTML code you need to listen for click on the question, and then invert that FAQ object's `showAnswer` value.

Somewhere on the "page" you should also display how many FAQs there are in total.

### Calculator (model binding, computed properties)
Add a new page with a form in which the user can enter two numbers and select one of the operations `+`, `-`, `*` and `/`. As the user changes any of these fields, the result of the computation should be shown on the screen, but no result should be shown on the screen until the user has changed all three fields.

To implement this, use the [`v-model` directive](https://vuejs.org/v2/guide/forms.html) for two `<input>` (for the two numbers) and one `<select>` (for the operation) and then use a [computed property](https://vuejs.org/v2/guide/computed.html#Computed-Properties) to automatically compute the result of the operation as soon as the user changes any of the three fields.

### Clock (life cycles)
Some times you want to create a Vue component that needs to be updated regularly. An example of that is a `Clock.vue` component that displays the current time of day in the format HH:mm:ss and updates that each second.

To figure out what the current time is, JavaScript gives us the `Date` constructor that we can use like this:

```js
const now = new Date()

const hours = now.getHours() // E.g. 14
const minutes = now.getMinutes() // E.g. 4
const seconds = now.getSeconds() // E.g. 45
```

To regularly execute some code, web browsers gives us [the function `setInterval()`](https://www.w3schools.com/jsref/met_win_setinterval.asp), which we can pass a callback function and an interval to. The web browser will then repeatedly call our callback function with that interval. However, if one Vue component calls `setInterval()` to regularly update itself, and then that component is deleted (for example the user clicks on a link leading to another View component), then we need to tell the web browser to stop calling our callback function, because we don't need that anymore. To do that, web browsers also gives us [the function `clearInterval()`](https://www.w3schools.com/jsref/met_win_clearinterval.asp). To call `setInterval()` when a Vue component is created we can use the `mounted()` method, and to call `clearInterval()` when a Vue component is destroyed we can use the `unmounted()` method:

```html
<script>
export default {
  mounted(){
    // Call setInterval() here...
  },
  unmounted(){
    // Call clearInterval() here...
  },
  // ...
}
</script>
```

To remember the id you get back from `setInterval()`, you can simply store it on the Vue component instance using the special `this` variable, i.e. `this.intervalId = "The value we get back from setInterval()"`.

::: warning Note!
The callback function you pass to `setInterval()` we be invoked as a function by the web browser. That means the special variable `this` inside the callback function will not refer to the Vue component instance unless you write code explicitly making that happen.

Don't use:

```js
created(){
  setInterval(function(){
    // The special variable "this" won't refer to the Vue component instance here :(
  }, 1000)
}
```

Instead, either do one of the following:

```js
created(){
  setInterval(() => {
    // The special variable "this" will refer to the Vue component instance :)
  }, 1000)
}
```

```js
created(){
  setInterval(function(){
    // The special variable "this" will refer to the Vue component instance :)
  }.bind(this), 1000)
}
```

```js
created(){
  const self = this
  setInterval(function(){
    // The variable "self" will refer to the Vue component instance :)
  }, 1000)
}
```
:::

Use `setInterval()`, `clearInterval()` and `Date` to implement a `Clock.vue` component that displays the current time in the format HH:mm:ss (each unit should always be displayed with two digits). Be sure to properly use `mounted()` and `unmounted()`.

### Counters (props)
Create a new page that have three buttons functioning as counters (each button contains a number, and clicking on the button should increment the number):

* The first button should start on 0, and clicking it should increment it by 1
* The second button should start on 45, and clicking it should increment it by 5
* The third button should start on 33, and clicking it should increment it by 10

Instead of implementing three separate counters, create a Vue component in the `/src/components/` folder representing a single counter, and then use three instances of it on your counters "page". Since the counters should function differently (different start values and different increment steps) you can't hard code that in the counter component. Instead, the one using the counter component should be able to specify this through props, e.g. (`<Counter :start-value="33" :inc-steps="10" />`).

Read more about [props in Vue's docs](https://vuejs.org/v2/guide/components-props.html).

### Oral presentation
When you're done with Lab 1, present your work orally to a teacher at one of the lab sessions. Be prepared to:

* Show that your application works as it should
* Explain how the code you've written works
* Answer any question the teacher might have about the code (the teacher will ask questions to verify that you understand how it works)

Afterwards you will be approved on the Canvas assignment [Lab 1 Presentation](https://ju.instructure.com/courses/6797/assignments/35470) by the teacher. After that you should create a ZIP file of the app's root folder (delete the `node_modules` folder first!), and upload it to the Canvas assignment [Lab 1 Code](https://ju.instructure.com/courses/6797/assignments/35471).


## Lab 2: Using a REST API in Vue
The goal with this part of the project is to teach you how to communicate with a backend application from your Single-Page Application using a using a REST API in.

In this lab you will implement a Single-Page Application as the frontend application for a platform called _Activity Finder_. On this platform users can create new accounts and then register activities they are going to do that others may come to as well. Example of activities are:

* Play football
* Learn how to play guitar
* Watch the movie Lord of the Rings

The backend for the platform has already been implemented. The backend exposes a REST API one can use to communicate with it. A client side SDK for the REST API is also available, making it very easy for the frontend to communicate with the backend. Your task is simply to implement the frontend as a Single-Page Application using Vue and the SDK.

### Starting the backend
The backend is implemented in Node.js, and its source code is available in the ZIP file [activity-finder-backend.zip](files/activity-finder-backend.zip). When you develop/test your frontend application you need to have the backend application up and running on the same computer as your frontend application. To get the backend application up and running you need to:

1. Download and unzip the source code for the backend application
2. Open the root folder of the backend application in a shell
3. Run the command `npm install` to install all the npm packages it is using
4. Run the command `npm run start` to start it

When you have started the backend application it will listen for incoming HTTP requests through the REST API on port 8000. If you want to change the port number, just change that at the bottom of the file `/src/app.js` in the backend application. To test if the backend application is properly running, open [localhost:8000/accounts](http://localhost:8000/accounts) in a web browser. If it's up and running you should see an empty JSON array (`[]`) on the screen. You can also try to use Postman to send your own HTTP requests to it.

### Getting started with the frontend
Create a new Vue application as your frontend application the same way you did in Lab 1. Add the file [activity-finder-client.js](files/activity-finder-client.js) to the `/src` folder of your Vue application. This file is the SDK you can use to communicate with the backend application through its REST API. For example, this file exports a function called `getAllAccounts()`, and when you call this function the SDK will in turn send an HTTP GET request for `/accounts` to the backend application, which then in turn sends back all accounts to the SDK, which then delivers all these accounts to you as an array containing objects where each object contains information about an account. But more on this later.

If you changed the port number the backend is listening for incoming HTTP requests on, you need to change that at the top of the file `activity-finder-client.js` as well (the constant `rootPath`).

The SDK makes use of the npm package `jwt-decode`, so in the root folder of your Vue application you also need to run the command `npm install jwt-decode`.

### Implementing the layout
Just as in Lab 1, change the code in `/src/App.vue` to contain a layout of your choice. Feel free to use any CSS framework you want. Look through the rest of the sub-chapters in Lab 2 to understand what functionality the application will contain in the end/which links you need to have in the layout.

In your application you need to keep track of whether the user is signed in or not, and most likely you want this to be reactive, so the GUI updates on its own as soon as the user signs in/out. An easy way to implement this is by having a `data()` method in `/src/App.vue` looking like this:

```js
export default {
  // ...
  data(){
    return {
      // ...
      user: {
        isSignedIn: false
      }
    }
  }
}
```

As soon as the user signs in, you simply change `user.isSignedIn` to `true`, and then you change it to `false` when the user signs out. This way, you can in the HTML code in `/src/App.vue` show different things depending on if the user is signed in or not, e.g.:

```html
<div>
  <div v-if="user.isSignedIn">
    You are signed in :)
  </div>
  <div v-else>
    You are not signed in :(
  </div>
</div>
```

If you want you can also add more properties to `user`, such as `user.username` if you want to be able to display the signed in user's username.

But what if you want to be able to figure out if the user is signed in or out in another Vue component? One way is to pass the `user` object as a props to those components, i.e. use use `<RouterView :user="user"/>` instead of only `<RouterView>` in `/src/App.vue`.

::: warning Note
You might wonder why `/src/App.vue` uses:

```js
  data(){
    return {
      // ...
      user: {
        isSignedIn: false
      }
    }
  }
```

Instead of simply:

```js
  data(){
    return {
      // ...
      isSignedIn: false
    }
  }
```

The reason is because we want the other Vue components to be able to change `user.isSignedIn`. Since the other Vue components now receive the entire `user` object as a props, this will work since **objects are passed by reference**. If we would only pass `isSignedIn`, which is a primitive value (a boolean), the other components would receive a copy of the value, and it wouldn't be "write reactive".

(it's OK if you don't understand this, but the key thing to remember is that if a Vue component wants to change a value it has received as a props and that change should be reactive, that props needs to be an object)
:::

::: warning Note Note
It is bad practice for a child component to change a props it receives. Optimally one would use a global store, such as [Pinia](https://pinia.vuejs.org/) for values all Vue components should have access to. But to keep things as simple as possible, we will ignore that best practice. But feel free to learn and use Pinia if you want.
:::

### View all accounts
Add a "page" that displays all accounts that exists. To fetch all accounts from the backend, you can call the SDK function `getAllAccounts()`:

```js
import { getAllAccounts } from '../activity-finder-client.js'

getAllAccounts((errors, accounts) => {
  // errors = array with error codes (empty if everything went OK).
  // accounts = array with all accounts if everything went OK.
  if(errors.length == 0){
    // accounts = [{id: 1, username: "Alice"}, {...}, ...]
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
  }
})
```

::: tip Populating the database
The backend does initially not contain any accounts, so if you implement this correctly you will fetch an empty array with accounts. You might want to manually insert some records into the database by opening the file `/src/activity-finder.db` in DB Browser for SQLite.
:::

::: tip Callback function
Remember that `this` in a callback function won't refer to the Vue component instance if you create the callback function using `function(...){...}`, so be sure to use one of the workarounds mentioned in Lab 1, such as creating the callback function using `(...) => {...}` instead (as in the sample code above).
:::

### View one account
Add a "page" that displays one account with a specific id. On the previous page, clicking on an account should lead to this page. The URL should contain information about which account to fetch, such as the account's id, like `/accounts/37`. In Vue Router you cna use [Dynamic Route Matching](https://router.vuejs.org/guide/essentials/dynamic-matching.html#dynamic-route-matching) to achieve this.

To fetch an account with a specific id from the backend, you can call the SDK function `getAccountById()`:

```js
import { getAccountById } from '../activity-finder-client.js'

getAccountById(37, (errors, account) => {
  // errors = array with error codes (empty if everything went OK).
  // account = object with info about the account if everything went OK.
  if(errors.length == 0){
    // account = {id: 37, username: "Olle"}
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
    //  - "notFound": No account with the given id exists.
  }
})
```

### Sign up
Add a "page" where the user can sign up (create a new account).

To tell the backend to create a new account, call the SDK function `createAccount()`:

```js
import { createAccount } from '../activity-finder-client.js'

const account = {
  username: "Greta",
  password: "rrrrrr"
}

createAccount(account, (errors, id) => {
  // errors = array with error codes (empty if everything went OK).
  // id = the id the newly created account got if everything went OK.
  if(errors.length == 0){
    // id = 85
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
    //  - "invalidAccount": The account object is wrong.
    //  - "usernameTooShort": The username is too short.
    //  - "usernameTooLong": The username is too long.
    //  - "passwordTooShort": The password is too short.
    //  - "usernameTaken": The username is already used by another account.
  }
})
```

### Sign in
Add a "page" where the user can sign in. To tell the backend to sign in, call the SDK function `signIn()`:

```js
import { signIn } from '../activity-finder-client.js'

const username = "Greta"
const password = "rrrrrr"

signIn(username, password, (errors, account) => {
  // errors = array with error codes (empty if everything went OK).
  // account = object with info about the account you signed into if everything went OK.
  if(errors.length == 0){
    // account = {id: 85, username: "Greta"}
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
    //  - "wrongCredentials": The username of password is incorrect.
  }
})
```

::: tip Hint
Remember, when the user has successfully signed in, change `user.isSignedIn` in `/src/App.vue` to `true` (pass `user` as a props to the "page" component and change it to `true` in the "page" component).
:::

### Sign out
Add a "page" where the user can sign out. To tell the backend to sign out, call the SDK function `signOut()`:

```js
import { signOut } from '../activity-finder-client.js'

signOut(() => {
  // The SDK has now forgot which account you previously signed in to.
})
```

::: tip Hint
Remember, when the user has successfully signed in, change `user.isSignedIn` in `/src/App.vue` to `false` (pass `user` as a props to the "page" component and change it to `false` in the "page" component).
:::

### Create activity
Add a "page" where signed in users can create new activities. To tell the backend to create a new activity, call the SDK function `createActivity()`:

```js
import { createActivity } from '../activity-finder-client.js'

const activity = {
  accountId: 28, // The id of the account creating the activity (i.e. the signed in user's account id).
  title: "Play football",
  description: "Ordinary football, but with three teams instead of two :)",
  startTime: 1577199600000, // Unix timestamp (milliseconds)
  endTime: 1577203200000, // Unix timestamp (millisecond)
  latitude: 57.77859078562013,
  longitude: 14.16189193725586
}

createActivity(activity, (errors, id) => {
  // errors = array with error codes (empty if everything went OK).
  // id = the id the newly created activity got if everything went OK.
  if(errors.length == 0){
    // id = 85
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
    //  - "invalidActivity": The activity object is wrong.
    //  - "notAuthenticated": The user is not signed in.
    //  - "notAuthorized": The user tries to create an activity for an account the user is not signed in to.
    //  - "accountNotFound": No account with the id 'accountId' exists.
    //  - "titleTooShort": The title is too short.
    //  - "titleTooLong": The title is too long.
    //  - "descriptionTooShort": The description is too short.
    //  - "descriptionTooLong": The description is too long.
    //  - "startTimeTooEarly": The start time has already been.
    //  - "endingBeforeStarting": The end time is before the start time.
})
```

The user can only create new activities belonging to it's own account.

::: tip Hint
If you want to make it easy, let users enter `startTime` and `endTime` in `<input type="number">`. You can generate unix timestamps at [timestampgenerator.com](https://timestampgenerator.com/), and then add `000` to the end to get it in milliseconds. You could use `<input type="datetime-local">` instead, but that requires more work from you (you need to convert it into a unix timestamp).
:::

::: tip Hint
You can use `<input type="number" step="any">` to let the user enter values for `latitude` and `longitude`. The values can be found using [https://epsg.io/map](https://epsg.io/map). The best would of course be to let users pick location on a map like that directly on the page, but let's do this the easy way to start with.
:::

### View all activities
Add a "page" that displays all activities. To fetch all activities from the backend, you can call the SDK function `getAllActivities()`:

```js
import { getAllActivities } from '../activity-finder-client.js'

getAllActivities((errors, activities) => {
  // errors = array with error codes (empty if everything went OK).
  // activities = array with all activities if everything went OK.
  if(errors.length == 0){
    // activities = [{id: 1, accountId: 32, title: "Play football", ...}, {...}, ...]
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
  }
})
```

### View one activity
Add a "page" that displays one activity with a specific id. To fetch an activity with a specific id from the backend, call the SDK function `getActivityById()`:

```js
import { getActivityById } from '../activity-finder-client.js'

getActivityById(5, (errors, activity) => {
  // errors = array with error codes (empty if everything went OK).
  // activity = object with info about the activity if everything went OK.
  if(errors.length == 0){
    // activity = {id: 5, accountId: 48, title: "Read Harry Potter", ...}
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
    //  - "notFound": No activity with the given id exists.
  }
})
```

### View own activities
Add a "page" that displays all activities created by the signed in user. To fetch all activities belonging to a specific user, call the SDK function `getActivitiesByAccountId()`:

```js
import { getActivitiesByAccountId } from '../activity-finder-client.js'

getActivitiesByAccountId(3, (errors, activities) => {
  // errors = array with error codes (empty if everything went OK).
  // activities = array with all activities if everything went OK.
  if(errors.length == 0){
    // activities = [{id: 1, accountId: 3, title: "Watch the sky", ...}, {...}, ...]
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
  }
})
```

### Delete activity
Somehow signed in users should be able to delete activities they have created. Implement this however you want.

To tell the backend to delete an activity with a specific id, call the SDK function `deleteActivityById()`:

```js
import { deleteActivityById } from '../activity-finder-client.js'

deleteActivityById(33, (errors) => {
  // errors = array with error codes (empty if everything went OK).
  if(errors.length == 0){
    // The activity was successfully deleted.
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
    //  - "notAuthenticated": The user is not signed in.
    //  - "notAuthorized": The user tries to delete an activity that doesn't belong to the account the user is signed into.
  }
})
```

A user can only delete activities belonging to its own account.

### Update activity
Somehow signed in users should be able to update activities they have created. Implement this however you want.

To tell the backend to update an activity with a specific id, call the SDK function `updateActivityById()`:

```js
import { updateActivityById } from '../activity-finder-client.js'

const updatedActivity = {
  id: 33,
  title: "Play Ice Hockey",
  accountId: 5,
  description: "CHANGE: we play ice hockey instead, 5 teams :)",
  startTime: 1577199600000,
  endTime: 1577203200000,
  latitude: 57.77859078562013,
  longitude: 14.16189193725586
}

updateActivityById(33, updatedActivity, (errors) => {
  // errors = array with error codes (empty if everything went OK).
  if(errors.length == 0){
    // Activity was updated.
  }else{
    // errors = ["errorCode1", "errorCode2", ...]
    // Possible errors codes:
    //  - "networkError": Couldn't connect to the backend.
    //  - "backendError": The backend couldn't execute the request for some reason.
    //  - "notFound": No activity with the given id exists.
    //  - "invalidActivity": The activity object is wrong.
    //  - "notAuthenticated": The user is not signed in.
    //  - "notAuthorized": The user tries to update an activity for an account the user is not signed in to.
    //  - "idChanged": The id changed (not allowed).
    //  - "started": The activity has already started.
    //  - "titleTooShort": The title is too short.
    //  - "titleTooLong": The title is too long.
    //  - "descriptionTooShort": The description is too short.
    //  - "descriptionTooLong": The description is too long.
    //  - "startTimeTooEarly": The start time is changed to a time that has already been.
    //  - "endingBeforeStarting": The end time is before the start time.
})
```

When an activity has started, it can no longer be updated, and users can only update activities belonging to their own accounts.

### Oral presentation
When you're done with Lab 2, present your work orally to a teacher at one of the lab sessions. Be prepared to:

* Show that your application works as it should
* Explain how the code you've written works
* Answer any question the teacher might have about the code (the teacher will ask questions to verify that you understand how it works)

Afterwards you will be approved on the Canvas assignment [Lab 2 Presentation](https://ju.instructure.com/courses/6797/assignments/35472) by the teacher. After that you should create a ZIP file of the app's root folder (delete the `node_modules` folder first!), and upload it to the Canvas assignment [Lab 2 Code](https://ju.instructure.com/courses/6797/assignments/35473).

If you have time to spare, try complete the extra tasks below.

### Extra tasks
These extra tasks do not need to completed, but if you have time for it, give them a try. They are fun, we promise! ;)

#### Auto login
When the user signs up, also automatically sign in the user.

#### Loading indicators
It can take some time for the frontend before it receives the response from the backend when it has sent an HTTP request to it. This is usually not noticeable for developers who run the frontend and backend on the same computer (the communication delay is so small), but can become apparent when you deploy them on the Internet. When there is a loading time like this (~each time you use the SDK), display a loading indicator of some kind. In the simplest case, this can just be the boring text "Loading", but most CSS frameworks have some nicely designed components for this.

The SDK can simulate network communication delay. In the source code, simply change the variable `networkDelayInMs` to the amount of milliseconds you want to add as delay to each HTTP request it sends.

#### Empty states
When listening all accounts or all activities and there are non, don't simply display an empty page. Instead, display the text "None have been created yet", or do something even better. For the cURLous one, [search for "empty state ux"](https://duckduckgo.com/?q=empty+state+ux).

#### Pagination
Although the REST API/the SDK does not provide pagination functionality, nothing prevents you from implementing one in the frontend application.

#### Filtering
Instead of showing a list of all activities, also have a form users can use to filter which activities to show. You decide what filtering should be available, but maybe search for title, or select a date range or to show all activities close to a specific place? Although the REST API/the SDK does not provide filtering functionality, nothing prevents you from implementing one in the frontend application.

#### Maps
Each activity has a longitude and a latitude. Requiring user to manually enter these won't be a good experience for them. Instead, it would be easier for them to pick their location on a map. Let them do that! And instead of showing a list of all activities, show a map marking where each activity takes place.

#### Remember activities
Let users remember activities they like locally (e.g. store the information in local storage). Have a special page they can use to list all the activities they've choose to remember.
