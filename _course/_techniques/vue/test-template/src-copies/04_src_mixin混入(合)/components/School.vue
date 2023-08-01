<template>
	<div>
		<h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入一个hunhe
	import {hunhe,hunhe2} from '../mixin'

	export default {
		name:'School',
		data() {
			return {
				name:'水墨林前端开发学院',
				address:'杭州下沙',
				x:666
			}
		},
		mixins:[hunhe,hunhe2],
	}
</script>