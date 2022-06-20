import React from 'react';
import { connect } from 'react-redux';
import newAction from '../redux/actions';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    // handleChange = ({ target }) => {
    //     const { name } = target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;

    //     this.setState({
    //         [name]: value,
    //     });
    // }

    // handleClick = () => {
    //     const { firstDispatch } = this.props;
    //     firstDispatch(this.state)
    //     // history.push('/home')
    // }
    render() {
        const { email, password } = this.state;
        const { login } = this.props;
        return (
            <div className='container-login'>
                <form>
                    <label>
                    Email:
                    <input
                      type="email"
                      value={ email }
                      name="email"
                      onChange={ (ev) => this.setState({ email: ev.target.value }) } />
                    </label>
                    <br/>
                    <label>
                    Password:
                    <input
                      type="password"
                      value={ password }
                      name="password"
                      onChange={ (ev) => this.setState({ password: ev.target.value }) } />
                    </label>
                    <button type="button" onClick={ () => this.props.login({ email, password }) }>Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (state) => dispatch(newAction(state))
});

export default connect(null, mapDispatchToProps)(Login);
