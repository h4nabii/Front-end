<template>
	<div class="demo">
		<School/>
		<hr>
		<Student/>
	</div>
</template>

<script>
	import School from './components/School'
	import Student from './components/Student'

	export default {
		name:'App',
		components:{School,Student}
	}
</script>
<style>
    .demo{
		 width:900px;
		 margin:0 auto;
	}
</style>
