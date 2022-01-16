---
sidebar: auto
navbarTitle: Android Views and Layouts
---

# Android Views and Layouts
Here's a short tutorial on how to create basic graphical user interfaces in Android Studio.

<iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




## Views
The graphical user interface (GUI) used in Android consists of *views*. The `View` class represents a general view, and sub-classes to `View` represent specific views, for example:

* The sub-class `Button` represents a view displaying a button the user can click on
* The sub-class `TextView` represents a view displaying some text
* The sub-class `ImageView` represents a view displaying an image
* Etc.

The GUI can be specified either:

* Programmatically, in which case you create new instances of the `View` classes you need to use yourself in the programming language you use (Java/Kotlin/whatever)
* Declaratively in XML, in which case you can use functionality from the Android framework to create the `View` instances you need based on the content of an XML file

Most often you specify the GUI in an XML file, since that's usually easier to read and write. This is especially true when the GUI consists of many `View`s. XML files specifying what the GUI should look like are put in the folder `res/layout/`, and named `in_this_convention.xml`.

::: warning About the context
Most of the constructors in classes from the Android framework has a parameter called `context`. Here you should pass an instance of the `Context` class. The `Context` class keeps track of information the classes needs to function properly, such as which preferred language the user has selected on the device. Whenever you write your own code making use of these classes, the framework will provide you with a reference to a `Context` you can use. For example, the `Activity` class inherits from `Context`, so you can use an `Activity` as the context.
:::

::: tip Example
Example of how to create a new `TextView` programmatically in Kotlin.

```kotlin
// Import the classes we need from the framework.
import android.widget.TextView

// Find a context, e.g. the Activity this code runs in.
val aContext = theActivity // (does not work as it is, but imagine)

// Create and configure the TextView.
val myTextView = TextView(aContext)
myTextView.text = "This is the text the TextView should show!"
```
:::


::::: tip Example
Example of how to create a new `TextView` declaratively in XML and Kotlin.

:::: code-group
::: code-group-item res/layout/my_view.xml
```xml
<!-- The URL-thing looks strange, but it simply defines the
     the "android" namespace, which most attributes comes from -->
<TextView
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:text="This is the text the TextView should show!"
/>
```
:::

::: code-group-item Kotlin code
```kotlin
// Import the classes we need from the framework.
import android.widget.TextView
import android.view.LayoutInflater

// Find a context, e.g. the Activity this code runs in.
val aContext = theActivity // (does not work as it is, but imagine)

// Obtain a layoutInflater.
val layoutInflater = LayoutInflater.from(aContext)

// Use the layoutInflater to convert the XML structure to View objects.
val myTextView = layoutInflater.inflate(
	R.layout.my_view, // This is an identifier to the XML file to use.
	null // This should be a reference to View the inflated View will be added to, but in this case we don't have that.
) as TextView // The inflate method always returns a general View, but we know that we will always get back a TextView when we use R.layout.my_view, so can safely downcast here.
```
:::
::::
:::::



## Layouts
The mentioned views (`Button`, `TextView`, `ImageView`) display something on the screen the user can see. Another category of views that exists is called *layouts*. Layouts don't display anything on the screen, but they are instead designed to contain other views (called *children*), and a layout is used to position its children. Example of layouts are:

* The class `LinearLayout`, which positions it's children next to each other, either horizontally or vertically
* The class `FrameLayout`, which positions it's children independent of each other (the children can overlap)
* The class `RelativeLayout`, which positions it's children relative to each other or relative to the layout (above, or below, or to the right of, or to the left of, etc.)
* Etc.




## LayoutParams
When a view is used inside a layout, you need to add information to the view telling the layout how the view should be positioned. This information is represented through a class called `LayoutParams`. In this class, a view can indicate how tall and wide it wants to be. If a layout needs more information than that (which usually is the case), the layout can define a sub-class to `LayoutParams` the child should use. For example:

* Views in a `LinearLayout` should use the class `LinearLayout.LayoutParams`
* Views in a `FrameLayout` should use the class `FrameLayout.LayoutParams`
* Views in a `RelativeLayout` should use the class `RelativeLayout.LayoutParams`
* Etc.

