# Exercises
There is no laboratory work in this course, but here are some optional exercises you can try to complete before you start implementing the website in your project work. Completing the exercises will give you a gentler start compared to starting to work on the project directly, so you are strongly recommended to complete them  .

## The CSS Exercise
The goal with this exercise is to practice on the basics in HTML and CSS. Before you start working on it, you are recommended to:

* View the following lectures:
    * [Garrits on campus lecture about CSS 1 & 2](../../lectures/garrit-css/)

---

Your task is to create a portfolio website for yourself featuring your work from the study program.

### 1. Sketch a wireframe
The first task is to draw a wireframe, a rough sketch, how your site should look.

Take a picture of your wireframe and save it as a PDF.

### 2. Set up a GitHub Repository
Create a repository on GitHub that you use for your portfolio.

### 3. Code the HTML structure
Next, you use the wireframe to define the content areas you will need in your HTML code. Use semantic tags.

When you are done, commit, and push your results to your GitHub repository.

### 4. Create a simple CSS
To make your portfolio a bit more impressive, create a CSS-file, link it to your HTML-file, and style the text and color attributes.

When you are done, commit, and push your results to your GitHub repository.

### 5. Layout with more advanced CSS
Use grid and flexbox to generate the layout of your portfolio. Make sure that you plan it responsively.

When you are done, commit, and push your results to your GitHub repository.

### 6. Publish your result with GitHub Pages

When you are satisfied with your portfolio, go to the setting tab on your GitHub repository in the browser, select pages and publish your portfolio. If you like, you can share your link with your classmates.

## The DB Exercise
The goal with this exercise is to practice on basic usage of databases. Before you start working on it, you are recommended to:

* View the following lectures:
    * [Jasmins on campus lecture about DB 1 & 2](../../lectures/jasmine-database/)

---

Instructions for the DB exercise will be available here.

## The JS Exercise
The goal with this exercise is to practice on the basics in JavaScript. Before you start working on it, you are recommended to:

* View the following videos:
    * [Using Shells](../../lectures/using-shells/)
    * [JavaScript Basics](../../lectures/javascript-basics/)
    * [Asynchronous Programming in JavaScript](../../lectures/asynchronous-programming-in-js/)
    * [Node.js](../../lectures/node-js/)

### Getting started with JavaScript
To run JavaScript code, you need to have a JavaScript engine that can execute the code for you. The runtime environment Node.js comes with a JavaScript engine you can use to do that. Node.js also contains an environment (modules) you can use to access OS protected resources (network functionality, filesystem, etc..

Start by downloading and installing Node.js from [nodejs.org](https://nodejs.org/en). Use the *Current* version if you want to be able to test the latest features. Use the LTS (Long Term Support) version if you plan to later publish real web applications (many web hosting companies only support the LTS version).

After you have installed Node.js, you should be able to start a "Read Eval Print"-Loop (REPL) by running the command `node` in a shell (in Windows you can use the application *Windows PowerShell* as your shell). This command will simply start a loop that:

1. Asks you to enter some JavaScript code.
2. Executes the JavaScript code you entered.
3. Prints the result of the last statement/expression in your entered code.

This is a great way to quickly test how JavaScript works, but for real applications, one writes JavaScript code in a `.js` file, and then asks Node.js to execute the code in this file by running the command `node the-path/to-the/file.js`.

To get acquainted with JavaScript, try solving the problems below. Don't worry too much if you can't solve them; solutions to them will be shown at one of the tutorials.

### Problem 1: `sum()`
Implement the function `sum()`, which should receive an integer as argument, and returns the sum of the integers between 0 and the argument it receives, e.g. `sum(3)` → `0+1+2+3` → `6`.

::: tip Showing output
To print values to the shell, you can use `console.log("This will be printed to the console.")`.
:::

::: danger Return, don't print!
As always, functions computing something should **return** the value they compute, and don't print it directly. Let the caller print the return value instead. 
:::

### Problem 2: `sumOfNumbers()`
Implement the function `sumOfNumbers()`, which should receive an array with numbers as argument, and returns the sum of the numbers in that array, e.g. `sumOfNumbers([5, 2, 8])` → `5+2+8` → `15`.

### Problem 3: `getEvenNumbers()`
Implement the function `getEvenNumbers()` which receives an array with numbers and return a new array with only the even numbers, `getEvenNumbers([4, 7, 3, 6])` → `[4, 6]`.

### Problem 4: `count()`
Create the function `count()` which returns the number of times it has been called (the first time you call the function it should return `1`, the second time you call it it returns `2`, etc.). Sample usage:

```js
const one = count()
const two = count()
const three =  count()
// ...
```

### Problem 5: `makeGetThree()`
Create the function `makeGetThree()` which returns a new function that returns the number `3` when it's called. Sample usage:

```js
const getThree = makeGetThree()
const three = getThree()
```

### Problem 6: `makeCount()`
Create the function `makeCount()` which returns a new `count()` function as specified in Problem 4 each time it's called. Sample usage:

```js
const firstCount = makeCount()
firstCount() → 1
firstCount() → 2
const secondCount = makeCount()
secondCount() → 1
secondCount() → 2
secondCount() → 3
secondCount() → 4
firstCount() → 3
```