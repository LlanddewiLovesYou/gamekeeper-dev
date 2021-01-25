import React, { useEffect } from "react";
import { Root, addPrefetchExcludes } from "react-static";
import { useCurrentUser, UserContext } from "./hooks/useCurrentUser";
import "./app.css";
import { AppContent } from "components/AppContent/AppContent";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const {
    currentUser,
    setCurrentUser,
    validateUser,
    loggedIn,
    setLoggedIn,
  } = useCurrentUser();

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <Root>
      <div className="app__background">
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn }}
        >
          <AppContent />
        </UserContext.Provider>
      </div>
    </Root>
  );
}

export default App;
