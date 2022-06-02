import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    // const btn = screen.getByRole('button', { name: 'Adicionar' });
    const btn = screen.getByText(/adicionar/i);
    expect(btn).toBeInTheDocument();
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    // const btn = screen.getByText(/adicionar/i);
    // const task = screen.getByLabelText('Tarefa:');

    // userEvent.type(task, 'teste');
    // userEvent.click(btn);

    // expect(screen.getByText('teste')).toBeInTheDocument();

    const tarefa = 'qualquer tarefa';
    const inputText = screen.getByRole('textbox');
    const btn = screen.getByRole('button');

    userEvent.type(inputText, tarefa);
    userEvent.click(btn);
    const salvo = screen.getByText(tarefa);

    expect(inputText).toHaveValue('');
    expect(salvo).toBeInTheDocument();
  });
});
