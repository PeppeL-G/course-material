const moment = require('moment')

module.exports = {
	base: "/course-material/",
	title: "Peter's Course Material",
	themeConfig: {
		docsDir: "src",
		repo: "https://github.com/PeppeL-G/course-material",
		editLinks: true,
		editLinkText: 'Improve this page!',
		lastUpdated: "Last Updated",
		nav: [{
			text: "Courses",
			items: [{
				text: "Client-Server Communication",
				link: "/courses/client-server-communication/",
			}],
		}],
		sidebarDepth: 2,
		sidebar: {
			"/courses/client-server-communication/": [
				"",
				"laboratory-work",
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