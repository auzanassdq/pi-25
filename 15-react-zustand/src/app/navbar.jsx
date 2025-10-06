'use client'
import { useCart } from "@/stores/cartStore";

function Navbar() {
    const {cartCount} = useCart();

    console.log(cartCount)

  return (
    <header className="flex justify-between p-4">
        <div><h1>logo</h1></div>
        <nav>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
        </nav>

        <div>
            cart
            <span>{cartCount}</span>
        </div>
    </header>
  )
}

export default Navbar