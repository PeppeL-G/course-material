const fs = require('fs')
const path = require('path')

exports.getAllCourseSettings = function(){
	
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

exports.getCourseSettingsByFolderName = function(folderName){
	
	return exports.getAllCourseSettings().find(
		c => c.folderName == folderName
	)
	
}