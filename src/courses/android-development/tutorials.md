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

## Tutorial 3: Long running operations
Threads, coroutines and ViewModel. `Thread.sleep()` and `delay()` are used to simulate "waiting for response from server".

### Example with frozen GUI
```kt
@Composable
fun App(){
    
    var counter by remember{
        mutableStateOf(0)
    }
    var randomNumber by remember{
        mutableStateOf(0.0)
    }
    
    Column(modifier = Modifier.fillMaxSize()) {
        
        Button(onClick = {
            counter++
        }) {
            Text(text = counter.toString())
        }
        
        Button(onClick = {
            Thread.sleep(3000) // This freezes the GUI!
            randomNumber = random()
        }) {
            Text(text = randomNumber.toString())
        }
    
    }
    
}
```

### Example of using background thread
```kotlin
@Composable
fun App(){
    
    var counter by remember{
        mutableStateOf(0)
    }
    var randomNumber by remember{
        mutableStateOf(0.0)
    }
    
    Column(modifier = Modifier.fillMaxSize()) {
        
        Button(onClick = {
            counter++
        }) {
            Text(text = counter.toString())
        }
        
        Button(onClick = {
            thread{ // Starts a new thread.
                Thread.sleep(3000) // The main thread not affected by this, GUI not frozen!
                randomNumber = random()
            }
        }) {
            Text(text = randomNumber.toString())
        }
        
    }
    
}
```

### Example of using coroutine
```kt
@Composable
fun App(){
    
    // Get a coroutine scope that automatically stops running when
    // This component instance is not used anymore.
    val coroutineScope = rememberCoroutineScope()
    
    var counter by remember{
        mutableStateOf(0)
    }
    var randomNumber by remember{
        mutableStateOf(0.0)
    }
    
    Column(modifier = Modifier.fillMaxSize()) {
        
        Button(onClick = {
            counter++
        }) {
            Text(text = counter.toString())
        }
        
        Button(onClick = {
            coroutineScope.launch(Dispatchers.IO){
                 // The code here will be executed on a background thread,
                 // and the thread can do execute other coroutines while
                 // waiting in delay().
                delay(3000)
                randomNumber = random()
            }
        }) {
            Text(text = randomNumber.toString())
        }
        
    }
    
}
```

### Example of using `LaunchedEffect()`
```kt
@Composable
fun App(){
    
    val coroutineScope = rememberCoroutineScope()
    
    var counter by remember{
        mutableStateOf(0)
    }
    var randomNumber by remember{
        mutableStateOf(0.0)
    }
    
    // When the App() instance is created, also run the coroutine.
    LaunchedEffect(Unit){
        
        coroutineScope.launch(Dispatchers.IO){
            while(true) {
                delay(1000)
                randomNumber = random()
            }
            // The coroutine will automatically stop when the coroutine scope stops
            // (i.e. when the App() instance is not used anymore).
            // (bad solution in Android due to runtime configuration changes)
        }
        
    }
    
    Column(modifier = Modifier.fillMaxSize()) {
        
        Button(onClick = {
            counter++
        }) {
            Text(text = counter.toString())
        }
        
        Button(onClick = {}) {
            Text(text = randomNumber.toString())
        }
        
    }
    
}
```

## Example of using `ViewModel`
```kt
class AppViewModel() : ViewModel(){
    
    // No need to use remember(), since view models survive recompositions.
    // No need to use rememberSaveable, since view models survive runtime configuration changes.
    // and runtime configuration changes.
    var counter by mutableStateOf(0)
    var randomNumber by mutableStateOf(0.0)
    
    init {
        
        // ViewModelScope will stop when the view model is not used by anyone.
        viewModelScope.launch(Dispatchers.IO) {
            while(true) {
                delay(3000)
                randomNumber = random()
            }
        }
        
    }
    
    fun generateRandomNumber(){
        
        viewModelScope.launch(Dispatchers.IO) {
            delay(100)
            randomNumber = random()
        }
        
    }
    
}

@Composable
fun App(){
    
    // Get a view model that survives runtime configuration changes.
    val model: AppViewModel = viewModel()
    
    Column(modifier = Modifier.fillMaxSize()) {
        
        Button(onClick = {
            model.counter++
        }) {
            Text(text = model.counter.toString())
        }
        
        Button(onClick = {
            model.generateRandomNumber()
        }) {
            Text(text = model.randomNumber.toString())
        }
        
    }
    
}
```

### Example of not using Jetpack Compose in `ViewModel`
```kt
class AppViewModel() : ViewModel(){
    
    // No Jetpack Compose dependency, only Kotlin dependency.
    var counter = MutableStateFlow(0)
    var randomNumber = MutableStateFlow(0.0)
    
    init {
        
        viewModelScope.launch(Dispatchers.IO) {
            while(true) {
                delay(3000)
                randomNumber.value = random()
            }
        }
        
    }
    
    fun generateRandomNumber(){
        
        viewModelScope.launch(Dispatchers.IO) {
            delay(100)
            randomNumber.value = random()
        }
        
    }
    
}

@Composable
fun App(){
    
    val model: AppViewModel = viewModel()
    
    // Tell Jetpack Compose to observe changes to MutableStateFlow in the model.
    val counter by model.counter.collectAsState()
    val randomNumber by model.randomNumber.collectAsState()
    
    Column(modifier = Modifier.fillMaxSize()) {
        
        Button(onClick = {
            model.counter.value++
        }) {
            Text(text = counter.toString())
        }
        
        Button(onClick = {
            model.generateRandomNumber()
        }) {
            Text(text = randomNumber.toString())
        }
        
    }
    
}
```