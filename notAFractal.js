/*
Refactor manuale variabili:
a=canvas
c=context del canvas
*/
//if the window size change, we restart everything.
window.addEventListener('resize', function(event){
  top.reload();
});
var activeTask=setInterval(run, 33);
function run()
{
  //alert("NOOO!");
	//draw the background
	c.fillStyle="Black";
	c.fillRect(0,0,a.width,a.height);
}