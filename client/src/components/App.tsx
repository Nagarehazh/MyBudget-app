import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/default';
import GlobalStyles from '../styles/globals';
import { Container } from '../theme/MainContainerStyles';
import {
  Home,
  Login,
  Register,
} from '.'


function App() {
  return (
    <Container>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </ThemeProvider>

    </Container>
  );
}

export default App;
