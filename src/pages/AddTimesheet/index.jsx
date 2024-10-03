export default function AddTimesheet({ employees, projects }) {


    function submitHandler(e) {
        e.preventDefault()
    }

    return (
        <div className="flex justify-center bg-slate-200 h-screen">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-5">Add Timesheet</h1>
                <form className="grid grid-cols-2 gap-y-2">
                    <label htmlFor="employeeID" >Employee ID</label>
                    <select name="employeeID" id="employeeID" className="p-1">
                        {employees.map(employee => <option key={employee.id}>{employee.id}</option>)}
                    </select>
                    <label htmlFor="projectID" >Project ID</label>
                    <select name="projectID" id="projectID" className="p-1">
                        {projects.map(project => <option key={project.id}>{project.id}</option>)}
                    </select>
                    <label htmlFor="timeTaken">Time Taken</label>
                    <input name="timeTaken" id="TimeTaken" type="number" placeholder="hours" className="p-1" />
                    <label>Description</label>
                    <textarea placeholder="Describe what you achieved. Maximum 100 characters." className="p-1" />
                    <div></div>
                    <button onClick={submitHandler} type="submit" className="border border-slate-600 bg-white hover:shadow-inner hover:bg-slate-300">Submit Timesheet</button>
                </form>
            </div>
        </div>
    )
}