const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 0;
let isGameOver = false;

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('winner');
            player.button.disabled = true;
            opponent.display.classList.add('loser');
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
};

function reset(){
    isGameOver = false;
    for(let p of[p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
};

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

p1.button.addEventListener('click', function(){
    updateScores(p1, p2)
});

p2.button.addEventListener('click', function(){
    updateScores(p2, p1)
})

resetButton.addEventListener('click', reset);