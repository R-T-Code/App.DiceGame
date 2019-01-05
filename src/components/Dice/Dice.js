import React from 'react';

import './Dice.css';

const dice =  (props) => { 
        return (
            <div className={'Dice ' + props.bouncEffect}>
                <div className={props.diceClasses}>
                    <div className="cube__face cube__face--front">1</div>
                    <div className="cube__face cube__face--back">2</div>
                    <div className="cube__face cube__face--right">3</div>
                    <div className="cube__face cube__face--left">4</div>
                    <div className="cube__face cube__face--top">5</div>
                    <div className="cube__face cube__face--bottom">6</div>
                </div>
            </div>
        )
    };

export default dice;