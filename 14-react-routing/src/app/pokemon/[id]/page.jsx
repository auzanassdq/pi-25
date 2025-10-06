export default async function DigimonDetail ({params}) {
    const {id} = await params

    // fetch data pokemon by id
    // https://pokeapi.deno.dev/pokemon/id


    // lalu tampilkan
    
    return (
        <div>
            <h1>Pokemon {id}</h1>
        </div>
    )
}