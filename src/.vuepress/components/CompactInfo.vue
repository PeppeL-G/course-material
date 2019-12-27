<template>
	<dl>
		<template v-for="(value, key) in infoPieces">
			<dt>{{key}}</dt>
			<dd>
				<ul v-if="value instanceof Array">
					<li v-for="v in value">{{v}}</li>
				</ul>
				<span v-else>{{value}}</span>
			</dd>
		</template>
	</dl>
</template>

<script>
	export default {
		props: {
			infoPieces: Object
		}
	}
</script>

<style scoped>
	
	dl{
		margin: 1em 10%;
		padding: 1%;
		border: 3px solid black;
		background-color: silver;
		border-radius: 1em;
	}
	
	dt{
		font-weight: bold;
	}
	
	dt:after{
		content: ":"
	}
	
	dd{
		padding-top: 0.3em;
		padding-bottom: 1em;
		margin-left: 1em;
	}
	
</style>