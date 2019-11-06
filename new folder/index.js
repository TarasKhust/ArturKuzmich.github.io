
function sum(callbackFunction) {
    const res = a + b;

    if  ( typeof callbackFunction === `function`){
    callbackFunction(3);
}
}

sum(e => e === 3)