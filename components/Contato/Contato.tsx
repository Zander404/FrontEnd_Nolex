
interface ContatoProps {

}

export const Contato = (props: ContatoProps) => {
    return (
        <>
            <div className={"w-full p-5  min-h-fit bg-[#2c2c2c] border-y-2"}>
                <h1> Contatos</h1>
                <div className={"w-full flex flex-row justify-center"}>
                    <div id={"Contato"} className={"w-1/2"}>
                        <div id={``}>
                            <p>ENTRE EM CONTATO</p>
                            <br />
                            <p>contato.xandyy@gmail.com</p>
                            <p>(62) 9 9238-3814</p>

                        </div>
                    </div>
                    <div id={"Email"}>
                        <div className={" w-96"}>
                            <span className={"label pb-2 "}>Email</span>
                            <input className={"input w-full"} type={"email"} placeholder={"email@email.com"} />

                        </div>
                        <div className="w-96">
                            <span className="label">Mensagem</span>
                            <textarea className={"textarea w-full"} placeholder={"Digite sua mensagem"} />
                        </div>
                        <div className={"pt-2 text-center"}>
                            <button className="btn ">Enviar</button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )

}