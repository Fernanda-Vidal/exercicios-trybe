import React from "react";

class Forms extends React.Component {
    state = {
        inputValue: '',
        inputEmail: '',
        inputCPF: 0,
        inputAdress: '',
        inputCity: '',
        inputSelect: { value: 'SP' },
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
        const { inputValue, inputEmail, inputCPF, inputAdress, inputCity, inputSelect } = this.state;
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
                    <br/>
                    <label id="inputCPF">
                    CPF:
                        <input type="number" value={ inputCPF } name="inputCPF" maxLength="11" onChange={ this.handleChange } required />
                    </label>
                    <br/>
                    <label id="inputAdress">
                    Endereço:
                        <input type="text" value={ inputAdress } name="inputAdress" maxLength="200" onChange={ this.handleChange } />
                    </label>
                    <br/>
                    <label id="inputCity">
                    Cidade:
                        <input type="text" value={ inputCity } name="inputCity" maxLength="28" />
                    </label>
                    <br/>
                    <label id="inputSelect">
                        <select value={ inputSelect } name="inputSelect" onChange={ this.handleChange} >
                            <option value="SP">SP</option>
                            <option value="MA">MA</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="SE">SE</option>
                            <option value="GO">GO</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        )
    }
}

export default Forms;
