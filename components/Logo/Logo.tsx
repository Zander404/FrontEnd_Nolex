import Image from "next/image"



export const Logo = () => {
    return (
        <>
            <div className={"transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-60 "} onClick={e => handleScroll('Home')}>
                <Image alt={"logo"} width={60} height={60} src={"/Space-helmet.png"} />
            </div>
        </>
    )
}