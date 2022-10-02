import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/default';
import GlobalStyles from '../styles/globals';
import { Container } from '../theme/MainContainerStyles';
import {
  Home,
  Balance,
} from '.'


function App() {
  return (
    <Container>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/balance" element={<Balance />} />
          </Routes>
        </main>
      </ThemeProvider>

    </Container>
  );
}

export default App;
