# Tutorials
Here you will find material from the different tutorials.

## Tutorial 0 (Android Studio)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)

## Tutorial 1 (Activities)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)
* [tutorial-01-app.zip](./static-files/tutorials/tutorial-01-app.zip)

::: warning Note
`aView.postRunnable()` did auto-cancel the runnable when the activity was destroyed, but the code has been updated to use `aHandler.postRunnable()` instead, and that one does not auto-cancel the runnable when the activity is destroyed, so with this version of the app you can see that the countdown continues even after the activity is destroyed unless you cancel the runnable with `aHandler.removeCallbacks()` in `onDestroy()`.

I've hard coded strings at some places, but should of course have used string resources instead. Don't do the same mistake as me!

`activity_login.xml` has been updated to more nicely position the views in the ConstraintLayout.
:::

## Tutorial 2 (Fragments and Runtime Configuration Changes)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)
* [tutorial-02-app.zip](./static-files/tutorials/tutorial-02-app.zip)

::: warning Note
Do not hardcode text shown to the user as I have done in the app, use string resources!
:::
