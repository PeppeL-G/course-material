import fs from 'node:fs'
import path from 'node:path'

export function copyStaticFilesToPublic(){
	
	const doNotCopyFilenames = [
		new RegExp("^.*\\.md$"),
		new RegExp("^settings\\.js$")
	]
	
	const doNotCopyFolderNames = [
		new RegExp("^\\.vuepress$")
	]
	
	const pathToPublicFolder = path.resolve(__dirname, "public")
	const pathToSrcFolder = path.resolve(__dirname, "../")
	
	if(fs.existsSync(pathToPublicFolder)){
		fs.rmSync(pathToPublicFolder, {recursive: true}) // Requires latest version of node.
	}
	
	copyAllStaticFiles(pathToSrcFolder, pathToPublicFolder)
	
	function copyAllStaticFiles(pathToSourceFolder, pathToDestinationFolder){
		
		if(!fs.existsSync(pathToDestinationFolder)){
			fs.mkdirSync(pathToDestinationFolder)
		}
		
		const names = fs.readdirSync(
			pathToSourceFolder
		)
		
		for(const name of names){
			
			const pathToSource = path.resolve(
				pathToSourceFolder,
				name
			)
			const pathToDestination = path.resolve(
				pathToDestinationFolder,
				name
			)
			
			if(fs.lstatSync(pathToSource).isDirectory()){
				
				if(!doNotCopyFolderNames.some(regexp => regexp.test(name))){
					
					copyAllStaticFiles(pathToSource, pathToDestination)
					
				}
				
			}else{
				
				if(!doNotCopyFilenames.some(regexp => regexp.test(name))){
					
					fs.copyFileSync(pathToSource, pathToDestination)
					
				}
				
			}
			
		}
		
	}
	
}