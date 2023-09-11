import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/OneProject.css"

const OneProject = () => {
    const { projektId } = useParams()
    const [data, setData] = useState([])
    const [oneProject, setOneProject] = useState(null)
  
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
        updatedProject.tasks[taskIndex].completed = !updatedProject.tasks[taskIndex]
            .completed
    
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

                <div>
                    <div>
                        <h3 className="oneTaskHeader">{task.name}</h3>
                        <p> Deadline: {task.date}</p>
                    </div>
                    <p className="infoHeader">Popis úkolu:</p>
                    <p>{task.info}</p>
                </div>

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
                
            </div>
          ))}
        </ul>
      </article>
    )
  }
  
  export default OneProject;