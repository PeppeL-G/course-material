<template>
	<span class="whole">
		<span v-if="previous" class="decrementFigureNumber"></span>
		<span class="figureNumber"></span>
		<span v-if="previous" class="incrementFigureNumber"></span>
	</span>
</template>

<script>
export default {
	props: {
		previous: {
			type: Boolean,
			default: false
		}
	}
}
</script>


<style scoped>
	
	.figureNumber::before{
		content: "Figure " counter(figureNumber);
	}
	
	.incrementFigureNumber{
		counter-increment: figureNumber;
	}
	
	.decrementFigureNumber{
		counter-increment: figureNumber -1;
	}
</style>