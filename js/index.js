/*
* @Author: dell
* @Date:   2017-05-31 15:20:00
* @Last Modified by:   dell
* @Last Modified time: 2017-05-31 17:45:44
*/

'use strict';
$(function(){
	let progress=$('.progress');
		let progressBar=$('.progress-bar');
		let container=$('#skills');
		let top=container.offset().top;
	window.onscroll=function(){
		let tops=document.body.scrollTop;
		if(tops>1300){
			progressBar[0].style.width="95%";
			progressBar[1].style.width="85%";
			progressBar[2].style.width="85%";
			progressBar[3].style.width="85%";
		}
	}
	let lis=$("#da-thumbs")[0];
	lis.onclick=null;
	
})