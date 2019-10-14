---
sidebar: auto
navbarTitle: Python Modelling
---

# Python Modelling
So, both lists and dicts can be used to store multiple values. When should one use which one? Well, a dict is usually used to represent single entity consisting of multiple values, e.g.:

```python
human = {"name": "Alice", "age": 10}
```

while a list is used to store multiple entities, e.g.:

```python
humans = [
    {"name": "Alice",  "age": 10},
    {"name": "Bob",    "age": 15},
    {"name": "Claire", "age": 20}
}
```

In this lecture we take a look at how we can use this to create a model of a physical thing which our computer then can perform computations on.

<iframe width="560" height="314" src="https://www.youtube.com/embed/u5yb_itnywE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [python-modelling.pdf](python-modelling.pdf)
* [python-modelling.pptx](python-modelling.pptx)