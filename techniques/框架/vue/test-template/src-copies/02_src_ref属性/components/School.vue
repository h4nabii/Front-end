<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<student />
	</div>
</template>

<script>
    import Student from './Student.vue';
	export default {
		name:'School',
		data() {
			return {
				name:'起航教育',
				address:'杭州·临平'
			}
		},
		components:{
			Student
		}
	}
</script>

<style>
	.school{
		background-color: gray;
	}
</style>