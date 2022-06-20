import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ClientesCadastrados extends React.Component {
    render() {
        const { userLogin, registerClients } = this.props;
        if (!userLogin.email || !userLogin.password)
        return <div>
            Login não efetuado
            <br/>
            <Link to="/register">New Client</Link>
            <Link to="/login">Login</Link>
            </div>
        if (registerClients < 1)
        return (
            <div>
                <span>Nenhum cliente cadastrado!</span>
                <Link to="/register">New Client</Link>
                {/* { (!userLogin.email || !userLogin.password) && <span>Login não efetuado</span> } */}
                {/* { registerClients.map((client) => console.log(client))} */}
               <br/>
            </div>
        );
        return (
            <div>
                <Link to="/register">New Client</Link>
                <div>
                    {registerClients.map(({nameClient, ageClient, emailClient }) => (
                        <div>
                            <ul>
                                <li>
                          {`${nameClient} - ${ageClient} years old - ${emailClient}`}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userLogin: state.reducer,
    registerClients: state.registerReducer,
})

export default connect(mapStateToProps)(ClientesCadastrados);
