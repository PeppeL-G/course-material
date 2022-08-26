---
sidebar: auto
navbarTitle: Android Constraint Layout
---

# Android Constraint Layout
Here's a short tutorial on how to use `ConstraintLayout` in Android.

<!-- <iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->


## Recommended reading
The reading below on this page is intended to just be an introduction to `ConstraintLayout`, and not a complete description of how to use all the functionality it contains. For all details about how to use it, check out [the documentation for `ConstraintLayout`](https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout).



## `ConstraintLayout`
The `ConstraintLayout` is a layout in which the children can be positioned relative to each other (a child can be positioned below another child, or above another child, or to the right of another child, etc.), or relative to the parent's edges (below the parent's top edge, or above the parent's bottom edge, or to the right of the parent's left edge, etc.). It is very similar to the [RelativeLayout](https://developer.android.com/guide/topics/ui/layout/relative), but offers more functionality.

The `ConstraintLayout` is not part of the Android framework, but developed by Google in a separate library that is part of Android Jetpack. To add the library to your Android Studio Project, follow the instructions at the [Declaring dependencies](https://developer.android.com/jetpack/androidx/releases/constraintlayout#declaring_dependencies) section.

::: warning Use the correct namespace!
Since the `ConstraintLayout` is not part of the Android framework, it does not put its own specific attributes in the XML namespace `http://schemas.android.com/apk/res/android` (usually called `android`), but instead in the namespace `http://schemas.android.com/apk/res-auto`, which one usually call `app`.
:::

A child in `ConstraintLayout` can have `layout_width` and `layout_height` set to `wrap_content`/`match_parent`, in which case the child will have the size specified by these two attributes (as usual).

::::: tip Example
Example showing how to add two `View`s to a `ConstraintLayout`.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{7-11,13-17}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:background="#0000ff"
		android:text="Text 2" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 1; grid-row: 1;">
			Text 2
		</div>
	</div>
</Smartphone>

:::::



In the example above, we haven't told the `ConstraintLayout` where the children should be positioned, so both `TextView`s are positioned in top left corner by default (that's why we can't see the first `TextView`; it's behind the second `TextView`!).

To tell the `ConstraintLayout` where a child should be positioned horizontally, we can add one of the following attributes (known as a *constraint*) to the child:

* `app:layout_constraintLeft_toLeftOf`
* `app:layout_constraintLeft_toRightOf`
* `app:layout_constraintRight_toLeftOf`
* `app:layout_constraintRight_toRightOf`

The value can either be `parent`, or the id of one of the other child `View`s in the `ConstraintLayout`.

Similarly, to tell the `ConstraintLayout` where a child should be positioned vertically, we can add one of the following attributes to the child:

* `app:layout_constraintTop_toTopOf`
* `app:layout_constraintTop_toBottomOf`
* `app:layout_constraintBottom_toTopOf`
* `app:layout_constraintBottom_toBottomOf`

The value can either be `parent`, or the id of one of the other child `View`s in the `ConstraintLayout`.

::: tip Supporting Right-to-Left devices
To support layouts for people reading from right to left, use `Start` instead of `Left` and `End` instead of `Right` in the attribute names, e.g. use `layout_constraintStart_toEndOf` instead of `layout_constraintLeft_toRightOf`.
:::


::::: tip Example
Example showing how to position one `View` in the top right corner, and another `View` in the bottom left corner.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-12,19-20}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintRight_toRightOf="parent"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintBottom_toBottomOf="parent"
		app:layout_constraintLeft_toLeftOf="parent"
		android:background="#0000ff"
		android:text="Text 2" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr auto; grid-template-rows: auto 1fr auto; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 3; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 1; grid-row: 3;">
			Text 2
		</div>
	</div>
</Smartphone>

:::::




::::: tip Example
Example showing how to position two `View`s in the top right corner (one below the other).

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-13,20-21}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintRight_toRightOf="parent"
		android:id="@+id/first_text_view"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toBottomOf="@id/first_text_view"
		app:layout_constraintRight_toRightOf="parent"
		android:background="#0000ff"
		android:text="Text 2" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: 1fr auto; grid-template-rows: auto auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 3; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 3; grid-row: 2;">
			Text 2
		</div>
	</div>
</Smartphone>

:::::




