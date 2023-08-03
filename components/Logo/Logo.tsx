import Image from "next/image"
import router from "next/router"

    // Handles
    const handleScroll = (element: string) => {
        const section = document.getElementById(element)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        } else if (section == null) {
            router.push(`/#${element}`)
        }
    }


export const Logo = () => {
    return (
        <>
            <div className={"transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-60 "} onClick={e => handleScroll('Home')}>
                <Image alt={"logo"} width={60} height={60} src={"/Space-helmet.png"} />
            </div>
        </>
    )
}