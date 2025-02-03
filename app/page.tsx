import Image from "next/image";
import Link from "next/link";

// Navbar component
function Navbar() {
  return (
    <nav className="fixed top-0 flex justify-between p-4 bg-gray-800 text-white w-full">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="projects/" className="hover:underline">Projects</Link>
      <Link href="pilot/" className="hover:underline">Pilot</Link>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
      Hello this is Sebastian and I am a Senior Engineering Director at Accolade.
      </main>
    </div>
  );
}
