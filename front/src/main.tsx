import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route, Routes} from "react-router";
import './index.css'
import App from './App.tsx'
import LoginPage from "./pages/login.tsx"
import SignupPage from "./pages/signup.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)


