# Exercises
There is no laboratory work in this course, but here are some optional exercises you can try to complete before you start implementing the website in your project work. Completing the exercises will give you a gentler start compared to starting to work on the project directly, so you are strongly recommended to complete them  .

## Exercise 1: HTML
The goal with this exercise is to teach you the basics in HTML. Before you start working on it, you are recommended to:

* View the following videos:
    * [Internet Basics](../../lectures/internet-basics/)
    * [HTTP and Web Applications](../../lectures/http-and-web-applications/)
    * [Character Encodings](../../lectures/character-encodings/)
    * [HTML](../../lectures/html/)

---

### Introduction to HTML
HTML is a markup language. It is used to mark what type of data different text represents. For example, to mark that some text is a paragraph, one would write `<p>some text</p>`, and to mark that it instead is a header, one would write `<h1>some text</h1>` (for subchapters, one would use `<h2>`, `<h3>`, `<h4>`, `<h5>` or `<h6>` instead of `<h1>`, depending on the chapter level).

Being a markup language, HTML does not specify how web browsers should visualize webpages consisting of HTML code. Some programs do not even visualize webpages at all. This includes programs such as:

* Web spiders indexing webpages (used by search engines such as Google and DuckDuckGo).
* Screen readers and web browser for visually impaired people which read out loud the content on webpages.

For these programs, it is very important that HTML is used properly. For example, if a website contains a list of items, and you mark it using the `<ul>` tag and `<li>` tag, these programs can contain special functionality to process the list. If the website on the other hand marks the list using multiple `<p>` tags instead, which visually would look similar to a list for humans, that extra functionality cannot be applied by these programs, since they do not recognize the list as a list.

HTML code should be written in HTML files. That is, files with the file extension `.html`. Most programs associate files with the file extension `.htm` as HTML files as well, but that was primarily used a long time ago when [some systems only supported file extensions consisting of at most 3 characters](https://en.wikipedia.org/wiki/8.3_filename).

Any general text editor can be used to create an HTML file. Here is a short list with some of them:

* [Atom](https://atom.io/)
* [Sublime](https://www.sublimetext.com/)
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/)
* [Visual Studio Code](https://code.visualstudio.com/)

Most Operating Systems open HTML files with the default chosen web browser on that system. If you want to open an HTML file in a text editor instead, you might have to:

1. Right click on the HTML file with your mouse.
2. In the appearing menu, choose *Open with*.
3. Select your desired text editor.

When a web browser displays an HTML file, it will style the text in the file according to the tags surrounding it. How the text inside the tags are styled is up to the web browser, but most web browsers styles the different tags the same way these days.

According to [gs.statcounter.com](https://gs.statcounter.com/), Google Chrome is currently the most used web browser. The worldwide market share of web browsers, according to their measurements, is displayed in the table below.

| Web Browser | Worldwide Market Share |
|---|---|
| Chrome | 63.34% |
| Safari | 15.06% |
| Firefox | 4.48% |
| Samsung Internet | 3.77% |
| Others | Remaining % |

[Chapter 4 in the HTML specification](https://html.spec.whatwg.org/#toc-semantics) defines the tags HTML consists of. There you can learn which different tags you can use, and what they are used for. If you find specifications hard to read, you can use one of the many websites teaching HTML, e.g. [W3Schools](https://www.w3schools.com/).

### The Task
An HTML file can be thought of as a word document, but instead of having a fancy <abbr title="What You See Is What You Get">WYSIWYG</abbr> interface to edit it, you only see the document as raw text (HTML code) in your text editor. If you want to see what it looks like rendered on the screen, you need to open it in a web browser.

Your task is to create an HTML file containing a copy of the content in this chapter (Exercise 1). The visual appearance of your HTML code will most likely differ a bit to what it look like on this page, but the important part is to markup the text semantically correct. Links should be marked as links, headers should be marked as headers, tables should be marked as tables, etc.

Good luck! 😊

## Exercise 2: CSS
The goal with this exercises is to teach you the basics in CSS. Before you start working on it, you are recommended to:

* View the following videos:
    * [CSS](../../lectures/css/)

### Introduction to CSS
A web browser's primary purpose is to render the webpages we visit ("to render" does in this context mean to visualize on the screen). These days, almost all modern web browsers render the different HTML tags the same way, but back in the old days (in the beginning of [the browser wars](https://en.wikipedia.org/wiki/Browser_wars)), a common problem for web developers was that their websites looked good in one web browser, but completely wrong in another one.

If you don't like the way web browsers render your webpage, you can tell them how to render it by using a style sheet language called CSS. Through it, you can for example specify:

<ul>
    <li style="color: red">The color of the text.</li>
    <li style="background-color: yellow">The background color of an element.</li>
    <li style="font-size: 200%;">The size of the text.</li>
    <li style="width: 100px;">The width of an element.</li>
</ul>

CSS code can be applied to HTML elements on a webpage in three different ways:

<ul style="list-style-type: square">
    <li>Using the <code>style</code> attribute.</li>
    <li>Using the <code>&lt;style&gt;</code> tag.</li>
    <li>Using the <code>&lt;link&gt;</code> tag and an external CSS file.</li>
</ul>

The simplest way to apply CSS is by using the `style` attribute, and write the CSS code as the value of this attribute. This way, the CSS code will consist of a set of declarations (property-value pairs describing how the element should be styled), and the declarations will only be applied to that element, and the elements it contains.

The second simplest way to apply CSS code to HTML elements is by using the `<style>` tag, and write the CSS code inside that one. When using CSS this way, the CSS code consists of a set of rules, where each rule consists of a selector (describing which HTML elements the rule should be applied to) and a set of declarations (describing how the selected HTML elements should be styled). The primary benefit with this approach over the previous approach is that you can use CSS rules to apply the same CSS declarations to multiple different HTML elements at the same time (e.g. change the font size of all paragraphs using a single rule).

<div style="margin: 0 auto; width: 50%;">

The best way of using CSS is by writing it in an external CSS file (a file with the extension .css), and then link to that document from the HTML document using the `<link>` tag. This way, your CSS code can be re-used across multiple HTML documents, and it can also be cached by the web browser.
When using CSS, it is important to remember that web browsers use the box model. In this model, each HTML element is represented as box (rectangle) consisting of 4 layers. These are, from inside out, content, padding, border and margin.

</div>

### The Task
Your task is to create an HTML file containing a copy of the content in this chapter (Exercise 2). Try to make the visual appearance of your HTML code as similar to the text on this page as possible. Write your CSS code either in the HTML file or in a separate CSS file.

<span style="font-weight: bold; font-size: 75%; color: blue; font-style: italic; text-decoration: line-through; background-color: lime;">Good luck!</span> 😊

## Exercise 3: JS
The goal with this exercise is to teach you the basics in JavaScript. Before you start working on it, you are recommended to:

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

To get acquainted with JavaScript, try solving the problems below.

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
Create the function `count()` which returns the number of times it has been called (the first time you call the function it should return 1, the second time you call it it returns 2, etc.). Sample usage:

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
Create the function `makeCount()` which returns a new `count()` function as specified in Problem 4. Sample usage:

```js
const firstCount = makeCount()
firstCount() → 1
firstCount() → 2
const secondCount = makeCount()
secondCount() → 1
secondCount() → 2
firstCount() → 3
```