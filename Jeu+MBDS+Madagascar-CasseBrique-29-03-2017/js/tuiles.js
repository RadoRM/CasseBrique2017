class Tuile extends ObjetGraphique {
  constructor(x, y, width, height, couleur) {
    // appel du constructeur hérité
    super(x, y, couleur, null, null);
    this.width = width;
    this.height = height;
  }
  
  draw(ctx) {
    ctx.save(); // bonne pratique
    ctx.translate(this.x, this.y);
    
    // On dessine en x,y
    ctx.beginPath();
    ctx.fillStyle = this.couleur;
    ctx.fillRect(0, 0, this.width, this.height);
    
    ctx.restore();
  }
}