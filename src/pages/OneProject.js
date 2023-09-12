import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/OneProject.css"

const OneProject = () => {
    const { projektId } = useParams()
    const [data, setData] = useState([])
    const [oneProject, setOneProject] = useState(null)
    const [newTask, setNewTask] = useState({
        name: "",
        info: "",
        date: ""
    })
    const [editingTaskId, setEditingTaskId] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [editedTask, setEditedTask] = useState(null)

    // Načtení projektu z localStorage podle ID
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("projects")) || []
        const foundProject = localStorageData.find(
            (project) => project.id === parseInt(projektId)
        )

        if (!foundProject) {
            // Pokud projekt nebyl nalezen, můžete zobrazit vhodnou zprávu
            setOneProject(null)
        } else {
            setOneProject(foundProject)
        }
    }, [projektId]);

    const toggleTask = (taskId) => {
        if (!oneProject) {
            return
        }

        // Vytvoříme kopii projektu, aby nedošlo k mutaci původního objektu
        const updatedProject = { ...oneProject }

        // Najdeme index úkolu v projektu
        const taskIndex = updatedProject.tasks.findIndex(
            (task) => task.id === taskId
        )

        if (taskIndex === -1) {
            return;
        }

        // Změníme stav úkolu
        updatedProject.tasks[taskIndex].completed = !updatedProject.tasks[taskIndex].completed

        // Aktualizujeme stav v paměti
        setData((prevData) => {
            const updatedData = prevData.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )

            // Aktualizujeme local storage pouze pro tento projekt
            const localStorageData = JSON.parse(localStorage.getItem("projects")) || []
            const updatedLocalStorageData = localStorageData.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )
            localStorage.setItem("projects", JSON.stringify(updatedLocalStorageData))

            return updatedData
        })
    }

    const removeTask = (taskId) => {
        if (!oneProject) {
            return
        }

        // Vytvoříme kopii projektu, aby nedošlo k mutaci původního objektu
        const updatedProject = { ...oneProject }

        // Najdeme index úkolu v projektu
        const taskIndex = updatedProject.tasks.findIndex(
            (task) => task.id === taskId
        )

        if (taskIndex === -1) {
            return;
        }

        // Odstraníme úkol z projektu
        updatedProject.tasks.splice(taskIndex, 1);

        // Aktualizujeme stav v paměti
        setData((prevData) => {
            const updatedData = prevData.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )

            // Aktualizujeme local storage pouze pro tento projekt
            const localStorageData = JSON.parse(localStorage.getItem("projects")) || []
            const updatedLocalStorageData = localStorageData.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )
            localStorage.setItem("projects", JSON.stringify(updatedLocalStorageData))

            return updatedData
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const addNewTask = () => {
        if (!oneProject) {
            return
        }

        // Vytvoříme kopii projektu, aby nedošlo k mutaci původního objektu
        const updatedProject = { ...oneProject }

        // Vytvoříme nový úkol
        const newTaskObject = {
            completed: false,
            date: newTask.date,
            id: updatedProject.tasks.length + 1,
            info: newTask.info,
            name: newTask.name
        };

        // Přidáme nový úkol do projektu
        updatedProject.tasks.push(newTaskObject);

        // Aktualizujeme stav v paměti
        setData((prevData) => {
            const updatedData = prevData.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )

            // Aktualizujeme local storage pouze pro tento projekt
            const localStorageData = JSON.parse(localStorage.getItem("projects")) || []
            const updatedLocalStorageData = localStorageData.map((project) =>
                project.id === updatedProject.id ? updatedProject : project
            )
            localStorage.setItem("projects", JSON.stringify(updatedLocalStorageData))

            // Resetujeme stav nového úkolu
            setNewTask({
                name: "",
                info: "",
                date: ""
            });
            setShowForm(false);

            return updatedData
        })
    }

    const editTask = (taskId) => {
        const taskToEdit = oneProject.tasks.find((task) => task.id === taskId);
        setEditedTask(taskToEdit);
        setEditingTaskId(taskId);
    };

    const handleTaskChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const saveEditedTask = () => {
        if (!editedTask) {
            return;
        }

        const updatedTasks = oneProject.tasks.map((task) =>
            task.id === editedTask.id ? editedTask : task
        );

        setOneProject((prevProject) => ({
            ...prevProject,
            tasks: updatedTasks,
        }));

        // Uložit do localStorage
        const localStorageData = JSON.parse(localStorage.getItem("projects")) || [];
        const updatedLocalStorageData = localStorageData.map((project) =>
            project.id === oneProject.id ? { ...project, tasks: updatedTasks } : project
        );
        localStorage.setItem("projects", JSON.stringify(updatedLocalStorageData));

        setEditingTaskId(null);
    };

    if (!oneProject) {
        return <div>Projekt nebyl nalezen.</div>
    }

    const { id, name, date, info, tasks } = oneProject

    return (
        <article key={id} className="oneProject">
            <h1 className="oneProjectH1">{name}</h1>
            <p>Datum konání: {date}</p>
            <p>Informace o projektu: {info}</p>
            <h2 className="tasksHeader">Seznam úkolů:</h2>
            <ul>
                {tasks.map((task, index) => (
                    <div className="task" key={index}>
                        {editingTaskId === task.id ? (
                            <div className="task">
                                {/* Editační formulář */}
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedTask.name}
                                        onChange={handleTaskChange}
                                    />
                                    <textarea
                                        name="info"
                                        value={editedTask.info}
                                        onChange={handleTaskChange}
                                    />
                                    <input
                                        type="date"
                                        name="date"
                                        value={editedTask.date}
                                        onChange={handleTaskChange}
                                    />
                                    <button type="button" onClick={saveEditedTask}>
                                        Uložit
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div>
                                <div>
                                    <h3 className="oneTaskHeader">{task.name}</h3>
                                    <p> Deadline: {task.date}</p>
                                </div>
                                <p className="infoHeader">Popis úkolu:</p>
                                <p>{task.info}</p>
                            </div>
                        )}
                        <p
                            onClick={() => toggleTask(task.id)}
                            style={{
                                cursor: "pointer",
                                color: task.completed ? "green" : "red",
                                textDecoration: task.completed ? "line-through" : "none"
                            }}
                        >
                            {task.completed ? "Dokončeno" : "Nedokončeno"}
                        </p>
                        <button onClick={() => removeTask(task.id)}>Odstranit úkol</button>
                        <button onClick={() => editTask(task.id)}>Upravit</button>
                    </div>
                ))}
            </ul>
            {showForm ? (
                <div className="taskForm">
                    <h2>Přidat nový úkol</h2>
                    <label>Název úkolu:
                        <input type="text" name="name" value={newTask.name} onChange={handleInputChange} />
                    </label>
                    <label>Popis úkolu:
                        <textarea name="info" value={newTask.info} onChange={handleInputChange}></textarea>
                    </label>
                    <label>Datum:
                        <input type="date" name="date" value={newTask.date} onChange={handleInputChange} />
                    </label>
                    <button onClick={addNewTask}>Přidat úkol</button>
                </div>
            ) : (
                <button onClick={() => setShowForm(true)}>Přidat úkol</button>
            )}
        </article>
    )
}

export default OneProject;
