import Image from "next/image";
import Button from "./button";

export default function CardFeature({feature}) {
  return (
    <div
    //   key={index}
      className="p-6 bg-white text-black/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <Image
        src={feature.icon}
        alt={feature.title}
        width={50}
        height={50}
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
        <Button title={" learn more"} />
    </div>
  );
}
