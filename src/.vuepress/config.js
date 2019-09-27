const moment = require('moment')

module.exports = {
	base: "/course-material/",
	themeConfig: {
		docsDir: "src",
		repo: "https://github.com/PeppeL-G/course-material",
		editLinks: true,
		editLinkText: 'Improve this page!',
		lastUpdated: "Last Updated",
		activeHeaderLinks: false,
		nav: [{
			text: "Courses",
			items: [{
				text: "Client-Server Communication",
				link: "/courses/client-server-communication/",
			}, {
				text: "Git",
				link: "/courses/git/",
			}, {
				text: "Web Development Fundamentals",
				link: "/courses/web-development-fundamentals/",
			}],
		}, {
			text: "About",
			link: "/"
		}, {
			text: "Get Help",
			link: "https://github.com/PeppeL-G/course-material/issues"
		}],
		sidebarDepth: 2,
		sidebar: {
			"/courses/client-server-communication/": [
				"",
				"course-syllabus",
				"study-guide",
				"lab-instructions",
				"tutorials",
				"lectures",
				"sample-exam",
				"project-instructions",
				"project-grading-guidelines",
				"time-plan"
			],
			"/courses/git/": [
				"",
			],
			"/courses/introduction-to-script-programming/": [
				"",
				"course-syllabus",
				"study-guide",
				"exercises",
				"laboratory-work",
				"written-examination",
				"time-plan"
			],
			"/courses/web-development-fundamentals/": [
				"",
				"course-syllabus",
				"study-guide",
				"exercises",
				"lectures",
				"tutorials",
				"project-instructions",
				"project-grading-guidelines",
				"time-plan"
			],
			"/": [
				"",
			]
		},
	},
	plugins: [['@vuepress/last-updated', {
		transformer(timestamp, lang){
			return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
		}
	}]],
}