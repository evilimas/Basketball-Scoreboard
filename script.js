//HOME score
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

function increaseHomeScoreByOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    winner()
}
function increaseHomeScoreByTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    winner()
}
function increaseHomeScoreByThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    winner()
}

//GUEST score
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreByOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    winner()
}
function increaseGuestScoreByTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    winner()
}
function increaseGuestScoreByThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    winner()
}

//New game
let newGameBtn = document.getElementById("new-game")

newGameBtn.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
    winner()
})
//Wining team
function winner(){
    if(homeScore > guestScore){
        homeScoreEl.style.border = "2px solid #0000FF"
        guestScoreEl.style.border = "none"

    } else if(guestScore > homeScore) {
        guestScoreEl.style.border = "2px solid #0000FF"
        homeScoreEl.style.border = "none"

    } else{
        homeScoreEl.style.border = "none"
        guestScoreEl.style.border = "none"
    }

}