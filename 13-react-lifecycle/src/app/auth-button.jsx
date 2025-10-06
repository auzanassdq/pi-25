import UserButton from "./user-button";

export default function AuthButton ({user, count}) {
    return (
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            <UserButton user={user} />
        </div>
    )
}