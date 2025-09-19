'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"

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
            <Button onClick={decrement}>-</Button>
            <span className="m-4">{count}</span>
            <Button onClick={increment}>+</Button>
        </div>
    )
}