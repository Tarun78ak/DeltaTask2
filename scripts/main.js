var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var x=300,y=530,xcord=0,ycord=0;
var AR_x=[],AR_y=[];
const CANNON_WIDTH=40,CANNON_HEIGHT=20,BULLET=10; 
var ballx1=20;
var bally1=Math.floor(Math.random()*200)+20;
var balldx1 = +4;
var balldy1 = +4;
var ballradius1=20;
var ballx2=20;
var bally2=Math.floor(Math.random()*200)+20;
var balldx2 = +5;
var balldy2 = +5;
var ballradius2=20;
var ballx3=20;
var bally3=Math.floor(Math.random()*200)+20;
var balldx3 = +7;
var balldy3 = +7;
var ballradius3=20;
ctx.font = "20px Georgia";
ctx.lineWidth = 10;
var rockno1=Math.floor(Math.random()*100)+1;
var c1;
var bullettouch1;
var toptouch1;
var rockno2=Math.floor(Math.random()*400)+1;
var c2;
var bullettouch2;
var toptouch2;
var rockno3=Math.floor(Math.random()*500)+1;
var c3;
var bullettouch3;
var toptouch3;
var score=0;
var count=0;
function rect(x,y,width,height,fcolor)
{
	ctx.fillStyle=fcolor;
	ctx.fillRect(x,y,width,height);
}

function text1(){
	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.fillText(rockno1,ballx1-10,bally1);
	ctx.fill();
	ctx.closePath(); 
	if (rockno1<0){
		ballx1=ballx1+canvas.width;
	}
	if(rockno1==0){
		ballx1+=canvas.width;
	}

}
function text2(){
	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.fillText(rockno2,ballx2-10,bally2);
	ctx.fill();
	ctx.closePath(); 
	if (rockno2<0){
		ballx2=ballx2+canvas.width;
	}
	if(rockno2==0){
		ballx2+=canvas.width;
	}

}
function text3(){
	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.fillText(rockno3,ballx3-10,bally3);
	ctx.fill();
	ctx.closePath(); 
	if (rockno3<0){
		ballx3=ballx3+canvas.width;
	}
	if(rockno3==0){
		ballx3+=canvas.width;
	}

}
function circle1(){
	c1=bally1;
	ctx.beginPath();
    ctx.arc(ballx1,c1, ballradius1, 0, Math.PI*2, false);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
	text1();
	ballx1+=balldx1;
	bally1+=balldy1;
	if(ballx1 + balldx1 > canvas.width-ballradius1 || ballx1 + balldx1 < ballradius1) {
		balldx1 = -balldx1;
	}
    if(bally1 + balldy1 < ballradius1 ) {
		balldy1 = -balldy1;
	}
	toptouch1=y-bally1;
	if(bally1+balldy1>canvas.height-50-ballradius1 || (toptouch1<=(ballradius1-10) && ballx1>x && ballx1<(x+40))){
        if(ballx1>x-5&&ballx1<x+CANNON_WIDTH+5){
			count=count+1;
			gameover();
		}
		else{
			balldy1=-balldy1;
		}
	}
	
	
}
function circle2(){
	c2=bally2;
	ctx.beginPath();
    ctx.arc(ballx2,c2, ballradius2, 0, Math.PI*2, false);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
	text2();
	ballx2+=balldx2;
	bally2+=balldy2;
	if(ballx2 + balldx2 > canvas.width-ballradius2 || ballx2 + balldx2 < ballradius2) {
		balldx2= -balldx2;
	}
    if(bally2 + balldy2 < ballradius2 ) {
		balldy2 = -balldy2;
	}
	toptouch2=y-bally2;
	if(bally2+balldy2>canvas.height-50-ballradius2 || (toptouch2<=(ballradius2-10) && ballx2>x && ballx2<(x+40))){
        if(ballx2>x-5&&ballx2<x+CANNON_WIDTH+5){
			count=count+1;
			gameover();
		}
		else{
			balldy2=-balldy2;
		}
	}
	
	
}
function circle3(){
	c3=bally3;
	ctx.beginPath();
    ctx.arc(ballx3,c3, ballradius3, 0, Math.PI*2, false);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
	text3();
	ballx3+=balldx3;
	bally3+=balldy3;
	if(ballx3 + balldx3 > canvas.width-ballradius3 || ballx3 + balldx3 < ballradius3) {
		balldx3 = -balldx3;
	}
    if(bally3 + balldy3 < ballradius3 ) {
		balldy3= -balldy3;
	}
	toptouch3=y-bally3;
	if(bally3+balldy3>canvas.height-50-ballradius3 || (toptouch3<=(ballradius3-10) && ballx3>x && ballx3<(x+40))){
        if(ballx3>x-5&&ballx3<x+CANNON_WIDTH+5){
			count=count+1;
			gameover();
		}
		else{
			balldy3=-balldy3;
		}
	}
	
	
}
function cannon(){
	if(x>canvas.width-CANNON_WIDTH)
		x=canvas.width-CANNON_WIDTH;
	if(x<0)
		x=0;
	rect(0,0,canvas.width,canvas.height-50,"red");
	rect(0,550,canvas.width,50,"black");
	rect(x,y,40,20,"grey");	
}
function bullet()
{	
	xcord=x+15;
	ycord=y-15;
	AR_x.push(xcord);
	AR_y.push(ycord);
}
function movebullet(){
	var i=0;
	
	for(i=0;i<AR_x.length;i++)
	{
		rect(AR_x[i],AR_y[i],BULLET,BULLET,"black");
		AR_y[i]-=20;
		bullettouch1=Math.sqrt(((ballx1 -AR_x[i])*(ballx1-AR_x[i]))+((bally1-AR_y[i])*(bally1-AR_y[i])));
        if (bullettouch1<=(ballradius1+10)){
            score+=1;
            rockno1=rockno1-1;
            AR_x[i]=AR_x[i]+canvas.width;
		}
		bullettouch2=Math.sqrt(((ballx2 -AR_x[i])*(ballx2-AR_x[i]))+((bally2-AR_y[i])*(bally2-AR_y[i])));
        if (bullettouch2<=(ballradius2+10)){
            score+=1;
            rockno2=rockno2-1;
            AR_x[i]=AR_x[i]+canvas.width;
		}
		bullettouch3=Math.sqrt(((ballx3 -AR_x[i])*(ballx3-AR_x[i]))+((bally3-AR_y[i])*(bally3-AR_y[i])));
        if (bullettouch3<=(ballradius3+10)){
            score+=1;
            rockno3=rockno3-1;
            AR_x[i]=AR_x[i]+canvas.width;
        }
	}

	console.log(AR_x);
	console.log(AR_y);

}
function scorea(){
	ctx.font="20px Cursive";
	ctx.fillStyle="white"; 
	ctx.fillText("Score",300,575);
	ctx.fillText(score,400,575);
}
function gameover(){
	if (count==1) 
	{
		alert('GAME OVER');
		document.location.reload();
		clearInterval(interval);
	}		
}
function draw()
{	
	ctx.clearRect(0,0,canvas.width,canvas.height);
	cannon();
	circle1();
	circle2();
	circle3();
	bullet();
	movebullet();
	scorea();    
	gameover();
}
requestAnimationFrame(move,300);
function move()
{
	
	var z=event.key;
	if(z=="ArrowRight")
	{	x+=200;
		draw();
	}
	if(z=="ArrowLeft")
	{	x-=200;
		draw();
	}
	
}


setInterval(draw,50); 
document.addEventListener("keydown",move);
