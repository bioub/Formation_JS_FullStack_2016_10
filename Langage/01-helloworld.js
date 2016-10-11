console.log('Bonjour');

/**
 * Ma fonction hello
 */
function hello() {
    console.log('Hello');
}

var id = setInterval(hello, 1000);

setTimeout(function() {
    console.log('Bye');
    clearInterval(id);
}, 3000);