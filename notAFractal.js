/*
Refactor manuale variabili:
a=canvas
c=context del canvas
*/
//if the window size change, we restart everything.
window.addEventListener('resize', function(event){
  top.reload();
});
setInterval(run, 23);
var f=1-50/a.height;
var mx,my;
a.addEventListener("mousemove", function (e) {
  mx=e.clientX;
  my=e.clientY+50;
});
a.style.cursor="none";
//alert(f);
function run()
{
  //draw the background & frame
  c.fillStyle="#e";
  c.fillRect(0,0,a.width,a.height);
	c.fillStyle="#000";
	c.fillRect(1,0,a.width-2,a.height-1);
  /*//and a frame
  c.fillStyle="#eeeeee";
  c.fillRect(0,0,1,a.height);
  c.fillRect(a.width-1,0,1,a.height);
  c.fillRect(0,a.height-1,a.width,1);*/

  //scale and translate, for fractal effect
  c.save();
  for(i=98;i--;)
  {
    c.translate((a.width-a.width*f)/2,0);
    c.scale(f,f);
    drawShim();
    c.save();
    c.translate(0,50);
  }
  //draw mouses, inverted order
  for(i=99;i--;)
  {
    drawMouse();
    c.restore();
  }
  c.restore();
  my-=50;
  drawMouse();
  my+=50;
}
//this draw a really cool and realistic mouse pointer
function drawMouse()
{
  c.setLineDash([1,0])
  c.fillStyle="#FFF";
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
//and this draw the JS1K shim, as is
function drawShim()
{
  //draw the shim box
  var grd=c.createLinearGradient(0,0,0,50);
  grd.addColorStop(0,"#eaeaea");
  grd.addColorStop(1,"#d0d0d0");
  c.fillStyle=grd;
  c.fillRect(0,0, a.width, 50);

  //draw a frame (i bet is useful)
  c.fillRect(0,0,1,a.height*2);
  c.fillRect(a.width-1,0,1,a.height*2);
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
  c.moveTo(offset+166, 25);
  c.lineTo(offset+166+31, 25);
  c.moveTo(offset+166+35, 25);
  c.lineTo(offset+166+35+32, 25);
  c.moveTo(offset+166+432, 25);
  c.lineTo(offset+166+432+81, 25);
  c.moveTo(offset+166+538, 25);
  c.lineTo(offset+166+538+81, 25);
  c.moveTo(offset+166+643, 25);
  c.lineTo(offset+166+643+110, 25);
  c.lineWidth = 2;
  c.stroke();

  //write the description
  c.font = "italic 16px serif";
  offset=(a.width-166-179)/2;
  if(offset<0) offset=0;
  c.fillText("Trust me, i am not a fractal!",166+offset,42); //lunga 179
}