# Lab 1 Example
Here's a short example of another system designed in a similar way as described in Lab 1. The system here is a simple Ping Pong game (each user is expected to have their own instance of the system) users can play either against each other (over Bluetooth) or the computer . There's also a highscore system for playing against the computer, and there should exists three different level of difficulties (easy, medium and hard) on the computer.

## Actors
* User (Primary)

## Goals
| Actor | Goal |
|-------|------|
| User | Play VS Computer |
| User | Submit Highscore |
| User | View Highscores |
| User | Play VS Player as Host |
| User | Play VS Player as Joiner |

## Use-Case Diagram
<FigureNumber /> below shows a use-case diagram of the Ping Pong Game (System under Design).

<Figure caption="Use-case diagram of the Ping Pong Game (System under Design).">
<img src="static-files/lab-1/use-case-diagram.jpeg" alt="Use-case diagram of the Ping Pong Game (System under Design).">
</Figure>

## Brief Descriptions
Below are brief descriptions of all use-cases.

### Play VS Computer
The user selects the option to play VS the computer. The user selects the game difficulty, and then the game starts. 

### Submit Highscore
The user <u>Play VS Computer</u>. After the game the user tells the system she wants to add her score to the highscore list together with her name (which she enters). 

### View Highscore
The user selects the option to view the highscore. The user is then presented the top 10 highscores and names in the game.

### Play VS Player as Host
The user selects the option to play VS another player as the host. The user sees a list of nearby devices that want to <u>Play VS Player as Joiner</u>. The user selects one of them, and then the game starts.

### Play VS Player as Joiner
The user selects the option to join a <u>Play VS Player as Host</u> game. The system waits till another device hosting a game accepts playing against this user, then the game starts.

## Fully Dressed
<table>
    <tr>
        <th>Use-Case Name</th>
        <td>Play VS Player as Host</td>
    </tr>
    <tr>
        <th>Scope</th>
        <td>The Ping Pong Game</td>
    </tr>
    <tr>
        <th>Level</th>
        <td>User-goal</td>
    </tr>
    <tr>
        <th>Primary Actor</th>
        <td>User</td>
    </tr>
    <tr>
        <th>Stakeholders and Interests</th>
        <td>
            <ul>
                <li><b>User</b>, wants to play the game against another user.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Preconditions</th>
        <td>
            <ul>
                <li>Two different devices running the system.</li>
                <li>Both devices must support Bluetooth.</li>
                <li>Both devices must be close to each other.</li>
                <li>Bluetooth may not be used for anything else on the devices.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Success Guarantee</th>
        <td>The game has been played on both systems over Bluetooth.</td>
    </tr>
    <tr>
        <th>Main Success Scenario</th>
        <td>
            <ol>
                <li>The user selects the option to play against another player as the host.</li>
                <li>The system tells the user to turn on Bluetooth on the device.</li>
                <li>The user turns on Bluetooth on the device.</li>
                <li>The system shows a list to the user of nearby Bluetooth devices that are trying to <u>Play VS Player as Joiner</u> (updated continuously).</li>
                <li>The user selects the Bluetooth device she wants to play against.</li>
                <li>The device connects to the selected device using Bluetooth.</li>
                <li>The game starts.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Extentions</th>
        <td>
            <ul style="list-style-type: none; padding-left: 0;">
                <li>
                    2a. Bluetooth is already turned on.
                    <ol style="margin-left: 16px;">
                        <li>Continue to 4.</li>
                    </ol>
                </li>
                <li>
                    4a. No nearby devices found.
                    <ol style="margin-left: 16px;">
                        <li>Don't show an empty list, tell the user the system is searching for nearby devices, show the list when at least 1 device has been found.</li>
                    </ol>
                </li>
                <li>
                    6a. Can't connect to selected device.
                    <ol style="margin-left: 16px;">
                        <li>Show an error message to the user.</li>
                        <li>Take the user back to 4.</li>
                    </ol>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Special Requirements</th>
        <td>The devices must support Bluetooth</td>
    </tr>
    <tr>
        <th>Technology and Data Variations List</th>
        <td>
            <ul>
                <li>Bluetooth</li>
                <li>The protocol PPP (the Ping Pong Protocol) specifies which commands that are sent between the devices.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Frequency of Occurrence</th>
        <td>At most one at a time.</td>
    </tr>
    <tr>
        <th>Miscellaneous</th>
        <td>
            <ul>
                <li>Need to specify which Bluetooth version to support.</li>
                <li>Strong connection to the use-case <u>Play VS Player as Joiner</u></li>
            </ul>
        </td>
    </tr>
</table>

## Sequence Diagram
A sequence diagram for <u>Play VS Player as Host</u> is found in <FigureNumber /> below.

<Figure caption="Sequence diagram for Play VS Player as Host.">
<mermaid>
sequenceDiagram
  participant User
  participant Device
  User->>Device: Play Bluetooth game as host
  Device->>User: Please turn on Bluetooth
  User->>Device: Turn on Bluetooth
  loop Until the user selects device
    Device->>Device: Search for devices
    Device->>User: Found devices
  end
  User->>Device: Selected device
  Device->>Device: Connect to selected device
  Device->>User: Play!
</mermaid>
</Figure>