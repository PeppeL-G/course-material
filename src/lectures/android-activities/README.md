---
sidebar: auto
navbarTitle: Android Activities
---

# Android Activities
Activities are one of the four different fundamental application components all Android applications consists of. We use them to specify what the graphical user interface (GUI) should look like. Let's take a look at how they work!

<iframe width="560" height="314" src="https://www.youtube.com/embed/2clnFgc69nA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [android-activities.pdf](android-activities.pdf)
* [android-activities.pptx](android-activities.pptx)

## Recommended reading
* The following chapters from the course book [Exploring Android](https://commonsware.com/AndExplore/):
	* What We Are Building
	* Installing the Tools
	* Creating a Starter Project
	* Modifying the Manifest
	* Changing Our Icon
	* Adding a Library
	* Constructing a Layout
	* Setting up the App Bar
	* Setting up an Activity

The [Android Developers Guide](https://developer.android.com/guide) is a free alternative.

## Activities
An *activity* is a fundamental application component you can use to show a graphical user interface to the user, and which the user can interact with to give input to your application. Your application usually consist of multiple activities, each with its own purpose, such as:

* One activity to display and handle interaction with a login form
* One activity to display and handle interaction with a registration form
* One activity to display and handle interaction with all accounts in the application
* Etc.

Only one activity at a time is shown on the user's screen.

### Creating a new activity
A general activity is represented by the Android framework class `Activity`. When you want to create your own activity, you should create your own class that inherits from the `Activity` class, and in which you override some methods to give your own activity the specific behavior you want it to have.

::: warning Follow conventions!
In Android projects, there's a convention to let all your own activity classes end with the name `Activity`, such as `LoginActivity`. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.
:::

Just creating a new class that inherits from the `Activity` class is not enough for the Android framework to recognize your class as an activity. You must also register this class as an activity in the `AndroidManifest.xml` file using the `<activity>` element in the `<application>` element (further down is an example of all this). When using the `<activity>` element, you must add the following attributes to it:

* `android:name`, which should be:
	* The full identifier for the class (i.e package name followed by the class name, e.g. `se.ju.larpet.myapp.LoginActivity`), or:
	* An identifier for the class relative the your application's package name (e.g. if you have `<manifest android:package="se.ju.larpet.myapp"`), then you can just write `.LoginActivity`
* `android:exported`, which should be:
	* `true`, if you want the OS/other applications to be able to start the activity (typically used for the activity that should be started when the user starts your application)
	* `false`, if you only want your own code to be able to start the activity (typically the case for most of your activities)

::: tip Creating a new activity in Android Studio
When you ask Android Studio to create a new activity for you, it will create a new Java/Kotlin file containing your own class inheriting from the `Activity` class AND register this class as an activity in `AndroidManifest.xml` for you, so you don't need to remember all this by heart.
:::



::::: tip Example
Example showing a project with a single activity only your own app can start.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{7-9}
<manifest
	xmlns:android="http://schemas.android.com/apk/res/android"
	package="se.ju.larpet.myapp">
	
	<application ...>
		
		<activity
			android:name=".MyActivity"
			android:exported="false" />
		
	</application>
	
</manifest>
```
:::

::: code-group-item MyActivity.kt
```kotlin{3-8}
import android.app.Activity

class MyActivity : Activity(){
	
	// Override methods here to give your own activity
	// the specific behavior you want it to have.
	
}
```
:::
::::
:::::


The `<activity>` element has more attributes you can use to add more information about the activity, such as:

* `android:label`: A string with the name of the activity (used for example when the user is asked to select an activity to complete an action)
* `android:theme`: A theme to use in the activity (when you want another one than the one specified in `<application android:theme="XXX">`)
* Etc.

Most often you don't need to provide these extra attributes, but do be aware of the possibility.




### Adding an activity to the launcher
The launcher app in Android is the "desktop" app that runs directly when the device starts, and that app typically shows all installed apps the user can start by clicking on them. It actually doesn't show apps that can be started, but activities in them that can be started, so one and the same app can actually display multiple activities in the launcher, and not just one, but just one is of course most common.

So, if you want the launcher to show one of your activities here, the activity must have `android:exported="true"` (so the other apps are allowed to start the activity). Then you must also add an `<intent-filter>` to your activity to tell other apps information about the activity, such as:

* The `android:name` attribute in the `<category>` element to indicate which a category the activity belongs to (for launcher activities, use the value `android.intent.category.LAUNCHER`)
* The `android:name` attribute in the `<action>` element to indicate which *actions* the activity can handle (the launcher app will start the activity with the action `android.intent.action.MAIN` (meaning no additional info is passed to the activity), so your activity must explicitly say it can handle that type of action)




::::: tip Example
Example showing a project with one launcher activity.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{11-14}
<manifest
	xmlns:android="http://schemas.android.com/apk/res/android"
	package="se.ju.larpet.myapp">
	
	<application ...>
		
		<activity
			android:name=".MyActivity"
			android:exported="true">
			
			<intent-filter>
				<category name="android.intent.category.LAUNCHER" />
				<action name="android.intent.action.MAIN" />
			</intent-filter>
			
		</activity>
		
	</application>
	
</manifest>
```
:::

::: code-group-item MyActivity.kt
```kotlin{}
import android.app.Activity

class MyActivity : Activity(){
	
	// Override methods here to give your own activity
	// the specific behavior you want it to have.
	
}
```
:::
::::

The `MyActivity` will now be shown in the user's launcher, and when the user clicks on it, the `MyActivity` will be started.

:::::




### Specifying the GUI
By default, the activity has no GUI, and a blank screen is shown when the activity is started. If you want to add a GUI to your activity, override the method `onCreate()`, and specify what the GUI should be by calling the method `setContentView()`. Most often the GUI is specified in XML files you put in the `res/layout/` folder, and to `setContentView()` you pass an identifier to the XML file to use for the GUI.

::: warning Follow conventions!
In Android projects, there's a convention to name layouts that are used by activities as `activity_XXX.xml`, such as `activity_login.xml`. Good programmers follow this convention, so their code is easier to understand for other programmers reading it.
:::

`onCreate()` will be called with a `Bundle` as argument called `savedInstanceState`. That argument is very important to handle *runtime configuration changes* properly, which we will cover in another lecture. For now, it's enough for you to know that you must pass this `Bundle` to the `onCreate()` method you override.



::::: tip Example
Example showing how to create an activity with a GUI.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml
<manifest
	xmlns:android="http://schemas.android.com/apk/res/android"
	package="se.ju.larpet.myapp">
	
	<application ...>
		
		<activity
			android:name=".MyActivity"
			android:exported="true">
			
			<intent-filter>
				<category name="android.intent.category.LAUNCHER" />
				<action name="android.intent.action.MAIN" />
			</intent-filter>
			
		</activity>
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_my.xml
```xml{1-12}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Hello, world!" />
	
</LinearLayout>
```
:::
::: code-group-item MyActivity.kt
```kotlin{6-11}
import android.app.Activity
import android.os.Bundle

class MyActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_main)
		
	}
	
}
```
:::
::::

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto; grid-template-rows: auto;">
		<div style="grid-column: 1; grid-row: 1;">
			Hello, world!
		</div>
	</div>
</Smartphone>

:::::

To learn more about how to create graphical user interfaces in Android, checkout the lecture [Android Views and Layouts](../android-views-and-layouts/).




### Starting another activity
To navigate the user to another activity, call the method `startActivity()` on a `Context`. `Activity` inherits from `Context`, so you can call `startActivity()` on the `Activity` itself. When you call this method, you pass it an `Intent` indicating which other activity in your app to start. To the `Intent` constructor you pass a `Context` (e.g. the `Activity` itself) and the runtime class of the `Activity` that should be started, like `LoginActivity::class.java` to start the `LoginActivity`.


::::: tip Example
Example showing how to create an activity with a GUI.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{8-9,19-20}
<manifest
	xmlns:android="http://schemas.android.com/apk/res/android"
	package="se.ju.larpet.myapp">
	
	<application ...>
		
		<activity
			android:name=".MainActivity"
			android:exported="true">
			
			<intent-filter>
				<category name="android.intent.category.LAUNCHER" />
				<action name="android.intent.action.MAIN" />
			</intent-filter>
			
		</activity>
		
		<activity
			android:name=".SecondActivity"
			android:exported="false" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_main.xml
```xml{7-11}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<Button
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Go to SecondActivity"
		android:id="@+id/button" />
	
</LinearLayout>
```
:::
::: code-group-item MainActivity.kt
```kotlin{11-29}
import android.app.Activity
import android.os.Bundle
import android.widget.Button
import android.content.Intent

class MainActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_main)
		
		// Find the button from the layout file.
		val button = findViewById<Button>(R.id.button)
		
		// Call setOnClickListener on the button and pass it a function
		// that will be called when the user clicks on the button.
		button.setOnClickListener {
			
			// When the user clicks on the button, this function (between
			// { and }) will be called.
			
			// Start and take the user to SecondActivity.
			startActivity(Intent(
				this, // Pass this activity as the Context.
				SecondActivity::class.java
			))
			
		}
		
	}
	
}
```
:::
::: code-group-item res/layout/activity_second.xml
```xml{7-10}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="I'm SecondActivity!" />
	
</LinearLayout>
```
:::

::: code-group-item SecondActivity.kt
```kotlin{9}
import android.app.Activity
import android.os.Bundle

class SecondActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_second)
		
	}
	
}
```
:::
::::

<Smartphone>
	<div id="screen897987" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr;">
		<button style="grid-column: 1; grid-row: 1;" onclick="document.querySelector('#screen897987').style.display = 'none'; document.querySelector('#screen85426').style.display = 'grid';">
			Go to SecondActivity
		</button>
	</div>
	<div id="screen85426" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr; display: none;">
		<div style="grid-column: 1; grid-row: 1;">
			I'm SecondActivity!
		</div>
	</div>
</Smartphone>


If the user would press the back button on the Android device when she has come to the second activity, she would be taken back to the first activity.
:::::





### Passing information to another activity
Often when you start another activity you need to pass additional information to the activity you start. For example, maybe you have:

* `ListNewsArticlesActivity`, which list news articles, and when you click on one of them the user should come to:
* `ViewNewsArticleActivity`, which shows all information about a specific news article

`ViewNewsArticleActivity` needs to know which article to show information about, so when you start this activity, you need to pass along an identifier to the article to show. That type of information can be passed in a `Bundle` in the `Intent` you use to start the activity. `Intent` has a method called `putExtra()`, that you can call to add such information to the `Bundle` in the `Intent`. When you call `putExtra()` you pass it two arguments:

* The first argument is a string used as a key for the value you want to pass along
* The second argument is the actual value you want to pass along

The receiving activity can then through the `Intent` starting it (stored in the class' `intent` property) obtain the value passed along using the same key by calling a `get*Extra()` method (like `getIntExtra()`, or `getStringExtra()`, etc., depending on the datatype of the value). When calling the `get*Extra()` you also need to pass a value that should be returned if the one starting the activity forgot to pass along the extra information.

::: warning Follow conventions!
In Android projects, the convention is to put the keys in constants named `EXTRA_XXX` in the receiving activity file, and always refer to these constants whenever you call `putExtra()` or `get*Extra()`. This way, you don't risking misspelling the name of the key, so you don't risk compiling an app that will crash when it runs. If you now misspell the constant instead, you will get a compiler error you are immediately aware of.

The constants also serve as documentation; by looking at the `EXTRA_XXX` constants you can easily see what extra information you need to pass along to the activity when you start it.
:::




::::: tip Example
Example showing how to create an activity with a GUI.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{8,19}
<manifest
	xmlns:android="http://schemas.android.com/apk/res/android"
	package="se.ju.larpet.myapp">
	
	<application ...>
		
		<activity
			android:name=".MainActivity"
			android:exported="true">
			
			<intent-filter>
				<category name="android.intent.category.LAUNCHER" />
				<action name="android.intent.action.MAIN" />
			</intent-filter>
			
		</activity>
		
		<activity
			android:name=".ShowSumActivity"
			android:exported="false" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_main.xml
```xml{10-11,16-17}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<Button
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Show 4 + 8"
		android:id="@+id/first_button" />
	
	<Button
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Show 7 + 2"
		android:id="@+id/second_button" />
	
</LinearLayout>
```
:::
::: code-group-item MainActivity.kt
```kotlin{11-35}
import android.app.Activity
import android.os.Bundle
import android.widget.Button
import android.content.Intent

class MainActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_main)
		
		// Find the buttons from the layout file.
		val firstButton = findViewById<Button>(R.id.first_button)
		val secondButton = findViewById<Button>(R.id.second_button)
		
		// Add click listeners to the buttons starting ShowSumActivity.
		firstButton.setOnClickListener {
			
			val intent = Intent(this, ShowSumActivity::class.java)
			intent.putExtra(EXTRA_FIRST_TERM, 4)
			intent.putExtra(EXTRA_SECOND_TERM, 8)
			
			startActivity(intent)
			
		}
		
		secondButton.setOnClickListener {
			
			startActivity(Intent(this, ShowSumActivity::class.java).apply{
				putExtra(EXTRA_FIRST_TERM, 7)
				putExtra(EXTRA_SECOND_TERM, 2)
			})
			
		}
		
	}
	
}
```
:::
::: code-group-item res/layout/activity_show_sum.xml
```xml{10}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:id="@+id/sum_text_view" />
	
</LinearLayout>
```
:::

::: code-group-item ShowSumActivity.kt
```kotlin{5-6,13-20}
import android.app.Activity
import android.os.Bundle
import android.widget.TextView

const val EXTRA_FIRST_TERM = "EXTRA_FIRST_TERM"
const val EXTRA_SECOND_TERM = "EXTRA_SECOND_TERM"

class ShowSumActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		val firstTerm = intent.getIntExtra(EXTRA_FIRST_TERM)
		val secondTerm = intent.getIntExtra(EXTRA_SECOND_TERM)
		val sum = firstTerm + secondTerm
		
		setContentView(R.layout.activity_show_sum)
		
		val sumTextView = findViewById<TextView>(R.id.sum_text_view)
		sumTextView.text = "$firstTerm + $secondTerm = $sum"
		
	}
	
}
```
:::
::::

<Smartphone>
	<div id="screen7294037" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto auto 1fr;">
		<button style="grid-column: 1; grid-row: 1;" onclick="document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen1038362').style.display = 'grid';">
			Show 4 + 8
		</button>
		<button style="grid-column: 1; grid-row: 2;" onclick="document.querySelector('#screen7294037').style.display = 'none'; document.querySelector('#screen7749372').style.display = 'grid';">
			Show 7 + 2
		</button>
	</div>
	<div id="screen1038362" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr; display: none;">
		<div style="grid-column: 1; grid-row: 1;">
			4 + 8 = 12
		</div>
	</div>
	<div id="screen7749372" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr; display: none;">
		<div style="grid-column: 1; grid-row: 1;">
			7 + 2 = 9
		</div>
	</div>
</Smartphone>

:::::




### Passing information back
When an activity starts another activity, that other activity can pass information back to the first activity. This is useful when you need to re-use the same functionality at multiple places. For example, maybe the user should be able to select a color for multiple different parts of your application (one background color, one text color, one favorite color, etc.). Then you can put the "Select color" functionality in its own activity, and then other activities can start this activity whenever they need the user to select a color. When the user has selected her color, the activity sends back that color to the first activity.

To start an activity that should send back a value, call `startActivityForResult()` instead of `startActivity()`. In addition to the `Intent` identifying the activity to start, you should also pass along a *request code* (an integer) that you later will get back when the user has made her choice in the other activity. This is useful if the first activity makes multiple different calls to `startActivityForResult()` (the request code can be used to distinguish the calls).

::: warning Follow conventions!
In Android projects, the convention is to put request codes in constants named `REQUEST_CODE_XXX` in the activity file calling `startActivityForResult()`. By using constants, you'll get a compiler error if you make a typing mistake, and it's easy to see which request code numbers the activity is using, so you don't risk re-using one and the same by mistake.
:::

In the activity where the user should make her decision, call the method `setResult()` to indicate that the user has made her decision. Here you need to pass two values:

* A *result code* (integer) indicating if the selection succeeded or not (one typically use the constants `Activity.RESULT_OK` if the user made the choice, and `Activity.RESULT_CANCELED` if the user didn't/couldn't make a choice)
* An `Intent` with more information about the choice the user made

After the user has made her choice, you typically call `finish()` on the activity to close it, at which point the user will get back to the previous activity.

In the activity that called `startActivityForResult()`, override the method `onActivityResult()`, which will be called when the user gets back to the activity. Here you receive the following as arguments:

* The request code you used to start the activity
* The result code
* The `Intent` with more information about the user's choice


::::: tip Example
Example showing how to create an activity with a GUI.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{8,19}
<manifest
	xmlns:android="http://schemas.android.com/apk/res/android"
	package="se.ju.larpet.myapp">
	
	<application ...>
		
		<activity
			android:name=".MainActivity"
			android:exported="true">
			
			<intent-filter>
				<category name="android.intent.category.LAUNCHER" />
				<action name="android.intent.action.MAIN" />
			</intent-filter>
			
		</activity>
		
		<activity
			android:name=".SelectColorActivity"
			android:exported="false" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_main.xml
```xml{10-11,16-17,22-23}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="This view can be styled!"
		android:id="@+id/text_view" />
	
	<Button
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Select background color"
		android:id="@+id/select_background_color_button" />
	
	<Button
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Select text color"
		android:id="@+id/select_text_color_button" />
	
</LinearLayout>
```
:::
::: code-group-item MainActivity.kt
```kotlin{8-9,13,18-42,46-58}
import android.app.Activity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.content.Intent
import android.graphics.Color

val REQUEST_CODE_SELECT_BACKGROUND_COLOR = 1234 // Actual numbers here doesn't
val REQUEST_CODE_SELECT_TEXT_COLOR = 4321 // matter as long as they are uniq.

class MainActivity : Activity(){
	
	lateinit var textView: TextView
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_main)
		
		// Find the views.
		textView = findViewById<TextView>(r.id.text_view)
		val selectBackgroundColorButton = findViewById<Button>(R.id.select_background_color_button)
		val selectTextColorButton = findViewById<Button>(R.id.select_text_color_button)
		
		// Add click listeners to the buttons starting SelectColorActivity.
		selectBackgroundColorButton.setOnClickListener {
			
			startActivityForResult(
				Intent(this, SelectColorActivity::class.java),
				REQUEST_CODE_SELECT_BACKGROUND_COLOR
			)
			
		}
		
		selectTextColorButton.setOnClickListener {
			
			startActivityForResult(
				Intent(this, SelectColorActivity::class.java),
				REQUEST_CODE_SELECT_TEXT_COLOR
			)
			
		}
		
	}
	
	override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?){
		
		// In this example, resultCode will always be Activity.RESULT_OK, so let's ignore that parameter.
		
		val color = data!!.getStringExtra(RESULT_EXTRA_COLOR)
		
		when(requestCode){
			REQUEST_CODE_SELECT_BACKGROUND_COLOR -> textView.setBackground(color)
			REQUEST_CODE_SELECT_TEXT_COLOR -> textView.setTextColor(color)
			else -> throw IllegalStateException("Unknown request code $requestCode") // Should never happen.
		}
		
	}
	
}
```
:::
::: code-group-item res/layout/activity_select_color.xml
```xml{10-11,16-17}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<Button
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Red"
		android:id="@+id/select_red_button" />
	
	<Button
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Blue"
		android:id="@+id/select_blue_button" />
	
</LinearLayout>
```
:::

::: code-group-item SelectColorActivity.kt
```kotlin{6,13-26,30-42}
import android.app.Activity
import android.os.Bundle
import android.widget.TextView
import android.graphics.Color

const val RESULT_EXTRA_COLOR = "RESULT_EXTRA_COLOR"

class SelectColorActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_select_color)
		
		// Find the buttons from the layout file.
		val selectRedButton = findViewById<Button>(R.id.select_red_button)
		val selectBlueButton = findViewById<Button>(R.id.select_blue_button)
		
		// Add click listeners to the buttons.
		selectBackgroundColorButton.setOnClickListener{
				sendBackColor(Color.RED)
		}
		
		selectTextColorButton.setOnClickListener{
			sendBackColor(Color.BLUE)
		}
		
	}
	
	// Method to send back a color.
	fun sendBackColor(color: Int){
		
		setResult(
			Activity.RESULT_OK,
			Intent().apply{
				putExtra(RESULT_EXTRA_COLOR, color)
			}
		)
		
		finish()
		
	}
	
}
```
:::
::::

<Smartphone>
	<div id="screen573957" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto auto  auto 1fr;">
		<div class="text" style="grid-column: 1; grid-row: 1;">
			This view can be styled!
		</div>
		<button style="grid-column: 1; grid-row: 2;" onclick="document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen74832726').style.display = 'grid';">
			Select background color
		</button>
		<button style="grid-column: 1; grid-row: 3;" onclick="document.querySelector('#screen573957').style.display = 'none'; document.querySelector('#screen7887865').style.display = 'grid';">
			Select text color
		</button>
	</div>
	<div id="screen74832726" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto auto 1fr; display: none;">
		<button style="grid-column: 1; grid-row: 1;" onclick="document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'red';">
			Red
		</button>
		<button style="grid-column: 1; grid-row: 2;" onclick="document.querySelector('#screen74832726').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.backgroundColor = 'blue';">
			Blue
		</button>
	</div>
	<div id="screen7887865" style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto auto 1fr; display: none;">
		<button style="grid-column: 1; grid-row: 1;" onclick="document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'red';">
			Red
		</button>
		<button style="grid-column: 1; grid-row: 2;" onclick="document.querySelector('#screen7887865').style.display = 'none'; document.querySelector('#screen573957').style.display = 'grid'; document.querySelector('#screen573957 .text').style.color = 'blue';">
			Blue
		</button>
	</div>
</Smartphone>