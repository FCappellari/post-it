import React, { useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

import { ThemeManagerContext } from './context/ThemeManager';
import { useLocalStorageTheme } from './hooks/useLocalStorageTheme';

function App() {
  const [ theme, handleToggleTheme ] = useLocalStorageTheme();

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeManagerContext.Provider value={{ selectedTheme: theme, onToggleTheme: handleToggleTheme}}>
        <GlobalStyle />
        <Layout />
      </ThemeManagerContext.Provider>
    </ThemeProvider>
  );
};

export default App;
