<template>
	<button @click="sleep">
		<slot />
	</button>
</template>

<script>
export default {
	
	props: {
		sleepMs: Number
	},
	
	methods: {
		sleep(){
			const timeToWakeUp = Date.now() + this.sleepMs
			let i = 0;
			while(Date.now() < timeToWakeUp){
				// Do nothing
				i++;
			}
			// Need to log this, otherwise will the compiler optimize and remove the loop.
			console.log(`SleepButton.sleep() did ${i} iterations.`)
		}
	}
	
}
</script>