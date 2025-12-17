export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-primary">Graça & Reino</span>
        <div className="space-x-4">
          <a href="#grupos">Grupos</a>
          <a href="#cultos">Cultos</a>
          <a href="#apoie">Apoie</a>
        </div>
      </div>
    </nav>
  );
}
