<template>
	<div>
		
		<fieldset class="mistake">
			<legend>Mistake</legend>
			<slot name="mistake"></slot>
			<table v-if="this.$slots['example-1-bad']">
				<thead>
					<tr>
						<th class="dont">Don't</th>
						<th class="do">Do</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><slot name="example-1-bad"></slot></td>
						<td><slot name="example-1-good"></slot></td>
					</tr>
					<tr v-if="this.$slots['example-2-bad']">
						<td><slot name="example-2-bad"></slot></td>
						<td><slot name="example-2-good"></slot></td>
					</tr>
				</tbody>
			</table>
		</fieldset>
		
		
		<fieldset class="problem">
			<legend>Problem</legend>
			<slot name="problem"></slot>
		</fieldset>
		
		<fieldset class="solution">
			<legend>Solution</legend>
			<slot name="solution"></slot>
		</fieldset>
		
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="stylus" scoped>

.dont
	background-color red

.do
	background-color lime

legend
	font-weight bold

</style>