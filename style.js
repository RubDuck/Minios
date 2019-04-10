
!function createtime(){
  var time=20
  $('.footer').on('click','button',function(e){
    let button=$(e.currentTarget)
    let speed=button.attr('class')
    button.addClass('active')
    .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        time = 50
        break
      case 'middle':
        time = 20
        break
      case 'fast':
        time = 0.2
        break
    }
  })  

function main(code,fn){
  let n=0
  let Domcode=document.querySelector('#code')
  let mianstyle=document.querySelector('#mainstyle')
  console.log(mianstyle)
  id=setTimeout(function run(){
  n+=1
  Domcode.innerHTML=code.substring(0,n)
  mianstyle.innerHTML=code.substring(0,n)
  Domcode.scrollTop=Domcode.scrollHeight
  if(n<code.length){
  id=setTimeout(run,time)
  }
  else{
      fn
      clearTimeout(id)
  }
  },time)
}

let code=`
*{
  transition: all 0.5s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}
/* 加一个浮动效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
/* 现在正式开始 */
/* 我需要一张白纸 */
.wraper-code{
  width: 50%; left: 0; position: fixed; 
}
  /*大家好，接下来我要画一个小黄人*/
  /*先加上背景色吧*/
 .mainbody{
    background:#EC7E65;
  }
  /*加上一个控制器*/
  .footer{
    visibility:visible

  }
  /*那么现在开始吧，首先是身体*/
  .body{
    display:flex;
    background-color: #ffed41;
    height: 360px;
    width: 218px;
    border-radius:218px 218px 130px 130px;
    justify-content:center;
  }
  /*接下来，是小黄人的眼睛*/
  .eyes{
    position: absolute;
    background-color: #FAFAFA;
    height: 57px;
    width: 78px;
  
    border-radius:57px; 
    margin-top:78px;
     z-index:1;
    
  }
  /*左眼睛*/
  .eyes.left{
    margin-left:50px;
    
  }
  /*右眼睛*/
  .eyes.right{
    margin-left:-50px;
  }
  .eye{
    position:absolute;
    height:28px;
    width:28px;
  
    border-radius:50%;
    margin-top:100px;
    background:#724C25;
    z-index:1;
    
  }
  .eye::before{
    position:absolute;
    content: '';
    height:12px;
    width:12px;
    background:black;
    border-radius:50%;
    display:block; top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index:-1
  }
  .eye::after{
    content: '';
    height:8px;
    width:8px;
    background:white;
    border-radius:50%;
    display:block;
    margin-left:13px;
    margin-top:5px;
    
  }
  .eye.left{
    margin-left:-38px;
  }
  .eye.right{
    margin-left:38px;
  }
  
  .eyes::after{
    content: '';
    display:block;
    position:absolute;
    height:78px;
    width:78px;
    border:13px solid #E2E2E0;
    border-radius:50%;
    margin-left:-13px;
    margin-top:-21px;
    
  }
  /*然后是，小黄人的嘴巴*/
  .mouse{
    position:absolute;
    width:106px;
    height:36px;
    border:1px solid #603814;
    margin-top:185px;
    border-radius:0 0 103px 103px;
    background:#603814;
  }
  .mouse::before{
    position:absolute;
    content:'';
    display:block;
    width:185px;
    height:85px;
    border-radius:0 0 180px 180px;
    margin-top:-30px;
    display:block;
    left: 50%;
    transform: translate(-50%,-50%);
    background:#FFED41;
  }
  /*小黄人的牙齿*/
  ul.teeth{
    
    width:110px;
    height:15px;
    margin-top:4px;
    margin-left:12px
  }
  ul.teeth li{
    display:inline-block;
    float:left;
    width:20px;
    height:15px;
    border-radius:0 0 15px 15px;
    background:#FFFFFF
    
  
  }
  ul.teeth li:first-child{
    height: 10px;
    
  }
  ul.teeth li:last-child{
    height: 10px;
    
  }
  /*在加上小黄人的手*/
  .hander{
    position:absolute;
    height:103px;
    width:17px;
    margin-top:246px;
    background:#E5C034;
    
  }
  .hander.left{
    margin-left:-117px;
    border-radius:17px 0 0 0;
  }
  .hander.right{
    margin-left:117px;
    border-radius:0 17px 0 0;
  }
  /*给小黄人加双手套吧*/
  .glove{
    position:absolute;
    border:34px solid red;
    margin-top:349px;
  }
  .glove.left{
    margin-left:-117px;
    border-color:#424242  transparent  transparent  transparent; 
  }
  .glove.right{
    margin-left:117px;
    border-color:#424242  transparent  transparent  transparent; 
  }
  .finger{
    position :absolute;
    width:17px;
    height:32px;
    margin-top:363px;
    background:#424242;
    border-radius:17px;
  }
  .finger.left{
    margin-left:-118px;
   
  }
  .finger.right{
    margin-left:115px;
  }
  .finger::before{
    content:'';
    display:block;
    position:relative;
    width:13px;
    height:13px;
    background:#383838;
    border-radius:50%;
     margin-top:20px;
    z-index:-1;
  
  }
  .finger.left::before{
    
    margin-left:9px;
  }
  .finger.right::before{
    
    margin-left:-6px;
  }
  .finger::after{
    position:relative;
    content:'';
    display:block;
    width:14px;
    height:14px;
    background:#2C2C2C;
    border-radius:50%;
    margin-top:-20px;
    z-index:-2;
    
  }
  .finger.right::after{
    margin-left:-10px;
  }
  .finger.left::after{
    
    margin-left:12px;
  }
 /*小黄人的鞋子*/
  .shoes{
    position :absolute;
    margin-top:380px;
    background:#424242;
    height:35px;
    width:60px;
    
  }
  .shoes.left {
   margin-left:-35px;
    border-radius:30px 0 0 0 
  
    
  }
  .shoes.right {
   margin-left:35px;
    border-radius:0 30px 0 0 
    
    
  }
  .shoes::before{
    content:'';
    display:block;
    height:6px;
    width:63px;
    margin-top:35px;
    margin-left:-2px;
    background:#2D2D2D
    
  }
  /*嗯，小黄人的腿*/
  .foot{
    position :absolute;
    border:25px solid red;
    margin-top:359px;
    background:#424242;
  }
  .foot.left{
    margin-left:-30px;
    border-color:#224467 #224467  #EC7E65 #EC7E65
    
    
  }
  .foot.right{
    margin-left:30px;
    border-color:#224467 #EC7E65  #EC7E65 #224467
    
  }
  /*最后，加件衣服吧*/
  .pants{
    height: 360px;
    width: 218px;
    border-radius:218px 218px 130px 130px;
    overflow:hidden;
    
  }
  .pant{
    height:65px;
    width:218px;
    margin-top:295px;
    background:#2B5B89;
    border:1px solid #2B5B89;
    
  }
  .pant::before{
    content:'';
    display:block;
    height:55px;
    width:138px;
    margin:0 auto;
    margin-top:-55px;
    background:#2B5B89;
  }
  .lacy{
    position:absolute;
    height:14px;
    width:55px;
    background:#224467;
    
  }
  .lacy.left{
    transform:rotate(30deg);
    margin-top:-120px;
    
  }
  .lacy.right{
    transform:rotate(-30deg);
    margin-top:-120px;
    margin-left:164px;
    
  }`
  main(code)
}.call()
