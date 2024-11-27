import ProjectDisplay from "../../components/ProjectDisplay";

interface Project {
    id: number
    estimated_time_required: number
    time_spent: number
    expected_time_remaining: number
}

type Props = {
    projects: Array<Project>
}

export default function Projects({ projects }: Props) {

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-2 text-blue-500 font-bold">Projects</h1>
                <div className="flex flex-wrap justify-around">
                    {projects.map(project => <ProjectDisplay key={project.id} project={project} />)}
                </div>
            </div>
        </div>
    )
}