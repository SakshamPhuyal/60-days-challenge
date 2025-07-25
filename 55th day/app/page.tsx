export default function Home() {
  return (
  <div className="flex flex-col justify-center items-center bg-gray-700 text-white min-h-screen text-3xl">
  <p className="text-4xl font-extrabold">#60DaysOfLearning2025</p>
  <p className="text-4xl font-extrabold mb-5">Day 55</p>
  <p className="text-5xl">Time:  {new Date().toLocaleTimeString()}</p>
  </div>
  );
}