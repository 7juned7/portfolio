const movingDiv = document.querySelector('.socials');
const popUp = document.querySelector(".modals")
const popUpBtn = document.querySelector(".about-me")
const closePopup = document.querySelector(".cross")
const mainContainer = document.querySelector("main")
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const viewportHeight = window.innerHeight; // Get the viewport height
    const scrollProgress = (scrollPosition / viewportHeight) * 100;
    console.log(window.scrollY)
    const moveByX = scrollPosition / 80; // Horizontal movement

    // Apply both X and Y movements
    if (scrollProgress < 100) {
        movingDiv.style.backgroundColor = "transparent"

        movingDiv.style.transform = `translate(${moveByX}vw`; // Move in both directions
    }
    if (scrollProgress > 100) {
        movingDiv.style.backgroundColor = "black"
    }
});

popUpBtn.addEventListener('click', () => {
    popUp.style.transform = "translate(-50%, -50%)"
    popUp.style.scale = "1";
    mainContainer.style.opacity = ".3"

})
closePopup.addEventListener("click", () => {
    popUp.style.transform = "translate(-150%, -50%)"
    popUp.style.scale = "0";
    mainContainer.style.opacity = "1"
})