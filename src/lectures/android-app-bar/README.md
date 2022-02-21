---
sidebar: auto
navbarTitle: Android App Bar
---

# Android App Bar
In Android 3 the *Title Bar* was changed to the *Action Bar* and got a bit more powerful. Then Material Design started to call it for *App bar*. Let's take a look at some of the things we can use it for.

<!--
## Lecture material
* [android-app-bar.pdf](android-app-bar.pdf)
* [android-app-bar.pptx](android-app-bar.pptx)
-->

## Recommended reading
* Android Developers Guide's page [Add the app bar](https://developer.android.com/training/appbar/).
* In the course book Elements of Android Jetpack:
    * [Configuring the App Bar](https://commonsware.com/Jetpack/pages/chap-appbar-001.html)

## The Title Bar
When we first got Android, activities had a bar at the top called the *Title Bar*. As the name suggests, it was used to display the title of the activity (the value for the `label` attribute the `<activity>` has in the `AndroidManifest.xml` file, or (if that attribute is missing in the `<activity>`) the value for the `label` attribute the `<application>` element has).

::::: tip Example
Example showing what the Title Bar looked like on the first versions of Android.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{7}
<manifest ...>
	
	<application ...>
		
		<activity
			android:name=".TestActivity"
			android:label="This is the Title Bar" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_test.xml
```xml
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:text="Hello!"/> 
	
</LinearLayout>
```
:::
::: code-group-item TestActivity.kt
```kotlin
import android.app.Activity

class TestActivity : Activity(){
	
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_test)
		
	}
	
}
```
:::
::::

<smartphone>
    <div style="background-color: gray; color: white; font-size: 75%; font-weight: bold; padding: 1% 4%;">
        This is the Title Bar
    </div>
    <div>
        Hello
    </div>
</smartphone>
:::::





## The Options Menu
An activity can contain a "main" menu, which is called the *Options Menu*. In the first versions of Android, an Android device was expected to contain a dedicated Menu hardware button (similar to the dedicated Back and Home hardware buttons), and when that button was clicked, the Options Menu is showed in front of the activity.

When the Options Menu should be shown (e.g. when the user clicks on the Menu hardware button), the method `Activity.onCreateOptionsMenu()` is called, and a `Menu` object is passed as an argument to it. That `Menu` object represents the Options Menu, and in this method you should populate the `Menu` object with the `MenuItem`s you want it to show. Then the GUI will visualize those `MenuItem`s on the screen.

::: tip Populating the Menu
To populate a `Menu` with `MenuItems`, you can call various methods on the `Menu` object (e.g. `Menu.add()`), but most often you define the `MenuItem`s in an XML menu resource file in `res/menu/`, and then use a `MenuInflater` to populate the `Menu` based on the content in the menu resource file. See the example below for some of the details.
:::

When the user clicks on one of the `MenuItem`s on the screen, the method `Activity.onOptionsItemSelected()` is called, and you receive the `MenuItem` the user clicked on as an argument, and you can react to the user's choice.

::: tip More configurable!
Menus are more configurable than explained here. For example, each `MenuItem` can also have an icon that is shown instead of or in addition to the title of the `MenuItem`, etc.
:::


::::: tip Example
Example showing how the Options Menu worked on the first versions of Android.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{}
<manifest ...>
	
	<application ...>
		
		<activity
			android:name=".TestActivity"
			android:label="This is the Title Bar" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_test.xml
```xml{10}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:id="@+id/the_text_view"
		android:text="Hello!"/> 
	
</LinearLayout>
```
:::
::: code-group-item res/menu/activity_test.xml
```xml
<menu
    xmlns:android="http://schemas.android.com/apk/res/android">
    
    <!-- Should use string resources for the title attribute! -->
    <item
        android:title="The first choice"
        android:id="@+id/first_menu_item" />
    
    <item
        android:title="The second choice"
        android:id="@+id/second_menu_item" />

</menu>
```
:::
::: code-group-item TestActivity.kt
```kotlin{6,13,17-34,36-52}
import android.app.Activity
import android.widget.TextView

class TestActivity : Activity(){
	
    lateinit var theTextView : TextView
    
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_test)
        
        theTextView = findViewById(R.id.the_text_view)
        
	}
    
    // Called when the menu needs to be created.
    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        
        // Add menu items from the menu XML file.
        menuInflater.inflate(R.menu.activity_test, menu)
        
        // Add a menu item programmatically (should use string resources).
        val menuItem = menu.add("The third choice")
        menuItem.setOnMenuItemClickListener {
            theTextView.text = "The third one"
            true // Return true to indicate we handled the click.
        }
        
        // Let the class we inherit from add menu items if it wants.
        // Returning true means the menu was successfully created.
        return super.onCreateOptionsMenu(menu)
        
    }
    
    // Called when the user has clicked on an Options Menu item.
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        
        // Check the id of the Menu Item to figure out which
        // it was.
        when(item.itemId){
            R.id.first_menu_item -> theTextView.text = "The first one"
            R.id.second_menu_item -> theTextView.text = "The second one"
            // If we can't handle the clicked menu item, let
            // the activity we inherit from try and handle it.
            else -> return super.onOptionsItemSelected(item)
        }
        
        // Return true to indicate that we handled the click.
        return true

    }
    
	
}
```
:::
::::

<smartphone>
    <div style="height: 100%; width: 100%; position: relative;">
        <div
            style="background-color: grey; color: white; font-size: 75%; font-weight: bold; padding: 1% 4%;">
            This is the Title Bar
        </div>
        <div id="text-6646456">
            Hello
        </div>
        <div
            id="menu-45345"
            style="position: absolute; text-align: center; bottom: 0; background-color: black; color: silver; display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr; border: 1px solid white; visibility: hidden; cursor: pointer;"
        >
            <div
                style="border-right: 1px solid white;"
                onclick="(document.getElementById('text-6646456').innerText = 'The first one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
            >
                The first choice
            </div>
            <div
                style="border-right: 1px solid white;"
                onclick="(document.getElementById('text-6646456').innerText = 'The second one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
            >
                The second choice</div>
            <div
                style="border-right: 1px solid white;"
                onclick="(document.getElementById('text-6646456').innerText = 'The third one') && (document.querySelector('#menu-45345').style.visibility = 'hidden')"
            >
                The third choice
            </div>
        </div>
    </div>
</smartphone>

The dedicated Menu hardware button: <button onclick="document.querySelector('#menu-45345').style.visibility = (document.querySelector('#menu-45345').style.visibility == 'visible' ? 'hidden' : 'visible')">Menu</button>

:::::







## The Action Bar
In Android 3.0, when Android officially started to support tablets, the Title Bar was replaced with the [Action Bar](https://developer.android.com/about/versions/android-3.0.html#action-bar). The Action Bar can be seen as a more powerful version of the Title Bar, because it can not only display the title of the activity, but also contains additional features. To get a reference to the Action Bar, use `Activity.getActionBar()`.

To display the logo of the application in the Action Bar, use `theActionBar.setDisplayUseLogoEnabled(true)` (discouraged from Android 5 and on).

By default, the Action Bar contains the Options Menu items as a dropdown list. That menu is now called the *Overflow Menu*, but in the code we still refer to it as the Options Menu  (you don't need to do anything special to get the Overflow M; `Activity.onCreateOptionsMenu()` and `Activity.onOptionsItemSelected()` will be called when needed, just as before).

Each `MenuItem` can contain additional information about how it should be shown in the Action Bar/Overflow Menu. For example, by setting `showAsAction` to `ifRoom` on a `MenuItem`, that `MenuItem` will be shown directly in the Action Bar next to the dropdown list if the user's screen is wide enough.

::::: tip Example
Example showing how the Options Menu is shown on Android devices after Android 3.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{1,8}
<!-- Same as before, but changed label. -->
<manifest ...>
	
	<application ...>
		
		<activity
			android:name=".TestActivity"
			android:label="The Action Bar" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_test.xml
```xml{1}
<!-- Same as before. -->
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:id="@+id/the_text_view"
		android:text="Hello!"/> 
	
</LinearLayout>
```
:::
::: code-group-item res/menu/activity_test.xml
```xml{1,4,11,13}
<!-- Added the app namespace and the showAsAction attribute, and changed the title attribute. -->
<menu
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    
    <item
        android:title="The first choice"
        android:id="@+id/first_menu_item" />
    
    <item
        android:title="Second"
        android:id="@+id/second_menu_item"
        app:showAsAction="ifRoom" />

</menu>
```
:::
::: code-group-item TestActivity.kt
```kotlin{1}
// Same as before.
import android.app.Activity
import android.widget.TextView

class TestActivity : Activity(){
	
    lateinit var theTextView : TextView
    
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_test)
        
        theTextView = findViewById(R.id.the_text_view)
        
	}
    
    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        
        menuInflater.inflate(R.menu.activity_test, menu)
        
        val menuItem = menu.add("The third choice")
        menuItem.setOnMenuItemClickListener {
            theTextView.text = "The third one"
            true
        }
        
        return super.onCreateOptionsMenu(menu)
        
    }
    
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        
        when(item.itemId){
            R.id.first_menu_item -> theTextView.text = "The first one"
            R.id.second_menu_item -> theTextView.text = "The second one"
            else -> return super.onOptionsItemSelected(item)
        }
        
        return true
        
    }
    
	
}
```
:::
::::

<smartphone>
    <div
        style="height: 100%; width: 100%; position: relative; box-sizing: border-box;"
    >
        <div
            style="background-color: blue; color: white; font-size: 100%; padding: 5% 1%; display: grid; grid-template-columns: auto 1fr auto auto;"
        >
            <span style="grid-column: 1; font-weight: bold;">
                The Action Bar
            </span>
            <span style="grid-column: 2">
            </span>
            <span
                style="grid-column: 3; cursor: pointer;"
                onclick="document.getElementById('text-5432').innerText = 'The second one'"
            >
                Second
            </span>
            <span
                style="grid-column: 4; padding: 0 0.5em; cursor: pointer;"
                onclick="document.getElementById('menu-789').style.visibility = 'visible'"
            >
                ⋮
            </span>
        </div>
        <div id="text-5432">
            Hello
        </div>
        <div
            id="menu-789"
            style="position: absolute; top: 1.5em; right: 0.5em; cursor: pointer; visibility: hidden; background-color: white; border: 1px solid black; font-size: 90%"
        >
            <div
                style="border-right: 1px solid white; border-bottom: 1px solid black;"
                onclick="(document.getElementById('text-5432').innerText = 'The first one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
            >
                The first choice
            </div>
            <div
                style="border-right: 1px solid white;"
                onclick="(document.getElementById('text-5432').innerText = 'The third one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
            >
                The third choice
            </div>
        </div>
    </div>
</smartphone>
:::::

When clicking on a `MenuItem`, it's also possible to replace the main content in the Action Bar with another temporary widget. The typical example is the `SearchView`, which kind of is an `EditText` the user can type text into to search for something (you need to handle the search yourself). For an example of this, see the Android Developer training [Setting Up the Search Interface](https://developer.android.com/training/search/setup).

The Action Bar can also contain the tab titles, and clicking on them can change which fragment to show below the Action Bar. There are more things the Action Bar can be used for, read the documentation if you're curious.

Because the Action Bar was added in Android 3, applications running on older versions of Android won't have it. New features have also been added to it after Android 3, so even if your application runs on a version that contains the Action Bar, you can't use the latest features it contains, because they will only work on devices running the latest version of Android. Sight.




### The App Bar
Material Design was released in Android 5, and they had a component named *App Bar*, which more or less served the same purpose as the Action Bar in Android. So from that time and on, the Action Bar is also often referred to as the App Bar, since that's the name it has in Material Design.




### The Toolbar
In Android 5, they made it possible to use a view in the activity's GUI to function as the activity's Action Bar, and they created a dedicated view for this very purpose: the `Toolbar`. This way, it's possible to implement different type of bars to use as your Action Bar, and they are just as flexible as ordinary views in your GUI, so you can for example use them in animations (move them around, change their sizes, etc.).

If you want to use a `Toolbar` as you Action Bar in an activity, you:

1. Tell the activity to not use its own default Action Bar. You do that in your Application/Activity theme by adding `<item name="android:windowActionBar">false</item>` to the theme (or by inheriting from a theme ending with the name `.NoActionBar`, which already contains this item)
2. Add a `Toolbar` to your activity's GUI (i.e. in the XML layout file used by the activity)
3. Tell your activity that the `Toolbar` you have in the GUI should be used as the activity's Action Bar. You do that by calling the activity's method `setActionBar()` and pass it a reference to your `Toolbar`

However, to stay backward compatible, you use Android Jetpack implementations:

1. Inherit from `AppCompatActivity` instead of `Activity`
2. Use the `Toolbar` implementation from Android JetPack instead of the `Toolbar` implementation from Android
3. On the activity, call `setSupportActionBar()` instead of `setActionBar()`



::::: tip Example
Example showing an app working the same way as before, but now in a backward compatible way.

:::: code-group
::: code-group-item AndroidManifest.xml
```xml{1,9}
<!-- Same as before, but changed to a NoActionBar theme. -->
<manifest ...>
	
	<application ...>
		
		<activity
			android:name=".TestActivity"
			android:label="The Action Bar"
            android:theme="Theme.MaterialComponents.DayNight.NoActionBar" />
		
	</application>
	
</manifest>
```
:::
::: code-group-item res/layout/activity_test.xml
```xml{1,8-11}
<!-- Same as before, but added a Toolbar. -->
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">
    
    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:id="@+id/the_text_view"
		android:text="Hello!"/> 
	
</LinearLayout>
```
:::
::: code-group-item res/menu/activity_test.xml
```xml{1}
<!-- Same as before. -->
<menu
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    
    <item
        android:title="The first choice"
        android:id="@+id/first_menu_item" />
    
    <item
        android:title="Second"
        android:id="@+id/second_menu_item"
        app:showAsAction="ifRoom" />

</menu>
```
:::
::: code-group-item TestActivity.kt
```kotlin{4,13}
import android.app.Activity
import android.widget.TextView

class TestActivity : AppCompatActivity(){
	
    lateinit var theTextView : TextView
    
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		
		setContentView(R.layout.activity_test)
        
        setSupportActionBar(findViewById(R.id.toolbar))
        
        theTextView = findViewById(R.id.the_text_view)
        
	}
    
    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        
        menuInflater.inflate(R.menu.activity_test, menu)
        
        val menuItem = menu.add("The third choice")
        menuItem.setOnMenuItemClickListener {
            theTextView.text = "The third one"
            true
        }
        
        return super.onCreateOptionsMenu(menu)
        
    }
    
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        
        when(item.itemId){
            R.id.first_menu_item -> theTextView.text = "The first one"
            R.id.second_menu_item -> theTextView.text = "The second one"
            else -> return super.onOptionsItemSelected(item)
        }
        
        return true
        
    }
    
	
}
```
:::
::::

<smartphone>
    <div
        style="height: 100%; width: 100%; position: relative; box-sizing: border-box;"
    >
        <div
            style="background-color: blue; color: white; font-size: 100%; padding: 5% 1%; display: grid; grid-template-columns: auto 1fr auto auto;"
        >
            <span style="grid-column: 1; font-weight: bold;">
                The Action Bar
            </span>
            <span style="grid-column: 2">
            </span>
            <span
                style="grid-column: 3; cursor: pointer;"
                onclick="document.getElementById('text-5432').innerText = 'The second one'"
            >
                Second
            </span>
            <span
                style="grid-column: 4; padding: 0 0.5em; cursor: pointer;"
                onclick="document.getElementById('menu-789').style.visibility = 'visible'"
            >
                ⋮
            </span>
        </div>
        <div id="text-5432">
            Hello
        </div>
        <div
            id="menu-789"
            style="position: absolute; top: 1.5em; right: 0.5em; cursor: pointer; visibility: hidden; background-color: white; border: 1px solid black; font-size: 90%"
        >
            <div
                style="border-right: 1px solid white; border-bottom: 1px solid black;"
                onclick="(document.getElementById('text-5432').innerText = 'The first one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
            >
                The first choice
            </div>
            <div
                style="border-right: 1px solid white;"
                onclick="(document.getElementById('text-5432').innerText = 'The third one') && (document.querySelector('#menu-789').style.visibility = 'hidden')"
            >
                The third choice
            </div>
        </div>
    </div>
</smartphone>
:::::