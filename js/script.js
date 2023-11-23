// Allowed Email List
const AuthorizedList = [
    "first@mail.com",
    "second@mail.com",
    "third@mail.com",
]

let email = prompt("inserisci la tua email: "); // Prompt

let authorized = false;

for (let i = 0; i < AuthorizedList.length; i++) { // Check if the mail is authorized
    if (AuthorizedList[i] === email) {
        authorized = true
        break
    }
}

// Let him access
if (authorized) {
    console.log("Accesso consentito")

    // Generate random numbers
    const dadoPlayer = Math.floor(Math.random() * 6) + 1;
    const dadoPC = Math.floor(Math.random() * 6) + 1;

    // Show results
    console.log(`Il Giocatore ha ottenuto ${dadoPlayer}\nIl PC ${dadoPC}`)

    // Who won?
    if (dadoPlayer > dadoPC) {
        console.log("Il giocatore vince")
    } else if (dadoPC > dadoPlayer) {
        console.log("il PC vince")
    } else {
        console.log("Draw")
    }
} else {
    console.log("[401] Non autorizzato")
}