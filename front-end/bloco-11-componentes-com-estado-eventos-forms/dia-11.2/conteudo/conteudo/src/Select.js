import React from 'react';


class Select extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <label>
                    Qual dia?
                    <select className='form' name='select' value={ value } onChange={ handleChange }>
                        <option value='segunda'>Segunda</option>
                        <option value='terça'>Terça</option>
                        <option value='quarta'>Quarta</option>
                        <option value='quinta'>Quinta</option>
                        <option value='sexta'>Sexta</option>
                    </select>
                </label>
        )
    }
}
export default Select;
