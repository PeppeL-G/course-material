const settingsRetriever = require('../settings-retriever')

module.exports = function(options={}, context){
	
	return {
		
		extendPageData($page){
			
			if($page.regularPath.startsWith("/courses/")){
				
				const courseFolderName = $page.regularPath.substr(
					"/courses/".length
				).split("/")[0]
				
				const courseSettings = settingsRetriever.getCourseSettingsByFolderName(
					courseFolderName
				)
				
				$page.courseSettings = courseSettings
				
			}
			
		}
		
	}
	
}