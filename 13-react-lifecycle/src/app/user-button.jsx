export default function UserButton ({user}) {
    return (
        <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">{user}</button>
        </div>
    )
}