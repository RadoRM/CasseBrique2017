//Code taken from http://codepen.io/mujdatsayar/pen/sehfo (by Müjdat)
var Lightning = function(ctx) {
	this.strike = function(x1, y1, x2, y2, color1, color2, drawOrbs) {
		var x = x2 - x1;
		var y = y2 - y1;
		var segments = 10;
		var distance = Math.sqrt(x * x + y * y);
		var width = distance / segments;
		var prevX = x1;
		var prevY = y1;

		if(drawOrbs) {
			// Draw point
			ctx.save();
			ctx.strokeStyle = color1;
			ctx.fillStyle = color1;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(x1, y1, 13 + (Math.random() * 4), 0, 2 * Math.PI, false);
			ctx.fill();
			ctx.restore();  
		}
			
			
		if(drawOrbs) {
			// Draw point
			ctx.save();
			ctx.strokeStyle = color2;
			ctx.fillStyle = color2;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(x1, y1, 13 + (Math.random() * 4), 0, 2 * Math.PI, false);
			ctx.fill();
			ctx.restore();  
		}
	};
}
