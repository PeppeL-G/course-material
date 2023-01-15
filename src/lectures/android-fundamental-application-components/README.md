---
sidebar: auto
navbarTitle: Android Fundamental Application Components
---

# Android Fundamental Application Components
So, what does an Android application consists of? Answer: Fundamental application components! Let's take a closer look at how we can use these.

<!-- <iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->


## Recommended reading
The reading below on this page is intended to just be an introduction to the fundamental application components in Android. For additional reading, checkout the webpage [Application Fundamentals](https://developer.android.com/guide/components/fundamentals).



## Fundamental Application Components
When you create your own application from scratch, you have your own main entry point into the program. In many programming languages, the computer will start your program by calling the `main()` function in it, so that function acts as the main entry point.

An application built in a framework works differently. When using a framework, it's rather the framework that contains the main entry point and a skeleton for an entire application, and you just provide the framework with the missing pieces, which will make the application work the way you want it to work. In the Android framework, these missing pieces are called *fundamental application components*. There exists four different type of these:

* *Activities* are used to display a graphical user interface (GUI) to the user and handle user interaction
* *Services* are used to run logic in the background (no GUI)
* *Broadcast Receivers* are used to listen for events from the operating system (e.g. listen for when Wi-Fi is turned off and on) or from other applications on the device (e.g. when Spotify starts playing a new song)
* *Content Providers* are used to let other applications access the data in your application

So, when creating an Android application, you just tell the Android framework which your fundamental applications components are. Then the framework will use them when they are needed.

Sometimes other applications tells the framework to start one of your fundamental application components. This is typically the case when the user starts your application by clicking on your application's icon in the launcher application (the launcher application is the application that displays it's GUI when the device is starting (kind of the "desktop" app)). When that happens, the launcher application will ask Android to start one of the activities in your application, and then your application will start, and the Android framework will show the started activity's GUI on the screen.

Most often, your fundamental application components will be started by the code in your own application. For example, when the user clicks on a button in the GUI used by one of your activities you might want to start another activity in your application, or start a service in your application to run a long operation in the background. Then you tell the Android framework to start that activity/service for you.




### Intents
To identify the fundamental application component that should be started, we use the `Intent` class. In addition to identifying which application to start, an `Intent` can also contain additional information passed to the fundamental application component that should be started. For example, an activity used to display an image on the screen can in the `Intent` receive information about which image to display (e.g. an identifier for the image).

Most often, an `Intent` identifies a fundamental application component in a specific application that should be started. These are called *explicit intents*, and are most often used when you want to identify a fundamental application in your own application.

Sometimes, instead of specifying which specific application component to start, you can specify what you need the fundamental application component to be able to do for you. For example, when the user clicks on a button in your application, you might want to open and display a PDF file to the user. Instead of you implementing that functionality in your own application, you can ask Android to start an activity that is able to display PDF files. If such an activity exists on the user's device (no matter which application), that activity will be started, and in the `Intent` you can pass along with information about which PDF file the activity should display.





### Creating a fundamental application component
Each type of fundamental application component is represented by a class from the Android framework:

* The class `Activity` represents a general activity
* The class `Service` represents a general service
* The class `BroadcastReceiver` represents a general broadcast receiver
* The class `ContentProvider` represents a general content provider

When you want to create your own fundamental application component you should create your own class that inherits from the general fundamental application component class you want to use. For example, if you want to create an activity that displays a login form to the user, you create a class named `LoginActivity` that inherits from the `Activity` class from the Android framework. Then, in your own class, you override some methods to give your own fundamental application component the specific behavior you want it to have.

Just creating your own class like that is not enough. You must also register your fundamental application component in the `AndroidManifest.xml` file using the corresponding XML element to provide additional meta-information about the fundamental application component.

::::: tip Example
Example showing an application with an activity as the only fundamental application component.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{7-11}
<manifest
	xmlns:android="http://schemas.android.com/apk/res/android"
	package="se.ju.larpet.myapp">
	
	<application ...>
		
		<!-- Use the activity element to register a class as an activity component. -->
		<!-- Read more about this in the lecture on activities. -->
		<activity
			android:name=".LoginActivity"
			android:exported="false" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item LoginActivity.kt
```kotlin{3-8}
import android.app.Activity

class LoginActivity : Activity(){
	
	// Override methods here to give your own activity
	// the specific behavior you want it to have.
	
}
```
:::
:::::