import { useState } from "react";

export function useLocalStorageTheme() {
    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem("themeValue")) return localStorage.getItem("themeValue");

        return 'dark';
    });

    function handleToggleTheme() {
        setTheme(prevState => {
            if (prevState === 'dark') {
                localStorage.setItem("themeValue", 'light');
                return 'light';
            } else {
                localStorage.setItem("themeValue", 'dark');
                return 'dark';
            }
        });
    }

    return [theme, handleToggleTheme];
}