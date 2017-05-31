window.onload=function(){
    let audio=document.querySelector('audio');
    let top=document.querySelector('.top');
    let songs=document.querySelector('.songs');
    let name=document.querySelector('.name');
    let ul=document.querySelector('ul');
    let lyrics=document.querySelector('.lyrics')
    let zhong=document.querySelector('.zhong');
    let qian=document.querySelector('.qian');
    let hou=document.querySelector('.hou');
    let tbox=document.querySelector('.tbox');
    let xbox=document.querySelector('.xbox');
    let img=document.querySelector('img');
    let gq=document.querySelector('.gq');
    let yc=document.querySelector('.yc');
    let jindu2=document.querySelector('.jindu2');
    let ctime=document.querySelector('.ctime');
    let dtime=document.querySelector('.dtime');
    let volumes=document.querySelector(".yinliang");
    console.log(volumes)
    let string='',i=x=0;
    let index=0;

    render(database[index])
    /*function init(obj){
        obj.lyrics.forEach(function(value,index){
            string+=`<li>${value.lyric}</li>`
        })
        ul.innerHTML=string;
        gq.innerHTML=obj.songs;
        audio.src = obj.src;
    }*/

    //音量
    let first=$('.first')[0];
    let second=$('.second')[0];
    let yuan=$('.yuan')[0];
    let width=second.offsetWidth;
    let sond;
    volumes.onclick=function(){
//             if(audio.volume){
// //              把当前的音量赋给sond
//                 sond=audio.volume;
//                 //当TRUE时 把0赋给当前音量
//                 audio.volume=0;
// //              圆点的位置为0
//                 volumes.html('&#xe621;')
//             }else{
// //              把保存的音量赋给audio volume
//                 audio.volume=sond;
//                 volumes.html('&#xe654;')

//             }
        
        }
        
        first.onclick=function(e){
//          求出当前音量
            audio.volume=e.offsetX/first.offsetWidth*1;
//          当改变音量时触发
            console.log(audio.volume)
            
        }
     
        audio.onvolumechange=function(){
                yuan.style.left=audio.volume*first.offsetWidth+'px'
                second.style.width=audio.volume*first.offsetWidth+'px'
            }
     
//      let pregress=$(".pregress")[0]
//      pregress.onclick=function(e){
// //      把音频的时间长度赋给一个变量
//         let zongtime=audio.duration;
// //      当前的时间
//         audio.currentTime=e.offsetX/pregress.offsetWidth*zongtime;
//         con.style.width=e.offsetX+'px';
//         console.log(pregress)
        
//     }


    zhong.onclick=function(){
        if(audio.paused){
            audio.play();
            zhong.classList.toggle('icon-pause');
        }else{
            audio.pause();
            zhong.classList.toggle('icon-pause');
        }
    }
    hou.onclick=function () {
        index++;
        if(index>=database.length){
            index=0;
        }
        // hou.classList.toggle("icon-pause");
        // render(database[index]);
         music(index);
    };
    qian.onclick=function () {
        index--;
        if(index<0){
            index=database.length-1;
        }
        // hou.classList.toggle("icon-pause");
        // render(database[index]);
         music(index);
    };
     //切换
    function music(index){
        let flag=audio.paused;
        x=0;
        jindu2.style.width=0;
        render(database[index])
        if(!flag){
            audio.autoplay=true;
        }else{
            audio.autoplay=false;
        }
    }
    //time
    function  SJ(time){
        let min =  Math.floor(time /60) >=10 ? Math.floor(time /60) :  '0'+Math.floor(time /60);
        let sec =  Math.floor(time % 60) >=10 ? Math.floor(time % 60) :  '0'+Math.floor(time % 60);
        return `${min}:${sec}`;
    }
    audio.ontimeupdate=function(e){
        let currentTime=SJ(audio.currentTime);
        let duration=SJ(audio.duration);
        let string='';
        ctime.innerText=currentTime;
        // dtime.innerText=duration;
        jindu2.style.width=audio.currentTime/audio.duration*100+'%';

        lyrics.innerHTML='';
        database[index]['lyrics'].forEach(function(value,index){
            if( value.time == currentTime ){
                x = i = index;
            }
        })

        if(x<2){
            i=0
        }else{
            i = x - 2;
        }
        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
                string+=`
             <li class="hot">
                ${database[index]['lyrics'][j]['lyric']}
             </li>`;
            }else{
                string+=`
             <li >
                ${database[index]['lyrics'][j]['lyric']}
             </li>`;
            }
        }
        lyrics.innerHTML = string;

    }
    //初始化
    function render(obj){
        let string='';
        // song  author   lyrics>li  audio(src)
        gq.innerText = obj.songs;
        yc.innerText = obj.name;
        audio.src = obj.src;

        //bottom
        xbox.innerText = `${obj.songs} - ${obj.name} `;
        img.src= obj.photo;
        ctime.innerText = '00:00';
        dtime.innerText = obj.alltime;
        //
        obj.lyrics.forEach(function(value,index){
            //   {time: "00:04", lyric: "莫文蔚"},

            string +=`<li>${value.lyric}</li>`

        })
        lyrics.innerHTML= '';
        lyrics.innerHTML=string;
    }
}