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
			<dt>Course coordinator</dt>
			<dd>{{courseCoordinator}}</dd>
			<dt>Examiner</dt>
			<dd>{{examiner}}</dd>
			<dt v-if="pingPongEvent">Ping Pong event</dt>
			<dd v-if="pingPongEvent">{{pingPongEvent}}</dd>
			<dt v-if="pingPongPassword">Ping Pong password</dt>
			<dd v-if="pingPongPassword">{{pingPongPassword}}</dd>
			<dt v-if="canvasCourseId">Canvas Course</dt>
			<dd v-if="canvasCourseId"><a :href="'https://ju.instructure.com/courses/'+canvasCourseId">{{courseName}}</a></dd>
		</dl>
		
	</div>
</template>

<script>
	export default {
		props: {
			courseName: String,
			ladokCode: String,
			credits: String,
			courseCoordinator: String,
			examiner: String,
			pingPongEvent: String,
			pingPongPassword: String,
			canvasCourseId: String
		}
	}
</script>

<style scoped>
	
	dl{
		word-wrap: break-word;
	}
	
	dt{
		display: inline-block;
		width: 30%;
		padding-left: 5%;
		margin: 10px 0;
	}
	
	dt:after{
		content: ":";
	}
	
	dd{
		display: inline-block;
		width: 60%;
		margin: 10px 0;
	}
	
</style>