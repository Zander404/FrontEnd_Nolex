import Image from "next/image"

interface SobreMimProps {

}

export const SobreMim = () => {
    return (
        <>
            <div className={"flex w-full  bg-[#2c2c2c]  grid-cols-2 border-y-2 justify-around "}>
                <div className={""}>
                    <h1>O Sobre Mim</h1>
                    <div className={"min-w-[240px] rounded-lg bg-purple-500 border-2 border-black"}>
                        <p className={"text-white min-w-fit max-h-[24rem] max-w-[24rem]"}>

                            Sou um aluno de Ciencias da Computação do Instistuto Federal de Goías, o qual meu objetivo profissional é ser um desenvolvedor
                            de software web
                        </p>




                    </div>

                </div>

                <div>

                    <div className={"avatar"}>
                        <div className="rounded-full">

                            <Image alt={"foto pessoal"} width={240} height={240} src="/me.jpg" />
                        </div>


                        {/* <div id={"info-pessoal"} className={""}>

                        </div> */}

                    </div>
                </div>

            </div>

        </>
    )
} 