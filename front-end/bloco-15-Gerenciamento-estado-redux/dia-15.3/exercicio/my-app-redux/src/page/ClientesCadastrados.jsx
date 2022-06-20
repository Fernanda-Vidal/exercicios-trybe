import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteClient } from "../redux/actions";

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
        if (registerClients.length < 1)
        return (
            <div>
                <span>Nenhum cliente cadastrado!</span>
                <Link to="/register">New Client</Link>
               <br/>
            </div>
        );
        return (
            <div>
                <div>
                    {registerClients.map((clt, i) => (
                        <div>
                        <ul>
                        <li>
                        {`${clt.nameClient} - ${clt.ageClient} years old - ${clt.emailClient}`}
                        <button type="button" onClick={ () => this.props.delete(clt)}>Remove</button>
                        </li>
                        </ul>
                        </div>
                    ))}
                    <Link to="/register">New Client</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userLogin: state.reducer,
    registerClients: state.registerReducer,
})

const mapDispatchToProps = (dispatch) => ({
    delete: (ev) => dispatch(deleteClient(ev))
})

export default connect(mapStateToProps,mapDispatchToProps)(ClientesCadastrados);
