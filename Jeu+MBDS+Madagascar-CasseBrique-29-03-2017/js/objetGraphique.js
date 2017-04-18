// ICI UNE AUTRE MANIERE DE FAIRE DES OBJETS
// CLASSES ES6, attention : ne marchera pas dans
// de vieux browsers comme IE
// Opera, FF, Edge, Chrome, sans doute safari
// ca doit marcher.
// On va faire une classe "balle"

class ObjetGraphique {
  constructor(x, y, couleur, vx, vy) {
    this.x = x;
    this.y = y;
    this.couleur = couleur;
    this.vx = vx;
    this.vy = vy;
  }
  
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  
}
