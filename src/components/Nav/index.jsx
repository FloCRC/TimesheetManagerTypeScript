import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <>
            <nav>
                <div className="flex justify-center py-5">
                    <div className="flex justify-between w-[1000px]">
                        <Link to="/">Timesheets</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Employees">Employees</Link>
                    </div>
                </div>
                <div className="flex justify-center pb-5">
                    <div className="flex justify-between w-[1000px]">
                        <Link to="/AddTimesheet">Add Timesheet</Link>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
        </>
    )
}