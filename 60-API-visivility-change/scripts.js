/* Vídeo: https://www.pexels.com/es-es/video/2869107/ */
const video = document.getElementById('video')

// addEventListener('visibilitychange', (e) => {
//     if (document.visibilityState === 'visible') {
//         console.log('PLAY')
//         video.play()
//     } else if (document.visibilityState === 'hidden') {
//         console.log('PAUSE')
//         video.pause()
//     }
// })

addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())



//? html
// se puede usar muted
// <video id="video" muted autoplay>

// <!-- Autoplay is allowed. -->
// <iframe src="https://cross-origin.com/myvideo.html" allow="autoplay">

// <!-- Autoplay and Fullscreen are allowed. -->
// <iframe src="https://cross-origin.com/myvideo.html" allow="autoplay; fullscreen"></iframe>


//? js

// You should always look at the Promise returned by the play function to see if it was rejected:

// var promise = document.querySelector('video').play();

// if (promise !== undefined) {
//   promise.then(_ => {
//     // Autoplay started!
//   }).catch(error => {
//     // Autoplay was prevented.
//     // Show a "Play" button so that user can start playback.
//   });
// }



// <button id="unmuteButton"></button>

// <script>
//   unmuteButton.addEventListener('click', function() {
//     video.muted = false;
//   });
// </script>

//* información

// https://developer.chrome.com/blog/autoplay/#iframe-delegation