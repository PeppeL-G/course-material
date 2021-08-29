const path = require('path')
const moment = require('moment')
const copyStaticFilesToPublic = require('./copy-static-files-to-public')
const settingsRetriever = require('./settings-retriever')

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
		
		sidebarObject[key] = course.pages
		
	}
	
	sidebarObject["/"] = [
		""
	]
	
	return sidebarObject
	
}



copyStaticFilesToPublic()

module.exports = {
	bundler: '@vuepress/vite',
	base: "/course-material/",
	title: "Course Material",
	themeConfig: {
		docsDir: "src",
		repo: "https://github.com/PeppeL-G/course-material",
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
		sidebarDepth: 2,
		sidebar: getSideBarObject(),
	},
	plugins: [
		'@vuepress/git',
		path.resolve(__dirname, './plugins/plugin-title-maker.js'),
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components'),
			},
		],
	],
}