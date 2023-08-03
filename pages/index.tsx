import { Footer } from "../components/Body/Footer";
import { Navbar } from "../components/Body/Navbar";
import { Contato } from "../components/Contato/Contato";
import { Projetos } from "../components/Projetos/Projetos";
import { Skills } from "../components/Skills/Skills";
import { SobreMim } from "../components/SobreMim/SobreMim";

export default function Home() {
  const skill:any = [ 
                      {categorie:'back', name:'git'}, {categorie:"back", name:'python'},{categorie:'back', name:'django'},{categorie:'back', name:'docker'}, 
                      {categorie:'front', name:'html'},{categorie:'front', name:'js'},{categorie:'front', name:'tailwind'},{categorie:'front', name:'react'}
                ]
                
             
  return (
    <>
      <section className={"h-screen w-screen bg-purple-700"}>
        <Navbar />


        <section id="Sobremim">
          <SobreMim />

        </section>
        
        <section id="skill">
          <Skills key={1} skill={skill} />

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