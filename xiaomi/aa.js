function $(selector,ranger=document){
	let type=typeof selector;
	if(type=='string'){
		//获取
		let select=selector.trim();
		let first=select.charAt(0);
		if(first=='.'){
			return ranger.getElementsByClassName(select.substr(1));
		}else if(first=='#'){
			return document.getElementById(select.substr(1));
		}else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){			//正则表达式
			return ranger.getElementsByTagName(select);

		}
	}else if(type=='function'){
		//添加事件
		window.onload=function(){
			selector();
		}
	}
}

//obj 对象  attr 样式属性  getStyle 获取某一个对象指定的样式属性

function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.cumputedStyle[attr];
	}
}


/*html(obj[content])
设置或者是获取某一个元素的内容
obj 指定的对象
[content]设置的内容
没有   获取obj内容
有		设置*/

function html(obj,content){
	if(content){
		obj.innerHTML=content;
	}else{
		return obj.innerHTML;
	}
}