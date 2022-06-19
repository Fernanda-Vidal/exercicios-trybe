import React from 'react';

class Login extends React.Component {
    state = {
        inputEmail: '',
        inputPassword: '',
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }
    render() {
        const { inputEmail, inputPassword } = this.state;
        return (
            <div className='container-login'>
                <form>
                    <label>
                    Email:
                    <input type="email" value={ inputEmail } name="inputEmail" onChange={ this.handleChange } />
                    </label>
                    <br/>
                    <label>
                    Password:
                    <input type="password" value={ inputPassword } name="inputPassword" onChange={ this.handleChange } />
                    </label>
                    <button type="button">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
