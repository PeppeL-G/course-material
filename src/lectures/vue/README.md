---
sidebar: auto
navbarTitle: Vue
---

# Vue
Vue is a JavaScript Framework one can use to build Single-Page Applications in. It is quite similar to other frameworks such as React and Angular, but much easier to use.

## What is a Single-Page Application?
Traditional websites consists of many different webpages (you can think of these as different HTML files) stored on the server. When the user visits a website, the user's web browser will download and display one of these webpages to the user. When the user clicks on a link or submit a form on the webpage, the web browser will fetch and show another webpage to the user. So, simply put, the server contains all webpages on a website, and the web browser only contains a copy of one of those at a time, and it shows that one to the user.

A website doesn't have to work like that. Another way a website can work is that the web browser fetches everything required to display all webpages on a website directly, and then the website uses client-side JavaScript to change what content to shown in the user's web browser when the user clicks on a link or submits a form. Such a website is called a Single-Page Application (SPA).

## What is a framework?
Building an SPA from scratch requires the developer to write a lot of code. It is doable, but will take a lot of time.

To facilitate creating apps (including websites and SPAs), some very experienced developers crete frameworks. A framework contains a lot of code common for all applications, and the developer using the framework just need to provide a small amount of code to make the app function the way she wants. This way, the developer don't need to write much code on her own, but a small drawback is that the developer needs to spend time learning how to use the framework first.

## What is Vue?
Vue is a framework one can use to build a Single-Page Application (SPA). Simple as that! The Vue framework is to a large extent built on the MVC pattern.

## What is the MVC pattern?
Implementing a graphical user interface (GUI) usually requires the developer to write a lot of code. It is not uncommon that this code ends up being very messy and hard to maintain over time. To facilitate, smart programmers came up with a way to structure the code (known as a *design pattern*)so it doesn't get very messy. They called that design pattern for the Model-View-Controller pattern, or simply the MVC pattern. The MVC pattern instructs you to split your code into three different parts: one part for the Model, one part for the View, and one part for the Controller.

### The Model
To understand how the MVC pattern works, you must first understand that all GUIs are about visualizing some data. Even if the GUI should just something as simple as displaying a circle, it is actually data that is visualized as a circle. The data could in this case consist of:

* The position of the circle (e.g. the x and y coordinates of the center)
* The size of the circle (e.g. the radius)
* The color of the circle (e.g. the string `red`)

All the data needed to visualize the GUI is in the MVC pattern known as the *Model*. In Vue, you can see the Model as an ordinary JavaScript object, for example:

```js
const model = {
	xPosition: 50,
	yPosition: 75,
	radius: 10,
	color: "red",
}
```

However, it is usually only data that will change (and that you can't hardcode) that you need to put in your Model. For example, if the circle should look the same on the screen all the time, you need no Model at all. But if you want the circle to be able to move around on the screen, then the Model should to keep track of the circle's `xPosition` and `yPosition`. And if you also want the circle's size to change from time to time, you also need to store the `radius` in the Model, etc.

### The View
After you have created your Model, you can continue by creating the View part. The View part consist of the code that visualizes the data in the Model. In Vue, the View part will be built with HTML and CSS code.

If you should visualize a circle that looks the same all the time (i.e. your model is empty), then your View part would (in theory) look as something like the one shown below:

```html
<div style="
	position: absolute;
	left: 50px;
	top: 75px;
	border-radius: 10px;
	width: 10px;
	height: 10px;
	background-color: red;
	transform: translate(-50%);
">
</div>
```

BUT, most often the GUI should not be static like this. Most often, the GUI should change depending on what the user do. For example, when the user clicks on the circle, we might want to move the circle to the right. This means that the circle's X-position will vary over time, and we can't hardcode `left` to be `50px` in our View. Instead, the View should read this piece of data from the Model! So, our Model would look something like this:

```js
const model = {
	xPosition: 50,
}
```

And our View would (in theory) look something like this:

```html
<!-- The value for the left property below is not valid to
     write this way, but hopefully you understand the principle. -->
<div style="
	position: absolute;
	left: model.xPosition px;
	top: 75px;
	border-radius: 10px;
	width: 10px;
	height: 10px;
	background-color: red;
	transform: translate(-50%);
">
</div>
```

Vue has very good support for generating HTML and CSS code like this based on the data stored in the Model.

### The Controller
So, what's the last part of code responsible for? User interactions!

1. The Model should only contain the data that should be visualized in the GUI
2. The View should build the GUI and visualize the data in the Model 
3. When the user interacts with the View (for examples clicks on a button), the View should tell the Controller what happened, and the Controller should then react to the user interaction accordingly

The Controller typically updates the data in the Model to handle the user interaction, and then the View is refreshed with the new data stored in the Model.

In Vue, the Controller is typically implemented as different JavaScript functions. For example, if we would want the circle to move to the right when the user clicks on it, the code could (in theory) look something like this:

```js
// Our model.
const model = {
	xPosition: 10,
}

// Our controller functions.
function onCircleClicked(){
	model.xPosition = model.xPosition + 10
}
```

```html
<!-- Our view -->
<!-- The value for the left property below is not valid to
     write this way, but hopefully you understand the principle. -->
<div onClick="onCircleClicked" style="
	position: absolute;
	left: model.xPosition px;
	top: 75px;
	border-radius: 10px;
	width: 10px;
	height: 10px;
	background-color: red;
	transform: translate(-50%);
">
</div>
```

The code above does of course not work as it is, but it shows the basic principle of the MVC pattern works. Vue makes use of the MVC pattern in a way that is really similar to the example above, it's just that we write the code in Vue a little bit different.

## Learning Vue
This lecture won't try to teach you how to use Vue. Vue has an excellent [Tutorial](https://vuejs.org/tutorial/) you can take to learn that. But there are some more things you should now though before taking that tutorial:

* Vue exists in different versions. You should learn the latest version of Vue, which currently is Vue 3. If you find Vue code online someone else has written, remember that that code might have been written for an older version of Vue, and might not work in Vue 3
* Vue can be written directly in client-side JS code (known as *HTML-mode*), but most often one use the *SFC-mode* instead. The SFC-mode requires a compilation step that transforms the code you write into client-side JS, but it is easier to build big SPAs in it. In this course you only need to learn the SF-mode, so use that mode in the tutorial
* Vue apps can be implemented in the "old" *Vue Options API*, or in the newer *Vue Composition API*. One is not better than the other in all cases, so both ways are still useful, and you can even mix the two APIs in one and the same SPA. In the tutorial you can switch between these two APIs, but we recommend you to only focus on learning and using the Options API, since that's the easier one to learn and use

## Recommended reading
* [Take the Vue Tutorial!](https://vuejs.org/tutorial/)
    * If you think any of the steps in the tutorial is too hard, simply skip that one, and ask about it at the next tutorial or lab session
* The ones who are curios about the history of Vue and its creator Evan You can view [Vue.js: The Documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI) on YouTube