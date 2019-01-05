import React, { Component } from 'react';

import Player from '../Player/Player';
import Dice from '../Dice/Dice';
import Msg from '../Msg/Msg';
import './Game.css';


class Game extends Component {
    state = {
        dice: 0,
        matchScore: 0,
        activePlayer: 1,
        winScore: 50,
        players: [
            {playerNumber: 1, playerMatchScore: 0, playerGameScore: 0, activeClass:'active-player'},
            {playerNumber: 2, playerMatchScore: 0, playerGameScore: 0, activeClass:''}
        ],
        game: true,
        diceClasses: 'cube',
        msgDisplayClass: '',
        diceBounc: '',
        winner: null,
        playAgain: '',
        mouseMoveX: 'none',
        mouseMoveY: 'none'
    }

    activePlayerHandler = () => {
        // Get players array from the stete
        const players = this.state.players;

        if(this.state.activePlayer === 1){
            players[this.state.activePlayer - 1].activeClass = '';
            players[this.state.activePlayer].activeClass = 'active-player';
        } else {
            players[this.state.activePlayer - 2].activeClass = 'active-player';
            players[this.state.activePlayer - 1].activeClass = '';
        }
    }

    componentDidUpdate () {
        // Updating the match score DOM of an active player
        const activePlayer = document.querySelector(`.P-${this.state.activePlayer}-matchScore`);
        activePlayer.innerHTML = this.state.players[this.state.activePlayer - 1].playerMatchScore;
    }

    rollTheDiceHandler = () => {
        // Check if the game is false or true and allow or refuse game play
        if(this.state.game){
            // clear the cube classlist from previous changes
            this.setState({diceClasses: 'cube'})
                // Generate random number 1-6
            const diceNumber = Math.floor((Math.random() * 6 + 1));

            // Add the animation to the dice on roll button click
            if(diceNumber === 2) {
                this.setState({diceClasses: 'cube show-back'})
            } else if (diceNumber === 3){
                this.setState({diceClasses: 'cube show-right'})
            } else if (diceNumber === 4){
                this.setState({diceClasses: 'cube show-left'})
            } else if (diceNumber === 5){
                this.setState({diceClasses: 'cube show-top'})
            } else if (diceNumber === 6){
                this.setState({diceClasses: 'cube show-bottom'})
            }

            // Get players array from the stete
            const players = this.state.players;
            // Check the dive value if its 1 than call handler to change the active player, else add up points for match score
            if (diceNumber === 1) {
                this.singleClickButtonHandler();
                // Add the display class to the msg component so that the message would show that 1 was rolled
                this.setState({msgDisplayClass: 'DisplayRoll'});
                setTimeout(()=> {
                    this.setState({msgDisplayClass: ''});
                }, 1000);
                // Call handler to change the active player
                this.changePlayerHandler();
                // Call handler to change the DOM of an active player
                this.activePlayerHandler();
            } else {
                // Set the dice value inside the state;
                this.setState({
                    dice: diceNumber,
                    matchScore: diceNumber === 1 ? 0 : this.state.matchScore + diceNumber
                });
                
                // Display the match score of an active player
                players[this.state.activePlayer - 1].playerMatchScore = this.state.matchScore + diceNumber;
            }

            // If rolled the same dice number twice put effect on a dice to show that
            const oldDice = this.state.dice;
            if(oldDice === diceNumber){
                this.setState({diceBounc: 'bounc'})
                setTimeout(() => {
                    this.setState({diceBounc: ''})
                }, 700);
            }   
        }
    }

    saveGameScore = () => {
        if(this.state.game){
            const activePlayer = document.querySelector(`.P-${this.state.activePlayer}-gameScore`);
            const currentGameScore = activePlayer.innerHTML;

            const players = this.state.players;
            players[this.state.activePlayer - 1].playerGameScore = +currentGameScore + this.state.matchScore;

            // Check if the game score of an active player is winning or not
            if(players[this.state.activePlayer - 1].playerGameScore >= this.state.winScore){

                // Display the msg with the winner of the game
                this.setState({winner: `Player ${players[this.state.activePlayer - 1].playerNumber} has won the game!`});
                // Display Play Again button
                this.setState({playAgain: 'playAgain'});

                // Stop game after the winning score was reached
                this.setState({game: false});
            }

            // Call handler to change the active player
            this.changePlayerHandler();
            // Call handler to change the DOM of an active player
            this.activePlayerHandler();
        }
    }

    changePlayerHandler = () => {
        this.setState({
            dice: 0,
            matchScore: 0,
            activePlayer: this.state.activePlayer === 1 ? 2 : 1,
        });

        const players = this.state.players;
        players[this.state.activePlayer - 1].playerMatchScore = 0;
    }

    // Disable button Roll after click for short time to prevent multiple clicks
    singleClickButtonHandler = () => {
        this.refs.btnRoll.setAttribute("disabled", "disabled");
        setTimeout(( ) => {
            this.refs.btnRoll.removeAttribute("disabled");
        }, 1000);
    }

    // Call multiple events on one btn click
    btnClickEventsHandler = () => {
        this.singleClickButtonHandler();
        this.rollTheDiceHandler();
    }

    // Play Again button reset the game
    btnPlayAgainHandler = () => {
        this.setState({
            dice: 0,
            matchScore: 0,
            activePlayer: 1,
            players: [
                {playerNumber: 1, playerMatchScore: 0, playerGameScore: 0, activeClass:'active-player'},
                {playerNumber: 2, playerMatchScore: 0, playerGameScore: 0, activeClass:''}
            ],
            diceClasses: 'cube',
            game: true,
            winner: null,
            playAgain: ''
        })
    }

    // THE MOUSE MOVE ROTATE GAME DIV FUNCTION
    mouseMoveHandler = (e) => {
        let x = e.clientX / 100;
        let y = e.clientY / 100;
        if(x < 6){
            x = (-(6 - x)) - 0.8;
        } else {
            x = x - 5;
        }
        if(y < 6){
            y = (-(6 - y)) - 0.8;
        } else {
            y = (y - 5) + 1.8;
        }
        this.setState({mouseMoveX: x.toFixed(1), mouseMoveY: y.toFixed(1)});

    }

    render () {
        const players = this.state.players;

        return (
            
            <div
                onMouseMove={this.mouseMoveHandler} 
                style={{transform: `rotateY(${this.state.mouseMoveX}deg) rotateX(${this.state.mouseMoveY}deg)`}}
                className='Game'>
            <Msg displayClass={this.state.msgDisplayClass} theMsg='Rolled ONE!'/>
                <div className="score-container">
                    <p className="score">{this.state.dice}</p>
                    <button 
                        className='btn btn-roll'
                        ref='btnRoll' 
                        onClick={this.btnClickEventsHandler}>Roll</button>
                    <button 
                        className='btn btn-save'
                        onClick={this.saveGameScore}>Save</button>
                </div>
                <div className='Players'>
                <div className='winScore-container'> 
                    <p >Win Score</p>
                    <p >{this.state.winScore}</p>
                </div>
                    {players.map(player => {
                        return (
                            <Player 
                            activePlayerClass={player.activeClass}
                            activePlayerNumber={this.state.activePlayer}
                            key={player.playerNumber}
                            playerNr={player.playerNumber}
                            playerMatchScore={player.playerMatchScore}
                            playerGameScore={player.playerGameScore}/>
                        )
                    })}
                </div>
                <Dice diceClasses={this.state.diceClasses} bouncEffect={this.state.diceBounc}/>
                <h1 className='msg-play-again'>{this.state.winner}</h1>
                <button onClick={this.btnPlayAgainHandler} className={`btn btnPlayAgain ` + this.state.playAgain}>Play again</button>
            </div>
        )
    }
}

export default Game;