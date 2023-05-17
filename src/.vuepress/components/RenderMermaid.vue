<template>
	<div class="mermaid" v-html="graphSvgCode"></div>
</template>

<script>

const getMermaid = (function(){
	
	let loadMermaidPromise = null
	
	return async function loadMermaid(){
		
		if(loadMermaidPromise == null){
			
			loadMermaidPromise = import("mermaid/dist/mermaid")
			
			const mermaid = await loadMermaidPromise
		
			mermaid.mermaidAPI.initialize({
				startOnLoad: false
			})
			
		}
		
		return await loadMermaidPromise
		
	}
	
})()

export default {
	props: {
		graphDefinition: String
	},
	data(){
		return {
			graphSvgCode: ""
		}
	},
	async	mounted() {
		
		const mermaid = await getMermaid()
		
		const insertSvg = (svgCode, bindFunctions) => {
			this.graphSvgCode = svgCode
		}
		
		const graph = mermaid.mermaidAPI.render(
			'graphDiv',
			this.graphDefinition.trim(),
			insertSvg
		)
		
	}
}
</script>

<style scoped>

.mermaid{
	text-align: center;
}

</style>