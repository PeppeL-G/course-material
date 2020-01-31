---
sidebar: auto
navbarTitle: Android Runtime Configuration Changes
---

# Android Runtime Configuration Changes
So, how can Android that easily support i18n? The secret is through is how it handles runtime configuration changes. When the user changes language, all the GUI is destroyed and then re-created. The hard part is to make sure that it's re-created exactly the way the user left it!

## Lecture material
* [android-runtime-configuration-changes.pdf](android-runtime-configuration-changes.pdf)
* [android-runtime-configuration-changes.pptx](android-runtime-configuration-changes.pptx)

## Recommended reading
* Android Developers Guide's page [Handle configuration changes](https://developer.android.com/guide/topics/resources/runtime-changes).
* In the course book Elements of Android Jetpack:
    * [Coping with Configurations](https://wares.commonsware.com/app/internal/book/Jetpack/page/chap-config-001.html)

## Example
`MainActivity` with a button functioning as a counter starting on 0. It retains its state using the savedInstanceStateBundle..

<Tabs remember-selected-key="example-675">
<Tab title="MainActivity.kt">

```kotlin
class MainActivity : AppCompatActivity() {
    
    companion object {
        const val KEY_COUNTER = "COUNTER"
    }
    
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

</Tab>
<Tab title="res/layout/activity_main-xml">

```xml
sdfds
```

</Tab>
</Tabs>