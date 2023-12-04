import axios from "axios";
import React, {createContext, useEffect, useState} from "react";

const ContextTheme = createContext();

function ThemeProvider({children}) {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme('dark')
  }
  return(
    <ContextTheme.Provider value={{theme, toggleTheme} }>
      {children}
    </ContextTheme.Provider>
  )
}

export {ContextTheme, ThemeProvider}