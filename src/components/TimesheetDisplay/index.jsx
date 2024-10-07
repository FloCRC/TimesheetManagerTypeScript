export default function TimesheetDisplay({ timesheet }) {

    return (
        <>
            <div className="flex flex-col border border-slate-700 bg-white my-2 p-3 w-2/5">
                <div className="flex justify-between pb-2">
                    <div className="text-slate-600">Project ID: <span className="font-bold text-blue-500">{timesheet.project_id}</span></div>
                    <div className="text-slate-600">Employee ID: <span className="font-bold text-blue-500">{timesheet.employee_id}</span></div>
                </div>
                <div className="pb-2">
                    <div className="text-slate-600">Time Taken: <span className="font-bold text-blue-500">{timesheet.time_taken} Hours</span></div>
                </div>
                <div>
                    <div className="text-slate-600">Description:</div>
                    <div className="font-semibold text-slate-600">{timesheet.description}</div>
                </div>
            </div>
        </>
    )
}