
import Image from "next/image";
import Pokemon from "./pokemon";
import PokemonServer from "./pokemon-server";
import PokemonReactQuery from "./pokemon-react-query";
import { useState } from "react";
import Navbar from "./navbar";
import Profile from "./profile";

export default function Home() {
  const [user, setUser] = useState("auzan")

  return (
    <div>
      {/* <Pokemon /> */}
      {/* <PokemonServer /> */}
      {/* <PokemonReactQuery /> */}
      <Navbar user={user} />
      <Profile user={user} />
    </div>
  );
}
