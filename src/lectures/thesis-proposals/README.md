---
sidebar: auto
navbarTitle: Thesis Proposals
---

# Thesis Proposals
On this page you find thesis proposals by me (Peter Larsson-Green). The proposals are just brainstormed ideas and need to be researched more to figure out if they are suitable for thesis work or not (such as checking wether someone has done something similar already). The tools required to carry out the thesis are not available.

## Laser Pointer Snake
Use a 2*2 m² area on a wall as a board for a multiplayer snake game. Point laser pointers (one color for each player) on the screen to instruct the snakes in which direction to move (towards the pointer). Record the board with a camera to find out directions. Use a projector to show how the snakes have moved. Other games can be implemented too, the main idea is to use laser pointers as controllers, catch where they point using a camera, and then visualize the game using a projector.

Required tools:

* Laser pointers in different colors
* Camera to record the board (e.g. smartphone)
* Projector to visualize game (or TV screen? Or will the screen reflect the laser beam and hit people's eyes?)
* Device to run the game (e.g. computer)

Potential research questions:

* Best way to find the location of the laser pointers on the board?
* What resolution is required for the camera to provide a good gaming experience?
* What resolution is required for the projector to provide a good gaming experience?

## Real ~Space Invaders
Use a 2*2 m² area on a wall as a board for a space invaders similar game. Aliens are slowly moved down, and the player should throw a tennis ball/kick a football to hit and destroy the aliens before the reach the ground. Use a projector to visualize the game, and a camera to find where on the board the ball hits the wall.

Required tools:

* A ball of some kind (tennis ball, football, etc.)
* Camera to record the board (e.g. smartphone)
* Projector to visualize game
* Device to run the game (e.g. computer)

Potential research questions:

* Best way to find the location of the ball on the board when it hit the wall? Calibration needed for different cameras, board sizes and distance between the wall and the camera?
* What resolution is required for the camera to provide a good gaming experience?
* What resolution is required for the projector to provide a good gaming experience?

## Predict Chanterelles Location
Mark on a satellite map where chanterelles grow. Use machine learning to train a model to recognize where chanterelles grow. 

Required tools:

* A lot of known locations where chanterelles grow (I don't have any!)
* A satellite map (e.g. from Google Maps)

Potential research questions:

* Can a machine learned model be trained to recognize where chanterelles grow just by using a satellite image?
* Does the faulty predictions have anything in common that potentially explains why they are faulty?

## Navigating Roads without GPS Receivers
GPS receivers are great when navigating from Point A to Point B, but what if they would suddenly stop working? Can the sensors on a smartphone alone provide enough information to navigate you from Point A to Point B, given that you start at Point A, and that the sensor data for the roads has been gathered from before? The thesis is about investigating if sensors on a smartphone (magnetometer, accelerometer, etc.) can be used to navigate you from Point A to Point B.

Required tools:

* A smartphone
* A vehicle (car, bike, etc.) for testing (walking/running might work)

Potential research questions:

* While travelling on a road, will the sensor data from smartphones vary enough from different parts of the road to recognize the same pattern when travelling there again?
* Are sensor readings from smartphones while travelling on roads unique enough so sensor readings from a ~30 second ride on a road can identify which road the user is travelling on?