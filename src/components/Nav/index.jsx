import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <>
            <nav>
                <div className="flex justify-center py-5">
                    <div className="flex justify-between w-[1000px]">
                        <Link to="/" className="font-semibold text-slate-200 hover:text-blue-300">Timesheets</Link>
                        <Link to="/Projects" className="font-semibold text-slate-200 hover:text-blue-300">Projects</Link>
                        <Link to="/Employees" className="font-semibold text-slate-200 hover:text-blue-300">Employees</Link>
                        <Link to="/AddTimesheet" className="font-semibold text-slate-200 hover:text-blue-300">Add Timesheet</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}