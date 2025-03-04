import { createContext, useContext, useState } from "react";
import { pages } from "../pages/pages";

const PageTurnerContext = createContext();

function PageTurnerProvider({children}) {
    const [ currentPage, setCurrentPage ] = useState(pages.homepage);

    return (
        <PageTurnerContext.Provider value={{
            currentPage,
            setCurrentPage,
        }}>
            {children}
        </PageTurnerContext.Provider>
    )
}

function usePageTurner() {
    const context = useContext(PageTurnerContext);
    if (context === "undefined") throw new Error("usePageTurner() outsize PageTurner context");
    return context;
}

export { PageTurnerProvider, usePageTurner }