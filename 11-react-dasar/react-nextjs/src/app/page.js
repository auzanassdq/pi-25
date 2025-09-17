import Image from "next/image";
import Header from "./header";
import Features from "./features";
import Buah from "./buah";
import Button from "./button";

export default function Home() {
  return (
    <>

      <Header />

      {/* hero section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build Amazing Web Applications
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create stunning websites and applications with our modern development platform.
              Get started quickly and scale with confidence.
            </p>
            <div className="flex space-x-4">
              <Button title={"get started"} />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/globe.svg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      <Buah />

      {/* features section */}
      <Features />

      {/* footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/next.svg" alt="Logo" width={120} height={30} className="mb-4 invert" />
              <p className="text-gray-400">
                Building the future of web development, one project at a time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
