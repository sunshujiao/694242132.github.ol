window.onload=function(){
    let canvas=document.querySelector('canvas');
    let ctx=canvas.getContext('2d');

    let line=document.querySelector('.icon-xiantiao2');
    let pencil=document.querySelector('.icon-iconupload');
    let Rectangle=document.querySelector('.icon-juxing');
    let Polygon=document.querySelector('.icon-duobianxing');
    let round=document.querySelector('.icon-yuan');
    let DottedLine=document.querySelector('.icon-xiantiao3');
    let RoundedCorner=document.querySelector('.icon-rounded-corners-stroke1-s40-r10');
    let polygons=document.querySelector('.icon-wujiaoxing');
    let tianchong=document.querySelector('.icon-tianchong');
    let miaobian=document.querySelector('.icon-miaobian');
    let eraser=document.querySelector('.icon-xiangpi');
    let eraserBtn=document.querySelector('.eraser');
    let mask=document.querySelector('.mask');
    let font=document.querySelector('.icon-wenzi');
    let clip=document.querySelector('.icon-caiqie')
    let clipBtn=document.querySelector('.clip');
    let news=document.querySelector('.icon-iconfontxinjian');
    let lable=document.querySelectorAll('label');
    let big=document.querySelector('.lefter');

    let Save=document.querySelector('.icon-baocun');
    let repeal=document.querySelector('.icon-chexiao')


    let TC=document.querySelector('.TC');
    let MB=document.querySelector('.MB');

    let palette=new Palette(canvas,ctx,mask);
    line.onclick=function(){
        palette.line()
    }
    pencil.onclick=function(){
        palette.pencil()
    }
    Rectangle.onclick=function(){
        palette.Rectangle();
    }
    Polygon.onclick=function(){
        let num=prompt('请输入几边形')
        palette.Polygon(num);
    }
    round.onclick=function(){
        // let round=prompt('请输入圆的半径','radius')
        palette.round()
    }
    DottedLine.onclick=function(){
        palette.DottedLine()
    }
    RoundedCorner.onclick=function(){
        palette.RoundedCorner(20)
    }
    Save.onclick=function(){
        palette.Save()
    }
    repeal.onclick=function(){
        palette.repeal()
    }
    polygons.onclick=function(){
        let num=prompt('请输入几角形')
        palette.polygons(num)
    }
    tianchong.onclick=function(){
        palette.tianchong();
    }
    miaobian.onclick=function(){
        palette.Strokes()
    }
    TC.onchange=function(){
        palette.fillStyle=TC.value;
    }
    MB.onchange=function(){
        palette.strokeStyle=MB.value;
    }
    eraser.onclick=function(){
        let w=prompt('请输入橡皮尺寸','10')
        palette.eraser(w,w,eraserBtn)
    }
    font.onclick=function(){
        palette.fonts()
    }
    clip.onclick=function(){
        palette.clip(clipBtn)
    }
    news.onclick=function(){
        palette.news()
    }
    //选中
    big.onmousedown=function(e){
        let obj=e.target;
        if(obj.nodeName=='LABEL'){
            for(let i=0;i<lable.length;i++){
                lable[i].style.background='';
            }
            obj.style.background='#9EB9FF'
        }
    }
}