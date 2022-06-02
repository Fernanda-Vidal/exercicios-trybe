import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const btn = screen.getByText(/adicionar/i);
    const task = screen.getByLabelText('Tarefa:');
    listTodo.forEach((item) => {
      userEvent.type(task, item);
      userEvent.click(btn);
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="blabs" />);
    expect(screen.getByText('blabs')).toBeInTheDocument();
  });
});
