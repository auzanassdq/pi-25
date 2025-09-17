'use client'

import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        // setCount(prevState => prevState + 1)
    }

    const decrement = () => {
        if (count == 0) return
        setCount(count - 1)
    }

    return (
        <div className="text-2xl">
            <button className="p-4 bg-slate-400" onClick={decrement}>-</button>
            <span className="m-4">{count}</span>
            <button className="p-4 bg-slate-400" onClick={increment}>+</button>
        </div>
    )
}