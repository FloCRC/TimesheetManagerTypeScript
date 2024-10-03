import EmployeeDisplay from "../../components/EmployeeDisplay";

export default function Projects({ employees }) {

    return (
        <div className="flex justify-center bg-slate-200 h-screen">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-5">Employees</h1>
                <div className="flex flex-wrap justify-between">
                    {employees.map(employee => <EmployeeDisplay key={employee.id} employee={employee} />)}
                </div>
            </div>
        </div>
    )
}