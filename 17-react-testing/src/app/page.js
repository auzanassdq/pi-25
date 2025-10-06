import Image from "next/image";
import Navbar from "./navbar";
import Todo from "./todo";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Navbar />
      <Todo />
    </div>
  );
}
