/*---------- Loading Screen ----------*/

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".LoadingScreen").style.visibility = "visible";
    } else {
        setTimeout(hideLoader, 2000);
    }
   // if (document.g, 2000);
   // }
};

function hideLoader(){
  document.querySelector(".LoadingScreen").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
}

//-----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const contentData = [
        { imgSrc: 'images/bulb.webp', description: 'bulb rahh' },
        { imgSrc: 'starry.jpg', description: 'stars 2' },
        { imgSrc: 'stars.jpg', description: 'Description for image 3' },
        { imgSrc: 'images/4th.jpg', description: 'Description for image 4' },
      
    ]; 

    let currentIndex = 0;

    function updateContent(index) {
        const imageElement = document.getElementById('image');
        const descriptionElement = document.getElementById('images');

        imageElement.src = contentData[index].imgSrc;
        descriptionElement.innerHTML = contentData[index].description;
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % contentData.length;
            updateContent(currentIndex);
        }
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + contentData.length) % contentData.length;
            updateContent(currentIndex);
        }
    });

    // Initial content update
    updateContent(currentIndex);
});


// document.addEventListener("DOMContentLoaded", () => {
  
// });

/*
document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const container = document.querySelector('.container');

    let currentScreenIndex = 0;
f
    function navigateToScreen(index) {
        if (index >= 0 && index < screens.length) {
            const offset = -index * 100;
              navigateToScreen(currentScreenIndex + 1);
        } else if (event.key === 'ArrowLeft') {
            navigateToScreen(currentScreenIndex - 1);
        }
    });
});
*/
// function displayScreen(numYears, img) {
    
// }
const images = ["img1.jpg", "img2.jpg"];
const years = ["10000000 years ago", "10000000 years ago"];
