import { IoMdArrowRoundBack } from "react-icons/io";
import { usePageTurner } from "../context/PageContext"
import { pages } from "./pages";

export default function SettingsPage() {
    
    const { setCurrentPage } = usePageTurner();
    return (
        <div className="page">
            <button onClick={() => setCurrentPage(pages.homepage)} className="absolute top-3 left-3 text-xl bg-amber-400 text-amber-50 p-1 rounded-full hover:bg-amber-500 duration-200"><IoMdArrowRoundBack /></button>
            SETTINGS PAGE
        </div>
    )
}