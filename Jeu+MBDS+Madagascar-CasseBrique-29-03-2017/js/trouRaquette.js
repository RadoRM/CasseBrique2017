// Syntaxe 1 : objet "singleton"
let trouRaquette = {
  // propriétés
  x:0,
  y:600,
  width:70,
  height:10,
  v: 0,
  vx:0, // vitesse en x
  vy: 0, // vitesse en y
  couleur: 'black',
  
  // methodes
  deplace: function() {
    this.x += this.v;
  },
  
  // methodes
  deplace: function() {
    this.x += this.v;
  },

  move: function(x, y) {
      this.x = x;
      this.y = y;
  }, // ici une virgule !
  
  draw: function(ctx) {
      ctx.save();
  
      ctx.translate(this.x, this.y);
  
      // Le corps de la raquette
      ctx.fillStyle = this.couleur;
      ctx.fillRect(0, 0, this.width, this.height);

      ctx.restore();    
  } 
}
