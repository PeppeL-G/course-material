---
sidebar: auto
---
<SetTitle title="Introduction to Script Programming 2020" />

# Exam 2021-02-18
Here you find sample answers and grading guidelines to the questions on the exam 2021-02-18.

## Question 8
::: warning Question
Below is a program that should:

1. Ask the user to enter her name.
2. Ask the user to enter a positive integer.
3. Print the user's name as many times as the number she entered.

```python
name = input("Enter your name: ")
times_to_print = input("Enter a positive integer: ")
for i in range(times_to_print):
    print(name[i])
```

When Claire runs the program, it does not work as intended. Explain why the program doesn't work they way it should, and suggest a solution to make it work (no need to write any Python code, describing the changes using words is enough, but be detailed).
:::

::: tip Sample Answer
There are two problems with the code:

1. `range(times_to_print)` will crash, since `times_to_print` will be a string containing the integer the user entered.
2. Inside the loop, `name[i]` is not what should be printed (that would only print a single letter in the name).

Changes needed to be made to make the code work:

1. Change `range(times_to_print)` to `range(int(times_to_print))`.
2. Change `print(name[i])` to `print(name)`.
:::

::: danger Marking Guidelines
* Each problem: 0.25 points.
* Each required change: 0.25 points.
:::

## Question 10
::: warning Question
Write the following code:

```python
my_list = [c+c for c in "abcdef"]
```

Using a for loop (and the other things you need) instead of a list comprehension expression. Your own code should have the exact same meaning as the code above.
:::

::: tip Sample Answer
```python
my_list = []
for c in "abcdef":
    my_list.append(c+c)
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Correct syntax, one wrong expression: 0.5 points.
* Extra variable created: -0.25 points.
:::

## Question 11
::: warning Question
Write the following code:

```python
list = [-x for x in get_numbers() if is_positive(x)]
```

Using a for loop (and the other things you need) instead of a list comprehension expression. Your own code should have the exact same meaning as the code above.
:::

::: tip Sample Answer
```python
list = []
for x in get_numbers():
    if is_positive(x):
        list.append(-x)
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Correct syntax, one wrong expression: 0.5 points.
* Missing single colon: -0.1 points.
:::

## Question 12
::: warning Question
Here is a quite complex structure with information about the population in different areas:

```python
populations = {
    "countries": [
        {"name": "Sweden", "population": 9903000},
        {"name": "Finland", "population": 5495000},
        {"name": "Norway", "population": 5233000}
    ],
    "cities": [
        {"name": "Stockholm", "population": 789024},
        {"name": "Jönköping", "population": 122952}
    ]
}
```

Given this structure, write **an expression** that evaluates to the population of the country with the name `Stockholm`, i.e. `789024`.

**Note**: Do not write a statement, and simply writing `789024` is of course not OK; the value needs to be retrieved from the structure.
:::

::: tip Sample Answer
`populations["cities"][0]["population"]`
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
:::

## Question 13
::: warning Question
Suggest how the following data in Python:

```python
team = {"name": "Arsenal", "city": "London"}
```

Can be written in XML code instead.
:::

::: tip Sample Answer
```xml
<team>
    <name>Arsenal</name>
    <city>London</city>
</team>
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Close tags wrong: -0.25 points
:::

## Question 14
::: warning Question
Suggest how the following data in Python:

```python
countries = [
   {"name": "Arsenal", "city": "London"},
   {"name": "Tottenham", "city": "London"},
   {"name": "Elfsborg", "city": "Borås"}
]
```

Can be written in CSV format. Do not write any extra characters not needed, but use as few characters as possible.
:::

::: tip Sample Answer
```
Arsenal,London
Tottenham,London
Elfsborg,Borås
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Uses extra characters not needed: -0.25 points.
:::

## Question 15
::: warning Question
The following code crashes when it's executed.

```python
def read_name():
   name = input("Enter name: ")
def print_name():
   print("Your name is "+name)
read_name()
print_name()
```

Explain why it crashes, and suggest what changes that needs to be made to make it work. Your solution should contain one function for reading the name from the user and one to print the name the user entered.
:::

::: tip Sample Answer
The problem is that `name` is a local variable that only exists in the `read_name()` function. When `print_name()` tries to access the `name` variable, it doesn't exist here, and the program will crash.

Usually functions return back the value they should compute, and when a function needs access to a value it doesn't have access to you pass the value as an argument to the function. So to solve the problem one should use something like this:

```python
def read_name():
   return input("Enter name: ")
def print_name(name):
   print("Your name is "+name)
name = read_name()
print_name(name)
```
:::

::: danger Marking Guidelines
Problem explanation: 0.5 points.
Solution suggestion: 0.5 points.
:::

