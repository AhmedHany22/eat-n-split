import React from 'react'

const Friend = ({ fr }) => {
  return (
    <li>
      <img src={ fr.image } alt={ fr.name } />
      <h3>{ fr.name }</h3>
      { fr.balance > 0 && (<p>You owe { fr.name } { Math.abs(fr.balance) }</p>) }
      { fr.balance < 0 && (<p>{ fr.name } owe you { Math.abs(fr.balance) }</p>) }
      { fr.balance === 0 && (<p>You and { fr.name } are even</p>) }
      <button className='button'>Select</button>
    </li>
  )
}
export default Friend;