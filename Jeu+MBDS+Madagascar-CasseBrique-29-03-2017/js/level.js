let levelValue;
function initLevelContainer(ctx) {
	measureLevel(ctx);
	levelValue = 1;
}

let measureLevel = function(ctx){
	ctx.save(); // bonne pratique
    // On dessine en x,y
    ctx.beginPath();
    ctx.font = "25px Calibri";
	ctx.fillStyle = 'white';
	ctx.fillText("Level : " + levelValue,170,30);
    ctx.restore();
};
