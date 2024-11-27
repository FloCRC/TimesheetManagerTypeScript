import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TimesheetDisplay from "../../components/TimesheetDisplay"
import { baseURL } from "../../constants/global"

interface Timesheet {
    id: number
    project_id: number
    employee_id: number
    time_taken: number
    description: string
}

export default function SingleProject() {

    const { projectID } = useParams()
    const [timesheets, setTimesheets] = useState<Array<Timesheet>>([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch(`${baseURL}/timesheets/project/${projectID}`)
            .then(res => res.json())
            .then(data => {
                if (data.message != "This project has no timesheets.") {
                    setTimesheets(data.data)
                }
                else {
                    setMessage('This project has no timesheets yet.')
                }
            })
    }, [])

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-2 text-blue-500 font-bold">Project {projectID} Timesheets</h1>
                <div className="flex flex-wrap justify-between text-slate-600">
                    {timesheets.map(timesheet => <TimesheetDisplay key={timesheet.id} timesheet={timesheet} />)}{message}
                </div>
            </div>
        </div>
    )
}