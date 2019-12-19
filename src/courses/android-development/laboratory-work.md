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

## Lab 1 - Activities
Lab about implementing graphical user interface using activities.

## Lab 2 - Handling runtime configuration changes
Lab about handling runtime configuration changes properly. Suggestion: use TextToSpeech https://developer.android.com/reference/android/speech/tts/TextToSpeech

## Lab 3 - Storing data in a database
Store data in database.

## Lab X - Services
afsadasd

## Lab Y - Bluetooth
asdsadas

## Lab Z - Firestore
asdasd

## Lab Å - Fragments
sefsdfds

## Lab Ä - RecyclerView
sdfdsf

## Lab Ö - Push notifications
sdfsdf