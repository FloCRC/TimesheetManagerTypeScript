interface Employee {
    id: number
    first_name: string
    last_name: string
}

type Props = {
    employees: Array<Employee>
}

import EmployeeDisplay from "../../components/EmployeeDisplay";

export default function Projects({ employees }: Props) {

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-2 text-blue-500 font-bold">Employees</h1>
                <div className="flex flex-wrap justify-around">
                    {employees.map(employee => <EmployeeDisplay key={employee.id} employee={employee} />)}
                </div>
            </div>
        </div>
    )
}