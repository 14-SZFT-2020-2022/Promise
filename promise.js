'use strict';

/*
    let vegrehajtas = (x, y) => console.log(x + y); 
    Mi a vegrehajtas - függvény visszatérési értéke: undefined

let vegrehajtas = (x, y) => {
    return x + y;
};

vegrehajtas(12, 15);
console.log(vegrehajtas(12, 15));
*/

/* Promise láncolata
promise = {
    state: 'pending', 'fullfiled', 'rejected',
    value: undefined, result, error,
}

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4500), 2000)
});

promise
.then((result) => 
{
    console.log(`Ez az eredmény: ${result}.`);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result - 500), 4000);
        // setTimeout(() => reject(new Error('Valami elromlott!')), 2000);
    });
})
.then((result) => {
    console.log(`Ez az eredmény: ${result}.`);
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve(result - 500), 4000);
        setTimeout(() => reject(new Error('Valami elromlott!')), 2000);
    });
})
.then((result) => {
    console.log(`Ez az eredmény: ${result}.`);
})
.catch((error) => console.log(error.message));
*/
/*
let promise = new Promise((resolve, reject) => {
    resolve(1);
});

promise
.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(2 * result);
    });
})
.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(2 * result);
    });
})
.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        reject(new Error('Valami elromlott!'));
    });
})
.catch((error) => console.log(error.message));

console.log('Valami kiírása!');
*/