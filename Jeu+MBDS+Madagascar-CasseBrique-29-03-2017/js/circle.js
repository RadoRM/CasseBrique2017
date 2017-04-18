class Circle {
	constructor(x, y, radius, vx, vy, r, g, b){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.vx = vx;
		this.vy = vy;
		this.r = r;
		this.g = g;
		this.b = b;
	}
	
	draw(ctx) {
		
		ctx.save(); // bonne pratique
		//Create the circles
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = "rgba("+this.r+", "+this.g+", "+this.b+", 0.5)";
		ctx.fill();
		
		ctx.restore();
	}
}