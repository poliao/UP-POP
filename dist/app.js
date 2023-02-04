const favButton = document.getElementById("fav-btn")

/*favorite button event*/
let turnOn = false;
favButton.addEventListener('click' , ()=> {
    const star = document.getElementById("star-fav")
    let getSyle = favButton.style
    turnOn = !turnOn
    if (turnOn) {
        star.setAttribute("name", "star")
        getSyle.color = "rgba(251, 191, 36, 1)";
        getSyle.backgroundColor = "rgba(251, 191, 36, 0.6)"
        getSyle.opacity = "1"
    }else {
        star.setAttribute("name","star-outline")
        getSyle.color = "white";
        getSyle.backgroundColor = "rgba(255, 255, 255, 0.3)"
    }
    
})