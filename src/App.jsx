import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import Unavailable from "./pages/misc/Unavailable"

export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "mat")

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <Routes>
            <Route path="*" element={<Unavailable />} />
        </Routes>
    )
}
