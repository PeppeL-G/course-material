# Time Plan
The <span style="background-color: lime; display: inline-block; padding: 0 8px; font-weight: bold;">Laboratory Work</span> and <span style="background-color: aqua; display: inline-block; padding: 0 8px; font-weight: bold;">Project Work</span> column indicates what you are expected to work on each day. 

<TimePlan
	:startDate='new Date(2019, 7, 26)'
	:columns='[
		{key: "l", name: "Lectures", color: "orange"},
		{key: "s", name: "Lab sessions", color: "yellow"},
		{key: "lw", name: "Laboratory Work", color: "lime"},
		{key: "p", name: "Project Work", color: "aqua"},
		{key: "i", name: "Important", color: "red"},
	]'
	:rows='[
		// 35
		{},
		{s: "Group 1", l: "Introduction", lw: "Part 1"},
		{l: "Tutorial 1: Vue", lw: "Part 1"},
		{s: "Group 2", lw: "Part 1"},
		{lw: "Part 1"},
		{},
		{},
		// 36
		{lw: "Part 1"},
		{l: "Tutorial 2: Vue + Async", s: "Group 1", lw: "Part 2"},
		{lw: "Part 2"},
		{s: "Group 2", lw: "Part 2"},
		{lw: "Part 2"},
		{},
		{},
		// 37
		{lw: "Part 2"},
		{l: "Tutorial 3: REST in Express", s: "Group 1", p: "Part 1, 2"},
		{p: "Part 2"},
		{s: "Group 2", p: "Part 3", i: "Inspera Exam Registration Opens"},
		{p: "Part 3"},
		{},
		{},
		// 38
		{p: "Part 3"},
		{l: "Tutorial 4: SPA Requests", s: "Group 1", p: "Part 4"},
		{p: "Part 4"},
		{s: "Group 2", p: "Part 4"},
		{p: "Part 4"},
		{},
		{},
		// 39
		{p: "Part 5"},
		{l: "Tutorial 5: Security", s: "Group 1", p: "Part 5"},
		{p: "Part 5"},
		{s: "Group 2", p: "Part 5"},
		{p: "Part 6"},
		{},
		{},
		// 40
		{p: "Part 6"},
		{l: "Tutorial 6: Repetition", s: "Group 1", p: "Part 6"},
		{p: "Part 7"},
		{s: "Group 2", p: "Part 7"},
		{p: "Part 7", i: "Deadline Submit Report for Feedback"},
		{i: "Inspera Exam Registration Closes"},
		{},
		// 41
		{p: "Part 8"},
		{l: "Guest Lecture?", s: "Group 1", l: "Guest Lecture?", p: "Part 8"},
		{p: "Part 8"},
		{s: "Group 2", p: "Part 8"},
		{p: "Part 8"},
		{},
		{},
		// 42
		{p: "Part 9, 10", i: "Present Project Work"},
		{p: "Part 10", i: "Inspera Exam"},
		{p: "Part 10"},
		{p: "Part 9, 10", i: "Present Project Work"},
		{p: "Part 9, 10", i: "Present Project Work"},
		{},
		{p: "Part 11", i: "Deadline Submit Project Work"},
	]'
/>
