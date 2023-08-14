//HOME score
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

function increaseHomeScore(score){
    homeScore += score
    homeScoreEl.textContent = homeScore
    winner()
}

//GUEST score
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScore(score){
    guestScore += score
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
        homeScoreEl.style.border = "2px solid yellow"
        guestScoreEl.style.border = "2px solid transparent"

    } else if(guestScore > homeScore) {
        guestScoreEl.style.border = "2px solid yellow"
        homeScoreEl.style.border = "2px solid transparent"

    } else{
        homeScoreEl.style.border = "2px solid transparent"
        guestScoreEl.style.border = "2px solid transparent"
    }

}