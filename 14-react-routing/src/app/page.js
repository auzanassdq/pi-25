
import Image from "next/image";
import Pokemon from "./pokemon";
import PokemonServer from "./pokemon-server";
import PokemonReactQuery from "./pokemon-react-query";

export default function Home() {
  return (
    <div>
      {/* <Pokemon /> */}
      {/* <PokemonServer /> */}
      <PokemonReactQuery />
    </div>
  );
}
