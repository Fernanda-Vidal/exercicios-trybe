import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verificando se existe um botão', () => {
//   render(<App />)
//   const btn = screen.getByRole('button');
//   expect(btn).toBeInTheDocument()
// })

test('Verificando se existem dois botões', () => {
  render(<App />)
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(2)
})

test('Verificando existe um botão de enviar', () => {
  render(<App />)
  const btnSend = screen.getByTestId('id-send')
  expect(btnSend).toBeInTheDocument()
  expect(btnSend).toHaveProperty('type', 'button')
  expect(btnSend).toHaveValue('Enviar')
})

test('Verificando se o botão e o campo e-mail estão funcionando', () => {
  render(<App />)

  const email_user = 'email@email.com';

  const inputEmail = screen.getByRole('textbox')
  const h2 = screen.getByRole('heading')
  expect(inputEmail).toBeInTheDocument()
  expect(h2).toBeInTheDocument()
  expect(h2).toHaveTextContent(/valor:/i)

  const btnSend = screen.getByRole('button', { name: 'Enviar'});
  
  userEvent.type(inputEmail, email_user)
  userEvent.click(btnSend)

  expect(h2).toHaveTextContent(`Valor: ${email_user}`)
  expect(inputEmail).toHaveTextContent('')
})