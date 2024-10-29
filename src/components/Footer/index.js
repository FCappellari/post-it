import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeManagerContext } from '../../context/ThemeManager';

export default function Footer() {
  const { onToggleTheme, selectedTheme } = useContext(ThemeManagerContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button" 
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}