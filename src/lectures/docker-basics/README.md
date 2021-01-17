---
sidebar: auto
navbarTitle: Docker Basics
---

# Docker Basics
Dockerization is a development method that's getting more and more popular, especially for solutions consisting of multiple applications, such as a website consisting of a web application and a database (and possibly a storage service, a frontend application of some kind, an email service, etc.). To run such a solution on your own computer (e.g. for development), you need to have all applications up and running and all of their dependencies installed, which is not easy nor convenient to setup. But with Docker, each application the solution consists of will run in it's own container together will all dependencies required to run it, and Docker also provides convenient methods for these applications to communicate with each other, so getting a Dockerized solution up and running on your own computer is a piece of cake once you have downloaded and installed Docker.

::: warning Docker has been updated
When this lecture was recorded, there was a legacy version of Docker called *Docker Toolbox*, and a newer version of Docker called *Docker Desktop for Windows*. There are some minor differences between, such as commands, bugs, etc. Of course, using the newer version is better, but you could not do that if you had *Windows 10 Home*, but instead needed to have *Windows 10 Pro*. Many users do of course not have Windows 10 Pro, so they had to use the old version of Docker instead.

In March 2020, [Docker released a new version of Docker Desktop for Windows](https://www.docker.com/blog/docker-desktop-for-windows-home-is-here/) that also works on Windows 10 Home using *Windows Subsystem for Linux*. So nowadays all Windows users can use Docker Desktop for Windows, and forget about Docker Toolbox. But keep in mind that there are still a lot resources out there that might have been written for Docker Toolbox instead of Docker Desktop for Windows.
:::

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
