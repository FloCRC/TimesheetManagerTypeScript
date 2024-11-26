import { useEffect } from "react"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Timesheets from "./pages/Timesheets"
import Projects from "./pages/Projects"
import Employees from "./pages/Employees"
import AddTimesheet from "./pages/AddTimesheet"
import SingleTimesheet from "./pages/SingleTimesheet"
import SingleProject from "./pages/SingleProject"
import SingleEmployee from "./pages/SingleEmployee"
import { baseURL } from "./constants/global"

export default function App() {

    const [timesheets, setTimesheets] = useState([])
    const [projects, setProjects] = useState([])
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/timesheets`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTimesheets(data.data)
            })

        fetch(`${baseURL}/projects`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setProjects(data.data)
            })

        fetch(`${baseURL}/employees`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setEmployees(data.data)
            })
    }, [])

    return (
        <BrowserRouter>
            <div className="flex flex-col bg-slate-200 h-screen">
                <div className="bg-slate-500 border-b border-slate-700 px-5">
                    <Nav />
                </div>
                <Routes>
                    <Route path="/" element={<Timesheets timesheets={timesheets} />} />
                    <Route path="/timesheets/:timesheetID" element={<SingleTimesheet />} />
                    <Route path="/projects" element={<Projects projects={projects} />} />
                    <Route path="/projects/:projectID" element={<SingleProject />} />
                    <Route path="/employees" element={<Employees employees={employees} />} />
                    <Route path="/employees/:employeeID" element={<SingleEmployee />} />
                    <Route path="/addTimesheet" element={<AddTimesheet employees={employees} projects={projects} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}