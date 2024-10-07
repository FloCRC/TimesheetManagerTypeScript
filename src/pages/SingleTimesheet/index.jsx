import { useEffect, useState } from "react"
import TimesheetDetailsDisplay from "../../components/TimesheetDetailsDisplay"
import { useParams } from "react-router-dom"

export default function SingleTimesheet() {

    const { timesheetID } = useParams()
    const [projectID, setProjectID] = useState('')
    const [employeeFirstName, setEmployeeFirstName] = useState('')
    const [employeeLastName, setEmployeeLastName] = useState('')
    const [timeTaken, setTimeTaken] = useState('')
    const [description, setDescription] = useState('')
    const [projectTimeRemaining, setProjectTimeRemaining] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [timesheet, setTimesheet] = useState('')


    useEffect(() => {
        fetch(`http://localhost:8001/api/timesheets/${timesheetID}`)
            .then(res => res.json())
            .then(data => {
                setProjectID(data.data.project_id)
                setEmployeeFirstName(data.data.employee.first_name)
                setEmployeeLastName(data.data.employee.last_name)
                setTimeTaken(data.data.time_taken)
                setDescription(data.data.description)
                setProjectTimeRemaining(data.data.project.expected_time_remaining)
                setDateCreated(data.data.created_at)
                setTimesheet(data.data)
            })
    }, [])

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-5 text-blue-500 font-bold">Timesheet {timesheetID}</h1>
                <div className="flex flex-wrap justify-between">
                    <TimesheetDetailsDisplay
                        key={timesheet.id}
                        projectID={projectID}
                        employeeFirstName={employeeFirstName}
                        employeeLastName={employeeLastName}
                        timeTaken={timeTaken}
                        description={description}
                        projectTimeRemaining={projectTimeRemaining}
                        dateCreated={dateCreated} />
                </div>
            </div>
        </div>
    )
}