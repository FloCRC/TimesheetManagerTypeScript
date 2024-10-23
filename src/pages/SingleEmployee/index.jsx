import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import TimesheetDisplay from "../../components/TimesheetDisplay"

export default function SingleEmployee() {

    const { employeeID } = useParams()
    const [timesheets, setTimesheets] = useState([])
    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8001/api/employees/${employeeID}`)
            .then(res => res.json())
            .then(data => {
                setFirstName(data.data.first_name)
                setLastName(data.data.last_name)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8001/api/timesheets/employee/${employeeID}`)
            .then(res => res.json())
            .then(data => {
                if (data.message != "This employee has no timesheets.") {
                    setTimesheets(data.data)
                }
                else {
                    setMessage(`No timesheets submitted yet.`)
                }
            })
    }, [])

    return (
        <div className="flex justify-center bg-slate-200">
            <div className="flex flex-col w-[1000px] mx-5">
                <div className="flex justify-between items-center py-2">
                    <h1 className="text-2xl py-5 text-blue-500 font-bold">{firstName} {lastName}'s' Timesheets</h1>
                    <Link to={`/todaysTimesheets/${employeeID}`} className="p-2 w-40 font-semibold border border-black rounded bg-white text-slate-600 hover:shadow-inner hover:bg-blue-200">Today's Timesheets</Link>
                </div>
                <div className="flex flex-wrap justify-between">
                    {timesheets.map(timesheet => <TimesheetDisplay key={timesheet.id} timesheet={timesheet} />)}{message}
                </div>
            </div>
        </div>
    )
}