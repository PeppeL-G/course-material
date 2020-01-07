# Laboratory Work
On this page you find information about the examination test `Laboratory Work`.

<CompactInfo :infoPieces='{
    "Number of credits": "1.5",
    "Grades": ["Fail", "Pass"],
    "How to work": "Individually",
    "Goal": "To learn the basics in Android Development.",
    "Instructions": "Complete and present your solutions to the labs on this page to a teacher at a lab session.",
    "Help": "Ask the teacher for help at the lab sessions."
}'>
</CompactInfo>

## Installing Required Software
In this course, we will only use Android Studio and the tools that come with it to create Android applications. 

### On the school's computers
If you work on the computers in E2404, E2432 or E2433, all required software should already be installed for you, so no need to install anything yourself.

If you work on a school computer in any other room, you need to manually install the required software through the *Software Center* application (unless someone already has done that on the specific computer you are using).

### On your own computer
If you work on your own private computer, you need to download and install all required software yourself. In this course all required software is available for free for both Windows, Mac and Linux.

Just follow the instructions at [https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html) to download and install Android Studio.

To test the android applications you create, you need to run them on an Android device. If you have your own smartphone or tablet running Android, you can use that one, just connect it to your computer using a USB cable.

::: tip For Windows users
On Windows you need to [Install OEM USB drivers](https://developer.android.com/studio/run/oem-usb.html) to be able to install Android applications on your connected Android device.
:::

To more easily debug applications when they run on your own Android device, you need to [Configure on-device developer options](https://developer.android.com/studio/debug/dev-options.html).

If you don't have your own Android device to run your Android applications on, you can use an Android emulator that comes with Android Studio. If the emulator has not automatically been configured to take advantage of VM acceleration when Android Studio was installed, we highly recommend you to configure it to take advantage of the speed improvements (so the emulator lag less) by [Configuring VM acceleration](https://developer.android.com/studio/run/emulator-acceleration#accel-vm). This is a good idea even if you have a physical Android device to test on, because you probably want to test run your Android applications on different versions of Android, different screen sizes, etc., which is easy to do on an emulator, but impossible to do on a physical device.

::: tip For Windows users
Those of you taking the course [Web Development - Advanced Concepts](../web-development-advanced-concepts/) will be using VM acceleration to run your docker containers. If you in that course use *Windows Hypervisor Platform* as your hypervisor, then stick with that one for this course too.
:::

::: warning Note!
Getting VM acceleration to work is sometimes hard. If the emulator for some reason can't use it, it's hard to debug the reason. For example, you might get the error message `This computer meets requirements for HAXM, but VT-x is not turned on`, and the problem could be that [an antivirus program doesn't allow it to be used](https://stackoverflow.com/questions/21635504/error-during-installing-haxm-vt-x-not-working). Your development experience will be much better if you manage to enable VM acceleration, but don't spend 10 hours on trying to get it to work, then it's better to use the school's computers instead.
:::

Android Studio often reads from and writes to many files, for example when you create a new Android Studio project or when you build your application. To be efficient, it's important that reading from and writing to files is fast. There are some known cases slowing down this process, such as:

* Antivirus programs you have installed
* Windows Defender
* Windows File Indexing

::: tip For Windows users
You can often find out what's slowing down Android Studio by using the [Task Manager](https://www.howtogeek.com/108742/how-to-use-the-new-task-manager-in-windows-8/) to find the process that allocates much of your computer resources when Android Studio is slow, and then try to configure it to ignore Android Studio's folders. For example, see [configure Windows Defender and Windows File Indexing to ignore Android Studio folders](https://stackoverflow.com/a/49336163/2104665).
:::

A fast CPU and an SDD instead of an HDD will of course also make Android Studio run faster as well; running Android Studio on a weak laptop usually gives you a very bad development experience. 

## Assignment
The Graphical User Interface (GUI) for an Android application is to a large extent structured the same way as for a website (which you probably are acquaintance with).

|Website|Android application|
|---|---|
| Consists of multiple webpages. | Consists of multiple Activities. |
| One webpage is shown at a time. | One activity is shown at a time. |
| URIs are used to identify webpages. | Intents are used to identify activities. |

When designing the GUI for an Android application it is hence important to think of which activities it should consist of. Traditionally, websites have been designed to be used by desktop computers with a large screen, and it's not uncommon to see a webpage you can do multiple things on, such as a webpage with both a "sign in" form, a "sign up" form and a "I forgot my password" form.

Android applications on the other hand often run on devices with a small screen, and there's not enough room to display more than one functionality at a time. Hence one functionality per activity is a good guideline, which you should follow in this lab. 

::: warning Note
With the introduction of fragments in Android API level 11 (Android 3), the guideline *One functionality per activity* is not that accurate since an entire application can consist of a single activity that changes which fragments it's displaying, and each fragment provides a functionality of some kind. Hence, *One feature per screen* might be a more accurate guideline.
:::

In this lab you should implement a simple ToDo app. Start by creating a new project in Android Studio.

...

build and run in emulator or device...

A ToDo item will be represented like this:

```kotlin
package XXX

data class ToDo(
    val id: Int,
    val title: String,
    val content: String
)
```

The data in your application is optimally stored in the built in supported SQLite database, but to simplify we will in this lab (which primarily is about using activities) store the ToDo items in a global variable. 

```kotlin
package XXX

// Global variable used to store all ToDos.
val toDoRepository = ToDoRepository().apply {
    // Let's add two initial ToDos.
    addToDo(
        "Feed the pets",
        "Give the cat a fish and the dog a cat."
    )
    addToDo(
        "Exercise",
        "Take a walk and listen to music."
    )
}

class ToDoRepository{

    private val toDos = mutableListOf<ToDo>()

    fun addToDo(title: String, content: String): Int{
        val id = toDos.last().id + 1
        toDos.add(ToDo(
            id,
            title,
            content
        ))
        return id
    }

    fun getAllToDos() = toDos

    fun getToDoById(id: Int) =
        toDos.find {
            it.id == id
        }

    fun deleteToDoById(id: Int) =
        toDos.remove(
            toDos.find {
                it.id == id
            }
        )

}
```

Now we have the handling of the data in the application done, now we just need to build the graphical user interface on top of this to allow the user to see and modify the data.

The final application should look like this:

XXX

You should support at least 2 languages (English + another one), but the data (title and content of the ToDo items) will of course only be available in one language.

### MainActivity
The `MainActivity` should list the titles of all ToDo items and a Create button. Clicking on one of the titles should start the activity `ViewToDoActivity` that displays more information about that ToDo item (pass the id of the clicked ToDo item in the intent), and clicking on the Create button should start the `CreateToDoActivity`.

The layout for the `MainActivity` can be a [ConstraintLayout](https://developer.android.com/reference/android/support/constraint/ConstraintLayout) that displays a [Button](https://developer.android.com/guide/topics/ui/controls/button) at the bottom of the layout and a [ListView](https://developer.android.com/reference/android/widget/ListView) above it. The `ListView` will in turn display the title of each ToDo item. To do that, you can use code like this in the Activity's `onCreate()`:

```kotlin
val listView = findViewById<ListView>(R.id.list_view)
listView.adapter = ArrayAdapter<ToDo>(
    aContext,
    android.R.layout.simple_list_item_1,
    android.R.id.text1,
    toDoRepository.getAllToDos()
)
```

Then you also need to register a click listener on the `listView` for listening for clicks on the ToDo items in it.

### CreateToDoActivity
The `CreateToDoActivity` should display a form through which the user can enter the title and content of a new ToDo item. When a new ToDo item has successfully been created the user should be taken to the `ViewToDoActivity` displaying the ToDo item the user just created (pass the id of the newly created ToDo item in the intent).

You can use an [EditText](https://developer.android.com/reference/android/widget/EditText) to let the user enter som text. You can then use the code below to read out what text the user has entered in the `EditText`.

```kotlin
val title = findViewById<EditText>(
    R.id.title_edit_text
).editableText.toString()
```

Add some kind of validation so the user can't add bad ToDo items, such as a ToDo item with a too short/long title/content. Display descriptive error messages if something is invalid.

::: tip Listen for user typing
If you want to listen for when the user types something in an `EditText` you can use a [TextWatcher](https://developer.android.com/reference/android/text/TextWatcher). This way you can validate the input as the user types it (i.e. give immediate feedback), and, for example, disable the Create button when the input is invalid, and enable it when the input is valid.
:::

::: tip Make it more beautiful
Instead of using an `EditText` you can use a [TextInputLayout](https://developer.android.com/reference/com/google/android/material/textfield/TextInputLayout.html) together with a `TextInputEditText` to make it look a bit more beautiful.
:::

::: tip Improving back navigation
When the user has created a new ToDo item and ended up at the `ViewToDoActivity` and then clicks on the back button, the user probably wants to end up at the `MainActivity`, and not at the `CreateToDoActivity`. To make that happen, you can in the `CreateToDoActivity` call `finish()` after you have started the `ViewToDoActivity`.
:::

### ViewToDoActivity
The `ViewToDoActivity` should display all information about a ToDo item with a specific id. This activity should define the name of an extra argument that can be put in the Intent starting this activity, specifying the id of the ToDo to display information about. This can be put in the class's companion object, e.g.:

```kotlin
companion object {
    const val EXTRA_TODO_ID = "TODO_ID"
}
```

The `ViewToDoActivity` activity should also display an Update button and a Delete button. Clicking on the Update button should start the `UpdateToDoActivity`, where the user can change the title and content of the current ToDo item. Clicking on the Delete button should display a dialog where the user can confirm the she wants to delete the ToDo item. To display the dialog, you can use the code below.

```kotlin
DialogFragment() {
    
    override fun onCreateDialog(savedInstanceState: Bundle): Dialog {
        
        return AlertDialog.Builder(aContext)
            .setMessage("Really delete?") // TODO: Support multiple languages...
            .setPositiveButton(
                "Yes",
                DialogInterface.OnClickListener { dialog, id ->
                    // User clicked "Yes".
                })
            .setNegativeButton("No",
                DialogInterface.OnClickListener { dialog, id ->
                    // User clicked "No".
                })
            .create()
        
    }
    
}.show(supportFragmentManager, null)
```

If the user deletes the ToDo item, take the user back to the `MainActivity`.

### UpdateToDoActivity
You should be able to figure out how to implement this one on your own.

## Present your work
Present your work to a teacher at one of the lab sessions. Be prepared to explain how the code in your application works. You should be able to explain all code in your application works, and the teacher will ask you some questions about it to verify this. If the teacher is satisfied with your presentation he will approve you on [the Ping Pong assignment Laboratory Work](/TODO).

## Optional exercises
These exercises are not part of the laboratory work. Feel free to complete them to practice on using various techniques/concepts used in Android applications before you use/apply them in your project work. If you get stuck you can always ask the teacher at a lab session for help. When you're done, feel free to discuss your solution with a teacher at a lab session to get some feedback on your work.

### Handling runtime configuration changes
In the `ViewToDoActivity`, when the activity starts, create a new instance of [TextToSpeech](https://developer.android.com/reference/android/speech/tts/TextToSpeech) and use it to speak out loud the title and the content of the ToDo item.

When the user rotates the screen, a runtime configuration change will take place, causing the activity to be destroyed and re-created. This should be transparent to the user, but if you don't write special code dealing with it, you will in the re-created activity create a new instance of `TextToSpeech` again and tell it to speak out loud the title and the content of the ToDo item again. That should not happen.

And if the user chooses to leave the activity before your `TextToSpeech` instance is done saying the entire title and content, you need to tell your `TextToSpeech` instance to stop talking. As a result, your `TextToSpeech` instance needs to survive configuration changes. This can be done using a model fragment (a fragment with no GUI and that has been set to retain it's instance) (old solution) or using a ViewModel (modern solution).

::: danger Think twice about the context
When creating a new instance of the `TextToSpeech` class you need to pass it a context. Using the activity as the context works, but if the activity is destroyed and re-created, the destroyed activity can't be garbage collected since the `TextToSpeech` instance holds a reference to it. Therefor (as in many other cases) it is better to pass it the context `anActivity.applicationContext` instead.
:::

### Storing data in a database
Store data in the built-in supported SQLite database. Either do it the old way using [SQLiteOpenHelper](https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper), or do it the more modern way using the [Room Persistence Library](https://developer.android.com/topic/libraries/architecture/room).

::: danger Think twice about the context
To work with the SQLite database you need to pass it a context. If your database communication object outlives your activity (e.g. if you use the singleton pattern), using the activity as the context is bad, since the activity can't be garbage collected when the user leaves it, so rather (as usual) use `anActivity.applicationContext` as your context instead.
:::

### Storing data in Firestore
Store your data in [Firestore](https://firebase.google.com/docs/firestore/). Let the user create and login to a new account, and then store the ToDo items in Firestore. This way, it doesn't matter which device the user is using, she can access her ToDo items on all of them!

### Using a RecyclerView
In `MainActivity`, instead of using a `ListView` to display the title of all ToDo items, use a [RecyclerView](https://developer.android.com/reference/android/support/v7/widget/RecyclerView) instead. Allow the user to delete a ToDo item simply by swiping the title of the ToDo item to the side.

### Using Notifications
Add a timestamp to each ToDo item representing a deadline for when that ToDo item should be completed. Then use the [AlarmManager](https://developer.android.com/reference/android/app/AlarmManager) to create an Intent that is broadcasted each day (e.g. at 09:00; can potentially be configured by the user through a `SettingsActivity`), and then create a [BroadcastReceiver](https://developer.android.com/reference/android/content/BroadcastReceiver) listening for this Intent, and when your receiver receives the intent, [display a notification](https://developer.android.com/reference/android/content/BroadcastReceiver) to the user with information about which ToDo items that needs to be completed within 24 hours.