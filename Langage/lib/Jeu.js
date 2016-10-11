'use strict';

const readline = require('readline');
const random = require('./random');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Jeu {
    constructor(options = {}) {
        options.min = options.min || 0;
        options.max = options.max || 100;
        this.$$entierAlea = random.getIntInclusive(options.min, options.max);
        this.$$essais = [];
    }
    jouer() {
        if (this.$$essais.length) {
            console.log('Vous avez déjà joué ' + this.$$essais.join(' - '));
        }

        rl.question('Quel est le nombre ? ', (answer) => {
            let entierSaisi = parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : il faut saisir un nombre');
                return this.jouer();
            }

            this.$$essais.push(entierSaisi);

            if (entierSaisi < this.$$entierAlea) {
                console.log('Trop petit');
                return this.jouer();
            }

            if (entierSaisi > this.$$entierAlea) {
                console.log('Trop grand');
                return this.jouer();
            }

            console.log('Gagné');
            rl.close();
        });
    }
}

module.exports = Jeu;