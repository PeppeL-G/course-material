<template>
	<div class="teacher">
		
		<img
			:src="'/course-material/teacher-pictures/'+photo"
			:title="'Photo of '+name+'.'"
			:alt="'Photo of '+name+'.'">
		
		<p><b>{{roles.join(", ")}}.</b> {{description}}</p>
		
		<ul>
			<li v-if="email">Email: <a :href="'mailto:'+email">{{email}}</a></li>
			<li v-if="phone">Phone: {{phone}}</li>
			<li v-if="website"><a :href="website" target="_blank">Website</a></li>
			<li v-if="zoomLink"><a :href="zoomLink" target="_blank">Zoom</a></li>
		</ul>
		
		<div style="clear: right" />
		
	</div>
</template>

<script>
	export default {
		props: {
			name: String,
			photo: String,
			roles: Array,
			description: String,
			email: String,
			phone: String,
			website: String,
			zoomLink: String,
		},
	}
</script>

<style scoped>
	
	img{
		max-height: 100%;
		float: right;
		max-width: 150px !important;
		margin: 16px;
	}
	
</style>