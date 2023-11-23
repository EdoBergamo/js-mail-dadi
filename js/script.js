const AuthorizedList = [
    "first@mail.com",
    "second@mail.com",
    "third@mail.com",
];

let button = document.getElementById('accedi');
let inputsDiv = document.getElementById('inputs');
let loginButton = document.getElementById('loginButton');
let welcome = document.getElementById('welcome');
let dice = document.getElementById('dice');
let results = document.getElementById('results');
let email = document.getElementById('email'); // Aggiunto il recupero dell'elemento email

button.addEventListener("click", function () {
    email.type = 'email';
    button.style.display = "none";
    inputsDiv.style.display = "flex";
});

loginButton.addEventListener("click", function () {
    let authorized = false;

    for (let i = 0; i < AuthorizedList.length; i++) {
        if (AuthorizedList[i] === email.value) {
            welcome.innerHTML = `Bentornato <strong>${email.value}</strong>`;
            authorized = true;
            break;
        }
    }

    if (authorized) {
        email.type = 'hidden';
        loginButton.classList.add("d-none");
        dice.classList.remove("d-none");
    } else {
        welcome.innerHTML = `401 Unauthorized`;
    }
});

dice.addEventListener("click", function () {
    const dadoPlayer = Math.ceil(Math.random() * 6);
    const dadoPC = Math.ceil(Math.random() * 6);
    let winner;

    if (dadoPlayer > dadoPC) {
        winner = "<strong>Player ha vinto🎉</strong>";
    } else if (dadoPC > dadoPlayer) {
        winner = "<strong>Computer ha vinto🎉</strong>";
    } else {
        winner = '<strong>Pareggio!</strong>';
    }

    results.innerHTML = `${winner}<br>Player: <strong>${dadoPlayer}</strong> - PC: <strong>${dadoPC}</strong>`;
});
