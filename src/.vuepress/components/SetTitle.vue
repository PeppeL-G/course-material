<template></template>

<script>
export default {
	props: {
		title: String
	},
	mounted(){
		document.querySelector('.site-name').innerText = this.title
	}
}
</script>