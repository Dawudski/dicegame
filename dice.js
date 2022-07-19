 /************************
  * GAME RULES
  * The game has two players, playing in round.
  * In each turn, a player roll a dice as many times as he wishes. Each result get added to his ROUND score.
  * But if the player roll a 1, all his ROUND score get lost. After that, it's the next player turn.
  * Same rules applies to the next player (i.e player 2 in this case).
  * The players can choose to hold at anytime during their round. which means that their ROUND score would be 
    added to the GLOBAL SCORE. After that, next player will play.
  * The first player to reach 100 points on Global score wins the game.
  */
    var scores, roundScore, activePlayer, gamePlaying;
    init();
    
    document.querySelector('.btn--roll').addEventListener('click', function btn(){
       if (gamePlaying){
           //1. random numbers
    dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src='dice-' + dice + '.png';
    //3. Update the result if the rolled number is not 1
    if (dice !== 1){
    //add scores
    roundScore += dice;
    document.querySelector('#current--' + activePlayer).textContent =  roundScore;
    } else {
    //next player turn
    nextPlayer();
      } 
     }
    
    });
    
    document.querySelector('.btn--hold').addEventListener('click', function(){
    if (gamePlaying){
    
            //add current score to global score
    scores[activePlayer] += roundScore;
    
    
    //update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    
    //check if player won the game
    
    if (scores[activePlayer] >= 100){
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--' + activePlayer).classList.add('winner');
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    gamePlaying = false;
    } else {
     //Next player
     nextPlayer();
    
        }
      }
        
    });
    
    function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current--0').textContent= 0;
    document.getElementById('current--1').textContent= 0;
    
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    
    document.querySelector('.dice').style.display = 'none';
    }
    
    document.querySelector('.btn--new').addEventListener('click', init);
        
    
    function init(){
        scores = [0,0];
        activePlayer = 0;
        roundScore= 0; 
        gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    }
    
    
    
    //document.querySelector('#current--' + activePlayer).textContent = dice;
    //document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
    //var x = document.querySelector('#score--0').textContent;
    //console.log(x);