const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
   title: "Arrasta",
   artist: "Glória Groove (Feat. Léo Santana)",
   cover:  "files/arrasta-gloria-groove.jpg",
   file: "files/arrasta-gloria-groove.mp3",
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerHTML = `<i class='material-icons'>account_circle</i> ${data.artist}`
audio.src = data.file;