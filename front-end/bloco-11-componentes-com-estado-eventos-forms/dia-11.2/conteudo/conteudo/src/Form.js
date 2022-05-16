import React from 'react';
import Describe from './Describe';
import Select from './Select';

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
                <Describe handleChange={ this.handleChange }/>

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

                <Select />
               <input type='file' />


            </div>
        )
    }
}

export default Form;
