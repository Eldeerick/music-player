export default {
   get() {
      this.cover = document.querySelector(".card-image");
      this.title = document.querySelector(".card-content h5");
      this.artist = document.querySelector(".artist");
      this.playPause = document.querySelector("#play-pause");
   },
   createAudioElement(musicFile) {
      this.audio = new Audio(musicFile);
   },
   actions() {
      this.playPause.onclick = () => this.togglePlayPause();
   }
}