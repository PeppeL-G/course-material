import { defineUserConfig } from 'vuepress'
import path from 'node:path'
import { getAllCourseSettings } from './settings-retriever'
import { copyStaticFilesToPublic } from './copy-static-files-to-public'
import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { titleMakerPlugin } from './plugins/title-maker-plugin.js'
import { containerPlugin } from '@vuepress/plugin-container'

async function getNavItems(){
	
	const courseSettings = await getAllCourseSettings()
	
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

async function getSideBarObject(){
	
	const courseSettings = await getAllCourseSettings()
	
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

export default defineUserConfig({
	base: "/course-material/",
	title: "Course Material",
	host: false,
	theme: defaultTheme({
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
			children: await getNavItems(),
		}, {
			text: "Get Help",
			link: "https://github.com/PeppeL-G/course-material/issues"
		}],
		contributors: false,
		sidebarDepth: 2,
		sidebar: await getSideBarObject()
	}),
	markdown: {
		code: {
			lineNumbers: true,
		}
	},
	plugins: [
		titleMakerPlugin(),
		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, './components'),
		}),
		containerPlugin({
			type: 'exam-question-container',
			before: (info) => `<div class="exam-question-container">`,
			after: () => `</div>`,
		}),
		containerPlugin({
			type: 'exam-question',
			before: (info) => `<div class="exam-question"><h2>Question</h2>`,
			after: () => `</div>`,
		}),
		containerPlugin({
			type: 'exam-sample-answer',
			before: (info) => `<div class="exam-sample-answer"><h2>Sample answer</h2>`,
			after: () => `</div>`,
		}),
		containerPlugin({
			type: 'exam-marking-guidelines',
			before: (info) => `<div class="exam-marking-guidelines"><h2>Marking guidelines</h2>`,
			after: () => `</div>`,
		}),
	],
})