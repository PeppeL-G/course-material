const path = require('path')
const settingsRetriever = require('./settings-retriever')
const copyStaticFilesToPublic = require('./copy-static-files-to-public')

function getNavItems(){
	
	const courseSettings = settingsRetriever.getAllCourseSettings()
	
	courseSettings.sort((a, b) => a.name - b.name)
	
	const coursesToShow = courseSettings.filter(c => c.showLink)
	
	const items = coursesToShow.map(c => {
		return {
			text: c.name,
			link: "/courses/"+c.folderName+"/"
		}
	})
	
	return items
	
}

function getSideBarObject(){
	
	const courseSettings = settingsRetriever.getAllCourseSettings()
	
	const sidebarObject = {}
	
	for(const course of courseSettings){
		
		const key = "/courses/"+course.folderName+"/"
		
		sidebarObject[key] = [
			{text: course.name},
			...course.pages,
		]
		
	}
	
	sidebarObject["/"] = [
		""
	]
	
	return sidebarObject
	
}

copyStaticFilesToPublic()

module.exports = {
	base: "/course-material/",
	title: "Course Material",
	themeConfig: {
		docsDir: "src",
		docsRepo: "https://github.com/PeppeL-G/course-material",
		docsBranch: "master",
		editLink: true,
		editLinkText: 'Improve this page!',
		lastUpdatedText: "Last Updated",
		navbar: [{
			text: "Home",
			link: "/"
		}, {
			text: "Courses",
			children: getNavItems(),
		}, {
			text: "Get Help",
			link: "https://github.com/PeppeL-G/course-material/issues"
		}],
		contributors: false,
		sidebarDepth: 2,
		sidebar: getSideBarObject()
	},
	markdown: {
		code: {
			lineNumbers: false,
		}
	},
	plugins: [
		path.resolve(__dirname, './plugins/plugin-title-maker.js'),
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components'),
			},
		],
		[
			'@vuepress/container',
			{
				type: 'exam-question-container',
				before: (info) => `<div class="exam-question-container">`,
				after: () => `</div>`,
			},
		],
		[
			'@vuepress/container',
			{
				type: 'exam-question',
				before: (info) => `<div class="exam-question"><h2>Question</h2>`,
				after: () => `</div>`,
			},
		],
		[
			'@vuepress/container',
			{
				type: 'exam-sample-answer',
				before: (info) => `<div class="exam-sample-answer"><h2>Sample answer</h2>`,
				after: () => `</div>`,
			},
		],
		[
			'@vuepress/container',
			{
				type: 'exam-marking-guidelines',
				before: (info) => `<div class="exam-marking-guidelines"><h2>Marking guidelines</h2>`,
				after: () => `</div>`,
			},
		],
	],
}