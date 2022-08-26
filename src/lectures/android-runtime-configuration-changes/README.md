---
sidebar: auto
navbarTitle: Android Runtime Configuration Changes
---

# Android Runtime Configuration Changes
So, how can Android so easily support i18n? The secret is through how it handles runtime configuration changes. When the user changes language, all the GUI is destroyed and then re-created. The hard part is to make sure that it's re-created exactly the way the user left it!

<iframe width="560" height="314" src="https://www.youtube.com/embed/P107Qcnnyys" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [android-runtime-configuration-changes.pdf](android-runtime-configuration-changes.pdf)
* [android-runtime-configuration-changes.pptx](android-runtime-configuration-changes.pptx)

## Recommended reading
* Android Developers Guide's page [Handle configuration changes](https://developer.android.com/guide/topics/resources/runtime-changes).
* In the course book Elements of Android Jetpack:
    * [Coping with Configurations](https://commonsware.com/Jetpack/pages/chap-config-001.html)

## Example
`MainActivity` with a button functioning as a counter starting on 0. It retains its state using the `savedInstanceState` parameter.

:::: code-group
::: code-group-item res/layout/activity_main.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    tools:context=".MainActivity">
    
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/button" />
    
</LinearLayout>
```
:::
::: code-group-item MainActivity.kt
```kotlin
const val KEY_COUNTER = "COUNTER"

class MainActivity : AppCompatActivity() {
    
    var counter = 0
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        counter = when(savedInstanceState){
            null ->
                0
            else ->
                savedInstanceState.getInt(KEY_COUNTER)
        }
        
        val button: Button = findViewById(R.id.button)
        with(button){
            text = "$counter"
            setOnClickListener {
                counter += 1
                text = "$counter"
            }
        }
    
    }
    
    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        outState.putInt(KEY_COUNTER, counter)
    }
    
}
```
:::
::::