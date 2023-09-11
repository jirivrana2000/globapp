import React, { useState, useEffect } from "react"
import "../styles/AllProjects.css"
import { Link } from "react-router-dom"

const Work = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("projects")) || []
        setData(storedData)
    }, [])

    const removeProject = (id) => {
        const filteredProjects = data.filter((oneProject) => oneProject.id !== id)
        setData(filteredProjects)
        localStorage.setItem("projects", JSON.stringify(filteredProjects))
    }

    const workProjects = data.filter((oneProject) => oneProject.type === "prace");

    return (
        <div className="allProjectContainer">
            <h2 className="oneProjectH2">Pracovní projekty:</h2>
            <div>
                {workProjects.map((oneProject) => {
                    return (
                        <div key={oneProject.id} id={oneProject.id} className="oneOfProjects">
                            <Link to={`/projekt/${oneProject.id}`}>
                                <h2 className="oneTaskHeader">{oneProject.name}</h2>
                                <p className="oneTaskDate">Datum konání: {oneProject.date}</p>
                                <p>{oneProject.info}</p>
                            </Link>
                            <button type="button" onClick={() => removeProject(oneProject.id)}>
                                vymazat
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work