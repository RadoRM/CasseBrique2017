let scoreValue;
function initScoreContainer(ctx) {
	measureScore(ctx);
	scoreValue = 0;
}

let measureScore = function(ctx){
	ctx.save(); // bonne pratique
    // On dessine en x,y
    ctx.beginPath();
    ctx.font = "25px Calibri";
	ctx.fillStyle = 'white';
	ctx.fillText("Score : " + scoreValue,5,30);
    
    ctx.restore();
};
