import Image from "next/image";
import CardFeature from "./card-feature";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "/file.svg",
              title: "Easy Integration",
              description: "Seamlessly integrate with your existing workflow",
            },
            {
              icon: "/window.svg",
              title: "Modern Interface",
              description: "Beautiful and intuitive user interface design",
            },
            {
              icon: "/vercel.svg",
              title: "Rapid Development",
              description: "Build and deploy faster than ever before",
            },
          ].map((feature, index) => (
            <CardFeature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
