'use client'

import Image from "next/image";
import { useState } from "react";
import Counter from "./counter";
import Login from "./login";
import LoginV2 from "./login2";

export default function Home() {
  const [name, setName] = useState("Auzan")

  const ubahNama = () => {
    setName("ojan")
  }

  return (
    <div>
      <h1 className="text-6xl" onClick={ubahNama}>haloooo {name}</h1>
      <Counter />
      <Login />
      <LoginV2 />
    </div>
  );
}
