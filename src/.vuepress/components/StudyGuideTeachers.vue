<template>
	<div>
		
		<p>Here are short presentations of the teachers involved in the course.</p>
		
		<Tabs remember-selected-key="teachers">
			
			<Tab v-for="teacher in teachers" :title="teacher.name">
				
				<img
					:src="'/course-material/teacher-pictures/'+teacher.photo"
					:alt="'Photo of '+teacher.name+'.'">
				
				<p><b>{{teacher.roles.join(", ")}}.</b> {{teacher.description}}</p>
				
				<ul>
					<li v-if="teacher.email">Email: <a :href="'mailto:'+teacher.email">{{teacher.email}}</a></li>
					<li v-if="teacher.phone">Phone: {{teacher.phone}}</li>
					<li v-if="teacher.website"><a :href="teacher.website" target="_blank">Website</a></li>
					<li v-if="teacher.zoomLink"><a :href="teacher.zoomLink" target="_blank">Zoom Link</a></li>
				</ul>
				
				<div style="clear: right" />
				
			</Tab>
			
		</Tabs>
		
	</div>
</template>

<script>
	export default {
		props: ["teachers"],
	}
</script>

<style lang="stylus" scoped>
	
	img
		max-height 100%
		float right
		max-width 150px !important
		margin 16px
	
</style>