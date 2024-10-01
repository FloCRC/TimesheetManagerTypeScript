import { useEffect } from "react"
import { useState } from "react"
import TimesheetDisplay from "./components/TimesheetDisplay"
import Nav from "./components/Nav"

export default function App() {

    const [timesheets, setTimesheets] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/api/timesheets")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTimesheets(data.data)
                console.log(data.data)
            })
    }, [])

    return (
        <>
            <div className="flex flex-col">
                <div className="bg-slate-200 border-b border-slate-700">
                    <Nav />
                </div>
                <body className="flex justify-center bg-slate-200 h-screen">
                    <div className="flex flex-col w-[1000px] mx-5">
                        <h1 className="text-2xl py-5">Timesheets</h1>
                        <div className="flex flex-wrap justify-between">
                            {timesheets.map(timesheet => <TimesheetDisplay timesheet={timesheet} />)}
                        </div>
                    </div>
                </body>
            </div>
        </>
    )
}