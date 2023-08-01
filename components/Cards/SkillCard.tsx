

interface SkillCardProps {
    image: string 

}

export const SkillCard = (props: SkillCardProps) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={`/${props.image}.png`} alt="Skills Icon" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>


        </>
    )

}