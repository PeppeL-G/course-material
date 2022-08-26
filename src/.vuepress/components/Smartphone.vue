<template>
	
	<div>
		
		<div class="smartphone">
			<slot></slot>
		</div>
		
	</div>
	
</template>

<style scoped>
	
	.smartphone{
		border: 4px solid black;
		background-color: silver;
		width: 200px;
		height: 300px;
		margin: 0 auto;
		color: black;
	}
	
</style>