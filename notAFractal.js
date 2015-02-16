/*
Refactor manuale variabili:
a=canvas
c=context del canvas
*/
//if the window size change, we restart everything.
window.addEventListener('resize', function(event){
  top.reload();
});
var activeTask=setInterval(run, 23);
var amount=(a.height-50)/a.height;
var mx;
var my;
a.addEventListener("mousemove", function (evt) {
  mx=evt.clientX;
  my=evt.clientY+50;
});
a.style.cursor="none";
//alert(amount);
function run()
{
  //draw the background
	c.fillStyle="Black";
	c.fillRect(0,0,a.width,a.height);
  //and a frame
  c.fillStyle="#eeeeee";
  c.fillRect(0,0,1,a.height);
  c.fillRect(a.width-1,0,1,a.height);
  c.fillRect(0,a.height-1,a.width,1);

  //scale and translate, for fractal effect
  c.save();
  for(i=110;i--;)
  {
    c.translate((a.width-a.width*amount)/2,0);
    c.scale(amount,amount);
    drawShim();
    c.save();
    c.translate(0,50);
  }
  for(i=111;i--;)
  {
    drawMouse();
    c.restore();
  }
  c.restore();
  my-=50;
  drawMouse();
  my+=50;
}
function drawMouse()
{
  c.setLineDash([1,0])
  c.fillStyle="White";
  c.translate(mx,my);
  c.beginPath();
  c.moveTo(0,0);
  c.lineTo(0,16);
  c.lineTo(4,12);
  c.lineTo(8,20);
  c.lineTo(11,19);
  c.lineTo(7,12);
  c.lineTo(12,11);
  c.closePath();
  c.stroke();
  c.fill();
  c.translate(-mx,-my);
}
function drawShim()
{
  //draw the shim box
  var grd=c.createLinearGradient(0,0,0,50);
  grd.addColorStop(0,"#eaeaea");
  grd.addColorStop(1,"#d0d0d0");
  c.fillStyle=grd;
  c.fillRect(0,0, a.width, 50);

  //draw a frame (i bet is useful)
  c.fillRect(0,0,1,a.height+500);
  c.fillRect(a.width-1,0,1,a.height+500);
  //c.fillRect(0,a.height-1,a.width,1);

  //draw the buttons
  c.fillStyle="#dddddd";
  c.fillRect(10,4,42,42);
  c.fillStyle="#888888";
  c.fillRect(11,5,41,41);
  c.fillStyle=grd;
  c.fillRect(11,5,40,40);

  c.fillStyle="#dddddd";
  c.fillRect(62,4,42,42);
  c.fillStyle="#888888";
  c.fillRect(63,5,41,41);
  c.fillStyle=grd;
  c.fillRect(63,5,40,40);

  c.fillStyle="#dddddd";
  c.fillRect(114,4,42,42);
  c.fillStyle="#888888";
  c.fillRect(115,5,41,41);
  c.fillStyle=grd;
  c.fillRect(115,5,40,40);

  //write the button text ↞ ↠ ↻
  c.fillStyle="Black";
  c.font = "700 30px sans-serif";
  c.fillText("↞",18,36);
  c.fillText("↠",70,36);
  c.fillText("↻",122,36);

  //write the title
  c.font = "16px serif";
  var offset=(a.width-166-752)/2;
  if(offset<0) offset=0;
  c.fillText("JS1k 2015 demo — \"Not a fractal\" by infernet89 — 1024 bytes — demo details — list of demos — js1k.com/NNNN",166+offset,20); //Lunga 752 px
  
  //the dashed lines for links
  c.setLineDash([3]);
  c.beginPath();
  c.moveTo(166+offset, 25);
  c.lineTo(166+offset+31, 25);
  c.moveTo(166+offset+35, 25);
  c.lineTo(166+offset+35+32, 25);
  c.moveTo(166+offset+432, 25);
  c.lineTo(166+offset+432+81, 25);
  c.moveTo(166+offset+538, 25);
  c.lineTo(166+offset+538+81, 25);
  c.moveTo(166+offset+643, 25);
  c.lineTo(166+offset+643+110, 25);
  c.lineWidth = 2;
  c.stroke();

  //write the description
  c.font = "italic 16px serif";
  offset=(a.width-166-179)/2;
  if(offset<0) offset=0;
  c.fillText("Trust me, i am not a fractal!",166+offset,42); //lunga 179
}