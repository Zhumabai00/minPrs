!function(){const e=document.getElementById("canvas"),t=e.getContext("2d"),a=new Image,s=new Image,g=new Image,n=new Image,i=new Image;a.src="assets/images/bird.png",s.src="assets/images/bg.png",g.src="assets/images/fg.png",n.src="assets/images/pipeUp.png",i.src="assets/images/pipeBottom.png";var h=new Audio;const o=new Audio;h.src="assets/audio/fly.mp3",o.src="assets/audio/score.mp3",console.log(h),document.addEventListener("keydown",(function(){m-=25,h.play()}));const d=[];d[0]={x:e.width,y:0};var r=0,m=150;i.onload=function h(){t.drawImage(s,0,0);for(var c=0;c<d.length;c++)t.drawImage(n,d[c].x,d[c].y),t.drawImage(i,d[c].x,d[c].y+n.height+100),d[c].x--,125===d[c].x&&d.push({x:e.width,y:Math.floor(Math.random()*n.height)-n.height}),(10+a.width>=d[c].x&&10<=d[c].x+n.width&&(m<=d[c].y+n.height||m+a.height>=d[c].y+n.height+100)||m+a.height>=e.height-g.height)&&location.reload(),5==d[c].x&&(r++,o.play());t.drawImage(g,0,e.height-g.height),t.drawImage(a,10,m),m+=1.5,t.fillStyle="#000",t.font="24px Verdana",t.fillText("Счет:"+r,10,e.height-20),requestAnimationFrame(h)}}();