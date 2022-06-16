
import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './theme'
import Card from './Card';
import Fragments from './Fragments';

function App () {
  const [ token, setToken ] = useState();

  useEffect(() => {
    setTimeout(() => {
      setToken('ijsiajsiajoajsaoj')
    }, 4000)
  }, [setToken])

  return (
    <ThemeContext.Provider value={{ ...themes.primary, token }}>
      <Fragments />
     <Card />
    </ThemeContext.Provider>
  )
}

export default App;
