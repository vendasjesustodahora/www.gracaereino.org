import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GroupCard from "./components/GroupCard";
import SermonCard from "./components/SermonCard";

export default function App() {
  return (
    <>
      <Navbar />

      <section className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(https://static.lumi.new/10/10792118c0807dc02ec25592377293d7.webp)" }}>
        <div className="text-center bg-black/60 p-8 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Graça e Reino Church</h1>
          <p className="mb-6">Uma igreja para viver a graça e o Reino de Deus</p>
          <a className="bg-secondary text-black px-6 py-3 rounded-full font-semibold"
             href="#cultos">Horários dos Cultos</a>
        </div>
      </section>

      <section id="grupos" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Grupos & Ministérios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Crianças","Adolescentes","Jovens","Mulheres","Homens","Casais"].map(g => (
            <GroupCard key={g} title={g} />
          ))}
        </div>
      </section>

      <section id="cultos" className="bg-slate-100 py-20">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Últimos Cultos</h2>
        <div className="grid md:grid-cols-2 gap-6 container mx-auto px-6">
          <SermonCard videoId="VIDEO_ID_1" />
          <SermonCard videoId="VIDEO_ID_2" />
        </div>
      </section>

      <Footer />
    </>
  );
}
