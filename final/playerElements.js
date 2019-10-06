import { secondsToMinutes } from "./utils.js";

export default {
   get() {
      this.cover = document.querySelector(".card-image");
      this.title = document.querySelector(".card-content h5");
      this.artist = document.querySelector(".artist");
      this.playPause = document.querySelector("#play-pause");
      this.volumeToggler = document.querySelector("#volume-toggler");
      this.volumeControler = document.querySelector("#vol-control");
      this.seekBar = document.querySelector("#seekbar");
      this.currentDuration = document.querySelector("#current-duration");
      this.totalDuration = document.querySelector("#total-duration");
   },
   createAudioElement(musicFile) {
      this.audio = new Audio(musicFile);
   },
   actions() {
      this.audio.onended = () => this.next();
      this.audio.ontimeupdate = () => this.timeUpdate();
      this.playPause.onclick = () => this.togglePlayPause();
      this.volumeToggler.onclick = () => this.toggleMute();
      this.volumeControler.oninput = () => this.setVolume(this.volumeControler.value);
      this.volumeControler.onchange = () => this.setVolume(this.volumeControler.value);
      this.seekBar.oninput = () => this.setSeek(this.seekBar.value);
      this.seekBar.onchange = () => this.setSeek(this.seekBar.value);
      this.seekBar.max = this.audio.duration;
      this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
   }
}