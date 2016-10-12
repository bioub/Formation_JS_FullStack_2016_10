/*
Exercice
1 - Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
2 - Demander et récupérer la saisi d'un entier (API readline de Node)
3 - Permettre de trouver en plusieurs essais
4 - Stocker les essais dans un tableaux et les réafficher entre
chaque tout (API Array sur MDN)
5 - Passer au tour suivant si le joueur ne saisi pas un nombre (isNaN)
 */

const Jeu = require('./lib/Jeu');

let jeu = new Jeu({
    max: 100
});

jeu.jouer();