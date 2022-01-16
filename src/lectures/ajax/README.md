---
sidebar: auto
navbarTitle: AJAX
---

# AJAX
Traditionally, the only way to load new information on a webpage was by clicking on a link or submitting a form to tell the web browser to send a GET or a POST request to fetch and display a new webpage. But with *Asynchronous JavaScript And XML* we can use client-side JavaScript to tell the web browser to send an HTTP request to a server, and we can also use client-side JavaScript to receive and handle the HTTP response the web browser receives back. This way it's easier to create more interactive websites with better user experience.

<iframe width="560" height="314" src="https://www.youtube.com/embed/tVZitsQRB_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: danger Use AJAX properly!
AJAX can be used to improve the user experience, but most websites trying to use it actually end up providing a worse user experience. If you try to use it on a website, be sure to:

* Show loading indicators
    * (otherwise users won't know if their clicks are registered, if something crashed, or if the page is still loading, etc.)
* Handle errors
    * (must show error messages to the users when something goes wrong, otherwise they will just sit and wait)
* Change the URI when showing new content
    * (otherwise users can't bookmark the page with the newly loaded content, the refresh button won't work as expected, search engines can't take users directly to the new content, etc.)
* Listen for changes in the web browser's history, and act accordingly
    * (otherwise the the back and forward buttons in the web browser won't work as expected, etc.)

Just sending an extra HTTP request and display the new content is not enough, all of these things needs to be handled to improve the experience! If you are not prepared to put down all of this extra work, then AJAX is probably not for you.
:::

## Lecture material
* [ajax.pdf](ajax.pdf)
* [ajax.pptx](ajax.pptx)

## Recommended reading
* [David Walsh's blogpost on `fetch`](https://davidwalsh.name/fetch)
* [`fetch` specification](https://fetch.spec.whatwg.org/)
* [Manipulating the browser history](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
