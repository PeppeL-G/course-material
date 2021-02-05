<template>
	
	<div>
		
		<div class="smartphone">
			<slot></slot>
		</div>
		
		<div class="custom-block warning">
			<p class="custom-block-title">Client-Side JavaScript</p>
			<p>This demo will only work if you have Client-Side JavaScript enabled in your web browser.</p>
		</div>
		
	</div>
	
</template>

<style scoped>
	
	.smartphone{
		border: 4px solid black;
		background-color: silver;
		width: 290px;
		height: 500px;
	}
	
</style>