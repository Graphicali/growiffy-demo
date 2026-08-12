import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigation } from "@/components/Navigation"
import { Home } from "@/pages/Home"
import { CalculatorPage } from "@/pages/Calculator"
import { MenusPage } from "@/pages/Menus"
import { ContactPage } from "@/pages/Contact"

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
