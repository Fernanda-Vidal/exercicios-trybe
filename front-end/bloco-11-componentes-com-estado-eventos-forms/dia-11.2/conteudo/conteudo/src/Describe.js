import React from 'react';

class Describe extends React.Component {
    render() {
        const { value, handleChange } = this.props;
                
        return (
            <label>
                    Descrição
                   <textarea
                   className='form'
                   name='describe'
                   value={ value }
                   onChange={ handleChange }
                   />
                </label>
        )
    }
}

export default Describe;