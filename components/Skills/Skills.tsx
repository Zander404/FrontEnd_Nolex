import { SkillCard } from "../Cards/SkillCard"

interface SkillsProps {
    ability: [
        skill: {
            name: string,
            categorie: string
        },
        categorie: string[],
    ]
}




export const Skills = (props: SkillsProps) => {
    return (
        <>
            <div className="flex grid-cols-2">
                <div className={"w-full min-h-fit p-10 bg-[#2c2c2c] border-y-2 border-pink-600 "}>
                    <h2>Back End</h2>
                    {/* {
                        props.ability.slice(0,8).map((categorie, skill) => {
                            skill
                        }
                        )

                    } */}


                    {/* } */}

                </div>
                <div className={"w-full min-h-fit p-10 bg-[#2c2c2c] border-y-2 border-pink-600 "}>
                    <h2> Front End</h2>
                    <SkillCard image="js" />

                </div>

            </div>

        </>
    )
}