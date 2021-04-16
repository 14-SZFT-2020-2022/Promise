'use strict';

/* Ez volt a callback-es változat. 
function loadScript(forras, callback) {
    let szkript = document.createElement('script');
    szkript.src = forras;
    document.body.append(szkript);

    szkript.onload = () => callback(null, forras);
    szkript.onerror = () => callback(new Error('Nem sikerült a betöltés!'));
}

loadScript('./elso.js', (error, forras) => {
    if (error) {
        console.log(error.message);
    } else {
        elso();
        console.log(`Betöltődött a következő állomány: ${forras}`);
        loadScript('./masodik.js', (error, forras) => {
            if (error) {
                console.log(error.message);
            } else {
                masodik();
                console.log(`Betöltődött a következő állomány: ${forras}`);
            }
        });
    }
});
*/

/* Promise-os változat

function loadScript(forras) {
    return new Promise((resolve, reject) => {
        let szkript = document.createElement('script');
        szkript.src = forras;
        document.body.append(szkript);

        szkript.onload = () => resolve(forras);
        szkript.onerror = () => reject(new Error(`Nem sikerült beolvasni a következő forrást: ${forras}`));
    });
}

let promise = loadScript('./elso.js');

promise
.then((result) => {
    elso();
    console.log(`Be lett olvasva a következő állomány: ${result}`);
    // Itt a promise be van ágyazva egy függvénybe (loadScript). Ekkor a loadScript('./masodik.js') magát a 
    // promise-t adja vissza, nem az eredményét. Ahhoz kell a return.

    return loadScript('./masodik.js');
})
.then((result) => {
    masodik();
    console.log(`Be lett olvasva a következő állomány: ${result}`);
})
.catch((error) => console.log(error.message));
*/

// fetch()

let tabl = document.getElementById('tabla');

let promise = fetch('./proba.json');

promise
.then((result) => result.json())
.then((result) => {
    console.log(result);
    let tabla = '<table>';
    tabla += `<tr><td>Név</td><td>${result[0].nev}</td><td>${result[1].nev}</td></tr>`;
    tabla += `<tr><td>Kor</td><td>${result[0].kor}</td><td>${result[1].kor}</td></tr>`;
    tabla += `<tr><td>Magasság</td><td>${result[0].magassag}</td><td>${result[1].magassag}</td></tr>`;
    tabla += `<tr><td>Éhes-e</td><td>${result[0].ehesE}</td><td>${result[1].ehesE}</td></tr>`;
    tabla += '</table>';

    // tabl.innerHTML= tabla;
})
.catch((error) => console.log(error.message));

let promise1 = fetch('https://api.github.com/users');

promise1
.then((result) => result.json())
.then((result) => {
    console.log(result);
    let tabla = '<table>';
    tabla += `<tr><td>Login</td><td>Kép</td></tr>`;
    for (let i = 0; i < result.length; i++) {
        tabla += `<tr><td>${result[i].login}</td><td><img src=${result[i].avatar_url}></td></tr>`;

    }
    tabla += '</table>';

    tabl.innerHTML = tabla;
})
.catch((error) => console.log(error.message));