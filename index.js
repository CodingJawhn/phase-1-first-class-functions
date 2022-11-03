function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    function namedFunction () {
    return `This is a function`
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function() {}
}
