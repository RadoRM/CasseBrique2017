function creerLesEcouteurs() {
  // Ecouteurs de souris, on peut mettre sur le canvas 
 canvas.addEventListener('mousemove', sourisDeplacee); 
}

function sourisDeplacee(evt) {
  // La ligne suivante tient compte des propriétés
  // du canvas (bordure, pos, marges etc.)
  let rect = canvas.getBoundingClientRect();
  let mx = evt.clientX - rect.left;
  
  //console.log("mouse move x = " + mx + " y = " + my);
  trouRaquette.x = mx;
}
