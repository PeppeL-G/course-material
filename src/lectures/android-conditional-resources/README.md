---
sidebar: auto
navbarTitle: Android Conditional Resources
---

# Android Conditional Resources
Resources (strings, layouts, etc.) are loaded dynamically in Android, and when you create a new one you can specify during which conditions it should be used. This is what makes adding i18n support so easy; we have a default string resource file, but also more specialized string resource files, e.g. one with string resources in Swedish, another one with string resources in Spanish, etc. You just specify that you want to have a string resource file, and if the user uses Swedish, Android gives you the Swedish string resource file, etc. This make it convenient to handle many different type of configurations (screen sizes, preferred language, font size, etc).

<iframe width="560" height="314" src="https://www.youtube.com/embed/7aI4JlmMyoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [android-conditional-resources.pdf](android-conditional-resources.pdf)
* [android-conditional-resources.pptx](android-conditional-resources.pptx)

## Recommended reading
* The following chapters from the course book [The Busy Coder's Guide to Android Development](https://commonsware.com/Android/):
    * Resource Sets and Configurations
* The following pages from Android Developers Guide:
    * [App resources](https://developer.android.com/guide/topics/resources/providing-resources#AlternativeResources)