So, when using a `View`, you do not only specify the properties of the `View` itself, but also the properties of the `LayoutParams` corresponding to the layout the `View` will be used in, and these properties will differ depending on which layout you use.

The width and height of a view can be defined in `LayoutParams` through the two constants `wrap_content` and `match_parent`:

* If the width in `LayoutParams` is set to `wrap_content`, the width of the `View` will just be big enough to surround its content
* If the width in `LayoutParams` is set to `match_parent`, the width of the `View` will be as wide as the layout
* If the height in `LayoutParams` is set to `wrap_content`, the height of the `View` will just be big enough to surround its content
* If the height in `LayoutParams` is set to `match_parent`, the height of the `View` will be as tall as the layout

::: tip Example
Example of how to create a new `FrameLayout` containing two `TextView`s programmatically in Kotlin.

```kotlin
// Import the classes we need from the framework.
import android.widget.TextView
import android.widget.FrameLayout
import android.view.Gravity
import android.view.ViewGroup

// Find a context, e.g. the Activity this code runs in.
val aContext = theActivity

// Create the GUI!.
val theLayout = FrameLayout(aContext)

val theFirstTextView = TextView(aContext)
theFirstTextView.text = "I'm the first text view!"
theFirstTextView.layoutParams = FrameLayout.LayoutParams(
	ViewGroup.LayoutParams.MATCH_PARENT, // The width the view should have.
	ViewGroup.LayoutParams.WRAP_CONTENT, // The height the view should have.
	Gravity.CENTER // The "gravity" the view should have (where it should be positioned in the FrameLayout).
)
theLayout.addView(theFirstTextView)

val theSecondTextView = TextView(aContext)
theSecondTextView.text = "I'm the second text view!"
theSecondTextView.layoutParams = FrameLayout.LayoutParams(
	ViewGroup.LayoutParams.WRAP_CONTENT,
	ViewGroup.LayoutParams.WRAP_CONTENT,
	Gravity.BOTTOM
)
theLayout.addView(theSecondTextView)
```

The GUI would look something like this:

<Smartphone>
	<div style="position: relative; height: 100%">
		<div style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%);">I'm the first text view!</div>
		<div style="position: absolute; bottom: 0;">I'm the second text view!</div>
	</div>
</Smartphone>
:::


::::: tip Example
Example of how to create a new `TextView` declaratively in XML and Kotlin.

:::: code-group
::: code-group-item res/layout/my_view.xml
```xml
<FrameLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
>
	
	<!-- All attributes starting with "layout_" are used in the
	     LayoutParams, so which "layout_*" attributes you can use
	     depends on which Layout you are using. -->
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:layout_gravity="center"
		android:text="I'm the first text view!"
	/>
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_gravity="bottom"
		android:text="I'm the second text view!"
	/>
	
</FrameLayout>
```
:::

::: code-group-item Kotlin code
```kotlin
import android.widget.FrameLayout
import android.view.LayoutInflater

val aContext = theActivity

val layoutInflater = LayoutInflater.from(aContext)

val myFrameLayout = layoutInflater.inflate(
	R.layout.my_view,
	null
) as FrameLayout // This time we know we will get back a FrameLayout, since that's the root element in the XML file.
```
:::
::::

The GUI would look something like this:

<Smartphone>
	<div style="position: relative; height: 100%">
		<div style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%);">I'm the first text view!</div>
		<div style="position: absolute; bottom: 0;">I'm the second text view!</div>
	</div>
</Smartphone>
:::::




## Showing the GUI in an Activity
So far we have just looked at how to create the GUI, we haven't actually written any code for displaying it on the screen!

In an `Activity`, call the method `setContentView()` to tell it which GUI it should show. You can either pass it the identifier for an XML file with the GUI specified, or the root `View` of the GUI. The root view of your GUI will be added to another layout, so one typically gives the root view (which typically is a layout) the width and height `MATCH_PARENT`.

