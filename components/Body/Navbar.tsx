import Image from "next/image"
import { Logo } from "../Logo/Logo"
import router from "next/router"

const NavBarProps = {

}

export const Navbar = (props: any) => {

    // Handles
    const handleScroll = (element: string) => {
        const section = document.getElementById(element)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        } else if (section == null) {
            router.push(`/#${element}`)
        }
    }





    return (
        <>
            <div className={"bg-[#2C2C2C] flex flex-row px-6 py-4 justify-between border-b-2 border-white"}>
                <Logo />

                <div className={"flex flex-row text-white space-x-10 text-justify"}>
                    <ul className="flex flex-row space-x-10 pr-6">
                        <li><a className={"hover:cursor-pointer hover:underline"} onClick={e => handleScroll('Home')}>Blog</a></li>
                        <li><a className={"hover:cursor-pointer hover:underline"} onClick={e => handleScroll('Sobre Mim')}>Sobre Mim</a></li>
                        <li><a className={"hover:cursor-pointer hover:underline"} onClick={e => handleScroll('Habilidades')}>Habilidades</a></li>
                        <li><a className={"hover:cursor-pointer hover:underline"} onClick={e => handleScroll('Contato')}>Contato</a></li>
                    </ul>
                </div>
            </div>
        </>

    )
}