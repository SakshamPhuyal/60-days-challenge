import Image from "next/image";
import ProductCard from "./component/ProductCard";
export default function Home() {
  return (
    <div className="m-40">
    <p className="text-2xl font-extrabold">#60DaysOfLearning2025</p>
    <p className="text-2xl font-extrabold mb-5">Day 53</p>
     <ProductCard />
    </div>
  );
}
