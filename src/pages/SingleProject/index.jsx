import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TimesheetDisplay from "../../components/TimesheetDisplay"

export default function SingleProject() {

    const { projectID } = useParams()
    const [timesheets, setTimesheets] = useState([])
    console.log(projectID)

    useEffect(() => {
        fetch(`http://localhost:8001/api/timesheets/project/${projectID}`)
            .then(res => res.json())
            .then(data => {
                if (data.data != undefined) {
                    setTimesheets(data.data)
                }
            })
    }, [])

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <h1 className="text-2xl py-5 text-blue-500 font-bold">Project {projectID} Timesheets</h1>
                <div className="flex flex-wrap justify-between">
                    {timesheets.map(timesheet => <TimesheetDisplay key={timesheet.id} timesheet={timesheet} />)}
                </div>
            </div>
        </div>
    )
}