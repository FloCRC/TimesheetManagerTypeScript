export default function EmployeeDisplay({ employee }) {

    return (
        <>
            <div className="flex flex-col border border-slate-600 rounded bg-white my-2 p-3 w-5/12 max-[768px]:w-10/12">
                <div className="flex justify-between">
                    <div className="text-slate-600">ID: <span className="font-bold text-blue-500">{employee.id}</span></div>
                    <div className="text-slate-600">First Name <span className="font-bold text-blue-500">{employee.first_name}</span></div>
                    <div className="text-slate-600">Last Name <span className="font-bold text-blue-500">{employee.last_name}</span></div>
                </div>
            </div>
        </>
    )
}