import React from 'react'
import Counter from './counter'

function CardProductCart({name, price}) {
  
  return (
    <div>
        <span>{name}</span>
        <span>${price}</span>
        <Counter price={price} />

    </div>
  )
}

export default CardProductCart