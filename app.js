let scores = {
    wins: 0,
    losses: 0,
    draws: 0
};

function display(x,y,z){
    document.getElementById('win-count').innerText = x;
    document.getElementById('lose-count').innerText = y;
    document.getElementById('draw-count').innerText = z;
}
function resetScores(){
    scores.wins = 0;
    scores.losses = 0;
    scores.draws = 0;
    display(0,0,0);
}

function calcResult(playerMove){

    let computerMove = calcCompMove();

    function calcCompMove(){
        let randomNumber = Math.random();
            if(randomNumber>=0 && randomNumber< 1/3){
                return 'Rock';
            }
            else if(randomNumber>= 1/3 && randomNumber<2/3){
                return 'Paper';
            }
            else if(randomNumber>=2/3 && randomNumber<1){
                return 'Scissor';
            }
    }

        let result = '';
            if(playerMove === 'Rock'){
                if(computerMove === 'Rock'){
                    result = 'Draw';
                    scores.draws++;
                }
                else if(computerMove === 'Paper'){
                    result = 'Lose';
                    scores.losses++;
                }
                else if(computerMove === 'Scissor'){
                    result = 'Win';
                    scores.wins++;
                }
                alert(`Computer's Move is ${computerMove} and It's a ${result}`);
            }
            else if(playerMove === 'Paper'){
                if(computerMove === 'Rock'){
                    result = 'win';
                    scores.wins++;
                }
                else if(computerMove === 'Paper'){
                    result = 'draw';
                    scores.draws++;
                }
                else if(computerMove === 'Scissor'){
                    result = 'lose';
                    scores.losses++;
                }
                alert(`Computer's Move is ${computerMove} and It's a ${result}`);
            }
            else if(playerMove === 'Scissor'){
                if(computerMove === 'Rock'){
                    result = 'lose';
                    scores.losses++;
                }
                else if(computerMove === 'Paper'){
                    result = 'win';
                    scores.wins++;
                }
                else if(computerMove === 'Scissor'){
                    result = 'draw';
                    scores.draws++;
                }
                alert(`Computer's Move is ${computerMove} and It's a ${result}`);
            }
            display(scores.wins,scores.losses,scores.draws);
    }