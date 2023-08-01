<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
		<div class="box" id="box" ref="box">11111</div>
		<student></student>
	</div>
</template>

<script>
	//引入School组件
	import School from './components/School'
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs)  // 返回一个对象

				let oBox = this.$refs.box;
				console.log(oBox);
				oBox.innerHTML = '中国人'
				// console.log(this.$ref)
				// console.log(this.$refs.title) //真实DOM元素
				// console.log(this.$refs.btn) //真实DOM元素
				// console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>
