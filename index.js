const musicImg = document.querySelector(".music-img");
const musicName = document.querySelector(".music-name");
const musicSinger = document.querySelector(".music-singer");
const musicStartTime = document.querySelector(".start");
const musicEndTime = document.querySelector(".end");
const progress = document.querySelector(".progress");
const progressBox = document.querySelector(".progress-box");
const prevBtn = document.querySelector(".prev");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");
const audio = document.querySelector(".audio");

const songs = [
  {
    name: "Affair",
    singer: "Elly Mangat",
  },
  {
    name: "Born To Shine",
    singer: "Diljit Dosanjh",
  },
  {
    name: "Brown Munde",
    singer: "Ap Dhillon",
  },
  {
    name: "Do You Know",
    singer: "Diljit Dosanjh",
  },
  {
    name: "Elevated",
    singer: "Subh",
  },
  {
    name: "Excuses",
    singer: "Ap Dhillon",
  },
  {
    name: "G.O.A.T.",
    singer: "Diljit Dosanjh",
  },
  {
    name: "Insane",
    singer: "Ap Dhillon",
  },
  {
    name: "LOVER",
    singer: "Diljit Dosanjh",
  },
  {
    name: "No Love",
    singer: "Subh",
  },
  {
    name: "Nothing's Gonna Stop Us Now",
    singer: "Starship",
  },
  {
    name: "Peaches",
    singer: "Diljit Dosanjh",
  },
  {
    name: "Proper Patola",
    singer: "Diljit Dosanjh",
  },
  {
    name: "Welcome To My Hood",
    singer: "Diljit Dosanjh",
  },
  {
    name: "Rasputin",
    singer: "Boney M.",
  },
  {
    name: "Summer High",
    singer: "Ap Dhillon",
  },
  {
    name: "We Rollin",
    singer: "Subh",
  },
];

// index
let songIndex = 2;

// initial song load
loading(songIndex);

// functions
function loading(song) {
  const index = songs[song];
  musicImg.src = `image/${index.name}.jpg`;
  musicName.textContent = index.name;
  musicSinger.textContent = index.singer;
  audio.src = `songs/${index.name}.mp3`;
}

function playSong() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  playBtn.classList.toggle("fa-play");
  playBtn.classList.add("fa-pause");
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loading(songIndex);
  audio.play();
  playBtn.classList.add("fa-pause");
  playBtn.classList.remove("fa-play");
}
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loading(songIndex);
  audio.play();
  playBtn.classList.add("fa-pause");
  playBtn.classList.remove("fa-play");
}
// function progressTime(e) {
//   const timeUpdate = e.srcElement.currentTime;
//   const duration = e.srcElement.duration / 60;
//   musicStartTime.textContent = Math.floor(timeUpdate);
//   musicEndTime.textContent = `${Math.floor(duration)}mins`;
// }

function progressBar(e) {
  const timeUpdate = e.srcElement.currentTime;
  const duration = e.srcElement.duration;

  progress.style.width = `${(timeUpdate / duration) * 100}%`;

}

function progressControl(v) {
  const width =this.clientWidth;
  const offset=v.offsetX;
  const duration=audio.duration;
  const progressTime=(offset/width)*duration
  audio.currentTime=progressTime;
}
//play btn
playBtn.addEventListener("click", playSong);

//next btn
nextBtn.addEventListener("click", nextSong);

// previous btn
prevBtn.addEventListener("click", prevSong);

// progress time

// audio.addEventListener("timeupdate", progressTime);

// next song
audio.addEventListener("ended", nextSong);

// progress bar
audio.addEventListener("timeupdate", progressBar);

// progress control
progressBox.addEventListener("click", progressControl);
