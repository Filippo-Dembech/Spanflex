import { createContext, useContext, useEffect, useState } from "react";

const UserParametersContext = createContext();


function UserParametersProvider({ children }) {
  const [span, setSpan] = useState(() => localStorage.getItem("span") || 5);
  const [spanInterval, setSpanInterval] = useState(() => localStorage.getItem("spanInterval") || 1000);
  const [isNumeric, setIsNumeric] = useState(true);
  
  useEffect(() => {
    localStorage.setItem("span", span);
  }, [span])
  
  useEffect(() => {
    localStorage.setItem("spanInterval", spanInterval);
  }, [spanInterval])

  function increaseSpan() {
    setSpan(curr => curr + 1);
  }

  return (
    <UserParametersContext.Provider
      value={{
        span,
        setSpan,
        increaseSpan,
        spanInterval,
        setSpanInterval,
        isNumeric,
        setIsNumeric,
      }}
    >
      {children}
    </UserParametersContext.Provider>
  );
}

function useUserParameters() {
    const context = useContext(UserParametersContext);
    if (context === undefined) throw new Error("useUserParameters() is used outside UserParametersContext");
    return context;
}

export { UserParametersProvider, useUserParameters }