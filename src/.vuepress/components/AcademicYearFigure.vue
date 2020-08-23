<template>
	<Figure caption="Study periods and re-exam periods in an academic year. Big circular sectors are study periods, small circular sectors are (re-)exam periods. Blue circle sectors are part of period 1. Green circle sectors are part of period 2. Yellow circle sectors are part of period 3. Red circle sectors are part of period 4.">
		<canvas ref="canvas" width="350" height="350"></canvas>
	</Figure>
</template>

<script>

const circleSectors = [{
	numberOfWeeks: 7,
	title: "Study Period 1",
	color: "blue"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 1",
	color: "blue"
}, {
	numberOfWeeks: 8,
	title: "Study Period 2",
	color: "green"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 2",
	color: "green"
}, {
	numberOfWeeks: 2,
	title: "Winter Holidays",
	color: "purple"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 1",
	color: "blue"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 4",
	color: "red"
}, {
	numberOfWeeks: 4,
	title: "Study Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 1,
	title: "Re-exam Period 2",
	color: "green"
}, {
	numberOfWeeks: 4,
	title: "Study Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 9,
	title: "Study Period 4",
	color: "red"
}, {
	numberOfWeeks: 1,
	title: "Exam Period 4",
	color: "red"
}, {
	numberOfWeeks: 1,
	title: "Re-exam Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 9,
	title: "Summer Holidays",
	color: "purple"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 1",
	color: "blue"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 2",
	color: "green"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 3",
	color: "yellow"
}, {
	numberOfWeeks: 0.5,
	title: "Re-exam Period 4",
	color: "red"
}]

const numberOfWeeks = 52
const startWeek = 34

export default {
	mounted() {
		
		const canvas = this.$refs.canvas
		const context = canvas.getContext("2d")
		
		const width = canvas.clientWidth
		const height = canvas.clientHeight
		
		const centerX = width/2
		const centerY = height/2
		const radius = width/2 - 4
		
		context.strokeStyle = "black"
		context.lineWidth = 5	
		let angleOffset = Math.PI*2 * (startWeek/numberOfWeeks - 0.25)
		
		for(const circleSector of circleSectors){
			
			const angleSize = 2*Math.PI * (circleSector.numberOfWeeks / numberOfWeeks)
			
			
			if(circleSector.color != "purple"){
				
				context.fillStyle = circleSector.color
				
				context.beginPath()
				context.moveTo(centerX, centerY)
				context.arc(
					centerX,
					centerY,
					radius,
					angleOffset,
					angleOffset + angleSize
				)
				context.lineTo(centerX, centerY)
				context.stroke()
				context.fill()
				
			}
			
			angleOffset += angleSize
			
		}
	}
}
</script>

<style scoped lang="stylus">

canvas{
	max-width: 100%;
}

</style>