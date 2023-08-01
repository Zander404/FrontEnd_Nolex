import { CardSociais } from "../Cards/CardSociais"
import { Logo } from "../Logo/Logo"


interface FooterProps {

}

export const Footer = (props: FooterProps) => {
    return (
        <>
            <div className={"bg-[#2C2C2C] flex flex-row px-6 py-4 justify-between border-t-2 border-white"}>
                <div id={"Logo"} className={""}>
                    <Logo />
                </div>


                <div>
                    <CardSociais />
                </div>


                <div id={"Créditos"} className={"text-white"}>
                    <h1 className={"text-lg"}>Created by:</h1>
                    <h2 className={""} >Xandyy</h2>

                </div>
            </div>

        </>
    )

}