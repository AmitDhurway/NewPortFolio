import React, {useState, useEffect} from "react";
import WelcomePage from "./components/WelcomePage.jsx";
import HomePage from "./components/HomePage.jsx";


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
     
     {showWelcome ? (<WelcomePage />) : (<HomePage/>
      )}
      
    </>
  )
}

export default App
