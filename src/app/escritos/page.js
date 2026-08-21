import Link from "next/link";

export default function Escritos() {
  return (
    <main className="min-h-screen bg-[#f5f1e9] px-6 py-16 text-[#20302a] md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#315b4d] hover:text-[#20302a]">
          ← voltar para o início
        </Link>
        <p className="mt-16 text-sm font-medium uppercase tracking-[0.22em] text-[#6e765f]">escritos</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] md:text-7xl">Coisas que escrevi.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#59655d]">
          Este espaço vai reunir textos autorais, revisões e outras experiências com a palavra.
        </p>
        <div className="mt-16 rounded-3xl border border-dashed border-[#b9c6b1] bg-[#dfe8d6] p-8">
          <p className="text-lg leading-8 text-[#315b4d]">Ainda estou organizando este canto. Em breve entram os primeiros textos.</p>
        </div>
      </div>
    </main>
  );
}
