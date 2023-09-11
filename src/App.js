import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import AllProjects from "./pages/AllProjects"
import NewProject from "./pages/NewProject"
import Work from "./pages/Work"
import School from "./pages/School"
import Personal from "./pages/Personal"
import Error from "./pages/Error"
import OneProject from "./pages/OneProject";


const App = () => {



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <SharedLayout />} >
                    <Route index element={ <AllProjects /> } />
                    <Route path="/novyprojekt" element={ <NewProject /> } />
                    <Route path="/prace" element={ <Work /> } />
                    <Route path="/skola" element={ <School /> } />
                    <Route path="/osobni" element={ <Personal /> } />
                    <Route path="/projekt/:projektId" element={ <OneProject /> } />
                    <Route path="*" element={ <Error /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App