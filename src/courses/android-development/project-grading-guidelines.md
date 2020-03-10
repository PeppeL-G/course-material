# Project Grading Guidelines
This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades. For example, to be able to get `Grade 5`, you also need to follow the guidelines for `Grade 3` and `Grade 4`.

::: warning Note
This page does only contain *guidelines* for how your work will be graded. When we grade your work we'll make an assessment of your entire work, which is not limited to these guidelines, so **do not use these guidelines as a checklist for a certain grade**. Instead, rather see them as minimum requirements to be able to get a certain grade.
:::

## Indentation Convention
The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see [Wikipedia's article on indentation style](https://en.wikipedia.org/wiki/Indentation_style)

<GradingGuideline
	gradeU="No indentation convention has been used or there exists too many places where the convention has not been followed."
	grade3="The same indentation convention is mostly used, but at a few places the convention has not been followed."
	grade4="Each file correctly use an indentation convention, but different conventions are used in different files, and there's no consistency in when to use which one."
	grade5="The same indentation convention is consistently used across all files of the same type."
/>

## Coding Style
The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see [Wikipedia's article on coding style](https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style). [xkcd has a web comic about it.](https://xkcd.com/1513/)

<GradingGuideline
	gradeU="No coding style has been used or there exists too many places where the style has not been followed."
	grade3="The same coding style is mostly used, but at a few places the style has not been followed."
	grade4="The same coding style is consistently used in each file, although individual files (even of the same type) use different coding styles."
	grade5="The same coding style is consistently used across all files of the same type."
/>

## Naming Convention
The convention used when naming variables, constants, functions, methods, files, etc. For more information, see [Wikipedia's article on naming convention](https://en.wikipedia.org/wiki/Naming_convention_(programming)).

<GradingGuideline
	gradeU="No naming convention has been used or there exists too many places where the convention has not been followed."
	grade3="The same naming convention is mostly used, but at a few places the convention has not been followed."
	grade4="The same naming convention is consistently used in each file, although individual files (even of the same type) use different naming conventions."
	grade5="The same naming convention is consistently used across all files of the same type."
/>

## Mnemonic names
The names used (on variables, functions, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see [Chapter 2.12 in Python for Everybody (Severance)](https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names).

<GradingGuideline
	gradeU="Many names are not mnemonic."
	grade3="Many names (at least 90%) are mnemonic."
	grade4="Almost all names (at least 95%) are mnemonic."
	grade5="All names (100%) are mnemonic."
/>

## Magic Numbers
Avoid using [magic numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants) in the code. Does not only apply to numbers, but all values that are better put in descriptive constants.

<GradingGuideline
	gradeU="3 or more magic numbers exist."
	grade3="At most 2 magic numbers exist."
	grade4="At most 1 magic number exists."
	grade5="No magic numbers exist."
/>

## Error Handling
Handling of various errors that can occur when the user is using the application, such as validation errors, no network connection, the device doesn't have a camera, the user doesn't grant you a permission, etc.

<GradingGuideline
	gradeU="Errors are not handled, or the error messages shown are confusing to the user."
	grade3="Handles and display error messages for at least 90% of the errors that can occur."
	grade4="Handles and display error messages for at least 95% of the errors that can occur."
	grade5="Handles and display error messages for all errors that can occur."
/>

## Graphical User Interface
The logical placement and usage of components (buttons, input fields, etc.), the support for different screen sizes, how intuitive it is to use the application, etc.

<GradingGuideline
	gradeU="-"
	grade3="The user understands how to use the application without external instructions."
	grade4="-"
	grade5="-"
/>

## Fundamental application components
The usage of fundamental application components.

<GradingGuideline
	gradeU="-"
	grade3="Fundamental application components are used."
	grade4="Fundamental application components are mostly used properly, such as code belonging in a service is written in a service."
	grade5="Fundamental application components are used properly, including the communication between them (for example no global variables)."
/>

## Report
The quality of the report.

<GradingGuideline
	gradeU="The reader does not get a good understanding of what the project is about (the problem and the solution) nor how the solution works/will be used/has been implemented."
	grade3="The readers gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences."
	grade4="Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter."
	grade5="Everything with the report is great."
/>

## Extra Functionalities
Implement extra functionalities listed in the table below.

<GradingGuideline
	gradeU="Not applicable."
	grade3="Implement extra functionalities worth at least 3 points in total."
	grade4="Implement extra functionalities worth at least 7 points in total."
	grade5="Implement extra functionalities worth at least 11 points in total."
/>

::: warning Note!
You may not get all the points for the functionality you implement. You need to implement the functionality in a good way to get all the points for that functionality.
:::

<table>
    <thead>
        <tr>
            <th>Points</th>
            <th>Feature</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Multiple languages</td>
            <td>
                Full support for at least two languages everywhere (English + one more):
                <ul>
                    <li>No strings shown to the user hardcoded in your Kotlin/Java code (use string resources).</li>
                    <li>No strings shown to the user hardcoded in your XML code (use string resources).</li>
                    <li>Text entered by the users will of course only be in one language.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>Runtime permissions</td>
            <td>On newer versions of Android, ask for the permissions you need at runtime (when you need them). If you don't get them, deal with it in a good way.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Runtime configuration changes</td>
            <td>
                Handle runtime configuration changes in a good way throughout the entire application, such as:
                <ul>
                    <li>HTTP requests are not re-sent.</li>
                    <li>Bluetooth connections are maintained.</li>
                    <li>Results of long running operations are cached.</li>
                </ul>
                Use model fragments, ViewModels, or whatever you prefer.
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>Widget</td>
            <td>Create a widget the user can use from the launcher. Too simple widgets (such as only "click on the widget to start an activity") are not accepted.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Foreground service</td>
            <td>Make use of a foreground service in a suitable way (important background computations, geofences, Bluetooth connections, etc.).</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Re-using fragments</td>
            <td>Re-use none-elementary fragments you have created, such as one fragment showing a list of items, another one showing a single item, and then show one fragment at a time on a small screen and show both side-by-side on a large screen.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Third-party authentication</td>
            <td>Let users login with their account from another company, such as Google or Facebook.</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Loading indicators</td>
            <td>When the application starts a long running operation/waits for something, show a loading indicator of some kind reflecting this. Remove the loading indicator afterwards.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Alarm Scheduling</td>
            <td>Schedule alarms/jobs that notifies the user at certain times, for example 15 minutes before a meeting starts. If the meeting is cancelled or the time for the meeting is changed, the scheduled alarms of course need to be deleted or updated too. Structure your solution well, so there's no need to copy-paste similar code if you for example want to create new meetings at multiple different places in your application.</td>
        </tr>
        <tr>
            <td>?</td>
            <td>Own suggestions</td>
            <td>Come up with your own suggestions of extra functionality. Describe the functionality and email the examiner for approval at [Peter.Larsson-Green@ju.se](mailto:Peter.Larsson-Green@ju.se).</td>
        </tr>
    </tbody>
</table>