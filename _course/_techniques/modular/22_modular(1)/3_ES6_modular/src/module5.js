//使用【分别暴露】
export const teacher1 = {name:'强哥',age:15}
export const teacher2 = {name:'歌神',age:17}

//使用【统一暴露】
const stu1 = {name:'王宇',age:18}
const stu2 = {name:'宇航',age:19}
export {stu1,stu2}

//使用【默认暴露】
export default {
	school:'qihang',
	address:'杭州下沙',
	subjects:['前端','java','大数据']
}
