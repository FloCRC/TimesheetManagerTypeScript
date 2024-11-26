import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <nav>
                <div className="flex justify-center py-5">
                    <div className="flex justify-between w-[1000px]">
                        <Link to="/" className="font-semibold text-slate-200 hover:text-blue-300">Timesheets</Link>
                        <Link to="/projects" className="font-semibold text-slate-200 hover:text-blue-300">Projects</Link>
                        <Link to="/employees" className="font-semibold text-slate-200 hover:text-blue-300">Employees</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav