"use client";
import { Link } from "next/navigation";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-lg font-bold">
        Meu Site
      </Link>
      <div className="flex gap-4">
        <Link href="/sobre" className="hover:underline">
          Sobre
        </Link>
        <Link href="/contato" className="hover:underline">
          Contato
        </Link>
      </div>
    </nav>
  );
}