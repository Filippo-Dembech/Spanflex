import { createContext, useContext, useState } from "react";

const UserParametersContext = createContext();

function UserParametersProvider({ children }) {
  const [span, setSpan] = useState(5);
  const [showSpeed, setShowSpeed] = useState(2000);
  const [isNumeric, setIsNumeric] = useState(true);

  return (
    <UserParametersContext.Provider
      value={{
        span,
        setSpan,
        showSpeed,
        setShowSpeed,
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
    if (context === "undefined") throw new Error("useUserParameters() is used outside UserParametersContext");
    return context;
}

export { UserParametersProvider, useUserParameters }