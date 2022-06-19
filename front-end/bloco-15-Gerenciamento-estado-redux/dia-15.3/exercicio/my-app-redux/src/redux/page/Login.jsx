import React from 'react';
import { connect } from 'react-redux';
import newAction from '../actions';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    handleClick = () => {
        const { firstDispatch } = this.props;
        firstDispatch(this.state)
        // history.push('/home')
    }
    render() {
        const { email, password } = this.state;
        // const { firstDispatch } = this.props;
        return (
            <div className='container-login'>
                <form>
                    <label>
                    Email:
                    <input type="email" value={ email } name="email" onChange={ this.handleChange } />
                    </label>
                    <br/>
                    <label>
                    Password:
                    <input type="password" value={ password } name="password" onChange={ this.handleChange } />
                    </label>
                    <button type="submit" onClick={ this.handleClick }>Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    firstDispatch: (state) => dispatch(newAction(state))
});

export default connect(mapDispatchToProps)(Login);
