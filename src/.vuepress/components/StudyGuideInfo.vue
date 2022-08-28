<template>
	<div>
		
		<p>This study guide contains information about the implementation of the course. If you ever have any question about something in the course, look for the answer in this study guide or one of the other pages it refers to. If you can't find the answer to your question, email the course coordinator.</p>
		
		<dl class="study-guide-information">
			
			<dt>Course name</dt>
			<dd>{{courseName}}</dd>
			
			<dt>Ladok code</dt>
			<dd>{{ladokCode}}</dd>
			
			<dt>Credits</dt>
			<dd>{{credits}}</dd>
			
			<dt v-if="year">Year</dt>
			<dd v-if="year">{{year}}</dd>
			
			<dt>Course coordinator</dt>
			<dd>{{courseCoordinator}}</dd>
			
			<dt>Examiner</dt>
			<dd>{{examiner}}</dd>
			
			<dt v-if="pingPongEvent">Ping Pong event</dt>
			<dd v-if="pingPongEvent">{{pingPongEvent}}</dd>
			
			<dt v-if="pingPongPassword">Ping Pong password</dt>
			<dd v-if="pingPongPassword">{{pingPongPassword}}</dd>
			
			<dt v-if="canvasCourseId">Canvas Course Room</dt>
			<dd v-if="canvasCourseId">
				<a :href="'https://ju.instructure.com/courses/'+canvasCourseId" target="_blank">
					{{courseName}}
				</a>
			</dd>
			
			<template v-if="canvasCourses">
				<dt>Canvas Course</dt>
				<dd>
					<ul>
						<li v-for="course in canvasCourses" :key="course.id">
							<a :href="'https://ju.instructure.com/courses/'+course.id" target="_blank">
								{{course.name}}
							</a>
						</li>
					</ul>
				</dd>
			</template>
			
		</dl>
		
	</div>
</template>

<script>
	export default {
		props: {
			courseName: String,
			ladokCode: String,
			credits: String,
			year: String,
			courseCoordinator: String,
			examiner: String,
			pingPongEvent: String,
			pingPongPassword: String,
			canvasCourseId: String,
			canvasCourses: Array
		}
	}
</script>

<style scoped>
	
	dl{
		margin: 2em;
		word-wrap: break-word;
		display: grid;
		grid-template-columns: max-content 1fr;
		row-gap: 1em;
		column-gap: 1em;
	}
	
	dt{
		display: flex;
		align-items: center;
	}
	
	dt:after{
		content: ":";
	}
	
	dd{
		margin-left: 0;
	}
	
</style>