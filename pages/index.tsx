import { Footer } from "../components/Body/Footer";
import { Navbar } from "../components/Body/Navbar";
import { Contato } from "../components/Contato/Contato";
import { Habilidades } from "../components/Habilidades/Habilidades";
import { SobreMim } from "../components/SobreMim/SobreMim";

export default function Home() {
  return (
    <>
      <section className={"h-screen w-screen bg-purple-700"}>
        <Navbar />

        
        <section id="Sobremim">
          <SobreMim />

        </section>
        
        <section>

        </section>

        <section id="habilidades">
          <Habilidades />

        </section>
        
        <section id="contato">
          <Contato />

        </section>

        <Footer />
      </section>
    </>
  )
}