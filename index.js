function receivesAFunction(callback) {
    callback(10);
}

function returnsANamedFunction() {
    return function comeBack() {
        console.log('this is a named function')
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}