::: tip Example
Example of how to show a `FrameLayout` containing two `TextView`s programmatically in an `Activity`. Background colors are added to the `View`s so you can see the space they occupy.

```kotlin{14-44}
import android.app.Activity
import android.widget.TextView
import android.widget.FrameLayout
import android.view.Gravity
import android.view.ViewGroup
import android.os.Bundle
import android.graphics.Color

class MyActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?){
		super.onCreate(savedInstanceState)
		
		/* The root element of our GUI will be added to a ViewGroup
		   (base class for all layouts) in the Activity, so the root
		   element can use the default LayoutParams. */
		val theLayout = FrameLayout(this)
		theLayout.layoutParams = ViewGroup.LayoutParams(
			ViewGroup.LayoutParams.MATCH_PARENT,
			ViewGroup.LayoutParams.MATCH_PARENT
		)
		theLayout.setBackgroundColor(Color.RED)
		
		val theFirstTextView = TextView(this)
		theFirstTextView.text = "I'm the first text view!"
		theFirstTextView.layoutParams = FrameLayout.LayoutParams(
			ViewGroup.LayoutParams.MATCH_PARENT,
			ViewGroup.LayoutParams.WRAP_CONTENT,
			Gravity.CENTER
		)
		theFirstTextView.setBackgroundColor(Color.GREEN)
		theLayout.addView(theFirstTextView)
		
		val theSecondTextView = TextView(this)
		theSecondTextView.text = "I'm the second text view!"
		theSecondTextView.layoutParams = FrameLayout.LayoutParams(
			ViewGroup.LayoutParams.WRAP_CONTENT,
			ViewGroup.LayoutParams.WRAP_CONTENT,
			Gravity.BOTTOM
		)
		theSecondTextView.setBackgroundColor(Color.BLUE)
		theLayout.addView(theSecondTextView)
		
		setContentView(theLayout)
		
	}
	
}
```

The GUI would look something like this:

<Smartphone>
	<div style="position: relative; height: 100%; background-color: red;">
		<div style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); background-color: green;">
			I'm the first text view!
		</div>
		<div style="position: absolute; bottom: 0; background-color: blue;">I'm the second text view!</div>
	</div>
</Smartphone>
:::


::: warning Convention for naming layouts!
XML files containing GUI code that will be used by an `Activity` should be named per the convention `activity_*.xml`. This is not a requirement, but good programmers sticks to using conventions to facilitate for other programmers working on the same project.
:::


::::: tip Example
Example of how to show a `FrameLayout` containing two `TextView`s declaratively in an `Activity`. Background colors are added to the `View`s so you can see the space they occupy.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{1-3,6-8,16,24}
<!-- The root element of our GUI will be added to a ViewGroup
     (base class for all layouts) in the Activity, so the root
     element can use the default LayoutParams. -->
<FrameLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
>
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:layout_gravity="center"
		android:text="I'm the first text view!"
		android:background="#00ff00"
	/>
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_gravity="bottom"
		android:text="I'm the second text view!"
		android:background="#0000ff"
	/>
	
</FrameLayout>
```
:::

::: code-group-item MyActivity.kt
```kotlin{9}
import android.app.Activity
import android.os.Bundle

class MyActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?){
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_my)
		
	}
	
}
```
:::
::::


The GUI would look something like this:

<Smartphone>
	<div style="position: relative; height: 100%; background-color: red;">
		<div style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); background-color: green;">
			I'm the first text view!
		</div>
		<div style="position: absolute; bottom: 0; background-color: blue;">I'm the second text view!</div>
	</div>
</Smartphone>
:::::




## Obtaining references to the `View`s
To work with the `View`s (listen for clicks on them, changing their background, etc.) you must have a reference to them in your code. This is of course no problem when you specify the GUI programmatically and create the instances of all `View`s yourself, but when you specify the GUI in an XML file, it's the Android framework that instantiates the `View`s for you, and you have no reference to them.

To get references to the `View`s the Android framework instantiates for you, you can add unique identifiers to them in the XML code using the `id` attribute, and then call the method `findViewById(theIdentifier)` on the `Activity`, which will send back the `View` with that identifier.

::::: tip Example
Example showing how to obtain references to `View`s instantiated through the Android framework.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{8-11,13,22}
<FrameLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
>
	
	<!--
		@id/SOME_NAME is a reference to the identifier SOME_NAME.
		@+id/SOME_NAME means we create a new identifier with SOME_NAME.
	-->
	<TextView
		android:id="@+id/first_text_view"
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:layout_gravity="center"
		android:text="I'm the first text view!"
		android:background="#00ff00"
	/>
	
	<TextView
		android:id="@+id/second_text_view"
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_gravity="bottom"
		android:text="I'm the second text view!"
		android:background="#0000ff"
	/>
	
</FrameLayout>
```
:::

