import { SkillCard } from "../Cards/SkillCard"

interface SkillsProps {
    skill:  [{

        id: string;
        name: string;
        description: string;
        categorie: string;
        image: string


    }]
}




export const Skills = (props: SkillsProps) => {
    return (
        <>

            <div className="carousel space-x-5 w-screen  bg-[#2c2c2c]">
                <div id="slide1" className="carousel-item relative ">

                    <div className={"w-fit p-5 border-y-2 "}>
                        <h2>Back End</h2>
                        <div className={"flex grid-flow-col  "}>

                            {
                                props.skill.map((skill, id) => {
                                    if (skill.categorie == 'back') {
                                        return (
                                            <>
                                                <SkillCard id={id} name={skill.name}  description={skill.description} />
                                            </>)
                                    }
                                })
                            }


                        </div>

                    </div>

                    <div id="slide2" className="carousel-item relative">
                        <div className={"w-fit p-5  border-y-2 "}>
                            <h2> Front End</h2>
                            {/* Oq estou querendo fazer */}
                            {/* Mostrar um obeto que tem as habilidades que tenho, os quais estão dentro de um props */}
                            {/* Adicionar no map, para dividir o prop e o método que deve ser aplicado à ele. */}
                            <div className={"flex grid-flow-col "}>

                                {
                                    props.skill.map((skill, id) => {
                                        if (skill.categorie == 'front') {

                                            return (
                                                <>
                                                    <SkillCard id={id} name={skill.name} description={skill.description} />
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>

                        </div>
                    </div>

                </div>



            </div >

        </>
    )
}