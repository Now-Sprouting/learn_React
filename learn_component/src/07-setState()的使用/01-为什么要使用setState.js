//* 1.setState()可以实现修改完 state状态后重新执行render函数,做到对页面的重新渲染
// 直接对state中的数据进行修改后不能触发render函数
//* 2.setState()函数未定义为什么可以使用,setState函数在继承的Component中