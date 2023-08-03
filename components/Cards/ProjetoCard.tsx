
interface ProjetosCardProps {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;

}

export const ProjetoCard = (props: ProjetosCardProps) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl carousel-item ">
                <figure><img src={`${props.image}`} className={"h-[12rem]"} alt="project picture" /></figure>
                <div className="card-body bg-[#404065]">
                    <h2 className="card-title">{props.name}</h2>
                    <p>{props.description}</p>
                    <div className="card-actions justify-center">
                        <a href={props.link} className="btn btn-primary rounded-full">Visitar</a>
                    </div>
                </div>
            </div>


        </>
    )
}