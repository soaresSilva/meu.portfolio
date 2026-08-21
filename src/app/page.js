import Link from "next/link";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const otherAreas = [
  {
    title: "Escritos",
    description: "Textos, revisões e coisas que fui colocando no papel.",
    href: "/escritos",
  },
  {
    title: "Análises",
    description: "Ideias, observações e tentativas de entender melhor as coisas.",
    href: "/analises",
  },
  {
    title: "Traduções",
    description: "Trabalhos e estudos envolvendo idiomas e sentidos.",
    href: "/traducoes",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1e9] text-[#20302a]">
      <Navbar />

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:px-16">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-[#6e765f]">
              Alisson Soares · dev júnior
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#20302a] md:text-7xl">
              Estou aprendendo a criar para a web, um projeto de cada vez.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#59655d] md:text-xl">
              Também escrevo, analiso ideias e trabalho com tradução. Este site reúne um pouco de tudo isso.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#315b4d]">
              <Link className="transition hover:text-[#20302a]" href="#projetos">
                dar uma olhada nos projetos →
              </Link>
              <Link className="transition hover:text-[#20302a]" href="#outras-coisas">
                ver o resto por aqui ↓
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:justify-self-end">
            <div className="aspect-square rounded-[2.5rem] border border-[#d8d2c4] bg-[#dfe8d6] p-5 shadow-[16px_16px_0_#c4d2bc]">
              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-dashed border-[#91a78d] p-6">
                <span className="text-5xl text-[#315b4d]">✳</span>
                <p className="max-w-[12rem] text-2xl font-medium leading-tight text-[#315b4d]">
                  código, texto e algumas ideias no caminho.
                </p>
                <span className="self-end text-sm text-[#6e765f]">em construção</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="border-t border-[#ddd7ca] bg-[#fbf9f4] px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#6e765f]">01 · projetos</p>
            <div className="mt-5 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#20302a] md:text-5xl">
                As coisas que estou construindo.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-[#59655d]">
                Aqui entram os projetos de desenvolvimento, os experimentos e as soluções que fazem parte da minha caminhada.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {["Projeto em destaque", "Outro projeto", "Mais um experimento"].map((project, index) => (
                <article key={project} className="min-h-56 rounded-3xl border border-[#d8d2c4] bg-[#f5f1e9] p-6 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#dfe8d6]">
                  <span className="text-sm text-[#6e765f]">0{index + 1}</span>
                  <h3 className="mt-16 text-2xl font-medium text-[#20302a]">{project}</h3>
                  <p className="mt-2 text-sm text-[#6b746e]">Em breve, um pouco mais sobre este trabalho.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="outras-coisas" className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#6e765f]">02 · além do código</p>
            <div className="mt-5 max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#20302a] md:text-5xl">
                Nem tudo aqui é programação.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#59655d]">
                Também tem espaço para os trabalhos e interesses que caminham junto comigo.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {otherAreas.map((area) => (
                <Link key={area.title} href={area.href} className="group rounded-3xl border border-[#d8d2c4] p-6 transition hover:-translate-y-1 hover:bg-[#dfe8d6]">
                  <h3 className="text-2xl font-medium text-[#20302a]">{area.title}</h3>
                  <p className="mt-4 leading-7 text-[#59655d]">{area.description}</p>
                  <span className="mt-8 inline-block text-sm font-semibold text-[#315b4d] transition group-hover:translate-x-1">abrir →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#ddd7ca] bg-[#315b4d] px-6 py-20 text-[#f5f1e9] md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#c6d8bd]">03 · por enquanto</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Se quiser trocar uma ideia, estou por aqui.
              </h2>
            </div>
            <Link href="/contato" className="w-fit rounded-full border border-[#c6d8bd] px-5 py-3 text-sm font-semibold text-[#f5f1e9] transition hover:bg-[#f5f1e9] hover:text-[#315b4d]">
              falar comigo →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
