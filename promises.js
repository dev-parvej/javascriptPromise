let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a == 'number' && typeof b == 'number'){
            resolve(a+b);
        }else {
            reject("Argument must be number");
        }
    });
};

asyncAdd(10, 10).then((result) => {
    console.log(result);
    return asyncAdd(result, 20);
}).then((result) => {
    console.log(result);
}).catch((errorMessage) => {
    console.log(errorMessage);
});