import React from "react";
import { connect } from "react-redux";
import { registerClient } from "../redux/actions";

class Register extends React.Component {
    state = {
        nameClient: '',
        ageClient: 0,
        emailClient:'',
    }

    render() {
        const { nameClient, ageClient, emailClient } = this.state;
        return (
            <div>
                <h1>New Register</h1>
                <label>
                    Name:
                <input
                  type="text"
                  value={ nameClient }
                  name="nameClient"
                  onChange={ (ev) => this.setState({ nameClient: ev.target.value })}  />
                  </label>
                <br/>
                <label>
                    Age:
                    <input
                      type="number"
                      value={ ageClient }
                      name="ageClient"
                      onChange={ (ev) => this.setState({ ageClient: ev.target.value })} /> 
                </label>
                <br/>
                <label>
                    Email:
                    <input
                    type="email"
                    value={ emailClient }
                    name="emailCliente"
                    onChange={ (ev) => this.setState({ emailClient: ev.target.value })} />
                </label>
                <button
                  type="button"
                  onClick={ () => this.props.registerClient({ nameClient, ageClient, emailClient })}
                  >Send</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerClient: (state) => dispatch(registerClient(state))
})

export default connect(null, mapDispatchToProps)(Register);
