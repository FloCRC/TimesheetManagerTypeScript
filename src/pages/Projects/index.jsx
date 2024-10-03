import ProjectDisplay from "../../components/ProjectDisplay";

export default function Projects({ projects }) {

    return (
        <div className="flex justify-center bg-slate-200 h-screen">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-5">Projects</h1>
                <div className="flex flex-wrap justify-between">
                    {projects.map(project => <ProjectDisplay key={project.id} project={project} />)}
                </div>
            </div>
        </div>
    )
}