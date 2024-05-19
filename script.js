/*---------- Loading Screen ----------*/

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".LoadingScreen").style.visibility = "visible";
        document.querySelector("#HomePage").style.visibility = "hidden";
    } else {
        setTimeout(hideLoader, 2000);
    }
   // if (document.g, 2000);
   // }
};

function hideLoader(){
  document.querySelector(".LoadingScreen").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
  document.querySelector("#HomePage").style.visibility = "visible";
}

//--------------------------s---------------------------
document.addEventListener('DOMContentLoaded', () => {
    const contentData = [
        //{ imgSrc: 'images/bulb.webp', description: 'bulb rahh' },
        //{ imgSrc: 'starry.jpg', description: 'stars 2' },
        //{ imgSrc: 'stars.jpg', description: 'Description for image 3' },
        { imgSrc: 'images/photo1.jpg', description: '10 Million Years Ago' },
        { imgSrc: 'images/photo2.jpg', description: '1 Million Years Ago'},
        { imgSrc: 'images/photo3.jpg', description: '100 Thousand Years Ago'},
        { imgSrc: 'images/photo4.webp', description: '10 Thousand Years Ago'},
        { imgSrc: 'images/photo5.jpg', description: '1 Thousand Years Ago'},
        { imgSrc: 'images/photo6.jpg', description: '500 years ago'},
        { imgSrc: 'images/photo7.jpg', description: '250 years ago'},
        { imgSrc: 'images/photo8.jpg', description: '100 years ago'},
        { imgSrc: 'images/photo9.webp', description: '50 years ago'},
        { imgSrc: 'images/photo10.webp', description: '25 years ago'},
        { imgSrc: 'images/photo11-2.jpg', description: '10 years ago'},
        { imgSrc: 'images/photo12.jpg', description: '5 years ago'},
        {imgSrc: 'images/photo13.webp', description: 'TODAY'}

    ]; 

    let currentIndex = 0;

    function updateContent(index) {
        const imageElement = document.getElementById('HomePage');
        const descriptionElement = document.getElementById('images');

        descriptionElement.innerHTML = contentData[index].description;
        imageElement.style.backgroundImage = `url(${contentData[index].imgSrc})`;
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
