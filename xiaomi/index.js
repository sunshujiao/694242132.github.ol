/*
* @Author: dell
* @Date:   2017-04-27 17:23:43
* @Last Modified by:   dell
* @Last Modified time: 2017-05-08 00:34:54
*/

'use strict';
$(function(){
	let headerNavLi=$('.header-nav-li');
	let headerYijiA=$('.header-yiji-a')
	let headerNavMenu=$('.header-nav-menu');
	let headerMenuList=$('.header-menu-list')
	for(let i=0;i<7;i++){
		headerYijiA[i].onmouseover=function(){
			headerNavMenu[i].style.height='230px';
			headerMenuList[i].style.display='block';
		}
		headerYijiA[i].onmouseout=function(){
			headerMenuList[i].style.display='';
			headerNavMenu[i].style.height='0';
		}
	}
	//banner开始
	let uiWrapper=$('.ui-wrapper')[0];
	let uiWrapperA=$('.ui-wrapper-a');
	let uiPageLink=$('.ui-page-link');
	let uiPrev=$('.ui-prev')[0];
	let uiNext=$('.ui-next')[0];
	uiWrapper.onmouseover=function(){
		clearInterval(t);
	}
		for(let i=0;i<uiPageLink.length;i++){
			uiPageLink[i].onclick=function(){
				for(let j=0;j<uiPageLink.length;j++){
					uiPageLink[j].style.background='';
					uiWrapperA[j].style.display='none';
				}
				uiPageLink[i].style.background='#fff';
				uiWrapperA[i].style.display='block';
				index=i
			}
		}
	uiPrev.onclick=function(){
		moveD();
	}
	uiNext.onclick=function(){
		move();
	}
	let index=0;
	let t;
	t=setInterval(move,2000);
	uiWrapper.onmouseout=function(){
		t=setInterval(move,2000);
	}
	function move(){
		index++;
		if(index==uiWrapperA.length){
			index=0;
		}
		for(let i=0;i<uiWrapperA.length;i++){
			uiWrapperA[i].style.display='none';
			uiPageLink[i].style.background='';
		}
		uiWrapperA[index].style.display='block';
		uiPageLink[index].style.background='#fff';
	}
	function moveD(){
		index--;
		if(index==-1){
			index=uiWrapperA.length-1;
		}
		for(let i=0;i<uiWrapperA.length;i++){
			uiWrapperA[i].style.display='none';
			uiPageLink[i].style.background='';
		}
		uiWrapperA[index].style.display='block';
		uiPageLink[index].style.background='#fff';
	}
// 按需加载
		let ch=window.innerHeight;
		let floors=document.querySelectorAll('.floor');
		let arr=[];
		floors.forEach(function(value,index){
			arr.push(value.offsetTop);
		})
		window.onscroll=function(){
			let tops=document.body.scrollTop;
			for(let i=0;i<arr.length;i++){
				if(tops+ch>arr[i]+300){
					let floor=document.getElementsByClassName('floor')[i];
					let imgs=floor.getElementsByTagName('img');
					for(let j=0;j<imgs.length;j++){
						imgs[j].src=imgs[j].title;
					}
				}
			}
		}
//明星单品
	let boxBd=$('.box-bd')[0];
	let xmCarouselList=$('.xm-carousel-list',boxBd);
	let boxHd=$('.box-hd')[0];
	let moreL=$('.moreleft')[0];
	let imgL=$('i',moreL)[0];
	let moreR=$('.moreright')[0];
	let imgR=$('i',moreR)[0];
	let imgWidth=parseInt(getComputedStyle(boxBd,null).width);
	let current=0,next=0;
	let a=setInterval(move1, 4000);
	for(let i=0;i<xmCarouselList.length;i++){
		if(i==0){
			continue;
		}
		xmCarouselList[i].style.left=imgWidth+'px';
	}
	boxHd.onmouseover=function(){
		clearInterval(a);
	}
	boxHd.onmouseout=function(){
		a=setInterval(move1, 4000);
	}
	function move1(){
		next++;
		if(next>=xmCarouselList.length){
			next=0;
		}
		xmCarouselList[next].style.left=imgWidth+'px';
		animate(xmCarouselList[current],{left:-imgWidth});
		animate(xmCarouselList[next],{left:0});
		current=next;
	}
	function moveD1(){
		next--
		if(next==-1){
			next=xmCarouselList.length-1;
		}
		xmCarouselList[next].style.left=-imgWidth+'px';
		animate(xmCarouselList[current],{left:imgWidth});
		animate(xmCarouselList[next],{left:0});
		current=next;
	}
	moreR.onclick=function(){
		move1();
	}
	moreL.onclick=function(){
		moveD1();
	}
	moreR.onmouseover=function(){
		imgR.style.color='red';
	}
	moreL.onmouseover=function(){
		imgL.style.color='red';
	}
	moreR.onmouseout=function(){
		imgR.style.color='';
	}
	moreL.onmouseout=function(){
		imgL.style.color='';
	}
//搭配
	let tabList=$('.tab-list')[0];		
	let tabLists=$('li',tabList);
	let row1=$('.row1')[0];
	let brickList=$('.brick-list',row1);
	for(let i=0;i<tabLists.length;i++){
		tabLists[i].onmouseover=function(){
			for(let j=0;j<tabLists.length;j++){
				tabLists[j].style.color='';
				tabLists[j].style.borderBottom='';
				brickList[j].style.display='none';
			}
			tabLists[i].style.color='#ff6700';
			tabLists[i].style.borderBottom='2px solid #ff6700 ';
			brickList[i].style.display='block';
		}
	}
//配件
	let tabList2=$('.tab-list2')[0];
	let tabLists2=$('li',tabList2);
	let row2=$('.row2')[0];
	let brickList2=$('.brick-list',row2);
	for(let i=0;i<tabLists2.length;i++){
		tabLists2[i].onmouseover=function(){
			for(let j=0;j<tabLists.length;j++){
				tabLists2[j].style.color='';
				tabLists2[j].style.borderBottom='';
				brickList2[j].style.display='none';
			}
			tabLists2[i].style.color='#ff6700';
			tabLists2[i].style.borderBottom='2px solid #ff6700 ';
			brickList2[i].style.display='block';
		}
	}
//周边
	let tabList3=$('.tab-list3')[0];
	let tabLists3=$('li',tabList3);
	let row3=$('.row3')[0];
	let brickList3=$('.brick-list',row3);
	for(let i=0;i<tabLists3.length;i++){
		tabLists3[i].onmouseover=function(){
			for(let j=0;j<tabLists3.length;j++){
				tabLists3[j].style.color='';
				tabLists3[j].style.borderBottom='';
				brickList3[j].style.display='none';
			}
			tabLists3[i].style.color='#ff6700';
			tabLists3[i].style.borderBottom='2px solid #ff6700 ';
			brickList3[i].style.display='block';
		}
	}
//内容
	 let contentItemBook=$('.content-item content-item-book')[0];
	 let xmCarouselWrapper1=$('.xm-carousel-wrapper1',contentItemBook);
	 let xmPagers=$('.xm-pagers')[0];
	 let pagers=$('.pager',xmPagers);
	 let xmCarsouselControls=$('.xm-carsousel-controls')[0];
	 console.log(xmCarsouselControls)
	 let controlPrev=$('.control-prev',xmCarsouselControls)[0];
	 let controlNext=$('.control-next',xmCarsouselControls)[0];

	 for(let i=0;i<3;i++){
	 	pagers[i].onclick=function(){
	 		for(let j=0;j<3;j++){
	 			pagers[j].style.background='';
	 			xmCarouselWrapper1[j].style.display='none';
	 		}
	 		pagers[i].style.background='#ff6700';
	 		xmCarouselWrapper1[i].style.display='block';
	 	}
	 }
	 let last=0;
	controlNext.onclick=function(){
		moveR();	
	}
	controlPrev.onclick=function(){
		moveL();
	}
	 function moveR(){
	 	last++;
	 	if(last==pagers.length){
	 		last=0;
	 	}
	 	for(let i=0;i<pagers.length;i++){
	 		pagers[i].style.background='';
	 		xmCarouselWrapper1[i].style.display='none';
	 	}
	 	pagers[last].style.background='#ff6700';
	 	xmCarouselWrapper1[last].style.display='block';
	 }
	  function moveL(){
	 	last--;
	 	if(last==-1){
	 		last=pagers.length-1;
	 	}
	 	for(let i=0;i<3;i++){
	 		pagers[i].style.background='';
	 		xmCarouselWrapper1[i].style.display='none';
	 	}
	 	pagers[last].style.background='#ff6700';
	 	xmCarouselWrapper1[last].style.display='block';
	 }

	 let contentItemTheme=$('.content-item content-item-theme')[0];
	 let xmCarouselWrapper2=$('.xm-carousel-wrapper2',contentItemTheme);
	 let xmPagers2=$('.xm-pagers2')[0];
	 let pagers2=$('.pager',xmPagers2);
	 let xmCarsouselControls2=$('.xm-carsousel-controls2')[0];
	 let controlPrev2=$('.control-prev2',xmCarsouselControls2)[0];
	 let controlNext2=$('.control-next2',xmCarsouselControls2)[0];
	 for(let i=0;i<4;i++){
	 	pagers2[i].onclick=function(){
	 		for(let j=0;j<4;j++){
	 			pagers2[j].style.background='';
	 			xmCarouselWrapper2[j].style.display='none';
	 		}
	 		pagers2[i].style.background='#ff6700';
	 		xmCarouselWrapper2[i].style.display='block';
	 	}
	 }
	 let last2=0;
	controlNext2.onclick=function(){
		moveR2();	
	}
	controlPrev2.onclick=function(){
		moveL2();
	}
	 function moveR2(){
	 	last2++;
	 	if(last2==pagers2.length){
	 		last2=0;
	 	}
	 	for(let i=0;i<pagers2.length;i++){
	 		pagers2[i].style.background='';
	 		xmCarouselWrapper2[i].style.display='none';
	 	}
	 	pagers2[last2].style.background='#ff6700';
	 	xmCarouselWrapper2[last2].style.display='block';
	 }
	  function moveL2(){
	 	last2--;
	 	if(last2==-1){
	 		last2=pagers2.length-1;
	 	}
	 	for(let i=0;i<4;i++){
	 		pagers2[i].style.background='';
	 		xmCarouselWrapper2[i].style.display='none';
	 	}
	 	pagers2[last2].style.background='#ff6700';
	 	xmCarouselWrapper2[last2].style.display='block';
	 }


	 let contentItemGame=$('.content-item content-item-game')[0];
	 let xmCarouselWrapper3=$('.xm-carousel-wrapper3',contentItemGame);
	 let xmPagers3=$('.xm-pagers3')[0];
	 let pagers3=$('.pager',xmPagers3);
	 let xmCarsouselControls3=$('.xm-carsousel-controls3')[0];
	 let controlPrev3=$('.control-prev3',xmCarsouselControls3)[0];
	 let controlNext3=$('.control-next3',xmCarsouselControls3)[0];
	 for(let i=0;i<4;i++){
	 	pagers3[i].onclick=function(){
	 		for(let j=0;j<4;j++){
	 			pagers3[j].style.background='';
	 			xmCarouselWrapper3[j].style.display='none';
	 		}
	 		pagers3[i].style.background='#ff6700';
	 		xmCarouselWrapper3[i].style.display='block';
	 	}
	 }
	 let last3=0;
	controlNext3.onclick=function(){
		moveR3();	
	}
	controlPrev3.onclick=function(){
		moveL3();
	}
	 function moveR3(){
	 	last3++;
	 	if(last3==pagers3.length){
	 		last3=0;
	 	}
	 	for(let i=0;i<pagers3.length;i++){
	 		pagers3[i].style.background='';
	 		xmCarouselWrapper3[i].style.display='none';
	 	}
	 	pagers3[last3].style.background='#ff6700';
	 	xmCarouselWrapper3[last3].style.display='block';
	 }
	  function moveL3(){
	 	last3--;
	 	if(last3==-1){
	 		last3=pagers3.length-1;
	 	}
	 	for(let i=0;i<4;i++){
	 		pagers3[i].style.background='';
	 		xmCarouselWrapper3[i].style.display='none';
	 	}
	 	pagers3[last3].style.background='#ff6700';
	 	xmCarouselWrapper3[last3].style.display='block';
	 }

	 let contentItemApp=$('.content-item content-item-app')[0];
	 let xmCarouselWrapper4=$('.xm-carousel-wrapper4',contentItemApp);
	 let xmPagers4=$('.xm-pagers4')[0];
	 let pagers4=$('.pager',xmPagers4);
	 let xmCarsouselControls4=$('.xm-carsousel-controls4')[0];
	 let controlPrev4=$('.control-prev4',xmCarsouselControls4)[0];
	 let controlNext4=$('.control-next4',xmCarsouselControls4)[0];
	 for(let i=0;i<4;i++){
	 	pagers4[i].onclick=function(){
	 		for(let j=0;j<4;j++){
	 			pagers4[j].style.background='';
	 			xmCarouselWrapper4[j].style.display='none';
	 		}
	 		pagers4[i].style.background='#ff6700';
	 		xmCarouselWrapper4[i].style.display='block';
	 	}
	 }
	  let last4=0;
	controlNext4.onclick=function(){
		moveR4();	
	}
	controlPrev4.onclick=function(){
		moveL4();
	}
	 function moveR4(){
	 	last4++;
	 	if(last4==pagers4.length){
	 		last4=0;
	 	}
	 	for(let i=0;i<pagers4.length;i++){
	 		pagers4[i].style.background='';
	 		xmCarouselWrapper4[i].style.display='none';
	 	}
	 	pagers4[last4].style.background='#ff6700';
	 	xmCarouselWrapper4[last4].style.display='block';
	 }
	  function moveL4(){
	 	last4--;
	 	if(last4==-1){
	 		last4=pagers4.length-1;
	 	}
	 	for(let i=0;i<4;i++){
	 		pagers4[i].style.background='';
	 		xmCarouselWrapper4[i].style.display='none';
	 	}
	 	pagers4[last4].style.background='#ff6700';
	 	xmCarouselWrapper4[last4].style.display='block';
	 }
})