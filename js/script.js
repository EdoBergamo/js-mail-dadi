// Allowed Email List
const AuthorizedList = [
    "first@mail.com",
    "second@mail.com",
    "third@mail.com",
]

let button = document.getElementById('accedi') // First Login Button
let email = document.getElementById('email'); // email input
let loginButton = document.getElementById('loginButton');
let welcome = document.getElementById('welcome')
let dice = document.getElementById('dice')
let results = document.getElementById('results')

button.addEventListener("click", function () {
    email.type = 'email'
    button.style.display = "none"
    loginButton.type = 'submit'
})

let authorized = false;

loginButton.addEventListener("click", function () {
    for (let i = 0; i < AuthorizedList.length; i++) { // Check if the mail is authorized
        if (AuthorizedList[i] === email.value) {
            welcome.innerHTML = `bentornato <strong>${email.value}</strong>`;
            authorized = true;
            break;
        } else {
            welcome.innerHTML = `401 Unauthorized`
            break;
        }
    }

    if (authorized) {
        email.type = 'hidden'
        loginButton.type = 'hidden'
        dice.type = 'submit'
    }
})

function nome() {}
const asd = () => {
    const dadoPlayer = Math.ceil(Math.random() * 6)
    const dadoPC = Math.ceil(Math.random() * 6)

    let winner;
    console.log(`Dado player: ${dadoPlayer}\nDado PC: ${dadoPC}`)

    if (dadoPlayer > dadoPC) winner = "Player ha vinto"
    else if (dadoPC > dadoPlayer) winner = "Pc ha vinto"
    else winner = 'Pareggio'

    results.innerHTML = `${winner}<br>Player: ${dadoPlayer} - PC: ${dadoPC}`
}

dice.addEventListener("click", asd)

