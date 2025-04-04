export default function Footer() {
    return (
      <footer className="w-full bg-blue-600 text-white py-4 px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
      </footer>
    );
  }