import React from 'react'

function Errorexample({hero}) {
    if(hero==='joker'){
        throw new Error('not a hero')
    }

    return (
        <div>
            {hero}
        </div>
    )
}

export default Errorexample
