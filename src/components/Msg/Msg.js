import React from 'react';

import './Msg.css';

const msg = (props) => {
    return (
        <div className={'Message ' + props.displayClass} >
            <p className='Message__text'>
                {props.theMsg}
            </p>
        </div>
    )
}

export default msg;