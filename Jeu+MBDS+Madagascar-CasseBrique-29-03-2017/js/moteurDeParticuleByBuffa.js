	var sound;
	var mousePos;

	var particles = [];
	
	function randomFloat (min, max)
	{
		return min + Math.random()*(max-min);
	}

function removeFromArray(array, object) {
    var idx = array.indexOf(object);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
    return array;
}
	
	/*
	 * A single explosion particle
	 */
	function Particle ()
	{
		this.scale = 1.0;
		this.x = 0;
		this.y = 0;
		this.radius = 20;
		this.color = "#000";
		this.velocityX = 0;
		this.velocityY = 0;
		this.scaleSpeed = 0.5;
		this.useGravity = false;
      
		this.update = function(ms)
		{
			// shrinking
          
			this.scale -= this.scaleSpeed * ms / 1000.0;
          
			if (this.scale <= 0)
			{
              // particle is dead, remove it
              removeFromArray(particles, this);
              
			}
			
			// moving away from explosion center
			this.x += this.velocityX * ms/1000.0;
			this.y += this.velocityY * ms/1000.0;
          
          // and then later come downwards when our
		  // gravity is added to it. We should add parameters 
          // for the values that fake the gravity
          if(this.useGravity) {
              this.velocityY += Math.random()*4 +4;
          }
		};
		
		this.draw = function(ctx)
		{
			// translating the 2D context to the particle coordinates
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.scale(this.scale, this.scale);
			
			// drawing a filled circle in the particle's local space
			ctx.beginPath();
			ctx.arc(0, 0, this.radius, 0, Math.PI*2, true);
			//ctx.closePath();
			
			ctx.fillStyle = this.color;
			ctx.fill();
			
			ctx.restore();
		};
	}
	
	/*
	 * Basic Explosion, all particles move and shrink at the same speed.
	 * 
	 * Parameter : explosion center
	 */
	function createBasicExplosion(x, y)
	{
		// creating 4 particles that scatter at 0, 90, 180 and 270 degrees
		for (var angle=0; angle<360; angle+=90)
		{
			var particle = new Particle();
			
			// particle will start at explosion center
			particle.x = x;
			particle.y = y;
			
			particle.color = "#FF0000";
			
			var speed = 50.0;
			
			// velocity is rotated by "angle"
			particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
			particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
			
			// adding the newly created particle to the "particles" array
			particles.push(particle);
		}
	}
	
	/*
	 * Advanced Explosion effect
	 * Each particle has a different size, move speed and scale speed.
	 * 
	 * Parameters:
	 * 	x, y - explosion center
	 * 	color - particles' color
	 */
	function createExplosion(x, y, color)
	{
		var minSize = 10;
		var maxSize = 30;
		var count = 10;
		var minSpeed = 60.0;
		var maxSpeed = 200.0;
		var minScaleSpeed = 1.0;
		var maxScaleSpeed = 4.0;
		
		for (var angle=0; angle<360; angle += Math.round(360/count))
		{
			var particle = new Particle();
			
			particle.x = x;
			particle.y = y;
			
            // size of particle
			particle.radius = randomFloat(1, 3);
			
			particle.color = color;
			
            // life time, the higher the value the faster particle 
            // will die
			particle.scaleSpeed = randomFloat(0.3, 0.5);
          
            // use gravity
			particle.useGravity = true;
			
			var speed = randomFloat(minSpeed, maxSpeed);
			
			particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
			particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
			
			particles.push(particle);
		}
    
	}

// Delta = time between two consecutive frames,
// for time-based animation
function updateAndDrawParticules(delta, ctx) {
   for (var i = 0; i < particles.length; i++) {
	  var particle = particles[i];
			
	  particle.update(delta);
	  particle.draw(ctx);
   }
}

//------------- ANIMATION PART -------------------------
var delta, oldTime=0;

function timer(currentTime) {
var delta = currentTime - oldTime;
oldTime = currentTime;
return delta;

}
	
function getMousePos(canvas, evt) {
   // necessary to take into account CSS boudaries
   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
   };
}

// SOUND WITH HOWLER JS
sound = new Howl({
  urls: ['../Jeu+MBDS+Madagascar-CasseBrique-29-03-2017/sounds/sounds.mp3', '../Jeu+MBDS+Madagascar-CasseBrique-29-03-2017/sounds/sounds.ogg'],
  sprite: {
    blast: [0, 2000],
    laser: [3000, 700],
    winner: [5000, 9000]
  }, 
  onload: function() { console.log("Sound loaded");}
});

function startDoubleExplosion(x, y) {
  		        createExplosion(x, y, "#525252");
			    // On peut multiplier la densité en générant plusieurs 
                // explositons de couleurs différentes...
			    createExplosion(x, y, "#FFA318");
                //createExplosion(x, y, "green");
				sound.play('blast');

}

