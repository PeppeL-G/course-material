import { getCourseSettingsByFolderName } from '../settings-retriever'

export function titleMakerPlugin(options={}, context){
	
	return {
		
		name: "vuepress-plugin-title-maker",
		
		extendPageData($page){
			
			if($page.regularPath.startsWith("/courses/")){
				
				const courseFolderName = $page.regularPath.substr(
					"/courses/".length
				).split("/")[0]
				
				const courseSettings = getCourseSettingsByFolderName(
					courseFolderName
				)
				
				$page.courseSettings = courseSettings
				
			}
			
		}
		
	}
	
}