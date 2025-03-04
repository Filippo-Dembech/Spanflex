import { useState } from "react"
import Homepage from "./pages/Homepage"
import SettingsPage from "./pages/SettingsPage"
import { pages } from "./pages/pages";
import { usePageTurner } from './context/PageContext';

function App() {
  
  const { currentPage } = usePageTurner()
  
  if (currentPage === pages.settingsPage) return <SettingsPage />
  
  return <Homepage />

}

export default App
