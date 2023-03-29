/*  IMAGE OPTIONS FOR COMPUTER  */
const hands = [ 
    "images/paper_player2.png",
    "images/scissors_player2.png",
    "images/rock_player2.png"
]

/*  VARIABLES  */
let moves = 0
let yourScore = 0
let computerScore =0

const yourName = document.getElementById("your-name")
const computerName = document.getElementById("computer-name")
const options = document.getElementById("option-cntr")
const movesLeft = document.getElementById("moves-left")
const rock = document.getElementById("rock_option")
const paper = document.getElementById("paper_option")
const scissors = document.getElementById("scissors_option")
const you = document.getElementById("player1")
const gameButtons = document.getElementsByClassName("game-buttons")
const startGame = document.getElementById("start")
const endGame = document.getElementById("end")
const proceed = document.getElementById("proceed")
const computer = document.getElementById("player2")
const yourScoreEl = document.getElementById("score-one")
const computerScoreEl = document.getElementById("score-two")
const play = document.getElementById("play")
const roundsCntr = document.getElementById("rounds-cntr")
const threeRounds = document.getElementById("three-rounds")
const fiveRounds = document.getElementById("five-rounds")
const tenRounds = document.getElementById("ten-rounds")
const resultCntr = document.getElementById("result-cntr")
const result = document.getElementById("result")

/*   ROUND OPTIONS     */
threeRounds.addEventListener("click", function(){
    roundsCntr.style.display = "none"
    moves = 3
})

fiveRounds.addEventListener("click", function(){
    roundsCntr.style.display = "none"
    moves = 5
})

tenRounds.addEventListener("click", function(){
    roundsCntr.style.display = "none"
    moves = 10
})


/*   START OF GAME  */
startGame.addEventListener("click", function() {
    var maxLength = 12
    let playerName = prompt("What is your name?")
    nameCheck()

    //TO CHECK IF NAME ENTERED IS WITHIN DESIRED LENGTH
    function nameCheck() {

        if (playerName.length <= maxLength && playerName.length > 0) {
            yourName.innerHTML = playerName +":"
        }else if (playerName.length > maxLength) {
            alert("Maximum characters allowed is 12!")
            playerName = prompt("What is your name?")
            nameCheck()
        } else {
            alert("Please type in your name.")
            playerName = prompt("What is your name?")
            nameCheck()
        }
    }
    startGame.style.visibility = "hidden"
    proceed.style.visibility = "visible"
    movesCheck()
})

//TO CHECK MOVES LEFT
function movesCheck() {
    if (moves > 0 ) {
            options.style.display = "flex"
            movesLeft.innerHTML = moves
    }
    else {
        resultCntr.style.display = "flex"
        
        if (yourScore > computerScore) {
            result.innerHTML = "🎉You won!🎉"
            result.style.color = "#00ff00"
        }
        else if (computerScore > yourScore) {
            result.innerHTML = "You lost😲"
            result.style.color = "#ff0000"
            result.style.fontFamily = "Rubik Wet Paint"
        }
        else {
            result.innerHTML = `IT'S A <img class="tie" src="images/tie_1.png" alt="tie" height="60px">`
            result.style.color = "#57418a"
        }
    }
}

//HUMAN OPTIONS
rock.addEventListener("click", function (){

    options.style.display = "none"

    you.innerHTML = `<img class="img-left" src="images/rock_player1.png">`
    
    i = Math.floor( Math.random() * hands.length)
    computer.innerHTML = `<img class="img-right" src="${hands[i]}"/>`

    if(i===0) {
        computerScore += 1
        computerScoreEl.innerHTML = computerScore
        computerName.style.textShadow = "2px 2px 10px #00ff00, -2px -2px 10px #00ff00"
        yourName.style.textShadow = "-2px -1px #71c1f0"
    } else if (i===2) {    
        yourName.style.textShadow = "2px 2px 10px #ffff00, -2px -2px 10px #ffff00"
        computerName.style.textShadow = "2px 2px 10px #ffff00, -2px -2px 10px #ffff00"
    } else {
        yourScore += 1
        yourScoreEl.innerHTML = yourScore
        yourName.style.textShadow = "2px 2px 10px #00ff00, -2px -2px 10px #00ff00"
        computerName.style.textShadow = "-2px -1px #71c1f0"
    }
    moves -= 1

    proceed.addEventListener("click", function(){
           movesCheck() 
    })
})

paper.addEventListener("click", function(){

    options.style.display = "none"

    you.innerHTML = `<img class="img-left" src="images/paper_player1.png">`

    i = Math.floor( Math.random() * hands.length)
    computer.innerHTML = `<img class="img-right" src="${hands[i]}"/>`

    if(i===0) {
        yourName.style.textShadow = "2px 2px 10px #ffff00, -2px -2px 10px #ffff00"
        computerName.style.textShadow = "2px 2px 10px #ffff00, -2px -2px 10px #ffff00"
    } else if (i===1) {   
        computerScore += 1
        computerScoreEl.innerHTML = computerScore
        computerName.style.textShadow = "2px 2px 10px #00ff00, -2px -2px 10px #00ff00"
        yourName.style.textShadow = "-2px -1px #71c1f0"   
    } else {
        yourScore += 1
        yourScoreEl.innerHTML = yourScore
        yourName.style.textShadow = "2px 2px 10px #00ff00, -2px -2px 10px #00ff00"
        computerName.style.textShadow = "-2px -1px #71c1f0"
    }
    moves -= 1

    proceed.addEventListener("click", function(){
           movesCheck() 
    })
})

scissors.addEventListener("click", function(){

    options.style.display = "none"

    you.innerHTML = `<img class="img-left" src="images/scissors_player1.png">`

    i = Math.floor( Math.random() * hands.length)
    computer.innerHTML = `<img class="img-right" src="${hands[i]}"/>`

    if(i===0) {
        yourScore += 1
        yourScoreEl.innerHTML = yourScore  
        yourName.style.textShadow = "2px 2px 10px #00ff00, -2px -2px 10px #00ff00"
        computerName.style.textShadow = "-2px -1px #71c1f0"
    } else if (i===1) {   
        yourName.style.textShadow = "2px 2px 10px #ffff00, -2px -2px 10px #ffff00"
        computerName.style.textShadow = "2px 2px 10px #ffff00, -2px -2px 10px #ffff00"
    } else {
        computerScore += 1
        computerScoreEl.innerHTML = computerScore
        computerName.style.textShadow = "2px 2px 10px #00ff00, -2px -2px 10px #00ff00"
        yourName.style.textShadow = "-2px -1px #71c1f0" 
    }
    moves -= 1
    proceed.addEventListener("click", function(){
           movesCheck() 
    })
})