import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

interface CardSociaisProps {

}

export const CardSociais = (props: CardSociaisProps) => {

    return (
        <>
            <div className="flex flex-row space-x-7">
                <a className={"transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-60"} href={"https://www.instagram.com/xandy_tradicional/"}> <BsInstagram size={40} /></a>
                <a className={"transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-60"} href={"https://github.com/Zander404"}> <BsGithub size={40} /></a>
                <a className={"transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-60"} href={"https://www.linkedin.com/in/alexandre-arthur-30/"}> <BsLinkedin size={40}  /></a>
            </div>
        </>

    )

}