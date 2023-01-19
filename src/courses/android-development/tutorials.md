# Tutorials
Here you will find material from the different tutorials.

## Tutorial 1: Jetpack Compose Basics
`Text()`, `Box()`, `Row()` and `Column()`.

### Example of using Box
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