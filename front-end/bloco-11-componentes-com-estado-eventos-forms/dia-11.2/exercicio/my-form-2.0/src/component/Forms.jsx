import React from "react";

class Forms extends React.Component {
    state = {
        inputValue: '',
        inputEmail: '',
    }
    
    handleChange = ({ target }) => {
        const { name } = target;
        if (name === 'inputValue') {
            this.setState({ inputValue: target.value.toUpperCase() })
        } else {           
            const value = target.type === 'checkbox' ? target.checked : target.value;
            
            this.setState({
                [name]: value,
            })
        }
    }


    render () {
        const { inputValue, inputEmail } = this.state;
        return(
            <form>
                <fieldset>
                    <label id="inputValue">
                    Nome:
                    <input type="text" value={ inputValue } name="inputValue" maxLength="40" onChange={ this.handleChange } required/>
                    </label>
                    <br/>
                    <label id="inputEmail">
                    E-mail:
                    <input type="email" value={ inputEmail } name="inputEmail" maxLength="50" onChange={ this.handleChange } required/>
                    </label>
                </fieldset>
            </form>
        )
    }
}

export default Forms;
