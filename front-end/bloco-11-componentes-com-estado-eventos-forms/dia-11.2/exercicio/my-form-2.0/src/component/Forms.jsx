import React from "react";

class Forms extends React.Component {
    state = {
        inputValue: '',
    }



    handleChange = ({ target }) => {
        this.setState({ inputValue: target.value.toUpperCase() })
    }

    render () {
        const { inputValue } = this.state;
        return(
            <form>
                <fieldset>
                    <input type="text" value={ inputValue } name="inputValue" maxLength="40" onChange={ this.handleChange } required/>
                </fieldset>
            </form>
        )
    }
}

export default Forms;
