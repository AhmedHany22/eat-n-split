import React from 'react'
import Friend from './Friend';


export const Friends = ({ friends }) => {
    console.log(friends);

    return (
        <ul>
            {
                friends.map(fr => <Friend key={ fr.id } fr={ fr } />)
            }
        </ul>
    )
}
