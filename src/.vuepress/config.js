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
		}],
		sidebarDepth: 2,
		sidebar: {
			"/courses/client-server-communication/": [
				"",
				"course-syllabus",
				"study-guide",
				"lab-instructions",
				"tutorials",
				"project-instructions",
				"project-grading-guidelines",
				"time-plan"
			],
			"/courses/git/": [
				"",
			],
			"/courses/web-development-fundamentals/": [
				"",
				"course-syllabus",
				"study-guide",
				"exercises",
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