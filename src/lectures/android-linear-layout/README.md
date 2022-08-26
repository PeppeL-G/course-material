---
sidebar: auto
navbarTitle: Android Linear Layout
---

# Android Linear Layout
Here's a short tutorial on how to use `LinearLayout` in Android.

<!-- <iframe width="560" height="314" src="https://www.youtube.com/embed/nJ-9jQw69SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->


## Recommended reading
The reading below on this page is intended to just be an introduction to `LinearLayout`, and not a complete description of how to use all the functionality it contains. For all details about how to use it, check out [the documentation for `LinearLayout`](https://developer.android.com/reference/android/widget/LinearLayout).



## `LinearLayout`
The `LinearLayout` displays all it's children next to each other, either horizontally or vertically.



### The `orientation` property
The `orientation` property controls which direction the children should be positioned in (either `horizontal` or `vertical`). 

::::: tip Example
Example showing how to position `View`s next to each other vertically.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{6}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:background="#00ff00"
		android:text="Hello 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:background="#0000ff"
		android:text="Hello 2" />
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:background="#ffff00"
		android:text="Hello 3" />
	
</LinearLayout>
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
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: min-content min-content min-content; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1 / span 2">
			Hello 1
		</div>
		<div style="background-color: #0000ff; grid-column: 1 / span 1 ">
			Hello 2
		</div>
		<div style="background-color: #ffff00; grid-column: 1 / span 2 ">
			Hello 3
		</div>
	</div>
</Smartphone>

:::::

::::: tip Example
Example showing how to position `View`s next to each other horizontally.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{6}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
	android:orientation="horizontal">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="match_parent"
		android:background="#00ff00"
		android:text="Hello 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:background="#0000ff"
		android:text="Hello 2" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="match_parent"
		android:background="#ffff00"
		android:text="Hello 3" />
	
</LinearLayout>
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
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: max-content max-content max-content; grid-template-rows: auto 1fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-row: 1 / span 2">
			Hello 1
		</div>
		<div style="background-color: #0000ff; grid-row: 1 / span 1 ">
			Hello 2
		</div>
		<div style="background-color: #ffff00; grid-row: 1 / span 2 ">
			Hello 3
		</div>
	</div>
</Smartphone>

:::::










### The `gravity` property
The `gravity` property on `LinearLayout` controls where the children should be placed in the parent (`top`, `center`, `bottom`, etc.).

::::: tip Example
Example showing how to position `View`s next to each other vertically at the bottom of the `LinearLayout`.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{7}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
	android:orientation="vertical"
	android:gravity="bottom">
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:background="#00ff00"
		android:text="Hello 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:background="#0000ff"
		android:text="Hello 2" />
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:background="#ffff00"
		android:text="Hello 3" />
	
</LinearLayout>
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
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: 1fr min-content min-content min-content; background-color: #ff0000;">
		<div></div>
		<div style="background-color: #00ff00; grid-column: 1 / span 2">
			Hello 1
		</div>
		<div style="background-color: #0000ff; grid-column: 1 / span 1 ">
			Hello 2
		</div>
		<div style="background-color: #ffff00; grid-column: 1 / span 2 ">
			Hello 3
		</div>
	</div>
</Smartphone>

:::::





### The `layout_gravity` property
The `layout_gravity` property can be used to give a child an additional gravity/another gravity than the on specified in `gravity` on `LinearLayout`.

::::: tip Example
Example showing how to position `View`s next to each other vertically at the bottom of the `LinearLayout`, and one of the children has the additional gravity `right`.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{7,18}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
	android:orientation="vertical"
	android:gravity="bottom">
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:background="#00ff00"
		android:text="Hello 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_gravity="right"
		android:background="#0000ff"
		android:text="Hello 2" />
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:background="#ffff00"
		android:text="Hello 3" />
	
</LinearLayout>
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
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: 1fr auto; grid-template-rows: 1fr min-content min-content min-content; background-color: #ff0000;">
		<div></div>
		<div style="background-color: #00ff00; grid-column: 1 / span 2">
			Hello 1
		</div>
		<div style="background-color: #0000ff; grid-column: 2 / span 1 ">
			Hello 2
		</div>
		<div style="background-color: #ffff00; grid-column: 1 / span 2 ">
			Hello 3
		</div>
	</div>
</Smartphone>

:::::





### The `layout_weight` property
The `layout_weight` property can be used on a child to give it another size than `wrap_content` and `match_parent`. The number in this attribute corresponds to how many shares of the remaining available space in the `LinearLayout` the child should have after all the other children without this attribute has occupied their space.

When a child has the `layout_weight` attribute, its `layout_width` or `layout_height` (depending on if `orientation="horizontal"` or `orientation="vertical"`) won't be used, and `layout_width`/`layout_height` can be set to `0dp`. Optimally one would omit writing the `layout_width`/`layout_height` attribute that is not used, but they way Android is designed one has to write both of them.

::::: tip Example
Example showing how to position `View`s next to each other vertically, and let two children occupy the rest of the available remaining space (1 fourth and 3 fourths respectively).

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{10-11,23-24}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="0dp"
		android:layout_weight="1"
		android:background="#00ff00"
		android:text="Hello 1" />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:background="#0000ff"
		android:text="Hello 2" />
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="0dp"
		android:layout_weight="3"
		android:background="#ffff00"
		android:text="Hello 3" />
	
</LinearLayout>
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
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: auto 1fr; grid-template-rows: 1fr min-content 3fr; background-color: #ff0000;">
		<div style="background-color: #00ff00; grid-column: 1 / span 2">
			Hello 1
		</div>
		<div style="background-color: #0000ff; grid-column: 1 / span 1 ">
			Hello 2
		</div>
		<div style="background-color: #ffff00; grid-column: 1 / span 2 ">
			Hello 3
		</div>
	</div>
</Smartphone>

:::::






### Handling overflow
If the children can't fit inside the `LinearLayout`, the last children won't be shown (will be "outside" the screen).

::::: tip Example
Example showing how children don't fit in a `LinearLayout`.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{6,9,15,21}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
	android:orientation="horizontal">
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="match_parent"
		android:background="#00ff00"
		android:text="Hello! I am the first child." />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:background="#0000ff"
		android:text="Hello! I am the second child." />
	
	<TextView
		android:layout_width="wrap_content"
		android:layout_height="match_parent"
		android:background="#ffff00"
		android:text="Hello! I am the third child." />
	
</LinearLayout>
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
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: max-content max-content max-content; grid-template-rows: auto 1fr; background-color: #ff0000; overflow: hidden;">
		<div style="background-color: #00ff00; grid-row: 1 / span 2">
			Hello! I am the first child.
		</div>
		<div style="background-color: #0000ff; grid-row: 1 / span 1 ">
			Hello! I am the second child.
		</div>
		<div style="background-color: #ffff00; grid-row: 1 / span 2 ">
			Hello! I am the third child.
		</div>
	</div>
</Smartphone>

:::::

The best solution in this case is to put the `LinearLayout` inside a:

* `ScrollView`, if you want the user to be able to scroll the `LinearLayout` vertically (i.e. when `orientation="vertical"`)
* `HorizontalScrollView`, if you want the user to be able to scroll the `LinearLayout` (i.e. when `orientation="vertical"`)

And give the `LinearLayout`:

* `layout_height="wrap_content"` when `orientation="vertical"`
* `layout_width="wrap_content"` when `orientation="horizontal"`

The `layout_height`/`layout_width` needs to be set to `wrap_content` to allow the `LinearLayout` to grow and be as big as the children requires it to be (if it would be set to `match_parent`, it would be as tall/wide as the `ScrollView`/`HorizontalScrollView`, and you would not be able to scroll it).

::::: tip Example
Example showing how children don't fit in a `LinearLayout`, but thanks to a `HorizontalScrollView` can be scrolled.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{1-4,6,30}
<HorizontalScrollView
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent">
	<LinearLayout
		android:layout_width="wrap_content"
		android:layout_height="match_parent"
		android:background="#ff0000"
		android:orientation="horizontal">
		
		<TextView
			android:layout_width="wrap_content"
			android:layout_height="match_parent"
			android:background="#00ff00"
			android:text="Hello! I am the first child." />
		
		<TextView
			android:layout_width="wrap_content"
			android:layout_height="wrap_content"
			android:background="#0000ff"
			android:text="Hello! I am the second child." />
		
		<TextView
			android:layout_width="wrap_content"
			android:layout_height="match_parent"
			android:background="#ffff00"
			android:text="Hello! I am the third child." />
		
	</LinearLayout>
</HorizontalScrollView>
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
	<div style="height: 100%; width: 100%; display: grid; grid-template-columns: max-content max-content max-content; grid-template-rows: auto 1fr; background-color: #ff0000; overflow: auto;">
		<div style="background-color: #00ff00; grid-row: 1 / span 2">
			Hello! I am the first child.
		</div>
		<div style="background-color: #0000ff; grid-row: 1 / span 1 ">
			Hello! I am the second child.
		</div>
		<div style="background-color: #ffff00; grid-row: 1 / span 2 ">
			Hello! I am the third child.
		</div>
	</div>
</Smartphone>

:::::



### Nesting `LinearLayout`s
A single `LinearLayout` can be useful, but by nesting them, you can create many different type of user interfaces.


::::: tip Example
Example showing how to use a `<LinearLayout orientation="vertical">`s to first create two rows:

* The first row is for the main content on the screen
* The second row is for the navigation buttons at the bottom of the screen

The second row is a `<LinearLayout orientation="horizontal">` containing three `Button`s. The idea is that clicking on a navigation `Button` will change the main content shown on the screen.

:::: code-group
::: code-group-item res/layout/activity_my.xml
```xml{1-4,6,30}
<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:background="#ff0000"
	android:orientation="vertical">
	
	<TextView
		android:layout_width="match_parent"
		android:layout_height="0dp"
		android:layout_weight="1"
		android:background="#00ff00"
		android:gravity="center"
		android:text="I'm the main content!" />
	
	<LinearLayout
		android:layout_width="match_parent"
		android:layout_height="wrap_content"
		android:background="#ff0000"
		android:orientation="horizontal">
		
		<Button
			android:layout_width="0dp"
			android:layout_height="wrap_content"
			android:layout_weight="1"
			android:text="Page 1" />
		
		<Button
			android:layout_width="0dp"
			android:layout_height="wrap_content"
			android:layout_weight="1"
			android:text="Page 2" />
		
		<Button
			android:layout_width="0dp"
			android:layout_height="wrap_content"
			android:layout_weight="1"
			android:text="Page 3" />
		
	</LinearLayout>
	
</LinearLayout>
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

::: warning About nesting LinearLayouts
Most GUIs can these days be implemented using a single `ConstraintLayout`, which is more performant than nesting multiple `LinearLayout`s.
:::