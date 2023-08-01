import { CardSociais } from "../Cards/CardSociais"
import { Logo } from "../Logo/Logo"


interface FooterProps {

}

export const Footer = (props: FooterProps) => {
    return (
        <>
            <div className={"bg-[#2C2C2C] flex flex-row m-auto py-8 justify-between border-t-2 border-white"}>
                <div id={"Logo"} className={"justify-center w-auto "}>
                    <Logo />
                </div>


                <div>
                    <h1 className={"text-center w-auto "}>REDES SOCIAIS</h1>
                    <CardSociais />
                </div>


                <div id={"Créditos"} className={"text-white w-auto"}>
                    <h1 className={"text-lg"}>Created by:</h1>
                    <h2 className={""} >Xandyy</h2>

                </div>
            </div>

        </>
    )

}