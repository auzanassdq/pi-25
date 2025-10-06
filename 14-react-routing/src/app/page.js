
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        <Image
          src="/hero-car.svg"
          alt="Luxury Car"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Auto Service</h1>
          <p className="text-xl md:text-2xl mb-8">Experience Excellence in Automotive Care</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Book Service
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Car Maintenance</h3>
              <p className="text-gray-600">Complete vehicle diagnostics and maintenance services</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Auto Repair</h3>
              <p className="text-gray-600">Expert repair services for all vehicle makes and models</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Custom Modifications</h3>
              <p className="text-gray-600">Professional vehicle customization and upgrades</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <p>20+ Years of Experience in Automotive Industry</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <p>Certified Professional Mechanics</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <p>State-of-the-Art Equipment</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <p>Competitive Pricing</p>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="mb-2">📱 (555) 123-4567</p>
                <p className="mb-2">📧 info@premiumauto.com</p>
                <p>🏢 123 Auto Service Street</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

        <section>
          
        </section>

                <section>
          
        </section>

        <footer>

        </footer>
    </div>
  );
}
