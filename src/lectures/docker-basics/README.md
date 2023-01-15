---
sidebar: auto
navbarTitle: Docker Basics
---

# Docker Basics
Dockerization is a development method that's getting more and more popular, especially for solutions consisting of multiple applications, such as a website consisting of a web application and a database (and possibly a storage service, a frontend application of some kind, an email service, etc.). To run such a solution on your own computer (e.g. for development), you need to have all applications up and running and all of their dependencies installed, which is not easy nor convenient to setup. But with Docker, each application the solution consists of will run in it's own container together will all dependencies required to run it, and Docker also provides convenient methods for these applications to communicate with each other, so getting a Dockerized solution up and running on your own computer is a piece of cake once you have downloaded and installed Docker.

::: danger Use Docker Desktop for Windows!
When this lecture was recorded, there was a legacy version of Docker called *Docker Toolbox*, and a newer version of Docker called *Docker Desktop for Windows*. Using the newer version is of course better, but it couldn't be used on computers running Windows 10 Home, which most students had.

In March 2020, [Docker released a new version of Docker Desktop for Windows](https://www.docker.com/blog/docker-desktop-for-windows-home-is-here/) that also works on Windows 10 Home using *Windows Subsystem for Linux*. So nowadays all Windows users can use Docker Desktop for Windows, and forget about Docker Toolbox.

When using Docker through Windows Subsystem for Linux, it's better to place your docker projects on the file system for the Linux distribution you are running (e.g. Ubuntu), and run docker through the Linux distribution, instead of using the PowerShell in Windows (for details, see [Docker Desktop WSL 2 backend Best practices](https://docs.docker.com/desktop/windows/wsl/#best-practices)).
:::

::: danger A bit outdated...
This recorded lecture is a little bit outdated. It can still be used as an introduction to Docker, but you will probably learn more up-to-date about Docker by attending the tutorial covering Docker.
:::

<iframe width="560" height="314" src="https://www.youtube.com/embed/1JwJnqUf-kU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [docker-basics.pdf](docker-basics.pdf)
* [docker-basics.pptx](docker-basics.pptx)

## Recommended reading
* Simplest explanation possible of containers:
    * [My wife explaining containers to my mother in law](https://www.reddit.com/r/docker/comments/qm39p8/my_wife_explaining_containers_to_my_mother_in_law/)
* [Guides --> Get Started](https://docs.docker.com/get-started/)
    * Part 1: Getting started
    * Part 2: Sample application
    * Part 3: Update the application
    * Part 5: Persist the DB
    * Part 6: Use bind mounts
    * Part 7: Multi-container apps
    * Part 8: Use Docker Compose
    * Part 9: Image-building best practices
* [Open Container Initiative](https://www.opencontainers.org/)
    * Not that interesting for you to read, but do be aware of its existence
* If you want to learn the details of how Docker differs from virtual machines (not needed for this course):
    * [How is Docker different from a virtual machine?](https://stackoverflow.com/q/16047306/2104665)
