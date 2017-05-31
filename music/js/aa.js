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

		}else if(/^<[a-z][a-z1-6]{0,8}>$/.test(select)){
			return document.createElement(select.slice(1,-1));
		}
	}else if(typeof selector=='function'){
		//添加事件
		// window.onload=function(){
        // 	selector();
        // }
		addEvent(window,'load',selector)
	}
}

//obj 对象  attr 样式属性  getStyle 获取某一个对象指定的样式属性

function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.computedStyle[attr];
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



/*
	getChild()
	获取指定元素的子元素节点
		1.所有子节点
		2.筛选
	 */	
	function getChilds(obj){
		let childs=obj.childNodes;
		let arr=[];
		childs.forEach(function(value){
			if(value.nodeType==1){
				arr.push(value);
			}
		})
		return arr;
	}

	function getFirst(obj){
		return getChilds(obj)[0];
	}

	function getLast(obj){
		let childs=getChilds(obj);
		return childs[childs.length-1];
	}

	function getNum(obj,num){
		let childs=getChilds(obj);
		return childs[num];
	}

/*getNext
	1下一个兄弟节点 a
	2 不是a下一个兄弟节点b
	*/
	function getNext(obj){
		let a=obj.nextSibling;
		if(a===null){
			return false;
		}
		while(a.nodeType!=1){
			a=a.nextSibling;
			if(a===null){
				return false;
			}
		}
		return a;
	}
//在某一个元素之后插入		ele要插入的元素
Node.prototype.insertAfter=function(ele){
    var next=this.nextElementSibling;
    var parent=this.parentNode;	//父节点
    parent.insertBefore(ele,next);
}
//在父元素的第一个元素前插入
Node.prototype.pretend=function(ele){
    var first=this.firstElementChild;
    this.insertBefore(ele,first);
}
//appendTo  把子元素插入到父元素里
Node.prototype.appendTo=function (parent) {
    parent.appendChild(this);
}

//添加 绑定事件
	function addEvent(obj,type,fn){
		obj.addEventListener(type,fn,false);
	}
//滚轮事件
	function mousewheel(obj,upFn,downFn){
		obj.addEventListener('mousewheel',fn,false);
		function fn(e){
			e.preventDefault();
			let dir=e.wheelDelta;
			if(dir==120||dir==150||dir==180){
				upFn.call(obj);
			}else if(dir==-120||dir==-150||dir==-180){
				downFn.call(obj);
			}
		}
	}