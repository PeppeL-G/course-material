---
sidebar: auto
navbarTitle: Android CoordinatorLayout
---

# Android CoordinatorLayout
Let's take a look at one of the new layouts we got with material design: `CoordinatorLayout`.

## Recommended reading
Android documentation:
* [CoordinatorLayout](https://developer.android.com/reference/androidx/coordinatorlayout/widget/CoordinatorLayout)

## The CoordinatorLayout
When we got Material Design components in Android, some views needed to be coordinated to appear and behave correct. By placing views in a `CoordinatorLayout`, each view can have a *behavior* attached to it that can tell the `CoordinatorLayout` which other views in the layout that view is dependent on. The `CoordinatorLayout` will then inform the behavior when any of the dependent views change in size or position, at which point the behavior should update its own view to behave correctly, such as to move it.

::: tip Coordinating, not positioning
The `CoordinatorLayout` is primarily for coordinating views through behaviors added to them, it does not have much functionality for positioning the views in it. Therefor, we usually put another `Layout` in the `CoordinatorLayout` (such as a `ConstraintLayout`) to position the views. But we have some tools to position the views in a `CoordinatorLayout`, such as the tools we have to position views in a `FrameLayout`, such as `layout_gravity` and margins.
:::

### Behavior
In the `Activity` below, each click on the `Button` moves the first `TextView` to the right a little bit.

<Tabs>
<Tab title="Result">

<Smartphone>
  <div>Some text</div>
  <div>Some other text</div>
  <button onclick="this.previousElementSibling.previousElementSibling.innerHTML = '&nbsp;'+this.previousElementSibling.previousElementSibling.innerHTML">Move first text</button>
</Smartphone>

</Tab>
<Tab title="MainActivity.kt">

```kt
class MainActivity : AppCompatActivity() {
  
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    
    setContentView(R.layout.activity_main)
    
    val firstTextView = findViewById<TextView>(R.id.first_text_view)
    val moveButton = findViewById<Button>(R.id.move_button)
    
    // Move the first TextView when the button is clicked.
    moveButton.setOnClickListener {
      val layoutParams = firstTextView.layoutParams as ViewGroup.MarginLayoutParams
      layoutParams.leftMargin = layoutParams.leftMargin + 5
      firstTextView.requestLayout() // Tell the framework to repaint this view.
    }
    
  }
  
}
```

</Tab>
<Tab title="activity_layout.xml">

```xml
<androidx.coordinatorlayout.widget.CoordinatorLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  android:layout_width="match_parent"
  android:layout_height="match_parent">
    
    <TextView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/first_text_view"
      android:text="Some text." />

    <TextView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/second_text_view"
      android:layout_marginTop="30dp"
      android:text="Some other text." />

    <Button
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/move_button"
      android:layout_marginTop="60dp"
      android:text="Move first text" />

</androidx.coordinatorlayout.widget.CoordinatorLayout>
```

</Tab>
</Tabs>

If we want the second `TextView` to be moved the same way as the first `TextView`, we can add a `Behavior` to it that tells the `CoordinatorLayout` that it depends on the first `TextView`. Then the `CoordinatorLayout` will notify the `Behavior` each time the first `TextView` is moved, and the `Behavior` can in turn change the position of the second `TextView` it has been added to, as in the `Activity` below.

<Tabs>
<Tab title="Result">

<Smartphone>
  <div>Some text</div>
  <div>Some other text</div>
  <button onclick="this.previousElementSibling.previousElementSibling.innerHTML = '&nbsp;'+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = '&nbsp;'+this.previousElementSibling.innerHTML">Move first text</button>
</Smartphone>

</Tab>
<Tab title="MainActivity.kt">

```kt
// Same as before.
class MainActivity : AppCompatActivity() {
  
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    
    setContentView(R.layout.activity_main)
    
    val firstTextView = findViewById<TextView>(R.id.first_text_view)
    val moveButton = findViewById<Button>(R.id.move_button)
    
    moveButton.setOnClickListener {
      val layoutParams = firstTextView.layoutParams as ViewGroup.MarginLayoutParams
      layoutParams.leftMargin = layoutParams.leftMargin + 5
      firstTextView.requestLayout()
    }
    
  }
  
}
```

</Tab>
<Tab title="activity_layout.xml">

```xml
<androidx.coordinatorlayout.widget.CoordinatorLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  android:layout_width="match_parent"
  android:layout_height="match_parent">
    
    <TextView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/first_text_view"
      android:text="Some text." />

    <TextView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/second_text_view"
      android:layout_marginTop="30dp"
      android:text="Some other text."
      app:layout_behavior=".MyBehavior" /> <!-- Only change from before: Behavior added! -->

    <Button
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/move_button"
      android:layout_marginTop="60dp"
      android:text="Move first text" />

</androidx.coordinatorlayout.widget.CoordinatorLayout>
```

</Tab>
<Tab title="MyBehavior.kt">

```kt
// The type of view we specify in the super class should match the type of view the behavior can be added to.
// Currently it's <TextView>, but it could just as well be <View> in this case, since this behavior is
// not dependent on any TextView specific functionality (it would work equally well on a Button)
class MyBehavior(context: Context, attrs: AttributeSet) :
    CoordinatorLayout.Behavior<TextView>(context, attrs) {
  
  // This function will be called by the CoordinatorLayout.
  // The parameter "child" is the view this behavior has been added to.
  // We should return back true if we are dependent on the parameter "dependency", otherwise false.
  // This function will be called once for all views in the CoordinatorLayout except the one the behavior has been added to.
  override fun layoutDependsOn(
    parent: CoordinatorLayout,
    child: TextView,
    dependency: View
  ) = dependency.id == R.id.first_text_view
  
  // This function will be called whenever a view we depend on (according to layoutDependsOn())
  // changes size or position. 
  // The parameter "child" is the view this behavior has been added to.
  // The parameter "dependency" is the view that has changed size or position.
  override fun onDependentViewChanged(
    parent: CoordinatorLayout,
    child: TextView,
    dependency: View
  ): Boolean {
    
    // Set our view's left margin to the same margin as the view we depend on (the first TextView).
    val childLayoutParams = child.layoutParams as ViewGroup.MarginLayoutParams
    val dependencyLayoutParams = dependency.layoutParams as ViewGroup.MarginLayoutParams
    childLayoutParams.leftMargin = dependencyLayoutParams.leftMargin
    
    // Tell the framework to repaint the view.
    child.requestLayout()
    
    // Return true to tell the CoordinatorLayout that you have changed this view.
    return true
    
  }
  
}
```

</Tab>
</Tabs>

Often we don't create our own behaviors (the code for behaviors usually get quite complicated), but instead use some behaviors others have created for us. The Android support library has some for different type of views.

### Anchors
The `CoordinatorLayout` has one new way to position its views: using anchors. You can "anchor" a view to another view, and then that view will stick to that other view, even when that other view is moved. 

Before we created our own `Behavior` to make one `TextView` follow another `TextView` as it moved. This is more or less what anchors are used for, so we could achieve similar functionality using the `layout_anchor*` attributes, as shown in the `Activity` below.

<Tabs>
<Tab title="Result">

<Smartphone>
  <div>Some text</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;Some other text</div>
  <button onclick="this.previousElementSibling.previousElementSibling.innerHTML = '&nbsp;'+this.previousElementSibling.previousElementSibling.innerHTML; this.previousElementSibling.innerHTML = '&nbsp;'+this.previousElementSibling.innerHTML">Move first text</button>
</Smartphone>

</Tab>
<Tab title="MainActivity.kt">

```kt
// Same as before.
class MainActivity : AppCompatActivity() {
  
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    
    setContentView(R.layout.activity_main)
    
    val firstTextView = findViewById<TextView>(R.id.first_text_view)
    val moveButton = findViewById<Button>(R.id.move_button)
    
    moveButton.setOnClickListener {
      val layoutParams = firstTextView.layoutParams as ViewGroup.MarginLayoutParams
      layoutParams.leftMargin = layoutParams.leftMargin + 5
      firstTextView.requestLayout()
    }
    
  }
  
}
```

</Tab>
<Tab title="activity_layout.xml">

```xml
<androidx.coordinatorlayout.widget.CoordinatorLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  android:layout_width="match_parent"
  android:layout_height="match_parent">
    
    <TextView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/first_text_view"
      android:text="Some text." />

    <TextView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/second_text_view"
      android:text="Some other text."
      app:layout_anchor="@id/first_text_view" 
      app:layout_anchorGravity="end|bottom" /> 
      <!-- Changes from before:
           1. layout_marginTop has been removed.
           1. Our own behavior has been removed.
           2. Anchor this view to the end (right in LTR) and below the first TextView (the horizontal center of this view will match the end of the first TextView) -->

    <Button
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:id="@+id/move_button"
      android:layout_marginTop="60dp"
      android:text="Move first text" />

</androidx.coordinatorlayout.widget.CoordinatorLayout>
```

</Tab>
</Tabs>