import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";

import GlobalStyle from './lib/assets/css/GlobalStyle';
import Routes from './services/Routes'
import ThemeSwitcher from './lib/components/ThemeSwitcher.jsx';
import { dark, light } from './lib/assets/css/themes';

const App = () => {
    const darkTheme = dark;
    const lightTheme = light

    const [ theme, setTheme ] = useState(lightTheme)

    function toggleTheme(){
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
    }

    return(
    <ThemeProvider theme={ theme }>
        <ThemeSwitcher toggleTheme={toggleTheme}/>
        <GlobalStyle />
        <Routes />
    </ThemeProvider>
    )
}

export default App;
