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
        profilePic: "https://unsplash.it/300/300?image=7",
        date: "08-07-2021",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=77",
        likes: 83
    },
    {
        id: 2,
        name: "Lionel",
        surname: "Messi",
        profilePic: "https://unsplash.it/300/300?image=27",
        date: "02-08-2022",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=126",
        likes: 64
    },
    {
        id: 3,
        name: "Marco",
        surname: "Lanci",
        profilePic: "https://unsplash.it/300/300?image=47",
        date: "10-07-2020",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=125",
        likes: 79
    },
    {
        id: 4,
        name: "Cristiano",
        surname: "Ronaldo",
        profilePic: "https://unsplash.it/300/300?image=77",
        date: "12-24-2022",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=289",
        likes: 97
    },
    {
        id: 5,
        name: "Kylian",
        surname: "Mbappé",
        profilePic: "https://unsplash.it/300/300?image=10",
        date: "03-12-2022",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto voluptate recusandae architecto nihil ullam aut alias",
        img: "https://unsplash.it/600/300?image=257",
        likes: 60
    },
]

//! prendo elementi in pagina

const target = document.getElementById("container");


// posts.forEach((post) => {
// posts.slice
// });
let postCode = "";

posts.forEach((post) => {
    postCode += `
<div class="post">
   <div class="post__header">
        <div class="post-meta">
           <div class="post-meta__icon">
             <img class="profile-pic" src="${post.profilePic}" alt="Phil Mangione" />
            </div>
            <div class="post-meta__data">
               <div class="post-meta__author">${post.name}  ${post.surname}</div>
               <div class="post-meta__time">${post.date}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${post.text}</div>
    <div class="post__image">
        <img src="${post.img}" alt="" />
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
             <div class="likes__cta">
                 <button id="${post.id}" class="like-button js-like-button" href="#" data-postid="1">
                     <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                     <span class="like-button__label">Mi Piace</span>
                 </button>
             </div>
             <div class="likes__counter">Piace a <b id="${post.id}" class="js-likes-counter">${post.likes}</b> "persone"</div>
         </div>
    </div>
</div>

`

});
target.innerHTML = postCode;


const buttons = document.querySelectorAll(".js-like-button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("like-button--liked");
        const postId = button.dataset.postid;

        const counter = document.getElementById(`${postId}`);
        let likes = parseInt(counter.innerText);
        const isClicked = button.classList.contains("like-button--liked");
        counter.innerText = isClicked ? ++likes : --likes;
    });
});  