function Palette(obj,ctx,mask){
    this.obj=obj;
    this.ctx=ctx;
    this.mask=mask;
    //画板宽高
    this.width=obj.width;
    this.height=obj.height;
    //历史
    this.history=[]
    //样式
    this.lineWidth=2;
    this.fillStyle="#000";
    this.strokeStyle="#000";
    this.type='stroke'      //填充  描边
    this.lineCap='butt'
    this.bian=5;
    this.jiao=5;
    //字体样式
    this.font='20px sans-serif';
    this.textAlign='center';
    this.textBaseline='middle';
}
Palette.prototype={
    init:function(){
        this.ctx.lineWidth=this.lineWidth
        this.ctx.strokeStyle=this.strokeStyle
        this.ctx.fillStyle=this.fillStyle
        // this.ctx.lineCap='this.lineCap'
    },
    //线条
    line:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                 if(self.history.length>0){
                     self.ctx.putImageData(self.history[self.history.length-1],0,0)
                 }
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(mx,my);
                 self.ctx.closePath();
                self.ctx.stroke();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //铅笔
    pencil:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.init();
            // self.ctx.clearRect(0,0,self.width,self.height);
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0)
            }
            self.ctx.beginPath();
            self.ctx.moveTo(ox,oy);
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.lineTo(mx,my);
                // self.ctx.closePath();
                self.ctx.stroke();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //矩形
    Rectangle:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.rect(ox,oy,mx-ox,my-oy);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //多边形
    Polygon:function(num){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                let angle=(360/num)/180*Math.PI;
                let radius=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                self.ctx.beginPath();
                self.ctx.moveTo(ox+radius,oy);
                for(let i=0;i<num;i++){
                    self.ctx.lineTo(ox+radius*Math.cos(angle*i),oy+radius*Math.sin(angle*i))
                }
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //多角形
    polygons:function(num){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let radius=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                let radius1=radius/3;
                let angle=360/(num*2)*Math.PI/180;
                self.ctx.clearRect(0,0,self.width,self.height);
                self.ctx.beginPath();
                self.ctx.moveTo(ox+radius,oy);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                for(let i=0;i<num*2;i++){
                    if(i%2==0){
                        self.ctx.lineTo(ox+radius*Math.cos(angle*i),oy+radius*Math.sin(angle*i))
                    }else{
                        self.ctx.lineTo(ox+radius1*Math.cos(angle*i),oy+radius1*Math.sin(angle*i))
                    }
                }
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //圆
    round:function(radius){
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                // let angle=(360/num)/180*Math.PI;
                self.ctx.beginPath();
                self.init();
                let radius=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                self.ctx.arc(ox,oy,radius,0,2*Math.PI);
                // self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //虚线
    DottedLine:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.save();
                self.ctx.setLineDash([5,15])
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(mx,my);
                self.ctx.closePath();
                self.ctx.stroke();
                self.ctx.restore();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //圆角矩形
    RoundedCorner:function(r){
        let self=this
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let w=mx-ox,h=my-oy,r=10;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox-w+r,oy-h);
                self.ctx.lineTo(mx-r,oy-h);
                self.ctx.quadraticCurveTo(mx,oy-h,mx,oy-h+r);
                self.ctx.lineTo(mx,my-r);
                self.ctx.quadraticCurveTo(mx,my,mx-r,my);
                self.ctx.lineTo(ox-w+r,my);
                self.ctx.quadraticCurveTo(ox-w,my,ox-w,my-r);
                self.ctx.lineTo(ox-w,oy-h+r);
                self.ctx.quadraticCurveTo(ox-w,oy-h,ox-w+r,oy-h);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //填充
    tianchong:function(){
      this.type='fill';
    },
    //描边
    Strokes:function(){
      this.type='stroke';
    },
    //橡皮
    eraser:function(w,h,eraserBtn){
        let self=this;
        self.mask.onmousedown=function(){
            // if(self.history.length>0){
            //     self.ctx.putImageData(self.history[self.history.length-1],0,0)
            // }
            eraserBtn.style.display='block';
            eraserBtn.style.width=`${w}px`;
            eraserBtn.style.height=`${w}px`;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX-w/2,my=e.offsetY-h/2;
                if(mx>=self.width-w){
                    mx==self.width-w
                }if(mx<=0){
                    mx==0;
                }
                if(my>=self.height-h){
                    my==self.height-h
                }if(my<=0){
                    my==0;
                }
                eraserBtn.style.left=mx+'px';
                eraserBtn.style.top=my+'px';
                self.ctx.clearRect(mx,my,w,h);
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                eraserBtn.style.display='none';
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    //文字
    fonts:function()    {
        let self=this;
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement('div');
            div.style.cssText=`
              min-width:50px;height:30px;position:absolute;
              left:${ox}px;top:${oy}px;
            `
            div.contentEditable=true;
            self.mask.appendChild(div);
            self.mask.onmousedown=null;
            self.area=div;
            self.area.onmousedown=function(e){
                let ox=e.clientX-this.offsetLeft,
                    oy=e.clientY-this.offsetTop;
            }
            self.mask.onmousemove=function(e){
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                let cx=e.clientX,cy=e.clientY;
                let lefts=cx-ox;
                let tops=cy-oy;
                self.area.style.left=`${lefts}px`;
                self.area.style.top=`${tops}px`;
            }
            self.area.onmouseup=function(){
                self.area.onmouseup=null;
                self.mask.onmousemove=null;
            }
            self.area.onblur=function(){
                self.ctx.font=self.text;
                self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                this.parentNode.removeChild(this);
                self.area=null;
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
            }
        }
    },
    //裁切
    clip: function (clipBtn) {
        let self = this;
        self.init();
        self.clipBtn=clipBtn;
        self.mask.onmousedown = function (e) {
            let startx = e.offsetX;
            let starty = e.offsetY;
            let minx, miny, w, h;
            self.init();
            self.mask.onmousemove = function (e) {
                self.init();
                let endx = e.offsetX;
                let endy = e.offsetY;
                minx = startx > endx ? endx : startx;
                miny = starty > endy ? endy : starty;
                w = Math.abs(endx - startx);
                h = Math.abs(endy - starty);
                clipBtn.style.cssText=`
                    width:${w}px;height:${h}px;
                    position:absolute;top:${miny}px;left:${minx}px;
                    border:2px dashed #000;
                `
            }
            self.mask.onmouseup = function () {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.temp = self.ctx.getImageData(minx, miny, w, h);
                self.ctx.clearRect(minx, miny, w, h)
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.ctx.putImageData(self.temp, minx, miny);
                self.drag(minx, miny, w, h, clipBtn);
            }
        }
    },
    drag: function (x, y, w, h, clipBtn) {
        let self = this;
        self.mask.onmousemove = function (e) {
            let ox = e.offsetX;
            let oy = e.offsetY;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
            }
        }
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX;
            let oy = e.offsetY;
            //鼠标相对于div左上角的位置
            let cx = ox - x;
            let cy = oy - y;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
                return;
            }
            self.mask.onmousemove = function (e) {
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length != 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                let endx = e.offsetX;
                let endy = e.offsetY;
                let left = endx - cx;
                let top = endy - cy;
                if(left<0){
                    left=0;
                }
                if(left>self.width-w){
                    left=self.width-w
                }

                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h
                }
                clipBtn.style.left= left+'px';
                clipBtn.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.temp, left, top);
            }
            self.mask.onmouseup = function () {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.drag(x, y, w, h, clipBtn)
            }
        }

    },
    //保存
    Save:function(){
        let self=this;
        let data=self.obj.toDataURL().replace('data.image/png','data.image/octet-stream')
        location.href=data;
    },
    //下载
  /*  Download:function(){
        let self=this;
        let data=self.obj.toDataURL().replace('data:image/png','data:stream/octet')
        location.href=data;
    },*/
    //删除
    repeal:function(){
        let self=this;
        self.history.pop();
        if(self.history.length==0){
            self.ctx.clearRect(0,0,self.width,self.height)
            alert('已清空画布')
        }else{
            self.ctx.putImageData(self.history[self.history.length-1],0,0);
        }
    },
    //新建
    news:function(){
        let flag=confirm('是否保存');
        if(flag){
            this.Save(this.img);
            this.ctx.clearRect(0,0,this.width,this.height);
        }else{
            this.ctx.clearRect(0,0,this.width,this.height);
            this.history.push(this.ctx.getImageData(0,0,this.width,this.height))
        }
    },

}