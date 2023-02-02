# Tutorials
Here you will find material from the different tutorials.

## Tutorial 1: Jetpack Compose Basics
`Text()`, `Box()`, `Row()` and `Column()`.

### Example of using `Box`
```kotlin
@Composable
@Preview(
    widthDp = 200,
    heightDp = 300
)
fun AppScreen() {
    Box(
        modifier = Modifier
            .background(Color.Red)
            .fillMaxSize()
    ){
        
        Text(
            text = "X",
            modifier = Modifier
                .align(Alignment.TopEnd)
        )
        
        Text(
            text = "Once upon a time",
            modifier = Modifier
                .align(Alignment.Center)
        )
        
        Text(
            text = "<--",
            modifier = Modifier
                .align(Alignment.BottomStart)
        )
        
        Text(
            text = "5",
            modifier = Modifier
                .align(Alignment.BottomCenter)
        )
        
        Text(
            text = "-->",
            modifier = Modifier
                .align(Alignment.BottomEnd)
        )
        
    }
}
```

### Example of nesting `Column()` and `Row()`
```kotlin
@Composable
@Preview(
    widthDp = 200,
    heightDp = 300
)
fun AppScreen() {
    Column(
        modifier = Modifier
            .background(Color.Red)
            .fillMaxSize(),
        verticalArrangement = Arrangement.SpaceBetween
    ){
        
        Text(
            text = "X",
            modifier = Modifier
                .align(Alignment.End)
        )
        
        Text("Once upon a time",
            modifier = Modifier
                .align(Alignment.CenterHorizontally)
        )
        
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ){
            Text(text = "<--")
            Text(text = "5")
            Text(text = "-->")
        }
        
    }
}
```




## Tutorial 2: Jetpack Compose State
`LazyColumn()`, state and `NavHost()`.

### Example of a layout
```kotlin
@Composable
fun AppScreen() {
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Red)
            .padding(8.dp)
    ){
            
        Text(
            text = "Main Content",
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
                .background(Color.Blue)
        )
            
        Row(
            horizontalArrangement = Arrangement.SpaceAround,
            modifier = Modifier
                .fillMaxWidth()
                .background(Color.Yellow)
        ){
            
            Button(onClick = { }) {
                Text("Option 1")
            }
            
            Button(onClick = { }) {
                Text("Option 2")
            }
            
            Button(onClick = { }) {
                Text("Option 3")
            }
        }
        
    }
    
}
```

### Example of using `LazyColumn`
```kotlin
data class Human(
    val id: Int,
    val name: String,
)

val humans = listOf(
    Human(1, "Alice"),
    Human(2, "Bob"),
    Human(3, "Claire"),
)

@Composable
fun AppScreen() {
    
    LazyColumn{
        
        item{
            Text("Below are human names.")
        }
        
        items(humans){human ->
            Text(human.name)
        }
        
        item{
            Text("Above are human names.")
        }
        
    }
    
}
```

### Example of using state (counter)
```kotlin
@Composable
fun AppScreen() {
    
    var counter by rememberSaveable {
        mutableStateOf(0)
    }
    
    Button(onClick = { counter++ }) {
        Text(counter.toString())
    }
    
}
```

### Example of using `NavHost`
You need to [add the navigation-compose library](https://developer.android.com/jetpack/compose/navigation#setup) first.

```kotlin
data class Human(
    val id: Int,
    val name: String,
)

val humans = listOf(
    Human(1, "Alice"),
    Human(2, "Bob"),
    Human(3, "Claire"),
)

@Composable
fun AppScreen() {

    val navController = rememberNavController()
    
    // Wrap the NavHost in its own layout if you want.
    NavHost(
        navController = navController,
        startDestination = "viewAll"
    ){

        composable("viewAll"){
            ViewAllScreen(navController)
        }

        composable("viewOne/{id}"){
            val id = it.arguments!!.getString("id")!!.toInt()
            ViewOneScreen(id)
        }

    }

}

@Composable
fun ViewAllScreen(navController: NavHostController) {
    LazyColumn{
        items(humans){human ->
            Button(onClick = { navController.navigate("viewOne/${human.id}") }) {
                Text(human.name)
            }
        }
    }
}

@Composable
fun ViewOneScreen(id: Int) {

    val human = humans.find{ it.id == id }!!

    Text(
        text = "${human.name} has id ${human.id}."
    )

}
```


## Martin's GUI Lecture
[The slides](https://ju.instructure.com/files/1121481/download?download_frd=1).