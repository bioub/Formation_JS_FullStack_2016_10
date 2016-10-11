// Immediately Invoked Function Expression (IIFE)
// Type de module (limite la portée au fichier courant)
// Voir aussi CommonJS, AMD, ES6
(function() {
    'use strict';

}());

(function() {
    'use strict';
    // 3 syntaxes possibles

    // function declaration
    function bonjour() {
        console.log('Bonjour');
    }

    bonjour();

    // anonymous function expression
    setTimeout(function() {
        console.log('Bonjour');
    }, 10);

    // named function expression
    setTimeout(function bonjourCallback() {
        console.log('Bonjour');
    }, 10);

    console.log(typeof bonjourCallback); // undefined

    // Syntaxe idéale (empeche d'écraser la fonction)
    const maFonction = function() {
        console.log('Bonjour');
    };

    // Arguments
    var addition = function(a, b) {
        return a + b;
    };

    console.log(addition(1, 2)); // 3
    console.log(addition('1', 2)); // '12'
    console.log(addition(1, 2, 3)); // 3
    console.log(addition(1)); // NaN

    // Validation
    var addition = function(a, b) {
        if (typeof a !== 'number' ||
            typeof b !== 'number') {
            throw new Error('params must be number');
        }
        return a + b;
    };

    try {
        addition('1', 2);
    }
    catch (e) {
        console.log(e.message);
    }

    var addition = function(a, b) {
        if (arguments.length < 2) {
            throw new Error('at least 2 paramss');
        }
        return Number(a) + Number(b);
    };

    // Variadic function (variable params)
    var addition = function(a, b) {
        var somme = Number(a) + Number(b)

        for (var i=2; i<arguments.length; i++) {
            somme += Number(arguments[i]);
        }

        return somme;
    };
    console.log(addition(1, 2, 3)); // 6

    // Variadic function ES6
    var addition = function(a, b, ...c) {
        var somme = Number(a) + Number(b)

        for (var i=0; i<c.length; i++) {
            somme += Number(c[i]);
        }

        return somme;
    };
    console.log(addition(1, 2, 3)); // 6

    // Default value
    var addition = function(a, b) {
        a = a || 0;
        b = b || 0;
        return Number(a) + Number(b);
    };

    console.log(addition(1)); // 1

    // Default value ES6
    var addition = function(a = 0, b = 0) {
        return Number(a) + Number(b);
    };

    console.log(addition(1)); // 1

    var externe = function() {
        function interne() {
          console.log(typeof addition); // function
        }
        console.log(typeof addition); // function
        interne();
    };

    externe();
    console.log(typeof interne); // undefined

    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }

    // dans 100ms : 3 3 3

    // Même exemple avec une closure
    // 2 prérequis :
    // 1 - 2 fonction imbriquées
    // 2 - la fonction interne soit appelé en dehors
    // soit par valeur de retour, soit événement
    var externe = function(iSave) {
        // portée de closure (sauvegardée au moment du passage
        // dans la fonction externe)
        var interne = function() {
            console.log(iSave)
        };
        return interne;
    };

    var ditCoucou = externe('Coucou');
    ditCoucou();

    for (var i=0; i<3; i++) {
        setTimeout(externe(i), 100);
    }

    // Plus simple en ES6
    for (let i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }
}());