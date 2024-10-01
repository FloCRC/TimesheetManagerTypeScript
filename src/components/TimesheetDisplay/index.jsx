export default function TimesheetDisplay({ timesheet }) {

    return (
        <>
            <div className="flex flex-col border border-slate-600 bg-white my-2 p-2">
                <div className="flex justify-between pb-2 w-80">
                    <div>Project ID: <span className="font-bold">{timesheet.project_id}</span></div>
                    <div>Employee ID: <span className="font-bold">{timesheet.employee_id}</span></div>
                </div>
                <div className="pb-2">
                    <div>Time Taken: <span className="font-bold">{timesheet.time_taken} Hours</span></div>
                </div>
                <div>
                    <div>Description:</div>
                    <div>{timesheet.description}</div>
                </div>
            </div>
        </>
    )
}