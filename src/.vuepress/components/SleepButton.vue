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
			while(Date.now() < timeToWakeUp){
				// Do nothing
			}
		}
	}
	
}
</script>