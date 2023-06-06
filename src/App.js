import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import SharedLayout from "./components/SharedLayout"
import Home from "./pages/Home"
import Item from "./components/Item"
import Error from "./pages/Error"
import ItemsPizza from "./pages/ItemsPizza"
import ItemsBurger from "./pages/ItemsBurger"
import ItemsToOrder from "./pages/ItemsToOrder"
import ItemsSideDish from "./pages/ItemsSideDish"
import ItemsSauces from "./pages/ItemsSauces"

const App = () => {
    const [order, setOrder] = useState({})
    const size = order

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <SharedLayout order={order} />} >
                        <Route index element={ <Home /> } />
                        <Route path="/pizza" element={ <ItemsPizza /> } />
                        <Route path="/burger" element={ <ItemsBurger /> } />
                        <Route path="/minutky" element={ <ItemsToOrder /> } />
                        <Route path="/prilohy" element={ <ItemsSideDish /> } />
                        <Route path="/omacky" element={ <ItemsSauces /> } />
                        <Route path="/jidlo/:foodId" element={ <Item adItem={order => setOrder(order)} /> } />
                        <Route path="*" element={ <Error /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App