'use client'

import Image from "next/image";
import { useState } from "react";
import Counter from "./counter";
import Login from "./login";
import LoginV2 from "./login2";
import Todo from "./todo";
import Footer from "./footer";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const [name, setName] = useState("Auzan")

  const ubahNama = () => {
    setName("ojan")
  }

  useGSAP()

  return (
    <div>
      <h1 className="text-6xl" onClick={ubahNama}>haloooo {name}</h1>
      <Button>1</Button>
      <Button variant={"secondary"} >2</Button>
      <Button variant={"outline"}>3</Button>
      <Button className="bg-lime-400 text-black hover:text-white" >4</Button>


      <Counter />
      <Login />
      <LoginV2 />
      <Todo />
      <Footer />

      <div>
        <div className="w-20">
          
        </div>
      </div>
    </div>
  );
}
