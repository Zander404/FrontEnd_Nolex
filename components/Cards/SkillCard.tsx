

interface SkillCardProps {
    id: number;
    name: string;
    description: string;
    
     

}

export const SkillCard = (props: SkillCardProps) => {
    return (
        <>
            <div id={`${props.id}`} className="card w-[22rem] bg-base-100 shadow-xl mr-2">
                <figure className="px-10 pt-10">
                    <img src={`/${props.name}.png`} alt="Skills Icon" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize">{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>


        </>
    )

}