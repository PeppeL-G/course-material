# Laboratory Work
On this page you find information about the examination test `Laboratory Work`.

## General information
<CompactInfo :infoPieces='{
    "Number of credits": "1",
    "Grades": ["Fail", "Pass"],
    "How to work": "Individually",
    "Goal": "To learn how to use client-side JavaScript.",
    "Instructions": "Complete and present your solutions to the labs on this page to a teacher at a lab session. Each lab is about improving the user experience on a webpage by using client-side JavaScript.",
    "Re-examination": "Special lab session at the re-exam period in June and in August. Contact the course coordinator for more specific details.",
    "Help": "Ask the teacher for help at the lab sessions."
}'>
</CompactInfo>

::: warning Note!
The laboratory work is individual work.

**It is OK** to help each other. Examples of that:

* help your friend to debug his code.
* explain to your friend why his code doesn't work the way he thinks it works.
* compare and discuss different solutions to the lab problems with your friend to figure out which solution is the best one.

**It is NOT OK** to cooperate in any way. Examples of that:

* sit at the same computer and write code together with your friend.
* sit at different computers and discuss and write the same code as your friend.
* give code to/receive code from your friend.

**You must write your own code! If you are unsure about what counts as *helping* and what counts as *cheating*, then simply work alone and ask only the teacher at the lab sessions for help.**
:::

::: danger Note!
In each lab you are given an HTML file. You may not change the HTML code written in that file, but feel free to write as much CSS and client-side JavaScript code you want and need to complete the lab.
:::

Feel free to use whichever tools you want to complete the labs described below, but we recommend you to use [Visual Studio Code](https://code.visualstudio.com/).

Before you start working on the labs you are recommended to:

* Read/View the following lectures:
    * [Client-side JavaScript & BOM](../../lectures/client-side-javascript-and-bom/)
    * [Document Object Model](../../lectures/document-object-model/)

::: tip Debugging
When the web browser executes the JavaScript statement `debugger` it enters a debug mode in which you can inspect the values variables have, use step-by-step execution, etc.. Use that to debug your code when it doesn't work the way you want.
:::

## Lab 1: Generating a table of contents
The file <a :href="$withBase('courses/web-development-advanced-concepts/files/lab-01-table-of-contents.html')" target="_blank">lab-01-table-of-contents.html</a> contains some of the information on [Wikipedia's Jönköping University article](https://en.wikipedia.org/wiki/J%C3%B6nk%C3%B6ping_University). Your task is to write JavaScript code that generates a table of content for the document (i.e. a list with the title of all the headers).

Some DOM functionalities you might find helpful:

* `document.addEventListener("DOMContentLoaded", aCallbackFunction)` to tell the web browser to call `aCallbackFunction` when it is done parsing the HTML code.
* Calling `querySelector("aCSSSelector")` on `document` or `anHTMLElement` to find the HTML element matching `aCSSSelector`.
* Calling `querySelectorAll("aCSSSelector")` on `document` or `anHTMLElement` to find the HTML elements matching `aCSSSelector`.
* `anHTMLElement.innerText` to read out/change what is written between the start and stop tag of `anHTMLElement`.
* `document.createElement("tagName")` to create a new HTML element of type `tagName` (e.g. `ul`).
* `anHTMLElement.appendChild(aChildElement)` to add `aChildElement` to `anHTMLElement`.

## Lab 2: A calculator
The file <a :href="$withBase('courses/web-development-advanced-concepts/files/lab-02-calculator.html')" target="_blank">lab-02-calculator.html</a> contains a form through which users should be able to enter two operands and one operation. Your task is to write JavaScript code that displays the result of the selected operation applied on the two entered operands.

Some DOM functionalities you might find helpful:

* `anHTMLElement.addEventListener("eventName", aCallbackFunction)` to tell the web browser to call `aCallbackFunction` when the event `eventName` happens on `anHTMLElement`. You are probably especially interested in the `input` event (for `<input>`, `<select>`, ...) and the `submit` event (for `<form>`). For the `submit` event, also remember to use `event.preventDefault()`.
* `anInputElement.value` to read out/change the entered value in `anInputElement`.
* `aSelectElement.value` to read out/change the value of the selected `<option>` in `aSelectElement`.

::: warning Note!
If the address bar in the web browser changes (a query string is added to the end of it) when you click on the submit button, then you have failed to properly call the `event.preventDefault()` method.
:::

## Lab 3: Validating input to forms
The file <a :href="$withBase('courses/web-development-advanced-concepts/files/lab-03-form-validation.html')" target="_blank">lab-03-form-validation.html</a> contains a form users can use to enter information about a new account to be created. Your task is to write JavaScript code validating the data entered in the form when the user submits it according to the following validation rules:

* The email field must contain the `@` symbol.
* The first password field must contain at least 8 characters.
* The second password field must be equal to the first password field.

If something is wrong, display the error messages on the screen (in the HTML code using JavaScript; it is not OK to use the `alert()` function). Otherwise (if everything is valid), just let the form be submitted (so the server receives it, although in this case, no server exists).

Some DOM functionalities you might find helpful:

* `aString.length` to get the number of characters in `aString`.
* `aString.includes(aSubString)` to check if `aString` contains `aSubString`.

::: warning Note!
The form should be submitted if there are no validation errors. If you open the webpage using the `file` protocol, the web browser will simply reload the webpage when the form is submitted.
:::

## Lab 4: Tabs
The file <a :href="$withBase('courses/web-development-advanced-concepts/files/lab-04-tabs.html')" target="_blank">lab-04-tabs.html</a> contains three forms:

* One form to create a new account.
* One form to sign in to an existing account.
* One form to subscribe to updates.

Although all three forms are useful, displaying all of them at the same time does not make sense since the user is only interested in using one of them at a time. Your task is to write JavaScript code that only displays one form at a time, and by clicking on links the user should be able to switch which form that is shown.

Some DOM functionalities you might find helpful:

* `anHTMLElement.classList` to add/remove/toggle classes `anHTMLElement` has.

::: warning Note!
If the user has disabled client-side JavaScript in the web browser, all three forms should of course be displayed.
:::

## Present your work
Present your work to a teacher at one of the lab sessions. Be prepared to explain how your code works and to answer any question the teacher might have about it. When the teacher is satisfied with your presentation, he will pass you on respective assignment on Canvas:

* [Lab 1](https://ju.instructure.com/courses/3372/assignments/12475)
* [Lab 2](https://ju.instructure.com/courses/3372/assignments/12476)
* [Lab 3](https://ju.instructure.com/courses/3372/assignments/12477)
* [Lab 4](https://ju.instructure.com/courses/3372/assignments/12478)