import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

// Create a context for theme management.
export const ThemeContext = createContext();

// Get initial theme settings from local storage or use default values.
const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || { primary: 'color-1', background: 'bg-1' };

// ThemeProvider component that manages the theme state and provides it to child components.
export const ThemeProvider = ({ children }) => {
    // Use the useReducer hook to manage the theme state with a reducer function.dispatchTheme grab button class name.
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    // Function to handle theme changes. Dispatches actions to update the theme state.
    const themeHandler = (buttonClassName) => {
        dispatchTheme({ type: buttonClassName });
    };

    // Effect to save the current theme settings to local storage whenever the theme changes.
    useEffect(() => {
        localStorage.setItem('themeSettings', JSON.stringify(themeState));
    }, [themeState.primary, themeState.background]);

    // Provide the theme state and handler function to the context consumers.
    return <ThemeContext.Provider value={{ themeState, themeHandler }}>{children}</ThemeContext.Provider>;
};

// Custom hook to access the theme context values.
export const useThemeContext = () => {
    return useContext(ThemeContext);
};
