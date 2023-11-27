import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { HomePage } from "./pages/HomePage"
import { Menu } from "./components/navbar/Nav"

function App() {

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
        
        
    )
}

export default App
