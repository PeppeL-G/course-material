<template>
	<div>
		
		<table>
			<template v-for="week of weeks" :key="week.realWeekNumber">
				<tr>
					<td :title="`Course Week ${week.relativeWeekNumber}`">Week {{week.relativeWeekNumber}}</td>
					<td :title="`Year Week ${week.realWeekNumber}`">Week {{week.realWeekNumber}}</td>
					<td v-for="header of headers" :key="header">{{header}}</td>
				</tr>
				<tr v-for="day of week.days" :key="day.date" :class="{hasPassed: day.hasPassed}">
					<td>{{day.weekday}}</td>
					<td>{{day.date}}</td>
					<td v-for="task of day.tasks" :key="task">{{task}}</td>
				</tr>
			</template>
		</table>
		
		<component :is="'style'" scoped v-for="column, index of columns" :key="column.key">
			
			td:nth-child({{3+index}}):not(:empty){
				background-color: {{column.color}};
			}
			
		</component>
		
	</div>
</template>

<script>

// https://stackoverflow.com/a/6117889/2104665 (return value modified here)
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return week number
    return weekNo;
}

function dateToString(date){
	
	const year = date.getFullYear()
	
	const m = date.getMonth() + 1
	const month = m < 10 ? "0"+m : m
	
	const d = date.getDate()
	const day = d < 10 ? "0"+d : d
	
	return year+"-"+month+"-"+day
	
}

export default {
	props: {
		startDate: Date,
		columns: Array,
		rows: Array
	},
	data(){
		
		const yesterDay = new Date()
		yesterDay.setDate(yesterDay.getDate()-1)
		
		const headers = this.columns.map(c => c.name)
		const weekDays = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
		
		const startWeek = getWeekNumber(this.startDate)
		const numberOfWeeks = this.rows.length/7
		const weeks = []
		
		for(let relativeWeekNumber=1; relativeWeekNumber<=numberOfWeeks; relativeWeekNumber++){
			
			const days = []
			
			const beginR = (relativeWeekNumber-1)*7
			const endR = relativeWeekNumber*7
			
			for(let r=beginR; r<endR; r++){
				
				const date = new Date(this.startDate)
				date.setDate(date.getDate() + r)
				
				days.push({
					weekday: weekDays[date.getDay()],
					hasPassed: date < yesterDay,
					date: dateToString(date),
					tasks: this.columns.map(
						c => this.rows[r][c.key] || ""
					)
				})
				
			} 
			weeks.push({
				relativeWeekNumber,
				realWeekNumber: getWeekNumber(this.startDate) + relativeWeekNumber - 1,
				days
			})
			
		}
		
		return {
			weeks,
			headers
		}
		
	}
}
</script>


<style scoped>
	
	table{
		white-space: nowrap;
		font-size: 90%;
		margin-bottom: 0;
		margin-top: 0;
		max-width: 100%;
	}
	
	tr:nth-child(8n+1){
		font-weight: bold;
		font-size: 100%;
	}
	
	tr:nth-child(8n+1) td:nth-child(1), tr:nth-child(8n+1) td:nth-child(2){
		background-color: var(--c-tip);
	}
	
	.hasPassed{
		text-decoration: line-through;
		background-color: gray;
	}
	
	@media print{
		table{
			font-size: 60%;
		}
	}
</style>