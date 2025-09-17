import Image from "next/image";

export default function Header() {
  let isLogin = true;

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/next.svg" alt="Logo" width={120} height={30} />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>

          {isLogin ? (
            <div className="bg-blue-300 px-4 py-2 rounded-2xl text-black">Auzan</div>
          ) : (
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
