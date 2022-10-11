import playList from "./playList.js";
const playIconBtn = document.querySelector(".control")
const artist = document.querySelector(".musicianName")
const songName = document.querySelector(".musicName")
const haederName = document.querySelector(".topHeadline")
const songImage = document.querySelector(".albumImage")
const musicRange = document.querySelector(".musicRange")
const volumeBtn = document.querySelector(".volumee")
const nextSong = document.querySelector(".next")
const prevSong = document.querySelector(".prev")
const startingTime = document.querySelector(".starting")
const endingTime = document.querySelector(".ending");
const listBtn = document.querySelectorAll(".listItems");
let audioTrack = document.createElement("audio")
let isPlaying = false;
let trackIndex = 0;
let updateTime;

function changePlaying() {
    isPlaying ?  pauseMusic() : playMusic();
}
playIconBtn.addEventListener("click", changePlaying)
 function playMusic() {
    isPlaying = true;
    playIconBtn.innerHTML =`<i class="far fa-pause-circle">`;
    audioTrack.play()

  
 };

 function pauseMusic() {
    isPlaying = false;
    playIconBtn.innerHTML =`<i class="far fa-play-circle">`;
    audioTrack.pause()
 }

function loadTracks(eachTrack) {
   clearInterval(updateTime);
   audioTrack.src = playList[eachTrack].song;
   audioTrack.load()
   artist.textContent = playList[eachTrack].singer;
   songName.textContent = playList[eachTrack].name;
  haederName.textContent = playList[eachTrack].name;
   songImage.src = playList[eachTrack].img;

   updateTime = setInterval(Musicduration, 1000);
 audioTrack.addEventListener("ended", next)

}
loadTracks(trackIndex)

function next() {
   if (trackIndex < playList.length -1) {
      trackIndex += 1;
      loadTracks(trackIndex)
      playMusic()
   }else{
      trackIndex = 0;
   }
}

function prev() {
 trackIndex > 0 ? trackIndex -= 1 : trackIndex = playList.length-1
   loadTracks(trackIndex);
      playMusic();
      
}
function changeVolume(e) {
   let volum = e.target.value/100
   audioTrack.volume = volum

}
volumeBtn.addEventListener("change", changeVolume)
nextSong.addEventListener("click", next)
prevSong.addEventListener("click", prev)


let positon = 0;
function Musicduration() {
   positon = audioTrack.currentTime * (100 / audioTrack.duration)
       musicRange.value = positon ;
   if (audioTrack.duration) {
      let currMin = Math.floor(audioTrack.currentTime / 60);
      let currSec = Math.floor(audioTrack.currentTime - currMin * 60);
      let durMin = Math.floor(audioTrack.duration / 60);
      let durSec = Math.floor(audioTrack.duration - durMin * 60);
    currMin = currMin < 10 ?  `0${currMin}` : currMin;
    currSec = currSec < 10 ?  `0${currSec}` : currSec;
    durMin = durMin < 10 ?  `0${durMin}` : durMin;
    durSec = durSec < 10   ?  `0${durSec}` : durSec;
    startingTime.textContent = `${currMin} : ${currSec}`;
    endingTime.textContent = `${durMin} : ${durSec}`;

   
   } 
  
}

const miniMusic = document.querySelector('.miniMusic')
const heart = document.querySelector('.list')
heart.addEventListener("click", ()=>{
 const display = playList.map(m=>{
   const {img, name, singer} = m;
   return( `<div class="miniContainer">
   <div class="mini-Inner">
       <p><img src="${img}" alt="image" class="mini-image"></p>
   <div>
       <p style="color: #fff; font-size: 0.9rem;" class ='naam'>${name}</p>
       <p style="color: grey; font-size: 0.7rem;" class ='sing'>${singer}</p>
   </div>
   </div>
</div>` 
 ) 
   
})
miniMusic.innerHTML = display.join('');
const miniMusicDivs = document.querySelectorAll('.miniContainer');
playRecent(miniMusicDivs)
});

listBtn.forEach(d=>{
  d.addEventListener('click', ()=>{
   if (d.id === 'heart') {
    d.classList.toggle('love');
   }
})
})


function playRecent(music) {
   music.forEach(e=>{
      e.addEventListener('click', ()=>{
     let image =  e.querySelector('.mini-image')
     let singer =  e.querySelector('.sing')
     let name =  e.querySelector('.naam')

         const items = {
            name: name.textContent,
            singer: singer.textContent,
            img: image.src,
         }
let kk =  playList.filter(m=>{
      JSON.stringify(items)
      JSON.stringify(m)
      return m.name === items.name;
   })
   let finder = playList.findIndex(k=>{
      return k.name === kk[0].name;
   })
  loadTracks(finder)
      playMusic()
      function next() {
         if (finder < playList.length -1) {
            finder += 1;
            loadTracks(finder)
            playMusic()
         }else{
            finder = 0;
         }
      }
      nextSong.addEventListener("click", next)
      function prev() {
         finder > 0 ? finder -= 1 : finder = playList.length-1;
           loadTracks(finder);
              playMusic();       
        }
        prevSong.addEventListener("click", prev)
      })
   })
}



 musicRange.addEventListener("change", (e)=>{  
      if (isPlaying === true) {
        
     
    })
