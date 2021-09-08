---
sidebar: auto
navbarTitle: Node.js
---

# Node.js
You want to execute your JavaScript code? That you can do in Node.js, a JavaScript runtime environment.

<iframe width="560" height="314" src="https://www.youtube.com/embed/ybIg85flNeA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: warning Node.js support ECMAScript modules
In the lecture slides it says Node.js doesn't support ECMAScript modules. That is no longer the case, see:

[https://nodejs.org/api/esm.html](https://nodejs.org/api/esm.html)

However, Require JS and ECMAScript modules aren't 100% interchangeable, so it's probably best to be consistent and use only one of them, and I suspect many npm packages out there don't support ECMAScript modules to 100%, so the safest is probably to stick to using Require JS for now.
:::

## Lecture material
* [node-js.pdf](node-js.pdf)
* [node-js.pptx](node-js.pptx)

## Recommended reading
* [CommonJS Spec Wiki](http://wiki.commonjs.org/wiki/CommonJS)
    * Introduction
    * FAQ
* [Requiring modules in Node.js: Everything you need to know](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)
    * Read this if you want to learn more about how modules work in Node.js (not required for this course).
