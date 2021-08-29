<SetTitle title="Android Development" />

# Tutorials
Here you will find material from the different tutorials.

## Tutorial 0 (Android Studio)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)

## Tutorial 1 (Activities)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)
* [tutorial-01-app.zip](./files/tutorials/tutorial-01-app.zip)

::: warning Note
`aView.postRunnable()` did auto-cancel the runnable when the activity was destroyed, but the code has been updated to use `aHandler.postRunnable()` instead, and that one does not auto-cancel the runnable when the activity is destroyed, so with this version of the app you can see that the countdown continues even after the activity is destroyed unless you cancel the runnable with `aHandler.removeCallbacks()` in `onDestroy()`.

I've hard coded strings at some places, but should of course have used string resources instead. Don't do the same mistake as me!

`activity_login.xml` has been updated to more nicely position the views in the ConstraintLayout.
:::

## Tutorial 2 (Fragments and Runtime Configuration Changes)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)
* [tutorial-02-app.zip](./files/tutorials/tutorial-02-app.zip)

::: warning Note
Do not hardcode text shown to the user as I have done in the app, use string resources!
:::

## Tutorial 3 (Runtime Configuration Changes, Long Running Operations and Panes)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)
* [tutorial-03-app.zip](./files/tutorials/tutorial-03-app.zip)

::: tip Extra info
The view binding problem I had with layouts with the same name and different qualifiers was because one and the same id was used on different type of views in the different layouts. View binding works fine as long as views in the different layouts with the same id are of the same type (e.g. both are `Button`).

In the final solution, the `ListToDosFragment` communicates with the `MainActivity` through the `MainActivity`'s ViewModel, which makes the implementation quite straight forward compared to the template one can use in Android Studio. A drawback is that the fragment is dependent on the MainActivity, and can't easily be re-used in other activities.
:::

## Tutorial 4 (Brodcast Receviers, Services and Bluetooth Classic)
* [Recording](https://ju.instructure.com/courses/3421/pages/tutorial-recordings?module_item_id=78645)
* [tutorial-04-app.zip](./files/tutorials/tutorial-04-app.zip)

::: tip Extra info
The problem I had with the devices not receiving messages from the other was because I translated the byte array code in Java to Kotlin wrong. That has been corrected in the source code now, so the app is fully functional.

Note that the app can be extensively improved, especially when it comes to documentation, user experience and error handling. Treat it as a minimal working example rather than a good example.
:::
