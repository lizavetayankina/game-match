import React from 'react';
import ContentGame from './ContentGame';
import HeaderGame from './HeaderGame';

export default function Game () {
    return ( <div className='game'>
        <HeaderGame />
        <ContentGame />
    </div>
    )
}