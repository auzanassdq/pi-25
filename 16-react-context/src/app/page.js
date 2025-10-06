import Image from "next/image";
import Navbar from "./navbar";
import Todo from "./todo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Todo />
      {/* <h1>Home</h1> */}
    </div>
  );
}
