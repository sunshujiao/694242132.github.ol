/*
* @Author: dell
* @Date:   2047-05-09 21:08:37
* @Last Modified by:   dell
* @Last Modified time: 2017-05-12 01:10:30
*/

'use strict';
$(function(){
	//导航栏开始
	let topBtn=$('.top-btn');
	let topBox=$('.top-box');
	for(let i=0;i<topBtn.length;i++){
		topBtn[i].onmouseenter=function(){
			this.style.background='#fff';
			topBox[i].style.display='block';
		}
		topBtn[i].onmouseleave=function(){
			this.style.background='none';	
			topBox[i].style.display='none';
		}
	}
	//猫头
	let navImg=$('.nav-img');
	let n0=$('.n0');
	for(let i=0;i<n0.length;i++){
		n0[i].onmouseover=function(){
			navImg[i].style.display='block';
		}
		n0[i].onmouseout=function(){
			navImg[i].style.display='none';
		}
	}
	//侧边栏
	let b0=$('.b0');
	let pannel=$('.pannel');
	for(let i=0;i<b0.length;i++){
		b0[i].onmouseenter=function(){
			this.style.background='#fff';
			pannel[i].style.display='block';
		}
		b0[i].onmouseleave=function(){
			this.style.background='none';
			pannel[i].style.display='none';
		}
	}
	//轮播图
	let banner=$('.banner')[0];
	let imgBox=$('.imgBox')[0];
	let lis=$('li',imgBox);
	console.log(lis)
	let slider=$('.slider')[0];
	let slider0=$('div',slider);
	banner.onmouseover=function(){
		clearInterval(t1);
	}
	for(let i=0;i<slider0.length;i++){
		slider0[i].onclick=function(){
			for(let j=0;j<slider0.length;j++){
				slider0[j].className='';
				lis[j].style.display='none';
			}
		slider0[i].className='slider0';
		lis[i].style.display='block';
		}
	}
	let index=0;
	let t1=setInterval(move,4000);
	banner.onmouseout=function(){
		t1=setInterval(move,4000);
	}
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			slider0[i].className='';
		}
		slider0[index].className='slider0';
		lis[index].style.display='block';
	}
	//直播栏
	let leftBottom=$('.left-bottom')[0];
	let leftBottom1=$('.left-bottom1',leftBottom)[0];
	let leftBottom2=$('.left-bottom2',leftBottom)[0];
	let leftBottom3=$('.left-bottom3',leftBottom)[0];
	let zhezhao1=$('.zhezhao1',leftBottom)[0];
	let zhezhao2=$('.zhezhao2',leftBottom)[0];
	let zhezhao3=$('.zhezhao3',leftBottom)[0];
	let leftTop1=$('.left-top1')[0];
	let leftTop2=$('.left-top2')[0];
	let leftTop3=$('.left-top3')[0];
	leftBottom1.onmouseover=function(){
		zhezhao1.style.display='block';
		// leftTop1.style.background-image=leftBottom1.style.background-image;
	}
	leftBottom1.onmouseout=function(){
		zhezhao1.style.display='none';
	}
	leftBottom2.onmouseover=function(){
		zhezhao2.style.display='block';
	}
	leftBottom2.onmouseout=function(){
		zhezhao2.style.display='none';
	}
	leftBottom3.onmouseover=function(){
		zhezhao3.style.display='block';
	}
	leftBottom3.onmouseout=function(){
		zhezhao3.style.display='none';
	}
	//搜索框
	let sou=$('.sou')[0];
	let flag=true,flag1=true;
	window.onscroll=function(){
		if(!flag){
      		return;
  		}
  		let tops=document.body.scrollTop;
		if(tops>=500){
			if(flag1){
				flag1=!flag1;
				sou.style.transform=`translateY(50px)`;
			}
		}else if(!flag1){
			flag1=!flag1;
			sou.style.transform=`translateY(-50px)`;
		}
	}
})