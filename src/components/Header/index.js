import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeManagerContext } from '../../context/ThemeManager';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(ThemeManagerContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button" 
        onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}