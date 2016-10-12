'use strict';

// En JS on manipule des objets existants du langage :
console.log(typeof Math); // object

// ou de l'environnement
console.log(typeof console); // object

// sauf vérouillé (rare), on peut étendre un objet
// en ajoutant des nouvelles propriétés :
Math.mathematicien = 'Evariste Galois';
console.log(Math.mathematicien);

// ou en en supprimant
delete Math.mathematicien;
console.log(typeof Math.mathematicien); // undefined

// ou en en écrasant
var backupRandom = Math.random;
Math.random = function() {
    return 0;
};
console.log(Math.random()); // 0
Math.random = backupRandom;
console.log(Math.random()); // 0.3525

// 2 syntaxe pour accéder aux membres . ou []
console.log(Math.PI); // 3.14
console['log'](Math['PI']); // 3.14
var config = 'error';
var config = 'warn';
console[config]('Log depuis config');

// Ponctuellement si besoin d'un objet on peut écrire
var coords = new Object();
coords.x = 10;
coords.y = 20;

// Bonne pratique privilégier la syntaxe object literal
var coords = {
    x: 10,
    y: 20
};

// Idem pour d'autres types, privilégier les syntaxes litérale
// String
var string = ''; // plutot que new String()
var array = []; // plutot que new Array()
var regexp = /[a-z]/; // plus que new RegExp('[a-z]');

// on peut itérer sur les propriétés
for (let prop in coords) {
    let valeur = coords[prop];
    console.log(prop);
    console.log(valeur);
}

// JSON (sérialisation d'un objet)
// Attention les fonctions et les prototypes ne sont
// pas sérialisable
var json = JSON.stringify(coords);
// .... réseau ....
var coords = JSON.parse(json);
console.log(coords.x);

// Nouveautés ES5.1 (pas IE8)
// Etendre un objet avec des options
Object.defineProperty(coords, 'z', {
    value: 30,
    writable: false,
    enumerable: false, // for .. in et JSON
    configurable: false // defineProperty
});

console.log(coords.z);
try {
    coords.z = 40; // throw Error
}
catch (e) {
    console.log(e.message);
}

var contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz'
};

Object.defineProperty(contact, 'nomComplet', {
    get: function() {
        return `${this.prenom} ${this.nom}`;
    }
});

console.log(contact.nomComplet); // Romain Bohdanowicz

// plus extensible
Object.preventExtensions(contact);
console.log(Object.isExtensible(contact)); // false

// seal : preventExtensions + configurable à false pour tous
Object.seal(contact);
console.log(Object.isSealed(contact)); // true

// freeze : seal + writeable à false pour tous
Object.freeze(contact);
console.log(Object.isFrozen(contact)); // true

const monObject = {

};

monObject.nouvelleProp = 'toto'; // possible

// Si un type d'objet revient fréquemment on peut
// utiliser une fonction constructeur
var now = new Date();
console.log(typeof now); // object
console.log(typeof Date); // function

function Coords(x, y) {
    this.x = x;
    this.y = y;
}

var coords1 = new Coords(10, 20);
var coords2 = new Coords(30, 40);

// Grace aux closures on peut simuler des propriétés privées
var Contact = function(prenom) {
    this.getPrenom = function() {
        return prenom;
    };
};

var romain = new Contact('Romain');
console.log(romain.getPrenom());
var jean = new Contact('Jean');
var eric = new Contact('Eric');
var paul = new Contact('Paul');

// Problème de la closure, la fonction getPrenom est dupliquée
// à chaque new Contact

var Contact = function(prenom) {
    this.prenom = prenom;
};

Contact.prototype.hello = function() {
    return `Bonjour je m'appelle ${this.prenom}`;
};

var romain = new Contact('Romain');
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je m'appelle Romain
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
console.log(romain.toto); // undefined

// bind, call, apply
var hello = function(autre) {
    return `Bonjour ${autre} je m'appelle ${this.prenom}`;
};

// this est undefined
// hello('Eric');
console.log(hello.call(romain, 'Eric'));
console.log(hello.apply(romain, ['Eric']));
console.log(hello.bind(romain)('Eric'));

var Formateur = function(prenom, specialite) {
    Contact.apply(this, arguments);
    this.specialite = specialite;
};

Formateur.prototype = Object.create(Contact.prototype);
Formateur.prototype.hello = function() {
    return Contact.prototype.hello.call(this) + ', je suis spécialisé en ' + this.specialite;
};

var romain = new Formateur('Romain', 'JS');
console.log(romain.hello());
console.log(romain instanceof Formateur);
console.log(romain instanceof Contact);
console.log(romain instanceof Object);

// Class en ES6
class Voiture {
    constructor(marque) {
        this.marque = marque;
    }
    demarrer() {
        return 'Vroooom';
    }
}

var clio = new Voiture('Renault');
console.log(clio.demarrer());
console.log(typeof Voiture); // function
console.log(typeof Voiture.prototype.demarrer); // function

class Formule1 extends Voiture {
    constructor(marque, ecurie) {
        super(marque);
        this.ecurie = ecurie;
    }
    depasser() {
        return 'depassement';
    }
}