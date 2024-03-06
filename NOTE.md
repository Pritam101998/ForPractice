input[type="submit"]:active {
opacity: 0.6;
}

.signin .content .form .inputBox input[type="submit"] {
padding: 10px;
background: #0f0;
color: #000;
font-weight: 600;
font-size: 1.35em;
letter-spacing: 0.05em;
cursor: pointer;
}

text-transform: uppercase;

box-shadow: 0 15px 35px rgba(0, 0, 0, 9);

z-index: 2;

width: calc(6.25vw - 2px);
height: calc(6.25vw - 2px);

@keyframes animate {
0% {
transform: translateX(-100%);
}
100% {
transform: translateX(100%);
}
}

content: "";

overflow: hidden;

const video = document.getElementById("myVideo");

video.addEventListener("mouseenter", function() {
video.play(); // Start playing the video on hover
video.classList.add("play"); // Add the play class to show the video
});

video.addEventListener("mouseleave", function() {
video.pause(); // Pause the video when the mouse leaves
video.currentTime = 0; // Reset the video to the beginning
video.classList.remove("play"); // Remove the play class to hide the video
});

#myVideo {
width: 100%; /_ Set the width of the video _/
height: auto; /_ Set the height of the video _/
opacity: 0; /_ Initially hide the video _/
transition: opacity 1s; /_ Apply transition effect to opacity _/
}

#myVideo.play {
opacity: 1; /_ Show the video when the play class is applied _/
}

<video id="myVideo" loop>
  <source src="your-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
