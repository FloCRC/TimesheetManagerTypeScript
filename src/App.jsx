import { useEffect } from "react"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Timesheets from "./pages/Timesheets"
import Projects from "./pages/Projects"
import Employees from "./pages/Employees"
import AddTimesheet from "./pages/AddTimesheet"

export default function App() {

    const [timesheets, setTimesheets] = useState([])
    const [projects, setProjects] = useState([])
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/api/timesheets")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTimesheets(data.data)
            })

        fetch("http://localhost:8001/api/projects")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setProjects(data.data)
            })

        fetch("http://localhost:8001/api/employees")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setEmployees(data.data)
            })
    }, [])

    return (
        <BrowserRouter>
            <div className="flex flex-col">
                <div className="bg-slate-200 border-b border-slate-700 px-5">
                    <Nav />
                </div>
                <Routes>
                    <Route path="/" element={<Timesheets timesheets={timesheets} />} />
                    <Route path="/Projects" element={<Projects projects={projects} />} />
                    <Route path="/Employees" element={<Employees employees={employees} />} />
                    <Route path="/AddTimesheet" element={<AddTimesheet employees={employees} projects={projects} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}