import React, { useState } from "react"
import "../styles/NewProject.css"

const NewProject = () => {
    const [projectName, setProjectName] = useState("")
    const [projectDate, setProjectDate] = useState("")
    const [projectInfo, setProjectInfo] = useState("")
    const [projectType, setProjectType] = useState("prace")
    const [tasks, setTasks] = useState([])
    const [newTaskName, setNewTaskName] = useState("")
    const [newTaskInfo, setNewTaskInfo] = useState("")
    const [newTaskDate, setNewTaskDate] = useState("")
    const [showNewTaskForm, setShowNewTaskForm] = useState(false)
    const [nextId, setNextId] = useState(1)

    const handleAddTask = () => {
        if (newTaskName && newTaskDate) {
        const newTask = {
            id: nextId,
            name: newTaskName,
            info: newTaskInfo,
            date: newTaskDate,
            completed: false
        }
        setTasks([...tasks, newTask])
        setNewTaskName("")
        setNewTaskInfo("")
        setNewTaskDate("")
        setNextId(nextId + 1)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const projectData = {
            id: Date.now(),
            name: projectName,
            date: projectDate,
            info: projectInfo,
            type: projectType, 
            tasks: [...tasks],
        }

        const projects = JSON.parse(localStorage.getItem('projects')) || []
        projects.push(projectData)
        localStorage.setItem('projects', JSON.stringify(projects))

        setProjectName("")
        setProjectDate("")
        setProjectInfo("")
        setProjectType("prace")
        setTasks([])
        setNextId(1)
    }

    return (
        <div className="new-project">
        <h2 className="formHeader">Formulář pro nové projekty</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="projectName">Název projektu:</label>
            <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="projectDate">Datum projektu:</label>
            <input
                type="date"
                id="projectDate"
                value={projectDate}
                onChange={(e) => setProjectDate(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="projectInfo">Informace o projektu:</label>
            <textarea
                id="projectInfo"
                value={projectInfo}
                onChange={(e) => setProjectInfo(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label htmlFor="projectType">Typ projektu:</label>
            <select
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
            >
                <option value="prace">Práce</option>
                <option value="skola">Škola</option>
                <option value="osobni">Osobní</option>
            </select>
            </div>

            <h2>Seznam úkolů:</h2>
            <div>
            {tasks.map((task, index) => (
                <div key={index}>
                {index + 1}. Název: {task.name}, Deadline: {task.date}
                <p> --- Popis: {task.info}</p>
                </div>
            ))}
            </div>

            {showNewTaskForm ? (
            <div className="form-group">
                <label htmlFor="newTaskName">Název úkolu:</label>
                <input
                type="text"
                id="newTaskName"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                />

                <label htmlFor="newTaskInfo">Popis úkolu:</label>
                <textarea
                type="text"
                id="newTaskInfo"
                value={newTaskInfo}
                onChange={(e) => setNewTaskInfo(e.target.value)}
                />    

                <label htmlFor="newTaskDate">Deadline:</label>
                <input
                type="date"
                id="newTaskDate"
                value={newTaskDate}
                onChange={(e) => setNewTaskDate(e.target.value)}
                />

                <button type="button" onClick={handleAddTask}>
                Přidat úkol
                </button>
            </div>
            ) : (
            <button
                type="button"
                onClick={() => setShowNewTaskForm(true)}
            >
                Přidat úkol
            </button>
            )}

            <button type="submit">Uložit projekt</button>
        </form>
        </div>
    );
};

export default NewProject;
