import React from 'react';

class Form extends React.Component {
    state = {
        describe: '',
        nome: '',
        email: '',
        idade: 0,
        vai: false,
        select: 'quarta',
    }

    handleChange = ({ target }) => {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({ 
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <label>
                    Descrição
                   <textarea
                   className='form'
                   name='describe'
                   value={ this.state.describe }
                   onChange={ this.handleChange }
                    />
                </label>

                <label>
                    nome
                    <input
                    className='form'
                    name='nome'
                    type='text'
                    value={ this.state.nome }
                    onChange={ this.handleChange }
                    />
                </label>

                <label>
                    e-mail
                    <input
                    className='form'
                    name='email' 
                    type='email'
                    value={ this.state.email }
                    onChange={ this.handleChange }
                    />
                </label>

                <label>
                    Idade
                    <input
                    className='form'
                    name='idade'
                    type='number'
                    value={ this.state.idade }
                    onChange={ this.handleChange }
                    />
                </label>

                <label>
                    Vai Comparecer?
                    <input
                    className='form'
                    name='vai'
                    type='checkbox' 
                    checked={ this.state.vai }
                    onChange={ this.handleChange }
                    />
                </label>

                <label>
                    Qual dia?
                    <select className='form' name='select' value={ this.state.select } onChange={ this.handleChange }>
                        <option value='segunda'>Segunda</option>
                        <option value='terça'>Terça</option>
                        <option value='quarta'>Quarta</option>
                        <option value='quinta'>Quinta</option>
                        <option value='sexta'>Sexta</option>
                    </select>
                </label>
                {/* não deu certo o FileInput */}
               <input type='file' />


            </div>
        )
    }
}

export default Form;
