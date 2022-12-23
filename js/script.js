/*
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
# Consigli del giorno:
 Ragioniamo come sempre a step.
 Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
 console.log() è nostro amico.
 Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
 */

const posts = [
    {
        id: 1,
        name: "Ali",
        surname: "Chouchene",
        profilePic: "https://unsplash.it/300/300?image=15",
        date: "08-07-2021",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=171",
        likes: 83
    },
    {
        id: 2,
        name: "Lionel",
        surname: "Messi",
        profilePic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.transfermarkt.it%2Flionel-messi%2Fprofil%2Fspieler%2F28003&psig=AOvVaw0LPgUsYJKhRwp97L1Zel5v&ust=1671886482465000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiQitLkj_wCFQAAAAAdAAAAABAD",
        date: "02-08-2022",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=171",
        likes: 64
    },
    {
        id: 3,
        name: "Marco",
        surname: "Lanci",
        profilePic: "https://unsplash.it/300/300?image=15",
        date: "10-07-2020",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=171",
        likes: 79
    },
    {
        id: 4,
        name: "Cristiano",
        surname: "Ronaldo",
        profilePic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gazzetta.it%2Fcalcio%2Fgiocatori%2Fcristiano-ronaldo%2F14937%2F&psig=AOvVaw2L1yJUaf15Vh-gtXpxzJVj&ust=1671886424310000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC0yr3kj_wCFQAAAAAdAAAAABAI",
        date: "12-24-2022",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=171",
        likes: 97
    },
    {
        id: 5,
        name: "Kylian",
        surname: "Mbappé",
        profilePic: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.si.com%2Fsoccer%2Fliverpool%2Fnonlfc%2Fbreaking-real-madrid-sign-psg-kylian-mbappe&psig=AOvVaw3f7sjOua9dW6Hgjdd9EDmL&ust=1671886634326000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLid0pjlj_wCFQAAAAAdAAAAABAJ",
        date: "03-12-2022",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=171",
        likes: 60
    },
]


