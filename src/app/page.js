import Button from "../components/Button";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Meu Projeto Next.js</h1>
        <Button text="Clique Aqui" />
      </div>
      <Footer />
    </div>
  );
}