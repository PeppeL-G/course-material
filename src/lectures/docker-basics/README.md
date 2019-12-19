---
sidebar: auto
navbarTitle: Docker Basics
---

# Docker Basics
Dockerization is a development method that's getting more and more popular, especially for solutions consisting of multiple applications, such as a website consisting of a web application and a database (and possibly a storage service, a frontend application of some kind, an email service, etc.). To run such a solution on your own computer (e.g. for development), you need to have all applications up and running and all of their dependencies installed, which is not easy nor convenient to setup. But with Docker each application the solution consists of will run in it's own container together will all dependencies required to run it, and Docker also provides convenient methods for these applications to communicate with each other, so getting a Dockerized solution up and running on your own computer is a piece of cake once you have downloaded and installed Docker.

<iframe width="560" height="314" src="https://www.youtube.com/embed/1JwJnqUf-kU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [docker-basics.pdf](docker-basics.pdf)
* [docker-basics.pptx](docker-basics.pptx)

## Recommended reading
* [Docker --> Get Started --> Quickstart](https://docs.docker.com/get-started/)
    * Part 1: Orientation and setup
    * Part 2: Containerizing an application
* [Docker Compose --> Getting Started](https://docs.docker.com/compose/gettingstarted/)
* [Open Container Initiative](https://www.opencontainers.org/)
    * Not that interesting for you to read, but do be aware of its existence
