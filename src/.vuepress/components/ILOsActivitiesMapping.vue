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
				<tr v-for="ilo in ilos">
					<td>{{ilo.text}}</td>
					<td>
						<div v-for="test in ilo.tests">
							{{test}}
						</div>
					</td>
					<td>
						<div v-for="activity in ilo.activities">
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
			this.ilos = this.description.trim().split(/\n\s*\n/).map(iloString => {
				const stringParts = iloString.split("\n")
				return {
					text: stringParts[0],
					tests: stringParts.filter(s => s.startsWith("-")).map(s => s.substr(1)),
					activities: stringParts.filter(s => s.startsWith("+")).map(s => s.substr(1)),
				}
			})
		}
	}
	
</script>

<style scoped lang="stylus">
	
	table
		font-size 90%
	
	table div
		white-space nowrap
	
</style>