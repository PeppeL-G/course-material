<template>
	<div class="answer">
		<div v-if="showAnswer">
			<slot />
		</div>
		<div v-else>
			A sample answer will be shown here {{showAfterDate.getFullYear()}}-{{showAfterDate.getMonth()+1}}-{{showAfterDate.getDate()}} {{showAfterDate.getHours()}}:{{showAfterDate.getMinutes()}}.
		</div>
	</div>
</template>

<script>
	
	// https://stackoverflow.com/questions/3468607/why-does-settimeout-break-for-large-millisecond-delay-values
	function setTimeoutIfPossible(callback, delayInMs){
		const maxDelayInMs = 2147483647
		if(delayInMs <= maxDelayInMs){
			return setTimeout(callback, delayInMs)
		}
	}
	
	export default {
		props: {
			showAfter: String
		},
		data(){
			
			const now = new Date()
			const showAfterDate = new Date(this.showAfter)
			
			return {
				showAfterDate,
				showAnswer: showAfterDate < now
			}
			
		},
		mounted(){
			
			if(!this.showAnswer){
				
				const now = new Date()
				
				const timeLeftInMs = this.showAfterDate - now
				
				this.timeoutId = setTimeoutIfPossible(() => {
					this.showAnswer = true
				}, timeLeftInMs)
				
			}
			
		},
		
		destroyed(){
			if(this.timeoutId){
				clearTimeout(this.timeoutId)
			}
		}
		
	}
</script>

<style scoped>
	
	.answer{
		border: 0.4em solid green;
		padding: 0.4em;
		border-radius: 0.5em;
		background-color: silver;
		color: black;
	}
	
</style>