::: code-group-item MyActivity.kt
```kotlin{12-14}
import android.app.Activity
import android.widget.TextView
import android.os.Bundle

class MyActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?){
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_my)
		
		// Obtain references to our TextViews!
		val firstTextView = findViewById<TextView>(R.id.first_text_view)
		val secondTextView = findViewById<TextView>(R.id.second_text_view)
		
	}
	
}
```
:::
::::
:::::

Very often you store the references to your `View`s in instance variables in your `Activity`, so you can access them in other methods in your `Activity`. Then it's very common to use instance variables of type `lateinit var`.

::::: tip Example
Example showing how to obtain and store references to `View`s in instance variables.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{1}
<!-- Same as in previous example. -->
<FrameLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
>
	
	<TextView
		android:id="@+id/first_text_view"
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:layout_gravity="center"
		android:text="I'm the first text view!"
		android:background="#00ff00"
	/>
	
	<TextView
		android:id="@+id/second_text_view"
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_gravity="bottom"
		android:text="I'm the second text view!"
		android:background="#0000ff"
	/>
	
</FrameLayout>
```
:::

::: code-group-item MyActivity.kt
```kotlin{7-8,15-17}
import android.app.Activity
import android.widget.TextView
import android.os.Bundle

class MyActivity : Activity(){
	
	lateinit var firstTextView: TextView
	lateinit var secondTextView: TextView
	
	override fun onCreate(savedInstanceState: Bundle?){
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_my)
		
		// Don't need to use findViewById<TextView>() since Kotlin can figure out the type from the variable.
		firstTextView = findViewById(R.id.first_text_view)
		secondTextView = findViewById(R.id.second_text_view)
		
	}
	
}
```
:::
::::
:::::



### Using View Binding
When you have many `View`s in your GUI, there are many calls to `findViewById(theIdentifier)` you need to make to get references to them. Writing all this commonly seen code is boring, and there's always the risk you use the wrong identifier, or cast the `View`s to wrong type, etc. 

There exists a feature in Google's Android Jetpack libraries called *View Binding*. By adding this feature to your project, you'll get an auto-compiled class that contains all references to the `View`s, and if you instantiate the `View`s in the XML file through this feature, you get back an instance of the auto-compiled class, and can access your `View`s through that instance, so much less code to write for you 😁

The name of the auto-compiled class will be derived from the name of the XML file. For example, the XML file `res/layout/activity_my.xml` will result in an auto-generated class called `ActivityMyBinding` placed in the package `your.package.databinding`.

::: warning Groove VS Kotlin
Files having the extension `.gradle` contains code written in a language called *Groove*. This has been, and currently is, the default build file language used in Android Studio projects. There exists a newer version of build files for Gradle written in Kotlin instead. Those files have the extension `.gradle.kts`. Build files in Android Studio projects might in the future use that as the default build file language.
:::

::::: tip Example
Example showing how to use Android Jetpack's feature View Binding to obtain references to `View`s. To add View Binding to your Android project, follow the [Setup instructions](https://developer.android.com/topic/libraries/view-binding#setup) on View Binding's documentation page.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{9,18}
<FrameLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
>
	
	<TextView
		android:id="@+id/first_text_view"
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:layout_gravity="center"
		android:text="I'm the first text view!"
		android:background="#00ff00"
	/>
	
	<TextView
		android:id="@+id/second_text_view"
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_gravity="bottom"
		android:text="I'm the second text view!"
		android:background="#0000ff"
	/>
	
</FrameLayout>
```
:::

