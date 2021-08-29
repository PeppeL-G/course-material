<template>
	<div>
		
		<table>
			<thead>
				<tr>
					<th>Intended Learning Outcome</th>
					<th>Examined Elements</th>
					<th>Learning Activities</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="ilo in ilos" :key="ilo.text">
					<td>{{ilo.text}}</td>
					<td>
						<div v-for="test in ilo.tests" :key="test">
							{{test}}
						</div>
					</td>
					<td>
						<div v-for="activity in ilo.activities" :key="activity">
							{{activity}}
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		
	</div>
</template>

<script>
	export default {
		props: {
			description: String,
		},
		created(){
			this.ilos = this.description.trim().split('---').map(iloString => {
				const stringParts = iloString.trim().split("\n")
				return {
					text: stringParts[0],
					tests: stringParts.filter(s => s.startsWith("-")).map(s => s.substr(1).trim()),
					activities: stringParts.filter(s => s.startsWith("+")).map(s => s.substr(1).trim()),
				}
			})
		}
	}
	
</script>

<style scoped>
	
	table{
		font-size: 90%;
	}
	
	table div{
		white-space: nowrap;
	}
	
</style>