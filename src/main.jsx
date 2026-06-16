import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// theme stylesheets
import './assets/themes/mat.css'
import './assets/themes/cu.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
