import { Link } from "react-router-dom";

interface Employee {
    id: number
    first_name: string
    last_name: string
}

type Props = {
    employee: Employee
}

const EmployeeDisplay = ({ employee }: Props) => {

    return (
        <>
            <div className="flex flex-col border border-slate-600 rounded bg-white my-2 p-3 w-5/12 max-[768px]:w-10/12 hover:shadow-inner hover:bg-blue-200">
                <Link to={`/employees/${employee.id}`}>
                    <div className="flex justify-between pb-2">
                        <div className="text-slate-600">Employee ID: <span className="font-bold text-blue-500">{employee.id}</span></div>
                        <div className="text-slate-600">Name <span className="font-bold text-blue-500">{employee.first_name} {employee.last_name}</span></div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default EmployeeDisplay