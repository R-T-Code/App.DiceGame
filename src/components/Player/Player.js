import React from 'react';

import './Player.css';

const player = (props) => {
    return (
            <div className={'Player Player-' + props.playerNr + ' ' + props.activePlayerClass}> 
                <h2>{props.playerNr}</h2>
                <p >Game Score</p>
                <p className={'P-' + props.playerNr + '-gameScore'}>{props.playerGameScore}</p>
                <p >Match Score</p>
                <p className={'P-' + props.playerNr + '-matchScore'}>{props.playerMatchScore}</p>
            </div>
    )
}

export default player;