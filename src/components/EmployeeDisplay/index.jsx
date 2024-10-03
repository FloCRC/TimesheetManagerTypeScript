export default function EmployeeDisplay({ employee }) {

    return (
        <>
            <div className="flex flex-col border border-slate-600 bg-white my-2 p-2 w-2/5">
                <div className="flex justify-between pb-2">
                    <div>ID: <span className="font-bold">{employee.id}</span></div>
                    <div>First Name <span className="font-bold">{employee.first_name}</span></div>
                    <div>Last Name <span className="font-bold">{employee.last_name}</span></div>
                </div>
            </div>
        </>
    )
}