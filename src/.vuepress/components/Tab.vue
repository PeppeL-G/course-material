<template>
	<section v-show="isSelected"
		:aria-hidden="!isSelected"
		class="tabs-component-panel"
		role="tabpanel"
	>
		<slot />
	</section>
</template>

<script>
export default {
	
	props: {
		title: String
	},
	
	data(){
		return {
			isSelected: false,
		}
	},
	
	computed: {
		id(){
			return this.title.toLowerCase().replace(/ /g, '-')
		},
	},
	
}
</script>

<style scoped>

@media print {
	.tabs-component-panel{
		display: block !important;
	}
}

</style>