<template>
	<figure>
		<slot></slot>
		<figcaption>
			{{caption}}
		</figcaption>
		<span class="incrementFigureNumber"></span>
	</figure>
</template>

<script>
	export default {
		props: {
			caption: String
		}
	}
</script>

<style>
	body{
		counter-reset: figureNumber;
		counter-increment: figureNumber; /* Start on 1 instead of 0. */
	}
</style>


<style scoped>
	
	figcaption::before{
		content: "Figure " counter(figureNumber);
		font-weight: bold;
	}
	
	.incrementFigureNumber{
		counter-increment: figureNumber;
	}
	
</style>