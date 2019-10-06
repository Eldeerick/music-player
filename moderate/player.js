window.player = {
   cover: document.querySelector(".card-image"),
   title: document.querySelector(".card-content h5"),
   artist: document.querySelector(".artist"),
   audio: document.querySelector("audio"),
   musicData: musics, //musics está global vindo de "data.js"
   currentMusic: {},
   currentPlaying: 0,
   start() {
      this.update();
      this.audio.onended = () => this.next();
   },

   next() {
      this.currentPlaying++;

      if(this.currentPlaying == this.musicData.length) {
         this.restart();
      }
      this.update();
   },

   update() {
      this.currentMusic = this.musicData[this.currentPlaying];

      this.cover.style.background = `url('${path(
         this.currentMusic.cover
         )}') no-repeat center center / cover`;
      this.title.innerText = this.currentMusic.title;
      this.artist.innerHTML = `<i class='material-icons'>account_circle</i> ${this.currentMusic.artist}`
      this.audio.src = path(this.currentMusic.file);
   },

   restart() {
      this.currentPlaying = 0;
      this.update();
   }
};