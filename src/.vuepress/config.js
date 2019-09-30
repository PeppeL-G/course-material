const moment = require('moment')
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
			text: "Home",
			link: "/"
		}, {
			text: "Courses",
			items: getNavItems(),
		}, {
			text: "Get Help",
			link: "https://github.com/PeppeL-G/course-material/issues"
		}],
		sidebarDepth: 2,
		sidebar: getSideBarObject(),
	},
	plugins: [['@vuepress/last-updated', {
		transformer(timestamp, lang){
			return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
		}
	}],
		require('./plugins/plugin-title-maker')
	],
}