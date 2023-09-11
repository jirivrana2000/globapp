import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h2>404</h2>
            <p>Stránka nebyla nalezena.</p>
            <p><Link to="/">Zpět na domovskou stránku</Link></p>
        </div>
    )
}

export default Error