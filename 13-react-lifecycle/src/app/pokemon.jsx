'use client'

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getDataPokemon();
    }, []);

    const getDataPokemon = async () => {        
        const { data } = await axios("https://pokeapi.deno.dev/pokemon?limit=20");
        setPokemons(data);
    };

    console.log(pokemons);

    return (
        <div className="grid grid-cols-4">
            {pokemons.length == 0 ? (
                <span>Loading...</span>
            ) : (
                pokemons.map((item) => (
                    <div key={item.id}>
                        <Image src={item.imageUrl} alt="" width={200} height={200} />
                        <h3>{item.name}</h3>
                    </div>
                )))
            }
        </div>
    )
}