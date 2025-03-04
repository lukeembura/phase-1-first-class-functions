
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        // ...function body...
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        // ...function body...
    };
}
