import { Footer } from "../components/Body/Footer";
import { Navbar } from "../components/Body/Navbar";
import { Contato } from "../components/Contato/Contato";
import { Projetos } from "../components/Projetos/Projetos";
import { Skills } from "../components/Skills/Skills";
import { SobreMim } from "../components/SobreMim/SobreMim";

export default function Home() {
  const linguagens = [ 
                      {categorie:'back', skill:'git'}, {categorie:"back", skill:'python'},{categorie:'back', skill:'django'},{categorie:'back', skill:'docker'}, 
                      {categorie:'front', skill:'html'},{categorie:'front', skill:'js'},{categorie:'front', skill:'tailwind'},{categorie:'front', skill:'react'}
                    ]
  return (
    <>
      <section className={"h-screen w-screen bg-purple-700"}>
        <Navbar />


        <section id="Sobremim">
          <SobreMim />

        </section>
        
        <section id="skill">
          <Skills ability={linguagens} />

        </section>

        <section id={"projetos"}>
          <Projetos />

        </section>
        
        <section id="contato">
          <Contato />

        </section>

        <Footer />
      </section>
    </>
  )
}