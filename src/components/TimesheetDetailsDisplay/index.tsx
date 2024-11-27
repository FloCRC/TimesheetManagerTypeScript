type Props = {
    projectID: number
    employeeFirstName: string
    employeeLastName: string
    timeTaken: number
    description: string
    projectTimeRemaining: number
    dateCreated: string
}

export default function TimesheetDetailsDisplay({ projectID, employeeFirstName, employeeLastName, timeTaken, description, projectTimeRemaining, dateCreated }: Props) {

    const date = new Date(dateCreated).toDateString()

    return (
        <>
            <div className="flex flex-col border border-slate-600 rounded bg-white my-2 p-3 w-full">
                <div className="pb-2">
                    <div className="text-slate-600">Employee: <span className="font-bold text-blue-500">{employeeFirstName} {employeeLastName}</span></div>
                    <div className="text-slate-600">Project ID: <span className="font-bold text-blue-500">{projectID}</span></div>
                    <div className="text-slate-600">Date Created: <span className="font-bold text-blue-500">{date}</span></div>
                    <div className="text-slate-600">Time Taken: <span className="font-bold text-blue-500">{timeTaken} Hours</span></div>
                    <div className="text-slate-600">Estimated time Remaining on Project: <span className="font-bold text-blue-500">{projectTimeRemaining} Hours</span></div>
                    <div className="text-slate-600">Description:</div>
                    <div className="font-semibold text-slate-600">{description}</div>
                </div>
            </div>
        </>
    )
}