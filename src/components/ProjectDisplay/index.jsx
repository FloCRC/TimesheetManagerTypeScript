export default function ProjectDisplay({ project }) {

    return (
        <>
            <div className="flex flex-col border border-slate-600 bg-white my-2 p-2 w-2/5">
                <div className="flex justify-between pb-2">
                    <div>Project ID: <span className="font-bold">{project.id}</span></div>
                    <div>Time Required <span className="font-bold">{project.estimated_time_required}</span></div>
                </div>
                <div className="pb-2">
                    <div>Time Taken: <span className="font-bold">{project.time_spent} Hours</span></div>
                    <div>Time Remaining: <span className="font-bold">{project.expected_time_remaining} Hours</span></div>
                </div>
            </div>
        </>
    )
}