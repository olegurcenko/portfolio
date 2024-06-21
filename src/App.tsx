import React from 'react';
import { AppRouter } from './routes';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const App: React.FC = () => {
  return (
    <>
      <Header/>
      <AppRouter/>
      <Footer/>
    </>
  );
}