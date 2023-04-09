import React, { createContext, useContext, useState } from 'react'
import { lightTheme, borealTheme } from '../components/Themes/Theme.style'
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext<any>('light');

export const ThemeContextProvider: React.FC  = ({ children }: any) => {
    const [isBorealTheme, setIsBorealTheme] = useState(() => {
        const theme = localStorage.getItem('theme')
        if(theme === 'boreal') {
            return 'boreal'
        } else {
            return 'light'
        }
    })

    return (
        <ThemeContext.Provider value={{isBorealTheme, setIsBorealTheme}}>
            <ThemeProvider theme={isBorealTheme === 'boreal' ? borealTheme : lightTheme}>
                {children}
            </ThemeProvider>
         </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const { isBorealTheme, setIsBorealTheme }: any = useContext(ThemeContext);
    
    function changeTheme() {
        if (isBorealTheme === 'boreal') {
            setIsBorealTheme('light');
            localStorage.setItem('theme', 'light');
        }
        if (isBorealTheme === 'light') {
            setIsBorealTheme('boreal');
            localStorage.setItem('theme', 'boreal');
        }
    }

    const theme = localStorage.getItem('theme');

    return {
        changeTheme, theme
    }
}