::: code-group-item MyActivity.kt
```kotlin{3,7,12-18}
import android.app.Activity
import android.os.Bundle
import your.package.databinding.ActivityMyBinding

class MyActivity : Activity(){
	
	lateinit var binding: ActivityMyBinding
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		binding = ActivityMyBinding.inflate(layoutInflater)
		
		setContentView(binding.root) // The root element in the XML file can always be accessed through the "root" property.
		
		// Can use:
		//  - binding.firstTextView to access the first TextView
		//  - binding.secondTextView to access the second TextView
		
	}
	
}
```
:::
::::
:::::


## Buttons
The view `Button` represents a button the user can click on. To listen for when the user clicks on the button, call the method `setOnClickListener()`, and pass it an object implementing the interface `View.OnClickListener`. That object's `onClick()` method will be called when the user clicks on the button.

::: tip Listening for clicks on other views
Do you find it strange that a click listener interface for `Button` is put inside the `View` class? Because that doesn't make any sense!

`View.OnClickListener` is actually not only a click listener interface for `Button`, but for any `View`, so you can call `setOnClickListener()` on any `View`. But often we do that only for buttons.
:::

The `onClick()` method will be passed one argument, which is a reference to the `View` that was clicked. This way, you can use the same click listener for multiple `View`s, and inside the click listener look at the `View`s id to figure out which `View` that was clicked, but most often it's better to create multiple different click listener instead.

Below you have three different examples of how can add a click listener to a button.



:::: code-group
::: code-group-item MyActivity1.kt
```kotlin{17-22}
import android.app.Activity
import android.view.View
import android.widget.Button
import android.os.Bundle

class MyActivity1 : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		// Set a layout with a button that has the id "the_button".
		setContentView(R.layout.activity_my)
		
		// Find a reference to the button.
		val button = findViewById<Button>(R.id.the_button)
		
		// Create a new instance of an anonymous class that implements View.OnClickListener.
		button.setOnClickListener(object: View.OnClickListener {
			override fun onClick(theClickedView: View?) {
				// Code here will run when the button is clicked!
			}
		})
		
	}
	
}
```
:::
::: code-group-item MyActivity2.kt
```kotlin{17-21}
import android.app.Activity
import android.view.View
import android.widget.Button
import android.os.Bundle

class MyActivity2 : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		// Set a layout with a button that has the id "the_button".
		setContentView(R.layout.activity_my)
		
		// Find a reference to the button.
		val button = findViewById<Button>(R.id.the_button)
		
		// Use the anonymous function expression syntax to create a new instance
		// of an anonymous class that implements View.OnClickListener.
		button.setOnClickListener{
			// Code here will run when the button is clicked!
		}
		
	}
	
}
```
:::
::: code-group-item MyActivity3.kt
```kotlin{6,17-18,22-25}
import android.app.Activity
import android.view.View
import android.widget.Button
import android.os.Bundle

class MyActivity3 : Activity(), View.OnClickListener{ // Let the activity implement the interface.
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		// Set a layout with a button that has the id "the_button".
		setContentView(R.layout.activity_my)
		
		// Find a reference to the button.
		val button = findViewById<Button>(R.id.the_button)
		
		// Pass the activity as the click listener.
		button.setOnClickListener(this)
		
	}
	
	// Implement the method from the interface.
	override fun onClick(theClickedView: View?) {
		// Code here will run when the button is clicked!
	}
	
}
```
:::
::::





::::: tip Example
Example showing how clicking a `Button` changes the number in the `Button`.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{8}
<FrameLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
>
	
	<Button
		android:id="@+id/the_button"
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_gravity="center"
		android:text="0"
	/>
	
</FrameLayout>
```
:::

::: code-group-item MyActivity.kt
```kotlin{14-16}
import android.app.Activity
import android.os.Bundle
import your.package.databinding.ActivityMyBinding

class MyActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		val binding = ActivityMyBinding.inflate(layoutInflater)
		
		setContentView(binding.root)
		
		binding.theButton.setOnClickListener{
			binding.theButton.text = "${Math.random()}"
		}
		
	}
	
}
```
:::
::::

<Smartphone>
	<div style="height: 100%; display: grid; grid-template-rows: 1fr auto 1fr; grid-template-columns: 1fr auto 1fr;">
		<button
			onclick="this.innerText = Math.random()"
			style="grid-row: 2; grid-column: 2;"
		>
			0
		</button>
	</div>
</Smartphone>

:::::




## EditTexts
The view `EditText` represents a field into which the user can enter some data. The property `inputType` indicates what type of data the user can enter:

* The value `text` means the user should enter a text
* The value `number` means the user should enter a number
* The value `textEmailAddress` means the user should enter an email address
* The value `date` means the user should enter a date
* Etc.

When the user clicks on the `EditText`, a virtual keyboard will be shown on the screen, with keys the user can click to type characters into the `EditText`. Which keys they virtual keyboard shows depends on which `inputType` the `EditText` has. For example, if `inputType="number"`, mostly numeric keys are shown. Precisely what it will look like depends on which virtual keyboard the user has installed and is using.

When you have a reference to an `EditText`, you can read out what the user has typed in it by using `theEditText.text.toString()`.

To listen for when the text in the `EditText` is changing, call the method `addTextChangedListener()`, and pass it an instance of a class implementing the interface `TextWatcher`. This interface defines three methods:

* The `beforeTextChanged()` method is called before the user's change to the text has been applied, and the arguments indicate which change that will be applied to the text shortly
* The `onTextChanged()` method is called after the user's change to the text has been applied, and the arguments indicates which changes to the text was applied
* The `afterTextChanged()` method is called after the user's change to the text has been applied, and its single argument indicates what the text looks like now

In most cases, you can simply use `afterTextChanged()`.

The `hint` property can be used to display a text in the `EditText` when it's empty.



::::: tip Example
Example showing how to mirror what the user has typed in an `EditText` in a `TextView`.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{7-8,15-16,20-21}
<FrameLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
>
	
	<TextView
		android:id="@+id/the_text_view"
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:layout_gravity="top"
		android:text="Text: "
		/>

	<EditText
		android:id="@+id/the_edit_text"
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:layout_gravity="center"
		android:inputType="number"
		android:hint="Enter your age (in years)"
		/>
	
</FrameLayout>
```
:::

::: code-group-item MyActivity.kt
```kotlin{16-26}
import android.app.Activity
import android.os.Bundle
import android.text.TextWatcher
import android.text.Editable
import your.package.databinding.ActivityMyBinding

class MyActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		val binding = ActivityMyBinding.inflate(layoutInflater)
		
		setContentView(binding.root)
		
		binding.theEditText.addTextChangedListener(object : TextWatcher {
			
			override fun onTextChanged(s: CharSequence, start: Int, before: Int, count: Int){ }
			override fun beforeTextChanged(s: CharSequence, start: Int, count: Int, after: Int){ }
			
			// The s parameter is in this case the same as binding.theEditText.text.
			override fun afterTextChanged(s: Editable) {
					binding.theTextView.text = "Text: ${s.toString()}"
			}
			
		})
		
	}
	
}
```
:::
::::

<Smartphone>
	<div style="height: 100%; display: grid; grid-template-rows: auto 1fr auto 1fr auto; grid-template-columns: 1fr;">
		<div
			style="grid-row: 1; grid-column: 1;"
		>Text: <span id="text-134134234"></span></div>
		<input
			style="grid-row: 3; grid-column: 1;"
			oninput="document.querySelector('#text-134134234').innerText = this.value"
			type="number"
			placeholder="Enter your age (in years)"
		>
		<div style="grid-row: 5; grid-column: 1;">&nbsp;</div>
	</div>
</Smartphone>

(the `EditText` will look and behave a little bit different in a real Android application)

:::::