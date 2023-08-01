import { SocialCard } from "../Cards/SocialCard"
import { Logo } from "../Logo/Logo"


interface FooterProps {

}

export const Footer = (props: FooterProps) => {
    return (
        <>
            <div className={"bg-[#2C2C2C] flex flex-row m-auto py-8 justify-between border-t-2 border-white"}>
                <div id={"Logo"} className={"justify-center pt-4 px-7 "}>
                    <Logo />
                </div>


                <div className={"w-auto text-white"}>
                    <h1 className={"text-center pb-2 "}>REDES SOCIAIS</h1>
                    <SocialCard />
                </div>


                <div id={"Créditos"} className={"text-white w-auto pt-4 px-7"}>
                    <h1 className={"text-lg"}>Created by:</h1>
                    <h2 className={""} >Xandyy</h2>

                </div>
            </div>

        </>
    )

}