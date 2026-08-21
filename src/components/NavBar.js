import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "/escritos", label: "Escritos" },
  { href: "/analises", label: "Análises" },
  { href: "/traducoes", label: "Traduções" },
];

export default function Navbar() {
  return (
    <header className="border-b border-[#ddd7ca] bg-[#f5f1e9]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-10 lg:px-16" aria-label="Navegação principal">
        <Link href="/" className="text-lg font-semibold tracking-[-0.03em] text-[#20302a]">
          alisson<span className="text-[#6e765f]">.</span>
        </Link>

        <div className="hidden items-center gap-5 text-sm text-[#59655d] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#20302a]">
              {link.label}
            </Link>
          ))}
          <Link href="/contato" className="rounded-full bg-[#20302a] px-4 py-2 font-medium text-[#f5f1e9] transition hover:bg-[#315b4d]">
            contato
          </Link>
        </div>

        <Link href="/contato" className="rounded-full border border-[#c9c2b5] px-4 py-2 text-sm font-medium text-[#315b4d] transition hover:border-[#315b4d] md:hidden">
          contato
        </Link>
      </nav>
    </header>
  );
}
