import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react"
import { Link } from "react-router-dom"
import { baseURL } from "../../constants/global"

interface Employee {
    id: number
}

interface Project {
    id: number
}

type Props = {
    employees: Array<Employee>
    projects: Array<Project>
}

export default function AddTimesheet({ employees, projects }: Props) {

    const [employeeID, setEmployeeID] = useState(1)
    const [projectID, setProjectID] = useState(1)
    const [timeTaken, setTimeTaken] = useState(0)
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')
    const [timeSheetCreated, setTimesheetCreated] = useState(false)
    const addTimesheetButton = <button type='submit' onClick={createTimesheet} className="border border-slate-600 rounded bg-white hover:shadow-inner hover:bg-blue-400">Add Timesheet</button>
    const disableAddTimesheetButton = <Link to="/"><button className="border border-slate-600 rounded bg-green-400 hover:shadow-inner hover:bg-green-200 w-full">Timesheet Added! Click to go Home.</button></Link>

    function updateEmployeeID(e: ChangeEvent<HTMLSelectElement>) {
        let value = e.target.value
        let valueNumber = +value
        setEmployeeID(valueNumber)
    }

    function updateProjectID(e: ChangeEvent<HTMLSelectElement>) {
        let value = e.target.value
        let valueNumber = +value
        setProjectID(valueNumber)
    }

    function updateTimeTaken(e: ChangeEvent<HTMLInputElement>) {
        let value = e.target.value
        let valueNumber = +value
        setTimeTaken(valueNumber)
    }

    function updateDescription(e: ChangeEvent<HTMLTextAreaElement>) {
        setDescription(e.target.value)
    }

    function createTimesheet() {
        if (timeTaken > 24 || timeTaken < 1) {
            setMessage("Time Taken must be between 1 and 24 hours.")
            return
        }
        if (description.length > 100) {
            setMessage("Description cannot be longer than 100 characters.")
            return
        }
        let newTimesheet = {
            employee_id: employeeID,
            project_id: projectID,
            time_taken: timeTaken,
            description: description
        }
        fetch(`${baseURL}/timesheets`, {
            method: "POST",
            body: JSON.stringify(newTimesheet),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            res.json()
            if (res.status === 201) {
                setMessage(`You have successfully added your timesheet!`)
                setTimesheetCreated(true);
            }
            else (
                setMessage('Please complete all fields.')
            )
        }).then(data => {
        })
    }

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-2 text-blue-500 font-bold">Add Timesheet</h1>
                <form onSubmit={submitHandler} className="grid grid-cols-2 gap-y-2">
                    <label htmlFor="employeeID" className="font-bold text-slate-600 items-end pt-1">Employee ID:</label>
                    <select onChange={updateEmployeeID} name="employeeID" id="employeeID" className="p-1 rounded">
                        {employees.map(employee => <option key={employee.id}>{employee.id}</option>)}
                    </select>
                    <label htmlFor="projectID" className="font-bold text-slate-600 pt-1">Project ID:</label>
                    <select onChange={updateProjectID} name="projectID" id="projectID" className="p-1 rounded">
                        {projects.map(project => <option key={project.id}>{project.id}</option>)}
                    </select>
                    <label htmlFor="timeTaken" className="font-bold text-slate-600 pt-1">Time Taken:</label>
                    <input onChange={updateTimeTaken} name="timeTaken" id="TimeTaken" type="integer" placeholder="hours (max 24)" className="p-1 rounded" />
                    <label htmlFor="description" className="font-bold text-slate-600 pt-1">Description:</label>
                    <textarea onChange={updateDescription} name="description" id="description" placeholder="Describe what you achieved (Maximum 100 characters)" className="p-1 rounded" />
                    <div className={!timeSheetCreated ? "text-red-500" : "text-green-500"}>{message}</div>
                    {!timeSheetCreated ? addTimesheetButton : disableAddTimesheetButton}
                </form>
            </div>
        </div>
    )
}