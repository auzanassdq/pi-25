'use client'
import { useCart } from "@/stores/cartStore";
import { Butcherman } from "next/font/google"
import { useState } from "react"

function Counter({price}) {
    const [count, setCount] = useState(0)
    const {addToCart} = useCart();

    const increment = () => {
        setCount(count + 1)
        addToCart();
    }

  return (
    <div>
        <button>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <span>${price * count}</span>
    </div>
  )
}

export default Counter