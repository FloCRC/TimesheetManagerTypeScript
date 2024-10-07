import TimesheetDisplay from "../../components/TimesheetDisplay"

export default function Timesheets({ timesheets }) {

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-5 text-blue-500 font-bold">Timesheets</h1>
                <div className="flex flex-wrap justify-between">
                    {timesheets.map(timesheet => <TimesheetDisplay key={timesheet.id} timesheet={timesheet} />)}
                </div>
            </div>
        </div>
    )
}