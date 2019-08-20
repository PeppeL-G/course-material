<template>
	<table>
		<tbody>
				<tr>
					<td>
						<b>Grade U</b><br>
						{{gradeU}}
					</td>
					<td>
						<b>Grade 3</b><br>
						{{grade3}}
					</td>
					<td>
						<b>Grade 4</b><br>
						{{grade4}}
					</td>
					<td>
						<b>Grade 5</b><br>
						{{grade5}}
					</td>
				</tr>
		</tbody>
	</table>
</template>

<script>

export default {
	props: {
		gradeU: String,
		grade3: String,
		grade4: String,
		grade5: String
	}
}
</script>


<style scoped>
	
	td{
		font-size: 80%;
		width: 25%;
		vertical-align: top;
	}
	
</style>