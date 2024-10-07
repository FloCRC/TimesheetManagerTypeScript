import { Link } from "react-router-dom"
import TimesheetDisplay from "../../components/TimesheetDisplay"

export default function Timesheets({ timesheets }) {

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <div className="flex justify-between items-center py-2">
                    <h1 className="text-2xl text-blue-500 font-bold">Timesheets</h1>
                    <Link to="/AddTimesheet" className="p-2 w-32 font-semibold border border-black rounded bg-white text-slate-600 hover:shadow-inner hover:bg-blue-200">Add Timesheet</Link>
                </div>
                <div className="flex flex-wrap justify-around">
                    {timesheets.map(timesheet => <TimesheetDisplay key={timesheet.id} timesheet={timesheet} />)}
                </div>
            </div>
        </div>
    )
}