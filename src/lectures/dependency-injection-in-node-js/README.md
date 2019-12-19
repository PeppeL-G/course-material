---
sidebar: auto
navbarTitle: Dependency Injection in Node.js
---

# Dependency Injection in Node.js
When writing tests, we optimally want to test one function at a time in our application, but often it's more complicated can that, e.g. we have one function calling another function, which then in turn calls another function, and so on. How can we test just the outer most function without worrying about errors in the inner most functions? *Dependency injection* to the rescue, which is not only useful for testing, but also for fast prototyping and simulation. 

<iframe width="560" height="314" src="https://www.youtube.com/embed/AHo1l9128eI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [dependency-injection-in-node-js.pdf](dependency-injection-in-node-js.pdf)
* [dependency-injection-in-node-js.pptx](dependency-injection-in-node-js.pptx)

## Recommended reading
* [Dependency Injection in Node.js - 2016 edition](https://medium.com/@Jeffijoe/dependency-injection-in-node-js-2016-edition-f2a88efdd427) (all three parts)
* [Awilix](https://github.com/jeffijoe/awilix)
