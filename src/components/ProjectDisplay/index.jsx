export default function ProjectDisplay({ project }) {

    return (
        <>
            <div className="flex flex-col border border-slate-600 rounded bg-white my-2 p-3 w-5/12 max-[768px]:w-10/12">
                <div className="flex justify-between pb-2">
                    <div className="text-slate-600">ID: <span className="font-bold text-blue-500">{project.id}</span></div>
                    <div className="text-slate-600">Time Required <span className="font-bold text-blue-500">{project.estimated_time_required} Hours</span></div>
                </div>
                <div className="flex justify-between pb-2">
                    <div></div>
                    <div className="text-slate-600">Time Taken So Far: <span className="font-bold text-blue-500">{project.time_spent} Hours</span></div>
                </div>
                <div className="flex justify-between pb-2">
                    <div></div>
                    <div className="text-slate-600">Time Remaining: <span className="font-bold text-blue-500">{project.expected_time_remaining} Hours</span></div>
                </div>
            </div>
        </>
    )
}