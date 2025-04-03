import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'
import Admin from './pages/admin/Admin.tsx'
import "./assets/locales/i18n.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
