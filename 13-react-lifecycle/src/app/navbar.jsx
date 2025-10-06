import AuthButton from "./auth-button";

export default function Navbar({user}) {
    return(
        <nav className="bg-blue-500 text-white p-4">
            
            <h1 className="text-2xl font-bold">My Navbar</h1>
            <AuthButton user={user} />
        </nav>
    )
}