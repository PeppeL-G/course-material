import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

export async function getAllCourseSettings(){
	
	const pathToCourseFolders = path.resolve(__dirname, "../courses")
	
	const courseFolderNames = fs.readdirSync(
		pathToCourseFolders
	)
	
	const courseSettings = await Promise.all(courseFolderNames.map(async courseFolderName => {
		
		const pathToCourseFolder = path.resolve(pathToCourseFolders, courseFolderName)
		
		const courseSettings = (await import(
			pathToFileURL(
				path.resolve(
					pathToCourseFolder,
					"settings.js"
				)
			).href
		)).default
		courseSettings.folderName = courseFolderName
		
		return courseSettings
		
	}))
	
	return courseSettings
	
}

export async function getCourseSettingsByFolderName(folderName){
	
	return (await getAllCourseSettings()).find(
		c => c.folderName == folderName
	)
	
}