::::: tip Example
Example showing how to position two `View`s diagonally in the top right corner.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-13,20-21}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintRight_toRightOf="parent"
		android:id="@+id/first_text_view"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toBottomOf="@id/first_text_view"
		app:layout_constraintRight_toLeftOf="@id/first_text_view"
		android:background="#0000ff"
		android:text="Text 2" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: 1fr auto auto; grid-template-rows: auto auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 3; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 2; grid-row: 2;">
			Text 2
		</div>
	</div>
</Smartphone>

:::::



::: warning Repetition
To tell the `ConstraintLayout` where a child should be positioned horizontally, we can add one of the following attributes (known as a *constraint*) to the child:

* `app:layout_constraintLeft_toLeftOf`
* `app:layout_constraintLeft_toRightOf`
* `app:layout_constraintRight_toLeftOf`
* `app:layout_constraintRight_toRightOf`

The value can either be `parent`, or the id of one of the other child `View`s in the `ConstraintLayout`.

Similarly, to tell the `ConstraintLayout` where a child should be positioned vertically, we can add one of the following attributes to the child:

* `app:layout_constraintTop_toTopOf`
* `app:layout_constraintTop_toBottomOf`
* `app:layout_constraintBottom_toTopOf`
* `app:layout_constraintBottom_toBottomOf`

The value can either be `parent`, or the id of one of the other child `View`s in the `ConstraintLayout`.
:::

Instead of giving a child it's size through the `layout_width` and `layout_height` attributes, you can specify two horizontal (or two vertical) constraints, and the child can get its width (or height) from the constraints instead. When a child has two horizontal constraints (or two vertical constraints) and you want the child to get its size through the constraints you should set the `layout_width` (or `layout_height`) to `0dp`. 




::::: tip Example
Example showing how to position two `View`s next to each other horizontally:

* The first one is as small as possible
* The second one should occupy the rest of the remaining space

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-13,18,20-22}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toLeftOf="parent"
		android:id="@+id/first_text_view"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toRightOf="@id/first_text_view"
		app:layout_constraintRight_toRightOf="parent"
		android:background="#0000ff"
		android:text="Text 2" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 2; grid-row: 1;">
			Text 2
		</div>
	</div>
</Smartphone>

:::::



If a child has a size smaller than what is specified by two horizontal/vertical constraints, the child will be centered instead of growing to cover the space.




::::: tip Example
Example showing how to position two `View`s next to each other, and center the second `View` in the rest of the available space.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-13,20-22}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toLeftOf="parent"
		android:id="@+id/first_text_view"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toRightOf="@id/first_text_view"
		app:layout_constraintRight_toRightOf="parent"
		android:background="#0000ff"
		android:text="Text 2" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr auto 1fr; grid-template-rows: auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 3; grid-row: 1;">
			Text 2
		</div>
	</div>
</Smartphone>

:::::





To control where in the rest of the available space the child is positioned (center by default), use the `app:layout_constraintHorizontal_bias`/`app:layout_constraintVertical_bias` attribute. The value is number between `0` and `1`, where:

* `0` means at the start
* ...
* `0.5` means in the middle (default)
* ...
* `1` means at the end




::::: tip Example
Example showing how to position two `View`s next to each other, and placing the second `View` 90% to the right of the rest of the available space.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-13,20-23}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toLeftOf="parent"
		android:id="@+id/first_text_view"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toRightOf="@id/first_text_view"
		app:layout_constraintRight_toRightOf="parent"
		app:layout_constraintHorizontal_bias="0.9"
		android:background="#0000ff"
		android:text="Text 2" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 9fr auto 1fr; grid-template-rows: auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 3; grid-row: 1;">
			Text 2
		</div>
	</div>
</Smartphone>

:::::



When you have a multiple children getting their sizes from the constraints in the same "chain", they by default get an equal amount of the remaining space available.




