import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ClientesCadastrados extends React.Component {
    render() {
        const { userLogin } = this.props;
        // if (!userLogin.email || !userLogin.password) return <span>Login não efetuado</span>
        return(
            <div>
                { (!userLogin.email || !userLogin.password) ? <span>Login não efetuado</span> : <span>Seja Bem Vindo</span> }
               <br/>
               <Link to="/register">New Client</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userLogin: state.reducer,
})

export default connect(mapStateToProps)(ClientesCadastrados);
