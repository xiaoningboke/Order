/**
  **************************************************************************************************
  **********              DEDE168���߶���ϵͳ2016 WEB��WAP����Ӧ��ٷ���ʽ��              **********
  **********------------------------------------------------------------------------------**********
  **********             �ٷ���վ��http://www.dede168.com/ QQ����Ⱥ��97206582             **********
  **************************************************************************************************
*/
var speeds=80;
var bdfahuo=document.getElementById('bdfahuo');
var bdfahuo1=document.getElementById('bdfahuo1');
var bdfahuo2=document.getElementById('bdfahuo2');
bdfahuo2.innerHTML=bdfahuo1.innerHTML
function Marquee1(){
	if(bdfahuo2.offsetHeight-bdfahuo.scrollTop<=0)
	bdfahuo.scrollTop-=bdfahuo1.offsetHeight
	else{
		bdfahuo.scrollTop++
	}
}
var MyMar1=setInterval(Marquee1,speeds)
bdfahuo.onmouseover=function(){
	clearInterval(MyMar1)
}
bdfahuo.onmouseout=function(){
	MyMar1=setInterval(Marquee1,speeds)
}
/*///////////////////////////////////////// CLORDERJSEND /////////////////////////////////////////*/