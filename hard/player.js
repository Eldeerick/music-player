import musics from "./data.js";
import { path } from "./utils.js"
import elements from "./playerElements.js"

export default {
   musicData: musics, //musics está importado vindo de "data.js"
   currentMusic: {},
   currentPlaying: 0,
   isPlaying: false,
   start() {
      elements.get.call(this);
      elements.actions.call(this);
      this.update();
      this.audio.onended = () => this.next();
   },
   play() {
      this.isPlaying = true;
      this.audio.play();
      this.playPause.innerText = "pause";
   },
   pause() {
      this.isPlaying = false;
      this.audio.pause();
      this.playPause.innerText = "play_arrow";
   },
   togglePlayPause() {
      if(this.isPlaying){
         this.pause();
      } else {
         this.play();
      }
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
      elements.createAudioElement.call(this, path(this.currentMusic.file));
   },
   restart() {
      this.currentPlaying = 0;
      this.update();
   },
};