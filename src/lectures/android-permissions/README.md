---
sidebar: auto
navbarTitle: Android Permissions
---

# Android Permissions
Android has many features we can use (camera, file storage, Bluetooth communication, Internet communication, etc.), but these features should not be exploited by app developers. Therefore Android has a permissions system; before an application use a feature that might be harmful to the user the application must first obtain permission from the user to use the feature. Let's take a look at the details!

<iframe width="560" height="314" src="https://www.youtube.com/embed/Kz_1DafK4XE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [android-permissions.pdf](android-permissions.pdf)
* [android-permissions.pptx](android-permissions.pptx)

::: tip Jetpack...
The Android Jetpack libraries have a helper method called in activities and fragments called `registerForActivityResult()`, which is an alternative and easier way to ask for permission.
:::

## Recommended reading
* The following Android Developers Guide pages:
    * [App Permissions](https://developer.android.com/guide/topics/permissions/overview)
* The following Android Developers Training pages:
    * [Request app permissions](https://developer.android.com/training/permissions/requesting)