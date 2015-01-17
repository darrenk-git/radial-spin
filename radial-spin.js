 /*

Author: Darren Kearney

Description: This is a modified version of the radial menu found here http://creative-punch.net/2014/02/making-animated-radial-menu-css3-javascript/   Thank you good peoples!

*/

 
document.querySelector('.menu-button').onclick = function(e) {
 
  e.preventDefault();
  
  document.querySelector('.circle').classList.toggle('open');
  //document.querySelector('.circle').classList.toggle('bounceIn');
}

//uses a global variable to set the start coordinates for drawing the circle in which to assign the link elements

var c = -0.45; //sets the start point to be a quarter circle from sine wave start (the top)
 
function rotate() {
  nIntervId = setInterval(draw, 1000);
}

function draw() {
  
  if (c<-2.48) 
    c = -0.50;
  else
    c = (c - 0.05).toFixed(4); //increments c
    
	var items = document.querySelectorAll('.circle a'); //gets the list of links
  
	for (var i = 0, l = items.length; i < l; i++) {  // sets up an iterator for each item on the list of links and the length of the list
  
	  items[i].style.left = (50 - 60*Math.cos( c * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";   // offset - amplitude * cos ( startposition * PI - 2 * (number of link / total links ) * PI ) % ( y coordinate as percentage )
	  items[i].style.top = (50 + 60*Math.sin( c * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

  }
}
 
function stopRotate() {
  clearInterval(nIntervId);
  c = -0.45;
}