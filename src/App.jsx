import Homepage from "./pages/Homepage";
import SettingsPage from "./pages/SettingsPage";
import { pages } from "./pages/pages";
import { usePageTurner } from "./context/PageContext";
import TutorialPage from "./pages/TutorialPage";
import IntervalPresenter from "./IntervalPresenter";
import DojoPage from "./pages/DojoPage";

function App() {
    const { currentPage } = usePageTurner();

  if (currentPage === pages.settingsPage) return <SettingsPage />
  if (currentPage === pages.tutorialPage) return <TutorialPage />
  if (currentPage === pages.dojoPage) return <DojoPage />

  return <Homepage />;
}

export default App;
