import musics from "./data.js";
import { path, secondsToMinutes } from "./utils.js"
import elements from "./playerElements.js"

export default {
   musicData: musics, //musics está importado vindo de "data.js"
   currentMusic: {},
   currentPlaying: 0,
   isPlaying: false,
   start() {
      elements.get.call(this);
      this.update();
   },

   play() {
      this.isPlaying = true;
      this.audio.play();
      this.audio.volume = this.setVolume(this.volumeControler.value);
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

   toggleMute() {
      this.audio.muted = !this.audio.muted;
      this.volumeToggler.innerText = this.audio.muted ? "volume_off" : "volume_up";
   },

   next() {
      this.currentPlaying++;
      if(this.currentPlaying == this.musicData.length) {
         this.restart();
      }
      this.update();
      this.play();
   },

   setVolume(value) {
      this.audio.volume = value / 100;
      this.setVolumeTogglerIcon();
   },

   setSeek(value){
      this.audio.currentTime = value;
   },

   timeUpdate() {
      this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
      this.seekBar.value = this.audio.currentTime;
   },

   setVolumeTogglerIcon() {
      if(this.audio.volume == 0) {
         this.volumeToggler.innerText = "volume_off";
      } else if (this.audio.volume < 0.5) {
         this.volumeToggler.innerText = "volume_down";
      } else {
         this.volumeToggler.innerText = "volume_up";
      }
   },

   update() {
      this.currentMusic = this.musicData[this.currentPlaying];
      this.cover.style.background = `url('${path(this.currentMusic.cover)}') no-repeat center center / cover`;
      this.title.innerText = this.currentMusic.title;
      this.artist.innerHTML = `<i class='material-icons'>account_circle</i> ${this.currentMusic.artist}`;
      elements.createAudioElement.call(this, path(this.currentMusic.file));
      this.audio.onloadeddata = () => {
         elements.actions.call(this);
      };
   },

   restart() {
      this.currentPlaying = 0;
      this.update();
   },
};