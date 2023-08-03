import { ProjetoCard } from "../Cards/ProjetoCard";

interface ProjetosProps {


}

export const Projetos = (props: ProjetosProps) => {

    return (
        <>
            <div className={"w-full min-h-fit p-5 bg-[#2c2c2c] space-y-6"}>

                <h1>Projetos</h1>
                <div className={" flex flex-row space-x-6 carousel"}>
                    <ProjetoCard image={"/django.png"} link={"https://github.com/Zander404/FrontEnd_Nolex"} id={'1'} description={"sim"} name={"django"} />
                    <ProjetoCard image={"/django.png"} link={"https://github.com/Zander404/FrontEnd_Nolex"} id={'1'} description={"sim"} name={"django"} />
                    <ProjetoCard image={"/django.png"} link={"https://github.com/Zander404/FrontEnd_Nolex"} id={'1'} description={"sim"} name={"django"} />
                    <ProjetoCard image={"/django.png"} link={"https://github.com/Zander404/FrontEnd_Nolex"} id={'1'} description={"sim"} name={"django"} />
                    <ProjetoCard image={"/django.png"} link={"https://github.com/Zander404/FrontEnd_Nolex"} id={'1'} description={"sim"} name={"django"} />

                </div>

            </div>

        </>
    )
}