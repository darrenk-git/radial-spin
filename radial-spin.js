  
document.querySelector('.menu-button').onclick = function(e) {
 
  e.preventDefault();
  
  document.querySelector('.circle').classList.toggle('open');
  //document.querySelector('.circle').classList.toggle('bounceIn');
}

//how do you make a global variable?

var c = 0;
 
function rotate() {
  nIntervId = setInterval(draw, 1000);
}

function draw() {
	
	c = (c - 0.05).toFixed(4); //increments c
	
	var items = document.querySelectorAll('.circle a'); //gets the list of links
	for (var i = 0, l = items.length; i < l; i++) {
  
	  items[i].style.left = (50 - 60*Math.cos( c * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  items[i].style.top = (50 + 60*Math.sin( c * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

      }
}
 
function stopRotate() {
  clearInterval(nIntervId);
  c = 0;
}


/*
function tickTock() {
		nIntervalId = setInterval(shiftXY, 500)	
}

function shiftXY() {
	x = 0;
	do {
		
    x = x - 0.05; //increment x
	console.log('The amount which the circle will be drawn away from it\'s origin point is:  str(x)');

	// draw the list of anchor points
	for (var i = 0, l = items.length; i < l; i++) {
  
	  items[i].style.left = (50 - 60*Math.cos( x * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  items[i].style.top = (50 + 60*Math.sin( x * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

      }
	
	
	} while (x > -1)

}

function counter(x) {
	x = x + 0.05;
	return x;
}


*/

/*
/////////////////////////
function rotateCircle() {
 nIntervalId = setInterval(shiftXY, 500)	
}

function shiftXY() {
	

		
	  for (var i = 0, l = items.length; i < l; i++) {
  
	  items[i].style.left = (50 - 60*Math.cos( -1*(rotateAmount) * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  items[i].style.top = (50 + 60*Math.sin( -1*(rotateAmount) * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

      }
    }
}
/////////////////////////

/*
function rotate(rotateNotch) {

  do {

    for(var i = 0, l = items.length; i < l; i++) {
  
	  items[i].style.left = (50 - 60*Math.cos(rotateNotch * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  items[i].style.top = (50 + 60*Math.sin(rotateNotch * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

    }
	
  rotateNotch = rotateNotch - 0.05;
  
  } while (rotateNotch > -1)


}

rotate(0);*/




/////////////////////////// rotate using a simple sine wave calculation, incrememnting one part of it.






 /*
 //set initial state?

  function frame() { //every interval do this
  
  x = 0;
    do {
     var items = document.querySelectorAll('.circle a');
	
     // write a sin wave calculation to get each elements' top left css attribute that determines it's placement
     // increment this further along the sin wave by 1 pixel
    
	
     for (var i = 0, l = items.length; i < l; i++) { //(x = 0; x > -1; x=x-0.05)
		
	   items[i].style.left = (50 - 35*Math.cos(-(x) * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	   items[i].style.top = (50 + 35*Math.sin(-(x) * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	 }
    
	 x = x-0.05;
  
    } while (x > -1)
  }

  var id = setInterval(frame, 10); // draw a new frame every 10 ms

 }

rotate(items); //calls the rotate
*/