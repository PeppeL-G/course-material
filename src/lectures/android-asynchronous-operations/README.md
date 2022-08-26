---
sidebar: auto
navbarTitle: Android Asynchronous Operations
---

# Android Asynchronous Operations
Handling long running operations is a bit complicated in Android because the Main Application thread (which executes all your code be default) should primarily be used for updating the graphical user interface, and not for executing long running operations. Let's take a look at the workarounds we used in Java.

<iframe width="560" height="314" src="https://www.youtube.com/embed/eSxFw8bsKk8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [android-asynchronous-operations.pdf](android-asynchronous-operations.pdf)
* [android-asynchronous-operations.pptx](android-asynchronous-operations.pptx)

## Recommended reading
* The following Android Developers Guide pages:
	* [Keeping your app responsive](https://developer.android.com/training/articles/perf-anr)
	* [Guide to background work](https://developer.android.com/training/multiple-threads)