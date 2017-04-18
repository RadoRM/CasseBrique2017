window.onload = init;
let jeu;
let canvas;

function init() {
	canvas = document.querySelector("#myCanvas");

    jeu = new MoteurJeu();
	jeu.start();
}

function MoteurJeu() {
	let canvas, ctx, width, height;
	let tableauxDesBalles = [];
	let tableauxDesBallesNiveau2 = [];
	let tableauxDesBallesNiveau3 = [];
	let tableauxDesBallesNiveau4 = [];
	let tableauxDesBallesNiveau5 = [];
	let tableauxDesTuiles = [];
	let tableauxDesCouleursDesTuiles = [];
	let tableauxDesCouleursDesBalles = [];
	let tableauxDesEclairs4 = [];
	let circles = [];
	let gameover = false;
	let countExplosionIteration = 0;
	let currentGameTrack = 0;
	var assets = {};
	
	function initTableauxDesCouleursDesBalles(){
		tableauxDesCouleursDesBalles.push('rgb(255, 255, 255)'); //blanc
		tableauxDesCouleursDesBalles.push('rgb(255, 106, 0)'); //orange
		tableauxDesCouleursDesBalles.push('rgb(224, 2, 2)'); //rouge
	}
	
	function initTableauxDesCouleursDesTuiles(){
		tableauxDesCouleursDesTuiles.push('rgb(178, 19, 1)'); //rouge
		tableauxDesCouleursDesTuiles.push('rgb(165, 0, 140)'); //violet
		tableauxDesCouleursDesTuiles.push('rgb(19, 63, 86)'); //gris bleu
		tableauxDesCouleursDesTuiles.push('rgb(5, 16, 173)'); //bleu
		tableauxDesCouleursDesTuiles.push('rgb(67, 193, 191)'); //bleu clair
		tableauxDesCouleursDesTuiles.push('rgb(106, 221, 143)'); //vert clair
		tableauxDesCouleursDesTuiles.push('rgb(11, 188, 68)'); //vert
	}

	function creerDesBalles(nbBalles) {
      let startingPoints = Array(10, 417);
	  for(let i = 0; i < nbBalles; i++) {
	    let x = startingPoints[Math.floor(Math.random()*startingPoints.length)]; // Math.random() renvoie un nombre entre 0 et 1
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 1+Math.random() * 1.5; // entre 1 et 5
	    let vy = 2;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBalles.push(b);
	  }
	}
	
	function creerDesBallesNiveau2(nbBalles) {
      let startingPoints = Array(10, 417);
	  for(let i = 0; i < nbBalles; i++) {
	    let x = startingPoints[Math.floor(Math.random()*startingPoints.length)]; // Math.random() renvoie un nombre entre 0 et 1
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 1+Math.random() * 2; // entre 1 et 5
	    let vy = 3;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau2.push(b);
	  }
	}
	
	function creerDesBallesNiveau3(nbBalles) {
	  let xProgession = 2;
	  for(let i = 0; i < nbBalles/6; i++) {
	    let x = 10; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 0.15 * xProgession; // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau3.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/6; i++) {
	    let x = 417; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = (0.15 * xProgession)*(-1); // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau3.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/6; i++) {
	    let x = 10; // 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 0.15 * xProgession; // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau3.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/6; i++) {
	    let x = 417; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = (0.15 * xProgession)*(-1); // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau3.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/6; i++) {
	    let x = 10; // 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 0.15 * xProgession; // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau3.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/6; i++) {
	    let x = 417; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = (0.15 * xProgession)*(-1); // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau3.push(b);
		xProgession += 1;
	  }
	}
	
	function creerDesBallesNiveau4(nbBalles) {
      let startingPoints = Array(10, 417);
	  for(let i = 0; i < nbBalles; i++) {
	    let x = startingPoints[Math.floor(Math.random()*startingPoints.length)]; // Math.random() renvoie un nombre entre 0 et 1
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 1+Math.random() * 3; // entre 1 et 5
	    let vy = 3;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau4.push(b);
	  }
	}
	
	function creerDesBallesNiveau5(nbBalles) {
	  let xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 10; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 0.15 * xProgession; // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 417; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = (0.15 * xProgession)*(-1); // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 10; // 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 0.15 * xProgession; // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 417; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = (0.15 * xProgession)*(-1); // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 10; // 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 0.15 * xProgession; // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 417; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = (0.15 * xProgession)*(-1); // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 10; // 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = 0.15 * xProgession; // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	  xProgession = 2;
	  for(let i = 0; i < nbBalles/8; i++) {
	    let x = 417; 
	    let y = 250; 
	    let rayon = 8; // rayon entre 2 et 12
	    let vx = (0.15 * xProgession)*(-1); // entre 1 et 5
	    let vy = 1.5;
	    
	    let b = new Balle(x, y, rayon, 'rgb(255, 255, 255)', vx, vy);
	  
	    tableauxDesBallesNiveau5.push(b);
		xProgession += 1;
	  }
	}
	
	function creerDesTuiles(niveau){
		var marginRight = 3;
		var marginBottom = 50;
		var tuileWidth = 50;
		var tuileHeight = 20;
		for(var i = 0; i < niveau; i++){
			for(var j = 0; j < 8; j++){
				let t = new Tuile((tuileWidth * j) + marginRight + (marginRight * j), (tuileHeight * i) + marginBottom + (marginRight * i), tuileWidth, tuileHeight, tableauxDesCouleursDesTuiles[i]);
				tableauxDesTuiles.push(t);
			}
		}
	}
	
	function testerLevel(){
		if(levelValue == 1 && tableauxDesBalles.length == 0){
			levelValue += 1;
		}
		else if(levelValue == 2 && tableauxDesBallesNiveau2.length == 0){
			levelValue += 1;
		}
		else if(levelValue == 3 && tableauxDesBallesNiveau3.length == 0){
			levelValue += 1;
		}
		else if(levelValue == 4 && tableauxDesBallesNiveau4.length == 0){
			levelValue += 1;
		}
		else if(levelValue == 5 && tableauxDesBallesNiveau5.length == 0){
			window.location = "win.html";
		}
	}
	
	function dessinerEtDeplacerLesBallesAvecDelai() {
	  // tester le niveau de jeu
	  // boucler sur le tableau de balles
	  // Dans le cas ou la balle n'est pas encore créée, tester si la balle d'index (index - 1) est assez loin (ici à +100) pour pouvoir creer la nouvelle balle
	  if (levelValue == 1){
		  tableauxDesBalles.forEach(function(b, index, tab) {
				  if (index == 0){
					  b.draw(ctx);
					  b.move();
				  }
				  else {
					  if (!b.created){
						  if (tableauxDesBalles[index - 1].y > b.y  + 100){
							b.draw(ctx);
							b.move();
						  }
					  }	
					  else {
						  b.draw(ctx);
						  b.move();
					  }
				  }
			  
			  testeCollisionBalleAvecMurs(b, index);
		  });
	  }
	  else if (levelValue == 2){
		  tableauxDesBallesNiveau2.forEach(function(b, index, tab) {
				  if (index == 0){
					  b.draw(ctx);
					  b.move();
				  }
				  else {
					  if (!b.created){
						  if (tableauxDesBallesNiveau2[index - 1].y > b.y  + 100){
							b.draw(ctx);
							b.move();
						  }
					  }	
					  else {
						  b.draw(ctx);
						  b.move();
					  }
				  }
			  
			  testeCollisionBalleAvecMurs(b, index);
		  });
	  }
	  else if (levelValue == 3){
		  tableauxDesBallesNiveau3.forEach(function(b, index, tab) {
				  if (index == 0){
					  b.draw(ctx);
					  b.move();
				  }
				  else {
					  if (!b.created){
						  if (index == 10 || index == 20 || index == 30 || index == 40 || index == 50){
							if (tableauxDesBallesNiveau3[index - 1].y > b.y  + 100){
								b.draw(ctx);
								b.move();
							  }
						  }
						  else {
							  if (tableauxDesBallesNiveau3[index - 1].y > b.y  + 15){
								b.draw(ctx);
								b.move();
							  }
						  }
						  
					  }	
					  else {
						  b.draw(ctx);
						  b.move();
					  }
				  }
			  
			  testeCollisionBalleAvecMurs(b, index);
		  });
	  }
	  else if (levelValue == 4){
		  tableauxDesBallesNiveau4.forEach(function(b, index, tab) {
				  if (index == 0){
					  b.draw(ctx);
					  b.move();
					  dessinerEclair(b.x, b.y, b.x + b.rayon * 2, b.y + b.rayon);
					  
				  }
				  else {
					  if (!b.created){
						  if (tableauxDesBallesNiveau4[index - 1].y > b.y  + 80){
							b.draw(ctx);
							b.move();
							dessinerEclair(b.x, b.y, b.x + b.rayon * 2, b.y + b.rayon);
						  }
					  }	
					  else {
						  b.draw(ctx);
						  b.move();
						  dessinerEclair(b.x, b.y, b.x + b.rayon * 2, b.y + b.rayon);
					  }
				  }
			  
			  testeCollisionBalleAvecMurs(b, index);
		  });
	  }
	  else if (levelValue == 5){
		  tableauxDesBallesNiveau5.forEach(function(b, index, tab) {
				  if (index == 0){
					  b.draw(ctx);
					  b.move();
					  dessinerEclair(b.x, b.y, b.x + b.rayon * 2, b.y + b.rayon);
				  }
				  else {
					  if (!b.created){
						  if (index == 10 || index == 20 || index == 30 || index == 40 || index == 50 || index == 60 || index == 70){
							if (tableauxDesBallesNiveau5[index - 1].y > b.y  + 100){
								b.draw(ctx);
								b.move();
								dessinerEclair(b.x, b.y, b.x + b.rayon * 2, b.y + b.rayon);
							}
						  }
						  else {
							  if (tableauxDesBallesNiveau5[index - 1].y > b.y  + 15){
								b.draw(ctx);
								b.move();
								dessinerEclair(b.x, b.y, b.x + b.rayon * 2, b.y + b.rayon);
							  }
						  }
						  
					  }	
					  else {
						  b.draw(ctx);
						  b.move();
						dessinerEclair(b.x, b.y, b.x + b.rayon * 2, b.y + b.rayon);
					  }
				  }
			  
			  testeCollisionBalleAvecMurs(b, index);
		  });
	  }
	}
	
	function dessinerEclair(x0,y0,x1,y1){
		 var lightning = new Lightning(ctx);
		  lightning.strike(x0, y0, x1, y1, "#557788", "#7799aa");
		  lightning.strike(x0, y0, x1, y1, "#cfefff", "#ffffff", true);
	}
	

	function dessinerLesTuiles() {
	  // ici avec un itérateur
	  tableauxDesTuiles.forEach(function(t, index, tab) {
	    // t est une tuile dans la collection
	    t.draw(ctx);
	  });
	}
	
	function declencherExplosionFinal(){
		// var i = 0;
		// while(i < 100){
			// var crcl = new Circle(width/2, height/2, 2 + Math.random()*3, -5 + Math.random()*10, -5 + Math.random()*10, Math.round(Math.random())*255, Math.round(Math.random())*255, Math.round(Math.random())*255);
			// circles.push(crcl);
			// i++;
		// }
		// while(countExplosionIteration < 1500){
			// animateExplosion();
		// }
		tableauxDesBalles = [];
	    tableauxDesTuiles = [];
		tableauxDesBallesNiveau2 = [];
		tableauxDesBallesNiveau3 = [];
		tableauxDesBallesNiveau4 = [];
		tableauxDesBallesNiveau5 = [];
		gameover = true;
		window.location = "gameover.html?scoreValue=" + scoreValue;
		
		
	}
	
	
	function dessinerCircle() {
		//Fill the canvas with circles
		for(var j = 0; j < circles.length; j++){
			var c = circles[j];
			
			//Create the circles
			c.draw(ctx);
			
			c.x += c.vx;
			c.y += c.vy;
			c.radius -= .02;
			
			if(c.radius < 0)
				circles[j] = new Circle(width/2, height/2, 2 + Math.random()*3, -5 + Math.random()*10, -5 + Math.random()*10, Math.round(Math.random())*255, Math.round(Math.random())*255, Math.round(Math.random())*255);
		}
	}

	function animateExplosion() {
		requestAnimationFrame(animateExplosion);
		dessinerCircle();
		countExplosionIteration++;
	}

	function testeCollisionBalleAvecMurs(b, index) {
	  if(((b.x + b.rayon) > width) || ((b.x - b.rayon) < 0)) {
	    // on a touché un bord vertical
	    // on inverse la vitesse en x
	    b.vx = -b.vx;
	  }
	  //if(((b.y + b.rayon) > height) || ((b.y - b.rayon) < 0)) {
	  if(((b.y - b.rayon) < 0)) {
	    // on a touché un bord horizontal haut
	    // le jeu est terminé
	    
		declencherExplosionFinal();
	  }
	  
	  if ((b.y + b.rayon) > height) {
		    if(b.couleur == 'rgb(255, 255, 255)') {
				scoreValue += 350;
			}
		    else if(b.couleur == 'rgb(255, 106, 0)') {
				scoreValue += 250;
			}
			else if (b.couleur == 'rgb(224, 2, 2)') {
				scoreValue += 100;
			}
		  if (levelValue == 1)
			tableauxDesBalles.splice(index, 1);
		  else if (levelValue == 2)
			tableauxDesBallesNiveau2.splice(index, 1);
		  else if (levelValue == 3)
			tableauxDesBallesNiveau3.splice(index, 1);
		  else if (levelValue == 4)
			tableauxDesBallesNiveau4.splice(index, 1);
		  else if (levelValue == 5)
			tableauxDesBallesNiveau5.splice(index, 1);
	  }
	}
	
	function changerCouleurBalleQuandTouche(balle){
		switch(balle.touche){
			case 0 :
				balle.couleur = 'rgb(255, 255, 255)';
				break;
			case 1 :
				balle.couleur = 'rgb(255, 106, 0)';
				break;
			case 2 :
				balle.couleur = 'rgb(224, 2, 2)';
				break;
			default :
				balle.couleur = 'rgb(255, 255, 255)';
				break;
		}
	}

	function testerCollisionRaquetteAvecBalles() {
		if (levelValue == 1){
			tableauxDesBalles.forEach(function(b, index, tab) {
				if (b.y < trouRaquette.y && b.y < raquette.y){
					if(!circRectsOverlap(trouRaquette.x, trouRaquette.y,
									   trouRaquette.width, trouRaquette.height,
									   b.x, b.y, b.rayon)){
						if(circRectsOverlap(raquette.x, raquette.y,
										   raquette.width, raquette.height,
										   b.x, b.y, b.rayon)) {
						  console.log("collision");
						  b.vy = -b.vy;
						  b.touche += 1;
						  changerCouleurBalleQuandTouche(b);
						}				   
				   }
				}
		  });
		}
		else if (levelValue == 2){
			tableauxDesBallesNiveau2.forEach(function(b, index, tab) {
				if (b.y < trouRaquette.y && b.y < raquette.y){
					if(!circRectsOverlap(trouRaquette.x, trouRaquette.y,
									   trouRaquette.width, trouRaquette.height,
									   b.x, b.y, b.rayon)){
						if(circRectsOverlap(raquette.x, raquette.y,
										   raquette.width, raquette.height,
										   b.x, b.y, b.rayon)) {
						  console.log("collision");
						  b.vy = -b.vy;
						  b.touche += 1;
						  changerCouleurBalleQuandTouche(b);
						}				   
				   }
				}
		  });
		}
		else if (levelValue == 3){
			tableauxDesBallesNiveau3.forEach(function(b, index, tab) {
					if (b.y < trouRaquette.y && b.y < raquette.y){
						if(!circRectsOverlap(trouRaquette.x, trouRaquette.y,
								   trouRaquette.width, trouRaquette.height,
								   b.x, b.y, b.rayon)){
							if(circRectsOverlap(raquette.x, raquette.y,
											   raquette.width, raquette.height,
											   b.x, b.y, b.rayon)) {
							  console.log("collision");
							  b.vy = -b.vy;
							  b.touche += 1;
							  changerCouleurBalleQuandTouche(b);
							}				   
						}
					}
					
				
		  });
		}
		else if (levelValue == 4){
			tableauxDesBallesNiveau4.forEach(function(b, index, tab) {
				if (b.y < trouRaquette.y && b.y < raquette.y){
					if(!circRectsOverlap(trouRaquette.x, trouRaquette.y,
									   trouRaquette.width, trouRaquette.height,
									   b.x, b.y, b.rayon)){
						if(circRectsOverlap(raquette.x, raquette.y,
										   raquette.width, raquette.height,
										   b.x, b.y, b.rayon)) {
						  console.log("collision");
						  b.vy = -b.vy;
						  b.touche += 1;
						  changerCouleurBalleQuandTouche(b);
						}				   
					}
				}
		  });
		}
		else if (levelValue == 5){
			tableauxDesBallesNiveau5.forEach(function(b, index, tab) {
				if (b.y < trouRaquette.y && b.y < raquette.y){
					if(!circRectsOverlap(trouRaquette.x, trouRaquette.y,
									   trouRaquette.width, trouRaquette.height,
									   b.x, b.y, b.rayon)){
						if(circRectsOverlap(raquette.x, raquette.y,
										   raquette.width, raquette.height,
										   b.x, b.y, b.rayon)) {
						  console.log("collision");
						  b.vy = -b.vy;
						  b.touche += 1;
						  changerCouleurBalleQuandTouche(b);
						}				   
					}
				}
		  });
		}
		
	}
	
	function declencherExplosionTuile(xExplosion, yExplosion){
		// var xExplosion = randomFloat(100, 400);
		// var yExplosion = randomFloat(100, 400);
		startDoubleExplosion(xExplosion, yExplosion);
	}
	
	function testerCollisionTuilesAvecBalles() {
		if (levelValue == 1){
			tableauxDesBalles.forEach(function(b, indexBalle, tabBalle) {
				tableauxDesTuiles.forEach(function(tile, indexTuile, tabTuile) {
					if(circRectsOverlap(tile.x, tile.y,
							   tile.width, tile.height,
							   b.x, b.y, b.rayon)){
						if(b.couleur == 'rgb(255, 106, 0)') {
						  b.vy = -b.vy;
						  tableauxDesTuiles.splice(indexTuile, 1);
						  declencherExplosionTuile(tile.x + tile.width/2, tile.y + tile.height/2);
						
						}
						else if (b.couleur == 'rgb(224, 2, 2)') {
							tableauxDesTuiles.splice(indexTuile, 1);
							tableauxDesBalles.splice(indexBalle, 1);
							declencherExplosionTuile(tile.x + tile.width/2, tile.y + tile.height/2);
						}
						else if (b.couleur == 'rgb(255, 255, 255)') {
							tableauxDesBalles.splice(indexBalle, 1);
						}
				   }
				});
		  });
		}
		else if (levelValue == 2){
			tableauxDesBallesNiveau2.forEach(function(b, indexBalle, tabBalle) {
				tableauxDesTuiles.forEach(function(tile, indexTuile, tabTuile) {
					if(circRectsOverlap(tile.x, tile.y,
							   tile.width, tile.height,
							   b.x, b.y, b.rayon)){
						if(b.couleur == 'rgb(255, 106, 0)') {
						  b.vy = -b.vy;
						  tableauxDesTuiles.splice(indexTuile, 1);
						  declencherExplosionTuile(tile.x + tile.width/2, tile.y + tile.height/2);
						}
						else if (b.couleur == 'rgb(224, 2, 2)') {
							tableauxDesTuiles.splice(indexTuile, 1);
							tableauxDesBallesNiveau2.splice(indexBalle, 1);
							declencherExplosionTuile(tile.x + tile.width/2, tile.y + tile.height/2);
						}
						else if (b.couleur == 'rgb(255, 255, 255)') {
							tableauxDesBallesNiveau2.splice(indexBalle, 1);
						}
				   }
				});
		  });
		}
		else if (levelValue == 3){
			tableauxDesBallesNiveau3.forEach(function(b, indexBalle, tabBalle) {
				tableauxDesTuiles.forEach(function(tile, indexTuile, tabTuile) {
					if(circRectsOverlap(tile.x, tile.y,
							   tile.width, tile.height,
							   b.x, b.y, b.rayon)){
						if(b.couleur == 'rgb(255, 106, 0)') {
						  b.vy = -b.vy;
						  tableauxDesTuiles.splice(indexTuile, 1);
						  declencherExplosionTuile(tile.x + tile.width/2, tile.y + tile.height/2);
						}
						else if (b.couleur == 'rgb(224, 2, 2)') {
							tableauxDesTuiles.splice(indexTuile, 1);
							tableauxDesBallesNiveau3.splice(indexBalle, 1);
						  declencherExplosionTuile(tile.x + tile.width/2, tile.y + tile.height/2);
						}
						else if (b.couleur == 'rgb(255, 255, 255)') {
							tableauxDesBallesNiveau3.splice(indexBalle, 1);
						}
				   }
				});
		  });
		}
		else if (levelValue == 4){
			tableauxDesBallesNiveau4.forEach(function(b, indexBalle, tabBalle) {
				tableauxDesTuiles.forEach(function(tile, indexTuile, tabTuile) {
					if(circRectsOverlap(tile.x, tile.y,
							   tile.width, tile.height,
							   b.x, b.y, b.rayon)){
						if(b.couleur == 'rgb(255, 106, 0)') {
						  declencherExplosionFinal();
						}
						else if (b.couleur == 'rgb(224, 2, 2)') {
						  declencherExplosionFinal();
						}
						else if (b.couleur == 'rgb(255, 255, 255)') {
						  declencherExplosionFinal();
						}
				   }
				});
		  });
		}
		else if (levelValue == 5){
			tableauxDesBallesNiveau5.forEach(function(b, indexBalle, tabBalle) {
				tableauxDesTuiles.forEach(function(tile, indexTuile, tabTuile) {
					if(circRectsOverlap(tile.x, tile.y,
							   tile.width, tile.height,
							   b.x, b.y, b.rayon)){
						if(b.couleur == 'rgb(255, 106, 0)') {
						  declencherExplosionFinal();
						}
						else if (b.couleur == 'rgb(224, 2, 2)') {
						  declencherExplosionFinal();
						}
						else if (b.couleur == 'rgb(255, 255, 255)') {
						  declencherExplosionFinal();
						}
				   }
				});
		  });
		}
		
	}
	
	// ICI BOUCLE D'animation à 60 images/s
	function mainLoop(time) {
	  measureFPS(time);
	 
	  ctx.clearRect(0, 0, width, height);
	  
	  dessinerLesTuiles();
	  raquette.draw(ctx);
	  trouRaquette.draw(ctx);
	  
	  // Gérer le moment d'apparition des balles
	  //dessinerEtDeplacerLesBalles();	  
	  
	  dessinerEtDeplacerLesBallesAvecDelai();
	  
	  testerLevel();
	  
	  
	  
	  trouRaquette.deplace();
	  testerCollisionRaquetteAvecBalles();
	  testeCollisionTrouRaquetteAvecMurs();
	  testerCollisionTuilesAvecBalles();
	  
	  measureScore(ctx);
	  measureLevel(ctx);
	  
	  // number of ms since last frame draw
	  delta = timer(time);
	  // Move and draw particles
	  updateAndDrawParticules(delta, ctx);
	 
	 
	  if (gameover == false)
		requestAnimationFrame(mainLoop);
	  

	}

	function testeCollisionTrouRaquetteAvecMurs() {
	    if((trouRaquette.x + trouRaquette.width) > canvas.width) {
			trouRaquette.x = canvas.width - trouRaquette.width;
			trouRaquette.v = -trouRaquette.v;
		  } else if(trouRaquette.x < 0) {
			// idem
			trouRaquette.x = 0;
			trouRaquette.v = -trouRaquette.v;
		  }
	  // A FAIRE : COLLISIONS AVEC MURS HAUT ET BAS !
	}
	
	/*---------------- BEGIN Code taken from http://mainline.i3s.unice.fr/mooc/SkywardBound/ -----------*/
	function playMainMusic(track) { 
        if (currentGameTrack) 
			currentGameTrack.pause();

        currentGameTrack = track;
        currentGameTrack.play();
    }
    function initMusic() {
        playMainMusic(assets.humbug);
    }
	
	function allAssetsLoaded(assetsLoaded) {
        console.log("all samples loaded and decoded");
        for (var asset in assetsLoaded) {
            assets[asset] = assetsLoaded[asset];
        }
    }
	/*---------------- END Code taken from http://mainline.i3s.unice.fr/mooc/SkywardBound/ -----------*/
	

	// PROGRAMME PRINCIPAL
	function start() {
		// ici le programme principal
		initTableauxDesCouleursDesTuiles();
		initTableauxDesCouleursDesBalles();
		initFPS();
		canvas = document.querySelector("#myCanvas");

  		width = canvas.width;
  		height = canvas.height; 

  		ctx = canvas.getContext('2d');
		
		initScoreContainer(ctx);
		initLevelContainer(ctx);
		creerDesTuiles(7);
  		creerDesBalles(40);
		creerDesBallesNiveau2(60);
		creerDesBallesNiveau3(60);
		creerDesBallesNiveau4(80);
		creerDesBallesNiveau5(80);
		
		mh.add("humbug", "../Jeu+MBDS+Madagascar-CasseBrique-29-03-2017/sounds/YesterdayOnceMore.mp3");

  		creerLesEcouteurs(this);
		
		loadAssets(function (assets) {
            // all assets (images, sounds) loaded, we can start the animation
            allAssetsLoaded(assets);
			
            initMusic();
            requestAnimationFrame(mainLoop);
        });
  		//requestAnimationFrame(mainLoop);
	}

	// API du moteur de jeu
	return {
		start:start, 
        initMusic: initMusic
	}
}