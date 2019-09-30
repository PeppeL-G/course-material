const moment = require('moment')
const fs = require('fs')
const path = require('path')

function getCourseSettings(){
	
	const pathToCourseFolders = path.resolve(__dirname, "../courses")
	
	const courseFolderNames = fs.readdirSync(
		pathToCourseFolders
	)
	
	const courseSettings = courseFolderNames.map(courseFolderName => {
		
		const pathToCourseFolder = path.resolve(pathToCourseFolders, courseFolderName)
		
		const courseSettings = require(path.resolve(
			pathToCourseFolder,
			"settings.js"
		))
		courseSettings.folderName = courseFolderName
		
		return courseSettings
		
	})
	
	return courseSettings
	
}

function getNavItems(){
	
	const courseSettings = getCourseSettings()
	
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
	
	const courseSettings = getCourseSettings()
	
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
			text: "Courses",
			items: getNavItems(),
		}, {
			text: "About",
			link: "/"
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
	}]],
}