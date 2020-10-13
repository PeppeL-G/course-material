# Time Plan
The <span style="background-color: aqua; display: inline-block; padding: 0 8px; font-weight: bold;">Exercise</span> and <span style="background-color: yellow; display: inline-block; padding: 0 8px; font-weight: bold;">Lab</span> columns indicate what you are expected to work on each day. 

<TimePlan
	:startDate='new Date(2020, 9, 19)'
	:columns='[
		{key: "t", name: "Lecture", color: "orange"},
		{key: "e", name: "Exercise", color: "aqua"},
		{key: "l", name: "Lab", color: "yellow"},
		{key: "g", name: "Lab session", color: "pink"},
		{key: "i", name: "Important", color: "red"},
	]'
	:rows='[
		// 1
		{e: "Exercise 0"},
		{e: "Exercise 0", t: "Introduction"},
		{e: "Exercise 0", g: "L1"},
		{e: "Exercise 1", g: "L2"},
		{e: "Exercise 1", t: "Tutorial 1"},
		{},
		{},
		// 2
		{l: "Lab 1"},
		{l: "Lab 1", t: "Repetition"},
		{l: "Lab 1"},
		{e: "Exercise 2", g: "L1, L2"},
		{e: "Exercise 2", t: "Tutorial 2"},
		{},
		{},
		// 3
		{l: "Lab 2"},
		{l: "Lab 2", t: "Repetition"},
		{l: "Lab 2", g: "L1"},
		{e: "Exercise 3", g: "L2"},
		{e: "Exercise 3", t: "Tutorial 3"},
		{},
		{},
		// 4
		{l: "Lab 3"},
		{l: "Lab 3", t: "Repetition"},
		{l: "Lab 3"},
		{e: "Exercise 4", g: "L1, L2", i: "Registration Exam Open"},
		{e: "Exercise 4", t: "Tutorial 4"},
		{},
		{},
		// 5
		{l: "Lab 4"},
		{l: "Lab 4", t: "Repetition"},
		{l: "Lab 4", g: "L1"},
		{e: "Exercise 5", g: "L2"},
		{e: "Exercise 5", t: "Tutorial 5"},
		{},
		{},
		// 6
		{l: "Lab 5"},
		{l: "Lab 5", t: "Repetition"},
		{l: "Lab 5"},
		{e: "Exercise 6", g: "L1, L2"},
		{e: "Exercise 6", t: "Tutorial 6"},
		{},
		{},
		// 7
		{l: "Lab 6"},
		{l: "Lab 6"},
		{l: "Lab 6"},
		{l: "Lab 6", g: "L1, L2", i: "Registration Exam Closes"},
		{l: "Lab 6", t: "Sample exam"},
		{},
		{},
		// 8
		{},
		{},
		{},
		{},
		{},
		{},
		{i: "Written Exam"},
	]'
/>
