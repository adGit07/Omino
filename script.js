
      $(document).ready(function () {
        $(".popular-items-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });
    
      const video = document.getElementById("food-video");
      const pauseBtn = document.getElementById("pause-btn");
    
      // Show the play button when video is paused or not playing
      pauseBtn.style.display = "block";
    
      // Add click event to the play button
      pauseBtn.addEventListener("click", function () {
        if (video.paused) {
          video.play();
          pauseBtn.style.display = "none"; // Hide the button once the video starts playing
        } else {
          video.pause();
          pauseBtn.style.display = "block"; // Show the button when the video is paused
        }
      });
    
      // Add click event to the video to pause it and show the play button
      video.addEventListener("click", function () {
        if (!video.paused) {
          video.pause();
          pauseBtn.style.display = "block"; // Show the button when the video is paused
        }
      });
    
      // Show the button again if video is paused
      video.addEventListener("pause", function () {
        pauseBtn.style.display = "block";
      });
    
      // Show the button again if the video ends
      video.addEventListener("ended", function () {
        pauseBtn.style.display = "block";
      });
    
      
//Cart fuctionality


function showCartPopup() {
  document.getElementById('overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden'; 
}

function goBackToHome() {
  document.getElementById('overlay').style.display = 'none';
  document.body.style.overflow = 'auto'; 
}


// requesta dish  fuctionality

function showRequestPopup() {
window.scrollTo(0, 0); 
document.getElementById('overlayRequest').style.display = 'flex';
document.body.style.overflow = 'hidden'; 
}

function cancelRequest() {
window.scrollTo(0, 1800); 
document.getElementById('overlayRequest').style.display = 'none';
document.body.style.overflow = 'auto'; 
}

function submitRequest() {
window.scrollTo(0, 1800); 
document.getElementById('overlayRequest').style.display = 'none';
document.body.style.overflow = 'auto'; 
}
