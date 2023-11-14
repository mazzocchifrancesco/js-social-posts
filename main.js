const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// dichiaro container
const container=document.getElementById("container");

// array likes salvati
const likesCliccati=[];



for (let i = 0; i < posts.length; i++) {

    // counter per check mi piace
    let counter=0;
   
// creo post e aggiungo al dom
const post=document.createElement("div");
post.classList.add("post");
container.append(post);
// creo header
const header=document.createElement("div");
header.classList.add("post__header");
post.append(header);

// inizio meta
const meta=document.createElement("div");
meta.classList.add("post-meta");
header.append(meta);

const metaIcon=document.createElement("div");
metaIcon.classList.add("post-meta__icon");
meta.append(metaIcon);


// immagine profilo
const proPic=document.createElement("img")
proPic.classList.add("profile-pic");
proPic.src=posts[i].author.image;
metaIcon.append(proPic);

//meta data
const metaData=document.createElement("div");
metaData.classList.add("post-meta__data");
meta.append(metaData);

// autore
const author=document.createElement("div");
author.classList.add("post-meta__author");
author.innerText=posts[i].author.name;
metaData.append(author);

// data
const data=document.createElement("div");
data.classList.add("post-meta__time");
data.innerText=posts[i].created;
metaData.append(data);

// testo
const text=document.createElement("div");
text.classList.add("post__text");
text.innerText=posts[i].content;
post.append(text);

// immagine post
const imgContainer=document.createElement("div");
imgContainer.classList.add("post__image");
post.append(imgContainer);

const mainPic=document.createElement("img");
mainPic.src=posts[i].media;
imgContainer.append(mainPic);

// post footer
const footer=document.createElement("div");
footer.classList.add("post__footer");
post.append(footer);

const subFooter=document.createElement("div");
subFooter.classList.add("likes", "js-likes");
footer.append(subFooter);

const likes=document.createElement("div");
likes.classList.add("likes__cta");
subFooter.append(likes);

// PULSANTE MI PIACE

const aLikes=document.createElement("a");
aLikes.classList.add("like-button", "js-like-button");
aLikes.href="#";
aLikes.setAttribute("data-postid", posts[i].id);
likes.append(aLikes);
aLikes.addEventListener("click", function() {
    aLikes.classList.toggle("like-button--liked");
    if (counter==0) {
        counter++;
        posts[i].likes+=1;
        likesCliccati.push(posts[i].id)
    }
    else {
        counter--;
        posts[i].likes-=1;
    }
    numLikes.innerText=posts[i].likes;
});

const icone=document.createElement("i");
icone.classList.add("like-button__icon", "fas", "fa-thumbs-up");
icone.setAttribute("aria-hidden", true);
aLikes.append(icone);

const miPiace=document.createElement("span");
miPiace.classList.add("like-button__label");
miPiace.innerText="Mi Piace";
aLikes.append(miPiace);

// likes counter
const likesCounter=document.createElement("div");
likesCounter.classList.add("likes__counter");

const numLikes=document.createElement("b");
numLikes.classList.add("js-likes-counter");
numLikes.id="like-counter-"+posts[i].id
numLikes.innerText=posts[i].likes;

likesCounter.append("Piace a", numLikes, "persone");
subFooter.append(likesCounter);

}

// FUNZIONI
