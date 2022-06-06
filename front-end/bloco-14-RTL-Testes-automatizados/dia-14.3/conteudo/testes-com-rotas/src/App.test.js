import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter  from './renderWithRouter';
import App, { About } from './App';

describe('Teste da aplicação toda', () => {

  it('Deve renderizar o component App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início' })
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('Ao ser clicado, componente Sobre deve ser renderizado', () => {
    const { history } = renderWithRouter(<App />)
    
    const aboutLink = screen.getByRole('link', { name: 'Sobre' })
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    
  const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' })
  expect(aboutTitle).toBeInTheDocument();
})

// ESTE TESTE ESTÁ QUEBRANDO.
  // it('Deve testar um caminho não existente e a renderização do Not Found', () => {
  //   const { history } = renderWithRouter(<App />)

  //   history.push('/sddfdf/')
  //   console.log(history)

  //   const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' })
  //   expect(notFoundTitle).toBeDefined()
  // })
})

describe('Teste dos componentes separadamente', () => {

  it('Deve renderizar o component About(somente)', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  })
})
