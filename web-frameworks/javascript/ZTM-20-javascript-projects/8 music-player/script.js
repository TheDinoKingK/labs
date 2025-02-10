const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress =  document.getElementById('progress');
const durationEl = document.getElementById('duration');
const currentTimeEl = document.getElementById('current-time');
const volumeButton = document.getElementById('volume');
const previousButton = document.getElementById('prev');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');

// Music Listing
const songs = [
  {
    name: 'metric-1',
    displayName: 'Metric',
    artist: 'Jacinto',
    coverArt: 'metric-1.jpg'
  },
  {
    name: 'Sum 41-Underclass Hero',
    displayName: 'Underclass Hero',
    artist: 'Sum 41',
    coverArt: 'Underclass_Hero.jpg'
  },
  {
    name: "Sum 41-We're All To Blame(cut)",
    displayName: 'We\'re All To Blame',
    artist: 'Sum 41',
    coverArt: 'Chuck.jpg'
  },
  {
    name: 'Colbreakz-50.000',
    displayName: '50.000',
    artist: 'Colbreakz',
    coverArt: '50.000.jpg'
  },
  {
    name: 'Colbreakz-My Universe',
    displayName: 'My Universe',
    artist: 'Colbreakz',
    coverArt: 'My_Universe.jpg'
  },
  {
    name: 'Adrian Lux-Teenage Crime-Christofi Remix',
    displayName: 'Teenage Crime (Christofi Remix)',
    artist: 'Adrian Lux',
    coverArt: 'Teenage_Crime-(Christofi_Remix).jpg'
  },
  {
    name: 'Audien_&_Echosmith-Favorite Sound',
    displayName: 'Favorite Sound',
    artist: 'Audien, Echosmith',
    coverArt: 'Favorite_Sound.jpg'
  },
  {
    name: 'INZO-Overthinker',
    displayName: 'Overthinker',
    artist: 'INZO',
    coverArt: 'Overthinker.jpg'
  },
  {
    name: 'Blooom_&_Ghost\'n\'Ghost-Desire',
    displayName: 'Desire',
    artist: 'Blooom, Ghost\'n\'Ghost',
    coverArt: 'Desire.jpg'
  },
  {
    name: 'Diamond_Eyes-Everything',
    displayName: 'Everything',
    artist: 'Diamond Eyes',
    coverArt: 'Everything.jpg'
  },
  {
    name: 'Uppermost-Angels-Lemaitre%20Remix',
    displayName: 'Angels (Lemaitre Remix)',
    artist: 'Upppermost',
    coverArt: 'Angels-(Lemaitre_Remix).jpg'
  },
  {
    name: 'Flay-Youthful',
    displayName: 'Youthful',
    artist: 'Flay!',
    coverArt: 'Youthful.jpg'
  },
  {
    name: 'ReeK-This%20Was%202018',
    displayName: 'This Was 2018',
    artist: 'Reek',
    coverArt: 'This_Was_2018.jpg'
  },
];

// Check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playButton.classList.replace('fa-play', 'fa-pause');
  playButton.setAttribute('title' , 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playButton.classList.replace('fa-pause', 'fa-play');
  playButton.setAttribute('title' , 'Play');
  music.pause();
}

// Play or Pause Event Listener
playButton.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `./music/${song.name}.mp3`;
  image.src = `./img/${song.coverArt}`;
}

// Cureent Playing Song
let songIndex = 0;

// next Song
function nextSong() {
   songIndex++;
  if(songIndex > songs.length -1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  music.play();
  playButton.classList.replace('fa-play', 'fa-pause');
  progress.style.width = '0%';
}

function previousSong() {
  songIndex--;
  if(songIndex < 0) {
    songIndex = songs.length -1;
  }
  loadSong(songs[songIndex]);
  progress.style.width = '0%';
  music.play();
  playButton.classList.replace('fa-play', 'fa-pause');
}

// Updating The Progress Bar Live
function updateProgressBar(e) {
  if(isPlaying) {
    const { duration, currentTime } = e.srcElement;

    // Updating the progress bar completion
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Calculating duration display
    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if(durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // Delay Switching Full Duration To Evade Null text Blimp
    if(durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // Calculating duration display
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if(currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
  console.log(music.volume);
}

// Setting Time Where A User Clicks A Part Of The Progress Bar
function setProgress(e) {
  const width =  this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  const percent = (clickX / width) * duration;
  music.currentTime = percent;
}

// setting volume to either 100% 50% or Muted
function volumeChange(e) {
  let volumeAmount = music.volume;
  volumeAmount = volumeAmount - 0.1;
  if(volumeAmount < 0) {
    volumeAmount = 1;
  }
  if(volumeAmount < 0.51) {
    volumeButton.classList.replace('fa-volume-up', 'fa-volume-down');
  }
  if(volumeAmount < 0.1) {
    volumeButton.classList.replace('fa-volume-down', 'fa-volume-mute');
  }
  if(volumeAmount == 1) {
    volumeButton.classList.replace('fa-volume-mute', 'fa-volume-up');
  }
  music.volume = volumeAmount;
  console.log(music.volume);
}


// On Load - Select First
loadSong(songs[songIndex]);

// Event Listeners
previousButton.addEventListener('click', previousSong);
nextButton.addEventListener('click', nextSong);
volumeButton.addEventListener('click', volumeChange);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgress)