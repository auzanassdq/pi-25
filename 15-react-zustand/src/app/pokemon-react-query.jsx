'use client'

import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import Image from "next/image";
import Link from 'next/link';

const fetchPokemons = async () => {
    const response = await axios("https://pokeapi.deno.dev/pokemon?limit=20");
    return response.data;
};

export default function PokemonReactQuery() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {data.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <Link href={`/pokemon/${item.id}`}>
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={200}
                            height={200}
                            className="mx-auto"
                        />
                        <h3 className="text-center mt-2 font-semibold">{item.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}
