// Syntaxe 1 : objet "singleton"
let raquette = {
  // propriétés
  x:0,
  y:600,
  width:427,
  height:10,
  v: 0,
  vx:0, // vitesse en x
  vy: 0, // vitesse en y
  couleur: 'white',
  
  draw: function(ctx) {
      ctx.save();
  
      ctx.translate(this.x, this.y);
  
      // Le corps de la raquette
      ctx.fillStyle = this.couleur;
      ctx.fillRect(0, 0, this.width, this.height);

      ctx.restore();    
  } // ici pas de virgule !!!
}