## Question 17
::: warning Question

Implement the function `get_abbreviation`, which receives a string and should return the abbreviation of that string. Your function should support the following abbreviations:

| String | Abbreviation |
|---|---|
| et cetera | etc. |
| with | w/ |
| you | u |

If the string is none of the strings found in the table above, return the string itself.

Sample usage:

```
get_abbreviation("with")   →   "w/"
get_abbreviation("as soon as possible")   →   "as soon as possible"
```
:::

::: tip Sample Answer
```python
abbreviations = {
    "et cetera": "atc.",
    "with": "w/",
    "you": "u"
}
def get_abbreviation(string):
    if string in abbreviations:
        return abbreviations[string]
    else:
        return string
```
:::

::: danger Marking Guidelines
* Correct solution: 1 point.
* Each bad parameter/variable name: -0.1 points.
* Does not handle the "abbreviation not found" case: -0.5 points.
* Use () instead of {} to read from dict: -0.25 points.
* Initiliazes dict wrong: -0.25 points.
:::

## Question 18
::: warning Question
Write a program that keeps asking the user to enter an integer until the user enters `stop`. The program should then print the sum of the lowest and highest integer the user entered. When running the program, it can look like this (bold text represents text entered by the user).

Enter an integer or stop: **2**\
Enter an integer or stop: **6**\
Enter an integer or stop: **4**\
Enter an integer or stop: **stop**\
The sum of the lowest and highest integer is 8.

**Note**: The output should look precisely as in the example above (including white-spaces, but with the exception of the boldness from the input, of course).

**Note**: You can expect the user to actually enter a number or stop (no error handling needed).

**Note**: You can expect the user to enter at least two numbers.
:::

::: tip Sample Answer
```python
# Read all the numbers
entered_text = ""
entered_numbers = []
while entered_text != "stop":
    entered_text = input("Enter an integer or stop: ")
    if entered_text != "stop":
        entered_numbers.append(int(entered_text))

# Find lowest and highest.
lowest = entered_numbers[0]
highest = entered_numbers[0]

for number in entered_numbers:
    if number < lowest:
        lowest = number
    if highest < number:
        highest = number

# Print the sum of the lowest and highest.
sum = lowest + highest
print("The sum of the lowest and highest integer is "+str(sum)+".")
```
:::

::: danger Marking Guidelines
* Correct solution: 2 points.
* Problem with int() input: -0.5 points.
* Each poorly named variable: -0.1 points.
* Indentation error: -0.5 points.
* Wrong output: -0.5 points.
* Implement function instead of program: -0.5 points.
:::

## Question 19
::: warning Question
Implement the function `is_sum_at_least_100`, which receives a list of numbers, and returns:

* `true` if the sum of the numbers is equal to or greater than 100.
* `false` otherwise.

Write two different implementations of the function: one using (at least) one while loop, and another one using (at least) one for loop.

Sample usage:

```
is_sum_at_least_100([50, 50, 20])   →  true
is_sum_at_least_100([50, 50, -20])  →  false
is_sum_at_least_100([])             →  false
```
:::

::: tip Sample Answer
```python
def is_sum_at_least_100(numbers):
    
    sum = 0
    
    for number in numbers:
        sum = sum + number
    
    return 100 <= sum
```
```python
def is_sum_at_least_100(numbers):
    
    sum = 0
    i = 0
    
    while i < len(numbers):
        sum = sum + numbers[i]
        i = i + 1
    
    return 100 <= sum
```
:::

::: danger Marking Guidelines
* Correct solution with for loop: 1 point.
* Correct solution with while loop: 1 point.
* Each function computing products instead of sum: -0.5 points.
* Returns `True` too early (list can contain negative numbers): -0.25 points.
* Each misspelled variable name: -0.1 points.
* Multiplying lists: -0.25 points.
* In for loop, iterate over indexes instead of numbers: -0.25 points.

**Note**: Using `false`/`true` instead of `False`/`True` should really be punished with -0.1 points each, but since I wrote those wrong in the question, this will be ignored.
:::

## Question 20
::: warning Question
Implement the function `int_to_digits`, which receives a positive integer, and should return a list containing the digits in that integer.

Sample usage:

```
int_to_digits(123)   →  [1, 2, 3]
int_to_digits(5398)  →  [5, 3, 9, 8]
```
:::

::: tip Sample Answer
```python
def int_to_digits(the_int):
    
    digits = []
    
    for digit in str(the_int):
        digits.append(int(digit))
    
    return digits

```
:::

::: danger Marking Guidelines
* Correct solution: 2 points.
* Tries to iterate over digits in an int: -1.5 points.
* Produced lists contains strings, and not ints: -0.5 points.
:::