::::: tip Example
Example showing how to position three `View`s next to each other, and let the last two share the remaining available space equally.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-13,18,20-23,28,30-32}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toLeftOf="parent"
		android:id="@+id/first_text_view"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toRightOf="@id/first_text_view"
		app:layout_constraintRight_toLeftOf="@id/third_text_view"
		android:id="@+id/second_text_view"
		android:background="#0000ff"
		android:text="Text 2" />
	
	<TextView
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toRightOf="@id/second_text_view"
		app:layout_constraintRight_toRightOf="parent"
		android:id="@+id/third_text_view"
		android:background="#ffff00"
		android:text="Text 3" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr 1fr; grid-template-rows: auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 2; grid-row: 1;">
			Text 2
		</div>
		<div style="background-color: #ffff00; grid-column: 3; grid-row: 1;">
			Text 3
		</div>
	</div>
</Smartphone>

:::::



If you want the remaining space to be distributed differently among the children, you can use the attribute `layout_constraintHorizontal_weight`/`layout_constraintVertical_weight` to indicate how many shares of the remaining vertical space they should occupy.




::::: tip Example
Example showing how to position three `View`s next to each other, and let the second occupy one third of the remaining space, and the third to occupy 2 thirds of the remaining space.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{11-13,18,20-24,29,31-34}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toLeftOf="parent"
		android:id="@+id/first_text_view"
		android:background="#00ff00"
		android:text="Text 1" />
	
	<TextView
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toRightOf="@id/first_text_view"
		app:layout_constraintRight_toLeftOf="@id/third_text_view"
		app:layout_constraintHorizontal_weight="1"
		android:id="@+id/second_text_view"
		android:background="#0000ff"
		android:text="Text 2" />
	
	<TextView
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintLeft_toRightOf="@id/second_text_view"
		app:layout_constraintRight_toRightOf="parent"
		app:layout_constraintHorizontal_weight="2"
		android:id="@+id/third_text_view"
		android:background="#ffff00"
		android:text="Text 3" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr 2fr; grid-template-rows: auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1; grid-row: 1;">
			Text 1
		</div>
		<div style="background-color: #0000ff; grid-column: 2; grid-row: 1;">
			Text 2
		</div>
		<div style="background-color: #ffff00; grid-column: 3; grid-row: 1;">
			Text 3
		</div>
	</div>
</Smartphone>

:::::



### Bigger example
::::: tip Example
Example showing how to use a `<ConstraintLayout>` to implement a layout with main content and a row with 3 navigation buttons at the bottom.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{10-14,20,22-26,30,32-36,40,42-46}
<androidx.constraintlayout.widget.ConstraintLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:app="http://schemas.android.com/apk/res-auto"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000">
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="0dp"
		app:layout_constraintTop_toTopOf="parent"
		app:layout_constraintBottom_toTopOf="@id/first_button"
		app:layout_constraintLeft_toLeftOf="parent"
		android:id="@+id/main_content_text_view"
		android:background="#00ff00"
		android:gravity="center"
		android:text="I'm the main content!" />
	
	<Button
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toBottomOf="@id/main_content_text_view"
		app:layout_constraintBottom_toBottomOf="parent"
		app:layout_constraintLeft_toLeftOf="parent"
		app:layout_constraintRight_toLeftOf="@id/second_button"
		android:id="@+id/first_button"
		android:text="Page 1" />
	
	<Button
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toBottomOf="@id/main_content_text_view"
		app:layout_constraintBottom_toBottomOf="parent"
		app:layout_constraintLeft_toRightOf="@id/first_button"
		app:layout_constraintRight_toLeftOf="@id/third_button"
		android:id="@+id/second_button"
		android:text="Page 2" />
	
	<Button
		android:layout_width="0dp"
		android:layout_height="wrap_content"
		app:layout_constraintTop_toBottomOf="@id/main_content_text_view"
		app:layout_constraintBottom_toBottomOf="parent"
		app:layout_constraintLeft_toRightOf="@id/second_button"
		app:layout_constraintRight_toRightOf="parent"
		android:id="@+id/third_button"
		android:text="Page 3" />
	
</androidx.constraintlayout.widget.ConstraintLayout>
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

<Smartphone>
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr auto; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-row: 1; grid-column: 1 / span 3; display: grid; align-content: center; text-align: center;">
			<div>
				I'm the main content!
			</div>
		</div>
		<button style="grid-row: 2; grid-column: 1;">
			Page 1
		</button>
		<button style="grid-row: 2; grid-column: 2;">
			Page 2
		</button>
		<button style="grid-row: 2; grid-column: 3;">
			Page 3
		</button>
	</div>
</Smartphone>

:::::