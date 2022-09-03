<template>
	<div class="exam-question">
		
		<div class="question">
			<h2>Question</h2>
			<slot name="question"></slot>
		</div>
		
		<div class="sample-answer" v-if="$slots['sample-answer']">
			<h2>Sample answer</h2>
			<slot name="sample-answer"></slot>
		</div>
		
		<div class="marking-guidelines" v-if="$slots['marking-guidelines']">
			<h2>Marking guidelines</h2>
			<slot name="marking-guidelines"></slot>
		</div>
		
	</div>
</template>

<script>
	export default {
		props: {
			caption: String
		}
	}
</script>

<style scoped>
	
	.exam-question{
		border: 3px solid black;
	}
	
	.question, .sample-answer, .marking-guidelines{
		border: 3px solid black;
		padding: 0.5em;
	}
	
	.question{
		background-color: rgba(255, 255, 0, 0.08)
	}
	
	.sample-answer{
		background-color: rgba(0, 255, 0, 0.08)
	}
	
	.marking-guidelines{
		background-color: rgba(255, 0, 0, 0.08)
	}
	
	h2{
		margin: 0;
		padding: 0.5em 0;
		font-size: 1.1em;
	}
	
	.exam-question :deep(p){
		margin-top: 0 !important;
	}
	
</style>