## Question 21
::: warning Question
Given the following data about some <del>movies</del> <ins>houses</ins>:

```python
houses = [
   {"owner": "Alice", "name": "Alice's Palace", "size": 320, "number_of_rooms": 9},
   {"owner": "Alice", "name": "Alice's Home",   "size": 84,  "number_of_rooms": 3},
   {"owner": "Alice", "name": "Alice's Cabin",  "size": 30,  "number_of_rooms": 1},
   {"owner": "Bob",   "name": "Bob's Home",     "size": 94,  "number_of_rooms": 4},
   {"owner": "Bob",   "name": "Bob's Cabin",    "size": 30,  "number_of_rooms": 1}
]
```

Write code that computes and prints the name of the human that owns the most number of rooms in total.

**Note**: Your code should still work as expected if one adds/removes houses to/from the list. Alice and Bob are not the only ones who can own a house.
:::

::: tip Sample Answer
```python
# Compute how many rooms each owner has.
sum_of_rooms = {} # Key is name of owner, value is sum of rooms, e.g. sum_of_rooms["Alice"] = 13, etc.

for house in houses:
    
    # Check if we haven't seen this owner before.
    if house["owner"] not in sum_of_rooms:
        sum_of_rooms[house["owner"]] = 0
    
    sum_of_rooms[house["owner"]] += house["number_of_rooms"]

# Find the owner with most rooms.
most_rooms_name = ""
most_rooms_count = -1
for owner in sum_of_rooms:
    if most_rooms_count < sum_of_rooms[owner]:
        most_rooms_name = owner
        most_rooms_count = sum_of_rooms[owner]

print(most_rooms_name+" has most rooms.")
```
:::

::: danger Marking Guidelines
Correct solution: 2 points.
:::

## Question 22
::: warning Question
The class `MovieCollection` represents a collection of movies. It has the following constructor/methods:

| Constructor/Method | Description |
|---|---|
| `MovieCollection()` | Creates a new empty `MovieCollection`. |
| `add_movie(name, runtime)` | Adds the movie with the given `name` and `runtime` (length in minutes) to the collection. |
| `get_number_of_movies()` | Returns the number of movies in the collection. |
| `get_total_runtime()` | Returns the sum of the runtime of all movies in the collection. |
| `get_average_runtime()` | Returns the average runtime of the movies in the collection. |

Write a program making use of the class. In the program, you should continue to ask the user to enter the name and runtime of a movie to be added to the `MovieCollection` until the user don't want to add any more. Then you should display the average runtime of the movies in the collection on the screen.

Sample usage:

<div style="font-family: monospace; padding-left: 2em;">

Enter one more movie? **Yes**\
Enter movie name: **Catch me if you can**\
Enter movie runtime: **115**\
Enter one more movie? **Yes**\
Enter movie name: **See you later**\
Enter movie runtime: **75**\
Enter one more movie? **No**\
Average runtime is 95.

</div>

:::

::: tip Sample Answer
```python
movie_collection = MovieCollection()
one_more_answer = "yes"

while one_more_answer == "yes":
    
    one_more_answer = input("Enter one more movie? ")
    
    if one_more_answer == "yes":
        movie_name = input("Enter movie name: ")
        movie_runtime = int(input("Enter movie runtime: "))
        movie_collection.add_movie(movie_name, movie_runtime)

print("Average runtime is "+str(movie_collection.get_average_runtime())+".")
```
:::

::: danger Marking Guidelines
* Correct solution: 2 points.
:::

## Question 23
::: warning Question
The class `MovieCollection` represents a collection of movies. It has the following constructor/methods:

| Constructor/Method | Description |
|---|---|
| `MovieCollection()` | Creates a new empty `MovieCollection`. |
| `add_movie(name, runtime)` | Adds the movie with the given `name` and `runtime` (length in minutes) to the collection. |
| `get_number_of_movies()` | Returns the number of movies in the collection. |
| `get_total_runtime()` | Returns the sum of the runtime of all movies in the collection. |
| `get_average_runtime()` | Returns the average runtime of the movies in the collection. |

Implement the `MovieCollection` class per the description above.
:::

::: tip Sample Answer
```python
class MovieCollection:

    def __init__(self):
        self.movies = []
    
    def add_movie(self, name, runtime):
        self.movies.append({
            "name": name,
            "runtime": runtime
        })
    
    def get_number_of_movies(self):
        return len(self.movies)
    
    def get_total_runtime(self):
        
        total_runtime = 0
        
        for movie in self.movies:
            total_runtime += movie["runtime"]
        
        return total_runtime
    
    def get_average_runtime(self):
        return self.get_total_runtime() / self.get_number_of_movies()
```
:::

::: danger Marking Guidelines
* Correct solution: 2 points.
:::