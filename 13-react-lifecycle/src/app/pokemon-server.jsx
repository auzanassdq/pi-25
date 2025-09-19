import axios from "axios";
import Image from "next/image";

export default async function PokemonServer() {
    const { data } = await axios("https://pokeapi.deno.dev/pokemon?limit=20");

    return (
        <div className="grid grid-cols-4">
            {data.map((item) => (
                <div key={item.id}>
                    <Image src={item.imageUrl} alt="" width={200} height={200} />
                    <h3>{item.name}</h3>
                </div>
            ))}
        </div>
    );
}
