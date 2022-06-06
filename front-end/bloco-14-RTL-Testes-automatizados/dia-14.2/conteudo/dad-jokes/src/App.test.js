import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica que, quando recebo uma piada, exibo ela na tela', async () => {
  // global.fetch = (url) => {
  //   return Promise.resolve({
  //     json: () => Promise.resolve({ 
  //       id: "Yg3orWS7wkb",
  //       joke: "I'm sorry. Hi sorry, I'm dad",
  //       status: 200,
  //      })
  //   })
  // }

  // Outra forma: possibilita verificação se o mock é chamado:
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: "Yg3orWS7wkb",
      joke: "I'm sorry. Hi sorry, I'm dad",
      status: 200,
    })
  })

  render(<App />);
  const renderedJoke = await screen.findByText("I'm sorry. Hi sorry, I'm dad")
  expect(renderedJoke).toBeInTheDocument()
});

/////////////////////////////// Outra forma:
afterEach(() => jest.clearAllMocks());

it('verifica se chama uma piada', async () => {
  const joke = {
    id: "Yg3orWS7wkb",
    joke: "I'm sorry. Hi sorry, I'm dad",
    status: 200,
  }

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  render(<App />)
  const url = 'https://icanhazdadjoke.com/';
  const renderedJoke = await screen.findByText(joke.joke)
  expect(renderedJoke).toBeInTheDocument()
  expect(global.fetch).toHaveBeenCalled()
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(url, { headers: { Accept: 'application/json' }})
})

test('Alterando o valor dos campos input e testando o valor guardado', () => {
  const joke = {
    id: "Yg3orWS7wkb",
    joke: "I'm sorry. Hi sorry, I'm dad",
    status: 200,
  }

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  render(<App />)

  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument()
  expect(inputNome).toHaveValue('')

  userEvent.type(inputNome,'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe')
  
  const inputEmail = screen.getByRole('textbox', { name: /email/i })
  expect(inputEmail).toBeInTheDocument()
  expect(inputEmail).toHaveValue('')

  userEvent.type(inputEmail, 'email@email.com')
  expect(inputEmail).toHaveValue('email@email.com')
})

test('Verifica a existência e funcionamento do botão', () => {
  const joke = {
    id: "Yg3orWS7wkb",
    joke: "I'm sorry. Hi sorry, I'm dad",
    status: 200,
  }

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  render(<App />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Enviar')

  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  const inputEmail = screen.getByRole('textbox', { name: /email/i })
  const h1 = screen.getByRole('heading')

  userEvent.type(inputNome, 'Estudante')
  userEvent.type(inputEmail, 'email@email.com')
  userEvent.click(button)

  expect(h1).toBeInTheDocument()
  expect(h1).toHaveTextContent('Estudante: email@email.com')
  expect(inputNome).toHaveValue('')
  expect(inputEmail).toHaveValue('')
})