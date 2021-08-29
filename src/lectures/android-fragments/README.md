---
sidebar: auto
navbarTitle: Android Fragments
---

# Android Fragments
With fragments we can re-use a part of the GUI in different activities or swap one part the GUI for another part.

<iframe width="560" height="314" src="https://www.youtube.com/embed/c8KZkWdXkTY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [android-fragments.pdf](android-fragments.pdf)
* [android-fragments.pptx](android-fragments.pptx)

## Recommended reading
* The documentation for the [Fragment](https://developer.android.com/reference/androidx/fragment/app/Fragment.html) class.
* Android Developers Guide's page [Fragments](https://developer.android.com/guide/components/fragments).
* In the course book Elements of Android Jetpack:
    * [Adopting Fragments](https://wares.commonsware.com/app/internal/book/Jetpack/page/chap-fragments-001.html)

## Examples

### Static counter fragment
The `CounterFragment` contains a counter button starting on 0. Its state is retained across runtime configuration changes. Three instances of it are statically inserted into the `MainActivity` using the `<fragment>` tag.

:::: code-group
::: code-group-item MainActivity.kt

```kotlin
class MainActivity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
    
}
```

:::
::: code-group-item res/layout/activity_main.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    
    <fragment
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:name="your.package.CounterFragment"
        android:id="@+id/counterFragment1" />
    
    <fragment
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:name="your.package.CounterFragment"
        android:id="@+id/counterFragment2" />
    
    <fragment
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:name="your.package.CounterFragment"
        android:id="@+id/counterFragment3" />
    
</LinearLayout>
```

:::
::: code-group-item CounterFragment.kt

```kotlin
class CounterFragment : Fragment() {
    
    companion object {
        const val KEY_COUNTER = "COUNTER"
    }
    
    private var counter = 0
    
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(
            R.layout.fragment_counter,
            container,
            false
        )
    }
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        counter = when (savedInstanceState) {
            null ->
                0
            else ->
                savedInstanceState.getInt(KEY_COUNTER)
        }
        
        val button : Button = view.findViewById(R.id.button)
        
        button.text = "$counter"
        
        button.setOnClickListener {
            counter += 1
            button.text = "$counter"
        }
        
    }
    
    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        outState.putInt(KEY_COUNTER, counter)
    }
    
}
```

:::
::: code-group-item res/layout/fragment_counter.xml

```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:gravity="center"
    android:orientation="horizontal">
    
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button"/>
    
</LinearLayout>
```

:::
::::

### Dynamic countdown fragment
The `CounterFragment` functions as a countdown. The start value is configurable and retained across runtime configuration changes using the arguments Bundle. Its state is retained across runtime configuration changes using the savedInstanceState Bundle. Three instances of it are dynamically inserted into the `MainActivity`.

:::: code-group
::: code-group-item MainActivity.kt

```kotlin
class MainActivity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        if(savedInstanceState == null){
            supportFragmentManager
                .beginTransaction()
                .add(R.id.frameLayout1, CounterFragment.newInstance(5))
                .add(R.id.frameLayout2, CounterFragment.newInstance(6))
                .add(R.id.frameLayout3, CounterFragment.newInstance(3))
                .commit()
        }
        
    }
    
}
```

:::
::: code-group-item res/layout/activity_main.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    
    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/frameLayout1" />
    
    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/frameLayout2" />
    
    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/frameLayout3" />
    
</LinearLayout>
```

:::
::: code-group-item CounterFragment.kt

```kotlin
class CounterFragment : Fragment() {

    companion object {

        const val KEY_COUNTER = "COUNTER"

        const val ARG_START_VALUE = "START_VALUE"

        fun newInstance(startValue: Int) = CounterFragment().apply {
            arguments = Bundle().apply {
                putInt(ARG_START_VALUE, startValue)
            }
        }

    }

    private var counter = 0

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(
            R.layout.fragment_counter,
            container,
            false
        )
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        counter = when (savedInstanceState) {
            null ->
                arguments!!.getInt(ARG_START_VALUE)
            else ->
                savedInstanceState.getInt(KEY_COUNTER)
        }

        val textView: TextView = view.findViewById(R.id.textView)
        val resetButton : Button = view.findViewById(R.id.resetButton)
        val decrementButton : Button = view.findViewById(R.id.decrementButton)

        textView.text = "$counter"

        decrementButton.setOnClickListener {
            counter -= 1
            textView.text = "$counter"
        }
        resetButton.setOnClickListener {
            counter = arguments!!.getInt(ARG_START_VALUE)
            textView.text = "$counter"
        }

    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        outState.putInt(KEY_COUNTER, counter)
    }

}
```

:::
::: code-group-item res/layout/fragment_counter.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:gravity="center"
    android:orientation="horizontal"
    tools:context=".CounterFragment">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/textView" />

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="-"
        android:id="@+id/decrementButton"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Reset"
        android:id="@+id/resetButton"/>

</LinearLayout>
```

:::
::::